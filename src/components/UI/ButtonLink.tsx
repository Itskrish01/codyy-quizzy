import React from 'react'
import { Link } from "react-router-dom"

type Props = {
    linkUrl: string
    title: string
    imgUrl: string
}

const ButtonLink = ({ linkUrl, title, imgUrl }: Props) => {
    return (
        <Link to={`/quiz/${linkUrl}`} className='flex relative items-center gap-10 px-6 py-5 hover:bg-[#0fd8df] transition-colors duration-150 group rounded-xl bg-[#ffffff]'>
            <div className="link-overlay"></div>
            <div className=''>
                <img src={imgUrl} alt={linkUrl} height={50} width={50} />
            </div>
            <h5 className='text-xl font-bold group-hover:text-white text-cyan-800'>{title}</h5>
        </Link>
    )
}

export default ButtonLink