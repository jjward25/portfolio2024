export type Intake = { name: string; message: string; reply: string; replyType: 'email' | 'phone'; submissionId: string; website: string };

export function parseIntake(value: unknown): Intake | null {
  if (!value || typeof value !== 'object') return null;
  const body = value as Record<string, unknown>;
  if (['name', 'message', 'reply', 'submissionId'].some((key) => typeof body[key] !== 'string')) return null;
  const name = (body.name as string).trim();
  const message = (body.message as string).trim();
  const reply = (body.reply as string).trim();
  const submissionId = body.submissionId as string;
  if (!name || name.length > 100 || /[\r\n\x00-\x1f]/.test(name) || !message || message.length > 4000 || !reply || reply.length > 254 || /[\r\n\x00-\x1f]/.test(reply)) return null;
  if (!/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(submissionId)) return null;
  if (body.replyType !== 'email' && body.replyType !== 'phone') return null;
  if (body.replyType === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(reply)) return null;
  if (body.replyType === 'phone' && (!/^\+?[\d\s().-]{7,30}$/.test(reply) || reply.replace(/\D/g, '').length < 7)) return null;
  return { name, message, reply, replyType: body.replyType, submissionId, website: typeof body.website === 'string' ? body.website : '' };
}

type MailOptions = { from: string; to: string; replyTo?: string; subject: string; text: string; messageId: string; disableFileAccess: boolean; disableUrlAccess: boolean };
type SmtpOptions = { host: string; port: number; secure: boolean; auth: { user: string; pass: string }; connectionTimeout: number; greetingTimeout: number; socketTimeout: number };
type Transport = { sendMail: (message: MailOptions) => Promise<{ accepted?: unknown[]; rejected?: unknown[] }>; close: () => void };
type TransportFactory = (options: SmtpOptions) => Transport;

export async function emailIntake(intake: Intake, env = process.env, createTransport?: TransportFactory): Promise<void> {
  const user = env.GMAIL_USER?.trim();
  const password = env.GMAIL_APP_PASSWORD?.replace(/\s/g, '');
  if (!user || !/^[^\s@<>]+@gmail\.com$/i.test(user) || !password || !/^[a-z]{16}$/i.test(password)) throw new Error('Gmail connection needs configuration');
  const factory = createTransport || (await import('nodemailer')).default.createTransport;
  const transport = factory({ host: 'smtp.gmail.com', port: 465, secure: true, auth: { user, pass: password }, connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000 });
  try {
    const result = await transport.sendMail({
      from: user,
      to: 'Joseph.Ward@Outlook.com',
      ...(intake.replyType === 'email' ? { replyTo: intake.reply } : {}),
      subject: `Portfolio message from ${intake.name}`,
      text: `Name: ${intake.name}\nReply by ${intake.replyType}: ${intake.reply}\n\n${intake.message}\n\nReference: ${intake.submissionId}`,
      messageId: `<portfolio-contact-${intake.submissionId}@gmail.com>`,
      disableFileAccess: true,
      disableUrlAccess: true,
    });
    if (!result.accepted?.some((address) => String(address).toLowerCase() === 'joseph.ward@outlook.com') || result.rejected?.length) throw new Error('Gmail did not accept the message');
  } finally { transport.close(); }
}
