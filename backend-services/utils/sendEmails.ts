/* eslint-disable @typescript-eslint/no-explicit-any */
import FormData from "form-data";
import Mailgun from "mailgun.js";
import fs from "fs";
import path from "path";

interface Attachment {
  filePath: string;
  filename?: string;
  contentType?: string;
}

interface SendEmailOptions {
  to: string | string[];
  cc?: string | string[];
  bcc?: string | string[];
  subject: string;
  template: string;
  variables?: Record<string, any>;
  attachments?: Attachment[];
}

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "",
  url: "https://api.eu.mailgun.net",
});

const mgDomain = process.env.MAILGUN_DOMAIN as string;
const mailSender = process.env.MAIL_SENDER as string;

export async function sendEmail(options: SendEmailOptions): Promise<void> {
  try {
    const {
      to,
      cc,
      bcc,
      subject,
      template,
      variables = {},
      attachments = [],
    } = options;

    // Prepare the attachments array
    const preparedAttachments = attachments.map((att) => ({
      data: fs.readFileSync(path.resolve(att.filePath)),
      filename: att.filename || path.basename(att.filePath),
      contentType: att.contentType || "application/octet-stream",
    }));

    // Send the email using Mailgun
    const messageData: any = {
      from: mailSender,
      to,
      cc,
      bcc,
      subject,
      template,
      "h:X-Mailgun-Variables": JSON.stringify(variables),
      ...(preparedAttachments.length > 0 && {
        attachment: preparedAttachments,
      }),
    };

    // Make the API call to send the email
    const res = await mg.messages.create(mgDomain, messageData);
    console.log("✅ Email sent successfully:", res.id);
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }
}
