import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, Row,Col } from 'react-bootstrap'
import categories from '../categories'
import { LinkContainer } from "react-router-bootstrap";
import './Home.css'
const Home = () => {
  return (
    <div>
      <img
        className="home-banner"
        src=" https://res.cloudinary.com/learn-code-10/image/upload/v1653947013/yqajnhqf7usk56zkwqi5.png"
        alt=""
      />
      <div className="featured-products-container mt-4">
        <h2>Last Products</h2>
        <div>
          <Link
            to="/category/all"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          >
            See More {">>"}{" "}
          </Link>
        </div>
      </div>
           {/* sale  Banner  */}
      <div className="sale_banner--container mt-4">
            <img src="https://res.cloudinary.com/learn-code-10/image/upload/v1654093280/xkia6f13xxlk5xvvb5ed.png" alt="" />
      </div>
      <div className="recent-products-container container mt-4">
            <h2>Categories</h2>
            <Row>
            {categories.map((category)=>(
                <LinkContainer to={`/category/${category.name.toLocaleLowerCase}`} >
                    <Col md={4}>
                     <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className='category-title'>
                        {category.name}

                    </div>
                    </Col>
                </LinkContainer>
            ))}
            </Row>
      </div>
    </div>
  );
};

export default Home;
