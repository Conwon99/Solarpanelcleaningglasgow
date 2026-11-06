import { brandName, business, citiesLabel } from "@/data/business";
import { services, type ServicePage } from "@/data/services";

export type ServiceCategory = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  localParagraph: string;
  image: string;
  imageAlt: string;
  serviceSlugs: string[];
};

export const categories: ServiceCategory[] = [
  {
    slug: "solar-panel-cleaning",
    name: "Solar Panel Cleaning",
    title: `Solar Panel Cleaning Services in ${citiesLabel()}`,
    description: `Domestic, commercial and ground-mounted solar panel cleaning in ${citiesLabel()} and across ${business.region}. Pure water, soft brushes, no harsh chemicals. Free quotes.`,
    intro: `${brandName()} cleans rooftop, commercial and ground-mounted solar panels across ${business.region}. We use purified water fed through carbon-fibre poles and soft brushes, so panels come up spotless without detergents, scratches or anyone walking on the glass.`,
    localParagraph: `Glasgow's damp climate, tree cover, traffic film and seagulls all leave a layer of grime on solar panels that rain alone won't shift. ${brandName()} works across ${business.region}, from city-centre roofs to farms on the edge of Lanarkshire, with regular cleaning plans to keep generation up.`,
    image: "/gal_01.jpg",
    imageAlt: "Solar panel cleaning with a water-fed pole on a Glasgow house roof",
    serviceSlugs: [
      "domestic-solar-panel-cleaning",
      "commercial-solar-panel-cleaning",
      "ground-mounted-solar-panel-cleaning",
      "solar-panel-maintenance-plans",
    ],
  },
  {
    slug: "solar-panel-protection",
    name: "Bird Proofing & Panel Checks",
    title: `Solar Panel Protection in ${citiesLabel()}: Bird Proofing & Checks`,
    description: `Solar panel bird proofing and pigeon mesh in ${citiesLabel()} and ${business.region}. Nests cleared, panels cleaned, mesh fitted with no drilling. Solar panel checks too.`,
    intro: `Pigeons love the sheltered gap under rooftop solar panels. ${brandName()} clears out nests and droppings, cleans the panels and fits a discreet mesh guard with no drilling into panels or roof. We also offer visual solar panel inspections to spot damage and shading issues early.`,
    localParagraph: `Pigeon problems under solar panels are common across ${business.region}, especially near town centres, parks and rivers. ${brandName()} serves homes across Glasgow, Lanarkshire, Renfrewshire and East Dunbartonshire with bird proofing that keeps birds out for good.`,
    image: "/gal_04.jpg",
    imageAlt: "Bird proofing mesh fitted around rooftop solar panels in Glasgow",
    serviceSlugs: ["solar-panel-bird-proofing", "solar-panel-inspections"],
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug);

export const getCategoryForService = (serviceSlug: string) =>
  categories.find((category) => category.serviceSlugs.includes(serviceSlug));

export const getServicesForCategory = (category: ServiceCategory): ServicePage[] =>
  category.serviceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is ServicePage => Boolean(service));

export const getRelatedServices = (serviceSlug: string): ServicePage[] => {
  const category = getCategoryForService(serviceSlug);
  if (!category) return [];
  return getServicesForCategory(category).filter((service) => service.slug !== serviceSlug);
};

export const getFormServiceOptions = (): string[] => [
  ...categories.map((category) => category.name),
  ...services.filter((service) => service.slug !== "free-quotes").map((service) => service.shortTitle),
  "Other / Not Sure",
];
