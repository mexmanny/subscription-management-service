import styled from "@emotion/styled";

export const SubscriptionFormContainer = styled.div`
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100vh;
  padding: 10px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    overflow: hidden;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -12px;
  right: 0;
  color: black;
  cursor: pointer;
  font-weight: bold;
  background: none;
  font-size: 16px;
`;

export const SubscriptionFormStyle = styled.div`
  background-color: white;
  max-width: 50vw;
  width: 100%;
  position: relative;
  text-align: center;
  padding: 1rem;
  border-radius: 6px;

  @media screen and (max-width: 600px) {
    max-width: 100%;
  }

  form {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    h4 {
      background: none;
      color: black;
      width: 100%;
      text-align: left;
      margin-left: 3rem;
      margin-bottom: 6px;
      font-size: 16px;
    }

    input {
      width: 90%;
      margin-bottom: 1rem;
    }

    textarea {
      width: 95%;
      margin-left: 1rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    div.billingType {
      display: flex;
      margin-left: 1rem;
      width: 100%;
      align-items: center;

      label {
        display: flex;
        align-items: center;
        margin-left: 10px;

        input {
          width: 20px;
          height: 20px;
          margin-bottom: 0;
          margin-right: 12px;
        }
      }
    }
  }
`;
