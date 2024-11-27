import React from 'react'
import { CircleX } from 'lucide-react'


const Form = () => {
  return (
    <div className='w-full h-auto bg-[#faf8f7] overflow-hidden'>
        {/* Banner */}
        <div className='w-full h-[20rem] bg-[#2b2b2b] py-12 relative'>
            <div className='absolute -top-32  -left-4 object-fill w-[11rem] h-[5rem] md:w-full md:h-full'>
                <img src="circle.svg" alt="" className='' />
            </div>

            <div className='absolute -bottom-24 md:left-[1rem] right-0 rotate-180 w-[11rem] h-[5rem] md:w-full md:h-full'>
                <img src="circle.svg" alt="" className='' />
            </div>

            <div className='w-4xl h-auto mx-auto flex flex-col justify-center items-center space-y-8'>
                <h1 className='text-white text-3xl font-poppins font-semibold'>Job Opening Form</h1>
                <h1 className='text-white text-3xl font-poppins font-semibold text-center'>Be a Part of WebStudio Nepal Family</h1>
            </div>
        </div>
        <div className='max-w-4xl h-full mx-auto relative md:-top-24 top-0  bg-white'>
            <div className='w-full h-full md:px-24 md:py-12 px-8 py-8 flex flex-col '>
                <h1 className='text-2xl font-poppins font-semibold'>
                    Basic Job Information
                </h1>

                <form className='w-full h-full space-y-8 text-xl'>
                    <div className='w-full h-full grid md:grid-cols-2 grid-cols-1 gap-8 mt-8 text-xl'>
                    <label htmlFor="name">Job Title
                    <input type="text" placeholder='(e.g. Backend Developer, UI/UX Designer)' id='name' className='w-full h-12 border-b  border-b-black placeholder:text-sm  hover:outline-none' />
                    </label>
                    <label htmlFor="name">Location
                    <input type="text" placeholder='(e.g. Onsite/ Remote/ Hybrid)' id='name' className='w-full h-12 border-b  border-b-black placeholder:text-sm  hover:outline-none' />
                    </label>

                    <label htmlFor="name">Employment Type
                    <input type="text" placeholder='(e.g. Full Time/ Part Time)' id='name' className='w-full h-12 border-b  border-b-black placeholder:text-sm  hover:outline-none' />
                    </label>
                    <label htmlFor="name">Job Level
                    <input type="text" placeholder='(e.g. Junior/ Senior/ Mid Level)' id='name' className='w-full h-12 border-b  border-b-black placeholder:text-sm  hover:outline-none' />
                    </label>

                    <label htmlFor="name">Application Deadline
                    <input type="text" placeholder='mm/dd/yyyy' id='name' className='w-full h-12 border-b  border-b-black placeholder:text-sm  hover:outline-none' />
                    </label>
                    <label htmlFor="name">Job Posting Date
                    <input type="text" placeholder='mm/dd/yyyy' id='name' className='w-full h-12 border-b  border-b-black placeholder:text-sm  hover:outline-none' />
                    </label>
                    </div>

                    <div className='col-span-2'>
                        <h1 className='text-2xl font-poppins font-semibold'>Job Description</h1>
                    </div>

                    <div className='grid grid-cols-1 w-full h-full gap-6 font-poppins'>
                        <label htmlFor="name" className=''>Job Responsibilities
                            <input type="text" className='w-full h-12 border-b  border-b-black placeholder:text-sm  hover:outline-none' placeholder='List all the responsibilities hover:outline-none' />
                        </label>


                        <label htmlFor="name" className=''>Responsibilities
                            <input type="text" placeholder='List all the responsibilities' className='w-full h-12 border-b  border-b-black placeholder:text-sm  hover:outline-none' />
                        </label>


                        <h1 className='text-2xl font-poppins '>
                            Skills Requirements
                        </h1>

                        <div className='w-full h-fit border border-dashed border-black '>
                            <div className=' w-[34rem] h-full grid md:grid-cols-3 grid-cols-1 gap-2 px-4 py-4  '>
                                <button className='flex gap-2 bg-[#BFE5F8] font-nunito text-black text-sm border-2 border-[#1181B8] rounded-full w-fit h-10 items-center justify-center px-4 py-2'>
                                    Manual Testing
                                    <CircleX className='w-4 h-4' />
                                </button>
                                <button className='flex gap-2 bg-[#BFE5F8] font-nunito text-black text-sm border-2 border-[#1181B8] rounded-full w-fit h-10 items-center justify-center px-4 py-2'>
                                    Manual Testing
                                    <CircleX className='w-4 h-4' />
                                </button>
                                <button className='flex gap-2 bg-[#BFE5F8] font-nunito text-black text-sm border-2 border-[#1181B8] rounded-full w-fit h-10 items-center justify-center px-4 py-2'>
                                    Manual Testing
                                    <CircleX className='w-4 h-4' />
                                </button>
                                <button className='flex md:ml-4 ml-0 gap-2 bg-[#BFE5F8] font-nunito text-black text-sm border-2 border-[#1181B8] rounded-full w-fit  h-10 items-center justify-center md:px-2 px-4 py-2'>
                                    Manual Testing
                                    <CircleX className='w-4 h-4' />
                                </button>
                                <button className='flex gap-2 bg-[#BFE5F8] font-nunito text-black text-sm border-2 border-[#1181B8] rounded-full w-fit h-10 items-center justify-center px-4 py-2'>
                                    Manual Testing
                                    <CircleX className='w-4 h-4' />
                                </button>
                                <button className='flex gap-2 bg-[#BFE5F8] font-nunito text-black text-sm border-2 border-[#1181B8] rounded-full w-fit h-10 items-center justify-center px-4 py-2'>
                                    Manual Testing
                                    <CircleX className='w-4 h-4' />
                                </button>

                            </div>

                          

                        </div>
                                <label htmlFor="name" className=''>Preferred Qualifications
                            <input type="text" placeholder='List all the required qualifications' className='w-full h-12 border-b outline-none  border-b-black placeholder:text-sm  hover:outline-none' />
                        </label>

                        <div className='w-full h-full flex justify-end '>
                            <button className='bg-black text-white px-6 py-2 rounded-lg  items-center justify-center'>
                                Submit
                            </button>
                        </div>

                    </div>


                       








                </form>

            </div>


        </div>

    </div>
  )
}

export default Form