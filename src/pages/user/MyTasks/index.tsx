import { useState } from "react";
import ProfileLayout from "@/components/Profile/ProfileLayout";
import { useTranslation } from "react-i18next";
import { IconText, TaskComponent } from "@escolalms/components";
import { MdEditNote, MdCheck, MdClose } from "react-icons/md";

const Tasks = () => {
  const { t } = useTranslation();
  const [sort, setSort] = useState("Ascending");
  const [createBy, setCreateBy] = useState("Personal");
  const [showDone, setShowDone] = useState(true);

  const taskShowAction = [
    {
      id: 1,
      content: (
        <IconText
          icon={showDone ? <MdCheck size="1.6em" /> : <MdClose size="1.6em" />}
          text={t("MyProfilePage.ShowDone")}
          onClick={() => setShowDone(!showDone)}
        />
      ),
    },
  ];

  const sortType = [
    {
      id: 0,
      content: (
        <IconText
          icon={<MdEditNote />}
          text={t("MyProfilePage.Ascending")}
          onClick={() => setSort("Ascending")}
        />
      ),
    },
    {
      id: 1,
      content: (
        <IconText
          icon={<MdEditNote />}
          text={t("MyProfilePage.Descending")}
          onClick={() => setSort("Descending")}
        />
      ),
    },
  ];

  const taskCreateBy = [
    {
      id: 0,
      content: (
        <IconText
          icon={<MdEditNote />}
          text={t("MyProfilePage.Personal")}
          onClick={() => setCreateBy("Personal")}
        />
      ),
    },
    {
      id: 1,
      content: (
        <IconText
          icon={<MdEditNote />}
          text={t("MyProfilePage.Incoming")}
          onClick={() => setCreateBy("Incoming")}
        />
      ),
    },
  ];
  return (
    <ProfileLayout title={t("MyProfilePage.MyTasks")}>
      <TaskComponent
        taskShowAction={{ options: taskShowAction, showDone: showDone }}
        sortOptions={{ options: sortType, type: sort }}
        createBy={{ options: taskCreateBy, type: createBy }}
      />
    </ProfileLayout>
  );
};

export default Tasks;
