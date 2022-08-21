export const checkApiRequestValidation = (method, req) => {
  if (!req.headers || !req.method) return false;

  switch (method) {
    case "POST":
      //add additional conditions for validation
      return true;
    case "GET":
      //add additional conditions for validation
      return true;
  }
};
