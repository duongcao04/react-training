import React from 'react';
import PropTypes from 'prop-types';

Task.propTypes = {
	task: PropTypes.object.isRequired,
	handleRemove: PropTypes.func.isRequired,
	handleCheck: PropTypes.func.isRequired
};

function Task({ task, handleRemove, handleCheck }) {
	return (
		<React.Fragment>
			<div className='flex align-middle flex-row justify-between'>
				<div className='p-2'>
					<input
						type='checkbox'
						className='h-6 w-6'
						value='true'
						defaultChecked={task.isChecked}
						onChange={()=>{handleCheck(task.id)}}
					/>
				</div>
				<div className='p-2'>
					<p
						className={`text-lg ${task.isChecked
							? 'line-through text-gray-400'
							: 'text-black'
							} text-lg`}
					>
						{task.label}
					</p>
				</div>
				<button
					className='flex text-red-500 border-2 border-red-500 p-2 rounded-lg gap-1'
					onClick={() => {
						handleRemove(task.id);
					}}
				>
					<svg
						className='h-6 w-6 text-red-500'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						{' '}
						<circle cx='12' cy='12' r='10' />{' '}
						<line x1='15' y1='9' x2='9' y2='15' />{' '}
						<line x1='9' y1='9' x2='15' y2='15' />
					</svg>
					<span>Remove</span>
				</button>
			</div>
			<hr className='mt-2' />
		</React.Fragment>
	);
}

export default Task;
