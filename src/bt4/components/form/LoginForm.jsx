import React from 'react';
import BasicTextFeild from '../ui/BasicTextFeild.jsx';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { login } from '../../../bt5/redux/userSlice.js';

function LoginForm() {
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    username: yup.string().required("Please input username"),
    password: yup.string().required("Please input password").min(6,"Minimum is 6 characters")
  })
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(login(values))
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
          label='Password'
          type='password'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          required={true}
          error={Boolean(formik.touched.password && formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </div>
      <div className='flex items-center justify-end'>
        <Link
          to='#'
          className='text-sm font-medium text-primary-600 hover:underline dark:text-primary-500'
        >
          Forgot password?
        </Link>
      </div>
      <button
        type='submit'
        className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
      >
        Sign in
      </button>
      <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
        Don’t have an account yet?{' '}
        <Link
          to='/bt4/signup'
          className='font-medium text-primary-600 hover:underline dark:text-primary-500'
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
