import { useEffect } from "react";
import Board from "@/components/Board/Board";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  useEffect(() => {
    fetch("/api/tracker")
      .then(res => res.json())
      .then(data => console.log(`IP: ${data.ip} visited website`));
  }, []);

  return (
    <section className="flex flex-col items-center w-full mx-auto min-h-screen">
      <header className="flex flex-col w-full p-2 lg:w-8/11 xl:w-6/11 space-y-4 text-xs text-gray-600 bg-gray-100">
        <Header/>
      </header>
     
      <main className="flex flex-grow justify-center w-full">
        <section className="flex flex-col w-full p-2 lg:w-8/11 xl:w-6/11 space-y-4 text-xs text-gray-600 bg-gray-100">
          <Board/>
        </section>
      </main>

      <footer className="flex flex-col w-full p-2 lg:w-8/11 xl:w-6/11 space-y-4 text-xs text-gray-600 bg-gray-100">
        <Footer/>
      </footer> 
    </section>
  );
}
