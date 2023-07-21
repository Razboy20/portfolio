import type { VoidComponent } from "solid-js";

const NotFound: VoidComponent = () => {
  return (
    <>
      <div class="absolute right-0 top-0">
        <svg width="335" height="250" viewBox="0 0 335 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.8" cx="484" cy="-234" r="476" stroke="#221A00" stroke-width="16" />
          <circle opacity="0.8" cx="484" cy="-234" r="373" stroke="#352800" stroke-width="16" />
        </svg>
      </div>
      <div class="h-full w-full flex flex-1 flex-col items-center justify-center lowercase -mt-8">
        <h1 class="font-montserrat text-9xl font-bold text-accent">404</h1>
        <h2 class="text-3xl font-medium">Page not found.</h2>
      </div>
    </>
  );
};

export default NotFound;
