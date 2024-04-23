import React from "react";
import Record from "../Components/Records/Record";
import Form from "../Components/Form/Form";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section">
      <Record />
      <Form />
    </section>
  );
};

export default Home;
