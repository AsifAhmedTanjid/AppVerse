import React, { useState } from "react";
import useApps from "../../Hooks/useApps";
import AppCard from "./AppCard";
import AppNotFound from "../AppNotFound";

const AllApps = () => {
  const [search, setSearch ] = useState('')
  const { AllApps, loading } = useApps();
 const term=search.trim().toLocaleLowerCase()
  const searchedApp =term?AllApps.filter(app=>app.title.toLocaleLowerCase().includes(term)):AllApps


  
  if (loading) {
    return (
      <div className="bg-[#F5F5F5] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg text-primary"></div>
          <p className="mt-4 text-gray-600">Loading apps...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-[#F5F5F5]">
      <div className="text-center pt-20 pb-14">
        <h1 className="text-5xl font-bold pb-4">Our All Applications</h1>
        <p className="text-xl text-[#627382] font-normal">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between mx-auto px-[20px] md:px-[80px] pb-10">
        <h1 className="text-2xl font-semibold">
          <span>({searchedApp.length})</span> Apps Found
        </h1>
        <label className="input">
  
        <input
          value={search}

          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search Apps"
        />
        </label>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center  mx-auto px-4"> */}
       {searchedApp.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mx-auto px-4">
          {searchedApp.map((app, ind) => (
            <AppCard key={ind} app={app} />
          ))}
        </div>
      ) : (
        // Only show AppNotFound if we have data but no search results
        // This prevents showing "no apps found" during initial load
        AllApps.length > 0 ? <AppNotFound></AppNotFound> : null
      )}
      {/* </div> */}
    </div>
  );
};

export default AllApps;
