export const getSubscriptions = async () => {
  const data = await fetch("/subscriptions");
  return data.json();
};

export const getSubscriptionById = async (id) => {
  const data = await fetch(`/subscriptions/${id}`);
  return data.json();
};

export const createSubscription = async (payload) => {
  const data = await fetch("/subscriptions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: payload }),
  });
  return data.json();
};

export const updateSubscription = async (id, payload) => {
  const data = await fetch(`/subscription/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ updatedData: payload }),
  });

  return data.json();
};

export const deleteSubscription = async (id) => {
  const data = await fetch(`/subscription`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ subscriptionIds: id }),
  });
  return data.json();
};
