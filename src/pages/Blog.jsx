import React from 'react'
import { Header } from '../common/Header'
import { posts } from '../data/constants'
import { Link } from 'react-router-dom'

export const Blog = () => {

    const blogs = posts.map((post, index) => {
        return (
            <div className='blogItems' key={index}>
                <h3>{post.title}</h3>
                <p>
                    {post.body}
                </p>
                <button><Link to={`/blog/${post.id}`}>Read more</Link></button>
            </div>
        )
    })

    return (
        <div>
            <Header />
            <div className='container'>
                {blogs}
            </div>
        </div>
    )
}
