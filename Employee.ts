// src/models/Employee.ts

export interface Employee {
    id: number;
    name: string;
    status: 'active' | 'terminated';
    documents: Document[];
}

export interface Document {
    type: string;
    status: 'pending' | 'completed';
}