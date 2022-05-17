export default function handler(req, res) {
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

  res.status(200).json(listaCorousel);
}
