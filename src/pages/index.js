import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { ProductsContextProvider } from "@/pages/components/Reducer+Context/Reducer+Context";
import CartNavBar from "./components/nav-bar/CartNavBar.jsx";
import AuxBar from "./components/nav-bar/AuxBar.jsx";
import Carrusel from "./components/carusel/carrucel.jsx";
import Seccion from "./components/cards/Seccion.js";
import CaruselOwl from "./components/owl-carusel/CaruselOwl.jsx";
import Footer from "./components/footer/Footer.jsx";


export default function Home() {


  return (
    <>
      <Head>
        <title>Maluma Store</title>
        <meta name="Trabajo práctico colaborativo Academia Numem" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./assets/fav-ico.svg" />
      </Head>

      <main>
        <ProductsContextProvider>
          <CartNavBar />
          <AuxBar />
          <Carrusel />
          <Seccion />
        </ProductsContextProvider>
        <CaruselOwl />
        <Footer />
      </main>
    </>
  );
}
