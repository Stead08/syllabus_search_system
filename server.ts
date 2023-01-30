import { serve } from "aleph/react-server";

import { presetUno } from "@unocss/preset-uno";

import routes from "./routes/_export.ts";

serve({
  ssr: false,
  unocss: {
    presets: [presetUno()],
  },
});
