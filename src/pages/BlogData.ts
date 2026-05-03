import { Ship, ChefHat, Bike, Sun } from "lucide-react";
import sunsetLoungeExt from "@/assets/sunset-lounge-exterior.webp";
import quadBikingImg from "@/assets/quad-biking.jpg";
import gastronomiaImg from "@/assets/gastronomia.jpg";
import passeiosBarcoImg from "@/assets/passeios-barco.jpg";

export const blogPosts = [
  {
    id: "passeios-de-barco",
    title: "Passeios de Barco: Descubra a Magia da Lagoa",
    category: "Atividades",
    icon: Ship,
    image: passeiosBarcoImg,
    excerpt: "Explore as águas cristalinas da Lagoa do Bilene e visite as praias desertas do outro lado. Uma experiência imperdível para toda a família.",
    content: "A Lagoa do Bilene é famosa pelas suas águas calmas e transparentes. Os passeios de barco permitem chegar a locais exclusivos, como a abertura da lagoa para o mar, onde o encontro das águas cria um cenário deslumbrante.\n\nÉ o local ideal para snorkeling e piqueniques memoráveis. Durante o passeio, poderá observar a fauna local e desfrutar de momentos de pura tranquilidade longe das áreas mais movimentadas. Recomendamos reservar o passeio logo pela manhã para aproveitar as águas mais paradas e a luz suave do sol."
  },
  {
    id: "gastronomia-local",
    title: "Gastronomia: O Sabor Autêntico do Mar",
    category: "Culinária",
    icon: ChefHat,
    image: gastronomiaImg,
    excerpt: "Dos camarões grelhados à famosa matapa com mariscos. Saiba onde encontrar os melhores frutos do mar frescos do Bilene.",
    content: "A culinária do Bilene é uma celebração do Oceano Índico. Os pescadores locais trazem diariamente o melhor que o mar oferece, garantindo frescura e sabor em cada prato.\n\nRecomendamos vivamente experimentar o peixe da época grelhado na brasa, acompanhado por arroz de coco, uma iguaria que define a hospitalidade moçambicana. Não se esqueça de provar a matapa com mariscos, um prato tradicional rico em texturas e sabores que contam a história da nossa região."
  },
  {
    id: "quad-biking",
    title: "Quad Biking: Adrenalina nas Dunas Brancas",
    category: "Aventura",
    icon: Bike,
    image: quadBikingImg,
    excerpt: "Sinta a liberdade ao percorrer as dunas de areia branca em moto-quatro. Uma aventura emocionante com vistas panorâmicas sobre o oceano.",
    content: "Para os amantes de aventura, o Quad Biking é a forma perfeita de explorar a geografia única do Bilene. Com guias experientes, poderá percorrer trilhos que levam a miradouros escondidos no topo das dunas.\n\nA vista de 360 graus sobre a lagoa e o mar é simplesmente arrebatadora. É uma atividade segura para famílias, desde que acompanhadas por profissionais, e oferece uma perspetiva única sobre a vastidão das nossas praias e a beleza da vegetação costeira."
  },
  {
    id: "sunset-lounge",
    title: "Sunset Lounge: Onde o Dia se Encontra com a Noite",
    category: "Lazer",
    icon: Sun,
    image: sunsetLoungeExt,
    excerpt: "Relaxe com música ambiente e cocktails refrescantes enquanto assiste ao pôr do sol mais bonito de Moçambique.",
    content: "Não há melhor forma de terminar o dia do que num dos lounges à beira da lagoa. Com uma seleção de bebidas premium e uma atmosfera descontraída, o pôr do sol no Bilene transforma-se num espetáculo de cores quentes.\n\nÉ o momento ideal para relaxar, ouvir música ambiente de qualidade e socializar com outros viajantes. A transição do dia para a noite, com o reflexo das cores na água calma da lagoa, cria memórias que durarão para sempre."
  }
];