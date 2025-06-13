
import React, { useState } from 'react';
import styled from 'styled-components';
import { Upload, Plus } from 'lucide-react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px dashed #D1D5DB;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: #FAFAFA;
  min-height: 180px;
  transition: border-color 0.2s ease;
  
  @media (max-width: 480px) {
    min-height: 150px;
  }
  
  &:hover {
    border-color: #7642FE;
    background: #FEFEFE;
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  height: 100%;
  min-height: 180px;
  
  @media (max-width: 480px) {
    min-height: 150px;
    padding: 20px 15px;
  }
`;

const UploadedState = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 16px;
`;

const DocumentPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-start;
`;

const DocumentItem = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  border: 1px solid #E5E7EB;
`;

const DocumentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AddButton = styled.div`
  width: 80px;
  height: 80px;
  border: 2px dashed #D1D5DB;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #7642FE;
  font-size: 12px;
  font-weight: 500;
  gap: 4px;
  background: white;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #7642FE;
    background: #F8F7FF;
  }
`;

const DragText = styled.p`
  font-size: 14px;
  color: #6B7280;
  margin: 0 0 16px 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
`;

const UploadButton = styled.button`
  background: #7642FE;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: 'Poppins', sans-serif;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  
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

interface UploadAreaProps {
  onImageUpload: (imageUrl: string) => void;
}

const UploadArea: React.FC<UploadAreaProps> = ({ onImageUpload }) => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImages([...uploadedImages, imageUrl]);
      onImageUpload(imageUrl);
    }
  };

  const handleAddMore = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImages([...uploadedImages, imageUrl]);
      onImageUpload(imageUrl);
    }
  };

  return (
    <Container>
      {uploadedImages.length === 0 ? (
        <EmptyState>
          <DragText>Hold and drag media to reorder</DragText>
          <UploadButton>
            <Upload size={16} />
            Upload New
          </UploadButton>
          <HiddenInput type="file" accept="image/*,video/*,.3ds,.obj,.gltf" onChange={handleImageChange} />
        </EmptyState>
      ) : (
        <UploadedState>
          <DragText>Hold and drag media to reorder</DragText>
          <DocumentPreview>
            {uploadedImages.map((image, index) => (
              <DocumentItem key={index}>
                <DocumentImage src={image} alt={`Document ${index + 1}`} />
              </DocumentItem>
            ))}
            <AddButton>
              <Plus size={16} />
              <span>Add</span>
              <HiddenInput type="file" accept="image/*,video/*,.3ds,.obj,.gltf" onChange={handleAddMore} />
            </AddButton>
          </DocumentPreview>
        </UploadedState>
      )}
    </Container>
  );
};

export default UploadArea;
