import React from 'react';
import Header from './components/header';
import Caseroul from './components/caseroul';
import Card from './components/card';

function BT1() {
	const productList = [
		{ id: 1, imgURL: 'https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-hong-thumb-1-600x600.jpg', name: 'APPLE NEW MACBOOK 2015', price: '25.000.000' },
		{ id: 2, imgURL: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2024/3/28/638472349027667377_samsung-galaxy-zfold-5-dd-ai.jpg', name: 'Samsung Galaxy Z Fold5 5G', price: '28.990.000' },
		{ id: 3, imgURL: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2024/6/1/638527997803340995__xiaomi-redmi-a3-dd-bh-300k.jpg', name: 'Xiaomi Redmi A3 4GB-128GB', price: '2.790.000' },
		{ id: 4, imgURL: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2024/3/7/638454261816142342_honor-x7b-xanh-6.jpg', name: 'Honor X7b 8GB-256GB', price: '4.990.000' },
		{ id: 5, imgURL: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2024/2/20/638440266267791271_iphone-11-dd-bh.jpg', name: 'iPhone 11 64GB', price: '8.590.000' },
		{ id: 6, imgURL: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2024/4/5/638479270497069231_hp-240-g10-i3-n3058-dd.jpg', name: 'HP 240 G10 i3-N305 (8U7D8PA)', price: '8.990.000' },
		{ id: 7, imgURL: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/7/637822539982260044_acer-aspire-3-a315-58-bac-dd.jpg', name: 'Acer Aspire 3 A315-44P-R5QG R7-5700U', price: '11.990.000' },
		{ id: 8, imgURL: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/4/638240754748140607_asus-tuf-gaming-fx507-xam-dd.jpg', name: 'Asus TUF Gaming FX507ZC4-HN095W i5 12500H', price: '20.690.000' },
	]

	return (
		<React.Fragment>
			<Header />
			<Caseroul />
			<div className='grid grid-cols-4 gap-5 mt-5'>
				{productList?.map((product, index) => (
					<Card key={index} product={product} />
				))}
			</div>
		</React.Fragment>
	);
}

export default BT1;
