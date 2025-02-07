import { Document } from '../models/Document';

class DocumentService {
    private documents: Document[] = [];

    public uploadDocument(document: Document): void {
        this.documents.push(document);
        // Aquí se puede agregar lógica para guardar el documento en un servidor o base de datos
    }

    public getDocuments(): Document[] {
        return this.documents;
    }

    public getDocumentById(id: string): Document | undefined {
        return this.documents.find(doc => doc.id === id);
    }

    public deleteDocument(id: string): void {
        this.documents = this.documents.filter(doc => doc.id !== id);
        // Aquí se puede agregar lógica para eliminar el documento del servidor o base de datos
    }
}

export default new DocumentService();