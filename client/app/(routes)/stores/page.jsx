"use client";

const storesData = [
  {
    name: "ACTON",
    address: "174 Acton High Street, Acton, 020 8896 2896",
  },
  {
    name: "ACTON",
    address: "174 Acton High Street, Acton, 020 8896 2896",
  },
  {
    name: "ACTON",
    address: "174 Acton High Street, Acton, 020 8896 2896",
  },
  {
    name: "ACTON",
    address: "174 Acton High Street, Acton, 020 8896 2896",
  },
];

const Stores = () => {
  // -------------------hooks=---------------------------------------------

  return (
    <div>
      {storesData?.map((data) => {
        return (
          <>
            <div className="border hover:bg-red-600 hover:text-white w-[50%] flex flex-wrap">
              <h1>{data?.name}</h1>
              <p>{data?.address}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Stores;
