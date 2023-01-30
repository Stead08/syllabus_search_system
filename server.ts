import { serve } from "aleph/react-server";

import { presetUno } from "@unocss/preset-uno";


serve({
  ssr: true,
  unocss: {
    presets: [presetUno()],
  },
});
