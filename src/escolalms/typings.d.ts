// @ts-ignore
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
    Pdf = "EscolaLms\\Courses\\Models\\TopicContent\\PDF",
  }

  type IEvent =
    | "http://adlnet.gov/expapi/verbs/experienced"
    | "http://adlnet.gov/expapi/verbs/attended"
    | "http://adlnet.gov/expapi/verbs/attempted"
    | "http://adlnet.gov/expapi/verbs/completed"
    | "http://adlnet.gov/expapi/verbs/passed"
    | "http://adlnet.gov/expapi/verbs/failed"
    | "http://adlnet.gov/expapi/verbs/answered"
    | "http://adlnet.gov/expapi/verbs/interacted"
    | "http://adlnet.gov/expapi/verbs/imported"
    | "http://adlnet.gov/expapi/verbs/created"
    | "http://adlnet.gov/expapi/verbs/shared"
    | "http://adlnet.gov/expapi/verbs/voided"
    | "http://activitystrea.ms/schema/1.0/consume";

  type IStatementCategory = {
    id: string;
    objectType: "string";
  };

  type IScore = {
    min: number;
    raw: number;
    max: number;
    scaled: number;
  };

  type IResult = {
    completion: boolean;
    duration: string;
    response: string;
    score: IScore;
  };

  type IStatement = {
    actor: unknown;
    context: {
      contextActivities: {
        category: IStatementCategory[];
        parent?: IStatementCategory[];
      };
    };
    object: unknown;
    result?: IResult;
    verb: { id: IEvent };
  };

  type IEventException = "GuessTheAnswer" | "Questionnaire" | "QuestionSet";

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

  type Page = {
    id: number;
    title: string;
    slug: string;
    author_id: number;
    content: string;
    active: boolean;
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
    language?: string;
    subtitle?: string;
    description?: string;
    id?: number;
    created_at?: string;
    updated_at?: string;
    title?: string;
    summary?: string;
    image_path?: string;
    video_path?: string;
    base_price?: number;
    duration?: string;
    author_id?: number;
    image_url?: string;
    video_url?: string;
    categories?: Category[] | (number | string)[];
    tags?: Tag[] | string[];
    author?: UserItem;
    lessons_count?: number;
    lessons?: Lesson[];
    users_count?: number;
    topic_count?: number;
    level?: string;
    scorm_id?: number;
    scorm?: SCORM;
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

  type PaginatedMetaList<Model> = {
    data: Model[];
    meta: {
      current_page: number;
      next_page_url: string;
      path: string;
      per_page: number;
      prev_page_url: string;
      to: number;
      total: number;
      links: {
        first: string;
        last: string;
        next: string;
        prev: string;
      };
    };
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
    error: string;
    errors: {
      [key: string]: string[]; // list of errors
    };
  };

  type DefaultResponse<Model> =
    | DefaultResponseSuccess<Model>
    | DefaultResponseError;

  type DefaultMetaResponse<Model> =
    | (PaginatedMetaList<Model> & {
        message: string;
        success: true;
      })
    | DefaultResponseError;

  type DataResponse<Model> = DataResponseSuccess<Model> | DefaultResponseError;

  type RawResponse<Model> = Model | DefaultResponseError;

  type SuccessResponse = { success: true } | DefaultResponseError;

  type CourseList = DefaultMetaResponse<Course>;

  type TutorList = DefaultResponse<API.UserItem[]>;

  type OrderList = DefaultResponse<API.Order[]>;

  type TutorSingle = DefaultResponse<API.UserItem>;

  type CourseListItem = Course;

  type CategoryList = DataResponseSuccess<Category[]>;

  type CategoryListItem = Category;

  type UserList = DefaultMetaResponse<UserItem>;

  type UserListItem = UserItem;

  type OrderList = DefaultMetaResponse<Order>;

  type OrderListItem = Order;

  type PaymentList = DefaultMetaResponse<Payment>;

  type PaymentListItem = Payment;

  type PageList = DefaultMetaResponse<Page>;

  type PageListItem = Page;

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

  type LoginResponse = DefaultResponse<{ token: string }>;

  type RegisterRequest = {
    email: string;
    password: string;
    password_confirmation: string;
    first_name: string;
    last_name: string;
  };

  type RegisterResponse =
    | {
        success: true;
        token: string;
      }
    | DefaultResponseError;

  type ForgotRequest = {
    email: string;
    return_url: string;
  };

  type ForgotResponse = DefaultResponse | DefaultResponseError;

  type ResetPasswordRequest = {
    token: string;
    password: string;
    email: string;
  };

  type ResetPasswordResponse = DefaultResponse | DefaultResponseError;

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
    avatar: string;
    path_avatar: string | null;
    bio: string | null;
  };

  type Lesson = {
    id?: number;
    created_at?: string;
    updated_at?: string;
    title?: string;
    order?: number;
    course_id?: number;
    duration?: string;
    summary?: string;
    topics?: Topic[];
    isNew?: boolean;
  };

  type TopicBase = {
    lesson_id?: number;
    created_at?: string;
    updated_at?: string;
    id?: number;
    order?: number;
    title?: string;
    value?: any;
    topicable_id?: number;
    isNew?: boolean;
    preview?: boolean;
    summary?: string;
    resources?: TopicResource[];
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

  type TopicResource = {
    id: number;
    name: string;
    path: string;
    topic_id: number;
    url: string;
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

  type TopicImage = TopicBase & {
    topicable_type: TopicType.Image;
    topicable: TopicableBase & {
      height: number;
      url: string;
      width: number;
    };
  };

  type TopicH5P = TopicBase & {
    topicable_type: TopicType.H5P;
    topicable: TopicableBase;
  };

  type TopicPdf = TopicBase & {
    topicable_type: TopicType.Pdf;
    topicable: TopicableBase & {
      url: string;
    };
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
    | TopicH5P
    | TopicImage
    | TopicPdf;

  type TopicNotEmpty =
    | TopicRichText
    | TopicOEmbed
    | TopicAudio
    | TopicVideo
    | TopicH5P
    | TopicImage
    | TopicPdf;

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

  type Payment = {
    amount: number;
    billable_id: number;
    billable_type: string;
    created_at: string;
    currency: string;
    description: string;
    id: number;
    order_id: number;
    payable_id: null;
    payable_type: null;
    status: "new" | "paid"; // TODO: what are possible statuses ?
    updated_at: string;
  };

  type Page = {
    id: number;
    slug: string;
    title: string;
    author_id: number;
    author: UserItem;
    content: string;
  };

  type AppSettings = {
    currencies?: AppCurrency;
    env?: string;
    stripe?: {
      publishable_key: string;
    };
  };

  type AppCurrency = {
    default: string;
    enum: string[];
  };

  type SCORM = {
    id: number;
    resource_type: null;
    resource_id: number;
    version: "scorm_12" | "scorm_2004";
    hash_name: string;
    origin_file: string;
    origin_file_mime: string;
    ratio: number;
    uuid: string;
    created_at: string;
    updated_at: string;
    scos: SCORM_SCO[];
  };

  type SCORM_SCO = {
    id: number;
    scorm_id: number;
    uuid: string;
    sco_parent_id: number;
    entry_url: string;
    identifier: string;
    title: string;
    visible: 1 | 0;
    sco_parameters: any;
    launch_data: any;
    max_time_allowed: number;
    time_limit_action: number;
    block: number;
    score_int: number;
    score_decimal: number;
    completion_threshold: number;
    prerequisites: any;
    created_at: string;
    updated_at: string;
  };

  type Cart = {
    total: string | number;
    subtotal: string | number;
    tax: string | number;
    items: Course[];
  };

  type CourseProgressItemElement = {
    topic_id: number;
    status: CourseProgressItemElementStatus;
  };

  enum CourseProgressItemElementStatus {
    INCOMPLETE = 0,
    COMPLETE = 1,
    IN_PROGRESS = 2,
  }

  type CourseProgressItem = {
    course: Course;
    finish_date?: Date;
    progress: CourseProgressItemElement[];
  };

  type Order = {
    id: number;
    status: string; // this should be enum
    items: [
      {
        id: number;
        order_id: number;
        buyable_type: string;
        buyable_id: number;
        quantity: number;
        options: string;
        created_at: string;
        updated_at: string;
      }
    ];
    total: string;
    subtotal: string;
    tax: string;
    created_at: string;
  };

  type CourseProgress = CourseProgressItem[];

  type Payment = {
    id: number;
    amount: number;
    billable_id: number;
    billable_type: string;
    created_at: string;
    currency: string;
    description: string;
    order_id: string;
    payable_id: null | unknown;
    payable_type: null | unknown;
    status: string;
    updated_at: string;
  };
}
