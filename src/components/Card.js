/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */

import Image from 'next/image'


export default props => {
    return(
        <a href={props.link} target="_blank" rel='noreferrer noopener'>
            <div className="bg-slate-100 w-[350px] h-[450px] transition-all rounded-lg hover:bg-blue-500 hover:scale-110 hover:cursor-pointer max-sm:w-[250px] max-sm:h-[350px]">
                <Image src={props.imge} alt='Projeto' className='w-full h-1/2 rounded-xl '/>
                <div className='mx-4 my-4'>
                    <h1 className='font-bold text-3xl'>{props.title}</h1>
                    <h2 className='mt-1'>{props.subtitle}</h2>
                </div>
            </div>
        </a>
    )
}