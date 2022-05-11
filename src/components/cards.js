import React from "react";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";

const listaCards = [
  {
    titulo: "Espelho de gato",
    texto:
      " A pedido de uma cliente, que queria fazer em sua casa um espelho com a arte de seu gato. ",
    src: "/assets/img/card1.PNG",
  },
  {
    titulo: "Laurinha",
    texto:
      "Essa arte foi feita para uma pessoinha muito especial. Feliz aniversario de 1 ano.",
    src: "/assets/img/card2.PNG",
  },
  {
    titulo: "Camiseta Dia das bruxas!",
    texto: "Arte feita em uma camiseta especial para dia das Bruxas",
    src: "/assets/img/card3.PNG",
  },
];

const Cards = () => {
  return (
    <CardGroup>
      {listaCards.map((item) => {
        return (
          <>
            <CardGaleria
              titulo={item.titulo}
              texto={item.texto}
              src={item.src}
            />
          </>
        );
      })}
    </CardGroup>
  );
};

export default Cards;
function CardGaleria(props) {
  const { titulo, texto, src } = props;
  return (
    <Card>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{texto}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">feita em 2021</small>
      </Card.Footer>
    </Card>
  );
}
