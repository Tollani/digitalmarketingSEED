
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Camera } from 'lucide-react';
import Button from './Button';
import UploadArea from './UploadArea';

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.15px;
  color: #7642FE;
  margin-bottom: 8px;
  text-align: left;
  width: 100%;
  max-width: 275px;
`;

const Subtitle = styled.p`
  font-family: 'Sora', sans-serif;
  font-size: 16px;
  color: #6B7280;
  margin-bottom: 32px;
  text-align: left;
`;

const SectionTitle = styled.h3`
  font-family: 'Sora', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #1F2937;
  margin-bottom: 16px;
`;

const ProfileUploadContainer = styled.div`
  margin-bottom: 32px;
`;

const ProfilePictureUpload = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px dashed #D1D5DB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #FAFAFA;
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s ease;
  
  &:hover {
    border-color: #7642FE;
  }
  
  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const CameraIcon = styled(Camera)`
  color: #7642FE;
  margin-bottom: 8px;
`;

const UploadText = styled.span`
  font-family: 'Sora', sans-serif;
  font-size: 12px;
  color: #7642FE;
  text-align: center;
`;

const HiddenInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const InputContainer = styled.div`
  margin-bottom: 32px;
`;

const Label = styled.label`
  font-family: 'Sora', sans-serif;
  font-size: 16px;
  color: #1F2937;
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  font-family: 'Sora', sans-serif;
  font-size: 16px;
  color: #1F2937;
  
  &:focus {
    outline: none;
    border-color: #7642FE;
    box-shadow: 0 0 0 3px rgba(118, 66, 254, 0.1);
  }
  
  &::placeholder {
    color: #9CA3AF;
  }
`;

const DocumentUploadContainer = styled.div`
  margin-bottom: 32px;
`;

const DocumentSubtitle = styled.p`
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 8px;
`;

const DocumentNote = styled.p`
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkipLink = styled.button`
  background: none;
  border: none;
  font-family: 'Sora', sans-serif;
  font-size: 14px;
  color: #7642FE;
  cursor: pointer;
  text-decoration: underline;
  
  &:hover {
    text-decoration: none;
  }
`;

const ContactPersonProfileForm = () => {
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [contactPersonName, setContactPersonName] = useState('');
  const [identificationDocuments, setIdentificationDocuments] = useState<string[]>([]);

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
    }
  };

  const handleDocumentUpload = (imageUrl: string) => {
    setIdentificationDocuments([...identificationDocuments, imageUrl]);
  };

  const isFormValid = profilePicture && contactPersonName.trim() && identificationDocuments.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      console.log({
        profilePicture,
        contactPersonName,
        identificationDocuments
      });
      navigate('/');
    }
  };

  const handleSkip = () => {
    console.log('Profile completion skipped');
    navigate('/');
  };

  return (
    <FormContainer>
      <Title>Contact Person Profile</Title>
      <Subtitle>Complete the KYC registration for your organization</Subtitle>
      
      <form onSubmit={handleSubmit}>
        <ProfileUploadContainer>
          <SectionTitle>Upload Your Profile Picture</SectionTitle>
          <ProfilePictureUpload>
            {profilePicture ? (
              <ProfileImage src={profilePicture} alt="Profile" />
            ) : (
              <>
                <CameraIcon size={24} />
                <UploadText>Upload Photo</UploadText>
              </>
            )}
            <HiddenInput
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
            />
          </ProfilePictureUpload>
        </ProfileUploadContainer>

        <InputContainer>
          <Label htmlFor="contactName">Name of Contact Person</Label>
          <Input
            id="contactName"
            type="text"
            placeholder="Enter full name"
            value={contactPersonName}
            onChange={(e) => setContactPersonName(e.target.value)}
          />
        </InputContainer>

        <DocumentUploadContainer>
          <SectionTitle>Upload Valid Means of Identification for Contact Person</SectionTitle>
          <DocumentSubtitle>e.g. National ID, Drivers License, International Passport, Voters ID.</DocumentSubtitle>
          <DocumentNote>Upload multiple high quality images for better results.</DocumentNote>
          <UploadArea onImageUpload={handleDocumentUpload} />
        </DocumentUploadContainer>

        <ButtonContainer>
          <Button type="submit" disabled={!isFormValid}>
            Continue
          </Button>
          <SkipLink type="button" onClick={handleSkip}>
            Skip
          </SkipLink>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default ContactPersonProfileForm;
