
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const OTPContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const OTPBox = styled.input<{ hasError: boolean }>`
  width: 40px;
  height: 40px;
  border: 2px solid ${props => props.hasError ? '#EF4444' : '#D1D5DB'};
  border-radius: 8px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: #1F2937;
  background: white;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#EF4444' : '#007BFF'};
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 18px;
  }
`;

interface OTPInputProps {
  length: number;
  onComplete: (otp: string) => void;
  hasError: boolean;
  onReset: () => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onComplete, hasError, onReset }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus on first input when component mounts
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    // Reset OTP when hasError changes to false
    if (!hasError) {
      setOtp(new Array(length).fill(''));
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }
  }, [hasError, length]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if OTP is complete
    if (newOtp.every(digit => digit !== '') && newOtp.join('').length === length) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0 && inputRefs.current[index - 1]) {
        newOtp[index - 1] = '';
        setOtp(newOtp);
        inputRefs.current[index - 1]?.focus();
      }
      onReset();
    }
  };

  return (
    <OTPContainer>
      {otp.map((digit, index) => (
        <OTPBox
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          hasError={hasError}
          ref={(ref) => {
            inputRefs.current[index] = ref;
          }}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </OTPContainer>
  );
};

export default OTPInput;
