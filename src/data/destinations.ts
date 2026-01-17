export interface Destination {
    id: string;
    name: string;
    state: "Himachal" | "Uttarakhand" | "Rajasthan" | "Spiti";
    description: string;
    image: string;
    duration: string;
    difficulty: "Easy" | "Moderate" | "Challenging";
    price: string;
    slug: string;
    featured?: boolean;
    highlights?: string[];
    inclusions?: string[];
}

export const destinations: Destination[] = [
    {
        id: "manali",
        name: "Manali",
        state: "Himachal",
        description: "Nestled in the Beas River Valley, Manali is a gateway for adventure and serene landscapes.",
        image: "/images/gallery/manali__0.jpeg",
        duration: "3-5 Days",
        difficulty: "Easy",
        price: "₹8,500",
        slug: "manali",
        featured: true,
        highlights: ["Solang Valley", "Hadimba Temple", "Old Manali Cafes", "Rohtang Pass"],
        inclusions: ["Stay", "Meals", "Transfers", "Guide"]
    },
    {
        id: "chopta",
        name: "Chopta",
        state: "Uttarakhand",
        description: "The 'Mini Switzerland of India', offering panoramic views of the majestic Himalayan peaks.",
        image: "/images/lifestyle/trail.png",
        duration: "4 Days",
        difficulty: "Moderate",
        price: "₹6,500",
        slug: "chopta",
        featured: true,
        highlights: ["Tungnath Trek", "Chandrashila Peak", "Deoria Tal Lake", "Birds Watching"],
        inclusions: ["Camping", "Meals", "Trek Guide", "Equipment"]
    },
    {
        id: "jibhi",
        name: "Jibhi",
        state: "Himachal",
        description: "An untouched gem in the Tirthan Valley, perfect for slow travel and nature lovers.",
        image: "/images/gallery/jibhi__0.jpeg",
        duration: "3 Days",
        difficulty: "Easy",
        price: "₹7,200",
        slug: "jibhi",
        featured: true,
        highlights: ["Jibhi Waterfall", "Serolsar Lake Trek", "Treehouse Stay", "Fishing"],
        inclusions: ["Cottage Stay", "Breakfast", "Sightseeing", "Expert Guide"]
    },
    {
        id: "kasol",
        name: "Kasol & KheerGanga",
        state: "Himachal",
        description: "The quintessential backpacker's haven with lush valleys and hot water springs.",
        image: "/images/gallery/kasol_tosh__2.jpeg",
        duration: "4 Days",
        difficulty: "Moderate",
        price: "₹9,000",
        slug: "kasol",
        featured: true,
        highlights: ["Parvati Valley", "Hot Air Springs", "Café Hopping", "KheerGanga Trek"],
        inclusions: ["Camping", "Meals", "Trek Leader", "Photoshoot"]
    },
    {
        id: "udaipur",
        name: "Udaipur",
        state: "Rajasthan",
        description: "The City of Lakes. Discover the royalty of City Palace and the serenity of Lake Pichola.",
        image: "/images/gallery/udaipur_rajasthan__1.jpeg",
        duration: "3-4 Days",
        difficulty: "Easy",
        price: "₹12,000",
        slug: "udaipur",
        featured: true,
        highlights: ["City Palace", "Lake Pichola Boat", "Saheliyon-ki-Bari", "Fateh Sagar"],
        inclusions: ["Luxury Hotel", "Breakfast", "Sightseeing", "Ac Cab"]
    },
    {
        id: "jaisalmer",
        name: "Jaisalmer",
        state: "Rajasthan",
        description: "The Golden City of Rajasthan. Experience desert glamping, camel safaris, and the historic Jaisalmer Fort.",
        image: "/images/gallery/jaisalmer_rajasthan__2.jpeg",
        duration: "3-4 Days",
        difficulty: "Easy",
        price: "₹9,500",
        slug: "jaisalmer",
        featured: true,
        highlights: ["Sam Sand Dunes", "Camel Safari", "Jaisalmer Fort", "Desert Camping"],
        inclusions: ["Desert Tent", "Cultural Folk", "Dinner/Breakfast", "Camel Rides"]
    },
    {
        id: "rishikesh",
        name: "Rishikesh",
        state: "Uttarakhand",
        description: "The Yoga Capital of the world. Famous for river rafting, café hopping, and spiritual retreats.",
        image: "/images/lifestyle/rishikesh_rafting.png",
        duration: "2-3 Days",
        difficulty: "Moderate",
        price: "₹5,500",
        slug: "rishikesh",
        featured: true,
        highlights: ["River Rafting", "Ganga Aarti", "Bungee Jumping", "Café Trail"],
        inclusions: ["Riverside Camp", "Rafting Gear", "All Meals", "Cliff Jump"]
    },
    {
        id: "leh",
        name: "Leh-Ladakh",
        state: "Spiti",
        description: "A high-altitude desert adventure. Breathtaking bike trails, blue lakes, and ancient monasteries.",
        image: "/images/lifestyle/leh_bikes.png",
        duration: "7-9 Days",
        difficulty: "Challenging",
        price: "₹24,500",
        slug: "leh",
        featured: true,
        highlights: ["Pangong Lake", "Khardung La Pass", "Nubra Valley", "Magnetic Hill"],
        inclusions: ["Permits", "Bikes/Backup", "Hotels/Camps", "Doctor/O2"]
    },
    {
        id: "spiti",
        name: "Spiti Valley",
        state: "Spiti",
        description: "A high-altitude cold desert mountain valley with ancient monasteries and rugged beauty.",
        image: "/images/gallery/spiti__1.jpeg",
        duration: "7-9 Days",
        difficulty: "Challenging",
        price: "₹18,500",
        slug: "spiti",
        featured: true,
        highlights: ["Key Monastery", "Kaza Exploring", "Pin Valley", "Langza Village"],
        inclusions: ["Homestay", "Breakfast/Dinner", "Innova/Tempo", "Local Info"]
    },
    {
        id: "auli",
        name: "Auli",
        state: "Uttarakhand",
        description: "The skiing destination of India, known for its oak-fringed slopes and coniferous forests.",
        image: "/images/gallery/auli_joshimath__1.jpeg",
        duration: "3-4 Days",
        difficulty: "Moderate",
        price: "₹11,000",
        slug: "auli",
        featured: true,
        highlights: ["Skiing Course", "Ropeway Ride", "Gorson Bugyal", "Artificial Lake"],
        inclusions: ["Skiing Gear", "Resort Stay", "Meals", "Trainer"]
    },
    {
        id: "badrinath",
        name: "Badrinath Dham",
        state: "Uttarakhand",
        description: "One of the most sacred pilgrimage sites, located between the Nar and Narayana mountain ranges.",
        image: "/images/gallery/badrinath_dham__1.jpeg",
        duration: "4-5 Days",
        difficulty: "Moderate",
        price: "₹14,000",
        slug: "badrinath",
        featured: true,
        highlights: ["Badrinath Temple", "Mana Village", "Tapt Kund", "Vasudhara Falls"],
        inclusions: ["Hotels", "E-Pass Help", "Transportation", "Pandit Ji"]
    },
    {
        id: "kedarnath",
        name: "Kedarnath Dham",
        state: "Uttarakhand",
        description: "A spiritual journey to one of the 12 Jyotirlingas of Shiva, set against the snowy Himalayas.",
        image: "/images/gallery/kedarnath_dham__1.jpeg",
        duration: "5-6 Days",
        difficulty: "Challenging",
        price: "₹16,500",
        slug: "kedarnath",
        featured: true,
        highlights: ["Gaurikund Trek", "Kedarnath Shrine", "Bhairav Temple", "Himalayan Views"],
        inclusions: ["Stay at Top", "Pony/Doli Help", "Guided Trek", "Reg. Help"]
    },
    {
        id: "chakrata",
        name: "Chakrata",
        state: "Uttarakhand",
        description: "A secluded hill station known for its caves, waterfalls, and ancient temples.",
        image: "/images/gallery/chakrata__0.jpeg",
        duration: "3 Days",
        difficulty: "Easy",
        price: "₹7,500",
        slug: "chakrata",
        featured: true,
        highlights: ["Tiger Falls", "Budher Caves", "Chilmiri Neck", "Pine Forest"],
        inclusions: ["Cottage Stay", "Meals", "Local Guide", "Bonfire"]
    },
    {
        id: "chitkul",
        name: "Chitkul & Kalpa",
        state: "Himachal",
        description: "The last inhabited village of India near the Indo-Tibetan border, offering surreal views.",
        image: "/images/gallery/chitkul_kalpa_1.jpeg",
        duration: "5-6 Days",
        difficulty: "Moderate",
        price: "₹13,500",
        slug: "chitkul",
        featured: true,
        highlights: ["Baspa River", "Kinnaur Kailash", "Tea Post", "Tibetan Colony"],
        inclusions: ["Swiss Tents", "All Meals", "Photography", "Tempo traveler"]
    },
    {
        id: "bir-billing",
        name: "Bir Billing",
        state: "Himachal",
        description: "The paragliding capital of India, perfect for thrill-seekers and peace-lovers alike.",
        image: "/images/gallery/mcleodganj_bir_billing__0.jpeg",
        duration: "3-4 Days",
        difficulty: "Moderate",
        price: "₹9,500",
        slug: "bir-billing",
        featured: true,
        highlights: ["Paragliding", "Landing Site Cafe", "Monasteries", "Trek to Billing"],
        inclusions: ["Standard Stay", "Breakfast", "Flight Video", "Glider Pilot"]
    }
];
