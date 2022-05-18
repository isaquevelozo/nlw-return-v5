import { MailAdapter, SendMailData } from "./mail-adapter";
import nodemailer from 'nodemailer'
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "04b66bff504d55",
    pass: "41cde44f4843a3"
  }
});


export class NodeMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Fidget <oi@fidget.com>',
      to: 'Isaque <isaquevelozotec@gmail.com>',
      subject,
      html: body
    })
  }
}