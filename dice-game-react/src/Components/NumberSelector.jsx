
import styled from "styled-components";

const NumberSelector = ({setError, error, selectedNumber, setselectedNumber}) => {
    const arrayNumber = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler = (value) => {
        setselectedNumber(value)
        setError("")
    }
  return (
    <NumberSelectorContainer>
        <p className="error">{error}</p>
        <div className="flex">
            {arrayNumber.map((value, i) => (
                <Box 
                isSelected={value == selectedNumber}
                key={i} onClick={()=> numberSelectorHandler(value)}
                >{value}</Box>
            ))}
        </div>
        <p>select number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
   .flex {
    display: flex;
    gap: 20px;
    margin-bottom: 13px;
   } 
   p {
    font-size: 24px;
    font-weight: 500;
    text-align: end;
    text-transform: capitalize;
   }
   .error {
    color: red;
    font-size: 18px;
    margin-bottom: 8px;
   }
`

const Box = styled.div`
    width: 72px;
    height: 72px;
    display: grid;
    place-items: center;
    border: 1px solid #000;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`