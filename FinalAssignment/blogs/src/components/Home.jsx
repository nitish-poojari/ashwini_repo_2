import { React, useState, useEffect } from 'react'
import { navigate, useNavigate, Link, useParams } from "react-router-dom";
import axios from 'axios';
import Navbar from './Navbar';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        getAllBlogs();
    }, []);
    const { id } = useParams()
    console.log(id)
    const getAllBlogs = () => {
        axios
            .get("http://localhost:3000/blogs")
            .then((response) => {
                const data = response.data;
                console.log(data);
                setBlogs(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="Home">
            <Navbar />
            <center><h5 className="heading1"><b>MyBlogs</b></h5>
                <p className="heading2">This is a demo application</p></center>
            <br />
            {blogs.map((blog) => {
                return <div className="container" style={{ padding: "20px", maxWidth: "60%" }}>
                    <div className="card">
                        <div className="card-body">
                            {/* <div className="icons">
                                <i class="bi bi-hand-thumbs-up"></i>
                                <i class="bi bi-hand-thumbs-down"></i>
                            </div> */}
                            <h5 className="card-title">{blog.Title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                Created  on {blog.Date}
                            </h6>
                            <p className="card-text">
                                {blog.Contents}
                            </p>
                            <div className="readmore">
                                {" "}
                                <Link to={{ pathname: `/BlogDetails/${blog.id}` }}>
                                    {" "}
                                    <b>Read more...</b>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>;
            })}
        </div>
    )
}

export default Home