import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import Rules from "./Rules";
import { useState } from "react";
import { Button, OutlineButton } from '../Components/Styled/Button';



const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setselectedNumber] = useState();
    const [currentDice, setrcurrentDice] = useState(1);
    const [error, setError] = useState();
    const [showRules, setShowRules] = useState();

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const roleDice = () => {
        if (!selectedNumber) {
            setError("you have not selected any number");
            return;
        };
        const randomNumber = generateRandomNumber(1, 7);
        setrcurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
        setScore((prev) => prev + randomNumber);
    } else {
        setScore((prev) => prev - 2);
    }
    setselectedNumber(undefined);
};

    const resetScore = () => {
        setScore(0);
    }

  return (
    <MainContainer>
        <div className="top_section">
            <TotalScore score={score}/>
            <NumberSelector 
            setError={setError}
            error={error}
            selectedNumber={selectedNumber}
            setselectedNumber={setselectedNumber}
            />
        </div>
        <RollDice currentDice={currentDice} roleDice={roleDice} />
        <div className="btns">
            <OutlineButton onClick={resetScore}>reset</OutlineButton>
            <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide " : "Show "}rules</Button>
        </div>
        {showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`
     padding-top: 50px;
    .top_section {
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .btns {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        text-transform: capitalize;
    }
`