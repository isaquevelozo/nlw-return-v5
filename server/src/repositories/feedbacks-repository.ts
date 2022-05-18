export interface FeedbackCreatedata {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbackRepository {
  create: (data: FeedbackCreatedata) => Promise<void>;
}