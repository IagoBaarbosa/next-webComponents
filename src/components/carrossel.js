import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

const listaCorousel = [
  {
    url: "/assets/img/1art.jpeg",
  },
  {
    url: "/assets/img/art2.jpeg",
  },
  {
    url: "/assets/img/img3.jfif",
  },
];

export function Carrossel() {
  return (
    <Carousel>
      {listaCorousel.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <CarrosselItemConteudo urldaimagem={item.url} />
          </Carousel.Item>
        );
      })}
      ;
    </Carousel>
  );
}

function CarrosselItemConteudo({ urldaimagem }) {
  return (
    <>
      <Image
        width={1980}
        height={720}
        className="d-block w-100"
        src={urldaimagem}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Demonstrações</h3>
        <p>Quando a arte é feita com amor.</p>
      </Carousel.Caption>
    </>
  );
}
