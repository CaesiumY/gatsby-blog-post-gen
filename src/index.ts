import { info, start, complete, star, error } from "signale";
import { prompt } from "inquirer";

const DEFAULT_CONTENTS_ADDRESS = "/content/blog";

const getCategory = async () => {};

export default (async () => {
  info("Run gatsby-blog-post-gen...");
  start(`Let's create a new Blog Post!`);

  error("Something's wrong");

  complete("Success to generate blog post frame!");
  star("Go write your post!");

  console.log("process :>> ", process.cwd());
  console.log("process.argv", process.argv);
})();
