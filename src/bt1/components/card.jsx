import React from 'react'

function Card({ product }) {
	return (
		<div className='flex flex-col items-center justify-start py-10 px-[10px] border-[1px] border-[#ccc] rounded-[20px] hover:shadow-[rgba(149, 157, 165, 0.2) 0px 8px 24px] transition duration-200'>
			<img src={product.imgURL} alt="iphone" className='size-[200px] object-cover' />
			<p className='font-medium text-[20px] text-wrap uppercase mt-[10px]'>{product.name}</p>
			<p className='text-red-500 text-[18px] mx-[10px]'>{product.price} VNĐ</p>
			<button className='w-[150px] h-[40px] bg-[#7299d2]  border-none text-[#fff] uppercase hover:bg-[#6283b4] transition duration-200 cursor-pointer'>Add to card</button>
		</div>
	)
}

export default Card