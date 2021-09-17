import React, {
  FunctionComponent,
  useCallback,
  useState,
  useEffect,
  useRef,
  useContext,
  useMemo,
} from "react";
import request from "umi-request";
import {
  course as getCourses,
  getCourse,
  getCourseProgram,
  progress as getProgress,
  sendProgress as postSendProgress,
  tutors as getTutors,
  tutor as getTutor,
  topicPing as putTopicPing,
  h5pProgress as postSendh5pProgress,
} from "../services/courses";
import { pages as getPages, page as getPage } from "../services/pages";
import { settings as getSettings } from "../services/settings";
import { uniqueTags as getUniqueTags } from "../services/tags";
import { categoryTree as getCategoryTree } from "../services/categories";
import {
  login as postLogin,
  profile as getProfile,
  register as postRegister,
  updateProfile as postUpdateProfile,
  updateAvatar as postUpdateAvatar,
  forgot,
  reset,
} from "../services/auth";
import {
  cart as getCart,
  addToCart as postAddToCart,
  removeFromCart as deleteRemoveFromCart,
  payWithStripe as postPayWithStripe,
  orders as getOrders,
  payments as getPayments,
} from "../services/cart";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { EditorContextProvider } from "h5p-headless-player";

interface IMock {
  children?: React.ReactElement[] | React.ReactElement;
  apiUrl: string;
}

interface ContextState<T> {
  loading: boolean;
  filter?: API.CourseParams;
  list: T[];
}

interface ContextPaginatedState<T> {
  loading: boolean;
  list?: API.PaginatedList<T>;
  error?: API.DefaultResponseError;
}

interface ContextPaginatedMetaState<T> {
  loading: boolean;
  list?: API.PaginatedMetaList<T>;
  error?: API.DefaultResponseError;
}

interface ContextListState<T> {
  loading: boolean;
  list?: T[];
  error?: API.DefaultResponseError;
}

interface ContextStateValue<T> {
  loading: boolean;
  value?: T;
  error?: API.DefaultResponseError;
}

enum FontSize {
  small = 0,
  regular = 1,
  bigger = 2,
  big = 3,
}

const blackList: API.IEvent[] = [
  "http://adlnet.gov/expapi/verbs/attended",
  "http://adlnet.gov/expapi/verbs/attempted",
  "http://adlnet.gov/expapi/verbs/interacted",
  "http://adlnet.gov/expapi/verbs/imported",
  "http://adlnet.gov/expapi/verbs/created",
];

const completed: API.IEvent[] = [
  "http://adlnet.gov/expapi/verbs/completed",
  "http://adlnet.gov/expapi/verbs/answered",
  "http://activitystrea.ms/schema/1.0/consume",
];

const attempted: API.IEvent = "http://adlnet.gov/expapi/verbs/attempted";
const consume: API.IEvent = "http://activitystrea.ms/schema/1.0/consume";

const guessTheAnswer: API.IEventException = "GuessTheAnswer";
const questionSet: API.IEventException = "QuestionSet";

