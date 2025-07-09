import React from 'react'
import { Header } from '../common/Header'
import { useLocation } from 'react-router'
import { posts } from '../data/constants'

export const BlogDetails = () => {
    const location = useLocation()
    const currentId = location.pathname.split("/").at(-1)

    const data = posts.find((post) => `${post.id}` === currentId);
    console.log(data, currentId)
  return (
    <div>
        <Header />
        {data ? (
            <h1>{data.title}</h1>
        ) : (
            <h1>No blogs found</h1>
        )}
    </div>
  )
}
