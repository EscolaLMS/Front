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
        data: {
          id: 4,
          created_at: "2021-06-25T15:02:30.000000Z",
          updated_at: "2021-06-25T15:02:30.000000Z",
          title:
            "Enim voluptatem est doloremque facilis ipsa et soluta suscipit.",
          summary:
            "Quidem fuga tempora voluptatibus itaque.\n========================================\n\nUt velit animi molestiae dolore. Sapiente ab sed repellendus autem voluptate. Adipisci pariatur quibusdam nam consequatur. Vero culpa id qui eligendi ullam in.\n\n>  Quam ad nemo sunt aspernatur quae cum qui. Deserunt labore libero harum omnis labore officiis. Mollitia dignissimos molestias et tenetur quam ab repellendus.\n\n* In alias similique iure est sunt repellat quod.\n* Officia tempore pariatur minima voluptatum vel.\n* Itaque sed omnis nisi in quaerat voluptatibus voluptatibus.\n\n1. Natus repudiandae quos molestiae.\n2. Ab itaque assumenda vero voluptate molestias nam.\n3. Dicta sed occaecati maxime sit dignissimos.\n\nHic nam consectetur dicta quisquam laboriosam assumenda et.\n===========================================================\n\n* Et repellendus eum omnis minima minus.\n* Reiciendis ea est ut sint totam.\n* Nobis qui et deserunt.\n\n1. Reprehenderit suscipit ad et.\n2. Et ex consectetur error itaque fugit itaque.\n3. Quia molestiae incidunt aut repellat similique doloremque.\n\nIpsa quis non asperiores neque pariatur corporis qui.\n=====================================================\n\n1. Rerum est enim omnis fugit recusandae est.\n2. Voluptas temporibus necessitatibus sed possimus est sunt.\n3. Omnis laudantium placeat facere enim maxime minima.",
          image_path: "course/4/delectus.jpg",
          video_path: "course/4/delectus.mp4",
          base_price: 0,
          duration: "10 hours",
          author_id: 7,
          active: false,
          subtitle: "Et est temporibus et officiis quis quod quia tenetur.",
          language: "en",
          description:
            "Vel voluptatibus beatae nulla delectus delectus soluta.\n=======================================================\n\nOmnis reiciendis qui accusamus. Minima perspiciatis nostrum non quidem.\n\n>  In omnis nesciunt eius. Dolores eos saepe quaerat voluptas. Ipsam non autem nisi omnis consequatur.\n\n1. Quia aut libero officiis consequatur sit.\n2. Voluptatem repellat consectetur quo enim excepturi aperiam.\n3. Quo repellat veritatis provident rerum sed quae odio molestiae.",
          level: "regular",
          image_url:
            "https://escola-lms-api.stage.etd24.pl//storage/course/4/delectus.jpg",
          video_url:
            "https://escola-lms-api.stage.etd24.pl//storage/course/4/delectus.mp4",
          lessons: [
            {
              id: 49,
              created_at: "2021-06-25T15:02:30.000000Z",
              updated_at: "2021-06-25T15:02:30.000000Z",
              title: "repellat",
              duration: "45 minutes",
              order: 7,
              course_id: 4,
              active: true,
              summary:
                "Quia aut illum consequatur tenetur.\n===================================\n\nMolestias id dolor est illo est error quod. Et animi doloribus quam dolorem voluptas alias qui. Ut quia et consequatur et. Ut aspernatur aut doloremque fuga omnis molestias et.\n\n1. Iste sed explicabo aliquid odit ut provident.\n2. Modi rerum quisquam quidem eligendi.\n3. Ab consequuntur sit ipsa harum quisquam doloremque est est.",
              topics: [
                {
                  id: 25,
                  created_at: "2021-06-25T15:02:30.000000Z",
                  updated_at: "2021-06-25T15:02:30.000000Z",
                  title: "libero",
                  lesson_id: 49,
                  topicable_id: 10,
                  topicable_type:
                    "EscolaLms\\Courses\\Models\\TopicContent\\Image",
                  order: 2,
                  active: true,
                  preview: false,
                  topicable: {
                    id: 10,
                    created_at: "2021-06-25T15:02:30.000000Z",
                    updated_at: "2021-06-25T15:02:30.000000Z",
                    value: "topic/25/fugit.jpg",
                    width: 640,
                    height: 480,
                    url: "https://escola-lms-api.stage.etd24.pl//storage/topic/25/fugit.jpg",
                  },
                },
                {
                  id: 112,
                  created_at: "2021-06-25T15:02:57.000000Z",
                  updated_at: "2021-06-25T15:02:57.000000Z",
                  title: "Speak the Words Set",
                  lesson_id: 49,
                  topicable_id: 70,
                  topicable_type:
                    "EscolaLms\\Courses\\Models\\TopicContent\\H5P",
                  order: 0,
                  active: true,
                  preview: false,
                  topicable: {
                    id: 70,
                    created_at: "2021-06-25T15:02:57.000000Z",
                    updated_at: "2021-06-25T15:02:57.000000Z",
                    value: "9",
                  },
                },
              ],
            },
            {
              id: 43,
              created_at: "2021-06-25T15:02:30.000000Z",
              updated_at: "2021-06-25T15:02:30.000000Z",
              title: "sit",
              duration: "12 minutes",
              order: 5,
              course_id: 4,
              active: false,
              summary:
                "Officia reprehenderit magnam aspernatur facere nesciunt laudantium consequuntur.\n================================================================================\n\nIure et sed numquam eos sit soluta esse voluptatem. Vel consectetur ipsam blanditiis molestiae. Eos in officia est et ea. Consectetur magnam sunt sed quae ipsa.\n\n* Esse dolore nobis autem.\n* Quasi minima sit expedita voluptatem.\n* Et omnis quos ipsa vel delectus.\n\nEligendi cupiditate debitis voluptas iste qui et omnis.\n=======================================================\n\nVoluptatem delectus dolor neque veritatis. Officia velit fugiat ratione voluptates natus tempore. Soluta expedita sed qui ipsum. Ut sapiente et ex id.\n\n>  Facilis rerum cum quaerat consequatur sint. Quis aut suscipit molestiae consequuntur aut officia. Ad minima autem magni qui. Iusto inventore natus sed nihil in.\n\n* Doloremque doloribus doloribus rerum.\n* Reprehenderit voluptatem eos doloremque cupiditate at.\n* Placeat occaecati excepturi voluptate sunt dolores.\n\n1. Accusantium repellat eaque distinctio autem dolorem.\n2. Ad rerum libero est atque ut labore.\n3. Molestias accusamus voluptatem eaque.",
              topics: [
                {
                  id: 22,
                  created_at: "2021-06-25T15:02:30.000000Z",
                  updated_at: "2021-06-25T15:02:30.000000Z",
                  title: "voluptatem",
                  lesson_id: 43,
                  topicable_id: 1,
                  topicable_type:
                    "EscolaLms\\Courses\\Models\\TopicContent\\Video",
                  order: 8,
                  active: true,
                  preview: false,
                  topicable: {
                    id: 1,
                    created_at: "2021-06-25T15:02:30.000000Z",
                    updated_at: "2021-06-25T15:02:30.000000Z",
                    value: "topic/22/deserunt.mp4",
                    poster: "topic/22/deserunt.jpg",
                    width: 640,
                    height: 480,
                    url: "https://escola-lms-api.stage.etd24.pl//storage/topic/22/deserunt.mp4",
                    poster_url:
                      "https://escola-lms-api.stage.etd24.pl//storage/topic/22/deserunt.mp4",
                  },
                },
                {
                  id: 113,
                  created_at: "2021-06-25T15:02:57.000000Z",
                  updated_at: "2021-06-25T15:02:57.000000Z",
                  title: "Accordion",
                  lesson_id: 43,
                  topicable_id: 71,
                  topicable_type:
                    "EscolaLms\\Courses\\Models\\TopicContent\\H5P",
                  order: 0,
                  active: true,
                  preview: false,
                  topicable: {
                    id: 71,
                    created_at: "2021-06-25T15:02:57.000000Z",
                    updated_at: "2021-06-25T15:02:57.000000Z",
                    value: "45",
                  },
                },
              ],
            },
            {
              id: 45,
              created_at: "2021-06-25T15:02:30.000000Z",
              updated_at: "2021-06-25T15:02:30.000000Z",
              title: "quam",
              duration: "18 minutes",
              order: 8,
              course_id: 4,
              active: true,
              summary:
                "Sed nihil et tempora omnis numquam.\n===================================\n\nDolores nemo minus dolores veritatis doloremque commodi. Aut ipsam at ipsam qui in. Ut consequatur placeat optio est rem sunt. Vero quis odit consequatur sed rerum consequatur.\n\n>  Error rerum non totam assumenda officia beatae. Blanditiis sunt facere excepturi quaerat. Natus accusamus delectus eum ullam. Sunt autem asperiores aspernatur sit.\n\n1. Dolor ut id quasi aliquam quisquam.\n2. Eveniet quo ea mollitia similique nisi odit.\n3. Quidem ut voluptates ad assumenda sed dolores.",
              topics: [
                {
                  id: 23,
                  created_at: "2021-06-25T15:02:30.000000Z",
                  updated_at: "2021-06-25T15:02:30.000000Z",
                  title: "fugiat",
                  lesson_id: 45,
                  topicable_id: 5,
                  topicable_type:
                    "EscolaLms\\Courses\\Models\\TopicContent\\OEmbed",
                  order: 7,
                  active: true,
                  preview: false,
                  topicable: {
                    id: 5,
                    created_at: "2021-06-25T15:02:30.000000Z",
                    updated_at: "2021-06-25T15:02:30.000000Z",
                    value: "https://soundcloud.com/howardstern/davidletterman",
                  },
                },
                {
                  id: 114,
                  created_at: "2021-06-25T15:02:57.000000Z",
                  updated_at: "2021-06-25T15:02:57.000000Z",
                  title: "Personality Quiz",
                  lesson_id: 45,
                  topicable_id: 72,
                  topicable_type:
                    "EscolaLms\\Courses\\Models\\TopicContent\\H5P",
                  order: 0,
                  active: true,
                  preview: false,
                  topicable: {
                    id: 72,
                    created_at: "2021-06-25T15:02:57.000000Z",
                    updated_at: "2021-06-25T15:02:57.000000Z",
                    value: "14",
                  },
                },
              ],
            },
            {
              id: 47,
              created_at: "2021-06-25T15:02:30.000000Z",
              updated_at: "2021-06-25T15:02:30.000000Z",
              title: "dolores",
              duration: "30 minutes",
              order: 6,
              course_id: 4,
              active: true,
              summary:
                "Ad voluptatibus saepe ut voluptatem nisi dignissimos enim nulla.\n================================================================\n\nEum explicabo beatae sint vero odit eos. Velit quia aut pariatur mollitia. Rem quis temporibus qui dolor sint provident. Quis quod nihil dicta sint.\n\n>  Repudiandae eaque dolores sint quas. Nam vel et excepturi voluptates nulla autem est. Ut quae vel quae neque omnis sed omnis.",
              topics: [
                {
                  id: 24,
                  created_at: "2021-06-25T15:02:30.000000Z",
                  updated_at: "2021-06-25T15:02:30.000000Z",
                  title: "accusamus",
                  lesson_id: 47,
                  topicable_id: 6,
                  topicable_type:
                    "EscolaLms\\Courses\\Models\\TopicContent\\RichText",
                  order: 5,
                  active: true,
                  preview: true,
                  topicable: {
                    id: 6,
                    created_at: "2021-06-25T15:02:30.000000Z",
                    updated_at: "2021-06-25T15:02:30.000000Z",
                    value:
                      "Nemo asperiores ut perspiciatis quod enim.\n==========================================\n\nRatione et corporis officia aut. Modi minus distinctio eum qui enim. Doloremque dolore ad repellendus non ipsa quo ut. Molestiae ipsum labore inventore optio est.\n\n1. Ab non sunt laboriosam minima nihil qui consectetur omnis.\n2. Perferendis consequatur dolor debitis.\n3. Est qui eos cum labore.\n\nHarum alias et facilis.\n=======================\n\n1. Iure fuga aliquam aut non.\n2. Corrupti voluptas qui consequatur eos.\n3. Iure laudantium quae labore aut.\n\nQuos quia aliquam quibusdam aut suscipit.\n=========================================",
                  },
                },
                {
                  id: 115,
                  created_at: "2021-06-25T15:02:57.000000Z",
                  updated_at: "2021-06-25T15:02:57.000000Z",
                  title: "Advanced fill the blanks",
                  lesson_id: 47,
                  topicable_id: 73,
                  topicable_type:
                    "EscolaLms\\Courses\\Models\\TopicContent\\H5P",
                  order: 0,
                  active: true,
                  preview: false,
                  topicable: {
                    id: 73,
                    created_at: "2021-06-25T15:02:57.000000Z",
                    updated_at: "2021-06-25T15:02:57.000000Z",
                    value: "2",
                  },
                },
              ],
            },
            {
              id: 51,
              created_at: "2021-06-25T15:02:30.000000Z",
              updated_at: "2021-06-25T15:02:30.000000Z",
              title: "similique",
              duration: "45 minutes",
              order: 2,
              course_id: 4,
              active: false,
              summary:
                "Nam vel ducimus qui quia illum expedita et consequatur.\n=======================================================\n\nSint voluptas iste voluptatem ea beatae aspernatur voluptate. Incidunt ea reprehenderit quisquam est facere. Laudantium harum nam repudiandae magni iure quisquam autem.\n\n>  Fugiat ab quaerat qui qui. Velit quidem qui vero earum autem quos perspiciatis. Incidunt quaerat commodi qui.\n\n* Distinctio et dignissimos suscipit distinctio rerum.\n* Voluptas rerum magni soluta id et illo necessitatibus.\n* Quibusdam dolor maiores nemo autem qui quisquam architecto.\n\n1. Dolores est molestias dolores ut eos.\n2. Provident ullam consequatur officia corporis vel itaque.\n3. Commodi sequi fugiat et et maxime.\n\nCorporis asperiores nihil labore harum est modi.\n================================================\n\n>  Ad minus aut magnam eligendi qui quis. Unde natus sit animi modi excepturi. Nostrum enim ex occaecati. Officiis non excepturi ipsam et aut.",
              topics: [
                {
                  id: 26,
                  created_at: "2021-06-25T15:02:30.000000Z",
                  updated_at: "2021-06-25T15:02:30.000000Z",
                  title: "numquam",
                  lesson_id: 51,
                  topicable_id: 7,
                  topicable_type:
                    "EscolaLms\\Courses\\Models\\TopicContent\\RichText",
                  order: 9,
                  active: true,
                  preview: false,
                  topicable: {
                    id: 7,
                    created_at: "2021-06-25T15:02:30.000000Z",
                    updated_at: "2021-06-25T15:02:30.000000Z",
                    value:
                      "Magnam libero placeat illo est rerum necessitatibus voluptates.\n===============================================================\n\nSed inventore accusantium nostrum nemo. Accusamus dignissimos architecto autem provident ipsa error. Itaque voluptas dolorum incidunt voluptas.\n\n* Illum tempora cumque minima nisi eius temporibus repellendus provident.\n* Ipsa debitis animi non est perspiciatis aut.\n* Voluptate eos magni sint id ad nostrum nostrum.\n\n1. Dolorem officia aut ducimus itaque explicabo quidem voluptatibus.\n2. Sunt tenetur possimus quae ducimus laudantium eos.\n3. Consectetur molestiae sed veniam ut.",
                  },
                },
                {
                  id: 116,
                  created_at: "2021-06-25T15:02:57.000000Z",
                  updated_at: "2021-06-25T15:02:57.000000Z",
                  title: "Find Multiple Hotspots",
                  lesson_id: 51,
                  topicable_id: 74,
                  topicable_type:
                    "EscolaLms\\Courses\\Models\\TopicContent\\H5P",
                  order: 0,
                  active: true,
                  preview: false,
                  topicable: {
                    id: 74,
                    created_at: "2021-06-25T15:02:57.000000Z",
                    updated_at: "2021-06-25T15:02:57.000000Z",
                    value: "26",
                  },
                },
              ],
            },
            {
              id: 53,
              created_at: "2021-06-25T15:02:30.000000Z",
              updated_at: "2021-06-25T15:02:30.000000Z",
              title: "praesentium",
              duration: "34 minutes",
              order: 9,
              course_id: 4,
              active: true,
              summary:
                "Illo ut dolores dolore id laborum.\n==================================\n\nMolestiae animi voluptatum unde beatae magnam neque vel. Numquam et ut illum voluptatem quasi veritatis provident. Id vel ea quaerat consectetur. Excepturi iure rerum aut tenetur et consectetur.\n\nAmet assumenda voluptatem aliquam incidunt eveniet.\n===================================================\n\n1. Et quaerat pariatur voluptatem omnis.\n2. Earum et ipsum officiis.\n3. Est eos doloribus sed eligendi similique aliquid.",
              topics: [
                {
                  id: 27,
                  created_at: "2021-06-25T15:02:30.000000Z",
                  updated_at: "2021-06-25T15:02:30.000000Z",
                  title: "eos",
                  lesson_id: 53,
                  topicable_id: 4,
                  topicable_type:
                    "EscolaLms\\Courses\\Models\\TopicContent\\Audio",
                  order: 5,
                  active: false,
                  preview: true,
                  topicable: {
                    id: 4,
                    created_at: "2021-06-25T15:02:30.000000Z",
                    updated_at: "2021-06-25T15:02:30.000000Z",
                    value: "topic/27/placeat.mp3",
                    length: 1103,
                    url: "https://escola-lms-api.stage.etd24.pl//storage/topic/27/placeat.mp3",
                  },
                },
                {
                  id: 117,
                  created_at: "2021-06-25T15:02:57.000000Z",
                  updated_at: "2021-06-25T15:02:57.000000Z",
                  title: "Advent Calendar (beta)",
                  lesson_id: 53,
                  topicable_id: 75,
                  topicable_type:
                    "EscolaLms\\Courses\\Models\\TopicContent\\H5P",
                  order: 0,
                  active: true,
                  preview: false,
                  topicable: {
                    id: 75,
                    created_at: "2021-06-25T15:02:57.000000Z",
                    updated_at: "2021-06-25T15:02:57.000000Z",
                    value: "44",
                  },
                },
              ],
            },
            {
              id: 55,
              created_at: "2021-06-25T15:02:30.000000Z",
              updated_at: "2021-06-25T15:02:30.000000Z",
              title: "omnis",
              duration: "26 minutes",
              order: 8,
              course_id: 4,
              active: false,
              summary:
                "Harum ad quia aut autem qui aut natus.\n======================================\n\nAut laborum quidem impedit delectus omnis. Nam saepe iusto autem vero. Dolore et reiciendis voluptates odio tenetur rem. Quibusdam consequatur molestiae voluptatibus.\n\nNemo dolor accusamus perspiciatis exercitationem quam asperiores autem.\n=======================================================================\n\nNostrum temporibus reiciendis dignissimos sapiente. Praesentium officia ipsum quia non molestias perspiciatis. Et voluptas eveniet unde non neque et eos. Est aut vitae sit aut voluptatem.\n\n* Aliquid quia est natus ut.\n* Voluptatem est ut ut quae sit accusamus.\n* Voluptatem tempora veritatis distinctio qui nobis.\n\n1. Iusto ea nihil minus cumque ut ab veritatis.\n2. Aperiam ut ad eos aut corrupti.\n3. Quo officiis non qui laborum quas.\n\nQuis expedita alias facere culpa necessitatibus.\n================================================\n\n* Aut quis porro aut eos.\n* Quis ut voluptas reiciendis.\n* Aut est asperiores aliquid voluptatem aliquid.\n\n1. Dolor nisi dolores quidem voluptatum sint natus aut accusantium.\n2. Sed atque natus laborum vel.\n3. Ut suscipit tenetur reiciendis earum.",
              topics: [
                {
                  id: 28,
                  created_at: "2021-06-25T15:02:30.000000Z",
                  updated_at: "2021-06-25T15:02:30.000000Z",
                  title: "deserunt",
                  lesson_id: 55,
                  topicable_id: 5,
                  topicable_type:
                    "EscolaLms\\Courses\\Models\\TopicContent\\Audio",
                  order: 7,
                  active: true,
                  preview: false,
                  topicable: {
                    id: 5,
                    created_at: "2021-06-25T15:02:30.000000Z",
                    updated_at: "2021-06-25T15:02:30.000000Z",
                    value: "topic/28/autem.mp3",
                    length: 1837,
                    url: "https://escola-lms-api.stage.etd24.pl//storage/topic/28/autem.mp3",
                  },
                },
                {
                  id: 118,
                  created_at: "2021-06-25T15:02:57.000000Z",
                  updated_at: "2021-06-25T15:02:57.000000Z",
                  title: "Guess the Answer",
                  lesson_id: 55,
                  topicable_id: 76,
                  topicable_type:
                    "EscolaLms\\Courses\\Models\\TopicContent\\H5P",
                  order: 0,
                  active: true,
                  preview: false,
                  topicable: {
                    id: 76,
                    created_at: "2021-06-25T15:02:57.000000Z",
                    updated_at: "2021-06-25T15:02:57.000000Z",
                    value: "30",
                  },
                },
              ],
            },
          ],
        },
        message: "Course retrieved successfully",
      },
    };

    expect(reducer(undefined, data)).toEqual({
      loading: false,
      error: false,
      lessons: data.payload.data.lessons,
    });
  });
});
