import { promisify } from "util";
import { exec } from "child_process";
import { ScriptParams } from "../types/ScriptParams";

const asyncExec = promisify(exec);

export default async function execute({ packageInfo }: ScriptParams) {
  console.log("Nothing Done");
}
