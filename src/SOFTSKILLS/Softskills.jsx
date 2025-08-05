import "../SOFTSKILLS/softskills.css"
import { BicepsFlexedIcon, BookCheck, BriefcaseIcon, Clock11Icon, ComputerIcon, GlassWaterIcon, Users2Icon } from 'lucide-react'

const Softskills = () => {
  return (
    <section className='w-screen h-fit softskillssection'>
        <h1 className="text-4xl text-center mt-50">SOFT SKILLS</h1>
        <div className='w-[80%] mx-auto mt-20 p-4'>
            <div id="softskills" className='bg-sky-500 p-2 lg:flex my-2 rounded-xl text-black lg:items-center transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                <p className='flex font-bold w-55'><span className='mx-2'><Clock11Icon/></span>Time management : </p>
                <p className='text-justify text-sm'>Skilled in managing time under pressure, prioritizing critical tasks, and ensuring timely completion of projects.</p>
            </div>
            <div id="softskills" className='bg-green-500 p-2 lg:flex my-2 rounded-xl text-black items-center transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                <p className='flex font-bold w-40'><span className='mx-2'><BriefcaseIcon/></span>Work ethic : </p>
                <p className='text-justify text-sm'>Reliable, self-driven, and detail-oriented with a strong commitment to quality, deadlines, and continuous improvement.</p>
            </div>
            <div id="softskills" className='bg-orange-300 p-2 lg:flex my-2 rounded-xl text-black items-center transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                <p className='flex font-bold w-52'><span className='mx-2'><ComputerIcon/></span>Problem solving : </p>
                <p className='text-justify text-sm'>Good at breaking down problems, thinking clearly under pressure, and finding smart, workable solutions quickly.</p>
            </div>
            <div id="softskills" className='bg-yellow-300 p-2 lg:flex my-2 rounded-xl text-black items-center transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                <p className='flex font-bold w-40'><span className='mx-2'><GlassWaterIcon/></span>Adaptable : </p>
                <p className='text-justify text-sm'>Quick to adapt to new tools, environments, and challenges while staying focused on delivering results.</p>
            </div>
            <div id="softskills" className='bg-red-500 p-2 lg:flex my-2 rounded-xl text-black items-center transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                <p className='flex font-bold w-40'><span className='mx-2'><BicepsFlexedIcon/></span>Leadership : </p>
                <p className='text-justify text-sm'>Takes initiative, motivates team members, and leads with clarity and accountability to achieve shared goals.</p>
            </div>
            <div id="softskills" className='bg-purple-500 p-2 lg:flex my-2 rounded-xl text-black items-center transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                <p className='flex font-bold w-52'><span className='mx-2'><Users2Icon/></span>Communication : </p>
                <p className='text-justify text-sm'>Communicates clearly and effectively, listens actively, and ensures smooth collaboration across teams.</p>
            </div>
            <div id="softskills" className='bg-gray-500 p-2 lg:flex my-2 rounded-xl text-black items-center transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                <p className='flex font-bold w-52'><span className='mx-2'><BookCheck/></span>Rapid Learing : </p>
                <p className='text-justify text-sm'>Quick to grasp new concepts, adapt to tools and technologies, and apply knowledge effectively in real-world scenarios.</p>
            </div>
        </div>
    </section>
  )
}

export default Softskills
