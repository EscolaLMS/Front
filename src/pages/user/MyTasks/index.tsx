import { useContext, useEffect, useState } from "react";
import ProfileLayout from "@/components/Profile/ProfileLayout";
import { useTranslation } from "react-i18next";
import { TasksComponent } from "@escolalms/components/lib/components/organisms/TasksComponent/index";
import { IconText } from "@escolalms/components/lib/components/atoms/IconText/IconText";
import {
  IconChevronDoubleDown,
  IconChevronDoubleUp,
  IconDoubleUser,
  IconEye,
  IconEyeOff,
  IconUser,
} from "../../../icons";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { PageParams } from "@escolalms/sdk/lib/types";

const Tasks = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(2);
  const previousDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= lastPage;
  const [state, setState] = useState<{
    sort: "Ascending" | "Descending";
    createdBy: "Personal" | "Incoming";
    done: boolean;
  }>({ sort: "Ascending", createdBy: "Personal", done: true });

  const { fetchTasks, fetchProgress, progress, fetchProgram, tasks } =
    useContext(EscolaLMSContext);

  const taskShowAction = [
    {
      id: 1,
      content: (
        <IconText
          icon={state.done === true ? <IconEyeOff /> : <IconEye />}
          text={
            state.done === true
              ? t("MyProfilePage.HideDone")
              : t("MyProfilePage.ShowDone")
          }
          onClick={() =>
            setState((prevState) => ({ ...prevState, done: !prevState.done }))
          }
        />
      ),
    },
  ];

  const sortType = [
    {
      id: 0,
      content: (
        <IconText
          icon={<IconChevronDoubleDown />}
          text={t("MyProfilePage.Ascending")}
          onClick={() =>
            setState((prevState) => ({ ...prevState, sort: "Ascending" }))
          }
        />
      ),
    },
    {
      id: 1,
      content: (
        <IconText
          icon={<IconChevronDoubleUp />}
          text={t("MyProfilePage.Descending")}
          onClick={() =>
            setState((prevState) => ({ ...prevState, sort: "Descending" }))
          }
        />
      ),
    },
  ];

  const taskCreateBy = [
    {
      id: 0,
      content: (
        <IconText
          icon={<IconUser />}
          text={t("MyProfilePage.Personal")}
          onClick={() =>
            setState((prevState) => ({ ...prevState, createdBy: "Personal" }))
          }
        />
      ),
    },
    {
      id: 1,
      content: (
        <IconText
          icon={<IconDoubleUser />}
          text={t("MyProfilePage.Incoming")}
          onClick={() =>
            setState((prevState) => ({ ...prevState, createdBy: "Incoming" }))
          }
        />
      ),
    },
  ];

  useEffect(() => {
    fetchTasks({ page: currentPage, per_page: 25 } as PageParams);
    setLastPage(Number(tasks.list?.meta.last_page));
    fetchProgress();
  }, [fetchProgress, fetchTasks, currentPage, tasks.list?.meta.last_page]);

  useEffect(() => {
    if (progress.value) {
      progress.value.forEach((progItem) => fetchProgram(progItem.course.id));
    }
  }, [progress, fetchProgram]);

  return (
    <ProfileLayout title={t("MyProfilePage.MyTasks")}>
      <TasksComponent
        taskShowAction={{ options: taskShowAction, showDone: state.done }}
        sortOptions={{ options: sortType, type: state.sort }}
        createBy={{ options: taskCreateBy, type: state.createdBy }}
        tasksPagination={{
          previousDisabled,
          nextDisabled,
          currentPage,
          lastPage,
          setCurrentPage,
        }}
      />
    </ProfileLayout>
  );
};

export default Tasks;
