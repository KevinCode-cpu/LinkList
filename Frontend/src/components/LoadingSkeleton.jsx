import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-10 w-64 bg-gray-200 rounded-lg"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {[1,2,3,4].map((i) => (
          <div
            key={i}
            className="h-32 rounded-xl bg-gray-200"
          />
        ))}
      </div>

      <div className="space-y-3">
        {[1,2,3,4,5].map((i)=>(
          <div
            key={i}
            className="h-16 rounded-lg bg-gray-200"
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;