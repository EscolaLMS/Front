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
      {/* @ts-ignore TODO:add to sdk */}
      {product.consultation_media ? (
        <ResponsiveImage
          //   @ts-ignore TODO:add to sdk
          path={product.consultation_media.image_path}
          //   @ts-ignore TODO:add to sdk
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
