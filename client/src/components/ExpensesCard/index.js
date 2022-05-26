import React from "react";
import { ExpensesPageContainer, ExpensesStyle } from "./style";

function MonthlyExpenseCard({ children }) {
  return (
    <ExpensesPageContainer>
      {<ExpensesStyle>{children}</ExpensesStyle>}
    </ExpensesPageContainer>
  );
}

export default MonthlyExpenseCard;
