import { mount, StartClient } from "@solidjs/start/client";
import { inject } from "@vercel/analytics";

inject();
if (import.meta.env.DEV) {
  await import("solid-devtools");
}

mount(() => <StartClient />, document.getElementById("app")!);
