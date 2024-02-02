import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={"hi"}>
    <RouterProvider router={router} />
  </Suspense>
);
