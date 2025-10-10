import { Download, Star } from "lucide-react";
import React, { useEffect, useState } from "react";

const Installation = () => {
  const [installedApp, SetInstalledApp] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installed"));
    if (savedList) SetInstalledApp(savedList);
  }, []);

  const sortedItem = () => {
    if (sortOrder === "asc") {
      return [...installedApp].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "desc") {
      return [...installedApp].sort((a, b) => b.size - a.size);
    }
    else{
       return installedApp
    }
  };


  return (
    <div className="bg-[#F5F5F5]">
      <div className="text-center pt-20 pb-14">
        <h1 className="text-5xl font-bold pb-4">Your Installed Apps</h1>
        <p className="text-xl text-[#627382] font-normal">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between mx-auto px-[20px] md:px-[80px] pb-10">
        <h1 className="text-2xl font-semibold">
          <span>({installedApp.length})</span> Apps Found
        </h1>
        <select
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value);
          }}
        >
          <option value="none">Sort By Size</option>
          <option value="desc">High-Low</option>
          <option value="asc">Low-High</option>
        </select>
      </div>

      <div>
        {sortedItem().map((a) => (
          <div
            key={a.id}
            className="flex items-center justify-between px-[20px] md:mx-[80px] py-6  rounded-lg bg-white mb-2"
          >
            <div className="flex items-center gap-4">
              <img
                src={a.image}
                alt={a.title}
                className="w-[80px] rounded-md"
              />
              <div>
                <h1 className="font-semibold text-lg">{a.title}</h1>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="flex items-center text-green-500">
                    <Download size={15} className="text-green-500 mr-1" />
                    {a.downloads}
                  </span>{" "}
                  <span className="flex items-center">
                    <Star size={15} className="fill-orange-500 mr-1" />
                    {a.ratingAvg}
                  </span>{" "}
                  <span>{a.size} MB</span>
                </div>
              </div>
            </div>
            <button className="btn bg-[#00D390] text-white px-4 py-2 rounded-lg">
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
