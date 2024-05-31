import React from "react";

const Drinks = () => {
  const data = [
    {
      img: "https://topspizza.co.uk/storage/61.jpg",
      title: "Fanta",
    },
    {
      img: "https://topspizza.co.uk/storage/61.jpg",
      title: "Diet Coca Cola",
    },
    {
      img: "https://topspizza.co.uk/storage/63.jpg",
      title: "Coca Cola",
    },
    {
      img: "https://topspizza.co.uk/storage/jh6s1LMCCZEtzIqlzMzpj3MNgVoMurFf70Oh4Zag.jpg",
      title: "Mineral Water",
    },
    {
      img: "https://topspizza.co.uk/storage/66.jpg",
      title: "Sprite",
    },
    {
      img: "https://topspizza.co.uk/storage/138.jpg",
      title: "Coke Zero",
    },
    {
      img: "https://topspizza.co.uk/storage/161.jpg",
      title: "Budweiser",
    },
    {
      img: "https://topspizza.co.uk/storage/164.jpg",
      title: "Stella Artois",
    },
    {
      img: "https://topspizza.co.uk/storage/165.jpg",
      title: "Bottle Of Red Wine",
    },
    {
      img: "https://topspizza.co.uk/storage/166.jpg",
      title: "Bottle Of White Wine",
    },
    {
      img: "https://topspizza.co.uk/storage/167.jpg",
      title: "Kronenberg 1664",
    },
    {
      img: "https://topspizza.co.uk/storage/175.jpg",
      title: "Fosters",
    },
    {
      img: "https://topspizza.co.uk/storage/176.jpg",
      title: "Bottle Of Rose Wine",
    },
    {
      img: "https://topspizza.co.uk/storage/210.jpg",
      title: "Red Bull Original",
    },
    {
      img: "https://topspizza.co.uk/storage/226.png",
      title: "Red Bull Sugar Free",
    },
    {
      img: "https://topspizza.co.uk/storage/237.jpeg",
      title: "Mateus Rose Wine",
    },
  ];
  return (
    <>
      <div className="container mx-auto max-w-7xl gap-10 grid sm:grid-cols-2 md:grid-cols-4 place-content-center p-10">
        {data.map((el, id) => (
          <div
            class="bg-white shadow-md rounded-lg max-w-xs w-full newshadow p-3"
            key={id}
          >
            <img
              src={el.img}
              alt="Card Image"
              className="rounded-t-lg  object-cover w-[370px] h-[250px]"
            />

            <div class="p-4">
              <h2 class="text-xl font-semibold mb-4 ">{el.title}</h2>
              <div class="relative">
                <div className="bg-green-600 hover:bg-green-500 cursor-pointer ">
                  <p className="text-center p-2 text-white">
                    Select store to order
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Drinks;
