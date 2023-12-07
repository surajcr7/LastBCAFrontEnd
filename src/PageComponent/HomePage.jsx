import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../ProductComponent/ProductCard";
import Carousel from "./Carousel";
// import Footer from "../NavbarComponent/Footer";
import Footers from "../NavbarComponent/Footers";


export const Titem = [
  {
    icon: "../images/carousel_1.png",
  },
  {
    icon: "../images/courosel2.jpg",
  },
  {
    icon: "../images/courosel3.jpg",
  },
  {
    icon: "../images/courosel4.jpg",
  },
  {
    icon: "../images/courosel5.jpg",
  },
];

const HomePage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [tempSearchText, setTempSearchText] = useState("");
  const [recommendProducts, setRecommendProducts] = useState([]);
  const [nearestProducts, setNearestProducts] = useState([])



  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;

        if (categoryId == null && searchText === "") {
          // Fetch all products
          response = await axios.get(
            `http://localhost:8080/api/product/fetch/all`
          );
        } else if (searchText) {
          // Fetch products by name
          response = await axios.get(
            `http://localhost:8080/api/product/search?productName=${searchText}`
          );
        } else {
          // Fetch products by category
          response = await axios.get(
            `http://localhost:8080/api/product/fetch/category-wise?categoryId=${categoryId}`
          );
        }
        if (response.data) {
          console.log(response.data.products)
          setProducts(response.data.products);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categoryId, searchText]);
  useEffect(()=>{
    const fetchData = async()=>{{
      let response = await axios.get(
        `http://localhost:8080/api/product/fetch/all`
      );
      setRecommendProducts(response.data.products)
    
      
    }
    
  }
fetchData()
},[recommendProducts])
useEffect(()=>{
  const fetchData = async()=>{{
    let response = await axios.get(
      `http://localhost:8080/api/product/fetch/all`
    );
  
    setNearestProducts(response.data.products)
    
  }
  
}
fetchData()
},[ nearestProducts])
 
      const handleRecommend = ()=>{
        setProducts([])

        const reco = recommendProducts.filter((curr)=>curr.id !== 1)
        console.log("hello", reco)
    setProducts(reco)

  }
  const handleNearest = ()=>{
    setProducts([])
    const nearest = nearestProducts.filter((curr)=>curr.id !== 2)
    console.log("hello suraj", nearest)

 setProducts(nearest)
  }



  const searchProducts = (e) => {
    e.preventDefault();
    handleRecommend()
    setSearchText(tempSearchText);
  };

  return (
    <div className="container-fluid mb-2">

      <Carousel />

      <div className="d-flex aligns-items-center justify-content-center mt-5">
        <form class="row g-3">
          <div class="col-auto">
            <input
              type="text"
              class="form-control"
              id="inputPassword2"
              placeholder="Enter Product Name..."
              onChange={(e) => setTempSearchText(e.target.value)}
              style={{
                width: "350px",
              }}
              value={tempSearchText}
              required
            />
          </div>
          <div class="col-auto">
            <button
              type="submit"
              class="btn bg-color custom-bg-text mb-3"
              onClick={searchProducts}
            >
              Search
            </button>
          </div>
        </form>
      </div>
     <div className="col-auto d-flex justify-content-around w-25">
    <button class="btn bg-color custom-bg-text mb-3" onClick={handleRecommend}>Recomended Product</button>
    <button class="btn bg-color custom-bg-text mb-3 ml-2" onClick={handleNearest}>Nearest Product</button>
</div>

      <div className="col-md-12 mt-3 mb-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products.map((product) => {
            return <ProductCard item={product} key={product.id} />;
          })}
        </div>
      </div>
      {/* <hr /> */}
      {/* <Footer /> */}
      <Footers />
    </div>
  );
};

export default HomePage;
