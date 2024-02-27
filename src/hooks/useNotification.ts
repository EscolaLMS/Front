import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { Notification } from "@escolalms/sdk/lib/types/api";
import { useContext, useEffect, useState, useCallback } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import debounce from "lodash/debounce";

export const useNotifications = () => {
  const [list, setList] = useState<Notification[]>([]);
  const {
    fetchNotifications,
    notifications,
    readNotify,
    readAllNotifications,
  } = useContext(EscolaLMSContext);
  const loading = notifications.loading;
  const current_page = notifications.list?.meta?.current_page || 1;
  const last_page = notifications.list?.meta?.last_page || 1;
  const hasNextPage = current_page < last_page;

  useEffect(() => {
    fetchNotifications({ page: 1, per_page: 30 }).then((response) => {
      if (response.success) {
        setList(response.data);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = debounce(async () => {
    const request = await fetchNotifications({
      page: current_page + 1,
      per_page: 10,
    });
    if (request.success) {
      setList([...list, ...request.data]);
    }
  }, 300); // Adjust the debounce delay as per your requirement

  const handleReadNotify = useCallback(
    (id: string) => {
      readNotify(id);
      setList((prevList) => prevList.filter((item) => item.id !== id));
    },
    [readNotify]
  );

  const handleReadAllNotify = useCallback(() => {
    readAllNotifications();
    setList([]);
  }, [readAllNotifications]);

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: fetchData,
    rootMargin: "0px 0px 400px 0px",
  });

  return {
    list,
    loading,
    handleReadNotify,
    hasNextPage,
    handleReadAllNotify,
    sentryRef,
  };
};
