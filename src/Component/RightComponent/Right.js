import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { CgMoreAlt } from 'react-icons/cg'
import { What } from '../Right What\'s happening/What'
import { Follow } from '../Right Who to follow/Follow'
import r from './Right.module.css'

export default function Right() {
    return (
        <div className={r.main}>
            <div className={r.searchbox}>
                <div className={r.search}>
                    <BsSearch />
                    <input type="text" placeholder='Search' />
                </div>
            </div>

            <div className={r.box}>
                <h2>What's Happening</h2>
                {What.map((e) => {
                    return (
                        <div className={r.mid} key={Math.random()}>
                            <div>
                                <p>Trending in India</p>
                                <h4>{e.tag}</h4>
                                <p>{e.tweet}  Tweets</p>
                            </div>
                            <div>
                                <CgMoreAlt />
                            </div>
                        </div>
                    )
                })}
                <p className={r.show}>Show More</p>
            </div>
            <div className={r.bot_box}>
                <h2>Who to Follow</h2>
                {Follow.map((e) => {
                    return (
                        <div className={r.bottom} key={e.id}>
                            <div className={r.data}>
                                <div className={r.img}>
                                    <img src={e.image} alt="dp" />
                                </div>
                                <div>
                                    <h4>{e.name}</h4>
                                    <p>@{e.userid}</p>
                                </div>
                            </div>
                            <div className={r.btn}>
                                <button className={r.btn}>Follow</button>
                            </div>
                        </div>
                    
                    )
                })}
                <p className={r.show}>Show More</p>
                <div className={r.terms}>
            <p>
                Terms of Service
                Privacy Policy
                Cookie Policy
                Accessibility
                Ads info
                More
                © 2023 X Corp.
            </p>
            </div>
            </div>
            
            
        </div>
    )
}
