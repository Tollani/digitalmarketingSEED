
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import Alert from './Alert';
import OTPInput from './OTPInput';

const VerifyOTPFormContainer = styled.div.attrs({
  className: 'verify-otp-form-container'
})`
  width: 100%;
  max-width: 400px;
`;

const VerifyOTPTitle = styled.h1.attrs({
  className: 'verify-otp-title'
})`
  font-size: 32px;
  font-weight: 800;
  color: #7642FE;
  margin-bottom: 8px;
  font-family: 'Sora', sans-serif;
  text-align: left;
`;

const VerifyOTPSubtitle = styled.p.attrs({
  className: 'verify-otp-subtitle'
})`
  font-size: 16px;
  font-weight: 400;
  color: #6B7280;
  margin-bottom: 32px;
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
  text-align: left;
`;

const VerifyOTPFormElement = styled.form.attrs({
  className: 'verify-otp-form'
})`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AlertWrapper = styled.div.attrs({
  className: 'alert-wrapper'
})`
  margin-bottom: 16px;
`;

const ResendContainer = styled.div.attrs({
  className: 'resend-container'
})`
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
`;

const ResendText = styled.span.attrs({
  className: 'resend-text'
})`
  color: #6B7280;
`;

const ResendLink = styled.button.attrs({
  className: 'resend-link'
})`
  color: #7642FE;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    text-decoration: none;
  }
`;

const SignInContainer = styled.div.attrs({
  className: 'signin-container'
})`
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
`;

const SignInText = styled.span.attrs({
  className: 'signin-text'
})`
  color: #6B7280;
`;

const SignInLink = styled(Link).attrs({
  className: 'signin-link'
})`
  color: #7642FE;
  text-decoration: underline;
  font-weight: 400;
  
  &:hover {
    text-decoration: none;
  }
`;

const VerifyOTPForm = () => {
  const [otp, setOtp] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleOTPComplete = (otpValue: string) => {
    setOtp(otpValue);
    setShowAlert(false); // Clear any previous error when OTP is complete
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Accept any 4 digits as valid OTP
    if (otp.length === 4 && /^\d{4}$/.test(otp)) {
      console.log({ otp });
      setShowAlert(false);
      // Navigate to create password page
      navigate('/create-password');
    } else {
      setShowAlert(true);
    }
  };

  const handleResendOTP = () => {
    console.log('Resend OTP requested');
    setShowAlert(false);
    setOtp('');
  };

  const handleResetAlert = () => {
    setShowAlert(false);
  };

  return (
    <VerifyOTPFormContainer>
      <VerifyOTPTitle>Verify Your Email Address</VerifyOTPTitle>
      <VerifyOTPSubtitle>Please enter the 4-digit OTP sent to johnsnow@abc.com</VerifyOTPSubtitle>
      
      <VerifyOTPFormElement onSubmit={handleSubmit}>
        {showAlert && (
          <AlertWrapper>
            <Alert message="Please enter a valid 4-digit code" visible={showAlert} />
          </AlertWrapper>
        )}
        
        <OTPInput 
          length={4} 
          onComplete={handleOTPComplete}
          hasError={showAlert}
          onReset={handleResetAlert}
          value={otp}
        />
        
        <Button type="submit">
          VERIFY CODE
        </Button>
      </VerifyOTPFormElement>
      
      <ResendContainer>
        <ResendText>Didn't receive a code? </ResendText>
        <ResendLink onClick={handleResendOTP}>
          Resend Code
        </ResendLink>
      </ResendContainer>
      
      <SignInContainer>
        <SignInText>Have an account already? </SignInText>
        <SignInLink to="/">
          Sign In
        </SignInLink>
      </SignInContainer>
    </VerifyOTPFormContainer>
  );
};

export default VerifyOTPForm;
