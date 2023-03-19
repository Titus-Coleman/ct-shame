import Head from "next/head";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { Storage } from "aws-amplify";
import {
  withAuthenticator,
  Button,
  FileUploader,
  Collection,
  Image,
  Card,
  Flex,
} from "@aws-amplify/ui-react";
import { S3ProviderListOutputItem } from "@aws-amplify/storage";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const [imageKeys, setImageKeys] = useState<S3ProviderListOutputItem[]>([]);
  const [images, setImages] = useState<string[]>([]);

  const fetchImages = async () => {
    const { results } = await Storage.list("", { level: "public" });
    setImageKeys(results);
    const s3Images = await Promise.all(
      results.map(
        async (image) => await Storage.get(image.key!, { level: "public" })
      )
    );
    setImages(s3Images);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const onSuccess = (event: { key: string }) => {
    fetchImages();
  };

  return (
    <>
      <Head>
        <title>CT Shame</title>
        <meta
          name="description"
          content="Crypto Twitter's home for bad takes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <Navbar />

        <FileUploader
          acceptedFileTypes={["image/*"]}
          accessLevel="public"
          variation="drop"
          onSuccess={onSuccess}
        />

        <Collection
          items={images}
          type={"grid"}
          padding={"1rem"}
          maxWidth={"100%"}
          margin={"0 auto"}
          justifyContent={"center"}
        >
          {(item, index) => (
            <picture key={index}>
              <Card
                borderRadius={"3rem"}
                backgroundColor={"black"}
                boxShadow={"10px 5px 5px grey"}
                margin={"1rem"}
              >
                <Image src={item} alt={""} />
              </Card>
            </picture>
          )}
        </Collection>
      </main>
    </>
  );
}

export default withAuthenticator(Home);
