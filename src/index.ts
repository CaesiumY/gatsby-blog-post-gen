import { program } from "commander";

export default (async () => {
  console.log("hello world!");
  // action
  program.action((cmd) => console.log("✓ Running!!"));

  program.parse(process.argv);
})();
