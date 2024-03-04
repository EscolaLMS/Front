import { Link } from "react-router-dom";
import { API } from "@escolalms/sdk/lib";
import ResponsiveImage from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import CourseImgPlaceholder from "../../../Courses/CourseImgPlaceholder";

interface Props {
  product: API.Product | undefined;
}

const ConsultationTutorCardImage = ({ product }: Props) => {
  if (!product) return null;
  return (
    <Link to={`/consultations/${product.id}`}>
      {product.poster_path ? (
        <ResponsiveImage
          path={product.poster_path}
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
