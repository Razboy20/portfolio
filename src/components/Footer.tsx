import type { AnimationOptionsWithOverrides } from "@motionone/solid";
import { Motion } from "@motionone/solid";
import { writeClipboard } from "@solid-primitives/clipboard";
import type { ComponentProps, JSX } from "solid-js";
import { For, createSignal, splitProps } from "solid-js";
import styles from "./Footer.module.scss";

import { Portal } from "solid-js/web";

interface SwitchLinkProps extends ComponentProps<"div"> {
  children: JSX.Element;
  onHover: JSX.Element;
}
const SwitchLink = (props: SwitchLinkProps) => {
  const [unhoveredRef, setUnhoveredRef] = createSignal<HTMLSpanElement>();
  const [hoveredRef, setHoveredRef] = createSignal<HTMLSpanElement>();

  const [isHovering, setIsHovering] = createSignal(false);
  const width = () => (isHovering() ? hoveredRef()?.offsetWidth : unhoveredRef()?.offsetWidth) ?? 0;

  const [local, others] = splitProps(props, ["children", "class", "onHover"]);

  const transition: AnimationOptionsWithOverrides = {
    duration: 0.32,
    easing: [0.44, 0.15, 0, 1],
  };

  return (
    <Motion.div
      animate={{
        width: `${width()}px`,
      }}
      transition={transition}
      class={`relative flex-inline flex-col items-center overflow-y-clip ${local.class ?? ""}`}
      {...others}
      onMouseEnter={[setIsHovering, true]}
      onMouseLeave={[setIsHovering, false]}
    >
      <Motion.span
        ref={setUnhoveredRef}
        class="w-fit"
        initial={{
          y: 0,
        }}
        animate={{
          y: isHovering() ? 22 : 0,
        }}
        transition={transition}
      >
        {local.children}
      </Motion.span>
      <Motion.span
        ref={setHoveredRef}
        initial={{
          y: 20,
          x: "-50%",
        }}
        animate={{
          y: isHovering() ? 0 : -22,
          x: "-50.00001%",
        }}
        transition={transition}
        style={{
          transform: "translate(-50%, var(--motion-translateY)) !important",
        }}
        class="absolute left-1/2"
      >
        {local.onHover}
      </Motion.span>
    </Motion.div>
  );
};

export default function Footer() {
  let popoverRef: HTMLDivElement;
  let popoverId = 0;

  const [popoverEls, setPopoverEls] = createSignal<[JSX.Element, number][]>([]);

  const CopyPopover = (props: { id: number }) => {
    const { x, y, width, height } = popoverRef.getBoundingClientRect();

    return (
      <div
        onAnimationEnd={() => {
          setTimeout(() => {
            setPopoverEls(popoverEls().filter((el) => el[1] !== props.id));
          }, 1000);
        }}
        style={{
          "--translateX": `calc(${x + width / 2}px - 50%)`,
          "--translateY": `${y - height - 16}px`,
        }}
        class={
          styles.popover +
          " absolute left-0 top-0 flex flex-col gap-2 border border-primary-800 rounded-md bg-[rgb(19_14_1)] p-2 shadow-md"
        }
      >
        <span class="text-xs text-primary-50">Copied!</span>
      </div>
    );
  };

  return (
    <Motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, easing: "linear", delay: 1 }}
    >
      <div class="h-fit w-full flex flex-col items-center justify-center gap-x-10 gap-y-1 p-3 text-sm font-bold lowercase text-primary-50 opacity-70 transition-opacity sm:flex-row sm:p-4 sm:text-base focus-within:opacity-100 hover:opacity-100">
        <span>© 2023 Razboy20. All Rights Reserved.</span>
        <div class="flex gap-2 text-yellow-200 sm:gap-4">
          <a
            class="cursor-pointer transition duration-100 active:scale-95 focus-visible:underline hover:underline"
            href="https://github.com/Razboy20"
          >
            Github
          </a>
          <a
            class="cursor-pointer transition duration-100 active:scale-95 focus-visible:underline hover:underline"
            href="#"
          >
            Twitter
          </a>
          {/* <div class="cursor-pointer focus-visible:underline hover:underline">
            Discord
          </div> */}
          <SwitchLink
            ref={(e) => (popoverRef = e)}
            style={{
              transition: "color 320ms, transform 100ms",
            }}
            onClick={() => {
              void writeClipboard("razboy20");
              setPopoverEls([...popoverEls(), [<CopyPopover id={++popoverId} />, popoverId]]);
            }}
            class="cursor-pointer ease-out active:scale-95 hover:text-primary-50 children:focus-visible:underline children:hover:underline"
            onHover="razboy20"
          >
            Discord
          </SwitchLink>

          <For each={popoverEls()}>{([el]) => <Portal>{el}</Portal>}</For>
        </div>
      </div>
    </Motion.footer>
  );
}
