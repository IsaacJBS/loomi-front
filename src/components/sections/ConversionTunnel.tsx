import React from "react";
import Carousel from "../Carousel";
// import axios from "../../api/axios";
import CardSessions from "../cards/CardSessions";

function ConversionTunnel() {
  // const [cards, setCards] = useState();
  return (
    <Carousel name="Funil de conversão">
      <CardSessions />
    </Carousel>
  );
}

export default ConversionTunnel;
