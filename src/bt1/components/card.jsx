import React from 'react'

function Card() {
	return (
		<div className='flex flex-col items-center justify-start py-10 px-[10px] border-[1px] border-[#ccc] rounded-[20px] hover:shadow-[rgba(149, 157, 165, 0.2) 0px 8px 24px] transition duration-200'>
			<img src="https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-hong-thumb-1-600x600.jpg" alt="iphone" className='size-[200px] object-cover'/>
			<p className='font-medium text-[20px] text-wrap uppercase mt-[10px]'>Apple new macbook 2015</p>
			<p className='text-red-500 text-[18px] mx-[10px]'>$123</p>
			<button className='w-[150px] h-[40px] bg-[#7299d2]  border-none text-[#fff] uppercase hover:bg-[#6283b4] transition duration-200 cursor-pointer'>Add to card</button>
		</div>
	)
}

export default Card