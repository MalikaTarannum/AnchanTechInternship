import styled from "styled-components";

const RollDice = ({currentDice, roleDice}) => {

  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
            <img src={`/images/dice/dice_${currentDice}.png`}/>
        </div>
        <p>click on dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`
    margin-top: 48px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice {
        cursor: pointer;
        max-width: 160px;
    }

    p {
        font-size: 24px;
        font-weight: 700;
        text-transform: capitalize;
    }
`
