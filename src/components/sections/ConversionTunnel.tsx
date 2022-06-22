import React, { useEffect, useState } from "react";
import Carousel from "../Carousel";
import CardSessions from "../cards/CardSessions";
import CardProductsView from "../cards/CardProductsView";
import CardConversion from "../cards/CardConversion";
import CardAddToCart from "../cards/CardAddToCart";
import CardCheckoutEmail from "../cards/CardCheckoutEmail";
import CardCheckoutRegistration from "../cards/CardCheckoutRegistration";
import CardCheckoutShipping from "../cards/CardCheckoutShipping";
import axios from "../../api/axios";

const conversionUrl = "/conversions-resume";

type IConversionTunnel = string;

function ConversionTunnel() {
  const [loading, setLoading] = useState<boolean>(false);

  const [cardSessionValue, setCardSessionValue] =
    useState<IConversionTunnel>("");
  const [cardSessionGrowth, setCardSessionGrowth] =
    useState<IConversionTunnel>("");

  const [conversionPerMonthValue, setConversionPerMonthValue] =
    useState<IConversionTunnel>("");
  const [conversionPerMonthGrowth, setConversionPerMonthGrowth] =
    useState<IConversionTunnel>("");

  const [checkoutShippingValue, setCheckoutShippingValue] =
    useState<IConversionTunnel>("");
  const [checkoutShippingGrowth, setCheckoutShippingGrowth] =
    useState<IConversionTunnel>("");

  const [addToCartValue, setAddToCartValue] = useState<IConversionTunnel>("");
  const [addToCartGrowth, setAddToCartGrowth] = useState<IConversionTunnel>("");

  const [checkoutEmailValue, setCheckoutEmailValue] =
    useState<IConversionTunnel>("");
  const [checkoutEmailGrowth, setCheckoutEmailGrowth] =
    useState<IConversionTunnel>("");

  const [checkoutRegistrationValue, setCheckoutRegistrationValue] =
    useState<IConversionTunnel>("");
  const [checkoutRegistrationGrowth, setCheckoutRegistrationGrowth] =
    useState<IConversionTunnel>("");

  const [productsViewValue, setProductsViewValue] =
    useState<IConversionTunnel>("");
  const [productsViewGrowth, setProductsViewGrowth] =
    useState<IConversionTunnel>("");

  async function fetchAllConversionTunnelData() {
    try {
      setLoading(true);
      const response = await axios.get(conversionUrl);
      const responseData = response.data;

      const sessionPerDay = responseData["total-per-day"];
      setCardSessionValue(sessionPerDay.value);
      setCardSessionGrowth(sessionPerDay.growth);

      const conversionPerMonth =
        responseData["product-page-conversion-per-month"];
      setConversionPerMonthValue(conversionPerMonth.value);
      setConversionPerMonthGrowth(conversionPerMonth.growth);

      const checkoutShipping = responseData["checkout-shipping-per-month"];
      setCheckoutShippingValue(checkoutShipping.value);
      setCheckoutShippingGrowth(checkoutShipping.growth);

      const addToCart = responseData["add-to-cart-per-month"];
      setAddToCartValue(addToCart.value);
      setAddToCartGrowth(addToCart.growth);

      const checkoutEmail = responseData["checkout-email-per-month"];
      setCheckoutEmailValue(checkoutEmail.value);
      setCheckoutEmailGrowth(checkoutEmail.growth);

      const checkoutRegistration =
        responseData["checkout-registration-per-month"];
      setCheckoutRegistrationValue(checkoutRegistration.value);
      setCheckoutRegistrationGrowth(checkoutRegistration.growth);

      const productsView = responseData["products-view-per-month"];
      setProductsViewValue(productsView.value);
      setProductsViewGrowth(productsView.growth);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllConversionTunnelData();
  }, []);

  return (
    <Carousel name="Funil de conversão">
      <CardSessions
        loading={loading}
        value={cardSessionValue}
        growth={cardSessionGrowth}
      />
      <CardProductsView
        value={productsViewValue}
        growth={productsViewGrowth}
        loading={loading}
      />
      <CardConversion
        loading={loading}
        value={conversionPerMonthValue}
        growth={conversionPerMonthGrowth}
      />
      <CardAddToCart
        value={addToCartValue}
        growth={addToCartGrowth}
        loading={loading}
      />
      <CardCheckoutEmail
        value={checkoutEmailValue}
        growth={checkoutEmailGrowth}
        loading={loading}
      />
      <CardCheckoutRegistration
        value={checkoutRegistrationValue}
        growth={checkoutRegistrationGrowth}
        loading={loading}
      />
      <CardCheckoutShipping
        loading={loading}
        value={checkoutShippingValue}
        growth={checkoutShippingGrowth}
      />
    </Carousel>
  );
}

export default ConversionTunnel;
