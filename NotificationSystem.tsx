import React, { useEffect, useState } from 'react';

interface Notification {
    id: number;
    message: string;
    dueDate: Date;
}

const NotificationSystem: React.FC = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        // Simulación de la carga de notificaciones
        const fetchNotifications = async () => {
            // Aquí se podría hacer una llamada a una API para obtener las notificaciones
            const mockNotifications: Notification[] = [
                { id: 1, message: 'Examen médico vencido', dueDate: new Date('2023-10-01') },
                { id: 2, message: 'Curso obligatorio próximo', dueDate: new Date('2023-11-15') },
            ];
            setNotifications(mockNotifications);
        };

        fetchNotifications();
    }, []);

    return (
        <div>
            <h2>Notificaciones</h2>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>
                        {notification.message} - Vence el: {notification.dueDate.toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationSystem;