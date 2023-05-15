import { v4 as uuid } from "uuid";
import MensCategory from './Images/category-1.png'
import WomensCategory from './Images/category-2.png'
import KidsCategory from './Images/category-3.png'
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
    img: MensCategory
  },
  {
    _id: uuid(),
    categoryName: "Women",
    description:
      "Checkout our best womens collection, Top brands at best price.",
    img: WomensCategory
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    description:
      "Checkout our best kids collection, Get 30%-40% discount on kids wear.",
    img: KidsCategory
  },
];
