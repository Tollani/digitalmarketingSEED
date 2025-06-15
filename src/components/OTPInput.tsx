
import React from 'react';
import styled from 'styled-components';

const OTPContainer = styled.div.attrs({
  className: 'otp-container'
})`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin: 16px 0;
`;

const OTPDigitInput = styled.input.attrs({
  className: 'otp-digit-input'
})`
  width: 48px;
  height: 48px;
  border: 2px solid #D1D5DB;
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  
  &:focus {
    outline: none;
    border-color: #7642FE;
    box-shadow: 0 0 0 3px rgba(118, 66, 254, 0.1);
  }
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  &[type=number] {
    -moz-appearance: textfield;
  }
`;

interface OTPInputProps {
  value: string;
  onChange: (value: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ value, onChange }) => {
  const handleChange = (index: number, digit: string) => {
    if (digit.length > 1) return;
    
    const newValue = value.split('');
    newValue[index] = digit;
    onChange(newValue.join(''));
    
    // Auto-focus next input
    if (digit && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      onChange(pastedData.padEnd(6, ''));
    }
  };

  return (
    <OTPContainer>
      {[...Array(6)].map((_, index) => (
        <OTPDigitInput
          key={index}
          id={`otp-${index}`}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={value[index] || ''}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          autoComplete="off"
        />
      ))}
    </OTPContainer>
  );
};

export default OTPInput;
