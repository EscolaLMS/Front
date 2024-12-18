import { Link } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";
import ResponsiveImage from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import CourseImgPlaceholder from "../../../Courses/CourseImgPlaceholder";

interface Props {
  product: API.AppointmentTerm | undefined;
}

const ConsultationTutorCardImage = ({ product }: Props) => {
  if (!product) return null;

  return (
    <Link to={`/consultations/${product?.consultation_term_id}`}>
      {product?.consultation_media &&
      product?.consultation_media?.image_path ? (
        <ResponsiveImage
          path={product.consultation_media.image_path}
          alt={product.name}
          srcSizes={[300, 600, 900]}
        />
      ) : (
        <CourseImgPlaceholder />
      )}
    </Link>
  );
};

export default ConsultationTutorCardImage;
