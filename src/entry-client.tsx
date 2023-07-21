import { inject } from "@vercel/analytics";
import { mount, StartClient } from "solid-start/entry-client";

inject();
// import "solid-devtools";

mount(() => <StartClient />, document);
