import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn , token } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: !token,
  perspective: TextDecoderoken ? "previewDrafts" : "published",
  stega: {
    enabled: token ? true : false,
    studioUrl: "/studio",
  },
  token,
});
