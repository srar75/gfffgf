import React, { useState } from 'react';

const DigitalSignature: React.FC = () => {
    const [signature, setSignature] = useState<string>('');

    const handleSignatureChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSignature(event.target.value);
    };

    const handleSubmit = () => {
        // Aquí se puede implementar la lógica para guardar la firma digital
        console.log('Firma digital guardada:', signature);
    };

    return (
        <div>
            <h2>Firma Digital</h2>
            <textarea
                value={signature}
                onChange={handleSignatureChange}
                placeholder="Dibuje su firma aquí..."
                rows={4}
                style={{ width: '100%' }}
            />
            <button onClick={handleSubmit}>Guardar Firma</button>
        </div>
    );
};

export default DigitalSignature;