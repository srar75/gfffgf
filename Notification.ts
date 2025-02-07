// src/models/Notification.ts

export interface Notification {
    type: string;
    expirationDate: Date;
    message: string;
}