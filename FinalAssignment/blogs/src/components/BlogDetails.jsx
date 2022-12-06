import { React, useState, useEffect } from 'react'
import { Navigate, useNavigate, Link, useParams } from "react-router-dom";
import axios from 'axios';

const BlogDetails = () => {
    const [blog, setBlog] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        getBlogDetails();
    }, []);
    const params = useParams();
    const getBlogDetails = () => {
        axios
            .get(`http://localhost:3000/blogs/${params.id}`)
            .then((response) => {
                const data = response.data;
                console.log(data);
                setBlog(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="BlogDetails">
            <center><h5 className="heading1"><b>MyBlogs</b></h5>
                <p className="heading2">This is a demo application</p></center>
            <br />

            <div className="card" style={{ height: "auto", padding: "10px", margin: "10px" }}>
                <div className="card-body">
                    <h5 className="card-title">{blog.Title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        Created on {blog.Date}
                    </h6>
                    <p className="card-text">
                        {blog.Contents}
                    </p>

                </div>
            </div>
           
        </div>
    )
}

export default BlogDetails