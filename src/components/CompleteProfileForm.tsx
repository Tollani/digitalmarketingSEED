import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import UploadArea from './UploadArea';

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: #7642FE;
  margin-bottom: 8px;
  font-family: 'Poppins', sans-serif;
  text-align: left;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #6B7280;
  margin-bottom: 32px;
  font-family: 'Poppins', sans-serif;
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #1F2937;
  margin-bottom: 12px;
  font-family: 'Poppins', sans-serif;
`;

const SectionSubtitle = styled.p`
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 16px;
  font-family: 'Poppins', sans-serif;
`;

const ProfilePictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const ProfilePicturePlaceholder = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #D1D5DB;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F9FAFB;
  
  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const ProfilePicturePreview = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #D1D5DB;
  
  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const UploadButton = styled.button`
  background: #6B46C1;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    background: #553C9A;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 12px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const RadioItem = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 16px;
  color: #1F2937;
  font-family: 'Poppins', sans-serif;
`;

const RadioInput = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const SkipLink = styled.button`
  background: none;
  border: none;
  color: #6B7280;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 12px;
  display: block;
  width: 100%;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    color: #4B5563;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const CompleteProfileForm = () => {
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [profilePicturePreview, setProfilePicturePreview] = useState<string>('');
  const [identificationFiles, setIdentificationFiles] = useState<File[]>([]);
  const [ownsBusiness, setOwnsBusiness] = useState<string>('');
  const [registerWithBusiness, setRegisterWithBusiness] = useState<string>('');

  const handleProfilePictureUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfilePicture(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicturePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIdentificationUpload = (files: File[]) => {
    setIdentificationFiles(prev => [...prev, ...files]);
  };

  const handleContinue = () => {
    if (!profilePicture || identificationFiles.length === 0) {
      alert('Please upload a profile picture and at least one identification document.');
      return;
    }

    const formData = {
      profilePicture: profilePicture.name,
      identificationFiles: identificationFiles.map(file => file.name),
      ownsBusiness,
      registerWithBusiness: ownsBusiness === 'yes' ? registerWithBusiness : null
    };

    console.log('Profile completion data:', formData);
    navigate('/');
  };

  const handleSkip = () => {
    console.log('Profile completion skipped');
    navigate('/');
  };

  return (
    <FormContainer>
      <Title>Complete Your Profile</Title>
      <Subtitle>Complete your KYC registration</Subtitle>

      <Section>
        <SectionTitle>Upload Your Profile Picture</SectionTitle>
        <ProfilePictureContainer>
          {profilePicturePreview ? (
            <ProfilePicturePreview src={profilePicturePreview} alt="Profile" />
          ) : (
            <ProfilePicturePlaceholder>
              <Camera size={24} color="#9CA3AF" />
            </ProfilePicturePlaceholder>
          )}
          <UploadButton onClick={() => document.getElementById('profile-picture-input')?.click()}>
            {profilePicturePreview ? 'Change image' : 'Upload'}
          </UploadButton>
          <HiddenInput
            id="profile-picture-input"
            type="file"
            accept="image/*"
            onChange={handleProfilePictureUpload}
          />
        </ProfilePictureContainer>
      </Section>

      <Section>
        <SectionTitle>Upload Valid Means of Identification</SectionTitle>
        <SectionSubtitle>
          e.g. National ID, Drivers License, International Passport, Voters ID.
        </SectionSubtitle>
        <SectionSubtitle>
          Upload multiple high quality images for better results
        </SectionSubtitle>
        <UploadArea
          files={identificationFiles}
          onFilesChange={handleIdentificationUpload}
          maxWidth="300px"
          maxHeight="150px"
        />
      </Section>

      <Section>
        <SectionTitle>Do You Own a Business?</SectionTitle>
        <SectionSubtitle>
          This helps us tailor your experience and recommend the most relevant services for your needs.
        </SectionSubtitle>
        <RadioGroup>
          <RadioItem>
            <RadioInput
              type="radio"
              name="ownsBusiness"
              value="yes"
              checked={ownsBusiness === 'yes'}
              onChange={(e) => setOwnsBusiness(e.target.value)}
            />
            Yes
          </RadioItem>
          <RadioItem>
            <RadioInput
              type="radio"
              name="ownsBusiness"
              value="no"
              checked={ownsBusiness === 'no'}
              onChange={(e) => setOwnsBusiness(e.target.value)}
            />
            No
          </RadioItem>
        </RadioGroup>

        {ownsBusiness === 'yes' && (
          <Section>
            <SectionTitle>Do You Want to Register With Your Business?</SectionTitle>
            <SectionSubtitle>
              This helps us tailor your experience and recommend the most relevant services for your needs.
            </SectionSubtitle>
            <RadioGroup>
              <RadioItem>
                <RadioInput
                  type="radio"
                  name="registerWithBusiness"
                  value="yes"
                  checked={registerWithBusiness === 'yes'}
                  onChange={(e) => setRegisterWithBusiness(e.target.value)}
                />
                Yes
              </RadioItem>
              <RadioItem>
                <RadioInput
                  type="radio"
                  name="registerWithBusiness"
                  value="no"
                  checked={registerWithBusiness === 'no'}
                  onChange={(e) => setRegisterWithBusiness(e.target.value)}
                />
                No
              </RadioItem>
            </RadioGroup>
          </Section>
        )}
      </Section>

      <Button type="button" onClick={handleContinue}>
        Continue
      </Button>
      <SkipLink onClick={handleSkip}>
        Skip
      </SkipLink>
    </FormContainer>
  );
};

export default CompleteProfileForm;
