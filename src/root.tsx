// @refresh reload
import "@unocss/reset/tailwind-compat.css";
import "virtual:uno.css";

import { Suspense } from "solid-js";
import { Body, ErrorBoundary, FileRoutes, Head, Html, Link, Meta, Routes, Scripts, Title } from "solid-start";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Root() {
  return (
    <Html lang="en" class="h-full">
      <Head>
        <Title>Razboy20</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="theme-color" content="#F0C000" />
        <Meta name="description" content="I'm Razboy20." />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <Body class="min-h-full w-full flex flex-col bg-bg font-sans text-primary-50">
        <Suspense>
          <ErrorBoundary>
            <Navbar />
            <Routes>
              <FileRoutes />
            </Routes>
            <Footer />
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
