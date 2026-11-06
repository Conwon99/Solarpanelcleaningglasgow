import { brandName, business } from "@/data/business";

export type FaqItem = {
  question: string;
  answer: string;
};

export const homepageFaqs: FaqItem[] = [
  {
    question: "How much does solar panel cleaning cost in Glasgow?",
    answer: `The price depends on how many panels you have, the roof height and how dirty they are. Send ${brandName()} your postcode, panel count and a photo and we will give you a free, fixed-price quote.`,
  },
  {
    question: "How do you clean solar panels?",
    answer: `We use purified water pumped through soft brushes on carbon-fibre poles, usually from the ground. There are no chemicals or pressure washers, and the pure water dries spot-free.`,
  },
  {
    question: "How often should solar panels be cleaned in Glasgow?",
    answer: `Once a year suits most homes. Panels near trees, busy roads, farmland or with pigeons around often need cleaning every six months. Rain alone does not remove the film, droppings or lichen that cut output.`,
  },
  {
    question: "What areas do you cover?",
    answer: `${brandName()} covers ${business.primaryCity} and ${business.region}, including Paisley, Renfrew, Clydebank, Bearsden, Milngavie, Bishopbriggs, Kirkintilloch, Cumbernauld, Coatbridge, Airdrie, Motherwell, Hamilton, East Kilbride, Rutherglen, Giffnock, Clarkston and Newton Mearns.`,
  },
  {
    question: "Can you stop pigeons nesting under my solar panels?",
    answer: `Yes. We clear out nests and droppings, clean the panels and fit bird proofing mesh around the array using no-drill clips, so your panels, roof and warranty are not affected.`,
  },
  {
    question: "How do I get a quote?",
    answer: `Call ${business.phoneLocal}, send a WhatsApp message or use the contact form with your postcode, number of panels and a photo. Quotes are free with no obligation.`,
  },
];

export const buildFaqSchema = (faqs: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
