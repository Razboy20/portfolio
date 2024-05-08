import { type VoidComponent } from "solid-js";
import { Motion } from "solid-motionone";

const Home: VoidComponent = () => {
  return (
    <>
      <div class="absolute right-0 top-0">
        <svg width="335" height="250" viewBox="0 0 335 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.8" cx="484" cy="-234" r="476" stroke="#221A00" stroke-width="16" />
          <circle opacity="0.8" cx="484" cy="-234" r="373" stroke="#352800" stroke-width="16" />
        </svg>
      </div>
      <div class="mt-20 h-full w-full flex flex-1 flex-col scale-45 items-center justify-center sm:mt-0 md:scale-100 sm:scale-80">
        <div>
          <h1 class="overflow-y-hidden text-6xl font-medium">
            <Motion.span
              class="inline-block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, easing: [0.19, 1, 0.22, 1], delay: 0.1 }}
            >
              Hi!
            </Motion.span>{" "}
            <Motion.span
              class="inline-block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, easing: [0.19, 1, 0.22, 1], delay: 0.2 }}
            >
              i'm
            </Motion.span>
          </h1>
          <h2 class="overflow-y-hidden whitespace-nowrap font-montserrat text-9xl font-bold -ml-2">
            <Motion.span
              class="inline-block from-accent to-red-600 bg-gradient-to-r bg-clip-text pb-3 text-transparent"
              initial={{ y: "100%", opacity: 0.7, "--gradient-position": 0 }}
              animate={{ y: 0, opacity: 1, "--gradient-position": 1 }}
              transition={{ duration: 1, easing: [0.19, 1, 0.22, 1], delay: 0.6 }}
            >
              Razboy20
            </Motion.span>
            <Motion.span
              class="inline-block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, easing: [0.19, 1, 0.63, 1.41], delay: 0.7 }}
            >
              .
            </Motion.span>
          </h2>
          <h3 class="flex items-center gap-3 overflow-y-hidden text-2.5rem font-medium lowercase -mt-5 sm:text-4xl">
            <Motion.span
              class="inline-block"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, easing: [0.19, 1, 0.22, 1], delay: 1.8 }}
            >
              Developer
            </Motion.span>
            <Motion.span
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, easing: [0.19, 1, 0.22, 1], delay: 1.95 }}
              class="mt-1 inline-block h-1.5 w-1.5 bg-accent"
            ></Motion.span>
            <Motion.span
              class="inline-block"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, easing: [0.19, 1, 0.22, 1], delay: 2.2 }}
            >
              Student
            </Motion.span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Home;
