import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';

const SignUpFormContainer = styled.div.attrs({
  className: 'signup-form-container'
})`
  width: 100%;
  max-width: 400px;
`;

const SignUpTitle = styled.h1.attrs({
  className: 'signup-title'
})`
  font-size: 36px;
  font-weight: 800;
  color: #7642FE;
  margin-bottom: 8px;
  font-family: 'Sora', sans-serif;
`;

const SignUpSubtitle = styled.p.attrs({
  className: 'signup-subtitle'
})`
  font-size: 16px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 32px;
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
`;

const StyledForm = styled.form.attrs({
  className: 'signup-form'
})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputFieldGroup = styled.div.attrs({
  className: 'input-field-group'
})`
  position: relative;
`;

const FieldLabel = styled.label.attrs({
  className: 'field-label'
})`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 4px;
  display: block;
`;

const TextInput = styled.input.attrs({
  className: 'text-input'
})`
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

const PasswordToggleButton = styled.button.attrs({
  className: 'password-toggle-button'
})`
  position: absolute;
  right: 10px;
  top: 50%;
  background: none;
  border: none;
  cursor: pointer;
  color: #6C757D;
  
  &:hover {
    color: #000000;
  }
`;

const CheckboxGroup = styled.div.attrs({
  className: 'checkbox-group'
})`
  margin: 16px 0;
`;

const CheckboxLabel = styled.label.attrs({
  className: 'checkbox-label'
})`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  line-height: 1.4;
`;

const CheckboxInput = styled.input.attrs({
  className: 'checkbox-input'
})`
  margin-top: 2px;
  accent-color: #7642FE;
`;

const TermsText = styled.span.attrs({
  className: 'terms-text'
})`
  flex: 1;
`;

const TermsLink = styled.a.attrs({
  className: 'terms-link'
})`
  color: #7642FE;
  text-decoration: underline;
  
  &:hover {
    text-decoration: none;
  }
`;

const FormDivider = styled.div.attrs({
  className: 'form-divider'
})`
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

const GoogleSignUpButton = styled.button.attrs({
  className: 'google-signup-button'
})`
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
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ErrorText = styled.span.attrs({
  className: 'error-text'
})`
  color: #dc3545;
  font-size: 12px;
  margin-top: 4px;
`;

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    agreeToTerms: ''
  });
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      agreeToTerms: ''
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (!hasErrors) {
      console.log('Form submitted:', formData);
      navigate('/verify-otp');
    }
  };

  const handleGoogleSignUp = () => {
    console.log('Google sign up clicked');
  };

  return (
    <SignUpFormContainer>
      <SignUpTitle>Create Account</SignUpTitle>
      <SignUpSubtitle>Enter your details to get started</SignUpSubtitle>

      <StyledForm onSubmit={handleSubmit}>
        <InputFieldGroup>
          <FieldLabel htmlFor="firstName">First Name</FieldLabel>
          <TextInput
            id="firstName"
            name="firstName"
            type="text"
            placeholder="John"
            value={formData.firstName}
            onChange={handleInputChange}
            className={errors.firstName ? 'error' : ''}
            aria-label="First Name"
          />
          {errors.firstName && <ErrorText>{errors.firstName}</ErrorText>}
        </InputFieldGroup>

        <InputFieldGroup>
          <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
          <TextInput
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Snow"
            value={formData.lastName}
            onChange={handleInputChange}
            className={errors.lastName ? 'error' : ''}
            aria-label="Last Name"
          />
          {errors.lastName && <ErrorText>{errors.lastName}</ErrorText>}
        </InputFieldGroup>

        <InputFieldGroup>
          <FieldLabel htmlFor="email">Email address</FieldLabel>
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder="johnsnow@abc"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'error' : ''}
            aria-label="Email address"
          />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
        </InputFieldGroup>

        <InputFieldGroup>
          <FieldLabel htmlFor="phoneNumber">Phone Number</FieldLabel>
          <TextInput
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder="+234 123 456 7890"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className={errors.phoneNumber ? 'error' : ''}
            aria-label="Phone Number"
          />
          {errors.phoneNumber && <ErrorText>{errors.phoneNumber}</ErrorText>}
        </InputFieldGroup>

        <InputFieldGroup>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <TextInput
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="1234567890"
            value={formData.password}
            onChange={handleInputChange}
            className={errors.password ? 'error' : ''}
            aria-label="Password"
          />
          <PasswordToggleButton
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </PasswordToggleButton>
          {errors.password && <ErrorText>{errors.password}</ErrorText>}
        </InputFieldGroup>

        <CheckboxGroup>
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
            />
            <TermsText>
              By continuing, you agree to our{' '}
              <TermsLink href="#" target="_blank">
                Terms & Conditions
              </TermsLink>{' '}
              and{' '}
              <TermsLink href="#" target="_blank">
                Privacy Policy
              </TermsLink>
            </TermsText>
          </CheckboxLabel>
          {errors.agreeToTerms && <ErrorText>{errors.agreeToTerms}</ErrorText>}
        </CheckboxGroup>

        <Button type="submit">
          Continue
        </Button>
      </StyledForm>

      <FormDivider>
        <span>Or</span>
      </FormDivider>

      <GoogleSignUpButton onClick={handleGoogleSignUp}>
        <FcGoogle size={20} />
        Continue with Google
      </GoogleSignUpButton>

      <LoginPrompt>
        Have an account already? <LoginLink to="/">Sign In</LoginLink>
      </LoginPrompt>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
