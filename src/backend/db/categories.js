import { v4 as uuid } from "uuid";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    description:
      "Checkout our best mens collection, Biggest deals on top brands.",
    img: "https://i.ibb.co/SRSnL6w/category-1.png"
  },
  {
    _id: uuid(),
    categoryName: "Women",
    description:
      "Checkout our best womens collection, Top brands at best price.",
    img: "https://i.ibb.co/PDfTkqy/category-2.png"
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    description:
      "Checkout our best kids collection, Get 30%-40% discount on kids wear.",
    img: "https://i.ibb.co/t3rxVsf/category-3.png"
  },
];
