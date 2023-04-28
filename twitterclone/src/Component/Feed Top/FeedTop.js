import React from 'react'
import Post from './Post'
import f from "./Feed.module.css"

export default function FeedTop() {
  return (
    <div className={f.main}>
      <div className={f.box}>
        <div className={f.first}>
          <h2>Home</h2>
        </div>
        <div className={f.second}>
          <div>For You</div>
          <div>Following</div>
        </div>
      </div>
      <Post/>
    </div>
  )
}
