export const getSpendingInfo = async () => {
  const data = await fetch("subscriptions/reports");
  return data.json();
};
