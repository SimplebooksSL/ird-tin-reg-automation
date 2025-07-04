import nodemailer from 'nodemailer';
import config from '../config/config';
import logger from '../utils/logger';
import { SubmissionResult } from '../types/submission';

/**
 * Send email notification about submission status
 */
export const sendEmailNotification = async (
  result: SubmissionResult,
  subject: string,
  template: string
): Promise<boolean> => {
  // Skip if email is not enabled
  if (!config.email.enabled) {
    logger.info('Email notifications are disabled');
    return false;
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: config.email.smtpHost,
      port: config.email.smtpPort,
      secure: config.email.smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: config.email.smtpUser,
        pass: config.email.smtpPass,
      },
    });

    // Prepare email content
    const emailContent = prepareEmailContent(result, template);

    // Send email
    const info = await transporter.sendMail({
      from: config.email.from,
      to: config.email.to.join(','),
      subject: subject,
      html: emailContent,
    });

    logger.info('Email notification sent', { messageId: info.messageId });
    return true;
  } catch (error) {
    logger.error('Failed to send email notification', { error });
    return false;
  }
};

/**
 * Prepare email content based on template and submission result
 */
const prepareEmailContent = (result: SubmissionResult, template: string): string => {
  // Basic template for success
  if (template === 'success') {
    return `
      <h1>TIN Registration Submission Successful</h1>
      <p>The TIN registration submission was processed successfully.</p>
      <ul>
        <li><strong>Submission ID:</strong> ${result.submissionId}</li>
        <li><strong>Timestamp:</strong> ${result.timestamp}</li>
        <li><strong>Confirmation Number:</strong> ${result.confirmationNumber || 'Not available'}</li>
      </ul>
      <p>Screenshots of the submission process have been saved for reference.</p>
    `;
  }
  
  // Template for failure
  if (template === 'failure') {
    return `
      <h1>TIN Registration Submission Failed</h1>
      <p>The TIN registration submission encountered an error.</p>
      <ul>
        <li><strong>Submission ID:</strong> ${result.submissionId}</li>
        <li><strong>Timestamp:</strong> ${result.timestamp}</li>
        <li><strong>Error Message:</strong> ${result.message || 'Unknown error'}</li>
      </ul>
      <h2>Error Details:</h2>
      <pre>${JSON.stringify(result.errors, null, 2)}</pre>
      <p>Screenshots of the submission process have been saved for reference.</p>
    `;
  }
  
  // Default template
  return `
    <h1>TIN Registration Submission Update</h1>
    <p>Status update for TIN registration submission.</p>
    <ul>
      <li><strong>Submission ID:</strong> ${result.submissionId}</li>
      <li><strong>Timestamp:</strong> ${result.timestamp}</li>
      <li><strong>Success:</strong> ${result.success ? 'Yes' : 'No'}</li>
      <li><strong>Message:</strong> ${result.message || 'No message'}</li>
    </ul>
  `;
};
