import { brandName, business, citiesLabel } from "@/data/business";

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  navTitle: string;
  parentCategorySlug: string | null;
  description: string;
  cardDescription: string;
  iconUrl: string;
  iconAlt: string;
  image: string;
  imageAlt: string;
  about: string;
  why: string;
  signsYouNeed: string;
  options: string;
  localContext: string;
  whatToExpect: string;
  whyChooseUs: string;
  benefits: string[];
  process: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

const serviceIconBase = "https://c.animaapp.com/mhqqhnhjBr0jWt/assets";

const cities = citiesLabel();
const brand = brandName();
const fullName = business.businessName;
const region = business.region;
const phone = business.phoneLocal;
const primary = business.primaryCity;
const secondary = business.secondaryCity;

export const services: ServicePage[] = [
  {
    slug: "domestic-solar-panel-cleaning",
    title: `Domestic Solar Panel Cleaning in ${cities}`,
    shortTitle: "Domestic Solar Panel Cleaning",
    navTitle: "Domestic Solar Panels",
    parentCategorySlug: "solar-panel-cleaning",
    description: `Domestic solar panel cleaning in ${cities} and ${region}. Pure water and soft brushes from the ground — no ladders on your panels, no chemicals. Free quotes.`,
    cardDescription: `Rooftop solar panels on houses, bungalows and flats cleaned with purified water and soft brushes. Safe, streak-free and done from the ground in most cases.`,
    iconUrl: `${serviceIconBase}/670f922acd8bf79374aa2c10_service-01.svg`,
    iconAlt: "Domestic solar panel cleaning service icon",
    image: "/gal_01.jpg",
    imageAlt: `Before and after domestic solar panel cleaning in ${cities}`,
    about: `${fullName} provides domestic solar panel cleaning for homes across ${region}. Rooftop panels slowly collect a film of traffic dirt, pollen, moss spores, lichen and bird droppings. Glasgow gets plenty of rain, but rainwater carries dust and minerals of its own and leaves the edges of each panel dirtier as it drains. We clean with a water-fed pole system: purified water with the minerals stripped out is pumped through a soft brush head on a carbon-fibre pole. The brush loosens the grime, the pure water rinses it away, and because there is nothing left in the water to dry on the glass, panels dry spot-free. No detergents, no pressure washers and no one standing on your panels.`,
    why: `Clean panels let more light reach the cells. How much generation you lose to dirt depends on the angle, location and how long since the last clean, but heavy soiling, bird droppings and lichen can cause a noticeable drop and create hot spots on individual cells. Regular cleaning also lets you spot damage early and often forms part of manufacturer care guidance.`,
    signsYouNeed: `A grey or green film across the glass, a dirty band along the bottom edge of each panel, bird droppings, lichen spots or moss growing in the frame are all clear signs. Many homeowners first notice when their inverter or monitoring app shows lower output than the same month last year on similar weather. If your panels sit under trees, near a busy road or close to the coast or the Clyde, they will tend to soil more quickly. Panels that have never been cleaned since installation are almost always due.`,
    options: `${brand} offers one-off cleans, cleans combined with bird proofing, and regular cleaning plans every six or twelve months. Most two-storey homes can be cleaned from the ground with our water-fed poles. Taller or harder-to-reach roofs are assessed on the day so the job is done safely. Conservatory and flat roof panels are cleaned in the same way. If you also have a pigeon problem under the panels, ask about our solar panel bird proofing service. Call ${phone} for a free quote.`,
    localContext: `We clean domestic solar panels in Glasgow's South Side, West End and East End, and in Bearsden, Milngavie, Newton Mearns, East Kilbride, Paisley, Hamilton and towns right across ${region}. Older sandstone villas, 1930s semis and new-build estates all have different roof access, and we plan each job to suit. If you are searching for solar panel cleaning near me in ${cities}, get in touch with your postcode and roughly how many panels you have.`,
    whatToExpect: `Send us your address, the number of panels and a photo if you can. We confirm a price and book a date. On the day we set up the pure water system, check the panels from the ground and clean each one with the soft brush and a full rinse. We work around plants, cars and neighbours, and nobody needs to be home if we can get to the panels. Afterwards we send before and after photos and point out anything we noticed, such as cracked glass, loose cables or pigeons getting in.`,
    whyChooseUs: `Solar panel cleaning is all we do, so the equipment, the method and the advice all come from cleaning solar panels. We use pure water and soft brushes only, never chemicals or pressure washers that could void a warranty. Prices are clear up front, quotes are free and you get photos of every job.`,
    benefits: [
      "Pure water and soft brushes: no detergents, no streaks and no scratches.",
      "Cleaned from the ground with water-fed poles where access allows.",
      "Before and after photos plus a quick visual check of each panel.",
      `Free quotes for homes across ${cities} and ${region}.`,
    ],
    process: [
      "Send your address, panel count and a photo for a free quote.",
      "We set up the pure water system and check the panels from the ground.",
      "Each panel is brushed with a soft head and rinsed with purified water.",
      "Panels dry spot-free and you receive before and after photos.",
    ],
    faq: [
      {
        question: `How much does solar panel cleaning cost in ${cities}?`,
        answer: `The price depends on the number of panels, roof height and how dirty they are. Send us your address and panel count and we will give you a fixed, free quote. Multi-panel and regular plan discounts are available.`,
      },
      {
        question: "Do you use chemicals or pressure washers?",
        answer: `No. We use purified water and soft brushes only. Chemicals can leave residue and pressure washers can damage seals and coatings, which may affect your panel warranty.`,
      },
      {
        question: "How often should solar panels be cleaned in Scotland?",
        answer: `Most homes benefit from a clean once or twice a year. Panels near trees, busy roads, farmland or with bird activity may need more frequent cleaning.`,
      },
      {
        question: `Is there solar panel cleaning near me in ${region}?`,
        answer: `Yes. ${brand} covers Glasgow and surrounding towns including Paisley, East Kilbride, Hamilton, Bearsden and Newton Mearns. Call ${phone} or use the contact form for a free quote.`,
      },
    ],
  },
  {
    slug: "commercial-solar-panel-cleaning",
    title: `Commercial Solar Panel Cleaning in ${cities}`,
    shortTitle: "Commercial Solar Panel Cleaning",
    navTitle: "Commercial Solar Panels",
    parentCategorySlug: "solar-panel-cleaning",
    description: `Commercial solar panel cleaning in ${cities} for offices, warehouses, schools and retail units. Pure water systems, RAMS supplied, scheduled cleans. Free site surveys.`,
    cardDescription: `Rooftop arrays on warehouses, offices, schools and retail units cleaned with pure water systems. Risk assessments supplied and scheduled cleaning available.`,
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Commercial solar panel cleaning service icon",
    image: "/gal_02.jpg",
    imageAlt: `Commercial rooftop solar panel cleaning on a warehouse near ${cities}`,
    about: `Commercial solar arrays are a business investment, and dirty panels mean lost generation and slower payback. ${fullName} cleans commercial solar panels on industrial units, warehouses, offices, schools, care homes, retail parks and farm buildings across ${region}. We use pure water fed through soft brushes, which removes traffic film, industrial dust, bird fouling and lichen without detergents or abrasives. Large flat-roof and pitched-roof arrays are cleaned in planned sections, working to your site rules, access arrangements and opening hours. Risk assessments and method statements are supplied before work starts.`,
    why: `On large arrays even a small percentage loss in output adds up to a real cost over a year. Regular cleaning protects generation, helps you spot damaged panels early and keeps your installation in line with manufacturer and O&M recommendations.`,
    signsYouNeed: `Generation figures falling compared with previous years, visible dirt lines along the panel edges, bird droppings on the glass, or panels near extraction vents, busy roads, rail lines or agricultural activity are all signs a commercial clean is due. Sites with gulls and pigeons on the roof soil especially quickly. If your array has not been cleaned since it was commissioned, a survey is the best place to start.`,
    options: `${brand} offers one-off commercial cleans, scheduled cleaning contracts, and combined cleaning with bird proofing and visual inspections. Work can be planned outside trading hours where needed. We provide RAMS, photos for your records and a short report after each visit. For very large or ground-mounted sites, see our ground-mounted solar panel cleaning service. Call ${phone} to arrange a free site survey.`,
    localContext: `We clean commercial solar panels on business parks and industrial estates across ${region}, including Hillington, Cambuslang, Eurocentral, Bellshill, Blantyre, Cumbernauld and East Kilbride, as well as schools and public buildings across the city. If you are looking for commercial solar panel cleaning near ${cities}, we can survey your site and give a fixed price.`,
    whatToExpect: `We start with a site survey or a look at drone or roof photos, then agree access, safe systems of work and a schedule. RAMS are sent over before the visit. On the day we report to site, set up the pure water system and clean the array section by section. Afterwards you receive before and after photos and notes on any damaged panels, loose cabling, vegetation or bird activity we spotted.`,
    whyChooseUs: `Businesses use ${brand} because we are solar specialists, easy to work with and clear on price. We turn up when agreed, follow your site rules and give you the paperwork your facilities team needs. Cleaning is done with pure water only to protect panel coatings and warranties.`,
    benefits: [
      "Pure water cleaning for large rooftop arrays of any size.",
      "RAMS supplied and work planned around your site and hours.",
      "Before and after photos and a short visit report for your records.",
      `Scheduled cleaning contracts across ${cities} and ${region}.`,
    ],
    process: [
      "Free site survey or photo review to scope the array and access.",
      "Agree price, schedule and safe system of work; RAMS issued.",
      "Array cleaned in planned sections with pure water and soft brushes.",
      "Photos and a short report on panel condition after every visit.",
    ],
    faq: [
      {
        question: "Do you provide RAMS for commercial solar panel cleaning?",
        answer: `Yes. Risk assessments and method statements are provided before work begins, and we follow your site induction and access procedures.`,
      },
      {
        question: "Can you clean outside business hours?",
        answer: `Yes. Early mornings, evenings and weekend cleans can be arranged so work does not disrupt staff, customers or deliveries.`,
      },
      {
        question: `Do you offer commercial solar panel cleaning contracts near me in ${region}?`,
        answer: `Yes. ${brand} offers scheduled commercial cleaning across ${region}. Contact us for a free survey and fixed price.`,
      },
    ],
  },
  {
    slug: "ground-mounted-solar-panel-cleaning",
    title: `Ground-Mounted & Farm Solar Panel Cleaning in ${cities}`,
    shortTitle: "Ground-Mounted Solar Cleaning",
    navTitle: "Ground-Mounted & Farms",
    parentCategorySlug: "solar-panel-cleaning",
    description: `Ground-mounted and farm solar panel cleaning around ${cities} and ${region}. Field and garden arrays cleaned with pure water, safe near livestock. Free quotes.`,
    cardDescription: `Field, farm and garden solar arrays cleaned with pure water and soft brushes. Ideal for arrays that collect agricultural dust, pollen and bird fouling.`,
    iconUrl: `${serviceIconBase}/670f922a0e27a271e441091e_service-03.svg`,
    iconAlt: "Ground-mounted solar panel cleaning service icon",
    image: "/gal_03.jpg",
    imageAlt: `Ground-mounted solar panel array being cleaned on a farm near ${cities}`,
    about: `Ground-mounted solar panels on farms, smallholdings, estates and large gardens often get dirtier than rooftop panels. They sit closer to dust, soil, pollen, crop spraying and grazing animals, and the low angle means dirt settles rather than running off. ${fullName} cleans ground-mounted and field arrays around ${region} using pure water and soft brushes. The method is gentle on the glass and frames, uses no chemicals near livestock or watercourses, and leaves panels spot-free. We can also clear light vegetation from the front edge of the array where it is starting to shade the bottom row.`,
    why: `Low-angled ground arrays lose output faster to dirt and shading than steep rooftop panels. Keeping them clean protects generation and payback, especially on farm systems that power sheds, dairies or grain dryers.`,
    signsYouNeed: `A visible layer of dust or soil on the panels, a dirty bottom edge where water pools, bird droppings, lichen growth, or grass and weeds creeping up in front of the lowest row all suggest the array needs attention. A drop in generation compared with the same period last year is another clear sign. Arrays near tracks, arable fields or livestock tend to need more frequent cleaning.`,
    options: `${brand} offers one-off cleans and seasonal cleaning plans for ground-mounted arrays, timed around harvest, spraying and pollen seasons where helpful. We can bring our own pure water supply for remote sites. Light strimming in front of the array and a visual check of frames and cabling can be added. Call ${phone} to discuss your site.`,
    localContext: `We clean farm and ground-mounted solar arrays across the countryside around ${cities}, including East Renfrewshire, South Lanarkshire, North Lanarkshire, East Dunbartonshire and the Campsie Fells. Remote sites are no problem. If you are searching for farm solar panel cleaning near ${cities}, send us the location and approximate number of panels.`,
    whatToExpect: `We agree access, parking and any livestock or biosecurity requirements in advance. On the day we set up our pure water supply, clean the array row by row with soft brushes, and rinse each panel fully. Any vegetation work agreed is done at the same time. You receive before and after photos and notes on anything that needs attention, such as damaged panels or loose cable runs.`,
    whyChooseUs: `Rural customers choose ${brand} because we turn up prepared for farm sites, respect biosecurity and access rules, and use only pure water near animals and watercourses. Clear prices, free quotes and photo reports come as standard.`,
    benefits: [
      "Chemical-free pure water cleaning safe for livestock and watercourses.",
      "Own water supply available for remote field arrays.",
      "Optional clearing of vegetation shading the bottom row of panels.",
      `Seasonal cleaning plans for farms around ${cities}.`,
    ],
    process: [
      "Agree site access, biosecurity and timing around farm work.",
      "Set up the pure water system and inspect the array.",
      "Clean and rinse each row with soft brushes and purified water.",
      "Send before and after photos and any maintenance notes.",
    ],
    faq: [
      {
        question: "Do you need a water supply on site?",
        answer: `Not necessarily. We can bring our own purified water for remote arrays. If there is a tap nearby, we can filter it on site.`,
      },
      {
        question: "Is pure water cleaning safe near livestock?",
        answer: `Yes. We use purified water only, with no detergents or chemicals, so there is nothing harmful left in the field or running into drains and burns.`,
      },
      {
        question: `Do you clean ground-mounted solar panels near me in ${region}?`,
        answer: `Yes. ${brand} cleans field, farm and garden solar arrays across ${region}. Contact us with your location for a free quote.`,
      },
    ],
  },
  {
    slug: "solar-panel-maintenance-plans",
    title: `Solar Panel Maintenance Plans in ${cities}`,
    shortTitle: "Solar Panel Maintenance Plans",
    navTitle: "Maintenance Plans",
    parentCategorySlug: "solar-panel-cleaning",
    description: `Solar panel maintenance plans in ${cities} — scheduled cleaning every 6 or 12 months with photo checks and reminders. Lower price per visit. Free quotes.`,
    cardDescription: `Regular solar panel cleaning every six or twelve months with photo checks and automatic booking reminders, at a lower price per visit.`,
    iconUrl: `${serviceIconBase}/670f922ca00205c2937593ea_service-04.svg`,
    iconAlt: "Solar panel maintenance plan service icon",
    image: "/gal_06.jpg",
    imageAlt: `Checking solar panel output during a maintenance visit in ${cities}`,
    about: `Solar panels work best when they are kept clean, not just cleaned once. ${fullName} offers solar panel maintenance plans for homes and businesses across ${region}, with cleans every six or twelve months. We book the visit, let you know when we are coming and do the work. Each visit includes a pure water clean, a visual check of the panels, frames and visible cabling from the ground, and before and after photos. Plan customers get a lower price per visit than one-off cleans and priority booking if something like a pigeon problem needs sorting between visits.`,
    why: `Little and often keeps dirt from building up into stubborn lichen and droppings, protects output across the year, and means problems such as cracked glass, shading from new tree growth or bird nests are spotted early instead of after months of lost generation.`,
    signsYouNeed: `If you have had your panels cleaned once and noticed the difference, or you know they get dirty quickly because of trees, a busy road, birds or farmland nearby, a plan saves you having to remember to book. It also suits landlords, housing associations and businesses that want maintenance handled and recorded without chasing it.`,
    options: `Choose a twelve-month plan, which suits most homes, or a six-month plan, which suits panels that soil quickly and commercial sites. Plans can include bird proofing checks and a short annual condition note. There is no long tie-in and you can change or cancel at any time. Call ${phone} to set up a plan.`,
    localContext: `Maintenance plan customers are spread across ${region}, from Glasgow tenements and West End villas to new-build estates in Newton Mearns, Bishopbriggs and East Kilbride, plus commercial sites across Lanarkshire. If you want regular solar panel cleaning near ${cities}, a plan is the simplest way to keep on top of it.`,
    whatToExpect: `After your first clean we agree a frequency and price. We then contact you ahead of each visit, clean the panels, carry out a visual check and send photos the same day. If we spot anything that needs attention, we explain it clearly and quote separately. Nothing extra is done without your agreement.`,
    whyChooseUs: `Plans with ${brand} are straightforward: a fair fixed price, reminders so you do not need to think about it, photo records and no long contracts. Pure water and soft brushes are used every visit to protect your panels and warranty.`,
    benefits: [
      "Cleaning every six or twelve months, booked for you.",
      "Lower price per visit than one-off cleans.",
      "Visual check and before and after photos every visit.",
      "No long tie-in — change or cancel at any time.",
    ],
    process: [
      "Book a first clean and agree the plan frequency.",
      "We contact you before each scheduled visit.",
      "Panels are cleaned and visually checked every visit.",
      "Photos and any notes are sent to you the same day.",
    ],
    faq: [
      {
        question: "Is there a minimum contract on a maintenance plan?",
        answer: `No. Plans run visit by visit with no long tie-in. You can change the frequency or cancel at any time.`,
      },
      {
        question: "Do I need to be home for plan visits?",
        answer: `Usually not. If we can access the panels and a water supply, or bring our own, we can clean while you are out and send photos afterwards.`,
      },
      {
        question: `Do you offer solar panel maintenance near me in ${region}?`,
        answer: `Yes. ${brand} runs maintenance plans for homes and businesses across ${region}. Contact us to set one up.`,
      },
    ],
  },
  {
    slug: "solar-panel-bird-proofing",
    title: `Solar Panel Bird Proofing in ${cities}`,
    shortTitle: "Solar Panel Bird Proofing",
    navTitle: "Bird Proofing",
    parentCategorySlug: "solar-panel-protection",
    description: `Solar panel bird proofing in ${cities}. Pigeon nests and droppings removed, panels cleaned and mesh fitted with no drilling. Stops noise, mess and damage. Free quotes.`,
    cardDescription: `Pigeon nests and droppings cleared from under your panels, then discreet mesh fitted around the array with no drilling into panels or roof.`,
    iconUrl: `${serviceIconBase}/670f922acd8bf79374aa2c10_service-01.svg`,
    iconAlt: "Solar panel bird proofing service icon",
    image: "/gal_04.jpg",
    imageAlt: `Pigeon-proofing mesh fitted around solar panels in ${cities}`,
    about: `The gap between rooftop solar panels and the roof is warm, dry and sheltered, which makes it a favourite nesting spot for pigeons. Once they move in, you get scratching and cooing noise, droppings over the panels, roof and windows, blocked gutters and potential damage to cabling. ${fullName} provides solar panel bird proofing across ${region}. We clear out nesting material and droppings from under the panels, clean the panels themselves, and fit a strong galvanised or PVC-coated mesh around the edge of the array. The mesh is fixed with specialist clips that attach to the panel frames — no drilling into the panels or the roof, so your installation and warranty are not affected.`,
    why: `Bird proofing stops the noise, mess and smell, protects cables and roof coverings from damage, and stops droppings fouling the panels and cutting generation. It is far cheaper to proof the panels once than to keep cleaning up after nesting birds.`,
    signsYouNeed: `Pigeons flying in and out from under the panels, cooing or scratching noises above bedrooms, twigs and nesting material poking out from the edge of the array, droppings running down the roof, windows or driveway, and gutters blocked with debris are all classic signs. Panels with heavy droppings on the glass are another giveaway.`,
    options: `${brand} offers full bird proofing with nest removal, panel clean and mesh installation, as well as panel cleaning only where birds are not yet an issue. We can also clear gutters below the array of nesting debris. Black mesh is used to blend in with the panels. Call ${phone} or send a photo of the roof for a free quote.`,
    localContext: `Pigeon problems under solar panels are common right across ${region}, especially near town centres, parks, railway lines and the Clyde. We bird proof solar panels in Glasgow, Paisley, Clydebank, Rutherglen, Coatbridge, Motherwell, Hamilton and surrounding towns. If you need solar panel bird proofing near me in ${cities}, we can usually quote from a photo.`,
    whatToExpect: `We check for active nests first; if birds are nesting with eggs or chicks, the work is timed to stay within wildlife law. On the day, nesting material and droppings are cleared from beneath the panels, the area is sanitised, panels are cleaned with pure water, and the mesh is fitted tightly around the full perimeter. You get before and after photos showing the finished job.`,
    whyChooseUs: `Because we specialise in solar panels, we know how to proof them without drilling, damaging cables or affecting your warranty. The mesh is neat, strong and close to invisible from the street. Free quotes, clear pricing and photos of every job.`,
    benefits: [
      "Nests, droppings and debris cleared from under the panels.",
      "No-drill clip system — no damage to panels, roof or warranty.",
      "Neat black mesh that blends in with the array.",
      `Free quotes from a photo across ${cities} and ${region}.`,
    ],
    process: [
      "Check for active nests and agree the right time to proof.",
      "Clear nesting material and droppings and sanitise the area.",
      "Clean the panels with pure water and soft brushes.",
      "Fit mesh around the full perimeter with no-drill clips.",
    ],
    faq: [
      {
        question: "Will bird proofing damage my solar panels or void my warranty?",
        answer: `No. The mesh is held on with clips that attach to the panel frame. Nothing is drilled into the panels or roof.`,
      },
      {
        question: "Can you remove pigeons if they are nesting?",
        answer: `Wild birds and active nests are protected by law. If there are eggs or chicks, we will advise on timing and proof the panels once the nest is no longer active.`,
      },
      {
        question: `How much is solar panel bird proofing near me in ${cities}?`,
        answer: `It depends on the size and layout of the array. Send a photo and your postcode and we will give you a free fixed quote.`,
      },
    ],
  },
  {
    slug: "solar-panel-inspections",
    title: `Solar Panel Inspections in ${cities}`,
    shortTitle: "Solar Panel Inspections",
    navTitle: "Solar Panel Checks",
    parentCategorySlug: "solar-panel-protection",
    description: `Visual solar panel inspections in ${cities}. We check panels, frames, visible cables, shading and bird activity and send a photo report. Often combined with a clean.`,
    cardDescription: `A visual check of panels, frames, visible cabling, shading and bird activity with a photo report, ideal alongside a clean or when output drops.`,
    iconUrl: `${serviceIconBase}/670f922a0e27a271e441091e_service-03.svg`,
    iconAlt: "Solar panel inspection service icon",
    image: "/gal_05.jpg",
    imageAlt: `Clean solar panels on a house in ${cities} after an inspection`,
    about: `If your solar output has dropped and you are not sure why, a visual inspection is a sensible first step. ${fullName} carries out solar panel inspections across ${region}, checking the condition of the glass, frames, visible cabling and mounting, looking for shading from new tree growth or nearby buildings, and checking for bird activity under the array. We compare what we see with your inverter or app readings where you can share them. You get a clear photo report explaining what we found in plain English. Inspections are visual and do not replace electrical testing by an MCS-registered installer, but they quickly show whether dirt, damage, shading or birds are the likely cause.`,
    why: `Many output problems are simple: dirt, droppings, a new branch casting shade, or a pigeon nest. An inspection pinpoints the cause so you only pay for the fix you actually need, and gives you photo evidence if you need to contact your installer or warranty provider.`,
    signsYouNeed: `Lower generation than the same month last year, an inverter fault light, visible cracks or discolouration on a panel, cables hanging loose, birds living under the array or new shading from trees all justify an inspection. It is also useful when buying or selling a house with solar panels, or if your panels have not been looked at since they were installed.`,
    options: `Inspections can be booked on their own or added to a solar panel clean for a small extra cost. Where we find dirt or birds, we can clean or bird proof on the same visit if you agree. For electrical faults we recommend contacting your installer or an MCS-registered electrician and give you photos to send them. Call ${phone} to book.`,
    localContext: `We inspect solar panels on homes and businesses across ${region}, including Glasgow, Bearsden, Milngavie, Giffnock, Clarkston, Hamilton, Motherwell and Cumbernauld. If you are searching for a solar panel check near me in ${cities}, get in touch with your postcode and what you have noticed.`,
    whatToExpect: `Tell us what you have noticed and share any inverter or app readings. We visit, inspect the array from the ground and from safe access points, photograph the panels and anything of concern, and explain the findings. A short photo report follows by email, with clear next steps and a price for any cleaning or bird proofing that would help.`,
    whyChooseUs: `${brand} gives honest, plain-English advice about solar panels. We will tell you if the panels just need a clean, if birds are the issue, or if you need to call your installer. No hard sell, free quotes and clear photo reports.`,
    benefits: [
      "Visual check of glass, frames, visible cabling and mounting.",
      "Shading and bird activity assessed and photographed.",
      "Plain-English photo report with clear next steps.",
      "Can be combined with cleaning or bird proofing on the same visit.",
    ],
    process: [
      "Tell us what you have noticed and share output readings if possible.",
      "Visual inspection of the array and surroundings.",
      "Photos taken of panels and any issues found.",
      "Photo report sent with recommended next steps.",
    ],
    faq: [
      {
        question: "Do you carry out electrical testing on solar panels?",
        answer: `No. Our inspections are visual. If we find signs of an electrical fault we will recommend contacting your installer or an MCS-registered electrician and provide photos.`,
      },
      {
        question: "Why have my solar panels stopped producing as much?",
        answer: `Common causes include dirt and droppings, new shading from trees, bird nests and, less often, damaged panels or inverter faults. An inspection helps narrow it down quickly.`,
      },
      {
        question: `Can I book a solar panel check near me in ${region}?`,
        answer: `Yes. ${brand} carries out visual solar panel inspections across ${region}. Contact us with your postcode to book.`,
      },
    ],
  },
  {
    slug: "free-quotes",
    title: `Free Solar Panel Cleaning Quotes in ${cities}`,
    shortTitle: "Free Quotes",
    navTitle: "Free Quotes",
    parentCategorySlug: null,
    description: `Get a free quote for solar panel cleaning, bird proofing or a solar panel check in ${cities} and ${region}. Send your postcode and panel count for a fixed price.`,
    cardDescription: `Send your postcode, number of panels and a photo for a free, fixed-price quote for solar panel cleaning, bird proofing or inspections.`,
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Free quote service icon",
    image: "/van.jpg",
    imageAlt: `${fullName} van on a residential street in ${cities}`,
    about: `Getting a price for solar panel cleaning in ${cities} should be quick. ${fullName} gives free, no-obligation quotes for domestic, commercial and ground-mounted solar panel cleaning, maintenance plans, bird proofing and solar panel inspections across ${region}. In most cases we can quote from your postcode, the number of panels and a photo of the roof taken from the street or garden. Larger commercial and farm sites may need a short survey first. Prices are fixed before we start, so there are no surprises on the day.`,
    why: `A free quote tells you exactly what the job involves and what it costs before you commit, so you can decide whether a one-off clean, a plan or bird proofing makes sense for your panels.`,
    signsYouNeed: `If your panels look dirty, your output has dropped, pigeons have moved in under the array or you simply cannot remember the last time the panels were cleaned, a quick quote is the easiest first step. It is also worth asking if you are moving into a house with solar panels and want them checked and cleaned.`,
    options: `We quote for every service on this site: domestic solar panel cleaning, commercial solar panel cleaning, ground-mounted and farm solar cleaning, maintenance plans, bird proofing and visual inspections. Combined quotes, such as a clean plus bird proofing, are welcome and usually work out cheaper than booking separately. Call ${phone}, send a WhatsApp or use the contact form.`,
    localContext: `We quote for properties across ${cities} and ${region}, including Paisley, Renfrew, Clydebank, Bearsden, Milngavie, Bishopbriggs, Kirkintilloch, Cumbernauld, Coatbridge, Airdrie, Motherwell, Hamilton, East Kilbride, Rutherglen, Giffnock and Newton Mearns. If you are nearby, get in touch and we will confirm coverage.`,
    whatToExpect: `Send your postcode, the number of panels, the type of roof and a photo if you have one. We reply with a fixed price and available dates. Once you are happy, we book the visit and confirm the day before. Nothing is charged until the work is done.`,
    whyChooseUs: `Quick replies, fixed prices and no pressure. ${brand} specialises in solar panels, so the advice you get is specific to your system, not a general window cleaning add-on.`,
    benefits: [
      "Free, fixed-price quotes with no obligation.",
      "Most quotes given from a postcode, panel count and photo.",
      `Coverage across ${cities} and ${region}.`,
      "Combined quotes for cleaning plus bird proofing.",
    ],
    process: [
      "Send your postcode, panel count and a photo.",
      "Receive a fixed price and available dates.",
      "Book your visit and get a reminder the day before.",
      "Work completed and photos sent before you pay.",
    ],
    faq: [
      {
        question: "What details do you need for a quote?",
        answer: `Your postcode, roughly how many panels you have, whether they are on a pitched or flat roof, and a photo if possible.`,
      },
      {
        question: `Which areas do you cover around ${cities}?`,
        answer: `${brand} covers Glasgow and surrounding towns across Renfrewshire, Dunbartonshire, Lanarkshire and East Renfrewshire.`,
      },
      {
        question: `How do I get a free solar panel cleaning quote near me in ${cities}?`,
        answer: `Call ${phone}, send a WhatsApp message or use the contact form on this site. We will reply with a fixed, no-obligation price.`,
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

export const getServicesForNav = () =>
  services.filter((service) => service.slug !== "free-quotes");
