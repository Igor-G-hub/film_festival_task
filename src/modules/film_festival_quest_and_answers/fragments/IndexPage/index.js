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
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setAnswersData,
  setError,
  setIsSucceed,
} from "modules/film_festival_quest_and_answers/redux";
import { routes } from "modules/main/routes";

export const IndexPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [surveyData, setSurveyData] = useState(null);
  const [collectionOfAnswers, setCollectionOfAnswers] = useState([]);
  const questions = surveyData?.attributes?.questions;

  useEffect(() => {
    dispatch(setError("Provjera svega"));
    getSurvey();
  }, []);

  const getSurvey = async () => {
    const result = await fetchData(URLS.getSurvey, "GET");
    if (!result);
    if (result.errors);
    // set errorMessage;

    setSurveyData(result.data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  const submitForm = async () => {
    const { id } = surveyData;
    const url = URLS.submitForm.replace(":id", id);
    const payload = {
      data: {
        type: "surveyAnswers",
        attributes: {
          answers: collectionOfAnswers,
        },
      },
    };
    const result = await fetchData(url, "POST", payload);
    if (!result) return;
    handleAfterSubmit(result);
  };

  const handleAfterSubmit = (result) => {
    result.data.attributes.answers.forEach((answer) => {
      const findAnswer = questions.find(
        (question) => question.questionId === answer.questionId
      );
      answer.question = findAnswer.label;
    });
    dispatch(setAnswersData(result));
    dispatch(setIsSucceed(true));
    navigate(routes.success);
  };

  const handleOnChange = (questionId, value) => {
    let newCollectionOfAnswers = JSON.parse(
      JSON.stringify(collectionOfAnswers)
    );
    newCollectionOfAnswers = newCollectionOfAnswers.filter(
      (answer) => answer.questionId !== questionId
    );
    newCollectionOfAnswers.push({
      questionId,
      answer: value,
    });
    setCollectionOfAnswers(newCollectionOfAnswers);
  };

  return (
    questions && (
      <>
        <FlexContainer variant="colored">
          <Title title={surveyData.attributes.title} />
        </FlexContainer>
        <FlexContainer>
          <Description
            html={ReactHtmlParser(surveyData.attributes.description)}
          />
        </FlexContainer>
        <form onSubmit={(e) => onSubmit(e)}>
          {questions.map((question) => {
            return question.questionType === "rating" ? (
              <FlexContainer key={question.label}>
                <FormRadioGroup
                  isRequired={question.required}
                  maxRating={question.attributes.max}
                  minRating={question.attributes.min}
                  label={question.label}
                  handleOnChange={handleOnChange}
                  questionId={question.questionId}
                />
              </FlexContainer>
            ) : (
              <FlexContainer key={question.label}>
                <FormInput
                  label={question.label}
                  fullWidth
                  isRequired={question.required}
                  handleOnChange={handleOnChange}
                  questionId={question.questionId}
                />
              </FlexContainer>
            );
          })}
          <FlexContainer>
            <ActionButton label="Submit" type="Submit" />
          </FlexContainer>
        </form>
      </>
    )
  );
};
