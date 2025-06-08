
import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Button from './Button';

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;
  color: #7642FE;
  margin-bottom: 8px;
  font-family: 'Poppins', sans-serif;
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 32px;
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputGroup = styled.div`
  position: relative;
`;

const InputLabel = styled.label`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 4px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #CED4DA;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  
  &::placeholder {
    color: #666666;
  }
  
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
  color: #666666;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
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
    color: #666666;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
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
  font-weight: 500;
  color: #000000;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    background: #f8f9fa;
  }
`;

const SignUpText = styled.p`
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  font-family: 'Poppins', sans-serif;
`;

const SignUpLink = styled(Link)`
  color: #1E3A8A;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  
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

  return (
    <FormContainer>
      <Title>Welcome Back!</Title>
      <Subtitle>Log back into your account</Subtitle>
      
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            id="email"
            type="email"
            placeholder="johnsnow@abc"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'error' : ''}
            aria-label="Email address"
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputGroup>
        
        <InputGroup>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="1234567890"
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
        
        <ForgotPassword as={Link} to="/forget-password">
          Forget Password?
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
        Don't have an account yet? <SignUpLink to="/signup">Sign Up</SignUpLink>
      </SignUpText>
    </FormContainer>
  );
};

export default LoginForm;
