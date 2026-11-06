import { brandName } from "@/data/business";

export type ProjectPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  details: string;
  highlights: string[];
  serviceType: string;
  location: string;
  image: string;
  imageAlt: string;
};

export const projects: ProjectPage[] = [
  {
    slug: "how-we-clean-solar-panels",
    title: "How Solar Panel Cleaning Works: Pure Water Explained",
    description: `How we clean solar panels in Glasgow with purified water and soft brushes, why we avoid chemicals and pressure washers, and what to expect on the day.`,
    intro: `Most people have never seen solar panels being cleaned. Here is how we do it on homes across Glasgow, and why the method matters for your panels and warranty.`,
    details: `We use a water-fed pole system. Tap water is passed through filters and a resin vessel that strip out the dissolved minerals, leaving purified water. That water is pumped up a carbon-fibre pole to a soft brush head. The brush loosens dirt, pollen, lichen and bird droppings and the pure water rinses it away. Because there are no minerals or detergent left in the water, it dries without spots or streaks. The whole job is usually done from the ground, so nobody walks on your panels. We avoid pressure washers, which can force water into seals and damage anti-reflective coatings, and we never use household cleaning products, which can leave a film that attracts more dirt.`,
    highlights: [
      "Purified water dries spot-free with no detergents",
      "Soft brush heads protect anti-reflective coatings",
      "Usually cleaned from the ground with carbon-fibre poles",
      "No pressure washers that could damage seals",
    ],
    serviceType: "Cleaning Method",
    location: "Glasgow",
    image: "/gal_01.jpg",
    imageAlt: "Solar panel half cleaned with pure water showing before and after",
  },
  {
    slug: "how-often-clean-solar-panels-scotland",
    title: "How Often Should You Clean Solar Panels in Scotland?",
    description: `How often solar panels in Glasgow and the west of Scotland need cleaning, what affects it, and how to tell when yours are due.`,
    intro: `Scotland gets a lot of rain, so it is easy to assume solar panels clean themselves. In practice, most panels around Glasgow still benefit from a regular clean.`,
    details: `Rain washes off loose dust, but it does not remove the sticky film left by traffic, pollen and sea air, and it will not shift bird droppings or lichen. Rainwater also carries dirt down the glass and leaves it in a band along the bottom edge of each panel, where it shades the cells. For most homes, a clean every twelve months keeps panels in good shape. Panels under trees, near a busy road, close to farmland, near the coast or with birds around may need a clean every six months. The easiest way to tell is to compare your generation with the same month last year and to look at the panels from the street or an upstairs window. A grey film, dirty bottom edges or droppings are clear signs.`,
    highlights: [
      "Rain alone leaves a film and a dirty bottom edge",
      "Every 12 months suits most Glasgow homes",
      "Every 6 months near trees, roads, farms or birds",
      "Compare generation year on year to spot losses",
    ],
    serviceType: "Maintenance",
    location: "Glasgow",
    image: "/gal_05.jpg",
    imageAlt: "Clean solar panels on a Scottish house roof after rain",
  },
  {
    slug: "pigeons-under-solar-panels",
    title: "Pigeons Under Solar Panels: Signs, Risks and Fixes",
    description: `Why pigeons nest under solar panels, the problems they cause and how bird proofing mesh stops them, explained by ${brandName()} for Glasgow homeowners.`,
    intro: `If you can hear cooing above your bedroom or see twigs sticking out from under your solar panels, you are not alone. Pigeons under panels are one of the most common solar problems around Glasgow.`,
    details: `The gap under rooftop panels is sheltered, warm and out of reach of predators, which is exactly what pigeons look for. Once a pair moves in, others follow. Nesting material and droppings build up under the array, droppings run over the panels, roof and windows, gutters block, and birds can peck at or chew cabling. The fix is to clear out the nests and droppings, clean the panels and fit a mesh barrier around the full edge of the array. Good mesh is fixed to the panel frames with clips, so nothing is drilled into the panels or roof. Active nests with eggs or chicks are protected by law, so timing matters, and a specialist will advise on when work can go ahead.`,
    highlights: [
      "Noise, droppings, blocked gutters and cable damage",
      "Nests and debris cleared from under the array",
      "No-drill clip-on mesh around the full perimeter",
      "Work timed around active nests in line with the law",
    ],
    serviceType: "Bird Proofing",
    location: "Glasgow",
    image: "/gal_04.jpg",
    imageAlt: "Bird proofing mesh fitted around the edge of rooftop solar panels",
  },
  {
    slug: "commercial-solar-cleaning-guide",
    title: "Commercial Solar Panel Cleaning Guide for Glasgow Businesses",
    description: `What Glasgow businesses need to know about cleaning rooftop solar arrays: frequency, RAMS, access and keeping cleaning records. From ${brandName()}.`,
    intro: `Commercial solar arrays are a long-term investment, and output losses from dirt add up over a large roof. Here is what facilities managers and business owners should plan for.`,
    details: `Industrial and commercial roofs often soil faster than houses because of extraction vents, vehicle movements, nearby rail lines and gulls. A clean every six or twelve months is typical, with more frequent visits for heavily soiled sites. Before work starts you should expect risk assessments and method statements, a clear plan for roof access and edge protection, and an agreed time that avoids disruption to staff and customers. Pure water cleaning is the safest method for panel coatings and is what most manufacturers recommend. After each clean you should receive photos and a short note on anything spotted, such as damaged panels or vegetation, which helps with O&M records and warranty claims.`,
    highlights: [
      "Six or twelve-monthly cleans for most commercial sites",
      "RAMS, access planning and site inductions",
      "Pure water cleaning to protect panel coatings",
      "Photo records to support O&M and warranties",
    ],
    serviceType: "Commercial",
    location: "Greater Glasgow",
    image: "/gal_02.jpg",
    imageAlt: "Large commercial solar array on a warehouse roof near Glasgow",
  },
  {
    slug: "farm-solar-panel-cleaning",
    title: "Cleaning Ground-Mounted and Farm Solar Panels",
    description: `Why ground-mounted and farm solar arrays around Glasgow get dirty fast and how to keep them clean safely around livestock. A guide from ${brandName()}.`,
    intro: `Ground-mounted solar arrays on farms and estates usually need more attention than rooftop panels. Here is why, and how to look after them.`,
    details: `Field arrays sit low and are often angled less steeply than roof panels, so dust, soil, pollen and crop spray residue settle instead of running off. Birds use the frames as perches, and grass and weeds grow up in front of the bottom row and cast shade. Cleaning with purified water and soft brushes removes the build-up without leaving any chemicals in the field, which matters around livestock, burns and drains. Many farms time cleans after harvest or the main pollen season. Keeping the strip in front of the array strimmed is one of the simplest ways to protect output on the lowest row of panels.`,
    highlights: [
      "Low angles mean dirt settles rather than runs off",
      "Chemical-free cleaning safe around livestock",
      "Cleans timed around harvest and pollen seasons",
      "Keep vegetation clear of the bottom row",
    ],
    serviceType: "Ground-Mounted",
    location: "Lanarkshire",
    image: "/gal_03.jpg",
    imageAlt: "Ground-mounted solar panels being cleaned on a Scottish farm",
  },
  {
    slug: "solar-panel-output-dropped",
    title: "Why Has My Solar Panel Output Dropped?",
    description: `Common reasons solar panel output drops in Glasgow, from dirt and shading to pigeons and inverter faults, and what to check first. From ${brandName()}.`,
    intro: `Seeing lower numbers on your solar app can be worrying. Most of the time the cause is simple, and you can narrow it down with a few checks.`,
    details: `First, compare like with like: Scottish generation swings a lot between months and between sunny and overcast years, so compare the same month year on year. If output is still down, look at the panels. Dirt, droppings and lichen are the most common causes and are fixed with a clean. New shading from a growing tree or an extension next door can knock out a whole string of panels. Pigeons under the array can damage cables. If the inverter shows a fault light or error code, or one panel looks cracked or discoloured, contact your installer or an MCS-registered electrician. A visual inspection can rule out the simple causes first and give you photos to send if you do need an electrician.`,
    highlights: [
      "Compare the same month year on year",
      "Dirt, droppings and shading are the usual causes",
      "Check the inverter for fault lights or error codes",
      "Electrical faults need your installer or an MCS electrician",
    ],
    serviceType: "Inspections",
    location: "Glasgow",
    image: "/gal_06.jpg",
    imageAlt: "Checking a solar monitoring app with panels in the background",
  },
];


export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
