import styled from "@emotion/styled";

export const EditPageContainer = styled.div`
  background: #313131;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-direction: column;

    overflow-x: hidden;
  }
  margin-top: 0;
  height: 100vh;
  margin-bottom: 0;
  padding: 0;
`;

export const CurrentSubscriptionContainer = styled.div`
  align-self: center;
  width: 80%;
  margin-left: 320px;

  @media screen and (max-width: 600px) {
    margin-left: 1rem;
  }
  margin-right: 20px;
  height: 100%;
  color: white;
  min-width: 350px;

  h1 {
    text-align: center;
  }
`;
