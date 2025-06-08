import React, { useState } from 'react';
import styled from 'styled-components';
import { Camera, Upload } from 'lucide-react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  border: 2px dashed #D1D5DB;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: white;
  
  &:hover {
    border-color: #7642FE;
  }
`;

const CircularUpload = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #E5E7EB;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  color: #6B7280;
`;

const RectangularUpload = styled.div`
  width: 100%;
  height: 120px;
  background-color: #E5E7EB;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  color: #6B7280;
  border-radius: 6px;
`;

const PlaceholderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #6B7280;
`;

const UploadedContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const UploadedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`;

const UploadButton = styled.button`
  background: #7642FE;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    background: #5f35cc;
  }
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

const DragText = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
`;

interface UploadAreaProps {
  onImageUpload: (imageUrl: string) => void;
}

const UploadArea: React.FC<UploadAreaProps> = ({ onImageUpload }) => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      onImageUpload(imageUrl);
    }
  };

  return (
    <Container>
      {image ? (
        <UploadedContent>
          <UploadedImage src={image} alt="Uploaded" />
        </UploadedContent>
      ) : (
        <PlaceholderContent>
          <CircularUpload>
            <Camera size={32} />
          </CircularUpload>
          <DragText>
            Drag your image here or
          </DragText>
          <UploadButton>
            <Upload size={16} style={{ marginRight: '8px' }} />
            Upload
          </UploadButton>
        </PlaceholderContent>
      )}
      <HiddenInput type="file" accept="image/*" onChange={handleImageChange} />
    </Container>
  );
};

export default UploadArea;
