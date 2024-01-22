import Image from "next/image"


interface Props {
    src:string,
    title:string,
    description:string,
}

const ProjectCard = ({src,title,description}: Props) => {
  return (
    <div className="relative py-2 px-4 text-white overflow-hidden rounded-lg shadow-md border-2 h-[650px]  border-[#2a0e61]">
        <Image 
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
        />
        <div className="relative p-4">
            <h1 className="text-2xl font-semibold text-white text-center">{title}</h1>
            <p className="text-gray-300 mb-4 mt-5 ">{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard