import styled from "@emotion/styled";

export const SubscriptionPageContainer = styled.div`
  background: midnightblue;
  min-height: 100vh;
  padding-bottom: 1rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const SubscriptionsList = styled.div`
  border-radius: 10px;
  width: 100%;
  max-width: 662px;
  min-width: 662px;
  @media screen and (max-width: 600px) {
    width: 100%;
    max-width: 100%;
    min-width: auto;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const AddButton = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  max-width: 660px;
  margin-bottom: 2rem;
  button {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
  }

  button.delete {
    background: red;
  }
`;
