import React, { useEffect, useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../Pagination";

import SubscriptionCard from "../SubscriptionCard";
import { AddButton, SubscriptionPageContainer } from "./style";
import { SubscriptionsList } from "./style";
import { useQuery } from "react-query";
import useToast from "../hooks/useToast";
import {
  deleteSubscription,
  getSubscriptions,
} from "../../controllers/SubscriptionsController";

import { Helmet } from "react-helmet";

function SubscriptionList() {
  const navigate = useNavigate();
  const location = useLocation();
  const showToast = useToast();

  const [currentPage, setCurrentPage] = useState(1);
  const [subscriptionsPerPage] = useState(10);
  const [selectedItems, setSelecteedItems] = useState([]);
  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());
  const { data: subscriptionsList, refetch: refetchSubscriptions } = useQuery(
    ["subscriptionsList", [lastUpdateTime]],
    async () => {
      const subscriptions = await getSubscriptions();
      return subscriptions;
    }
  );

  useEffect(() => {
    setLastUpdateTime(Date.now());
  }, [location.pathname]);

  const handleMultipleDelete = async () => {
    try {
      await deleteSubscription(selectedItems);
      showToast({
        type: "success",
        message: `${selectedItems.length} subscriptions deleted succesfully`,
      });
      setSelecteedItems([]);
    } catch (error) {}
  };

  //Helper method which calls a broken API to demonstrate error toast usage
  const callBrokenAPI = () => {
    fetch(`/brokenAPI`)
      .then((res) => res.json())
      .then((subscriptionInfo) => {
        //Will never enter this block, API always throws an error on purpose
      })
      .catch((error) => {
        showToast({
          type: "error",
          message: "Something went wrong as expected - " + error,
        });
      });
  };
  const handleSelect = (id) => {
    const currentSelected = [...selectedItems];
    if (currentSelected.includes(id)) {
      const updateSelected = currentSelected.filter((item) => item !== id);

      setSelecteedItems(updateSelected);
    } else {
      const updateSelected = [...selectedItems, id];

      setSelecteedItems(updateSelected);
    }
  };

  const indexOfLastSubscription = currentPage * subscriptionsPerPage;

  const indexOfFirstSubscription =
    indexOfLastSubscription - subscriptionsPerPage;

  const currentSubscriptions = [...(subscriptionsList || [])].slice(
    indexOfFirstSubscription,
    indexOfLastSubscription
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if (subscriptionsList) {
    return (
      <SubscriptionPageContainer>
        <button
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            backgroundColor: "#eb6651",
            color: "white",
          }}
          onClick={() => {
            callBrokenAPI();
          }}
        >
          Throw Error
        </button>
        <Helmet>
          <title>Subscription List</title>
        </Helmet>

        <h1 style={{ textAlign: "center" }}>Subscription Page</h1>

        <AddButton>
          <button
            onClick={() => {
              navigate(`/subscriptions/create`);
            }}
          >
            <FaPlusSquare
              style={{ marginRight: "10px", fontSize: "25px" }}
            ></FaPlusSquare>
            Add New Subscription
          </button>

          <button
            onClick={() => {
              navigate(`/quick-glance`);
            }}
          >
            Spending At A Glance
          </button>

          {selectedItems.length > 0 && (
            <button className="delete" onClick={() => handleMultipleDelete()}>
              Delete Subscriptions
            </button>
          )}
        </AddButton>

        <SubscriptionsList>
          {currentSubscriptions.map((subscription) => (
            <div
              key={subscription.id}
              title="Select multiple subscriptions to delete at once"
            >
              <SubscriptionCard
                subscriptionId={subscription.id}
                subscription={subscription}
                onDelete={() => refetchSubscriptions()}
                onSelect={(id) => handleSelect(id)}
                isSelected={selectedItems.includes(subscription.id)}
              />
            </div>
          ))}
        </SubscriptionsList>

        <Pagination
          subscriptionsPerPage={subscriptionsPerPage}
          totalSubscriptions={subscriptionsList.length}
          paginate={paginate}
          currentPageNumber={currentPage}
        ></Pagination>
      </SubscriptionPageContainer>
    );
  } else {
    return (
      <SubscriptionPageContainer>
        <Helmet>
          <title>Subscription List</title>
        </Helmet>
        <h1 style={{ textAlign: "center" }}>Subscription Page</h1>
        <SubscriptionsList>
          {[1, 2, 3, 4, 5].map((subscription) => (
            <div key={subscription}>
              <SubscriptionCard
                subscriptionId={subscription}
                subscription={subscription}
                isLoading={true}
              />
            </div>
          ))}
        </SubscriptionsList>
      </SubscriptionPageContainer>
    );
  }
}

export default SubscriptionList;
