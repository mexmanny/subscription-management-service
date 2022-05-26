import styled from "@emotion/styled";

export const CreateFormContainer = styled.div`
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
    max-width: 100%;
    padding: 0;
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

export const CreateFormStyle = styled.div`
  @media screen and (max-width: 600px) {
    max-width: 100%;
  }
  background-color: white;
  max-width: 500px !important;
  width: 100%;
  position: relative;
  text-align: center;
  padding: 1rem;
  border-radius: 6px;

  form {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    h4 {
      width: 100%;
      text-align: left;
      margin-left: 2rem;
      margin-bottom: 6px;
    }

    input {
      width: 90%;
      margin-bottom: 1rem;
    }

    textarea {
      width: 95%;
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
        margin-right: 2rem;

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
