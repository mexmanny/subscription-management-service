export const getSubscriptionImage = async (id) => {
  const data = fetch(`/api/images/${id}`);
  return data.json();
};
