import React from 'react';

const MondrianComposition: React.FC = () => {
  return (
    <div className="h-full w-full bg-white grid grid-cols-5 grid-rows-8 gap-0">
      <div className="col-span-2 row-span-3 bg-mondrian-blue border-4 border-[#1E40AF]"></div>
      <div className="col-span-1 row-span-2 bg-mondrian-yellow border-4 border-[#1E40AF]"></div>
      <div className="col-span-2 row-span-3 bg-white border-4 border-[#1E40AF]"></div>

      <div className="col-span-2 row-span-2 bg-mondrian-red border-4 border-[#1E40AF]"></div>
      <div className="col-span-1 row-span-3 bg-white border-4 border-[#1E40AF]"></div>
      <div className="col-span-1 row-span-1 bg-mondrian-red border-4 border-[#1E40AF]"></div>
      <div className="col-span-1 row-span-2 bg-white border-4 border-[#1E40AF]"></div>

      <div className="col-span-2 row-span-1 bg-mondrian-yellow border-4 border-[#1E40AF]"></div>
      <div className="col-span-2 row-span-2 bg-mondrian-blue border-4 border-[#1E40AF]"></div>

      <div className="col-span-2 row-span-2 bg-mondrian-blue border-4 border-[#1E40AF]"></div>
      <div className="col-span-1 row-span-2 bg-white border-4 border-[#1E40AF]"></div>
      <div className="col-span-2 row-span-3 bg-mondrian-blue border-4 border-[#1E40AF]"></div>
    </div>
  );
};

export default MondrianComposition;
