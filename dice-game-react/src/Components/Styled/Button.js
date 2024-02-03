import styled from "styled-components";

export const Button = styled.button`
    background: none;
    border: none;
    background: #000;
    color: #fff;
    padding: 10px 18px;
    min-width: 220px;
    border-radius: 4px;
    text-transform: capitalize;
    font-size: 15px;
    font-weight: 500;
    border: 1px solid transparent;
    transition: 0.4s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: #fff;
        border: 1px solid #000;
        color: #000;
        transition: 0.3s ease-in-out;
    }
    `;
export const OutlineButton = styled(Button)`
    background: none;
    border: none;
    background: #fff;
    color: #000;
    border: 1px solid #000;
    &:hover {
        background-color: #000;
        border: 1px solid transparent;
        color: #fff;
    }
`;