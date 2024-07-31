import React from 'react'

function Header() {
	const navigate = [
		{ label: 'Home', path: '/' },
		{ label: 'Shop Page', path: '/shop-page' },
		{ label: 'Single Product', path: '/single-product' },
		{ label: 'Cart', path: '/cart' },
		{ label: 'Checkout', path: '/check-out' },
		{ label: 'Category', path: '/category' },
		{ label: 'Others', path: '/others' },
		{ label: 'Contact', path: '/contact' },
	]
	return (
		<nav className='h-[80px] bg-[#fbfbfb]'>
			<ul className='flex items-center justify-center gap-[25px] list-none h-[80px] m-0'>
				{navigate.map((item, index) => (
					<li key={index} className='uppercase p-[10px] hover:bg-[#7299d2]'><a href={item.path} className='no-underline'>{item.label}</a></li>
				))}
			</ul>
		</nav>
	)
}

export default Header