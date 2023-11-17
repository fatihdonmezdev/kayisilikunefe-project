import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
const ProductSchema = Yup.object().shape({
  title: Yup.string().required('Product title is required'),
  description: Yup.string().min(2, 'Too short!').max(250, 'Too Long!').required('Description is required'),
  price: Yup.number().positive('Price must be a positive number').required('Price is required'),
  imageUrl: Yup.string().url('Must be a valid URL').nullable(),
});
const EditProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      currency: '',
      price: '',
      imageUrl: '',
    },
    validationSchema: ProductSchema,
    onSubmit: async (values) => {
      try {
        setSubmitting(true);
        await axios.post(`http://localhost:3001/edit-product/${id}`, values);
        alert('Product added successfully!');
        router.push('/');
      } catch (error) {
        alert('Failed to add product');
        console.error('An error occurred:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });
  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const response = await new Promise((resolve, reject) => {
          setTimeout(() => {
            axios
              .get(`http://localhost:3001/edit-product/${id}`)
              .then(resolve)
              .catch(reject);
          }, 1000);
        });
        formik.setValues(response.data);
      } catch (error) {
        console.error('Error!!!', error);
      }
      setLoading(false);
    };
    if (id) fetchProductData();
  }, [id]);
  return (
    <div className="min-h-screen bg-gradient-to-br bg-slate-800">
      <div className="container mx-auto">
        <div className="brand-box">
          <h1 className="font-bold text-3xl text-white text-center">Edit Product</h1>
        </div>
        <div className="magic-form max-w-md mx-auto my-4 bg-white rounded-lg shadow-md p-8">
          <form onChange={formik.handleChange} className="grid grid-cols-1 gap-4">
            <input
              id="title"
              name="title"
              placeholder="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
            />
            {formik.touched.title && formik.errors.title && (
              <div className="text-red-500">{formik.errors.title}</div>
            )}
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className=" w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {formik.touched.description && formik.errors.description && (
              <div className="text-red-500">{formik.errors.description}</div>
            )}
            <input
              id="price"
              name="price"
              type="number"
              placeholder="Price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className=" w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {formik.touched.price && formik.errors.price && (
              <div className="text-red-500">{formik.errors.price}</div>
            )}
            <input
              id="imageUrl"
              name="imageUrl"
              placeholder="Image URL"
              value={formik.values.imageUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className=" w-full max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {formik.touched.imageUrl && formik.errors.imageUrl && (
              <div className="text-red-500">{formik.errors.imageUrl}</div>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Edit Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditProduct;