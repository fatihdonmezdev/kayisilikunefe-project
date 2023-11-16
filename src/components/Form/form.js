import React from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";



const Form = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-500 to-indigo-500'>
    <div className='container mx-auto p-4 '>
      <div className='brand-box'>
        <h1 className='font-bold text-2xl mx-auto my-4'>Sign Up</h1>
      </div>
      <div className='magic-form max-w-md mx-auto my-4 bg-white rounded-lg shadow-md p-8'>
        <Formik
          initialValues={{
            name: "",
            email: "",
            agree: false,
            phoneNumber: "",
            address: "",
            password: "" 
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            agree: Yup.boolean().oneOf([true], "You must agree to continue"),
            phoneNumber: Yup.string().required("Phone number is required"),
            address: Yup.string().required("Address is required"),
          })}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(values);
          
            setTimeout(() => {
              resetForm();
              setSubmitting(false);
            }, 2000);
          }}
        >
          {({ values, errors, handleChange, handleSubmit, dirty, touched, isSubmitting }) => (
            <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
              <div>
              <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name</label>
              <input 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id='name'
                type='text'
                placeholder='Name...'
                className='input'
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name && (
                <div className="input feedback">{errors.name}</div>
              )}
              </div>
              
              <div>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id='email'
                type='email'
                placeholder='example@gmail.com'
                className='input'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email && (
                <div className="input feedback">{errors.email}</div>
              )}
              </div>
              <div>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id='password'
                type='password'
                placeholder='********'
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && touched.password && (
              <div className="input feedback">{errors.password}</div>
                )}
              </div>
              
              <div>
              <label htmlFor='phoneNumber' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Number</label>
              <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id='phoneNumber'
                type='tel'
                placeholder='Enter your phone number'
                className='input'
                value={values.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <div className="input feedback">{errors.phoneNumber}</div>
              )}
              </div>
              
              
              <div>
              <label htmlFor='address' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Address</label>
              <input
                class=" w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id='address'
                type='text'
                placeholder='Enter your address'
                className='input'
                maxLength={50}
                value={values.address}
                onChange={handleChange}
              />
              {errors.address && touched.address && (
                <div className="input feedback">{errors.address}</div>
              )}
              </div>

              <div>
                <input
                  className='mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  id="agree"
                  type='checkbox'
                  checked={values.agree}
                  onChange={handleChange}
                />
                <label htmlFor='agree' className='ml-2'>
                  I agree
                </label>
              </div>
              <button type="submit" disabled={!dirty || isSubmitting} className="bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign in
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
    </div>
  );
};

export default Form;
