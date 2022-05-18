"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "04b66bff504d55",
        pass: "41cde44f4843a3"
    }
});
class NodeMailAdapter {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: 'Equipe Fidget <oi@fidget.com>',
            to: 'Isaque <isaquevelozotec@gmail.com>',
            subject,
            html: body
        });
    }
}
exports.NodeMailAdapter = NodeMailAdapter;
