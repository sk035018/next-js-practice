import fs from "fs";
import path from "path";

const postDirectory = path.join(process.cwd(), "posts");

export const getPostsData = () => {
  const fileNames = fs.readdirSync(postDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const filePath = path.join(postDirectory, fileName);
    return JSON.parse(fs.readFileSync(filePath));
  });
  return allPostsData;
};