interface EscolaLMSContextConfig {
  apiUrl: string;
  courses: ContextPaginatedMetaState<API.CourseListItem>;
  fetchCourses: (filter?: API.CourseParams) => Promise<void>;
  course: ContextStateValue<API.CourseListItem>;
  fetchCourse: (id: number) => Promise<void>;
  program: ContextStateValue<API.CourseProgram>;
  fetchProgram: (id: number) => Promise<void>;
  settings: API.AppSettings;
  uniqueTags: ContextListState<API.Tag>;
  categoryTree: ContextListState<API.Category>;
  login: (body: API.LoginRequest) => Promise<void>;
  logout: () => Promise<void>;
  register: (
    body: API.LoginRequest
  ) => Promise<API.DataResponse<API.RegisterResponse>>;
  forgot: (body: API.ForgotRequest) => Promise<void>;
  reset: (body: API.ResetPasswordRequest) => Promise<void>;
  user: ContextStateValue<API.UserItem>;
  addToCart: (courseId: number) => Promise<void>;
  removeFromCart: (courseId: number) => Promise<void>;
  fetchCart: () => Promise<void>;
  cart: ContextStateValue<API.Cart>;
  payWithStripe: (paymentMethodId: string) => Promise<void>;
  fetchProgress: () => Promise<void>;
  progress: ContextStateValue<API.CourseProgress>;
  sendProgress: (
    courseId: number,
    data: API.CourseProgressItemElement[]
  ) => Promise<void>;
  h5pProgress: (
    courseId: string,
    topicId: number,
    statement: API.IStatement
  ) => Promise<API.SuccessResponse>;
  tutors: ContextListState<API.UserItem>;
  fetchTutors: () => Promise<void>;
  tutor: ContextStateValue<API.UserItem>;
  fetchTutor: (id: number) => Promise<void>;
  orders: ContextListState<API.Order>;
  fetchOrders: () => Promise<void>;
  fetchPayments: () => Promise<void>;
  payments: ContextPaginatedMetaState<API.Payment>;
  pages: ContextPaginatedMetaState<API.PageListItem>;
  fetchPages: () => Promise<void>;
  page: ContextStateValue<API.Page>;
  fetchPage: (slug: string) => Promise<void>;
  updateProfile: (data: API.UserItem) => Promise<void>;
  updateAvatar: (avatar: File) => Promise<void>;
  topicPing: (topicId: number) => Promise<Boolean>;
  topicIsFinished: (topicId: number) => Boolean;
  getNextPrevTopic: (topicId: number, next?: boolean) => API.Topic | null;
  courseProgress: (courseId: number) => number;
  fontSizeToggle: (bigger: boolean) => void;
  fontSize: FontSize;
}

const defaultConfig: EscolaLMSContextConfig = {
  apiUrl: "",
  courses: {
    loading: false,
  },
  fetchCourses: () => Promise.reject(),
  course: {
    loading: false,
  },
  fetchCourse: (id: number) => Promise.reject(),
  program: {
    loading: false,
  },
  fetchProgram: (id: number) => Promise.reject(),
  login: (body: API.LoginRequest) => Promise.reject(),
  logout: () => Promise.reject(),
  settings: {
    currencies: {
      default: "EUR",
      enum: ["EUR", "USD"],
    },
    env: "local",
    stripe: {
      publishable_key:
        "pk_test_51Ig8icJ9tg9t712TnCR6sKY9OXwWoFGWH4ERZXoxUVIemnZR0B6Ei0MzjjeuWgOzLYKjPNbT8NbG1ku1T2pGCP4B00GnY0uusI",
    },
  },
  uniqueTags: {
    loading: false,
    list: [],
  },
  categoryTree: {
    loading: false,
    list: [],
  },
  user: {
    loading: false,
  },
  register: () =>
    Promise.reject({
      success: false,
      message: "register method not implemented",
    }),
  forgot: (body: API.ForgotRequest) => Promise.reject(),
  reset: (body: API.ResetPasswordRequest) => Promise.reject(),
  addToCart: (id) => Promise.reject(id),
  removeFromCart: (id) => Promise.reject(id),
  fetchCart: () => Promise.reject(),
  cart: {
    loading: false,
    value: { total: 0, subtotal: 0, tax: 0, items: [] },
  },
  payWithStripe: (paymentMethodId: string) => Promise.reject(paymentMethodId),
  fetchProgress: () => Promise.reject(),
  progress: {
    loading: false,
    value: [],
  },
  sendProgress: (courseId: number, data: API.CourseProgressItemElement[]) =>
    Promise.reject(),
  h5pProgress: (courseId: string, topicId: number, statement: API.IStatement) =>
    Promise.reject(),

  tutors: {
    loading: false,
    list: [],
  },
  fetchTutors: () => Promise.reject(),
  tutor: {
    loading: false,
  },
  fetchTutor: (id: number) => Promise.reject(id),
  orders: {
    loading: false,
    list: [],
  },
  fetchOrders: () => Promise.reject(),
  payments: {
    loading: false,
  },

  fetchPayments: () => Promise.reject(),
  pages: {
    loading: false,
  },
  fetchPages: () => Promise.reject(),
  page: {
    loading: false,
  },
  fetchPage: (slug: string) => Promise.reject(),
  updateProfile: (data: API.UserItem) => Promise.reject(data),
  updateAvatar: (avatar: File) => Promise.reject(avatar),
  topicPing: (topicId: number) => Promise.reject(topicId),
  topicIsFinished: (topicId: number) => false,
  courseProgress: (courseId: number) => 0,
  getNextPrevTopic: (topicId: number, next: boolean) => null,
  fontSizeToggle: (bigger: boolean) => 0,
  fontSize: FontSize.regular,
};

