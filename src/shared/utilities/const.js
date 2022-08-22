export const checkApiRequestValidation = (method, req) => {
  if (!req.headers || !req.method) return false;
  if (req.headers.get("Content-Type") !== "application/json") return false;
  switch (method) {
    case "POST":
      //add additional conditions for validation
      return true;
    case "GET":
      //add additional conditions for validation
      return true;
  }
};
