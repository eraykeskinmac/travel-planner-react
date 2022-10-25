import styled from "styled-components";

export const Page = styled.div`
  height: 100%;
  width: 100%;
`;

export const CenteredPage = styled(Page)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  background-color: #161616;
  border-radius: 8px;
  padding: 24px;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  background-color: inherit;
  padding: 0;
  color: #fff;
  font-family: "Inter";
  font-size: 1.2rem;
  margin-top: 10px;
`;

export const InputLabel = styled.label`
  color: #c4c4c4;
  font-size: 0.9rem;
`;

export const InputContainerHeader = styled.div``;

export const Button = styled.button`
  width: 100%;
  padding: 20px 0px;
  border: none;
  outline: none;
  font-size: 14px;
  font-family: "Inter";
  color: #fff;
  background-color: #0058f0;
  cursor: pointer;
  border-radius: 8px;
  transition: 300ms background-color ease;
  &:hover {
    background-color: #1168fe;
  }
`;
