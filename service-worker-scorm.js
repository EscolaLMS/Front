/// <reference lib="webworker" />

importScripts("modules/jszip.js");
importScripts("modules/mimetypes.js");
importScripts("modules/txml.js");

const t_xml = txml();
const FOLDER_PREFIX = "__scorm__";
const resolvers = {};

const getSCORMDetails = (xml, sco = "index.html") => {
  const result = {
    version: xml.includes("2004")
      ? "2004"
      : xml.includes("AICC")
      ? "AICC"
      : "1.2",
    resources: {},
  };
  try {
    const dom = t_xml.simplify(t_xml.parse(xml));
    result.resources = Array.isArray(dom.manifest.resources.resource)
      ? dom.manifest.resources.resource
      : [dom.manifest.resources.resource];
  } catch (error) {
    console.error("Error parsing SCORM XML:", error);
  }
  return result;
};

self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  self.skipWaiting(); // Activate the service worker immediately after installation.
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activated.");
  event.waitUntil(self.clients.claim()); // Ensure the service worker takes control of the page.
});

self.addEventListener("message", async (event) => {
  const url = event.data;
  const urlTrimmed = url.replace(/([^\w ]|_)/g, "");
  const request = await fetch(url);
  const blob = await request.blob();

  const PREFIX = `${FOLDER_PREFIX}/${urlTrimmed}/${FOLDER_PREFIX}`;
  if (!resolvers[urlTrimmed]) {
    resolvers[urlTrimmed] = new JSZip();
  }
  const zip = resolvers[urlTrimmed];

  zip.loadAsync(blob).then(async function () {
    const xml = await zip.file("imsmanifest.xml")?.async("string");
    if (!xml) {
      console.error("imsmanifest.xml not found in SCORM ZIP.");
      return;
    }

    const scormObj = getSCORMDetails(xml);
    scormObj.PREFIX = PREFIX;

    const clients = await self.clients.matchAll();
    for (const client of clients) {
      console.log("Sending SCORM object to client:", scormObj);
      client.postMessage({
        scormObj,
        urlTrimmed,
        msg: "loaded zip",
        file: event.data,
      });
    }
  });
});

// Fetching content using Service Worker
self.addEventListener("fetch", async (e) => {
  if (e.request.url.includes(FOLDER_PREFIX)) {
    const id = e.request.url.split(FOLDER_PREFIX)[1].split("/").join("");
    const zip = resolvers[id];

    if (zip) {
      const uri = e.request.url.split(FOLDER_PREFIX)[2].substr(1).split("?")[0];
      const ext = uri.split(".").pop();

      const mime = Mimes[ext];

      if (zip.files[uri]) {
        e.respondWith(
          (async () => {
            const responseBody = await zip.file(uri).async("blob");
            return new Response(responseBody, {
              headers: { "Content-Type": mime },
            });
          })()
        );
      } else {
        console.log("zip url not exists", uri);
        e.respondWith(
          new Response("File not found in SCORM ZIP", {
            status: 404,
            statusText: "Not Found",
            headers: { "Content-Type": "text/plain" },
          })
        );
      }
    } else {
      console.log("zip url not exists", uri);
      e.respondWith(
        new Response("No SCORM ZIP found for this request", {
          status: 404,
          statusText: "Not Found",
          headers: { "Content-Type": "text/plain" },
        })
      );
    }
  }
});
