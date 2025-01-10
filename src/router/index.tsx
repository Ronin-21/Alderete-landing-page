import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Error404 from "./Error404";
import Home from "../pages/home/Home";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<Error404 />}>
      <Route path="*" element={<Error404 />} />
      <Route index element={<Home />} />
    </Route>
  )
);
