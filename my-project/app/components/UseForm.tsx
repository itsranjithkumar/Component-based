'use client';
import React, { useState } from 'react';
import { InputField } from './InputField';
import { DatePickerField } from './DatePickerField';

export const UseForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [date, setDate] = useState<Date | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = 'Invalid email';
    if (!date) newErrors.date = 'Date is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log({ ...formData, date });
      alert('Form submitted!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 border rounded">
      <InputField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Enter name"
        error={errors.name}
        size="md"
      />

      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        pattern="^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$"
        placeholder="Enter email"
        error={errors.email}
        size="md"
      />

      <DatePickerField
        label="Date of Birth"
        selectedDate={date}
        onChange={setDate}
        name="dob"
        error={errors.date}
      />

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};
