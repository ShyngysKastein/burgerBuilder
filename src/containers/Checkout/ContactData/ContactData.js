import React, { useEffect, useState } from "react";
import "./ContactData.css";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { createOrder, initOrder } from "../../../store/services/orders/ordersSlice";
import { Navigate } from 'react-router-dom';

const ContactData = () => {
  const { ingredients, totalPrice } = useSelector(state => state.burger, shallowEqual);
  const { loading, ordered } = useSelector(state => state.orders, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initOrder())
  }, [dispatch])

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    street: "",
    postal: "",
  });

  const customerChangeHandler = (event) => {
    const { name, value } = event.target;

    setCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const orderHandler = async (event) => {
    event.preventDefault();
    const order = {
      ingredients,
      price: totalPrice,
      customer: { ...customer },
    };
    await dispatch(createOrder(order));
  };


  let form = <form onSubmit={orderHandler}>
    <input
      className="Input"
      type="text"
      name="name"
      placeholder="Your Name"
      value={customer.name}
      onChange={customerChangeHandler}
    />
    <input
      className="Input"
      type="email"
      name="email"
      placeholder="Your Mail"
      value={customer.email}
      onChange={customerChangeHandler}
    />
    <input
      className="Input"
      type="text"
      name="street"
      placeholder="Street"
      value={customer.street}
      onChange={customerChangeHandler}
    />
    <input
      className="Input"
      type="text"
      name="postal"
      placeholder="Postal Code"
      value={customer.postal}
      onChange={customerChangeHandler}
    />
    <Button type='submit' btnType="Success">Order</Button>
  </form>;
  if (loading) {
    form = <Spinner />
  }
  if (ordered) {
    form = <Navigate to="/" />
  }
  return (
    <div className="ContactData">
      <h4>Enter your Contact Data</h4>
      {form}
    </div>
  );
};

export default ContactData;
