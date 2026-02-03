import { Router, Request, Response, NextFunction } from 'express';
import nodemailer from 'nodemailer';

const router = Router();

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'niklas@themossconcept.com',
    pass: process.env.GOOGLE_APP_PASSWORD,

  },
});

router.post('/contact', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, email, message } = req.body as ContactRequest;

    if (!name || !email || !message) {
      res.status(400).json({ error: 'Missing required fields: name, email, and message are required' });
      return;
    }

    const mailOptions = {
      from: 'niklas@themossconcept.com',
      to: 'niklas@themossconcept.com',
      subject: `Contact Form: Message from ${name}`,
      text: `You received a new message from your website contact form.\n\nFrom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    next(error);
  }
});

export default router;
