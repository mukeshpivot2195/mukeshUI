import { createHttpResponse } from "@coca-cola/kos-test-utils";

export const dispenserData = {
  id: "Cui Screen",
};

export const mockIngredients = {
  "/api/carb-water-pour": (requestId: string) => {
    const body = dispenserData;
    const response = createHttpResponse({
      body,
      headers: { "response-id": requestId },
    });
    return response;
  },
};
