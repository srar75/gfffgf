function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateRequiredField(field: string): boolean {
    return field.trim() !== '';
}

function validatePhoneNumber(phone: string): boolean {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(String(phone));
}

function validateDate(dateString: string): boolean {
    const re = /^\d{4}-\d{2}-\d{2}$/;
    return re.test(String(dateString));
}

export { validateEmail, validateRequiredField, validatePhoneNumber, validateDate };