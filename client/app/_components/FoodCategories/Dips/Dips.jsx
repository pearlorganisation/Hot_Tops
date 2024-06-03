import React from "react";

const Dips = () => {
  const data = [
    {
      img: "https://topspizza.co.uk/storage/35.jpg",
      title: "Garlic & Herb",
    },
    {
      img: "https://topspizza.co.uk/storage/36.jpg",
      title: "Chilli",
    },
    {
      img: "https://topspizza.co.uk/storage/38.jpg",
      title: "Sweet Chilli",
    },
    {
      img: "https://topspizza.co.uk/storage/39.jpg",
      title: "BBQ",
    },
    {
      img: "https://topspizza.co.uk/storage/40.jpg",
      title: "Ketchup",
    },
    {
      img: "https://topspizza.co.uk/storage/157.jpg",
      title: "Sour Cream & Chives",
    },
    {
      img: "https://topspizza.co.uk/storage/195.jpg",
      title: "Peri Peri",
    },
  ];
  return (
    <>
      <div className="container mx-auto max-w-7xl gap-10 grid sm:grid-cols-2 md:grid-cols-4 place-content-center p-10">
        {data.map((el, id) => (
          <div
            class="bg-white shadow-md rounded-lg max-w-xs w-full newshadow"
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
                <div className="bg-green-400 hover:bg-green-500 cursor-pointer ">
                  <p className="text-center p-2 ">Select store to order</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dips;
