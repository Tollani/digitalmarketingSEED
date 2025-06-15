
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import OTPInput from './OTPInput';
import Button from './Button';

const OTPFormContainer = styled.div.attrs({
  className: 'otp-form-container'
})`
  width: 100%;
  max-width: 400px;
`;

const OTPTitle = styled.h1.attrs({
  className: 'otp-title'
})`
  font-size: 32px;
  font-weight: 800;
  color: #7642FE;
  margin-bottom: 8px;
  font-family: 'Sora', sans-serif;
`;

const OTPSubtitle = styled.p.attrs({
  className: 'otp-subtitle'
})`
  font-size: 16px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 32px;
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
`;

const OTPForm = styled.form.attrs({
  className: 'otp-form'
})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const OTPInputContainer = styled.div.attrs({
  className: 'otp-input-container'
})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const OTPLabel = styled.label.attrs({
  className: 'otp-label'
})`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
`;

const ResendSection = styled.div.attrs({
  className: 'resend-section'
})`
  text-align: center;
  margin: 16px 0;
`;

const ResendText = styled.p.attrs({
  className: 'resend-text'
})`
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 8px;
  font-family: 'Poppins', sans-serif;
`;

const ResendButton = styled.button.attrs({
  className: 'resend-button'
})`
  background: none;
  border: none;
  color: #7642FE;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    text-decoration: none;
  }
  
  &:disabled {
    color: #6C757D;
    cursor: not-allowed;
    text-decoration: none;
  }
`;

const TimerText = styled.span.attrs({
  className: 'timer-text'
})`
  color: #6C757D;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
`;

const LoginPrompt = styled.p.attrs({
  className: 'login-prompt'
})`
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  font-family: 'Poppins', sans-serif;
`;

const LoginLink = styled(Link).attrs({
  className: 'login-link'
})`
  color: #7642FE;
  text-decoration: underline;
  cursor: pointer;
  
  &:hover {
    text-decoration: none;
  }
`;

const VerifyOTPForm = () => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleOTPChange = (value: string) => {
    setOtp(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      console.log('OTP submitted:', otp);
      navigate('/create-password');
    }
  };

  const handleResend = () => {
    if (canResend) {
      console.log('Resending OTP...');
      setTimer(30);
      setCanResend(false);
      setOtp('');
    }
  };

  return (
    <OTPFormContainer>
      <OTPTitle>Verify Your Email</OTPTitle>
      <OTPSubtitle>
        We've sent a 6-digit verification code to your email address. Please enter it below to continue.
      </OTPSubtitle>
      
      <OTPForm onSubmit={handleSubmit}>
        <OTPInputContainer>
          <OTPLabel htmlFor="otp">Enter Verification Code</OTPLabel>
          <OTPInput value={otp} onChange={handleOTPChange} />
        </OTPInputContainer>
        
        <Button type="submit" disabled={otp.length !== 6}>
          Verify Email
        </Button>
      </OTPForm>
      
      <ResendSection>
        <ResendText>Didn't receive the code?</ResendText>
        {canResend ? (
          <ResendButton type="button" onClick={handleResend}>
            Resend Code
          </ResendButton>
        ) : (
          <TimerText>Resend in {timer}s</TimerText>
        )}
      </ResendSection>
      
      <LoginPrompt>
        Remember your password? <LoginLink to="/">Sign In</LoginLink>
      </LoginPrompt>
    </OTPFormContainer>
  );
};

export default VerifyOTPForm;
