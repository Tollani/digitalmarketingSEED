
import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import Button from './Button';

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #6C757D;
  margin-bottom: 32px;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #CED4DA;
  border-radius: 4px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  &:focus {
    outline: none;
    border-color: #007BFF;
  }
  
  &.error {
    border-color: #dc3545;
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #6C757D;
  
  &:hover {
    color: #000000;
  }
`;

const ForgotPassword = styled.a`
  color: #007BFF;
  text-decoration: none;
  font-size: 14px;
  align-self: flex-end;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #CED4DA;
  }
  
  span {
    padding: 0 16px;
    color: #6C757D;
    font-size: 16px;
  }
`;

const GoogleButton = styled.button`
  width: 100%;
  padding: 12px;
  border: 1px solid #CED4DA;
  border-radius: 4px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 16px;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  &:hover {
    background: #f8f9fa;
  }
`;

const SignUpText = styled.p`
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  color: #000000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const SignUpLink = styled.span`
  color: #007BFF;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 12px;
  margin-top: 4px;
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = { email: '', password: '' };
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    
    if (!newErrors.email && !newErrors.password) {
      console.log('Form submitted:', { email, password });
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
  };

  const handleSignUp = () => {
    console.log('Sign Up clicked');
  };

  return (
    <FormContainer>
      <Title>Welcome Back!</Title>
      <Subtitle>Log back into your account</Subtitle>
      
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type="email"
            placeholder="Input a valid email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'error' : ''}
            aria-label="Email address"
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputGroup>
        
        <InputGroup>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Input password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? 'error' : ''}
            aria-label="Password"
          />
          <PasswordToggle
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </PasswordToggle>
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </InputGroup>
        
        <ForgotPassword onClick={handleForgotPassword}>
          Forgot Password?
        </ForgotPassword>
        
        <Button type="submit">
          Continue
        </Button>
      </Form>
      
      <Divider>
        <span>Or</span>
      </Divider>
      
      <GoogleButton onClick={handleGoogleLogin}>
        <FcGoogle size={20} />
        Continue with Google
      </GoogleButton>
      
      <SignUpText>
        Don't have an account yet? <SignUpLink onClick={handleSignUp}>Sign Up</SignUpLink>
      </SignUpText>
    </FormContainer>
  );
};

export default LoginForm;
