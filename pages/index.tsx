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
  return <div id="eCommerceProject">
    <div className="header">
      
    </div>
  </div>;
}
