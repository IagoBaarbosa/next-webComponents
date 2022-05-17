import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { useEffect, useState } from "react";

async function fetchListaCorousel() {
  const response = await axios.get("http://localhost:3000/api/carrossel");
  console.log(response.data);

  return response.data;
}

export function Carrossel() {
  const [listaCorousel, setListaCorousel] = useState([]);

  useEffect(() => {
    fetchListaCorousel().then((data) => {
      setListaCorousel(data);
    });
  });

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
