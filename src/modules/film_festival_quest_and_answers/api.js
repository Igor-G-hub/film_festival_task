export const fetchData = async (url, method, payload) => {
  const result = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload) || null,
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log(error));

  return result;
};

export const URLS = {
  getSurvey: "/api/v1/survey",
  submitForm: "/api/v1/survey/:id/answers",
};
