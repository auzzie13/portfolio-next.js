import React from "react";
import { Skeleton } from "@/app/components";

const LoadingProjectDetailPage = () => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-8 px-14 bg-stone-800 max-w-sm rounded overflow-hidden shadow-lg border-solid border-2 border-red-600">
      {/* <img
className="w-full"
src="/img/card-top.jpg"
alt="Sunset in the mountains"
/> */}

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <Skeleton />
        </div>
        <p className="text-gray-700 text-base">
          <Skeleton />
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <Skeleton />
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <Skeleton />
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <Skeleton />
        </span>
      </div>
    </div>
  );
};

export default LoadingProjectDetailPage;
