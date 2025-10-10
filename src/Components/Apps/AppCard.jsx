import React from "react";
import { Star, Download } from "lucide-react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`}>
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={app.image}
            alt="logo" className=" h-80 p-4 pb-0"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-medium">
            {app.title}
          </h2>
<div className="flex justify-between items-center mt-2 text-sm">
        <div className="flex items-center text-green-500 font-medium bg-[#F1F5E8] p-[6px] rounded-lg">
          <Download size={16} className="mr-1" />
          {app.downloads}
        </div>
        <div className="flex items-center text-orange-500 font-medium bg-[#FFF0E1] p-[6px] rounded-lg">
          <Star size={16} className="mr-1 fill-orange-500" />
          {app.ratingAvg}
        </div>
      </div>

  
        </div>
      </div>
    </div>
    </Link>
  );
};

export default AppCard;
