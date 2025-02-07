import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Cambia esto por el host de tu servidor de correo
    port: 587, // Cambia esto por el puerto de tu servidor de correo
    secure: false, // true para 465, false para otros puertos
    auth: {
        user: 'tu-email@example.com', // Cambia esto por tu dirección de correo
        pass: 'tu-contraseña' // Cambia esto por tu contraseña
    }
});

export const sendEmail = async (to: string, subject: string, text: string) => {
    const mailOptions = {
        from: 'tu-email@example.com', // Cambia esto por tu dirección de correo
        to,
        subject,
        text
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email enviado: ' + info.response);
    } catch (error) {
        console.error('Error al enviar el correo: ', error);
    }
};