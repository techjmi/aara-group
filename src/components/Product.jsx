import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MoreInfo from "./MoreInfo";
import { frequently } from "../data/slideimage";
import { FaShareAlt, FaExchangeAlt, FaHeart } from 'react-icons/fa';

const Product = () => {
  const { productId ,variantId} = useParams(); // Extract product_id from URL
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedRam, setSelectedRam] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [error, setError] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchVariantData = async (colorId, ramId, storageId) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const params = {
        product_id: productId,
        variant_id:variantId,
        search: "other",
      };

      if (colorId) params.color_variant_id = colorId;
      if (ramId) params.other_variant_id = ramId;
      if (storageId) params.storage_variant_id = storageId;

      const response = await axios.get(
        "https://app1.crazzyhub.com/api/product-variant-filter-api",
        {
          params,
          headers: {
            Authorization: "7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj",
          },
        }
      );
      setProduct(response.data);
      setIsLoading(false);
      setIsError(false);
      setSelectedImage(response.data?.data?.variant_images?.[0]);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
      setError("Error while fetching the Data Please try again!", err);
    }
  };

  const handleColorSelect = (index) => {
    const colorId = product?.data?.variant_color_values?.[index]?.id;
    setSelectedColor(colorId);
    fetchVariantData(colorId, selectedRam, selectedStorage);
  };

  const handleRamSelect = (index) => {
    const ramId = product?.data?.other_variant_values?.[index]?.id;
    setSelectedRam(ramId);
    fetchVariantData(selectedColor, ramId, selectedStorage);
  };

  const handleStorageSelect = (index) => {
    const storageId = product?.data?.variant_storage_values?.[index]?.id;
    setSelectedStorage(storageId);
    fetchVariantData(selectedColor, selectedRam, storageId);
  };

  const handleSelectImage = (index) => {
    setSelectedImage(product?.data?.variant_images?.[index]);
  };

  const colorVariants =
    product?.data?.variant_color_values?.map((item, index) => {
      return (
        <div
          className={`w-auto h-auto rounded-md border-2 text-center cursor-pointer ${
            item.id === selectedColor ? "border-orange-500" : "border-gray-300"
          }`}
          key={index}
          onClick={() => handleColorSelect(index)}
        >
          {isLoading && !isError && (
            <div className="text-sm w-auto h-[45px] bg-cyan-600 text-white px-5 py-2 rounded-md m-auto">
              Loading...
            </div>
          )}
          {!isLoading && !isError && (
            <>
              <div className="flex justify-center">
                <img
                  src={item.variant_image}
                  alt="PhoneImage"
                  width="40px"
                  height="30px"
                />
              </div>
              <div className="px-1 text-xs font-semibold">{item.value}</div>
            </>
          )}
          {!isLoading && isError && (
            <div className="mt-10 text-red-600 text-bold text-sm">Error</div>
          )}
        </div>
      );
    }) || "";

  const imageVariants =
    product?.data?.variant_images?.map((item, index) => {
      return (
        <div
          className={`w-[80px] h-[80px] border-2 rounded-md cursor-pointer ${
            item === selectedImage ? "border-orange-500" : "border-gray-300"
          }`}
          key={index}
          onClick={() => handleSelectImage(index)}
        >
          <img src={item} alt="phoneImage" width="100%" height="100%" />
        </div>
      );
    }) || "";

  const otherVariantsRam =
    product?.data?.other_variant_values?.map((item, index) => {
      return (
        <div
          className={`w-auto h-[40px] rounded-md border-2 flex justify-center items-center cursor-pointer ${
            item.id === selectedRam ? "border-orange-500" : "border-gray-300"
          }`}
          key={index}
          onClick={() => handleRamSelect(index)}
        >
          {isLoading && !isError && (
            <div className="text-xs w-auto h-[30px] bg-cyan-600 text-white rounded-md m-auto flex items-center">
              Loading...
            </div>
          )}
          {!isLoading && !isError && (
            <h1 className="font-semibold text-lg px-2">{item.value}</h1>
          )}
          {!isLoading && isError && (
            <div className="mt-10 text-red-600 text-bold text-sm">Error</div>
          )}
        </div>
      );
    }) || "";

  const otherVariantsStorage =
    product?.data?.variant_storage_values?.map((item, index) => {
      return (
        <div
          key={index}
          className={`w-[80px] h-[50px] rounded-md border-2 flex justify-center items-center cursor-pointer ${
            item.id === selectedStorage ? "border-orange-500" : "border-gray-300"
          }`}
          onClick={() => handleStorageSelect(index)}
        >
          {isLoading && !isError && (
            <div className="text-xs w-auto h-[30px] bg-cyan-600 text-white rounded-md m-auto flex items-center">
              Loading...
            </div>
          )}
          {!isLoading && !isError && (
            <h1 className="font-semibold text-lg">{item.value}</h1>
          )}
          {!isLoading && isError && (
            <div className="mt-10 text-red-600 text-bold text-sm">Error</div>
          )}
        </div>
      );
    }) || "";

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        setIsError(false);
        const response = await axios.get(
          `https://app1.crazzyhub.com/api/product-details-api/?product_id=${productId}&variant_id=${variantId}`,
          {
            headers: {
              Authorization: "7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj",
            },
          }
        );
        setProduct(response.data);
        setIsLoading(false);
        setIsError(false);
        setSelectedImage(response.data?.data?.variant_images?.[0]);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
        setError("Error while fetching the Data Please try again!", err);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div className="flex flex-col md:flex-row pb-6">
  {/* Left side - Image and Product Details */}
  <div className="w-full md:w-1/3 md:mx-5">
    {/* Product image */}
    <div className="border border-gray-300 rounded-lg">
      <img
        src={selectedImage || product?.data?.variant_images?.[0]}
        width="100%"
        height="auto"
        alt="PhoneImage"
      />
    </div>
    
    {/* Product details */}
  </div>

  {/* Middle - Variant Selection */}
  <div className="w-full md:w-1/3 mt-4 md:mt-0">
    {/* Variant selection components */}
    <div className="mt-4 px-4">
      <h1 className="font-bold text-xl mb-2">
        {product?.data?.product_variant_name}
      </h1>
    </div>
    <div className="px-4">
      {/* Color selection */}
      <div className="mb-4">
        <h2 className="font-bold text-lg">Color:</h2>
        <div className="flex gap-3 mt-3">{colorVariants}</div>
      </div>
      
      {/* RAM selection */}
      <div className="mb-4">
        <h2 className="font-bold text-lg">RAM:</h2>
        <div className="flex gap-3 mt-3">{otherVariantsRam}</div>
      </div>
      
      {/* Storage selection */}
      <div className="mb-4">
        <h2 className="font-bold text-lg">Storage:</h2>
        <div className="flex gap-3 mt-3">{otherVariantsStorage}</div>
      </div>
    </div>
    <MoreInfo />
  </div>

  {/* Right side - Table with Random Data */}
  <div className="w-full md:w-1/3 mt-4 md:mt-0">
  <div className="bg-gray-200 rounded-lg p-1">
  <h2 className="font-bold text-lg mb-2 text-center">Frequently Bought</h2>
  <table className="w-full">
    <thead>
      {/* <tr>
        <th className="px-4 py-2">ID</th>
        <th className="px-4 py-2">Data</th>
      </tr> */}
    </thead>
    <tbody>
      {frequently.map((item, index) => (
        <tr key={index} className="border-b-sky-100 border-blue-400">
          <td className="border px-4 py-2">
            <img src={item.imageUrl} alt={item.name} className="w-12 h-12" />
          </td>
          <td className="border px-2 py-2">{item.name}</td>
          <td className="border px-2 py-2 flex items-center">
            ₹{item.price}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    <div>
 
  <button className="block px-4 py-2 rounded-md font-semibold text-center text-white bg-gradient-to-r from-purple-500 to-blue-500 w-full mt-4">Buy Now</button>
  <button className="block px-4 py-2 mb-2 rounded-md font-semibold text-center text-white bg-gradient-to-r from-purple-500 to-blue-500 w-full mt-2 ">Add To Cart</button>
</div>

<div className="flex justify-between">
  <button className="px-4 py-2 rounded-md text-gray-700 border border-gray-500 flex items-center space-x-2">
    <FaShareAlt />
    <span>Share</span>
  </button>
  <button className="px-4 py-2 rounded-md text-gray-700 border border-gray-500 flex items-center space-x-2">
    <FaExchangeAlt />
    <span>Compare</span>
  </button>
  <button className="px-4 py-2 rounded-md text-gray-700 border border-gray-500 flex items-center space-x-2">
    <FaHeart />
    <span>Add to Wishlist</span>
  </button>
</div>
  </div>
</div>

  );
};

export default Product;
