import reducer, { INIT_STATE } from "./reducer";
import * as actions from "./actions";

describe("courses reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(INIT_STATE);
  });

  it("should handle fetch list", () => {
    const data = {
      type: actions.FETCH_SUCCESS,
      payload: {
        success: true,
        sections: [
          {
            section_id: 1,
            title: "officiis",
            sort_order: 0,
            lectures: [
              {
                lecture_quiz_id: 1,
                type: null,
                title: "Eligendi nobis aperiam incidunt non aliquam aut at.",
                description:
                  "Voluptates tenetur commodi vero ullam. Ea eveniet nostrum perspiciatis totam dignissimos.",
                contenttext: null,
                media: {
                  id: 2,
                  video_title: "raw_division-826089",
                  video_name: "division.js.mp4",
                  video_type: "mp4",
                  duration: "00:00:04",
                  image_name: "raw_division-826089.jpg",
                  video_tag: "curriculum",
                  uploader_id: 2,
                  course_id: 1,
                  processed: 1,
                  created_at: null,
                  updated_at: null,
                  url:
                    "https://getkibble.stage.etd24.pl//storage/course/1/raw_division-826089.mp4",
                  type: "VIDEO",
                },
                sort_order: 0,
                publish: 1,
                resources: [
                  {
                    id: 2,
                    file_name: "raw_division-489054",
                    file_title: "raw_division-489054",
                    file_type: "pdf",
                    file_extension: "pdf",
                    file_size: "4113874",
                    duration: null,
                    file_tag: "curriculum_resource",
                    uploader_id: 2,
                    course_id: 1,
                    processed: 1,
                    created_at: null,
                    updated_at: null,
                    url:
                      "https://getkibble.stage.etd24.pl//storage/course/1/raw_division-489054.pdf",
                  },
                  {
                    id: 3,
                    file_name: "raw_division-419712",
                    file_title: "raw_division-419712",
                    file_type: "pdf",
                    file_extension: "pdf",
                    file_size: "4113874",
                    duration: null,
                    file_tag: "curriculum_resource",
                    uploader_id: 2,
                    course_id: 1,
                    processed: 1,
                    created_at: null,
                    updated_at: null,
                    url:
                      "https://getkibble.stage.etd24.pl//storage/course/1/raw_division-419712.pdf",
                  },
                  {
                    id: 4,
                    file_name: "http://google.com",
                    file_title: "Google",
                    file_type: "link",
                    file_extension: "link",
                    file_size: "4113874",
                    duration: null,
                    file_tag: "curriculum_resource_link",
                    uploader_id: 2,
                    course_id: 1,
                    processed: 1,
                    created_at: null,
                    updated_at: null,
                    url:
                      "https://getkibble.stage.etd24.pl//storage/course/1/http://google.com.link",
                  },
                ],
                created_at: "2021-01-08T15:04:05.000000Z",
                updated_at: "2021-01-08T15:04:05.000000Z",
                duration: null,
              },
              {
                lecture_quiz_id: 2,
                type: null,
                title:
                  "Asperiores officiis inventore repudiandae minus deleniti.",
                description:
                  "Quis enim inventore officia voluptatem. Nesciunt et qui quibusdam qui maiores eveniet facere. Ea vel iusto omnis aut. Neque impedit rerum culpa. Dolore exercitationem nemo aut dolorem fuga recusandae rerum ipsam.",
                contenttext: null,
                media: {
                  id: 1,
                  file_name: "raw_division-889569",
                  file_title: "raw_division-889569",
                  file_type: "mp3",
                  file_extension: "mp3",
                  file_size: "4113874",
                  duration: "00:02:49",
                  file_tag: "curriculum",
                  uploader_id: 2,
                  course_id: 1,
                  processed: 1,
                  created_at: null,
                  updated_at: null,
                  url:
                    "https://getkibble.stage.etd24.pl//storage/course/1/raw_division-889569.mp3",
                  type: "AUDIO",
                },
                sort_order: 1,
                publish: 1,
                resources: [
                  {
                    id: 2,
                    file_name: "raw_division-489054",
                    file_title: "raw_division-489054",
                    file_type: "pdf",
                    file_extension: "pdf",
                    file_size: "4113874",
                    duration: null,
                    file_tag: "curriculum_resource",
                    uploader_id: 2,
                    course_id: 1,
                    processed: 1,
                    created_at: null,
                    updated_at: null,
                    url:
                      "https://getkibble.stage.etd24.pl//storage/course/1/raw_division-489054.pdf",
                  },
                ],
                created_at: "2021-01-08T15:04:05.000000Z",
                updated_at: "2021-01-08T15:04:05.000000Z",
                duration: null,
              },
              {
                lecture_quiz_id: 3,
                type: null,
                title: "Aspernatur sit praesentium odit deserunt excepturi.",
                description:
                  "Atque fugiat minus sunt optio voluptatem veritatis. Qui minima rerum quia totam facilis sed beatae. Beatae qui quas labore iste quia quas doloribus. Sint consectetur similique molestiae.",
                contenttext:
                  "\n     <p>Woodlands payment <b>Osgiliath tightening</b>. Barad-dur follow belly comforts tender tough bell? Many that live deserve death. Some that die deserve life. Outwitted teatime grasp defeated before stones reflection corset seen animals Saruman's call?</p>\n     <p>Ligulas step drops both? You shall not pass! <strong>Tender respectable</strong> success Valar impressive unfriendly bloom scraped? Branch hey-diddle-diddle pony trouble'll sleeping during jump Narsil.</p>\n     <p>Curse you and all the halflings! Deserted anytime <em>Lake-town burned caves balls.</em>L Smoked lthilien forbids Thrain?</p>\n     <p>Ravens wonder wanted runs me crawl gaining lots faster! Khazad-dum surprise baby season ranks. I bid you all a very fond farewell.</p>\n     <p>Delay freezes Gollum. <u>Let the Ring-bearer decide.</u> Bagshot Row chokes pole pauses immediately orders taught éored musing three-day? Disease rune repel source fire Goblinses already?</p>\n     <p>What about second breakfast? Nags runt near Lindir lock discover<span style='text-decoration: underline;'>uuuu underline</span> level? Andûril breathe waited flatten union.</p>\n     <p>I think we should get off the road. Penalty sight splintered Misty Mountain mithril? Unrest lasts rode league bears absence Bracegirdle athletic contract nice parent slowed?</p>\n",
                media: {
                  content:
                    "\n     <p>Woodlands payment <b>Osgiliath tightening</b>. Barad-dur follow belly comforts tender tough bell? Many that live deserve death. Some that die deserve life. Outwitted teatime grasp defeated before stones reflection corset seen animals Saruman's call?</p>\n     <p>Ligulas step drops both? You shall not pass! <strong>Tender respectable</strong> success Valar impressive unfriendly bloom scraped? Branch hey-diddle-diddle pony trouble'll sleeping during jump Narsil.</p>\n     <p>Curse you and all the halflings! Deserted anytime <em>Lake-town burned caves balls.</em>L Smoked lthilien forbids Thrain?</p>\n     <p>Ravens wonder wanted runs me crawl gaining lots faster! Khazad-dum surprise baby season ranks. I bid you all a very fond farewell.</p>\n     <p>Delay freezes Gollum. <u>Let the Ring-bearer decide.</u> Bagshot Row chokes pole pauses immediately orders taught éored musing three-day? Disease rune repel source fire Goblinses already?</p>\n     <p>What about second breakfast? Nags runt near Lindir lock discover<span style='text-decoration: underline;'>uuuu underline</span> level? Andûril breathe waited flatten union.</p>\n     <p>I think we should get off the road. Penalty sight splintered Misty Mountain mithril? Unrest lasts rode league bears absence Bracegirdle athletic contract nice parent slowed?</p>\n",
                  type: "TEXT",
                },
                sort_order: 2,
                publish: 1,
                resources: [
                  {
                    id: 2,
                    file_name: "raw_division-489054",
                    file_title: "raw_division-489054",
                    file_type: "pdf",
                    file_extension: "pdf",
                    file_size: "4113874",
                    duration: null,
                    file_tag: "curriculum_resource",
                    uploader_id: 2,
                    course_id: 1,
                    processed: 1,
                    created_at: null,
                    updated_at: null,
                    url:
                      "https://getkibble.stage.etd24.pl//storage/course/1/raw_division-489054.pdf",
                  },
                ],
                created_at: "2021-01-08T15:04:05.000000Z",
                updated_at: "2021-01-08T15:04:05.000000Z",
                duration: null,
              },
            ],
            created_at: "2021-01-08T15:04:05.000000Z",
            updated_at: "2021-01-08T15:04:05.000000Z",
          },
        ],
        message: "Courses retrieved successfully",
      },
    };

    expect(reducer(undefined, data)).toEqual({
      loading: false,
      error: false,
      list: data.payload.sections,
    });
  });
});
