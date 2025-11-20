
import React, { useRef } from 'react';

interface ImageUploaderProps {
  imageUrl: string | null;
  onImageUpload: (url: string) => void;
  onImageRemove: () => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ imageUrl, onImageUpload, onImageRemove }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpload(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Veuillez sélectionner un fichier image valide (JPG, PNG, GIF).");
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <h3 className="font-semibold mb-2 text-slate-600">Image / Logo</h3>
      {imageUrl ? (
        <div className="flex items-center gap-3">
          <img src={imageUrl} alt="Aperçu" className="w-12 h-12 rounded-full object-cover border-2 border-slate-200" />
          <button
            onClick={onImageRemove}
            className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-red-600 transition-colors"
          >
            <i className="fas fa-trash-alt mr-2"></i>
            Supprimer
          </button>
        </div>
      ) : (
        <>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          <button
            onClick={handleUploadClick}
            className="w-full px-4 py-2 border-2 border-dashed border-slate-300 text-slate-500 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-colors"
          >
            <i className="fas fa-upload mr-2"></i>
            Télécharger une image
          </button>
        </>
      )}
    </div>
  );
};

export default ImageUploader;
