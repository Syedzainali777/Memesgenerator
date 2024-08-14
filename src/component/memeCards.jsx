import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Memecard = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.url} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Button variant="primary">Edit</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Memecard;
