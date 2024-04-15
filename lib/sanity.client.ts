import "server-only";
import {
  createClient,
  type ClientConfig,
  type QueryParams,
} from "@sanity/client";
import { projectId, dataset, apiVersion, token, mode } from "@/lib/env.api";

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: mode === "development" ? true : false,
  ignoreBrowserTokenWarning: true,
  token,
  perspective: "published",
};

const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  // Ensure qParams is never undefined when passed to client.fetch
  const queryParams: QueryParams = qParams || {}; // Assuming QueryParams can be defaulted to {}

  return client.fetch<QueryResponse>(query, queryParams, {
    cache: mode === "development" ? "no-store" : "force-cache",
    next: { tags },
  });
}
