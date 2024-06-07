import React from 'react'
import startIcon from "../assets/startIcon.png";
import locationIcon from "../assets/location2.jpg";
import replacementIcon from "../assets/replacementIcon.webp";
import warrantyIcon from "../assets/warranty2.png";
import gstIcon from "../assets/gstInvoice.jpg";
const MoreInfo = () => {
  return (
    <div>
  {/* Delivery Options */}
  <div className="mt-2 border-2 border-gray-300 w-[97%]  m-auto bg-gray-100 flex p-3 justify-between items-center">
    <div className="font-semibold text-lg">Delivery Options:</div>
    <div className="flex justify-end gap-2">
      <img
        src={locationIcon}
        alt="LocationIcon"
        width="25px"
        height="20px"
        className="mt-1"
      />
      <input
        type="text"
        placeholder="Enter Pincode"
        className="border-b-2 border-gray-400 bg-gray-100 outline-none shadow-sm shadow-gray-400 pl-2"
      />
    </div>
  </div>

  {/* Replacement, Warranty, GST */}
  <div className="mt-2 border-2 border-gray-300 w-[97%]  m-auto bg-red-200 p-3 flex  justify-center items-center">
    {/* Replacement */}
    <div className="w-[33%] md:w-[33%] h-[40px] border-r-4 border-gray-200 flex justify-center items-center mb-2 md:mb-0">
      <div>
        <img
          src={replacementIcon}
          width="30px"
          height="30px"
          alt="ReplaceImage"
        />
      </div>
      <div className="flex flex-col justify-center items-start">
        <p className="font-bold">Replacement</p>
        <p>in 7 days</p>
      </div>
    </div>

    {/* Warranty */}
    <div className="w-[33%] md:w-[33%] h-[40px] border-r-4 border-gray-200 flex justify-center items-center mb-2 md:mb-0">
      <div>
        <img
          src={warrantyIcon}
          width="30px"
          height="30px"
          alt="warrantyIcon"
        />
      </div>
      <div className="flex flex-col justify-center items-start">
        <p className="font-bold">Warranty</p>
        <p>in 1 Year</p>
      </div>
    </div>

    {/* GST Invoice */}
    <div className="w-[33%] md:w-[33%] h-[40px] flex justify-center items-center">
      <div>
        <img
          src={gstIcon}
          width="30px"
          height="30px"
          alt="gstIcon"
        />
      </div>
      <div className="flex flex-col justify-center items-start">
        <p className="font-bold">GST Invoice</p>
        <p>Available</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default MoreInfo
