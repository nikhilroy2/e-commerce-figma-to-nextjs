import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
//import styles from "@/styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <EcommerceProject></EcommerceProject>
    </div>
  );
}

function EcommerceProject() {
  return (
    <div id="eCommerceProject">
      <div id="header">
        <h3 className="header_title">E-Commerce</h3>
        <button className="header_box">
          <Image
            width="24"
            height="24"
            style={{ marginRight: "5px" }}
            src="/assets/icons/Shopping_cart.svg"
            alt="icon"
          ></Image>
          <span className="font_sm">3</span>
        </button>
      </div>
      <div id="content_wrapper">
        <EccomerceNavbar></EccomerceNavbar>
        <EccomerceMenu></EccomerceMenu>
      </div>
    </div>
  );
}

function EccomerceNavbar() {
  const nav_list = [
    "Produce",
    "Prepared foods",
    "Canned foods & Soups",
    "Produce",
    "Bakery",
    "Diary & Eggs",
    "Frozen",
    "Meat & Seafood",
    "Bakery",
    "Diary & Eggs",
    "Prepared foods",
    "Canned foods & Soups",
    "Produce",
    "Bakery",
    "Diary & Eggs",
    "Frozen",
    "Meat & Seafood",
  ];

  const [tab, setTab] = useState(0);

  const btnHandle = (i: any) => {
    setTab(i);
    console.log(i);
  };

  return (
    <nav id="eCommerceNavbar">
      <ul className="navbar_list">
        {nav_list.map((v, i) => {
          return (
            <li key={i}>
              <button
                onClick={() => btnHandle(i)}
                className={`btn_tab ${tab === i ? "btn_active" : ""}`}
              >
                {v}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function EccomerceMenu() {
  return (
    <menu id="EccomerceMenu">
      <ProductList title={"Produce"}></ProductList>
      <ProductList title={"Prepared foods"}></ProductList>
      <ProductList title={"Canned foods & Soups"}></ProductList>
    </menu>
  );
}

function ProductList({ title }: { title: string }) {
  return (
    <div className="ProductList">
      <h2 className="product_title">
        {title}
        <span>
          <Image
            width={36}
            height={36}
            alt="icon"
            src="/assets/icons/entypo_chevron-small-right.svg"
          ></Image>{" "}
        </span>{" "}
      </h2>
      <ProductSlider></ProductSlider>
    </div>
  );
}

function ProductSlider() {
  const product_object = [
    {
      id: 1,
      price: 0.69,
      name: "Banana 1 ct",
      weight: "18 oz",
      icon: (
        <Image
          width={42}
          height={42}
          src="/assets/icons/icon_minus.svg"
          alt="img"
        ></Image>
      ),
      product_img: "/assets/product_images/banana_image.png",
    },
    {
      id: 2,
      price: 0.69,
      name: "Strawberries",
      weight: "1 lb",
      icon: (
        <Image
          width={42}
          height={42}
          src="/assets/icons/icon_plus.svg"
          alt="img"
        ></Image>
      ),
      product_img: "/assets/product_images/img2.png",
    },
    {
      id: 3,
      price: 0.69,
      name: "Yogurt",
      weight: "18 oz",
      icon: (
        <Image
          width={42}
          height={42}
          src="/assets/icons/icon_minus.svg"
          alt="img"
        ></Image>
      ),
      product_img: "/assets/product_images/img3.png",
    },
    {
      id: 4,
      price: 0.69,
      name: "Blackberries",
      weight: "18 oz",
      icon: (
        <Image
          width={42}
          height={42}
          src="/assets/icons/icon_minus.svg"
          alt="img"
        ></Image>
      ),
      product_img: "/assets/product_images/img.png",
    },
    {
      id: 5,
      price: 0.69,
      name: "Strawberries",
      weight: "18 oz",
      icon: (
        <Image
          width={42}
          height={42}
          src="/assets/icons/icon_plus.svg"
          alt="img"
        ></Image>
      ),
      product_img: "/assets/product_images/img5.png",
    },
    {
      id: 6,
      price: 0.69,
      name: "Yogurt",
      weight: "18 oz",
      icon: (
        <Image
          width={42}
          height={42}
          src="/assets/icons/icon_plus.svg"
          alt="img"
        ></Image>
      ),
      product_img: "/assets/product_images/img4.png",
    },
    {
      id: 7,
      price: 0.69,
      name: "Banana 1 ct",
      weight: "18 oz",
      icon: (
        <Image
          width={42}
          height={42}
          src="/assets/icons/icon_plus.svg"
          alt="img"
        ></Image>
      ),
      product_img: "/assets/product_images/banana_image.png",
    },
  ];
  return (
    <div className="">
      <ProductCard product_object={product_object}></ProductCard>
    </div>
  );
}

interface ProductObject {
  id: number;
  price: number;
  name: string;
  weight: string;
  icon: any;
  product_img: string;
}

function ProductCard({ product_object }: { product_object: ProductObject[] }) {
  return (
    <div className="ProductSlider">
      {product_object.map((v: any) => {
        return (
          <div key={v.id} className="ProductCard">
            <div className="product_card_header">
              <Image
                width={100}
                height={100}
                src={v.product_img}
                alt="img"
              ></Image>
              <button className="product_card_btn">{v.icon}</button>
            </div>
            <div className="product_card_body">
              <strong className="product_price">{v.price}</strong>
              <strong className="product_name">{v.name}</strong>
              <strong className="product_weight">{v.weight}</strong>
            </div>
          </div>
        );
      })}
    </div>
  );
}
