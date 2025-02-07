// src/models/Document.ts

export interface Document {
    id: string;
    type: string;
    status: 'pending' | 'completed' | 'archived';
    createdAt: Date;
    updatedAt: Date;
}