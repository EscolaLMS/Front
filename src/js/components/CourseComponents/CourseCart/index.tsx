import React, {
  ReactElement,
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Icon from "../../Icon";
import Button from "../../FormElements/Button/Button";
import { IRootState } from "../../../interfaces/redux";
import { Dispatch } from "redux";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import { ICourseCart } from "../../../interfaces/course";
import { addToCart, fetchCart } from "../../../redux/cart/actions";
import { ICartState } from "../../../redux/cart/reducer";
import { useHistory } from "react-router-dom";

import { IAuthState } from "../../../redux/auth/reducer";
import "./index.scss";
import routes from "../../Routes/routes";

const CourseCart: React.FC<ICourseCart> = ({
  id,
  totalTime,
  lastUpdate,
  lessonsLength,
  quizesLength,
  gamesLength,

  mobileAccess,
  price,
  owned = false,
}): ReactElement => {
  const [favoured, setFavoured] = useState(false);
  const history = useHistory();

  const [active, setActive] = useState(false);
  const [position, setPostion] = useState(0);

  const myRef = useRef<HTMLDivElement>(null);

  const dispatch: Dispatch = useDispatch();

  const auth: IAuthState = useSelector<IRootState, IAuthState>(
    (state) => state.Auth
  );

  const cart: ICartState = useSelector<IRootState, ICartState>(
    (state): ICartState => state.Cart
  );

  const addToCartHandler = useCallback(() => {
    dispatch(addToCart(id));
  }, [id]);

  const inCart = useMemo(() => {
    if (
      cart?.data?.items &&
      cart?.data?.items?.length > 0 &&
      id &&
      auth.token
    ) {
      return cart.data.items.find((item: API.Course) => item.id === id);
    }
    return false;
  }, [cart, id, auth]);

  useEffect(() => {
    cart.added && dispatch(fetchCart());
  }, [cart.added]);

  console.log(cart);

  useEffect(() => {
    const handleScroll = () => {
      const realtedSection = document.querySelector(".related-courses");
      const footer = document.querySelector(".footer");
      const realtedHeight =
        (realtedSection && realtedSection.clientHeight) || 260;
      const footerHeight = (footer && footer.clientHeight) || 420;

      const height = Math.max(
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      const bottom = footerHeight + realtedHeight; // footer + related
      const box = myRef?.current?.clientHeight || 0; // movable element height
      const diff = window.pageYOffset + bottom + box + 50 - height; // check if should stop
      const bottomPos = window.innerHeight - box - 50; // bottom position

      setPostion(diff > 0 ? diff + bottomPos : 0);

      if (window.pageYOffset > 400) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [myRef]);

  return (
    <aside
      ref={myRef}
      style={
        position > 0
          ? { bottom: position, top: "auto" }
          : { bottom: "auto", top: 50 }
      }
      className={["course-cart", active && "active"].join(" ")}
    >
      <h3>Course features</h3>
      <ul className="cart-details">
        <li>
          Total time <span>{totalTime}</span>
        </li>
        <li>
          Last update <span>{format(parseISO(lastUpdate), "dd-MM-yyyy")}</span>
        </li>
        <li>
          Lessons <span>{lessonsLength}</span>
        </li>
        <li>
          Quizes <span>{quizesLength}</span>
        </li>
        <li>
          Games <span>{gamesLength}</span>
        </li>
      </ul>
      <div className="cart-footer">
        <ul>
          <li>
            Price <span>{price}</span>
          </li>
        </ul>

        <div className="button-wrapper">
          {owned ? (
            <Link to={`/course/${id}/program`} className="button primary">
              Curriculum
            </Link>
          ) : inCart ? (
            <Link to={routes.cart} className="button primary">
              Go to checkout
            </Link>
          ) : (
            <Button
              loading={cart?.loading}
              className="primary"
              onClick={() =>
                auth?.token ? addToCartHandler() : history.push(routes.login)
              }
            >
              Buy access now <small>Full lifetime access</small>
            </Button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default CourseCart;
