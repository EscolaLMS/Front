import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";
import { CourseAgenda } from "@escolalms/components/lib/components/organisms/CourseAgenda/CourseAgenda";
import {
  CourseScheduleContent,
  CourseScheduleTitle,
  CourseScheduleWrapper,
} from "@/components/Course/CoursePanelLayout/Schedule/styles";
import { SubheaderTitle } from "@/components/Course/CoursePanelLayout/Subheader/styles";
import { userIsCourseAuthor } from "@/utils/index";
import { useCoursePanel } from "@/components/Course/Context";
import { useHistory } from "react-router-dom";

export const CourseSchedule = () => {
  const { t } = useTranslation();
  const { user } = useContext(EscolaLMSContext);
  const {
    // flatTopics,
    currentTopic,
    finishedTopicsIds,
    availableTopicsIds,
    courseId,
    currentCourseProgram,
  } = useCoursePanel();
  const history = useHistory();

  return (
    <CourseScheduleWrapper>
      <CourseScheduleTitle>
        <SubheaderTitle level={2}>
          {t("CoursePanel.ScheduleTitle")}
        </SubheaderTitle>
      </CourseScheduleTitle>
      <CourseScheduleContent>
        <CourseAgenda
          areAllTopicsUnlocked={
            !!currentCourseProgram?.authors.find(
              ({ id }) => id === user.value?.id
            )
          }
          onNextTopicClick={() => {
            console.log("Next topic clicked");
          }}
          mobile={isMobile}
          lessons={currentCourseProgram?.lessons || []}
          currentTopicId={Number(currentTopic?.id)}
          finishedTopicIds={finishedTopicsIds ?? []}
          onMarkFinished={() => console.log("onMarkFinished")}
          onTopicClick={(topic) => {
            history.push(`/course/${courseId}/${topic.lesson_id}/${topic.id}`);
          }}
          onCourseFinished={() => console.log("onCourseFinished")}
          availableTopicsIds={availableTopicsIds ?? []}
        />
      </CourseScheduleContent>
    </CourseScheduleWrapper>
  );
};
