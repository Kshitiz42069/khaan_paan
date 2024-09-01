

function AboutUs() {
  return (
    <div className='relative bg-white h-[40.8rem]'>

      {/* section */}
      <div className='absolute left-0 top-[8.6rem] lg:top-[11.6rem] w-full h-[516px] lg:h-[467px] flex justify-evenly items-center bg-[#3C509D0A]'>
        {/* img */}
        <img className='w-[24rem] h-[29.25rem] hidden lg:block' src="https://i.pinimg.com/564x/90/76/ff/9076ffe25767c5003290da18ff86b26b.jpg" alt="" />
        {/* desc */}
        <div className='lg:w-[27.9rem] w-[275px] h-[235px] lg:h-[15.8rem] flex flex-col gap-[2rem] items-center lg:items-start'>
          <p className=' PS text-[2.8rem] leading-[1.7rem] text-[#0E2368]'>About Us</p>
          <p className='font-[400] text-[11px] lg:text-[15px] leading-[21px] lg:leading-[1.7rem] text-center lg:text-start'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
          <button className='w-[8.25rem] h-[2.65rem] rounded-[1.3rem] px-[1.65rem] py-[6px] text-white bg-[#E23744]'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs