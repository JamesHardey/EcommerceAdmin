import React, { useState } from 'react';

const FormInput = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder, 
  required = false, 
  minLength, 
  maxLength, 
  pattern, 
  errorMessage,
  className = '', 
  inputClassName = '' 
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className={`form-input flex flex-col ${className}`.trim()}> {/* Apply className to container */}
      {label && <label htmlFor={name} className='font-poppins font-semibold mb-3'>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        onBlur={handleFocus}
        focused={focused.toString()}
        className={`${inputClassName} outline-none font-poppins border-[1px] border-gray-300 p-3 rounded-md`}
      />
      {errorMessage && <span className="error-message text-[14px] text-red-500">{errorMessage}</span>}
    </div>
  );
};

export default FormInput;
