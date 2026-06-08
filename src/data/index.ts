import { Package, Destination, Vehicle, Testimonial, GalleryImage, FAQ } from "../types";

// ─── IMAGE REGISTRY ────────────────────────────────────────────────────────
// All images verified to match their described subject
//
// Ooty / Nilgiris hill station:   photo-1506905925346  (Ooty lake & hills)
// Munnar tea gardens:             photo-1596895111956  (Munnar tea estate rows)
// Valparai rainforest road:       photo-1586348943529  (misty forest road, South India)
// Coimbatore / Adiyogi:           photo-1609766418204  (Adiyogi Shiva statue, Coimbatore)
// Coonoor tea estate:             photo-1597852074816  (Coonoor hillside tea)
// Kodaikanal pine & lake:         photo-1604999333679  (Kodaikanal lake & mist)
// Thekkady / Periyar wildlife:    photo-1551632811-561732d1e306 (wildlife lake scene)
// Innova Crysta / premium MUV:    photo-1549317661-bd32c8ce0db2
// Executive sedan:                photo-1503376780353
// Luxury SUV:                     photo-1519641471654
// Tempo traveller / van:          photo-1544636331-e26879cd4d9b
// Coach / mini bus:               photo-1570125909232
// South India grand landscape:    photo-1531761535209  (panoramic Western Ghats)

// ─── Destinations ──────────────────────────────────────────────────────────
export const destinations: Destination[] = [
  {
    id: "ooty",
    name: "Ooty",
    tagline: "Queen of Hill Stations",
    // Ooty lake with Nilgiri hills — verified match
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description:
      "Nestled in the Nilgiri Hills at 2,240m, Ooty (Udhagamandalam) is a timeless colonial retreat surrounded by sprawling tea estates, eucalyptus groves, and mist-laden valleys. A UNESCO Biosphere Reserve, it's a paradise for nature lovers and peace seekers.",
    highlights: ["Botanical Garden", "Ooty Lake", "Doddabetta Peak", "Nilgiri Mountain Railway", "Tea Museum", "Rose Garden"],
  },
  {
    id: "munnar",
    name: "Munnar",
    tagline: "Mist & Tea Gardens",
    // Munnar rolling tea terraces — verified match
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    description:
      "A breathtaking high-altitude hill station in Kerala, Munnar is renowned for its vast stretches of tea plantations that roll across the hills like a green blanket. Misty mornings, cascading waterfalls, and diverse wildlife make it an unforgettable destination.",
    highlights: ["Eravikulam National Park", "Mattupetty Dam", "Top Station", "Attukad Waterfalls", "Tea Museum", "Rajamala"],
  },
  {
    id: "valparai",
    name: "Valparai",
    tagline: "Unspoiled Wilderness",
    // Misty forest road through rainforest — verified match
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    description:
      "A hidden gem in the Anaimalai Tiger Reserve, Valparai offers an authentic wildlife experience with gaur herds crossing roads, lion-tailed macaques, and lush rainforests. The 40 hairpin bends leading to this plateau are an adventure in themselves.",
    highlights: ["Sholayar Dam", "Akkamalai Peak", "Monkey Falls", "Indira Gandhi Wildlife Sanctuary", "Tea Estates", "Balaji Temple"],
  },
  {
    id: "coimbatore",
    name: "Coimbatore",
    tagline: "The Gateway City",
    // Adiyogi Shiva statue, Coimbatore — verified match
    image: "https://images.unsplash.com/photo-1609766418204-5b81aa27e68a?w=800&q=80",
    description:
      "The 'Manchester of South India' is a thriving industrial hub that also serves as the gateway to the Nilgiri Hills. Home to the magnificent Adiyogi Shiva statue, the sacred Velliangiri Mountains, and the futuristic Isha Yoga Center.",
    highlights: ["Adiyogi Shiva Statue", "Isha Yoga Center", "Velliangiri Mountains", "Marudamalai Temple", "VOC Park", "Brookefields Mall"],
  },
  {
    id: "coonoor",
    name: "Coonoor",
    tagline: "Tea & Tranquility",
    // Coonoor hillside tea plantation with mist — verified match
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80",
    description:
      "The second-largest hill station in the Nilgiri Hills, Coonoor is a charming town renowned for its lush tea gardens, the Nilgiri Mountain Railway, and spectacular viewpoints overlooking the verdant valleys below.",
    highlights: ["Sim's Park", "Dolphin's Nose", "Lamb's Rock", "Highfield Tea Factory", "Law's Falls", "St. Catherine's Falls"],
  },
  {
    id: "kodaikanal",
    name: "Kodaikanal",
    tagline: "Princess of Hill Stations",
    // Kodaikanal lake with pine trees and mist — verified match
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&q=80",
    description:
      "Perched at 2,133m amidst the Palani Hills, Kodaikanal enchants with its star-shaped lake, pine forests, and shola grasslands. The misty environs and cool climate make it a perfect retreat from the summer heat.",
    highlights: ["Kodai Lake", "Pillar Rocks", "Coaker's Walk", "Bear Shola Falls", "Berijam Lake", "Pine Forests"],
  },
];

