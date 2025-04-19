'use client';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  label: string;
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  name: string;
  error?: string;
}

export const DatePickerField: React.FC<Props> = ({
  label,
  selectedDate,
  onChange,
  name,
  error,
}) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1" htmlFor={name}>
        {label}
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="yyyy-MM-dd"
        className="border p-2 w-full rounded"
        name={name}
        placeholderText="Select a date"
        id={name}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
