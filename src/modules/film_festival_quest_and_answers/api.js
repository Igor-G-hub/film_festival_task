export const fetchData = async (url, method) => {
  const result = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log(error));

  return result;
};

export const URLS = {
  getSurvey: "/api/v1/survey",
};
