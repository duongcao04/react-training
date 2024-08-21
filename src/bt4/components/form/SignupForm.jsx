import React from 'react';
import BasicTextFeild from '../ui/BasicTextFeild.jsx';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

function SignupForm() {
	const validationSchema = yup.object({
		email: yup.string().email().required('Plase input email again'),
		username: yup
			.string()
			.required('Please input username')
			.min(3, 'Minimum is 3 characters'),
		password: yup
			.string()
			.required('Please input password')
			.min(6, 'Minimum is 6 characters')
			.max(255, 'Maximum is 255 characters'),
		confirmPassword: yup
			.string()
			.required('Please input password')
			.min(6, 'Minimum is 6 characters')
			.max(255, 'Maximum is 255 characters')
			.oneOf([yup.ref('password'), null], 'Passwords must match'),
	});
	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert('Đăng ký thành công');
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<form className='space-y-4 md:space-y-6' onSubmit={formik.handleSubmit}>
			<div className='flex flex-col items-center justify-center gap-5'>
				<BasicTextFeild
					label='Username'
					placeholder='Duong Cao'
					name='username'
					value={formik.values.username}
					onChange={formik.handleChange}
					required={true}
					error={Boolean(formik.touched.username && formik.errors.username)}
					helperText={formik.touched.username && formik.errors.username}
				/>
				<BasicTextFeild
					label='Email'
					placeholder='example@gmail.com'
					name='email'
					type='text'
					value={formik.values.email}
					onChange={formik.handleChange}
					required={true}
					error={Boolean(formik.touched.email && formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<BasicTextFeild
					label='Password'
					type='password'
					name='password'
					value={formik.values.password}
					onChange={formik.handleChange}
					required={true}
					error={Boolean(formik.touched.password && formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<BasicTextFeild
					label='Confirm password'
					type='password'
					name='confirmPassword'
					value={formik.values.confirmPassword}
					onChange={formik.handleChange}
					required={true}
					error={Boolean(
						formik.touched.confirmPassword && formik.errors.confirmPassword
					)}
					helperText={
						formik.touched.confirmPassword && formik.errors.confirmPassword
					}
				/>
			</div>
			<div className='flex items-start'>
				<div className='flex items-center h-5'>
					<input
						id='terms'
						aria-describedby='terms'
						type='checkbox'
						className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
						required=''
					/>
				</div>
				<div className='ml-3 text-sm'>
					<label
						htmlFor='terms'
						className='font-light text-gray-500 dark:text-gray-300'
					>
						I accept the{' '}
						<Link
							className='font-medium text-primary-600 hover:underline dark:text-primary-500'
							to='#'
						>
							Terms and Conditions
						</Link>
					</label>
				</div>
			</div>

			<button
				type='submit'
				className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
			>
				Create an account
			</button>
			<p className='text-sm font-light text-gray-500 dark:text-gray-400'>
				Already have an account?{' '}
				<Link
					to='/bt4/login'
					className='font-medium text-primary-600 hover:underline dark:text-primary-500'
				>
					Login here
				</Link>
			</p>
		</form>
	);
}

export default SignupForm;
