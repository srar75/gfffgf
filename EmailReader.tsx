import React, { useEffect, useState } from 'react';
import { EmailService } from '../../services/EmailService';
import { CVProcessor } from './CVProcessor';

const EmailReader: React.FC = () => {
    const [emails, setEmails] = useState<any[]>([]);

    useEffect(() => {
        const fetchEmails = async () => {
            const fetchedEmails = await EmailService.getIncomingEmails();
            setEmails(fetchedEmails);
            processCVs(fetchedEmails);
        };

        fetchEmails();
    }, []);

    const processCVs = (emails: any[]) => {
        emails.forEach(email => {
            if (email.hasAttachment && email.attachmentType === 'CV') {
                CVProcessor.processCV(email.attachment);
            }
        });
    };

    return (
        <div>
            <h2>Correos Electrónicos Recibidos</h2>
            <ul>
                {emails.map((email, index) => (
                    <li key={index}>{email.subject} - {email.sender}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmailReader;