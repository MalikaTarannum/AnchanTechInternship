import React from 'react'
import styled from 'styled-components';


const Rules = () => {
  return (
    <RulesContainer>
        <h2>how to play dice game</h2>
        <div className="text">
            <p>1.  Select any number</p>
            <p>2.  Click on dice image</p>
            <p>3.  After click on dice if selected number is equal to dice number you will get   same point as dice{" "}</p>
            <p>4.  If you get wrong guess than 2 points will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
        max-width: 700px;
        margin: 0 auto;
        background-color: #fbf1f1;
        padding: 20px;
        margin-top: 40px;
        border-radius: 5px;
    h2 {
        font-size: 24px;
        text-transform: capitalize;
    }
    .text {
        margin-top: 15px;
    }
`
