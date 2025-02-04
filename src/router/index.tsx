import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Alegra from "../pages/sistems/Alegra";
import FacilVirtual from "../pages/sistems/FacilVirtual";
import Flexxus from "../pages/sistems/Flexxus";
import Fudo from "../pages/sistems/Fudo";
import Wubook from "../pages/sistems/Wubook";
import Error404 from "./Error404";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<Error404 />}>
      <Route path="*" element={<Error404 />} />
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sistemas/flexxus" element={<Flexxus />} />
      <Route path="/sistemas/alegra" element={<Alegra />} />
      <Route path="/sistemas/facil-virtual" element={<FacilVirtual />} />
      <Route path="/sistemas/wubook" element={<Wubook />} />
      <Route path="/sistemas/fudo" element={<Fudo />} />
    </Route>
  )
);
