import React from "react";
import ModalVideo from "react-modal-video";
import axios from "axios";
import cookie from "js-cookie";
import CheckoutBtn from "@/components/CheckoutButton/CheckoutBtn";
import baseUrl from "@/utils/baseUrl";
import catchErrors from "@/utils/catchErrors";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const CoursesDetailsSidebar = ({
  id,
  price,
  user,
  profilePhoto,
  lessons,
  duration,
  title,
  course_preview_video,
  loggedInUser,
}) => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  // console.log(loggedInUser)
  const { enroled_courses } = loggedInUser ? loggedInUser : "";
  const router = useRouter();
  // Popup Video
  const [enrolled, setEnrolled] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    const countEnrolled = async () => {
      const url = `${baseUrl}/api/v1/courses/enrolled/${id}`;
      const response = await axios.get(url);
      setEnrolled(response.data);
    };
    // setEnrolled(response.data.enrolled)
    countEnrolled();
  }, []);

  const checkBoughtAlready = () => {
    return (
      enroled_courses.filter(function (val) {
        return val.courseId === id;
      }).length > 0
    );
  };

  // console.log(checkBoughtAlready())

  const youtube_parser = (url) => {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };

  const handleCheckout = async (paymentData) => {
    try {
      const token = cookie.get("token");
      const stripeTotal = Number((price * 100).toFixed(2));
      paymentData["courseId"] = id;
      paymentData["stripeTotal"] = stripeTotal;
      const url = `${baseUrl}/api/v1/courses/checkout`;
      const payload = { paymentData };
      const headers = { headers: { Authorization: token } };
      const response = await axios.post(url, payload, headers);
      toast.success(response.data);
    } catch (error) {
      catchErrors(error, window.alert);
      console.log(error.message);
    }
  };

  return (
    <React.Fragment>
      {/* If you want to change the video need to update videoID */}
      {display ? (
        <ModalVideo
          channel="youtube"
          isOpen={!isOpen}
          videoId="gz0qDq9m6us"
          onClose={() => setIsOpen(!isOpen)}
        />
      ) : (
        ""
      )}

      <div className="courses-details-info">
        <div className="image">
          <img src={profilePhoto} alt={title} />

          <div
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
            className="link-btn popup-youtube"
          ></div>

          <div className="content">
            <i className="flaticon-play"></i>
            <span>Course Preview</span>
          </div>
        </div>

        <ul className="info">
          <li className="price">
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-tag"></i> Price
              </span>
              ${price}
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-teacher"></i> Instructor
              </span>
              {user.name}
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-time"></i> Duration
              </span>
              {duration}
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-distance-learning"></i> Lessons
              </span>
              {parseInt(lessons)}
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-web"></i> Enrolled
              </span>
              {enrolled} students
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="flaticon-lock"></i> Access
              </span>
              Lifetime
            </div>
          </li>
        </ul>

        <div className="btn-box">
          {/* <Link href="#">
                        <a className="default-btn">
                            <i className="flaticon-shopping-cart"></i> Add to Cart <span></span>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="default-btn">
                            <i className="flaticon-tag"></i> Buy Now <span></span>
                        </a>
                    </Link> */}
          {loggedInUser ? (
            <>
              {checkBoughtAlready() ? (
                <button className="default-btn" disabled>
                  <i className="flaticon-tag"></i> Enrolled <span></span>
                </button>
              ) : (
                <CheckoutBtn
                  handleCheckout={handleCheckout}
                  image={profilePhoto}
                  name={title}
                  price={price}
                />
              )}
            </>
          ) : (
            <button
              className="default-btn"
              onClick={() => {
                router.push("/authentication");
              }}
            >
              <i className="flaticon-tag"></i> Login To Buy <span></span>
            </button>
          )}
        </div>

        <div className="courses-share">
          <div className="share-info">
            <span>
              Share This Course <i className="flaticon-share"></i>
            </span>

            <ul className="social-link">
              <li>
                <a href="#" className="d-block" target="_blank">
                  <i className="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="d-block" target="_blank">
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="d-block" target="_blank">
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="d-block" target="_blank">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CoursesDetailsSidebar;
