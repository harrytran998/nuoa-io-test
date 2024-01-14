import { ofetch } from "ofetch";

export const globalFetch = async (requestInfo: RequestInfo) => {
  try {
    return await ofetch(requestInfo, {
      onRequestError(context) {
        console.log("onRequestError  👻  context:", context.error);
      },
    });
  } catch (error) {}
};
