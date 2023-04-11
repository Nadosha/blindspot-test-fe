import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  margin: auto;
  > Button {
    background: #7fb5ff;
  }
`;

export const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  align-self: center;
`;

export const GameBoard = styled.div`
  width: 100%;
  min-width: 650px;
  max-width: 950px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  margin: auto auto;
`;
export const Heading = styled.div`
  width: 100%;
  max-width: 850px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Controllers = styled.div`
  display: flex;
  margin-left: auto;
  > Button {
    display: flex;
    margin-left: auto;
  }
`;
