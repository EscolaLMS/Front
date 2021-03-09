function configYbug(): void | null {
  if (window.location.hostname !== "localhost") {
    //<!-- Ybug code -->
    (function () {
      window.ybug_settings = { id: "dvjcs2bf20yq7y013ssr" };
      const ybug = document.createElement("script");
      ybug.type = "text/javascript";
      ybug.async = true;
      ybug.src =
        "https://widget.ybug.io/button/" + window.ybug_settings.id + ".js";
      const s: HTMLScriptElement = document.getElementsByTagName("script")[0];
      s?.parentNode && s.parentNode.insertBefore(ybug, s);
    })();
    //<!-- Ybug code end -->
  }
  return null;
}

export default configYbug();
