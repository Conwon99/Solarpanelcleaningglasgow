import { brandName, business } from "@/data/business";
import { categories, getServicesForCategory, type ServiceCategory } from "@/data/categories";
import { locations, getNearbyLocationLinks, type LocationPage } from "@/data/locations";
import { truncateMeta } from "@/data/site";

export type LocationServiceFaq = {
  question: string;
  answer: string;
};

export type LocationServicePage = {
  locationSlug: string;
  categorySlug: string;
  title: string;
  h1: string;
  metaDescription: string;
  intro: string;
  localParagraph: string;
  bodyParagraph: string;
  faqs: LocationServiceFaq[];
  location: LocationPage;
  category: ServiceCategory;
};

type CategoryContentConfig = {
  slug: string;
  serviceName: string;
  serviceNameLower: string;
  titleSuffix: string;
  contractorPhrase: string;
  nearMePhrase: string;
  metaTemplate: (displayName: string) => string;
  introTemplate: (town: string) => string;
  localTemplate: (town: string, nearby: string[]) => string;
  bodyTemplate: (town: string) => string;
  faqTemplates: (town: string) => LocationServiceFaq[];
};

const categoryConfigs: CategoryContentConfig[] = [
  {
    slug: "solar-panel-cleaning",
    serviceName: "Solar Panel Cleaning",
    serviceNameLower: "solar panel cleaning",
    titleSuffix: "Solar Panel Cleaning",
    contractorPhrase: "solar panel cleaner",
    nearMePhrase: "solar panel cleaning near me",
    metaTemplate: (displayName) =>
      truncateMeta(
        `Solar panel cleaning in ${displayName} by ${brandName()}. Pure water and soft brushes for domestic, commercial and farm panels. Free quotes across ${business.region}.`,
      ),
    introTemplate: (town) =>
      `${brandName()} provides solar panel cleaning in ${town} for homes, businesses and farms. We clean with purified water and soft brushes on carbon-fibre poles, so panels come up spot-free without chemicals, pressure washers or anyone standing on the glass.`,
    localTemplate: (town, nearby) =>
      `Solar panels in ${town} pick up traffic film, pollen, lichen and bird droppings that rain alone won't wash off, and dirty panels can produce noticeably less electricity. If you are searching for solar panel cleaning near me or a solar panel cleaner near ${town}, ${brandName()} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `Every clean in ${town} includes a full pure water wash and rinse, a quick visual check of each panel from the ground, and before and after photos sent to you. One-off cleans and six or twelve-monthly maintenance plans are available. Contact ${brandName()} for a free, fixed-price solar panel cleaning quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `How much is solar panel cleaning in ${town}?`,
        answer: `It depends on the number of panels and how easy they are to reach. Send your ${town} postcode, panel count and a photo and ${brandName()} will reply with a free fixed price.`,
      },
      {
        question: `Do you clean commercial solar panels in ${town}?`,
        answer: `Yes. ${brandName()} cleans rooftop arrays on business units, offices, schools and farms in ${town}, with RAMS supplied and scheduled cleaning available.`,
      },
      {
        question: `How often should solar panels in ${town} be cleaned?`,
        answer: `Most homes in ${town} benefit from a clean once or twice a year. Panels near trees, roads, farmland or with bird activity may need cleaning more often.`,
      },
    ],
  },
  {
    slug: "solar-panel-protection",
    serviceName: "Solar Panel Bird Proofing",
    serviceNameLower: "solar panel bird proofing",
    titleSuffix: "Solar Panel Bird Proofing",
    contractorPhrase: "solar panel bird proofing specialist",
    nearMePhrase: "solar panel bird proofing near me",
    metaTemplate: (displayName) =>
      truncateMeta(
        `Solar panel bird proofing in ${displayName}. ${brandName()} clears pigeon nests, cleans panels and fits mesh with no drilling. Free quotes across ${business.region}.`,
      ),
    introTemplate: (town) =>
      `${brandName()} provides solar panel bird proofing in ${town}. We clear pigeon nests and droppings from under your panels, clean the array with pure water and fit a neat black mesh around the edge with no-drill clips.`,
    localTemplate: (town, nearby) =>
      `Pigeons nesting under solar panels are a common problem in ${town}, causing noise, mess, blocked gutters and damaged cables. If you need solar panel bird proofing near ${town}, ${brandName()} covers ${town} and surrounding areas including ${nearby.slice(0, 3).join(", ") || "nearby towns"}. Visual solar panel checks can be added on the same visit.`,
    bodyTemplate: (town) =>
      `The mesh fixes to the panel frames with specialist clips, so nothing is drilled into your panels or roof and your warranty is unaffected. Active nests are handled in line with wildlife law. Send a photo of your roof in ${town} and ${brandName()} can usually give you a free quote the same day.`,
    faqTemplates: (town) => [
      {
        question: `Do you stop pigeons nesting under solar panels in ${town}?`,
        answer: `Yes. ${brandName()} clears out nests and droppings, cleans the panels and fits mesh around the full perimeter so birds cannot get back under the array.`,
      },
      {
        question: `Will bird proofing damage my solar panels in ${town}?`,
        answer: `No. The mesh is fixed with clips that attach to the panel frames. There is no drilling into the panels or roof.`,
      },
      {
        question: `How do I get a bird proofing quote in ${town}?`,
        answer: `Send a photo of the roof and your ${town} postcode by WhatsApp, phone or the contact form. Quotes are free and fixed.`,
      },
    ],
  },
];

const buildLocationServicePage = (
  location: LocationPage,
  config: CategoryContentConfig,
  category: ServiceCategory,
): LocationServicePage => {
  const town = location.name;
  const displayName = location.shortName ?? location.name;
  const nearbyNames = location.nearby;

  return {
    locationSlug: location.slug,
    categorySlug: config.slug,
    title: `${config.titleSuffix} in ${displayName} | ${brandName()}`,
    h1: `${config.titleSuffix} in ${displayName}`,
    metaDescription: config.metaTemplate(displayName),
    intro: config.introTemplate(town),
    localParagraph: config.localTemplate(town, nearbyNames),
    bodyParagraph: config.bodyTemplate(town),
    faqs: config.faqTemplates(town),
    location,
    category,
  };
};

export const locationServicePages: LocationServicePage[] = locations.flatMap((location) =>
  categoryConfigs.map((config) => {
    const category = categories.find((item) => item.slug === config.slug)!;
    return buildLocationServicePage(location, config, category);
  }),
);

export const getLocationServicePage = (locationSlug: string, categorySlug: string) =>
  locationServicePages.find(
    (page) => page.locationSlug === locationSlug && page.categorySlug === categorySlug,
  );

export const getLocationServicePagesForLocation = (locationSlug: string) =>
  locationServicePages.filter((page) => page.locationSlug === locationSlug);

export const getLocationServicePagesForCategory = (categorySlug: string) =>
  locationServicePages.filter((page) => page.categorySlug === categorySlug);

export const getNearbyLocationServiceLinks = (
  page: LocationServicePage,
): Array<{ name: string; href: string }> => {
  const nearby = getNearbyLocationLinks(page.location);
  return nearby.slice(0, 4).map((loc) => ({
    name: loc.name,
    href: `/locations/${loc.slug}/${page.categorySlug}`,
  }));
};

export const getLocationServicePath = (locationSlug: string, categorySlug: string) =>
  `/locations/${locationSlug}/${categorySlug}`;

export const getServicesForLocationServicePage = (page: LocationServicePage) =>
  getServicesForCategory(page.category);
