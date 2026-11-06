/** No reviews yet — add real Google reviews here as they come in. Review UI and rating schema stay hidden while this is 0. */
export const TOTAL_REVIEW_COUNT = 0;

export type CustomerReview = {
  name: string;
  meta: string;
  time: string;
  initial: string;
  initialBg: string;
  text: string;
};

export const reviews: CustomerReview[] = [];
