import React from "react";
import Carousel from "../Carousel";
// import axios from "../../api/axios";
import CardSessions from "../cards/CardSessions";
import CardProductsView from "../cards/CardProductsView";

function ConversionTunnel() {
  // const [cards, setCards] = useState();
  return (
    <Carousel name="Funil de conversão">
      <CardSessions />
      <CardProductsView />
    </Carousel>
  );
}

export default ConversionTunnel;
