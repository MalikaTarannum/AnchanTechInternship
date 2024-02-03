import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>total score</p>
    </ScoreContainer>
  )
}

export default TotalScore;
const ScoreContainer = styled.div`
    h1 {
        font-size: 100px;
    }
    p {
        font-weight: 500;
        font-size: 24px;
        text-transform: capitalize;
    }
`;
