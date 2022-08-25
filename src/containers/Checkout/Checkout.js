import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

const Checkout = () => {
  const { ingredients } = useSelector(state => state.burger, shallowEqual);
  const navigate = useNavigate();

  const checkoutCancelHandler = () => {
    navigate(-1);
  };

  const checkoutContinueHandler = () => {
    navigate("contact-data");
  };

  return (
    <>
      <CheckoutSummary
        checkoutContinueHandler={checkoutContinueHandler}
        checkoutCancelHandler={checkoutCancelHandler}
        ingredients={ingredients}
      />
      <Outlet />
    </>
  );
};

export default Checkout;
