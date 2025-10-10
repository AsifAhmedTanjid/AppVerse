import { Download, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

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

const handleRemove =(id)=>{
    const existingList =JSON.parse(localStorage.getItem('installed'))
    
    
    const appToRemove = existingList.find(app => app.id === id)
    
    let UpdatedList =existingList.filter(a=>a.id!==id)
    // for ui instant update 
    SetInstalledApp(UpdatedList)
    localStorage.setItem('installed',JSON.stringify(UpdatedList))
    
    
    toast.error(`${appToRemove?.title || 'App'} has been uninstalled successfully!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
}


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
        {installedApp.length === 0 ? (
          <div className="text-center py-20">
            <div className="mx-auto max-w-md">
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Download size={40} className="text-gray-400" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                No Apps Installed
              </h2>
              <p className="text-gray-500 mb-6">
                You haven't installed any apps yet. Browse our app collection to find something interesting!
              </p>
              <a
                href="/Apps"
                className="inline-block bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Browse Apps
              </a>
            </div>
          </div>
        ) : (
          sortedItem().map((a) => (
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
              <button onClick={()=>handleRemove(a.id)} className="btn bg-[#00D390] text-white px-4 py-2 rounded-lg">
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Installation;
