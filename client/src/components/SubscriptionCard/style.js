import styled from "@emotion/styled";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  a {
    text-decoration: none;
    apperance: none;
  }
`;

export const SubscriptionStyle = styled.div`
  padding: 0.5rem 1rem;
  font-family: "Caveat Brush", cursive;
  font-size: 20px;
  background: darkslateblue;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  &.space-between {
    justify-content: space-between;
  }
  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  .left,
  .right {
    display: flex;
    align-items: center;
  }
  .left {
    width: 100%;

    p.subscription-spacer {
      width: 441px;
    }
  }

  @media screen and (max-width: 600px) {
    img {
      width: 30px !important;
      height: 30px !important;
    }
    .left {
      p.subscription-spacer {
        width: 240px !important;
      }
    }
    p {
      width: 80px !important;
      font-size: 16px;
    }

    p.frequency,
    .right {
      display: none;
    }

    .edit-btn,
    .delete-btn {
      width: 30px;
      height: 20px;
      background: none;
      text-decoration: underline;
      opacity: 0.5;
      padding: 0;
    }

    .edit-btn {
      margin-left: 0px;
    }
    input {
      width: 20px;
      height: 20px;
      margin-right: 1rem !important;
      margin-left: 0rem;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }
  .infoContainer {
    display: flex;
    width: 100%;
    a {
      text-decoration: none;
      color: white !important;
    }
  }

  input {
    width: 20px;
    height: 20px;
    margin-right: 2rem;
    margin-bottom: 0;
  }
  p {
    width: 120px;
    margin-left: 4px;
  }

  .subscription-spacer {
    margin-right: 1.5rem;
  }

  img {
    align-self: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-top: 12px;
    margin-right: 1rem;
  }

  button {
    font-weight: bold;
    height: 40px;
    margin-left: 16px;
  }
`;
