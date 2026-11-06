import { brandName, business } from "@/data/business";

export type LocationFaq = {
  question: string;
  answer: string;
};

export type LocationPage = {
  slug: string;
  name: string;
  shortName?: string;
  title: string;
  description: string;
  intro: string;
  nearby: string[];
  locationFaqs: LocationFaq[];
};

const makeLocationFaqs = (name: string): LocationFaq[] => [
  {
    question: `Do you offer solar panel cleaning in ${name}?`,
    answer: `Yes. ${brandName()} provides domestic and commercial solar panel cleaning in ${name} and nearby areas across ${business.region}, using purified water and soft brushes.`,
  },
  {
    question: `What solar panel services do you provide in ${name}?`,
    answer: `In ${name} we offer solar panel cleaning, maintenance plans, bird proofing to stop pigeons nesting under panels, and visual solar panel inspections.`,
  },
  {
    question: `How much does solar panel cleaning cost in ${name}?`,
    answer: `Prices depend on the number of panels and roof access. Send your ${name} postcode, panel count and a photo and we will give you a free, fixed-price quote.`,
  },
  {
    question: `Do you cover areas near ${name}?`,
    answer: `Yes. ${brandName()} covers ${name} and surrounding towns across ${business.region}. Get in touch with your postcode to confirm.`,
  },
  {
    question: `Is there a solar panel cleaner near ${name}?`,
    answer: `Yes. ${brandName()} is a solar panel cleaning specialist covering ${name}. We offer free quotes for solar panel cleaning and bird proofing across ${business.region}.`,
  },
];

