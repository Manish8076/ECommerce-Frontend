import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className=' cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-gray-300 '>
      <div className=' h-[13rem] w-[10rem]'>
        <img className=' object-cover object-top h-full w-full' src={product.imageUrl} alt="" />
      </div>
      <div className=' p-3'>
        <h1 className=' font-medium text-lg text-slate-900'>{product.brand}</h1>
        <p className=' mt-2 text-sm text-gray-600'>{product.title}</p>
      </div>
    </div>
  )
}

export default HomeSectionCard
