import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import ProductCard from "../ProductComponent/ProductCard";
import Carousel from "./Carousel";
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
    const {categoryId} = useParams();
    const [products, setProducts] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [tempSearchText, setTempSearchText] = useState("");
    const [recommendProducts, setRecommendProducts] = useState([]);
    const [nearestProducts, setNearestProducts] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const jwtToken = localStorage.getItem("jwtToken");
            if (jwtToken === null) {
                try {
                    let response;

                    if (categoryId == null && searchText === "") {
                        // Fetch all products
                        response = await axios.get(`http://localhost:8080/api/product/fetch/all`);
                    } else if (searchText) {
                        // Fetch products by name
                        response = await axios.get(`http://localhost:8080/api/product/search?productName=${searchText}`);
                    } else {
                        // Fetch products by category
                        response = await axios.get(`http://localhost:8080/api/product/fetch/category-wise?categoryId=${categoryId}`);
                    }

                    if (
                        response.data
                    ) {
                        setProducts(response.data.products);
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            } else {
                try {
                    let response;

                    if (categoryId == null && searchText === "") {
                        // Fetch all products
                        response = await axios.get(`http://localhost:8080/api/product/fetch/all`, {
                            headers: {
                                "Authorization": `Bearer ${jwtToken}`
                            }
                        });
                    } else if (searchText) {
                        // Fetch products by name
                        response = await axios.get(`http://localhost:8080/api/product/search?productName=${searchText}`, {
                            headers: {
                                "Authorization": `Bearer ${jwtToken}`
                            }
                        });
                    } else {
                        // Fetch products by category
                        response = await axios.get(`http://localhost:8080/api/product/fetch/category-wise?categoryId=${categoryId}`, {
                            headers: {
                                "Authorization": `Bearer ${jwtToken}`
                            }
                        });
                    }

                    if (
                        response.data
                    ) {
                        setProducts(response.data.products);
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };

        fetchData();
    }, [categoryId, searchText]);

    useEffect(() => {
        const jwtToken = localStorage.getItem("jwtToken");
        const fetchData = async () => {
            if (jwtToken === null) {
                try {
                    let response = await axios.get(`http://localhost:8080/api/product/fetch/all`);
                    setRecommendProducts(response.data.products);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            } else {
                try {
                    let response = await axios.get(`http://localhost:8080/api/product/fetch/all`,
                        {
                            headers: {
                                "Authorization": `Bearer ${jwtToken}`
                            }
                        });
                    setRecommendProducts(response.data.products);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const jwtToken = localStorage.getItem("jwtToken");
        const fetchData = async () => {
            if (jwtToken === null) {
                try {
                    let response = await axios.get(`http://localhost:8080/api/product/fetch/all`);
                    setNearestProducts(response.data.products);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            } else {
                try {
                    let response = await axios.get(`http://localhost:8080/api/product/fetch/all`,
                        {
                            headers: {
                                "Authorization": `Bearer ${jwtToken}`
                            }
                        }
                    );
                    setNearestProducts(response.data.products);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };

        fetchData();
    }, []);

    const handleRecommend = () => {
        const reco = recommendProducts.filter((curr) =>
            curr.id
            !== 1);
        console.log(reco);
        setProducts(reco);
    };

    const handleNearest = () => {
        const nearest = nearestProducts.filter((curr) =>
            curr.id
            !== 2);
        setProducts(nearest);
    };

    const searchProducts = (e) => {
        e.preventDefault();
        handleRecommend();
        setSearchText(tempSearchText);
    };

    return (
        <div className="container-fluid mb-2">
            <Carousel/>

            <div className="d-flex aligns-items-center justify-content-center mt-5">
                <form className="row g-3">
                    <div className="col-auto">
                        <input
                            type="text"
                            className="form-control"
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
                    <div className="col-auto">
                        <button
                            type="submit"
                            className="btn bg-color custom-bg-text mb-3"
                            onClick={searchProducts}
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>

            <div className="col-auto d-flex justify-content-around w-25">
                <button className="btn bg-color custom-bg-text mb-3" onClick={handleRecommend}>
                    Recommended Product
                </button>
                <button className="btn bg-color custom-bg-text mb-3 ml-2" onClick={handleNearest}>
                    Nearest Product
                </button>
            </div>

            <div className="col-md-12 mt-3 mb-5">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        products.map
                        ((product) => (
                            <ProductCard item={product} key={
                                product.id
                            }/>
                        ))}
                </div>
            </div>

            <Footers/>
        </div>
    );
};

export default HomePage;
