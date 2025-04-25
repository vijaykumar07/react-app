import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
      console.log('Form submitted:', response.data);
      reset(); // Clear form after successful submission
    } catch (error) {
      console.error('API submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h2>Contact Us</h2>

      <div>
        <label>Name:</label>
        <input
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>

      <div>
        <label>Message:</label>
        <textarea
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && <p style={{ color: 'red' }}>{errors.message.message}</p>}
      </div>

      <button type="submit">Submit</button>

      {isSubmitSuccessful && (
        <p style={{ color: 'green' }}>Form submitted successfully!</p>
      )}
    </form>
  );
};

export default ContactForm;
