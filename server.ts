import { serve } from "aleph/react-server";
import {presetUno} from "@unocss/preset-uno";

const DEFAULT_PORT = 8080;
const argPort = flags.parse(Deno.args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;
if (isNaN(port)) {
  console.error('Port is not a number.');
  Deno.exit(1);
}

serve({
  ssr: true,
  port: port,
  unocss: {
    presets: [presetUno()],
  },
});
