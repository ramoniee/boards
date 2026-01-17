import React from "react";

interface HeaderInfoProps {

}

const Presentation: React.FC<HeaderInfoProps> = () => {
  return (
    <>
        <section className="flex bg-gray-400/20 p-2 justify-between align-middle items-center ">
            <h1 className="font-bold text-2xl">Sprint.</h1>
        </section> 
    </>
  );
};

export default Presentation;
