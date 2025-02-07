import React from 'react';
import { generateDocument } from '../../api/pdfProcessor';
import { sendEmail } from '../../api/email';

interface DocumentGeneratorProps {
    candidateData: any; // Define a proper type based on your candidate data structure
}

const DocumentGenerator: React.FC<DocumentGeneratorProps> = ({ candidateData }) => {
    const handleGenerateDocument = async () => {
        try {
            const document = await generateDocument(candidateData);
            await sendEmail(candidateData.email, document);
            alert('Document generated and sent successfully!');
        } catch (error) {
            console.error('Error generating document:', error);
            alert('Failed to generate or send document.');
        }
    };

    return (
        <div>
            <h2>Generador de Documentos</h2>
            <button onClick={handleGenerateDocument}>Generar Documento</button>
        </div>
    );
};

export default DocumentGenerator;