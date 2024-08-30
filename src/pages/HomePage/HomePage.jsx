import React from 'react'
import HomeCarousel from '../../customer/Components/Carousel/HomeCarousel'
import HomeSectionCarousel from '../../customer/Components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../customer/Data/mens_kurta'

const HomePage = () => {

  return (
    <div>
      <HomeCarousel/>
      <div className=' flex flex-col space-y-10 py-20 justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"} />

      </div>
    </div>
  )
}

export default HomePage
