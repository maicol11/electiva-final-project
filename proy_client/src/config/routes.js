// import Home from "../pages/home";
// import Contact from "../pages/contact";
// import NotFound from "../pages/notFound";
// import Signin from "../pages/Admin/Signin";
// import GeneralLayout from "../layouts/GeneralLayout";
// import LayoutAdmin from "../layouts/LayoutAdmin";
// import AdminSignIn from "../pages/Admin/SignIn"
// const routesAdmin = [
//     { path: "/admin", layout: GeneralLayout, component: Signin },
//     { path: "/admin/contact", layout: GeneralLayout, component: Contact },
//     {path: "/admin/login/*", layout: LayoutAdmin, component: AdminSignIn }
// ];

// const routesGeneral = [
//     { path: "/", layout: GeneralLayout, component: Home },
//     { path: "*", layout: GeneralLayout, component: NotFound }
// ];

// const projectRoutes = [...routesAdmin, ...routesGeneral];

// export default projectRoutes;

import Home from "../pages/home";
import Contact from "../pages/contact";
import NotFound from "../pages/notFound";
import Signin from "../pages/Admin/Signin";
import GeneralLayout from "../layouts/LayoutAdmin";

const routesAdmin = [
  { path: "/admin", layout: GeneralLayout, component: Signin },
  { path: "/admin/contact", layout: GeneralLayout, component: Contact }
];

const routesGeneral = [
  { path: "/", layout: GeneralLayout, component: Home },
  { path: "*", layout: GeneralLayout, component: NotFound },
];

const projectRoutes = [...routesAdmin, ...routesGeneral];
export default projectRoutes;