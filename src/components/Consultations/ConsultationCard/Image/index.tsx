import { Link } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";
import ResponsiveImage from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import CourseImgPlaceholder from "../../../Courses/CourseImgPlaceholder";

interface Props {
  consultation: API.Consultation;
}

const ConsultationCardImage = ({ consultation }: Props) => {
  return (
    <Link to={`/consultations/${consultation.id}`}>
      {consultation.image_path ? (
        <ResponsiveImage
          path={consultation.image_path}
          alt={consultation.name}
          srcSizes={[300, 600, 900]}
        />
      ) : (
        <CourseImgPlaceholder />
      )}
    </Link>
  );
};

export default ConsultationCardImage;
