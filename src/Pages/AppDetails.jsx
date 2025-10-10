import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { Download, Star, ThumbsUp } from "lucide-react";
import AppNotFound from "../Components/AppNotFound";

const AppDetails = () => {
  const { id } = useParams();
  const { AllApps, loading, error } = useApps();
  const app = AllApps.find((a) => String(a.id) === id);

  const [installed, setInstalled] = useState(false);

  
  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("installed")) || [];
    const isInstalled = existingList.some((item) => item.id === app?.id);
    setInstalled(isInstalled);
  }, [app]);

  if (loading) return <p className="px-6 py-10 text-center">Loading...</p>;
  if (!app) return <AppNotFound></AppNotFound>;

  const handleInstall = () => {
    const existingList = JSON.parse(localStorage.getItem("installed")) || [];
    const updatedList = [...existingList, app];
    localStorage.setItem("installed", JSON.stringify(updatedList));
    setInstalled(true); 
  };

  return (
    <div className="pt-20 bg-[#F5F5F5] px-6 sm:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row pb-10 gap-6 lg:gap-10">
        <div className="flex-shrink-0">
          <img
            src={app.image}
            alt={app.title}
            className="w-full max-w-[350px] h-auto lg:h-[350px] object-cover rounded-lg mx-auto"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold pb-2">{app.title}</h1>
          <p className="text-lg sm:text-xl pb-6">
            Developed by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
              {app.companyName}
            </span>
          </p>
          <hr className="border-gray-300 mb-6" />

          <div className="flex flex-col md:flex-row gap-6 sm:gap-10 pb-6">
            <div className="flex flex-col items-center p-4">
              <Download size={30} className="text-green-500" />
              <p className="text-base sm:text-lg pt-2">Downloads</p>
              <h1 className="text-2xl sm:text-[40px] font-extrabold">
                {app.downloads.toLocaleString()}
              </h1>
            </div>
            <div className="flex flex-col items-center p-4">
              <Star size={30} className="fill-orange-500" />
              <p className="text-base sm:text-lg pt-2">Average Ratings</p>
              <h1 className="text-2xl sm:text-[40px] font-extrabold">{app.ratingAvg}</h1>
            </div>
            <div className="flex flex-col items-center p-4">
              <ThumbsUp size={30} className="fill-purple-500" />
              <p className="text-base sm:text-lg pt-2">Total Reviews</p>
              <h1 className="text-2xl sm:text-[40px] font-extrabold">{app.reviews}</h1>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`btn bg-[#00D390] text-white px-6 py-3 rounded-lg text-base sm:text-lg ${
              installed ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {installed ? "Installed" : `Install Now (${app.size}MB)`}
          </button>
        </div>
      </div>

      <hr className="border-gray-300 mb-6" />

      <div>
        <h1 className="font-semibold text-xl sm:text-2xl py-4">Description</h1>
        <p className="text-[#627382] text-base sm:text-xl text-justify">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
