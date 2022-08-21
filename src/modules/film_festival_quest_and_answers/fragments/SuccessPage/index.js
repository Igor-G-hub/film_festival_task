import PropTypes from "prop-types";
import React from "react";
import { Description } from "shared/ui/Description/Description";
import { FlexContainer } from "shared/ui/FlexContainer/FlexContainer";
import { Title } from "shared/ui/Title/Title";
import { useSelector } from "react-redux";
import { answersDataSelector } from "modules/film_festival_quest_and_answers";

export const SuccessPage = () => {
  const answerData = useSelector(answersDataSelector);
  const answers = answerData?.data?.attributes?.answers;

  return (
    <>
      <FlexContainer variant="colored">
        <Title title="Successfully submitted!" />
      </FlexContainer>
      <FlexContainer>
        <Description
          text="Thank you! Your answers where successfully submitted and bellow you can see your preview of the questions and answers
that were submitted:"
        />
      </FlexContainer>
      <FlexContainer></FlexContainer>

      {answers.map((answer, index) => (
        <FlexContainer key={answer.questionId} margin="20px">
          <Description text={answer.question} variant="small" />
          <Description text={answer.answer} variant="small" />
        </FlexContainer>
      ))}
    </>
  );
};
