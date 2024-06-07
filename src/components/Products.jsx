import { useEffect, useState } from "react";
import favoriteIcon from "../assets/free-heart.png"; // Importing the heart icon
import axios from "axios";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { css } from "@emotion/react";
import { v4 as uuidv4 } from "uuid";
const override = css`
  display: block;
  margin: 0 auto;
`;
const Products = () => {
  const [itemData, setItemData] = useState([]); // State to hold product data
  const [fetchError, setFetchError] = useState(""); // State for fetch error message
  const [loading, setLoading] = useState(false); // State for loading indicator

  // Fetch products from API
  useEffect(() => {
    setLoading(true);
    const retrieveProducts = async () => {
      try {
        const response = await axios.post(
          "https://app1.crazzyhub.com/api/all-filter-product-list",
          new URLSearchParams({
            category_id: "28",
            brand_id: "226",
            color_id: "",
          }),
          {
            headers: {
              Authorization: "7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setItemData(response.data.data.product_list)
        console.log(response.data.data.product_list)
        console.log("Product IDs:", response.data.data.product_list.map(product => product.id));
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setFetchError("Error while fetching the Data. Please try again!");
      }
    };

    retrieveProducts();
  }, []); 

  return (
    <div className="w-full flex justify-center items-center flex-wrap mt-5 gap-5 mb-3">
  {!loading &&
    itemData.map((product) => {
      console.log(product.ID); // Log the product UUID
      return (
        <Link
          to={`/product/${product.id}/${product.variant_id}`}
          key={product.id}
          className="product-card border-2 border-gray-300 rounded-lg shadow-lg shadow-gray-300 hover:scale-x-105 hover:scale-y-105 transition-all cursor-pointer w-full md:w-[20%] max-w-[300px] h-[400px] mb-5"
        >
          {/* Product Image */}
          <div className="w-[80%] h-[220px] m-auto">
            <img
              src={product?.image}
              width="90%"
              height="100%"
              alt="productImage"
            />
          </div>
          {/* Favorite Icon */}
          <img
            src={favoriteIcon}
            width="25px"
            height="25px"
            alt="HeartIcon"
            className="float-right relative -top-52 -left-5 cursor-pointer"
          />
          {/* Product Name */}
          <h1 className="px-3 font-bold text-xl">{product?.variant_name}</h1>
          {/* Stock Status */}
          <div className="text-lg text-green-500 px-3 font-semibold">
            {product?.stock_status}
          </div>
          {/* Price */}
          <div className="text-lg px-3 font-bold">₹{product?.actual_price}</div>
          {/* Discount */}
          <div className="px-3 flex gap-1">
            <div className="text-lg text-gray-400 font-bold line-through">
              {product?.price}
            </div>
            <div className="bg-green-500 flex items-center rounded-sm">
              <span className="text-white px-1">
                {product.discount_percent} %off
              </span>
            </div>
          </div>
        </Link>
      );
    })}
  {/* Loading Spinner */}
  {loading && (
    <div className="mt-10">
      <RingLoader color={"#ffffff"} css={override} size={70} />
    </div>
  )}
  {/* Fetch Error */}
  {fetchError && (
    <div className="mt-10 text-red-600 text-bold text-3xl">{fetchError}</div>
  )}
</div>

  );
  
};

export default Products;