const locationEntries = [
  {
    slug: "paisley",
    name: "Paisley",
    title: "Solar Panel Cleaning in Paisley",
    description: `Solar panel cleaning in Paisley by ${brandName()}. Pure water cleaning, bird proofing and panel checks for homes and businesses. Free quotes.`,
    intro: `${brandName()} cleans solar panels across Paisley and Renfrewshire, using purified water and soft brushes to lift dirt, lichen and bird droppings without chemicals. We also fit bird proofing mesh and carry out visual solar panel checks.`,
    nearby: ["Renfrew", "Newton Mearns", "Clydebank"],
  },
  {
    slug: "east-kilbride",
    name: "East Kilbride",
    title: "Solar Panel Cleaning in East Kilbride",
    description: `Solar panel cleaning in East Kilbride by ${brandName()}. Pure water cleaning, bird proofing and panel checks for homes and businesses. Free quotes.`,
    intro: `${brandName()} cleans solar panels across East Kilbride's new-build estates and older villages, using purified water and soft brushes to lift dirt, lichen and bird droppings without chemicals. We also fit bird proofing mesh and carry out visual solar panel checks.`,
    nearby: ["Hamilton", "Rutherglen", "Newton Mearns", "Giffnock"],
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    title: "Solar Panel Cleaning in Hamilton",
    description: `Solar panel cleaning in Hamilton by ${brandName()}. Pure water cleaning, bird proofing and panel checks for homes and businesses. Free quotes.`,
    intro: `${brandName()} cleans solar panels across Hamilton and South Lanarkshire, using purified water and soft brushes to lift dirt, lichen and bird droppings without chemicals. We also fit bird proofing mesh and carry out visual solar panel checks.`,
    nearby: ["Motherwell", "East Kilbride", "Rutherglen", "Coatbridge"],
  },
  {
    slug: "motherwell",
    name: "Motherwell",
    title: "Solar Panel Cleaning in Motherwell",
    description: `Solar panel cleaning in Motherwell by ${brandName()}. Pure water cleaning, bird proofing and panel checks for homes and businesses. Free quotes.`,
    intro: `${brandName()} cleans solar panels across Motherwell, Wishaw and North Lanarkshire, using purified water and soft brushes to lift dirt, lichen and bird droppings without chemicals. We also fit bird proofing mesh and carry out visual solar panel checks.`,
    nearby: ["Hamilton", "Coatbridge", "Airdrie", "East Kilbride"],
  },
  {
    slug: "bearsden",
    name: "Bearsden",
    title: "Solar Panel Cleaning in Bearsden",
    description: `Solar panel cleaning in Bearsden by ${brandName()}. Pure water cleaning, bird proofing and panel checks for homes and businesses. Free quotes.`,
    intro: `${brandName()} cleans solar panels across Bearsden's detached homes and mature gardens, using purified water and soft brushes to lift dirt, lichen and bird droppings without chemicals. We also fit bird proofing mesh and carry out visual solar panel checks.`,
    nearby: ["Milngavie", "Clydebank", "Bishopbriggs"],
  },
  {
    slug: "milngavie",
    name: "Milngavie",
    title: "Solar Panel Cleaning in Milngavie",
    description: `Solar panel cleaning in Milngavie by ${brandName()}. Pure water cleaning, bird proofing and panel checks for homes and businesses. Free quotes.`,
    intro: `${brandName()} cleans solar panels across Milngavie and the edge of the Campsies, using purified water and soft brushes to lift dirt, lichen and bird droppings without chemicals. We also fit bird proofing mesh and carry out visual solar panel checks.`,
    nearby: ["Bearsden", "Bishopbriggs", "Kirkintilloch", "Clydebank"],
  },
  {
    slug: "newton-mearns",
    name: "Newton Mearns",
    title: "Solar Panel Cleaning in Newton Mearns",
    description: `Solar panel cleaning in Newton Mearns by ${brandName()}. Pure water cleaning, bird proofing and panel checks for homes and businesses. Free quotes.`,
    intro: `${brandName()} cleans solar panels across Newton Mearns and East Renfrewshire, using purified water and soft brushes to lift dirt, lichen and bird droppings without chemicals. We also fit bird proofing mesh and carry out visual solar panel checks.`,
    nearby: ["Giffnock", "Clarkston", "East Kilbride", "Paisley"],
  },
  {
    slug: "giffnock",
    name: "Giffnock",
    title: "Solar Panel Cleaning in Giffnock",
    description: `Solar panel cleaning in Giffnock by ${brandName()}. Pure water cleaning, bird proofing and panel checks for homes and businesses. Free quotes.`,
    intro: `${brandName()} cleans solar panels across Giffnock and Thornliebank, using purified water and soft brushes to lift dirt, lichen and bird droppings without chemicals. We also fit bird proofing mesh and carry out visual solar panel checks.`,
    nearby: ["Newton Mearns", "Clarkston", "Rutherglen"],
  },
  {
    slug: "clarkston",
    name: "Clarkston",
    title: "Solar Panel Cleaning in Clarkston",
    description: `Solar panel cleaning in Clarkston by ${brandName()}. Pure water cleaning, bird proofing and panel checks for homes and businesses. Free quotes.`,
    intro: `${brandName()} cleans solar panels across Clarkston, Busby and Netherlee, using purified water and soft brushes to lift dirt, lichen and bird droppings without chemicals. We also fit bird proofing mesh and carry out visual solar panel checks.`,
    nearby: ["Giffnock", "Newton Mearns", "East Kilbride", "Rutherglen"],
  },
  {
    slug: "bishopbriggs",
    name: "Bishopbriggs",
    title: "Solar Panel Cleaning in Bishopbriggs",
    description: `Solar panel cleaning in Bishopbriggs by ${brandName()}. Pure water cleaning, bird proofing and panel checks for homes and businesses. Free quotes.`,
    intro: `${brandName()} cleans solar panels across Bishopbriggs and Lenzie, using purified water and soft brushes to lift dirt, lichen and bird droppings without chemicals. We also fit bird proofing mesh and carry out visual solar panel checks.`,
    nearby: ["Kirkintilloch", "Milngavie", "Bearsden"],
  },
  {
    slug: "kirkintilloch",
    name: "Kirkintilloch",
    title: "Solar Panel Cleaning in Kirkintilloch",
    description: `Solar panel cleaning in Kirkintilloch by ${brandName()}. Pure water cleaning, bird proofing and panel checks for homes and businesses. Free quotes.`,
    intro: `${brandName()} cleans solar panels across Kirkintilloch and Lenzie, using purified water and soft brushes to lift dirt, lichen and bird droppings without chemicals. We also fit bird proofing mesh and carry out visual solar panel checks.`,
    nearby: ["Bishopbriggs", "Cumbernauld", "Milngavie"],
  },
  {
    slug: "cumbernauld",
    name: "Cumbernauld",
    title: "Solar Panel Cleaning in Cumbernauld",
    description: `Solar panel cleaning in Cumbernauld by ${brandName()}. Pure water cleaning, bird proofing and panel checks for homes and businesses. Free quotes.`,
    intro: `${brandName()} cleans solar panels across Cumbernauld and Kilsyth, using purified water and soft brushes to lift dirt, lichen and bird droppings without chemicals. We also fit bird proofing mesh and carry out visual solar panel checks.`,
    nearby: ["Kirkintilloch", "Airdrie", "Coatbridge", "Bishopbriggs"],
  },
  {
    slug: "coatbridge",
    name: "Coatbridge",
    title: "Solar Panel Cleaning in Coatbridge",
    description: `Solar panel cleaning in Coatbridge by ${brandName()}. Pure water cleaning, bird proofing and panel checks for homes and businesses. Free quotes.`,
    intro: `${brandName()} cleans solar panels across Coatbridge and Monklands, using purified water and soft brushes to lift dirt, lichen and bird droppings without chemicals. We also fit bird proofing mesh and carry out visual solar panel checks.`,
    nearby: ["Airdrie", "Motherwell", "Cumbernauld"],
  },
  {
    slug: "airdrie",
    name: "Airdrie",
    title: "Solar Panel Cleaning in Airdrie",
    description: `Solar panel cleaning in Airdrie by ${brandName()}. Pure water cleaning, bird proofing and panel checks for homes and businesses. Free quotes.`,
    intro: `${brandName()} cleans solar panels across Airdrie and surrounding villages, using purified water and soft brushes to lift dirt, lichen and bird droppings without chemicals. We also fit bird proofing mesh and carry out visual solar panel checks.`,
    nearby: ["Coatbridge", "Cumbernauld", "Motherwell", "Hamilton"],
  },
  {
    slug: "rutherglen",
    name: "Rutherglen",
    title: "Solar Panel Cleaning in Rutherglen",
    description: `Solar panel cleaning in Rutherglen by ${brandName()}. Pure water cleaning, bird proofing and panel checks for homes and businesses. Free quotes.`,
    intro: `${brandName()} cleans solar panels across Rutherglen and Cambuslang, using purified water and soft brushes to lift dirt, lichen and bird droppings without chemicals. We also fit bird proofing mesh and carry out visual solar panel checks.`,
    nearby: ["East Kilbride", "Hamilton", "Clarkston"],
  },
  {
    slug: "clydebank",
    name: "Clydebank",
    title: "Solar Panel Cleaning in Clydebank",
    description: `Solar panel cleaning in Clydebank by ${brandName()}. Pure water cleaning, bird proofing and panel checks for homes and businesses. Free quotes.`,
    intro: `${brandName()} cleans solar panels across Clydebank and Dalmuir, using purified water and soft brushes to lift dirt, lichen and bird droppings without chemicals. We also fit bird proofing mesh and carry out visual solar panel checks.`,
    nearby: ["Bearsden", "Renfrew", "Milngavie"],
  },
  {
    slug: "renfrew",
    name: "Renfrew",
    title: "Solar Panel Cleaning in Renfrew",
    description: `Solar panel cleaning in Renfrew by ${brandName()}. Pure water cleaning, bird proofing and panel checks for homes and businesses. Free quotes.`,
    intro: `${brandName()} cleans solar panels across Renfrew and Braehead, using purified water and soft brushes to lift dirt, lichen and bird droppings without chemicals. We also fit bird proofing mesh and carry out visual solar panel checks.`,
    nearby: ["Paisley", "Clydebank", "Newton Mearns"],
  },
];

export const locations: LocationPage[] = locationEntries.map((entry) => ({
  ...entry,
  locationFaqs: makeLocationFaqs(entry.name),
}));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);

export const getNearbyLocationLinks = (location: LocationPage) =>
  location.nearby
    .map((name) => locations.find((loc) => loc.name === name))
    .filter((loc): loc is LocationPage => Boolean(loc));

export const getLocationPath = (slug: string) => `/locations/${slug}`;
