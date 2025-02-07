import React, { useState } from 'react';

const DocumentUploader: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
            setError(null);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setError('Por favor, selecciona un archivo para cargar.');
            return;
        }

        setUploading(true);
        setError(null);

        try {
            // Aquí se implementaría la lógica para cargar el archivo
            // await DocumentService.uploadDocument(file);
            console.log('Archivo cargado:', file.name);
        } catch (err) {
            setError('Error al cargar el archivo. Inténtalo de nuevo.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div>
            <h2>Cargar Documento</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? 'Cargando...' : 'Cargar Documento'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default DocumentUploader;