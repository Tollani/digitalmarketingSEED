
import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

const SignUpFormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  font-family: 'Sora', sans-serif;
`;

const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: #7642FE;
  margin-bottom: 8px;
  font-family: 'Sora', sans-serif;
`;

const DescriptionText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 32px;
  line-height: 1.5;
  font-family: 'Sora', sans-serif;
`;

const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormFieldGroup = styled.div`
  position: relative;
`;

const FieldLabel = styled.label`
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 4px;
  display: block;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #CED4DA;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Sora', sans-serif;
  transition: border-color 0.2s ease;
  
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
  
  &.valid {
    border-color: #28a745;
  }
`;

const DropdownSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #CED4DA;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Sora', sans-serif;
  background: white;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #007BFF;
  }
  
  &.valid {
    border-color: #28a745;
  }
`;

const PhoneNumberContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const CountryCodeSelect = styled.select`
  padding: 10px;
  border: 1px solid #CED4DA;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Sora', sans-serif;
  background: white;
  width: 120px;
  
  &:focus {
    outline: none;
    border-color: #007BFF;
  }
`;

const PhoneNumberInput = styled(TextInput)`
  flex: 1;
`;

const PasswordVisibilityToggle = styled.button`
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

const UserTypeSection = styled.div`
  margin: 10px 0;
`;

const UserTypeQuestion = styled.p`
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  color: #000000;
  margin-bottom: 12px;
  line-height: 1.4;
`;

const RadioOptionsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RadioOptionLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  color: #000000;
  cursor: pointer;
`;

const RadioButton = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #7642FE;
`;

const TermsCheckboxContainer = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  color: #000000;
  cursor: pointer;
  line-height: 1.4;
`;

const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
  margin-top: 2px;
  accent-color: #7642FE;
`;

const ExternalLink = styled.a`
  color: #7642FE;
  text-decoration: underline;
`;

const CreateAccountButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #7642FE;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: 'Sora', sans-serif;
  
  &:hover {
    background: #5f35cc;
  }
  
  &:disabled {
    background: #6C757D;
    cursor: not-allowed;
  }
`;

const SectionDivider = styled.div`
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
    font-family: 'Sora', sans-serif;
  }
`;

const GoogleSignUpButton = styled.button`
  width: 100%;
  padding: 12px;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  cursor: pointer;
  font-family: 'Sora', sans-serif;
  
  &:hover {
    background: #f8f9fa;
  }
`;

const SignInPromptText = styled.p`
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  font-family: 'Sora', sans-serif;
`;

const SignInNavigationLink = styled.a`
  color: #7642FE;
  text-decoration: underline;
  cursor: pointer;
`;

const ValidationErrorMessage = styled.span`
  color: #dc3545;
  font-size: 12px;
  margin-top: 4px;
`;

