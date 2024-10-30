import peopleType from "../types/people";

const people: peopleType[] = [
  {
    id: +new Date() * Math.random() * 1000000,
    name: "Dimas Saputra",
    tag: "dimasmds",
    imageUrl: "https://avatar.iran.liara.run/public/1",
  },
  {
    id: +new Date() * Math.random() * 1000000,
    name: "Arif Faizin",
    tag: "arifaizin",
    imageUrl: "https://avatar.iran.liara.run/public/2",
  },
  {
    id: +new Date() * Math.random() * 1000000,
    name: "Rahmat Fajri",
    tag: "rfajri27",
    imageUrl: "https://avatar.iran.liara.run/public/3",
  },
];

export default people;
