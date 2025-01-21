import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
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
      <Route path="/sistems/flexxus" element={<Flexxus />} />
      <Route path="/sistems/alegra" element={<Alegra />} />
      <Route path="/sistems/facil-virtual" element={<FacilVirtual />} />
      <Route path="/sistems/wubook" element={<Wubook />} />
      <Route path="/sistems/fudo" element={<Fudo />} />
    </Route>
  )
);
