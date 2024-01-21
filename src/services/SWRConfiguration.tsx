import { SWRConfig } from "swr";
import { fetcherGet } from "./axios";
import { IReactNode } from "@types";

export default function SWRConfiguration({ children }: IReactNode) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        fetcher: fetcherGet,
        onErrorRetry({ retryCount }) {
          if (retryCount > 4) return;
        },
      }}
    >
      {children}
    </SWRConfig>
  );
}
