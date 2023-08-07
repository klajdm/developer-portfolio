import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2023-07-31",
  useCdn: false,
  basePath: "/admin",
};

export const sanityClient = createClient(config);

export const urlFor = (source) => imageUrlBuilder(config).image(source);
