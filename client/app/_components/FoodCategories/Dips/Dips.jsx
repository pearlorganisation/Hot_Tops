import React from "react";
import useSWR from "swr";

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

    // -------------------data fetching function-----------------------
    const dipsFetcher = async (...args) =>
      fetch(...args).then((res) => {
        return res.json();
      });
  
    // =-------------------------data fetching---------------------------
    const {
      data: dipsData,
      error,
      isLoading,
    } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/dips`, dipsFetcher);
    
    console.log(dipsData);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;
  return (
    <>
      <div className="container mx-auto max-w-7xl gap-10 grid sm:grid-cols-2 md:grid-cols-4 place-content-center p-10">
        {dipsData?.data.map((item) => (
          <div
            class="bg-white shadow-md rounded-lg max-w-xs w-full newshadow"
            key={item?._id}
          >
            <img
              src={item.banner}
              alt="Card Image"
              className="rounded-t-lg  object-cover w-[370px] h-[250px]"
            />

            <div class="p-4">
              <h2 class="text-xl font-semibold mb-4 ">{item.title}</h2>
              <div class="relative flex flex-col gap-4">
                <p>
                  <select
                    className="w-full border-2 rounded-l-lg p-3"
                    style={{
                      boxShadow:
                        " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
                    }}
                  >
                    {item?.price.map((dips) => (
                      <option key={item._id} value={dips?.dipsType || "price"}>
                        {dips?.dipsType} <span>{dips.price} £</span>
                      </option>
                    ))}
                  </select>
                </p>
                <div className="bg-green-400 hover:bg-green-500 cursor-pointer ">
                  <p className="text-center p-2 ">ADD</p>
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
