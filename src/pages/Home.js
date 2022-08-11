import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts, filterProducts, filterCategory } from "../store/slices/products.slices"
import "../assests/styles/home.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Accordion } from 'react-bootstrap'
import { addToCart } from '../store/slices/cart.slices'
import car from '../assests/images/shopping-cart-add-free-icon-font.png'
import car2 from '../assests/images/shopping-cart-check-free-icon-font.png'
import love from '../assests/images/heart-free-icon-font.png'


const baseUrl = "https://ecommerce-api-react.herokuapp.com/api/v1"

const Home = () => {


  const [isAdded, setIsAdded] = useState(car)

  const [search, setSearch] = useState("")

  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const [categories, setCategories] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const getFilterProducts = () => {
    dispatch(filterProducts(search))
  }

  useEffect(() => {
    axios
      .get(baseUrl + "/products/categories")
      .then((res) => setCategories(res.data.data.categories))
  }, [])

  const categoryFilter = (id) => {
    dispatch(filterCategory(id))
  }

  const goDetail = (id) => {
    navigate(`/product/${id}`)
  }

  const addCart = (id) => {
    const productToAdd = {
      id: id,
      quantity: 1
    }
    dispatch(addToCart(productToAdd))
  }
  const add = () => {
    setIsAdded(car2)
  }

  const oldValue = (maxValue) =>{
    parseInt(maxValue,10)
    return Math.floor( Math.random()*5)
  }
  console.log(products)


  

  return (
    <div>
      <div>
        <div className="banner" id="banner">
          <div className="banner-text">
            <h1>Welcome {localStorage.getItem("userName")}</h1>
            <h2>Tell what you looking for</h2>
            <div className="input-group mb-3">
              <input
                type="text"
                id="search-bar"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="form"
                placeholder="Search"
              />
              <button
                id="search-bar"
                onClick={getFilterProducts}
                className='search-btn'
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="products-container ">
          <div className="filter-section">
            <Accordion defaultActiveKey="1" style={{ width: "10rem" }}>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="header">Filter by </Accordion.Header>
                <Accordion.Body>
                  {categories.map((category) => (
                    <div className="option"
                      key={category.id}
                      onClick={() => categoryFilter(category.id)}

                    >
                      {category.name}
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className="cards-container">
            {products.map((product) => (
              <li key={product.id} className="product-wrapper" onClick={() => goDetail(product.id)}>
                <div className="product-container">
                  <div
                    className="product-image"
                  >
                    <img src={product.productImgs[0]} alt="" />
                  </div>

                  <div className="product-info">
                    <h4 className="label">Free shipping</h4>
                    <h3>{product.title}</h3>
                    <div>
                      Price:
                      <div className="prices">
                        <h6 className="old-price">$ {product.price.replace("0",oldValue(product.price)) }</h6>
                        <h5 className="w">$ {product.price}</h5>
                      </div>
                    </div>
                    <div className="btn-section">
                      <button className="btn-buy" onClick={() => addCart(product.id)}>Buy</button>
                    </div>
                    <div className="row-section">
                      <div className="circle"></div>
                      <h4 className="label-stok">{product.id}+ pcs. in stock</h4>
                    </div>
                    <div className="btn-row">
                    <button className="btn-addcar" onClick={()=>console.log("add")} > <img src={isAdded} className='icon' /> add to cart</button>
                    <button className="btn-list" onClick={() => addCart(product.id)}><img src={love} className='icon' /> Buy</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
