// @refresh reload
import "@unocss/reset/tailwind-compat.css";
import "virtual:uno.css";

import { RouteSectionProps, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Root = (prop: RouteSectionProps) => {
  return (
    <Suspense>
      <Navbar />
      {prop.children}
      <Footer />
    </Suspense>
  );
};

export default function App() {
  return (
    <Router root={Root} base="/~elies">
      <FileRoutes />
    </Router>
  );
}
