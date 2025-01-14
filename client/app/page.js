import React from "react";
import HomePage from "./_components/HomePage/HomePage";

export const metadata = {
  title: 'Order Freshly Made Pizza Online in Northwood – Customize Your Perfect Pie',
  description: 'Discover the best Northwood pizza deals online! Enjoy freshly made pizzas tailored to your taste. Order now and savor your customized pizza experience.',
  alternates:{
    canonical: `https://www.hothousenorthwood.co.uk` }
}

const page = () => {
  

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default page;
