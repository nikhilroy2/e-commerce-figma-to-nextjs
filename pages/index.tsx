import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
//import styles from "@/styles/Home.module.css";

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
  return <menu id="EccomerceMenu"></menu>;
}