export const SCORMPlayer: React.FC<{
  uuid: string;
}> = ({ uuid }) => {
  const { apiUrl } = useContext(EscolaLMSContext);
  return <iframe src={`${apiUrl}/api/scorm/play/${uuid}`} />;
};

export const EscolaLMSContext: React.Context<EscolaLMSContextConfig> =
  React.createContext(defaultConfig);

type SortProgram = (lessons: API.Lesson[]) => API.Lesson[];

export const sortProgram: SortProgram = (lessons) => {
  return [...lessons]
    .sort((lessonA, lessonB) => lessonA.order - lessonB.order)
    .map((lesson) => ({
      ...lesson,
      topics: [...lesson.topics].sort(
        (topicA, topicB) => topicA.order - topicB.order
      ),
    }));
};

const interceptors = (apiUrl: string, fire: boolean = false) => {
  if (!fire) {
    return;
  }
  request.interceptors.request.use((url, options) => {
    if (url.includes(apiUrl)) {
      return {
        url: `${url}`,
        options: options,
      };
    }
    return {
      url: `${apiUrl}${url}`,
      options: { ...options, interceptors: true },
    };
  });
};

/**
 *
 *
 */
export const EscolaLMSContextProvider: FunctionComponent<IMock> = ({
  children,
  apiUrl,
}) => {
  const shouldFire = useRef(true);
  interceptors(apiUrl, shouldFire.current);
  shouldFire.current = false;

  const [courses, setCourses] = useLocalStorage<
    ContextPaginatedMetaState<API.CourseListItem>
  >("lms", "courses", defaultConfig.courses);

  const [course, setCourse] = useLocalStorage<
    ContextStateValue<API.CourseListItem>
  >("lms", "course", defaultConfig.course);

  const [settings, setSettings] = useLocalStorage<API.AppSettings>(
    "lms",
    "settings",
    defaultConfig.settings
  );

  const [uniqueTags, setUniqueTags] = useLocalStorage<
    ContextListState<API.Tag>
  >("lms", "tags", defaultConfig.uniqueTags);

  const [categoryTree, setCategoryTree] = useLocalStorage<
    ContextListState<API.Category>
  >("lms", "categories", defaultConfig.categoryTree);

  const [program, setProgram] = useLocalStorage<
    ContextStateValue<API.CourseProgram>
  >("lms", "tags", defaultConfig.program);

  const [cart, setCart] = useLocalStorage<ContextStateValue<API.Cart>>(
    "lms",
    "cart",
    defaultConfig.cart
  );

  const [token, setToken] = useLocalStorage<string>("lms", "token", null);

  const [user, setUser] = useLocalStorage<ContextStateValue<API.UserItem>>(
    "lms",
    "user",
    defaultConfig.user
  );

  const [progress, setProgress] = useState<
    ContextStateValue<API.CourseProgress>
  >(defaultConfig.progress);

  const [tutors, setTutors] = useLocalStorage<ContextListState<API.UserItem>>(
    "lms",
    "tutors",
    defaultConfig.tutors
  );

  const [orders, setOrders] = useLocalStorage<ContextListState<API.Order>>(
    "lms",
    "orders",
    defaultConfig.orders
  );

  const [payments, setPayments] = useLocalStorage<
    ContextPaginatedMetaState<API.Payment>
  >("lms", "payments", defaultConfig.payments);

  const [tutor, setTutor] = useState<ContextStateValue<API.UserItem>>(
    defaultConfig.tutor
  );

  const [pages, setPages] = useLocalStorage<
    ContextPaginatedMetaState<API.PageListItem>
  >("lms", "pages", defaultConfig.pages);

  const [page, setPage] = useLocalStorage<ContextStateValue<API.Page>>(
    "lms",
    "page",
    defaultConfig.page
  );

  const [fontSize, setFontSize] = useLocalStorage<FontSize>(
    "lms",
    "fontSize",
    defaultConfig.fontSize
  );

  const abortControllers = useRef({
    cart: null,
  });

  useEffect(() => {
    getSettings().then((response) => {
      setSettings(response.data);
    });

    setUniqueTags((prevState) => ({ ...prevState, loading: true }));
    getUniqueTags().then((response) => {
      setUniqueTags({ list: response.data, loading: false });
    });
    setCategoryTree((prevState) => ({ ...prevState, loading: true }));
    getCategoryTree().then((response) => {
      setCategoryTree({ list: response.data, loading: false });
    });
  }, []);

  const fetchCourses = useCallback(
    (filter: API.CourseParams) => {
      setCourses((prevState) => ({ ...prevState, loading: true }));
      return getCourses(filter)
        .then((response) => {
          if (response.success) {
            setCourses({
              loading: false,
              list: response,
              error: undefined,
            });
          }
        })
        .catch((error) => {
          setCourses((prevState) => ({
            ...prevState,
            loading: false,
            error: error,
          }));
        });
    },
    [courses]
  );

  const fetchCourse = useCallback((id) => {
    setCourse((prevState) => ({ ...prevState, loading: true }));
    return getCourse(id).then((response) => {
      if (response.success) {
        setCourse({
          loading: false,
          value: {
            ...response.data,
            lessons: sortProgram(response.data.lessons),
          },
        });
      }
      if (response.success === false) {
        setCourses((prevState) => ({
          ...prevState,
          loading: false,
          error: response,
        }));
      }
    });
  }, []);

  const fetchProgram = useCallback(
    (id) => {
      setProgram((prevState) => ({ ...prevState, loading: true }));
      return getCourseProgram(id, token)
        .then((response) => {
          if (response.success) {
            setProgram({
              loading: false,
              value: {
                ...response.data,
                lessons: sortProgram(response.data.lessons),
              },
            });
          }
          if (response.success === false) {
            setProgram((prevState) => ({
              ...prevState,
              loading: false,
              error: response,
            }));
          }
        })
        .catch((error) => {
          setProgram((prevState) => ({
            ...prevState,
            loading: false,
            error: error.data,
          }));
        });
    },
    [token]
  );

  const logout = useCallback(() => {
    // API Call here to destroy token
    setToken(null);
    setUser({
      loading: false,
    });
    setCart(defaultConfig.cart);

    return Promise.resolve();
  }, []);

  const register = useCallback((body: API.RegisterRequest) => {
    return postRegister(body);
  }, []);

  useEffect(() => {
    if (token) {
      setUser((prevState) => ({ ...prevState, loading: true }));
      getProfile(token)
        .then((response) => {
          if (response.success) {
            setUser({
              loading: false,
              value: response.data,
            });
          }
          if (response.success === false) {
            setUser((prevState) => ({
              ...prevState,
              loading: false,
              error: response,
            }));
          }
        })
        .catch(() => {
          logout();
        });
    }
  }, [token, logout]);

  const login = useCallback((body: API.LoginRequest) => {
    return postLogin(body).then((response) => {
      if (response.success) {
        setToken(response.data.token);
      }
    });
  }, []);

  const fetchCart = useCallback(() => {
    if (!token) {
      return Promise.reject("No token provided");
    }
    setCart((prevState) => ({
      ...prevState,
      loading: true,
    }));

    if (abortControllers.current.cart) {
      abortControllers.current.cart.abort();
    }

    const controller = new AbortController();
    abortControllers.current.cart = controller;

    try {
      return getCart(token, { signal: controller.signal })
        .then((response) => {
          if (response.data.hasOwnProperty("items")) {
            setCart({
              loading: false,
              value: response.data as API.Cart,
            });
          } else {
            setCart((prevState) => ({
              ...prevState,
              loading: false,
            }));
          }
        })
        .catch((err) => {
          if (err.name !== "AbortError") {
            console.log(err);
          }
        });
    } catch (err) {
      if (err.name !== "AbortError") {
        console.log(err);
      }
    }
  }, [token, abortControllers]);

  const addToCart = useCallback(
    (courseId: number) => {
      if (!token) {
        return Promise.reject("No token provided");
      }
      setCart((prevState) => ({
        ...prevState,
        loading: true,
      }));
      return postAddToCart(courseId, token)
        .then((response) => {
          fetchCart();
        })
        .catch((error) => {
          setCart((prevState) => ({
            loading: false,
            ...prevState,
            error: error.data,
          }));
        });
    },
    [fetchCart]
  );

  const removeFromCart = useCallback(
    (courseId: number) => {
      if (!token) {
        return Promise.reject("No token provided");
      }
      setCart((prevState) => ({
        ...prevState,
        loading: true,
      }));
      return deleteRemoveFromCart(courseId, token)
        .then((response) => {
          setCart((prevState) => ({
            loading: false,
            value: {
              ...prevState.value,
              items: prevState.value.items.filter(
                (item) => item.id !== courseId
              ),
            },
            ...prevState,
          }));
          fetchCart();
        })
        .catch((error) => {
          setCart((prevState) => ({
            loading: false,
            ...prevState,
            error: error.data,
          }));
        });
    },
    [fetchCart]
  );

  const payWithStripe = useCallback(
    (paymentMethodId: string) => {
      return postPayWithStripe(paymentMethodId, token).then((res) => {
        console.log(res);
      });
    },
    [token]
  );

  const fetchProgress = useCallback(() => {
    setProgress((prevState) => ({
      ...prevState,
      loading: true,
    }));
    return getProgress(token).then((res) => {
      setProgress({
        loading: false,
        value: res,
      });
    });
  }, [token]);

  const fetchTutors = useCallback(() => {
    setTutors((prevState) => ({
      ...prevState,
      loading: true,
    }));
    return getTutors()
      .then((res) => {
        if (res.success) {
          setTutors({
            loading: false,
            list: res.data,
          });
        } else if (res.success === false) {
          {
            setTutors({
              loading: false,
              error: res,
            });
          }
        }
      })
      .catch((error) => {
        setTutors({
          loading: false,
          error: error.data,
        });
      });
  }, []);

  const fetchTutor = useCallback((id: number) => {
    setTutor((prevState) => ({
      ...prevState,
      loading: true,
    }));
    return getTutor(id)
      .then((res) => {
        if (res.success) {
          setTutor({
            loading: false,
            value: res.data,
          });
        } else if (res.success === false) {
          {
            setTutor({
              loading: false,
              error: res,
            });
          }
        }
      })
      .catch((error) => {
        setTutor({
          loading: false,
          error: error.data,
        });
      });
  }, []);

  const fetchOrders = useCallback(() => {
    setOrders((prevState) => ({
      ...prevState,
      loading: true,
    }));
    return getOrders(token)
      .then((res) => {
        if (res.hasOwnProperty("data")) {
          setOrders({
            loading: false,
            list: (res as API.DefaultResponseSuccess<API.Order[]>).data,
          });
        } else if (res.success === false) {
          {
            setOrders({
              loading: false,
              error: res,
            });
          }
        }
      })
      .catch((error) => {
        setOrders({
          loading: false,
          error: error.data,
        });
      });
  }, [token]);

  const fetchPayments = useCallback(() => {
    setPayments((prevState) => ({
      ...prevState,
      loading: true,
    }));
    return getPayments(token)
      .then((res) => {
        if (res.success) {
          setPayments({
            loading: false,
            list: res,
          });
        }
      })
      .catch((error) => {
        setPayments({
          loading: false,
          error: error.data,
        });
      });
  }, [token]);

  const fetchPages = useCallback(
    (filter?: API.CourseParams) => {
      setPages((prevState) => ({ ...prevState, loading: true }));
      return getPages(filter)
        .then((response) => {
          if (response.success) {
            setPages({
              loading: false,
              list: response,
              error: undefined,
            });
          }
        })
        .catch((error) => {
          setPages((prevState) => ({
            ...prevState,
            loading: false,
            error: error,
          }));
        });
    },
    [pages]
  );

  const fetchPage = useCallback((slug: string) => {
    setPage((prevState) => ({
      ...prevState,
      loading: true,
    }));
    return getPage(slug)
      .then((res) => {
        if (res.success) {
          setPage({
            loading: false,
            value: res.data,
          });
        } else if (res.success === false) {
          {
            setPage({
              loading: false,
              error: res,
            });
          }
        }
      })
      .catch((error) => {
        setPage({
          loading: false,
          error: error.data,
        });
      });
  }, []);

  const sendProgress = useCallback(
    (courseId: number, data: API.CourseProgressItemElement[]) => {
      return postSendProgress(courseId, data, token).then((res) => {
        setProgress((prevState) => ({
          ...prevState,
          value: prevState.value.map((courseProgress) => {
            if (courseProgress.course.id === courseId) {
              return {
                ...courseProgress,
                progress: courseProgress.progress.map((progress) => {
                  const el = data.find(
                    (item) => item.topic_id === progress.topic_id
                  );
                  if (el) {
                    return el;
                  }
                  return progress;
                }),
              };
            }
            return courseProgress;
          }),
        }));
      });
    },
    [token]
  );

  const h5pProgress = useCallback(
    (courseId: string, topicId: number, statement: API.IStatement) => {
      const statementId = statement?.verb?.id;
      const statementCategory = statement?.context?.contextActivities?.category;
      const result: API.IResult | undefined = statement?.result;
      const hasParent =
        statement?.context?.contextActivities?.parent &&
        statement?.context?.contextActivities?.parent?.length > 0;

      if (
        attempted === statementId &&
        statementCategory &&
        statementCategory[0].id.includes(guessTheAnswer)
      ) {
        sendProgress(Number(courseId), [
          {
            topic_id: topicId,
            status: 1,
          },
        ]);
      }

      if (blackList.includes(statementId)) {
        return;
      }

      if (completed.includes(statementId)) {
        if (
          (!hasParent && !statementCategory[0].id.includes(questionSet)) ||
          (statementCategory[0].id.includes(questionSet) &&
            result &&
            result?.score?.max === result?.score?.raw)
        ) {
          sendProgress(Number(courseId), [
            {
              topic_id: topicId,
              status: 1,
            },
          ]);
        }
      }

      return postSendh5pProgress(topicId, statementId, statement, token);
    },
    [token]
  );

  const updateProfile = useCallback(
    (body: API.UserItem) => {
      setUser((prevState) => ({
        ...prevState,
        loading: true,
      }));

      return postUpdateProfile(body, token).then((res) => {
        if (res.success === true) {
          setUser((prevState) => ({
            value: {
              ...res.data,
            },
            loading: false,
          }));
        } else if (res.success === false) {
          setUser((prevState) => ({
            ...prevState,
            error: res,
            loading: false,
          }));
        }
      });
    },
    [token]
  );

  const updateAvatar = useCallback(
    (file: File) => {
      setUser((prevState) => {
        return {
          ...prevState,
          loading: true,
        };
      });
      return postUpdateAvatar(file, token).then((res) => {
        if (res.success === true) {
          setUser((prevState) => ({
            value: {
              ...prevState.value,
              avatar: res.data.avatar,
              path_avatar: res.data.path_avatar,
            },
            loading: false,
          }));
        }
      });
    },
    [token]
  );

  const topicPing = useCallback(
    (topicId: number) => {
      return putTopicPing(topicId, token).catch((err) => err);
    },
    [token]
  );

  const progressMap = useMemo(() => {
    const defaultMap = {
      coursesProcProgress: {},
      finishedTopics: [],
    };
    if (progress.value) {
      progress.value.reduce((acc, course) => {
        acc.coursesProcProgress[course.course.id] =
          course.progress.reduce((sum, item) => sum + item.status, 0) /
          course.progress.length;
        acc.finishedTopics = acc.finishedTopics.concat(
          course.progress
            .filter((item) => item.status !== 0)
            .map((item) => item.topic_id)
        );
        return acc;
      }, defaultMap);
    }
    return defaultMap;
  }, [progress]);

  const topicIsFinished = useCallback(
    (topicId) => progressMap && progressMap.finishedTopics.includes(topicId),
    [progressMap]
  );

  const courseProgress = useCallback(
    (courseId) =>
      progressMap && progressMap.coursesProcProgress[courseId]
        ? progressMap.coursesProcProgress[courseId]
        : 0,
    [progressMap]
  );

  const getNextPrevTopic = useCallback(
    (topicId: number, next: boolean = true) => {
      const lesson: API.Lesson = program.value.lessons.find(
        (lesson) => !!lesson.topics.find((topic) => topicId === topic.id)
      );

      if (!lesson) {
        return;
      }

      const currentLessonIndex = program.value.lessons.findIndex(
        (fLesson) => lesson.id === fLesson.id
      );
      const currentTopicIndex = program.value.lessons[
        currentLessonIndex
      ].topics.findIndex((topic) => Number(topic.id) === Number(topicId));

      if (next) {
        if (
          program.value.lessons[currentLessonIndex].topics[
            currentTopicIndex + 1
          ]
        ) {
          return lesson.topics[currentTopicIndex + 1];
        } else {
          if (program.value.lessons[currentLessonIndex + 1]) {
            const newLesson = program.value.lessons[currentLessonIndex + 1];
            return newLesson.topics[0];
          }
        }
      } else {
        if (
          program.value.lessons[currentLessonIndex].topics[
            currentTopicIndex - 1
          ]
        ) {
          return lesson.topics[currentTopicIndex - 1];
        } else {
          if (program.value.lessons[currentLessonIndex - 1]) {
            const newLesson = program.value.lessons[currentLessonIndex - 1];
            return newLesson.topics[newLesson.topics.length - 1];
          }
        }
      }

      return null;
    },
    [program]
  );

  const fontSizeToggle = useCallback(
    (bigger) => {
      const newFontSize = (fontSize + (bigger ? 1 : -1)) % 4;
      return setFontSize(newFontSize);
    },
    [fontSize]
  );

  return (
    <EscolaLMSContext.Provider
      value={{
        apiUrl,
        courses,
        course,
        program,
        fetchCourses,
        fetchCourse,
        fetchProgram,
        settings,
        uniqueTags,
        categoryTree,
        login,
        logout,
        forgot,
        reset,
        user,
        register,
        fetchCart,
        addToCart,
        removeFromCart,
        cart,
        payWithStripe,
        fetchProgress,
        progress,
        sendProgress,
        fetchTutors,
        tutors,
        fetchTutor,
        tutor,
        fetchOrders,
        orders,
        fetchPayments,
        payments,
        pages,
        fetchPages,
        page,
        fetchPage,
        updateProfile,
        updateAvatar,
        topicPing,
        topicIsFinished,
        courseProgress,
        getNextPrevTopic,
        fontSize,
        fontSizeToggle,
        h5pProgress,
      }}
    >
      <EditorContextProvider url={`${apiUrl}/api/hh5p`}>
        {children}
      </EditorContextProvider>
    </EscolaLMSContext.Provider>
  );
};
