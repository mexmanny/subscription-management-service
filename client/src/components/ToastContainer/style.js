import styled from "@emotion/styled";

export const ToastWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 1rem;
  right: 1rem;
`;

export const Toast = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 15px;
  font-size: 18px;
  border-radius: 8px;
  width: 300px;
  align-items: center;
  color: white;

  &.success {
    background-color: #2ecc71;
  }

  &.error {
    background-color: #e74c3c;
  }
`;
