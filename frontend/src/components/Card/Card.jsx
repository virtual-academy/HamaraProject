import React from 'react'
import {Col} from 'antd'
import './card.css'

const Card = (props) => {
  return (
    <>
    <Col className="card-container">
    <h3>{props.data.title}</h3>
    </Col>
    </>
  );
}

export default Card