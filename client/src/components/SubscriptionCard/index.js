import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { SubscriptionStyle, PageContainer } from "./style";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "react-query";
import ToastContext from "../Context/ToastContext";
import { deleteSubscription } from "../../controllers/SubscriptionsController";

const PLACEHOLDER_IMAGE = "https://via.placeholder.com/150/95a5a6/FFFFFF";

const getPlaceholderImage = (name) => {
  if (!name) return PLACEHOLDER_IMAGE;
  return PLACEHOLDER_IMAGE + "?text=" + name[0].toUpperCase();
};

function SubscriptionCard(props) {
  const { id } = useParams();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSelected, setIsSelected] = useState(props.isSelected);
  const navigate = useNavigate();
  const showToast = useContext(ToastContext);

  const handleDelete = async (id) => {
    try {
      setIsDeleting(true);
      await deleteSubscription([id]);
      props.onDelete();
      showToast({
        type: "success",
        message: "Subscription deleted succesfully",
      });
    } catch (error) {
      setIsDeleting(false);
      showToast({
        type: "error",
        message: "Error deleting subscription",
      });
    }
  };

  useEffect(() => {
    setIsSelected(props.isSelected);
  }, [props.isSelected]);

  const { data: subscriptionData } = useQuery(
    ["subscriptionData", [props.subscription ? props.subscription.id : id]],
    !props.subscription
      ? async () => {
          const queryDataSubscription = await fetch(`/subscriptions/${id}`);
          return queryDataSubscription.json();
        }
      : async () => {
          return props.subscription;
        }
  );

  const { data: imageData } = useQuery(
    ["imageData", [props.subscription ? props.subscription.id : id]],
    !props.subscription
      ? async () => {
          const imageData = await fetch(`/api/images/${id}`);
          return imageData.json();
        }
      : async () => {
          const imageData = await fetch(`/api/images/${props.subscription.id}`);
          return imageData.json();
        }
  );

  if (isDeleting || (props && props.isLoading)) {
    return (
      <PageContainer>
        <SubscriptionStyle className="space-between">
          <div className="left">
            <Skeleton
              circle={true}
              width={50}
              height={50}
              className="subscription-spacer"
            />

            <p className="subscription-spacer">
              <Skeleton />
            </p>
          </div>
          <div className="right ">
            <Skeleton width={30} height={20} className="subscription-spacer" />
            <Skeleton width={30} height={20} />
          </div>
        </SubscriptionStyle>
      </PageContainer>
    );
  }

  if (subscriptionData && !isDeleting) {
    const { id, name, price, frequency } = subscriptionData;
    return (
      <PageContainer>
        {
          <SubscriptionStyle>
            <input
              type="checkbox"
              checked={isSelected}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                props.onSelect(id);
              }}
              onChange={() => {}}
            />
            <Link to={`/details/${id}`}>
              <div className="infoContainer">
                <img
                  src={imageData ? imageData.imgUrl : getPlaceholderImage(name)}
                  alt="avatar"
                ></img>

                <p>{name}</p>
                <p>${price}</p>
                <p className="frequency">{frequency}</p>
              </div>
            </Link>

            <button
              className="edit-btn"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigate(`/subscriptions/edit/${id}`);
              }}
            >
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleDelete(id);
              }}
            >
              Delete
            </button>
          </SubscriptionStyle>
        }
      </PageContainer>
    );
  }
}

export default SubscriptionCard;
