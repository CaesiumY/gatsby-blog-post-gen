import { info, start, complete, star, error } from "signale";
import { prompt } from "inquirer";
import { existsSync } from "fs";

const DEFAULT_CONTENTS_ADDRESS = "/content/blog";

const getTitle = async (target: string) => {
  const answer = await prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the post title: ",
      default: () => `Other`,
      validate: async (value: string) => {
        if (value.includes("'")) return "Cannot use single quote";

        const sanitizedValue = value.toLowerCase().replace(/ +/g, "-");
        const fileName = `${target}/${sanitizedValue}.mdx`;

        const isAlreadyExist = existsSync(fileName);

        if (isAlreadyExist) error("File is Already Exists! Please try again.");

        return true;
      },
    },
  ]);

  return answer.title;
};

export default (async () => {
  info("Run gatsby-blog-post-gen...");
  start(`Let's create a new Blog Post!`);

  const title = await getTitle("");

  complete("Success to generate blog post frame!");
  star("Go write your post!");

  console.log("process :>> ", process.cwd());
  console.log("process.argv", process.argv);
})();