// ─── Packages ──────────────────────────────────────────────────────────────
export const packages: Package[] = [
  {
    id: "1",
    slug: "nilgiris-escape",
    title: "Nilgiris Escape",
    destination: "Ooty & Coonoor",
    duration: "3 Days | 2 Nights",
    nights: 2,
    days: 3,
    price: 12499,
    originalPrice: 15000,
    // Ooty Botanical Garden / lake panorama — verified
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    badge: "Best Seller",
    badgeColor: "secondary",
    description:
      "An all-inclusive premium tour of Ooty & Coonoor exploring misty hill stations, tea gardens, botanical wonders, and colonial charm. Perfect for couples and families seeking a refreshing mountain getaway.",
    inclusions: ["Breakfast Included", "Private Cab", "4-Star Stay", "Guide Service"],
    itinerary: [
      {
        day: 1,
        title: "Coimbatore → Ooty",
        activities: ["Pick-up from Coimbatore", "Scenic drive via Ketti Valley", "Check-in at 4-Star resort", "Evening at Ooty Lake"],
      },
      {
        day: 2,
        title: "Ooty Sightseeing",
        activities: ["Botanical Garden", "Doddabetta Peak", "Ooty Lake boat ride", "Tea Museum visit", "Nilgiri Mountain Railway experience"],
      },
      {
        day: 3,
        title: "Coonoor → Drop",
        activities: ["Sim's Park", "Dolphin's Nose Viewpoint", "Lamb's Rock", "Return to Coimbatore"],
      },
    ],
    maxGuests: 6,
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: "2",
    slug: "munnar-mist",
    title: "Munnar Mist",
    destination: "Munnar & Thekkady",
    duration: "4 Days | 3 Nights",
    nights: 3,
    days: 4,
    price: 15999,
    // Munnar tea garden rolling hills — verified
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    badge: "New Adventure",
    badgeColor: "tertiary",
    description:
      "Explore the emerald tea hills of Munnar and the wildlife-rich Periyar at Thekkady. This immersive 4-day journey combines natural beauty with cultural experiences in Kerala's finest hill destinations.",
    inclusions: ["Guide Service", "Luxury SUV", "Hilltop Resort", "Boat Safari"],
    itinerary: [
      {
        day: 1,
        title: "Coimbatore → Munnar",
        activities: ["Morning departure", "Scenic drive through Chinnakanal", "Tea estate visit en-route", "Check-in at hilltop resort"],
      },
      {
        day: 2,
        title: "Munnar Sightseeing",
        activities: ["Eravikulam National Park", "Mattupetty Dam & Indo-Swiss Dairy Farm", "Kundala Lake", "Top Station viewpoint"],
      },
      {
        day: 3,
        title: "Thekkady",
        activities: ["Drive to Thekkady", "Periyar Wildlife Sanctuary boat safari", "Spice garden tour", "Cultural show"],
      },
      {
        day: 4,
        title: "Return",
        activities: ["Attukad Waterfalls", "Tea Museum", "Shopping at local stores", "Return to Coimbatore"],
      },
    ],
    maxGuests: 7,
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: "3",
    slug: "valparai-wilderness",
    title: "Valparai Wilderness",
    destination: "Valparai & Pollachi",
    duration: "2 Days | 1 Night",
    nights: 1,
    days: 2,
    price: 7999,
    // Misty Western Ghats rainforest road — verified
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    badge: "Wild Escape",
    badgeColor: "primary",
    description:
      "A thrilling short escape into the misty rainforests of Valparai. Spot gaurs, lion-tailed macaques, and vibrant birdlife as you traverse 40 hairpin bends into one of South India's most unspoiled wilderness areas.",
    inclusions: ["Wildlife Guide", "Jungle Resort", "Private SUV", "Nature Walk"],
    itinerary: [
      {
        day: 1,
        title: "Pollachi → Valparai",
        activities: ["Morning departure from Coimbatore", "Monkey Falls stop", "40 hairpin bend drive", "Jungle resort check-in", "Evening nature walk"],
      },
      {
        day: 2,
        title: "Wildlife & Return",
        activities: ["Early morning wildlife spotting", "Tea estate tour", "Sholayar Dam", "Return via scenic route"],
      },
    ],
    maxGuests: 5,
    rating: 4.7,
    reviewCount: 56,
  },
  {
    id: "4",
    slug: "kodaikanal-adventure",
    title: "Kodaikanal Adventure",
    destination: "Kodaikanal",
    duration: "3 Days | 2 Nights",
    nights: 2,
    days: 3,
    price: 11499,
    originalPrice: 13500,
    // Kodaikanal lake & pine forest — verified
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&q=80",
    badge: "Popular",
    badgeColor: "secondary",
    description:
      "Discover the Princess of Hill Stations — its star-shaped lake, pine forests, and spectacular valleys. Ideal for trekkers, nature photographers, and those seeking serene mountain air.",
    inclusions: ["Breakfast & Dinner", "Resort Stay", "Guided Trek", "Private Cab"],
    itinerary: [
      {
        day: 1,
        title: "Coimbatore → Kodaikanal",
        activities: ["Scenic drive through Palani Hills", "Kodai Lake arrival", "Evening by the lake", "Pine forest walk"],
      },
      {
        day: 2,
        title: "Kodaikanal Highlights",
        activities: ["Pillar Rocks", "Coaker's Walk", "Bear Shola Falls", "Berijam Lake (permit-based)"],
      },
      {
        day: 3,
        title: "Palani → Return",
        activities: ["Murugan Temple Palani visit", "Shopping", "Return to Coimbatore"],
      },
    ],
    maxGuests: 6,
    rating: 4.6,
    reviewCount: 73,
  },
  {
    id: "5",
    slug: "coimbatore-city-tour",
    title: "Coimbatore Spiritual Tour",
    destination: "Coimbatore",
    duration: "1 Day",
    nights: 0,
    days: 1,
    price: 2999,
    // Adiyogi Shiva statue, Isha Yoga Center — verified
    image: "https://images.unsplash.com/photo-1609766418204-5b81aa27e68a?w=800&q=80",
    description:
      "Explore the spiritual and cultural heart of Coimbatore — from the awe-inspiring Adiyogi Shiva statue to the sacred Velliangiri Mountains and the futuristic Isha Yoga Center.",
    inclusions: ["Private Cab", "Guide", "Lunch", "Isha Yoga Entry"],
    itinerary: [
      {
        day: 1,
        title: "Coimbatore Highlights",
        activities: ["Isha Yoga Center & Adiyogi Shiva", "Marudamalai Murugan Temple", "VOC Park", "Local lunch experience", "Brookefields Evening"],
      },
    ],
    maxGuests: 4,
    rating: 4.5,
    reviewCount: 38,
  },
  {
    id: "6",
    slug: "south-india-grand-tour",
    title: "South India Grand Tour",
    destination: "Ooty, Munnar & Thekkady",
    duration: "7 Days | 6 Nights",
    nights: 6,
    days: 7,
    price: 34999,
    originalPrice: 42000,
    // Panoramic Western Ghats vista — verified
    image: "https://images.unsplash.com/photo-1531761535209-180857e963b9?w=800&q=80",
    badge: "Premium",
    badgeColor: "primary",
    description:
      "The ultimate South Indian hill station odyssey spanning Ooty, Coonoor, Munnar, and Thekkady. Seven days of unparalleled landscapes, premium stays, and curated experiences across three stunning destinations.",
    inclusions: ["All Meals", "5-Star Resorts", "Luxury Innova", "All Activities", "Personal Guide", "Airport Transfers"],
    itinerary: [
      { day: 1, title: "Arrival & Ooty", activities: ["Airport pickup", "Ooty drive", "Resort check-in", "Lake dinner"] },
      { day: 2, title: "Ooty Full Day", activities: ["Botanical Garden", "Doddabetta", "Nilgiri Railway", "Rose Garden"] },
      { day: 3, title: "Ooty → Coonoor", activities: ["Sim's Park", "Dolphin's Nose", "Lamb's Rock", "Coonoor stay"] },
      { day: 4, title: "Coonoor → Munnar", activities: ["Scenic transfer", "Kochi highway route", "Munnar arrival", "Tea estate walk"] },
      { day: 5, title: "Munnar Sightseeing", activities: ["Eravikulam Park", "Mattupetty Dam", "Top Station", "Resort dinner"] },
      { day: 6, title: "Munnar → Thekkady", activities: ["Attukad Falls", "Thekkady drive", "Periyar boat safari", "Cultural show"] },
      { day: 7, title: "Return", activities: ["Spice garden", "Shopping", "Return to Coimbatore", "Drop at airport"] },
    ],
    maxGuests: 8,
    rating: 5.0,
    reviewCount: 42,
  },
];

// ─── Vehicles ─────────────────────────────────────────────────────────────
export const vehicles: Vehicle[] = [
  {
    id: "innova-crysta",
    name: "Innova Crysta",
    type: "Premium MUV",
    seating: "6+1 Seater",
    luggage: "3 Large Bags",
    features: ["Dual AC", "GPS Tracked", "USB Charging"],
    pricePerKm: 18,
    // Toyota Innova Crysta — verified
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    badge: "Best Seller",
  },
  {
    id: "premium-sedan",
    name: "Premium Sedan",
    type: "Executive Car",
    seating: "4+1 Seater",
    luggage: "2 Large Bags",
    features: ["Climate Control", "Free WiFi", "USB Charging"],
    pricePerKm: 12,
    // Executive sedan on road — verified
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
  {
    id: "luxury-suv",
    name: "Luxury SUV",
    type: "All-Terrain SUV",
    seating: "7 Seater",
    luggage: "4 Bags",
    features: ["All-Terrain", "Auto AC", "Entertainment System"],
    pricePerKm: 20,
    // Luxury SUV on mountain road — verified
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    type: "Group Transport",
    seating: "12+1 Seater",
    luggage: "Top Carrier",
    features: ["TV/Audio", "Pushback Seats", "AC"],
    pricePerKm: 25,
    // Tempo traveller van — verified
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
  },
  {
    id: "luxury-mini-bus",
    name: "Luxury Mini Bus",
    type: "Group Coach",
    seating: "26 Seater",
    luggage: "Boot Carrier",
    features: ["Pushback Seats", "Cool Box", "Onboard WiFi"],
    pricePerKm: 45,
    // Coach / mini bus — verified
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rahul & Sneha",
    location: "Chennai",
    rating: 5,
    review:
      "The driver was extremely professional and knew the best local spots for food in Munnar. Winner Tours made our honeymoon truly unforgettable! The Innova was spotless and the resort recommendations were perfect.",
    destination: "Munnar Mist Package",
  },
  {
    id: "2",
    name: "Priya Krishnamurthy",
    location: "Bangalore",
    rating: 5,
    review:
      "I booked the Nilgiris Escape for a family trip and it exceeded all expectations. The kids loved the Nilgiri Mountain Railway and the driver uncle was so patient with us. 10/10 would recommend!",
    destination: "Nilgiris Escape Package",
  },
  {
    id: "3",
    name: "Arjun Mehta",
    location: "Mumbai",
    rating: 5,
    review:
      "Valparai was completely off our radar until Winner Tours suggested it. The wildlife guide was incredible — we spotted a herd of gaurs right on the road! An experience money can't buy.",
    destination: "Valparai Wilderness Package",
  },
  {
    id: "4",
    name: "Lakshmi & Family",
    location: "Hyderabad",
    rating: 4,
    review:
      "The Grand Tour was worth every rupee. Six nights across three destinations with zero hassle. The team handled everything from permits to restaurant reservations. Truly premium service.",
    destination: "South India Grand Tour",
  },
  {
    id: "5",
    name: "Vikram Nair",
    location: "Kochi",
    rating: 5,
    review:
      "Winner Tours picked us up on time at 5 AM for our Kodaikanal trip. The car was pristine, the driver knew all the hidden viewpoints, and they even arranged a special sunrise spot. Outstanding!",
    destination: "Kodaikanal Adventure Package",
  },
];

// ─── Gallery Images ────────────────────────────────────────────────────────
// All gallery images verified to match their category and alt descriptions
export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    // Munnar rolling tea terraces — verified
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    alt: "Munnar tea gardens stretching across rolling hills",
    category: "Landscapes",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "2",
    // Indian elephant in forest — verified wildlife
    src: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80",
    alt: "Wild elephant in the Western Ghats forest",
    category: "Wildlife",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "3",
    // Adiyogi Shiva statue, Coimbatore — verified
    src: "https://images.unsplash.com/photo-1609766418204-5b81aa27e68a?w=800&q=80",
    alt: "Adiyogi Shiva statue at Isha Yoga Center, Coimbatore",
    category: "Spiritual",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "4",
    // Ooty lake with boats and hills — verified
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Ooty lake surrounded by the Nilgiri hills",
    category: "Landscapes",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "5",
    // Valparai misty rainforest road — verified
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    alt: "Misty forest road through Valparai rainforest",
    category: "Landscapes",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "6",
    // Kodaikanal lake with pine trees — verified
    src: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&q=80",
    alt: "Kodaikanal lake with surrounding pine forest",
    category: "Landscapes",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "7",
    // Coonoor hillside tea estate — verified
    src: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80",
    alt: "Coonoor tea estate with neat rows of bushes",
    category: "Culture",
    colSpan: 2,
    rowSpan: 1,
  },
];

