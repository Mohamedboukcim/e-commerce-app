import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti, praesentium, saepe at rerum nemo ea enim deleniti similique deserunt inventore optio minus quam aut ipsam quia dolorem itaque corporis.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero laudantium corrupti quam non soluta. Vel ipsum blanditiis perspiciatis dolor rem distinctio natus quisquam vitae dolorem praesentium. Ullam placeat at nam.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat quis laborum ipsa, numquam, incidunt mollitia doloremque, quibusdam perspiciatis voluptatum quae asperiores? Vel omnis error odio, sed eius non accusantium.</p>
        </div>
      </div>

      <div className='text-xl py-6'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, error. Adipisci maxime deleniti quisquam consectetur eveniet amet, velit sint fugiat, eius sapiente neque expedita modi blanditiis quos accusamus, optio repellat!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, error. Adipisci maxime deleniti quisquam consectetur eveniet amet, velit sint fugiat, eius sapiente neque expedita modi blanditiis quos accusamus, optio repellat!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, error. Adipisci maxime deleniti quisquam consectetur eveniet amet, velit sint fugiat, eius sapiente neque expedita modi blanditiis quos accusamus, optio repellat!</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About