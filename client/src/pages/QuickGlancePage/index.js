import React from "react";
import Main from "../../components/Layout/Main";
import { useQuery } from "react-query";
import { getSpendingInfo } from "../../controllers/ReportsController";
import ExpensesCard from "../../components/ExpensesCard";
import { ExpenseWrapper } from "./style";

function QuickGlancePage() {
  const { data: spendingReport } = useQuery(["spendingReport"], async () => {
    const spendingData = await getSpendingInfo();
    return spendingData;
  });

  if (!spendingReport) return null;
  return (
    <Main>
      <div style={{ backgroundColor: "midnightblue" }}>
        <h1 style={{ textAlign: "center" }}>Spending At A Glance</h1>
        <ExpenseWrapper>
          <ExpensesCard>
            <h2>Monthly Subscriptions</h2>
            <p>${spendingReport.monthlyPrice}</p>
          </ExpensesCard>

          <ExpensesCard>
            <h2>Annual Subscriptions</h2>
            <p>${spendingReport.annualPrice}</p>
          </ExpensesCard>
        </ExpenseWrapper>
      </div>
    </Main>
  );
}

export default QuickGlancePage;
