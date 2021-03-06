import { info, start, complete, star, error } from "signale";
import { prompt } from "inquirer";
import { existsSync } from "fs";

const DEFAULT_CONTENTS_ADDRESS = "/content/blog";

const getContentAddr = () => {
  const customArgIndex = process.argv.indexOf("--custom");
  const customValueIndex = customArgIndex + 1;

  if (customArgIndex === -1 || customValueIndex >= process.argv.length) {
    return DEFAULT_CONTENTS_ADDRESS;
  }

  return process.argv[customValueIndex].startsWith("/")
    ? process.argv[customValueIndex]
    : `/${process.argv[customValueIndex]}`;
};

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
        const fileName = `${target}/${sanitizedValue}/index.mdx`;

        const isAlreadyExist = existsSync(fileName);

        if (isAlreadyExist) error("File is Already Exists! Please try again.");

        return true;
      },
    },
  ]);

  return answer.title;
};

export default (async () => {
  const contentsAddr = getContentAddr();

  info("Run gatsby-blog-post-gen...");
  info(`Current contents Directory: ${contentsAddr}`);
  start(`Let's create a new Blog Post!`);

  const title = await getTitle("");

  complete("Success to generate blog post frame!");
  star("Go write your post!");

  console.log("process :>> ", process.cwd());
})();
