import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

// type Props = {}

function Home() {
  return (
    <>
      <Header
        name="Eduardo"
        imageUrl="https://mir-s3-cdn-cf.behance.net/projects/404/d4ba0348411353.Y3JvcCw3MDYsNTUyLDI3LDA.png"
      />
      <SideBar />
    </>
  );
}

export default Home;
