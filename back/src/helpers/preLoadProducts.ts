import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}
/* 
const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://www.apple.com/v/iphone-11/a/images/meta/og__f2j3dwkzna2u.png",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://www.apple.com/v/macbook-air/a/images/meta/og__d5k62k8b4qka.png",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://www.apple.com/v/ipad-pro/a/images/meta/og__d8m6x7smkntm.png",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://www.apple.com/v/apple-watch-series-6/a/images/meta/og__c1zv8c8n7q06.png",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://www.apple.com/v/airpods-pro/a/images/meta/og__c1zv8c8n7q06.png",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "https://www.apple.com/v/homepod-mini/a/images/meta/og__d5k62k8b4qka.png",
    categoryId: 6,
    stock: 10,
  },
]; */

const productsToPreLoad: IProduct[] = [
  { name: "Andes Premium Coffee", price: 1499, description: "High-altitude coffee with rich flavor.", image: "/assets/bolsaCafe (1).png", categoryId: 1, stock: 45 },
  { name: "Valley Smooth Coffee", price: 1250, description: "Soft aroma with fruity notes.", image: "/assets/bolsaCafe (2).png", categoryId: 1, stock: 67 },
  { name: "Intense Espresso Roast", price: 1599, description: "Strong roast with full body.", image: "/assets/bolsaCafe (3).png", categoryId: 3, stock: 39 },
  { name: "Organic Sierra Coffee", price: 1625, description: "Organic beans, smooth balance.", image: "/assets/bolsaCafe (4).png", categoryId: 4, stock: 82 },
  { name: "Natural Decaf Coffee", price: 1340, description: "Full flavor, caffeine-free.", image: "/assets/bolsaCafe (5).png", categoryId: 5, stock: 54 },
  { name: "House Blend Coffee", price: 1199, description: "Classic everyday blend.", image: "/assets/bolsaCafe (2).png", categoryId: 1, stock: 70 },
  { name: "Special Reserve Coffee", price: 1850, description: "Single-origin selected beans.", image: "/assets/bolsaCafe (1).png", categoryId: 1, stock: 28 },
  { name: "Mountain Gourmet Coffee", price: 1799, description: "Medium roast, sweet notes.", image: "/assets/bolsaCafe (3).png", categoryId: 1, stock: 91 },
  { name: "Fine Ground Coffee", price: 1299, description: "Perfect for espresso lovers.", image: "/assets/bolsaCafe (4).png", categoryId: 1, stock: 32 },
  { name: "Coarse Ground Coffee", price: 1299, description: "Ideal for French press brewing.", image: "/assets/bolsaCafe (5).png", categoryId: 1, stock: 88 },
  { name: "Caramel Blend Coffee", price: 1450, description: "Sweet and creamy aroma.", image: "/assets/bolsaCafe (1).png", categoryId: 3, stock: 63 },
  { name: "Dark Chocolate Roast", price: 1475, description: "Deep roast with cocoa tones.", image: "/assets/bolsaCafe (2).png", categoryId: 3, stock: 77 },
  { name: "Floral Aroma Coffee", price: 1380, description: "Light acidity and floral scent.", image: "/assets/bolsaCafe (3).png", categoryId: 1, stock: 49 },
  { name: "Toasted Nut Coffee", price: 1520, description: "Warm, nutty flavor.", image: "/assets/bolsaCafe (4).png", categoryId: 3, stock: 21 },
  { name: "Honey Forest Coffee", price: 1610, description: "Sweet honey and nut notes.", image: "/assets/bolsaCafe (5).png", categoryId: 1, stock: 74 },
  { name: "Black Premium Bag", price: 999, description: "Durable bag for storing beans.", image: "/assets/blackBag.png", categoryId: 2, stock: 57 },
  { name: "Pink Limited Bag", price: 1050, description: "Modern and elegant design.", image: "/assets/pinkBag.png", categoryId: 2, stock: 65 },
  { name: "Reusable Coffee Bag", price: 890, description: "Keeps aroma fresh longer.", image: "/assets/bolsaCafe (3).png", categoryId: 2, stock: 42 },
  { name: "Traditional Field Coffee", price: 1199, description: "Classic handmade taste.", image: "/assets/bolsaCafe (1).png", categoryId: 1, stock: 86 },
  { name: "Sweet Natural Coffee", price: 1325, description: "Soft and naturally sweet.", image: "/assets/bolsaCafe (2).png", categoryId: 1, stock: 59 },
  { name: "Dark Strong Coffee", price: 1599, description: "Bold and powerful roast.", image: "/assets/bolsaCafe (4).png", categoryId: 5, stock: 34 },
  { name: "Morning Light Coffee", price: 1175, description: "Perfect way to start the day.", image: "/assets/bolsaCafe (5).png", categoryId: 5, stock: 79 },
  { name: "Signature Farm Coffee", price: 1999, description: "Exclusive farm-grown beans.", image: "/assets/bolsaCafe (3).png", categoryId: 1, stock: 25 },
  { name: "Serrano Bold Roast", price: 1650, description: "Rich body and deep flavor.", image: "/assets/bolsaCafe (2).png", categoryId: 1, stock: 92 },
  { name: "Mild Sunrise Coffee", price: 1240, description: "Balanced and easy to drink.", image: "/assets/bolsaCafe (4).png", categoryId: 1, stock: 48 },
  { name: "Golden Roast Coffee", price: 1725, description: "Special edition golden pack.", image: "/assets/bolsaCafe (5).png", categoryId: 1, stock: 76 },
  { name: "Old Farm Classic", price: 1399, description: "Traditional family recipe.", image: "/assets/bolsaCafe (1).png", categoryId: 1, stock: 61 },
  { name: "Tropical Blend Coffee", price: 1430, description: "Citrus and exotic tones.", image: "/assets/bolsaCafe (3).png", categoryId: 1, stock: 51 },
  { name: "Southern Reserve Coffee", price: 1820, description: "Medium roast, floral finish.", image: "/assets/bolsaCafe (4).png", categoryId: 1, stock: 84 },
  { name: "Classic Moka Coffee", price: 1375, description: "Perfect balance of flavor.", image: "/assets/bolsaCafe (2).png", categoryId: 3, stock: 47 },
  { name: "Colombian Origin Coffee", price: 1790, description: "Sweet finish, strong aroma.", image: "/assets/bolsaCafe (5).png", categoryId: 4, stock: 72 },
  { name: "Italian Espresso Roast", price: 1680, description: "European style espresso roast.", image: "/assets/bolsaCafe (1).png", categoryId: 5, stock: 44 },
  { name: "Summer Special Coffee", price: 1410, description: "Perfect for iced or cold brew.", image: "/assets/bolsaCafe (3).png", categoryId: 4, stock: 67 },
  { name: "Dulce de Leche Coffee", price: 1550, description: "Creamy caramel touch.", image: "/assets/bolsaCafe (2).png", categoryId: 4, stock: 31 },
  { name: "Cinnamon Blend Coffee", price: 1499, description: "Warm and aromatic taste.", image: "/assets/bolsaCafe (4).png", categoryId: 3, stock: 66 },
  { name: "Forest Intense Roast", price: 1760, description: "Cocoa and wood aroma.", image: "/assets/bolsaCafe (5).png", categoryId: 4, stock: 53 },
  { name: "Golden Honey Coffee", price: 1620, description: "Naturally sweet and smooth.", image: "/assets/bolsaCafe (1).png", categoryId: 4, stock: 81 },
  { name: "Black Classic Bag", price: 899, description: "Ideal for coffee packaging.", image: "/assets/blackBag.png", categoryId: 2, stock: 90 },
  { name: "Pink Coffee Lovers Bag", price: 949, description: "Stylish and modern look.", image: "/assets/pinkBag.png", categoryId: 5, stock: 36 },
  { name: "Reinforced Premium Bag", price: 1099, description: "Durable and reusable bag.", image: "/assets/blackBag.png", categoryId: 2, stock: 58 },

  { name: "Coffee maker", price: 100990, description: "Classic drip coffee maker for home brewing.", image: "/assets/cafetera1.png", categoryId: 6, stock: 35 },
  { name: "Coffee maker capsules", price: 74999, description: "Single-serve pod coffee machine, compact and modern.", image: "/assets/cafetera2.png", categoryId: 6, stock: 12 },
  { name: "Coffee maker aluminum", price: 58999, description: "Traditional stovetop moka pot for strong espresso-style coffee.", image: "/assets/cafetera3.png", categoryId: 6, stock: 45 },
  { name: "Coffee maker premium", price: 2120000, description: "Professional espresso machine for cafés and baristas.", image: "/assets/cafetera4.png", categoryId: 6, stock: 42 },
  { name: "Caffee filters", price: 2499, description: "Cone-shaped paper coffee filters for drip brewing. Price per 20 units", image: "/assets/filtroCafe.png", categoryId: 6, stock: 100 },
  { name: "Small cup", price: 5999, description: "Small ceramic coffee mug, simple black design. Price per 6 units", image: "/assets/tazaChica.png", categoryId: 6, stock: 78 },
  { name: "Big cup", price: 7999, description: "Large black ceramic coffee mug for big servings. Price per 6 units", image: "/assets/tazaGrande.png", categoryId: 6, stock: 68 },
  { name: "Disposable cup", price: 2999, description: "Disposable takeaway coffee cup with sleeve. Price per 10 units", image: "/assets/tazaDescartable.png", categoryId: 6, stock: 74 },

];


export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