const supportedCountries = [
  { name: 'Afghanistan', code: 'AF', phoneCode: '+93' },
  { name: 'Albania', code: 'AL', phoneCode: '+355' },
  { name: 'Algeria', code: 'DZ', phoneCode: '+213' },
  { name: 'Argentina', code: 'AR', phoneCode: '+54' },
  { name: 'Armenia', code: 'AM', phoneCode: '+374' },
  { name: 'Australia', code: 'AU', phoneCode: '+61' },
  { name: 'Austria', code: 'AT', phoneCode: '+43' },
  { name: 'Azerbaijan', code: 'AZ', phoneCode: '+994' },
  { name: 'Bahrain', code: 'BH', phoneCode: '+973' },
  { name: 'Bangladesh', code: 'BD', phoneCode: '+880' },
  { name: 'Belarus', code: 'BY', phoneCode: '+375' },
  { name: 'Belgium', code: 'BE', phoneCode: '+32' },
  { name: 'Bolivia', code: 'BO', phoneCode: '+591' },
  { name: 'Brazil', code: 'BR', phoneCode: '+55' },
  { name: 'Bulgaria', code: 'BG', phoneCode: '+359' },
  { name: 'Cambodia', code: 'KH', phoneCode: '+855' },
  { name: 'Cameroon', code: 'CM', phoneCode: '+237' },
  { name: 'Canada', code: 'CA', phoneCode: '+1' },
  { name: 'Chile', code: 'CL', phoneCode: '+56' },
  { name: 'China', code: 'CN', phoneCode: '+86' },
  { name: 'Colombia', code: 'CO', phoneCode: '+57' },
  { name: 'Costa Rica', code: 'CR', phoneCode: '+506' },
  { name: 'Croatia', code: 'HR', phoneCode: '+385' },
  { name: 'Cuba', code: 'CU', phoneCode: '+53' },
  { name: 'Czech Republic', code: 'CZ', phoneCode: '+420' },
  { name: 'Denmark', code: 'DK', phoneCode: '+45' },
  { name: 'Ecuador', code: 'EC', phoneCode: '+593' },
  { name: 'Egypt', code: 'EG', phoneCode: '+20' },
  { name: 'Estonia', code: 'EE', phoneCode: '+372' },
  { name: 'Ethiopia', code: 'ET', phoneCode: '+251' },
  { name: 'Finland', code: 'FI', phoneCode: '+358' },
  { name: 'France', code: 'FR', phoneCode: '+33' },
  { name: 'Georgia', code: 'GE', phoneCode: '+995' },
  { name: 'Germany', code: 'DE', phoneCode: '+49' },
  { name: 'Ghana', code: 'GH', phoneCode: '+233' },
  { name: 'Greece', code: 'GR', phoneCode: '+30' },
  { name: 'Guatemala', code: 'GT', phoneCode: '+502' },
  { name: 'Hungary', code: 'HU', phoneCode: '+36' },
  { name: 'Iceland', code: 'IS', phoneCode: '+354' },
  { name: 'India', code: 'IN', phoneCode: '+91' },
  { name: 'Indonesia', code: 'ID', phoneCode: '+62' },
  { name: 'Iran', code: 'IR', phoneCode: '+98' },
  { name: 'Iraq', code: 'IQ', phoneCode: '+964' },
  { name: 'Ireland', code: 'IE', phoneCode: '+353' },
  { name: 'Israel', code: 'IL', phoneCode: '+972' },
  { name: 'Italy', code: 'IT', phoneCode: '+39' },
  { name: 'Jamaica', code: 'JM', phoneCode: '+1' },
  { name: 'Japan', code: 'JP', phoneCode: '+81' },
  { name: 'Jordan', code: 'JO', phoneCode: '+962' },
  { name: 'Kazakhstan', code: 'KZ', phoneCode: '+7' },
  { name: 'Kenya', code: 'KE', phoneCode: '+254' },
  { name: 'Kuwait', code: 'KW', phoneCode: '+965' },
  { name: 'Latvia', code: 'LV', phoneCode: '+371' },
  { name: 'Lebanon', code: 'LB', phoneCode: '+961' },
  { name: 'Libya', code: 'LY', phoneCode: '+218' },
  { name: 'Lithuania', code: 'LT', phoneCode: '+370' },
  { name: 'Luxembourg', code: 'LU', phoneCode: '+352' },
  { name: 'Malaysia', code: 'MY', phoneCode: '+60' },
  { name: 'Mexico', code: 'MX', phoneCode: '+52' },
  { name: 'Morocco', code: 'MA', phoneCode: '+212' },
  { name: 'Netherlands', code: 'NL', phoneCode: '+31' },
  { name: 'New Zealand', code: 'NZ', phoneCode: '+64' },
  { name: 'Nigeria', code: 'NG', phoneCode: '+234' },
  { name: 'Norway', code: 'NO', phoneCode: '+47' },
  { name: 'Pakistan', code: 'PK', phoneCode: '+92' },
  { name: 'Peru', code: 'PE', phoneCode: '+51' },
  { name: 'Philippines', code: 'PH', phoneCode: '+63' },
  { name: 'Poland', code: 'PL', phoneCode: '+48' },
  { name: 'Portugal', code: 'PT', phoneCode: '+351' },
  { name: 'Qatar', code: 'QA', phoneCode: '+974' },
  { name: 'Romania', code: 'RO', phoneCode: '+40' },
  { name: 'Russia', code: 'RU', phoneCode: '+7' },
  { name: 'Saudi Arabia', code: 'SA', phoneCode: '+966' },
  { name: 'Singapore', code: 'SG', phoneCode: '+65' },
  { name: 'Slovakia', code: 'SK', phoneCode: '+421' },
  { name: 'Slovenia', code: 'SI', phoneCode: '+386' },
  { name: 'South Africa', code: 'ZA', phoneCode: '+27' },
  { name: 'South Korea', code: 'KR', phoneCode: '+82' },
  { name: 'Spain', code: 'ES', phoneCode: '+34' },
  { name: 'Sri Lanka', code: 'LK', phoneCode: '+94' },
  { name: 'Sweden', code: 'SE', phoneCode: '+46' },
  { name: 'Switzerland', code: 'CH', phoneCode: '+41' },
  { name: 'Taiwan', code: 'TW', phoneCode: '+886' },
  { name: 'Thailand', code: 'TH', phoneCode: '+66' },
  { name: 'Turkey', code: 'TR', phoneCode: '+90' },
  { name: 'Ukraine', code: 'UA', phoneCode: '+380' },
  { name: 'United Arab Emirates', code: 'AE', phoneCode: '+971' },
  { name: 'United Kingdom', code: 'GB', phoneCode: '+44' },
  { name: 'United States', code: 'US', phoneCode: '+1' },
  { name: 'Uruguay', code: 'UY', phoneCode: '+598' },
  { name: 'Venezuela', code: 'VE', phoneCode: '+58' },
  { name: 'Vietnam', code: 'VN', phoneCode: '+84' },
  { name: 'Yemen', code: 'YE', phoneCode: '+967' },
  { name: 'Zimbabwe', code: 'ZW', phoneCode: '+263' }
];

