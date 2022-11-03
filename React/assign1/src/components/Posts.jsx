import React from 'react'

const Posts = (props) => {
    const { post } = props
    const createList = () => {
        return (
            <ul>
                {post.map((post) => {
                    return (
                        <li>
                            <div>UserID:{post.userId}</div>
                            <div>ID:{post.id}</div>
                            <div>Title:{post.title}</div>
                            <div>Body:{post.body}</div>
                        </li>
                    )
                })}
            </ul>
        )
    }
    return (
        <div>
            {createList()}
        </div>
    )
}

export default Posts