import { React, useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [tags, setTags] = useState("");
    const navigate = useNavigate();
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const onChangeContents = (e) => {
        setContents(e.target.value);
    };
    const onChangeTags = (e) => {
        setTags(e.target.value);
    };
    useEffect(() => {
        CreateBlog();
    }, []);
    const { id } = useParams();
    console.log(id)

    function CreateBlog() {
        if (title === '' || contents === '' || tags === '') {
            toast.warn("Please Fill details")
        } else {
            axios
                .post(`http://localhost:3000/blogs/${id}`, {
                    Title: title,
                    Contents: contents,
                    Tags: tags,
                    Date: date
                })
                .then((response) => {
                    const data = response.data;
                    console.log(data);
                    window.alert("Blogs created Successfully...!!!");
                    navigate(`/Home/${id}`);
                })
                .catch((error) => {
                    console.log(error);
                    window.alert("server error...!!!");
                });
        }
    }
    return (
        <div className="CreateBlog">
            <center><h5 className="heading1"><b>MyBlogs</b></h5>
                <p className="heading2">This is a demo application</p></center>
            <br />
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Title</label>
                <input value={title} onChange={onChangeTitle} type="text" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Contents</label>
                <textarea value={contents} onChange={onChangeContents} className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Tags</label>
                <input value={tags} onChange={onChangeTags} type="text" className="form-control" id="exampleFormControlInput1" />
            </div>
            <button type="button" className="btn btn-primary" onClick={CreateBlog}>Submit</button>
        </div>
    )
}

export default CreateBlog