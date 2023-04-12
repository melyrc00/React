import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



const Nosotros = () => 


 (<>
<h1 className="centr">
Acerca de mi</h1>

<section className="d-flex justify-content-center mb-5">
<Card >
      <Card.Img variant="top" src="/imagen/avatar.png"  className="rounded-circle"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>trabajo 1</ListGroup.Item>
        <ListGroup.Item>trabajo 2</ListGroup.Item>
        <ListGroup.Item>trabajo 3</ListGroup.Item>
      </ListGroup>
      <Card.Body>

      </Card.Body>
    </Card>
    </section>

</>
    )


export default Nosotros
