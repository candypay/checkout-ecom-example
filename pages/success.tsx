import React from "react";

const Success = () => {
  return <>
  <section className="text-gray-600 body-font">
  <div className="container px-3 py-16 mx-auto flex flex-wrap flex-col">
    <img className="xl:w-1/4 lg:w-1/4 md:w-1/3 w-1/4 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/dtzqgftjk/image/upload/v1666722093/image-removebg-preview_1_r9ktcc.png"/>
    <div className="flex flex-col text-center w-full">
      <h1 className="text-xl font-medium title-font mb-4 text-gray-900">Payment Successfull!</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">powered by CandyPay</p>
    </div>
  </div>
</section>
  </>;
};

export default Success;
