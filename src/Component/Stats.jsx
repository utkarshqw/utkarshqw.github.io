import React from 'react'
import stat from "./Stats.module.css"
const Stats = () => {
  return (
    <div className={stat.parent}>
        <div className={stat.first} >
            <a href="https://github.com/utkarshqw">
            <img 
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=utkarshqw" 
            alt="*" />
            </a>

        </div>


        <div className={stat.second} >
            <a href="https://github.com/utkarshqw">
                <img 
                align="center"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=utkarshqw"
                 alt="#" />
            </a>

            <a href="https://github.com/utkarshqw">
                <img 
                align="left"
                src="https://github-readme-stats.vercel.app/api?username=utkarshqw&count_private=true&show_icons=true"
                 alt="#" />
            </a>


        </div>
    </div>
  )
}

export default Stats