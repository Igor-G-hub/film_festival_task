import ReactHtmlParser from "react-html-parser";

import { fetchData, URLS } from "modules/film_festival_quest_and_answers/api";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Description } from "shared/ui/Description/Description";
import { FlexContainer } from "shared/ui/FlexContainer/FlexContainer";
import { Title } from "shared/ui/Title/Title";
import { FormInput } from "shared/ui/FormInput/Input";
import { FormRadioGroup } from "shared/ui/FormRadioGroup/FormRadioGroup";
import { ActionButton } from "shared/ui/ActionButton/ActionButton";

export const IndexPage = () => {
  const [surveyData, setSurveyData] = useState(null);
  useEffect(() => {
    getSurvey();
  }, []);

  const getSurvey = async () => {
    const result = await fetchData(URLS.getSurvey, "GET");
    setSurveyData(result.data);
  };
  return (
    surveyData && (
      <>
        <FlexContainer variant="colored">
          <Title title={surveyData.attributes.title} />
        </FlexContainer>
        <FlexContainer>
          <Description
            html={ReactHtmlParser(surveyData.attributes.description)}
          />
        </FlexContainer>
        {surveyData.attributes.questions.map((question) => {
          return question.questionType === "rating" ? (
            <FlexContainer key={question.label}>
              <FormRadioGroup
                maxRating={question.attributes.max}
                label={question.label}
              />
            </FlexContainer>
          ) : (
            <FlexContainer key={question.label}>
              <FormInput label={question.label} fullWidth />
            </FlexContainer>
          );
        })}
        <FlexContainer>
          <ActionButton label="Submit" />
        </FlexContainer>
      </>
    )
  );
};
