import { Storage } from "aws-amplify";

const fetchImages = async () => {
  const { results } = await Storage.list("", { level: "public" });
  return;
};

export default fetchImages;
