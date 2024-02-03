import styled from "styled-components";
import { Button } from '../Components/Styled/Button';

const StartGame = ({toggle}) => {
  return (
      <Container>
        <div className="image">
            <img src="./images/dices.png"/>
        </div>
        <div className="content">
            <h1>dice game</h1>
            <Button onClick={toggle}>play now</Button>
        </div>
      </Container>
  )
}

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
    padding: 40px;

    .image {
        img {
            max-width: 550px;
            margin-right: 40px;
        }
    }

    .content {
        h1 {
            text-transform: capitalize;
            font-size: 70px;
            font-weight: 700;
            margin-bottom: 20px;
            white-space: nowrap;
        }
    }
`;

