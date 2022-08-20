import { fetchData, URLS } from "modules/film_festival_quest_and_answers/api";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

export const IndexPage = () => {
  const [surveyData, setSurveyData] = useState([]);
  useEffect(() => {
    getSurvey();
  });

  const getSurvey = async () => {
    const result = await fetchData(URLS.getSurvey, "GET");
    setSurveyData(result);
  };

  return <div>IndexPage</div>;
};
