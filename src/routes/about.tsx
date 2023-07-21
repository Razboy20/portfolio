import type { VoidComponent } from "solid-js";

const About: VoidComponent = () => {
  return (
    <>
      <div class="absolute right-0 top-0">
        <svg width="335" height="250" viewBox="0 0 335 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.8" cx="484" cy="-234" r="476" stroke="#221A00" stroke-width="16" />
          <circle opacity="0.8" cx="484" cy="-234" r="373" stroke="#352800" stroke-width="16" />
        </svg>
      </div>
      <div class="h-full w-full flex flex-1 flex-col items-center justify-center lowercase">
        <h1 class="font-montserrat text-4xl font-bold text-accent">Work in Progress</h1>
      </div>
    </>
  );
};

export default About;
