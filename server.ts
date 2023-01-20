import { serve } from "aleph/react-server";
import {presetUno} from "https://esm.sh/@unocss/preset-uno";

serve({
  ssr: true,
  unocss: {
    presets: [presetUno()],
  },
});