interface UserRegistrationData {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  country: string;
  password: string;
  confirmPassword: string;
  userType: string;
  agreeToTerms: boolean;
}

const SignUpForm = () => {
  const [registrationData, setRegistrationData] = useState<UserRegistrationData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    country: '',
    password: '',
    confirmPassword: '',
    userType: '',
    agreeToTerms: false
  });
  
  const [selectedCountryCode, setSelectedCountryCode] = useState('NG +234');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [validatedFields, setValidatedFields] = useState<Record<string, boolean>>({});

  const isValidEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isValidPhoneNumber = (phone: string) => {
    const phonePattern = /^\d+$/;
    return phonePattern.test(phone);
  };

  const handleFormFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setRegistrationData(prev => ({ ...prev, [name]: checked }));
    } else {
      setRegistrationData(prev => ({ ...prev, [name]: value }));
      
      // Real-time field validation
      const newValidatedFields = { ...validatedFields };
      
      switch (name) {
        case 'fullName':
          newValidatedFields.fullName = value.trim().length > 0;
          break;
        case 'email':
          newValidatedFields.email = isValidEmail(value);
          break;
        case 'phoneNumber':
          newValidatedFields.phoneNumber = isValidPhoneNumber(value) && value.length > 0;
          break;
        case 'address':
          newValidatedFields.address = value.trim().length > 0;
          break;
        case 'country':
          newValidatedFields.country = value !== '';
          break;
        case 'password':
          newValidatedFields.password = value.length >= 6;
          break;
        case 'confirmPassword':
          newValidatedFields.confirmPassword = value === registrationData.password && value.length > 0;
          break;
      }
      
      setValidatedFields(newValidatedFields);
    }
  };

  const getFieldValidationClass = (fieldName: string) => {
    if (validationErrors[fieldName]) return 'error';
    if (validatedFields[fieldName]) return 'valid';
    return '';
  };

  const handleFormSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors: Record<string, string> = {};
    
    if (!registrationData.fullName) formErrors.fullName = 'Full name is required';
    if (!registrationData.email) {
      formErrors.email = 'Email is required';
    } else if (!isValidEmail(registrationData.email)) {
      formErrors.email = 'Please enter a valid email';
    }
    if (!registrationData.phoneNumber) {
      formErrors.phoneNumber = 'Phone number is required';
    } else if (!isValidPhoneNumber(registrationData.phoneNumber)) {
      formErrors.phoneNumber = 'Please enter only numbers';
    }
    if (!registrationData.address) formErrors.address = 'Address is required';
    if (!registrationData.country) formErrors.country = 'Country is required';
    if (!registrationData.password) formErrors.password = 'Password is required';
    if (!registrationData.confirmPassword) {
      formErrors.confirmPassword = 'Confirm password is required';
    } else if (registrationData.password !== registrationData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }
    if (!registrationData.userType) formErrors.userType = 'Please select user type';
    if (!registrationData.agreeToTerms) formErrors.agreeToTerms = 'You must agree to the terms';
    
    setValidationErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0) {
      console.log('Registration form submitted:', { 
        ...registrationData, 
        phoneNumber: `${selectedCountryCode} ${registrationData.phoneNumber}` 
      });
    }
  };

  const handleGoogleRegistration = () => {
    console.log('Google registration initiated');
  };

  return (
    <SignUpFormContainer>
      <MainTitle>Sign Up</MainTitle>
      <DescriptionText>Create your account to get started</DescriptionText>
      
      <RegistrationForm onSubmit={handleFormSubmission}>
        <FormFieldGroup>
          <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
          <TextInput
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Input name"
            value={registrationData.fullName}
            onChange={handleFormFieldChange}
            className={getFieldValidationClass('fullName')}
          />
          {validationErrors.fullName && <ValidationErrorMessage>{validationErrors.fullName}</ValidationErrorMessage>}
        </FormFieldGroup>

        <FormFieldGroup>
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder="Input a valid email"
            value={registrationData.email}
            onChange={handleFormFieldChange}
            className={getFieldValidationClass('email')}
          />
          {validationErrors.email && <ValidationErrorMessage>{validationErrors.email}</ValidationErrorMessage>}
        </FormFieldGroup>

        <FormFieldGroup>
          <FieldLabel htmlFor="phoneNumber">Phone Number</FieldLabel>
          <PhoneNumberContainer>
            <CountryCodeSelect 
              value={selectedCountryCode} 
              onChange={(e) => setSelectedCountryCode(e.target.value)}
            >
              {supportedCountries.map((country) => (
                <option key={country.code} value={`${country.code} ${country.phoneCode}`}>
                  {country.code} {country.phoneCode}
                </option>
              ))}
            </CountryCodeSelect>
            <PhoneNumberInput
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              placeholder="Phone number"
              value={registrationData.phoneNumber}
              onChange={handleFormFieldChange}
              className={getFieldValidationClass('phoneNumber')}
            />
          </PhoneNumberContainer>
          {validationErrors.phoneNumber && <ValidationErrorMessage>{validationErrors.phoneNumber}</ValidationErrorMessage>}
        </FormFieldGroup>

        <FormFieldGroup>
          <FieldLabel htmlFor="address">Address</FieldLabel>
          <TextInput
            id="address"
            name="address"
            type="text"
            placeholder="Input your address"
            value={registrationData.address}
            onChange={handleFormFieldChange}
            className={getFieldValidationClass('address')}
          />
          {validationErrors.address && <ValidationErrorMessage>{validationErrors.address}</ValidationErrorMessage>}
        </FormFieldGroup>

        <FormFieldGroup>
          <FieldLabel htmlFor="country">Country</FieldLabel>
          <DropdownSelect
            id="country"
            name="country"
            value={registrationData.country}
            onChange={handleFormFieldChange}
            className={validatedFields.country ? 'valid' : ''}
          >
            <option value="">Country...</option>
            {supportedCountries.map((country) => (
              <option key={country.code} value={country.name}>
                {country.name}
              </option>
            ))}
          </DropdownSelect>
          {validationErrors.country && <ValidationErrorMessage>{validationErrors.country}</ValidationErrorMessage>}
        </FormFieldGroup>

        <UserTypeSection>
          <UserTypeQuestion>
            Are you signing up as an individual or an organization? This helps us tailor your experience and recommend the most relevant services for your needs.
          </UserTypeQuestion>
          <RadioOptionsGroup>
            <RadioOptionLabel>
              <RadioButton
                type="radio"
                name="userType"
                value="individual"
                onChange={handleFormFieldChange}
              />
              Individual
            </RadioOptionLabel>
            <RadioOptionLabel>
              <RadioButton
                type="radio"
                name="userType"
                value="organization"
                onChange={handleFormFieldChange}
              />
              Organization
            </RadioOptionLabel>
          </RadioOptionsGroup>
          {validationErrors.userType && <ValidationErrorMessage>{validationErrors.userType}</ValidationErrorMessage>}
        </UserTypeSection>

        <FormFieldGroup>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <TextInput
            id="password"
            name="password"
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Input password"
            value={registrationData.password}
            onChange={handleFormFieldChange}
            className={getFieldValidationClass('password')}
          />
          <PasswordVisibilityToggle
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
          >
            {isPasswordVisible ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </PasswordVisibilityToggle>
          {validationErrors.password && <ValidationErrorMessage>{validationErrors.password}</ValidationErrorMessage>}
        </FormFieldGroup>

        <FormFieldGroup>
          <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
          <TextInput
            id="confirmPassword"
            name="confirmPassword"
            type={isConfirmPasswordVisible ? 'text' : 'password'}
            placeholder="Confirm password"
            value={registrationData.confirmPassword}
            onChange={handleFormFieldChange}
            className={getFieldValidationClass('confirmPassword')}
          />
          <PasswordVisibilityToggle
            type="button"
            onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
            aria-label={isConfirmPasswordVisible ? 'Hide password' : 'Show password'}
          >
            {isConfirmPasswordVisible ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </PasswordVisibilityToggle>
          {validationErrors.confirmPassword && <ValidationErrorMessage>{validationErrors.confirmPassword}</ValidationErrorMessage>}
        </FormFieldGroup>

        <TermsCheckboxContainer>
          <CheckboxInput
            type="checkbox"
            name="agreeToTerms"
            onChange={handleFormFieldChange}
          />
          <span>
            By continuing, you agree to our{' '}
            <ExternalLink href="#" target="_blank">Terms & Conditions</ExternalLink>{' '}
            and{' '}
            <ExternalLink href="#" target="_blank">Privacy Policy</ExternalLink>
          </span>
        </TermsCheckboxContainer>
        {validationErrors.agreeToTerms && <ValidationErrorMessage>{validationErrors.agreeToTerms}</ValidationErrorMessage>}
        
        <CreateAccountButton type="submit">
          CREATE ACCOUNT
        </CreateAccountButton>
      </RegistrationForm>
      
      <SectionDivider>
        <span>Or</span>
      </SectionDivider>
      
      <GoogleSignUpButton onClick={handleGoogleRegistration}>
        <FcGoogle size={20} />
        Continue with Google
      </GoogleSignUpButton>
      
      <SignInPromptText>
        Have an account already? <SignInNavigationLink href="/">Sign In</SignInNavigationLink>
      </SignInPromptText>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
