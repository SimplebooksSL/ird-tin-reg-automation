import dotenv from "dotenv";
import path from "path";

// Load environment variables
dotenv.config();

export interface Config {
  port: number;
  env: string;
  nodeEnv: string;
  auth: {
    apiKey: string;
    jwtSecret: string;
  };
  puppeteer: {
    headless: boolean;
    screenshotDir: string;
    timeout: number;
    slowMo: number;
  };
  logging: {
    directory: string;
    level: string;
  };
  irdPortal: {
    baseUrl: string;
    registrationUrl: string;
  };
  email: {
    enabled: boolean;
    from: string;
    to: string[];
    smtpHost: string;
    smtpPort: number;
    smtpUser: string;
    smtpPass: string;
  };
}

const config: Config = {
  port: parseInt(process.env.PORT || "3000", 10),
  env: process.env.NODE_ENV || "development",
  nodeEnv: process.env.NODE_ENV || "development",
  auth: {
    apiKey: process.env.API_KEY || "dev-key-1",
    jwtSecret: process.env.JWT_SECRET || "dev-secret-key",
  },
  puppeteer: {
    headless: process.env.PUPPETEER_HEADLESS !== "false",
    screenshotDir:
      process.env.SCREENSHOT_DIR || path.join(process.cwd(), "screenshots"),
    timeout: parseInt(process.env.PUPPETEER_TIMEOUT || "30000", 10),
    slowMo: parseInt(process.env.PUPPETEER_SLOWMO || "0", 10),
  },
  logging: {
    directory: process.env.LOG_DIR || path.join(process.cwd(), "logs"),
    level: process.env.LOG_LEVEL || "info",
  },
  irdPortal: {
    baseUrl: process.env.IRD_BASE_URL || "https://eservices.ird.gov.lk",
    registrationUrl:
      process.env.IRD_REGISTRATION_URL ||
      "/registration/tinregistration/showrequestheader",
  },
  email: {
    enabled: process.env.EMAIL_ENABLED === "true",
    from: process.env.EMAIL_FROM || "noreply@example.com",
    to: (process.env.EMAIL_TO || "admin@example.com").split(","),
    smtpHost: process.env.SMTP_HOST || "smtp.example.com",
    smtpPort: parseInt(process.env.SMTP_PORT || "587", 10),
    smtpUser: process.env.SMTP_USER || "user@example.com",
    smtpPass: process.env.SMTP_PASS || "password",
  },
};

export default config;
