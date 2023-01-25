/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */

import Image from 'next/image'
import web1 from '../../public/web1.png'

export default props => {
    return(
        <a href='https://github.com/justAlves' target="_blank" rel='noreferrer noopener'>
            <div className="bg-slate-100 w-[350px] h-[450px] transition-all rounded-lg hover:bg-blue-500 hover:scale-110 hover:cursor-pointer">
                <div className='bg-slate-200 w-full h-1/2 rounded-xl animate-pulse'/>
                <div className='mx-4 my-4'>
                    <h1 className='font-bold text-3xl'>{props.title}</h1>
                    <h2 className='mt-1'>{props.subtitle}</h2>
                </div>
            </div>
        </a>
    )
}