import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

export function Carrossel() {
  return (
    <Carousel>
      <Carousel.Item>
        <CarrosselItemConteudo urldaimagem="/assets/img/1art.jpeg" />
      </Carousel.Item>

      <Carousel.Item>
        <CarrosselItemConteudo urldaimagem="/assets/img/art2.jpeg" />
      </Carousel.Item>

      <Carousel.Item>
        <CarrosselItemConteudo urldaimagem="/assets/img/img3.jfif" />
      </Carousel.Item>
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
