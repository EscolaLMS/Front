/* eslint-disable */

declare namespace API {
  enum TopicType {
    Unselected = "",
    RichText = "EscolaLms\\Courses\\Models\\TopicContent\\RichText",
    OEmbed = "EscolaLms\\Courses\\Models\\TopicContent\\OEmbed",
    Audio = "EscolaLms\\Courses\\Models\\TopicContent\\Audio",
    Video = "EscolaLms\\Courses\\Models\\TopicContent\\Video",
    H5P = "EscolaLms\\Courses\\Models\\TopicContent\\H5P",
    Image = "EscolaLms\\Courses\\Models\\TopicContent\\Image",
  }

  type Category = {
    id: number;
    name: string;
    slug: string;
    is_active: boolean;
    parent_id?: number;
    icon?: string;
    icon_class: string;
    created_at: string;
    updated_at: string;
    pivot?: {
      course_id: number;
      category_id: number;
    };
    subcategories?: Category[];
  };

  type Tag = {
    id: number;
    title: string;
    morphable_type: string;
    morphable_id: number;
    created_at: string;
    updated_at: string;
  };

  type Course = {
    id: number;
    created_at: string;
    updated_at: string;
    title: string;
    summary: string;
    image_path: string;
    video_path: string;
    base_price: string;
    duration: string;
    author_id: number;
    author: UserItem;
    image_url: string;
    video_url: string;
    categories: Category[] | (number | string)[];
    tags: Tag[] | string[];
    lessons: Lesson[];
  };

  type PaginatedList<Model> = {
    current_page: number;
    data: Model[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
  };

  type PaginatedListParams = {
    current_page: number;
    total: number;
    per_page: number;
  };

  type DefaultResponseSuccess<Model> = {
    success: true;
    data: Model;
    message: string;
  };

  type DataResponseSuccess<Model> = {
    data: Model;
  };

  type DefaultResponseError = {
    success: false;
    message: string;
    errors: {
      [key: string]: string[]; // list of errors
    };
  };

  type DefaultResponse<Model> =
    | DefaultResponseSuccess<Model>
    | DefaultResponseError;

  type DataResponse<Model> = DataResponseSuccess<Model> | DefaultResponseError;

  type CourseList = DefaultResponse<PaginatedList<Course>>;

  type CourseListItem = Course;

  type PaginationParams = {
    order_by?: string;
    order?: "ASC" | "DESC";
    page?: number;
    per_page?: number;
  };

  type CourseParams = PageParams &
    PaginationParams & {
      title?: string;
      category_id?: number;
      author_id?: number;
      tag?: string;
    };

  type LoginRequest = {
    email: string;
    password: string;
  };

  type LoginResponse =
    | {
        success: true;
        token: string;
      }
    | DefaultResponseError;

  type User = {
    data: UserItem;
  };

  type UserItem = {
    id: number;
    name: string;
    first_name: string;
    last_name: string;
    email: string;
    is_active: boolean;
    created_at: string;
    onboarding_completed: boolean;
    email_verified: boolean;
    interests: string[];
  };

  type Lesson = {
    id: number;
    created_at: string;
    updated_at: string;
    title: string;
    order: number;
    course_id: number;
    duration: string;
    topics: Topic[];
    isNew: boolean;
  };

  type TopicBase = {
    lesson_id: number;
    created_at: string;
    updated_at: string;
    id: number;
    order: number;
    title: string;
    value: any;
    topicable_id: number;
    isNew: boolean;
    /*
      topicable_type?:
        | TopicType.RichText
        | TopicType.OEmbed
        | TopicType.Audio
        | TopicType.H5P
        | TopicType.Unselected
        | TopicType.Video;
        */
  };

  type TopicableBase = {
    created_at?: string;
    updated_at?: string;
    id: number;
    value: string;
  };

  type TopicRichText = TopicBase & {
    topicable_type: TopicType.RichText;
    topicable: TopicableBase;
  };

  type TopicOEmbed = TopicBase & {
    topicable_type: TopicType.OEmbed;
    topicable: TopicableBase;
  };

  type TopicAudio = TopicBase & {
    topicable_type: TopicType.Audio;
    topicable: TopicableBase & {
      length: number;
      url: string;
    };
  };

  type TopicImage = TopicBase & {
    topicable_type: TopicType.Image;
    topicable: TopicableBase & {
      height: number;
      url: string;
      width: number;
    };
  };

  type TopicVideo = TopicBase & {
    topicable_type: TopicType.Video;
    topicable: TopicableBase & {
      height: number;
      poster: string;
      poster_url: string;
      url: string;
      width: number;
    };
  };

  type TopicH5P = TopicBase & {
    topicable_type: TopicType.H5P;
    topicable: TopicableBase;
  };

  type TopicUnselected = TopicBase & {
    topicable_type?: TopicType.Unselected;
    topicable?: never;
  };

  type Topic =
    | TopicUnselected
    | TopicRichText
    | TopicOEmbed
    | TopicAudio
    | TopicVideo
    | TopicImage
    | TopicH5P;

  type TopicNotEmpty =
    | TopicRichText
    | TopicOEmbed
    | TopicAudio
    | TopicVideo
    | TopicImage
    | TopicH5P;

  type CourseProgram = Course & {
    lessons: Lesson[];
  };

  type H5PLibrary = {
    id: number;
    created_at: string;
    updated_at: string;
    name: string;
    title: string;
    runnable: number;
    restricted: number;
    fullscreen: number;
    embed_types: string;
    semantics: object;
    machineName: string;
    uberName: string;
    majorVersion: string;
    minorVersion: string;
    patchVersion: string;
    preloadedJs: string;
    preloadedCss: string;
    dropLibraryCss: string;
    tutorialUrl: string;
    hasIcon: string;
    libraryId: number;
  };

  type H5PContent = {
    id: number;
    created_at: string;
    updated_at: string;
    user_id: string | number;
    title: string;
    library_id: string;
    parameters: string;
    filtered: string;
    slug: string;
    embed_type: string;
    params: object;
    metadata: object;
    library: H5PLibrary;
    nonce: string;
  };

  type H5PContentList = PaginatedList<H5PContent>;

  type H5PContentListItem = H5PContent;

  type H5PContentParams = PageParams & PaginationParams;
}
