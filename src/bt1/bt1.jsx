import React from 'react';
import Header from './components/header';
import Caseroul from './components/caseroul';
import Card from './components/card';

function BT1() {
	return (
		<React.Fragment>
			<Header />
			<Caseroul />
			<div className='grid grid-cols-4 gap-5 mt-5'>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</React.Fragment>
	);
}

export default BT1;
