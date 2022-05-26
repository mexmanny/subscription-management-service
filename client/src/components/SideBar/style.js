import styled from "@emotion/styled";

export const NavBarContainer = styled.div`
  border-right: 2px solid rgb(25, 25, 25);
  border-radius: 6px;
  width: 200px;
  margin-left: 4px;

  @media screen and (max-width: 600px) {
    width: 200px;
    display: none;
  }

  position: fixed;
  top: 3.5rem;

  background-color: #2e4050;

  a,
  button {
    border-radius: 6px;

    margin-top: 0;
    color: #eee;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: 0.3s;
    font-family: "Caveat Brush", cursive;
    font-size: 1.2em;

    &:hover {
      color: black;
      background: white;
    }
  }
`;
