import styled from "@emotion/styled";
export const PaginationContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  button {
    width: 50px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 50%;

    background: #3498db;
    margin-right: 12px;

    :hover {
      background-color: #34495e;
    }
  }

  button.active {
    background-color: #f9f9f9;
    color: black;
  }
`;
