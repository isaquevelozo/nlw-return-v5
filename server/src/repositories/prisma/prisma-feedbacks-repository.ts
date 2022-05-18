import { prisma } from "../../prisma";
import { FeedbackCreatedata, FeedbackRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbackRepository {
  async create({ type, comment, screenshot }: FeedbackCreatedata) {

    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })

  }
}