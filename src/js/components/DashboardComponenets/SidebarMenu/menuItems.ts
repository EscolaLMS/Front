import routes from "../../Routes/routes";
import { IMenuItem } from "../../../interfaces/menu";

const { dashboard, myCourses, myProfile } = routes;

const menuItems: IMenuItem[] = [
  {
    name: "Dashboard",
    link: dashboard,
    icon: "dashboard",
  },

  {
    name: "My Courses",
    link: myCourses,
    icon: "clock",
  },
  {
    name: "My profile",
    link: myProfile,
    icon: "profile",
  },
];

export default menuItems;
