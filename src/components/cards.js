import React from "react";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";

const Cards = () => {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="/assets/img/card1.PNG" />
        <Card.Body>
          <Card.Title>Espelho de gato</Card.Title>
          <Card.Text>
            A pedido de uma cliente, que queria fazer em sua casa um espelho com
            a arte de seu gato.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">feita em 2021</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/img/card2.PNG" />
        <Card.Body>
          <Card.Title id="Laura">Laurinha</Card.Title>
          <Card.Text>
            Essa arte foi feita para uma pessoinha muito especial. Feliz
            aniversario de 1 ano.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Feita em 2021</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/assets/img/card3.PNG" />
        <Card.Body>
          <Card.Title>Camiseta Dia das bruxas!</Card.Title>
          <Card.Text>
            Arte feita em uma camiseta especial para dia das Bruxas
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Feita em 2021</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default Cards;
