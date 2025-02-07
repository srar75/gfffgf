import React from 'react';
import { EmailService } from '../../services/EmailService';
import { DocumentService } from '../../services/DocumentService';
import { Employee } from '../../models/Employee';

const CVProcessor: React.FC = () => {
    const processCVs = async () => {
        try {
            const emails = await EmailService.fetchIncomingEmails();
            const cvAttachments = emails.filter(email => email.hasAttachment && email.attachmentType === 'CV');

            for (const email of cvAttachments) {
                const cvData = await EmailService.extractCVData(email.attachment);
                const employee: Employee = {
                    name: cvData.name,
                    status: 'active',
                    documents: [email.attachment]
                };
                await DocumentService.saveEmployeeData(employee);
                await EmailService.sendAcknowledgment(email.sender, employee);
            }
        } catch (error) {
            console.error('Error processing CVs:', error);
        }
    };

    React.useEffect(() => {
        processCVs();
    }, []);

    return (
        <div>
            <h2>Procesador de CV</h2>
            <p>Los CV se están procesando...</p>
        </div>
    );
};

export default CVProcessor;