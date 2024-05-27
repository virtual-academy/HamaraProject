import React from "react";
import { Col, Row } from "antd";
import Card from "../../components/Card/Card";
const data = [
  {
    title: "Shahid",
    price: "3333",
  },
  {
    title: "Shahid",
    price: "3333",
  },
  {
    title: "Shahid",
    price: "3333",
  },
  {
    title: "Shahid",
    price: "3333",
  },
  {
    title: "Shahid",
    price: "3333",
  },
  {
    title: "Shahid",
    price: "3333",
  },
  {
    title: "Shahid",
    price: "3333",
  },
  {
    title: "Shahid",
    price: "3333",
  },
  {
    title: "Shahid",
    price: "3333",
  },
  {
    title: "Shahid",
    price: "3333",
  },
];

const Home = () => {
  return (
    <>
      <Row gutter={[10, 0]}>
        {data.map((el) => {
          return <Col md={6}>
             <Card data={el} />;
          </Col>;
        })}
      </Row>
    </>
  );
};

export default Home;
