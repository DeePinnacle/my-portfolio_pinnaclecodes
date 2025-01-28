import React from 'react'
import Image from "next/image"
import {
    FolderOpen,
    LinkIcon
} from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { IconType } from "react-icons"
import Link from "next/link"

interface projectProps {
    title: string,
    description: string,
    repoLink: string,
    demoLink: string,
    image: string,
    techStack: {
        icon: IconType,
        tech: string
    }[]
}

const ProjectContent = ({
    title,
    description,
    repoLink,
    demoLink,
    image,
    techStack
}: projectProps) => {
    return (
        <div className="">
            <div className='w-full my-6 bg-slate-200 rounded-xl p-2 pb-4'>
                <Link href={`${demoLink}`}>
                    <div className='relative w-full h-72 overflow-hidden rounded-lg md:h-[35rem] lg:h-[25rem]'>
                        <Image src={`/${image}`} alt='project-image' fill priority objectFit='cover' objectPosition='center' className='rounded-lg' />
                    </div>
                </Link>
                <p className='font-jost text-lg text-[#050505e3] flex flex-row gap-2 font-light mx-2 md:text-3xl'><FolderOpen className="md:w-8 md:h-8" /> 01 - webapp</p>
                <span className='flex flex-row items-center justify-between gap-3'>
                    <Link href={`${repoLink}`}>
                        <div className='flex flex-row items-center gap-3'>
                            <p className='font-jost font-semibold text-[#050505e3] mx-2 my-4 text-2xl md:text-3xl'>{title}</p>
                            <div className='w-10 h-10 bg-[#050505e3] rounded-full flex flex-row items-center justify-center'><LinkIcon /></div>
                        </div>
                    </Link>
                    <Link href={"/gitbu"}>
                        <FaGithub className='h-10 w-10 text-[#050505e3]' />
                    </Link>
                </span>
                <p className='text-[#050505e3] font-jost font-light text-xl mx-2 mt-4 md:text-3xl lg:text-base lg:font-poppins'>{ description }</p>
                <div>
                    <p className='mx-2 text-[#050505e3] text-xl font-jost font-semibold my-3 md:text-3xl'>Technologies used</p>
                    <span className='mx-2 flex flex-row flex-wrap items-center gap-2'>
                        {
                            techStack?.map((stack, idx)=>(
                                <p key={idx} className='bg-[#050505e3] text-[gray] font-jost font-light rounded-full px-4 py-2 flex flex-row items-center justify-between gap-2 md:text-2xl md:py-4 lg:text-base lg:py-2'>{< stack.icon />} {stack.tech} </p>
                            ))
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProjectContent