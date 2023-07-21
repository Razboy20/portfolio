import { Motion } from "@motionone/solid";

export default function Footer() {
  return (
    <Motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, easing: "linear", delay: 1 }}
    >
      <div class="h-fit w-full flex flex-col items-center justify-center gap-x-10 gap-y-1 p-3 text-sm font-bold lowercase text-primary-50 opacity-70 transition-opacity sm:flex-row sm:p-4 sm:text-base focus-within:opacity-100 hover:opacity-100">
        <span>© 2023 Razboy20. All Rights Reserved.</span>
        <div class="flex gap-2 text-yellow-200 sm:gap-4">
          <a class="cursor-pointer focus-visible:underline hover:underline" href="https://github.com/Razboy20">
            Github
          </a>
          <a class="cursor-pointer focus-visible:underline hover:underline" href="#">
            Twitter
          </a>
          <a class="cursor-pointer focus-visible:underline hover:underline" href="#">
            Discord
          </a>
        </div>
      </div>
    </Motion.footer>
  );
}
