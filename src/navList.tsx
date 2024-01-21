import UsersPage from "./page/UsersPage/UsersPage";
import InstitutesPage from "./page/institutes/InstitutesPage";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RegisterInstitutePage from "./page/register-institute/RegisterInstitutePage";
import DashboardPage from "./page/dashboard/DashboardPage";

const navList = [
  {
    path: "/",
    name: "داشبورد",
    icon: <DashboardIcon />,
    component: DashboardPage,

    id: "p-1",
  },
  {
    path: "/users",
    name: "کاربران",
    // icon:<></>,
    component: UsersPage,
 
    id: "p-2",
  },
  {
    path: "/institutes",
    name: "موسسات",
    // icon:<></>,
    component: InstitutesPage,

    id: "p-3",
  },
  {
    path: "/register-institute",
    name: "ثبت موسسه جدید",
    // icon:<></>,
    component: RegisterInstitutePage,
    // showInNav: false,
    // role: "public",
    id: "p-4",
  },
];
export default navList;
