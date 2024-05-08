import type { AnchorProps } from "@solidjs/router";
import { A } from "@solidjs/router";
import { createSignal, onMount, splitProps } from "solid-js";
import type { MotionProxy } from "solid-motionone";
import { createMotion } from "solid-motionone";

const MotionA = (props: Omit<Parameters<MotionProxy>[0] & AnchorProps, "tag">) => {
  let ref!: HTMLDivElement;

  const [local, others] = splitProps(props, ["children", "transition"]);
  const [isHydrated, setIsHydrated] = createSignal(false);

  onMount(() => {
    createMotion(ref, {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0 },
      transition: props.transition,
    });
    // document.body.style.backgroundColor = "red";
    setIsHydrated(true);
  });

  return (
    <div ref={ref} class="flex">
      <A
        {...others}
        classList={{
          invisible: !isHydrated(),
        }}
      >
        {props.children}
      </A>
    </div>
  );
};

export default function Navbar() {
  return (
    <nav class="fixed top-0 z-5 w-full flex justify-center gap-6 p-6 text-3xl font-bold lowercase text-primary-50 sm:gap-10 sm:text-5xl">
      <MotionA
        transition={{
          duration: 0.8,
          easing: [0.19, 1, 0.22, 1],
        }}
        href="/"
        class="relative cursor-pointer transition duration-100 ease-out after:(absolute left-0.2 right-0.2 h-1 scale-x-95 bg-accent opacity-0 transition duration-250 ease-out-expo content-empty -bottom-1 sm:left-0.4 sm:right-0.4 sm:h-1.5 -translate-y-1 sm:-bottom-2) active:scale-95"
        activeClass="text-accent after:(opacity-100 !translate-y-0 !scale-x-100)"
        end
      >
        Home
      </MotionA>
      <MotionA
        transition={{
          duration: 0.8,
          easing: [0.19, 1, 0.22, 1],
          delay: 0.075,
        }}
        href="/about"
        class="relative cursor-pointer transition duration-100 ease-out after:(absolute left-0.2 right-0.2 h-1 scale-x-95 bg-accent opacity-0 transition duration-250 ease-out-expo content-empty -bottom-1 sm:left-0.4 sm:right-0.4 sm:h-1.5 -translate-y-1 sm:-bottom-2) active:scale-95"
        activeClass="text-accent after:(opacity-100 !translate-y-0 !scale-x-100)"
      >
        About
      </MotionA>
      <MotionA
        transition={{
          duration: 0.8,
          delay: 0.16,
          easing: [0.19, 1, 0.22, 1],
        }}
        href="/projects"
        class="relative cursor-pointer transition duration-100 ease-out after:(absolute left-0.2 right-0.2 h-1 scale-x-95 bg-accent opacity-0 transition duration-250 ease-out-expo content-empty -bottom-2 sm:left-0.4 sm:right-0.4 sm:h-1.5 -translate-y-1 sm:-bottom-4) active:scale-95"
        activeClass="text-accent after:(opacity-100 !translate-y-0 !scale-x-100)"
      >
        Projects
      </MotionA>
    </nav>
  );
}
