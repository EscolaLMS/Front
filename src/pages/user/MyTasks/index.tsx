import { useState } from "react";
import ProfileLayout from "@/components/Profile/ProfileLayout";
import { useTranslation } from "react-i18next";
import { IconText, TaskComponent } from "@escolalms/components";
import {
  IconChevronDoubleDown,
  IconChevronDoubleUp,
  IconDoubleUser,
  IconEye,
  IconEyeOff,
  IconUser,
} from "../../../icons";

const Tasks = () => {
  const { t } = useTranslation();
  const [state, setState] = useState<{
    sort: "Ascending" | "Descending";
    createdBy: "Personal" | "Incoming";
    done: boolean;
  }>({ sort: "Ascending", createdBy: "Personal", done: true });

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
  return (
    <ProfileLayout title={t("MyProfilePage.MyTasks")}>
      <TaskComponent
        taskShowAction={{ options: taskShowAction, showDone: state.done }}
        sortOptions={{ options: sortType, type: state.sort }}
        createBy={{ options: taskCreateBy, type: state.createdBy }}
      />
    </ProfileLayout>
  );
};

export default Tasks;
