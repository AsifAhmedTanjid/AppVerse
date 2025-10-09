import React from "react";
import AppCard from "./AppCard";
import { NavLink } from "react-router";

const TrendingApps = ({ AllApps }) => {
const topApps = AllApps.slice(0,8);
  return (
    <div className="bg-[#F5F5F5]">
      <div className="text-center pt-20 pb-14">
        <h1 className="text-5xl font-bold pb-4">Trending Apps</h1>
        <p className="text-xl text-[#627382] font-normal">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center  mx-auto px-4">
        {topApps.map((app, ind) => (
          <AppCard key={ind} app={app} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <NavLink to="/apps"><button className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-[16px]">Show All</button></NavLink>
      </div>
    </div>
  );
};

export default TrendingApps;
