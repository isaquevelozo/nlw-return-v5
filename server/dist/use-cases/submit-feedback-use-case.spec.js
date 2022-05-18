"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submit_feedback_use_case_1 = require("./submit-feedback-use-case");
const createFeedbackSpy = jest.fn();
const createSendMailSpy = jest.fn();
const submitFeedback = new submit_feedback_use_case_1.SubmitFeedbackUseCase(
// { create: async () => { } },
{ create: createFeedbackSpy }, { sendMail: createSendMailSpy });
describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSU',
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(createSendMailSpy).toHaveBeenCalled();
    });
    it('should not be able to submit a feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSU',
        })).rejects.toThrow();
    });
    it('should not be able to submit a feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSU',
        })).rejects.toThrow();
    });
    it('should not be able to submit a feedback with a ivalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'ata:image/png;base64,iVBORw0KGgoAAAANSU',
        })).rejects.toThrow();
    });
});
