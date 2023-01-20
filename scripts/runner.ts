import path from "path";
import { promises as fs } from "fs";
import packageInfo from "../package.json";
import { ScriptParams } from "./types/ScriptParams";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const runner = async () => {
  const step = process.argv[2].replace("--", "");
  const files = (await fs.readdir(path.join(__dirname, step))).filter((f) => f.endsWith("ts"));
  await Promise.all(
    files.map(async (f) => {
      const { default: func }: { default: (params: ScriptParams) => void } = await import(`./${step}/${f}`);
      try {
        console.log(`Running ${step} script '${f}'`);
        await func({
          env: process.env,
          packageInfo,
        });
      } catch (e) {
        console.error(`SCRIPT RUNNER: failed to execute ${step} script '${f}'`);
        console.error(e);
      }
    })
  );
};

// Self-invocation async function
(async () => {
  await runner();
})().catch((err) => {
  console.error(err);
  throw err;
});
