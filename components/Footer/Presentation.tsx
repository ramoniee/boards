import React from "react";

interface FooterInfoProps {

}

const Presentation: React.FC<FooterInfoProps> = () => {
  return (
    <section className="flex rounded-sm bg-gray-400/20 p-2 justify-center align-middle items-center">
      <section className="flex p-2 w-1/2 justify-between items-center">
        <h1>Sprint.</h1>
        <h1>version 0.0.1</h1>
      </section>   
    </section>
  );
};

export default Presentation;