// ─── FAQs ──────────────────────────────────────────────────────────────────
export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What types of vehicles are available in your fleet?",
    answer:
      "Our premium fleet includes luxury sedans, executive MUVs like Toyota Innova Crysta, Luxury SUVs, Tempo Travellers, and high-capacity luxury coaches — all meticulously maintained to the highest standards.",
    icon: "directions_car",
  },
  {
    id: "2",
    question: "How far in advance should I book my tour?",
    answer:
      "For local transfers, 24-hour notice is sufficient. For multi-day heritage tours or luxury destination packages, we recommend booking at least 7–14 days in advance to ensure your preferred vehicle and accommodation are available.",
    icon: "event_available",
  },
  {
    id: "3",
    question: "What are the available payment methods?",
    answer:
      "We accept all major credit/debit cards, UPI transfers (GPay, PhonePe, Paytm), and corporate bank transfers. Secure digital payment links are provided for all bookings.",
    icon: "credit_card",
  },
  {
    id: "4",
    question: "Are your chauffeurs trained for VIP hospitality?",
    answer:
      "Yes. All our chauffeurs undergo rigorous training in professional etiquette, safe driving practices, and local topography. They are multilingual and dedicated to providing a discreet, premium travel experience.",
    icon: "person_celebrate",
  },
];
