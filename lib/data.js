import { Activity, Trophy, BadgeDollarSign, BarChart3, CalendarDays, Users, Goal, CircleDot, Circle, Shield, Gamepad2, Bean, Dumbbell, Car, Orbit, Grid2x2 } from "lucide-react";
import { FaTrophy, FaCalendarAlt, FaClock, FaUsers, FaCode } from "react-icons/fa";

export const iconMap = { Activity, Trophy, BadgeDollarSign, BarChart3, CalendarDays, Users };
export const footballHeroIconMap = { FaTrophy, FaCalendarAlt, FaClock, FaUsers, FaCode };

export const sportsIconMap = {
  Goal,
  CircleDot,
  Circle,
  Shield,
  Trophy,
  Gamepad2,
  Bean,
  Dumbbell,
  Car,
  Orbit,
  Grid2x2,
};

export const featuresData = [
  {
    "title": "Live Scores",
    "description": "Real-time scores, events and play-by-play updates",
    "icon": "Activity"
  },
  {
    "title": "Standings",
    "description": "Up-to-date league tables and rankings",
    "icon": "Trophy"
  },
  {
    "title": "Odds & Betting",
    "description": "Latest odds, markets and bookmaker data",
    "icon": "BadgeDollarSign"
  },
  {
    "title": "Statistics",
    "description": "In-depth stats and performance metrics",
    "icon": "BarChart3"
  },
  {
    "title": "Fixtures",
    "description": "Schedules, results and match information",
    "icon": "CalendarDays"
  },
  {
    "title": "Players & Teams",
    "description": "Profiles, ratings and historical data",
    "icon": "Users"
  }
]

export const sportsData = [
  {
    id: 1,
    name: "Football",
    slug: "football",
    icon: "Goal",
  },
  {
    id: 3,
    name: "Tennis",
    slug: "tennis",
    icon: "CircleDot",
  },
  {
    id: 4,
    name: "Baseball",
    slug: "baseball",
    icon: "Circle",
  },
  {
    id: 5,
    name: "Hockey",
    slug: "hockey",
    icon: "Shield",
  },
  {
    id: 6,
    name: "NFL",
    slug: "nfl",
    icon: "Trophy",
  },
  {
    id: 7,
    name: "eSports",
    slug: "esports",
    icon: "Gamepad2",
  },
  {
    id: 8,
    name: "Rugby",
    slug: "rugby",
    icon: "Bean",
  },
  {
    id: 9,
    name: "MMA",
    slug: "mma",
    icon: "Dumbbell",
  },
  {
    id: 10,
    name: "Motorsport",
    slug: "motorsport",
    icon: "Car",
  },
  {
    id: 11,
    name: "Volleyball",
    slug: "volleyball",
    icon: "Orbit",
  },
  {
    id: 12,
    name: "More",
    slug: "more",
    icon: "Grid2x2",
  },
];

export const techIcons = [
  {
    "id" : "1",
    "name" : "Next.js",
    "img" : "/assets/techstack/nextjs.svg",
  },
  {
    "id" : "2",
    "name" : "Tailwind CSS",
    "img": "/assets/techstack/tailwind.svg",
  },
  {
    "id" : "3",
    "name" : "Sass",
    "img": "/assets/techstack/scss.svg", 
  },
  {
    "id" : "4",
    "name" : "React",
    "img": "/assets/techstack/react.svg", 
  },
  {
    "id" : "5",
    "name" : "MongoDB",
    "img": "assets/techstack/mongodb.svg", 
  },
  {
    "id" : "6",
    "name" : "Laravel",
    "img": "/assets/techstack/laravel.svg",
  },
  {
    "id" : "7",
    "name" : "MySQL",
    "img": "/assets/techstack/mysql.svg",
  },
  {
    "id" : "8",
    "name" : "Redis",
    "img": "/assets/techstack/redis.svg",
  }
  
];

export const blogsData = [
  {
    "id" : "1",
    "type" : "Update",
    "color" : "green",
    "title" : "Introductin New basketball API Endpoints",
    "subtitle" : "Introductin New basketball API Endpoints",
    "img" : "/assets/blog-img/blog-1.png",
    "date" : "May 10, 2024"
  },
  {
    "id" : "2",
    "type" : "Update",
    "color" : "green",
    "title" : "Introductin New basketball API Endpoints",
    "subtitle" : "Introductin New basketball API Endpoints",
    "img" : "/assets/blog-img/blog-1.png",
    "date" : "May 10, 2024"
  },
  {
    "id" : "3",
    "type" : "Update",
    "color" : "green",
    "title" : "Introductin New basketball API Endpoints",
    "subtitle" : "Introductin New basketball API Endpoints",
    "img" : "/assets/blog-img/blog-1.png",
    "date" : "May 10, 2024"
  }
]

export const blogsData2 = [
  {
    "id" : "1",
    "type" : "Update",
    "color" : "green",
    "title" : "Introductin New basketball API Endpoints",
    "subtitle" : "Introductin New basketball API Endpoints",
    "img" : "/assets/blog-img/blog-img-1.png",
    "image" : "",
    "date" : "May 10, 2024"
  },
  {
    "id" : "2",
    "type" : "Update",
    "color" : "green",
    "title" : "Introductin New basketball API Endpoints",
    "subtitle" : "Introductin New basketball API Endpoints",
    "img" : "/assets/blog-img/blog-img-1.png",
    "date" : "May 10, 2024"
  },
  {
    "id" : "3",
    "type" : "Update",
    "color" : "green",
    "title" : "Introductin New basketball API Endpoints",
    "subtitle" : "Introductin New basketball API Endpoints",
    "img" : "/assets/blog-img/blog-img-1.png",
    "date" : "May 10, 2024"
  }
]

export const codeSnipped = [
  {
    "id": "javascript",
    "label": "JavaScript",
    "active": false,
    "code": "const response = await fetch('https://api.api-sports.io/v3/fixtures/live', {\n  method: 'GET',\n  headers: {\n    'x-apisports-key': 'YOUR_API_KEY'\n  }\n});\n\nconst data = await response.json();\nconsole.log(data);"
  },
  {
    "id": "curl",
    "label": "cURL",
    "active": true,
    "code": "curl --request GET \\\n  --url https://api.api-sports.io/v3/fixtures/live \\\n  --header 'x-apisports-key: YOUR_API_KEY'"
  },
  {
    "id": "python",
    "label": "Python",
    "active": false,
    "code": "import requests\n\nurl = 'https://api.api-sports.io/v3/fixtures/live'\nheaders = {\n    'x-apisports-key': 'YOUR_API_KEY'\n}\n\nresponse = requests.get(url, headers=headers)\nprint(response.json())"
  },
  {
    "id": "php",
    "label": "PHP",
    "active": false,
    "code": "<?php\n$curl = curl_init();\n\ncurl_setopt_array($curl, [\n  CURLOPT_URL => 'https://api.api-sports.io/v3/fixtures/live',\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_HTTPHEADER => [\n    'x-apisports-key: YOUR_API_KEY'\n  ]\n]);"
  }
]

export const menuItems = [
  {"id" : "1", name: "Home", href: "/" },
  // {"id" : "2", name: "About", href: "/about" },
  // {"id" : "3", name: "Services", href: "/services" },
  {"id" : "4", name: "Football", href: "/football" },
  {"id" : "5", name: "Cricket", href: "/cricket" },
  // {"id" : "6", name: "Contact", href: "/contact" },
  {"id" : "6", name: "Dashboard", href: "/dashboard" },
];

export const footerData = [
  {
    "id": "product",
    "title": "Product",
    "links": [
      {
        "label": "Features",
        "href": "/features"
      },
      {
        "label": "Sports",
        "href": "/sports"
      },
      {
        "label": "Widgets",
        "href": "/widgets"
      },
      {
        "label": "Pricing",
        "href": "/pricing"
      }
    ]
  },
  {
    "id": "developers",
    "title": "Developers",
    "links": [
      {
        "label": "Documentation",
        "href": "/docs"
      },
      {
        "label": "API Reference",
        "href": "/api-reference"
      },
      {
        "label": "Changelog",
        "href": "/changelog"
      },
      {
        "label": "Status",
        "href": "/status"
      }
    ]
  },
  {
    "id": "company",
    "title": "Company",
    "links": [
      {
        "label": "About Us",
        "href": "/about"
      },
      {
        "label": "Blog",
        "href": "/blog"
      },
      {
        "label": "Careers",
        "href": "/careers"
      },
      {
        "label": "Contact",
        "href": "/contact"
      }
    ]
  },
  {
    "id": "legal",
    "title": "Legal",
    "links": [
      {
        "label": "Privacy Policy",
        "href": "/privacy-policy"
      },
      {
        "label": "Terms of Service",
        "href": "/terms-of-service"
      }
    ]
  }
]

export const pricingData = [
  {
    "id": 1,
    "name": "Free",
    "description": "Perfect for testing",
    "price": 0,
    "currency": "$",
    "billing": "/month",
    "badge": null,
    "features": [
      "500 API requests / day",
      "Basic endpoints",
      "Community support"
    ],
    "buttonText": "Get Started",
    "popular": false
  },
  {
    "id": 2,
    "name": "Pro",
    "description": "For growing apps",
    "price": 29,
    "currency": "$",
    "billing": "/month",
    "badge": "Popular",
    "features": [
      "10,000 API requests / day",
      "All endpoints",
      "Priority support"
    ],
    "buttonText": "Get Started",
    "popular": true
  },
  {
    "id": 3,
    "name": "Business",
    "description": "For production use",
    "price": 79,
    "currency": "$",
    "billing": "/month",
    "badge": null,
    "features": [
      "100,000 API requests / day",
      "All endpoints & odds",
      "24/7 support"
    ],
    "buttonText": "Get Started",
    "popular": false
  }
]

export const footBallData = {
  hero_section: {
    tag: "REAL-TIME FOOTBALL DATA API",
    img: "/assets/img/football.png",
    headline: {
      before: "Power your app with real-time",
      gradient: "football",
      after: "data",
    },
    subheadline: "Get live scores, fixtures, standings, players, teams and much more. Trusted by developers worldwide.",
    cta_buttons: [
      {
        id: 1,
        text: "Get Started",
        type: "primary",
        url: "/signup",
      },
      {
        id: 2,
        text: "View Docs",
        type: "secondary",
        url: "/docs",
      },
    ],
    key_metrics: [
      {
        id: 1,
        title: "150+",
        subtitle: "Leagues",
        icon: "FaTrophy",
        iconPackage: "react-icons/fa",
      },
      {
        id: 2,
        title: "500K+",
        subtitle: "Matches / Month",
        icon: "FaCalendarAlt",
        iconPackage: "react-icons/fa",
      },
      {
        id: 3,
        title: "100ms",
        subtitle: "Avg. Response",
        icon: "FaClock",
        iconPackage: "react-icons/fa",
      },
      {
        id: 4,
        title: "99.9%",
        subtitle: "Uptime",
        icon: "FaUsers",
        iconPackage: "react-icons/fa",
      },
      {
        id: 5,
        title: "RESTful",
        subtitle: "API",
        icon: "FaCode",
        iconPackage: "react-icons/fa",
      },
    ],
  },

  supported_competitions: [
    {
      id: 1,
      name: "Champions League",
      country: "Europe",
      img: "/assets/leagues/champions-league.png",
      features: {
        live: true,
        fixtures: true,
        results: true,
        standings: true,
        players: true,
        teams: true,
      },
    },
    {
      id: 2,
      name: "Europa League",
      country: "Europe",
      img: "/assets/leagues/europa-league.png",
      features: {
        live: true,
        fixtures: true,
        results: true,
        standings: false,
        players: true,
        teams: true,
      },
    },
    {
      id: 3,
      name: "FA Cup",
      country: "England",
      img: "/assets/leagues/fa-cup.png",
      features: {
        live: true,
        fixtures: false,
        results: true,
        standings: false,
        players: true,
        teams: true,
      },
    },
    {
      id: 4,
      name: "La Liga",
      country: "Spain",
      img: "/assets/leagues/laliga.png",
      features: {
        live: true,
        fixtures: true,
        results: true,
        standings: true,
        players: false,
        teams: false,
      },
    },
    {
      id: 5,
      name: "MLS",
      country: "USA",
      img: "/assets/leagues/mls.png",
      features: {
        live: true,
        fixtures: true,
        results: true,
        standings: true,
        players: true,
        teams: true,
      },
    },
    {
      id: 6,
      name: "Premier League",
      country: "England",
      img: "/assets/leagues/premier-league.png",
      features: {
        live: true,
        fixtures: false,
        results: true,
        standings: true,
        players: true,
        teams: true,
      },
    },
  ],

  blogs: [
    {
      id: "1",
      type: "Update",
      color: "green",
      title: "Introductin New basketball API Endpoints",
      subtitle: "Introductin New basketball API Endpoints",
      img: "/assets/blog-img/blog-img-1.png",
      image: "",
      date: "May 10, 2024",
    },
    {
      id: "2",
      type: "Update",
      color: "green",
      title: "Introductin New basketball API Endpoints",
      subtitle: "Introductin New basketball API Endpoints",
      img: "/assets/blog-img/blog-img-1.png",
      date: "May 10, 2024",
    },
    {
      id: "3",
      type: "Update",
      color: "green",
      title: "Introductin New basketball API Endpoints",
      subtitle: "Introductin New basketball API Endpoints",
      img: "/assets/blog-img/blog-img-1.png",
      date: "May 10, 2024",
    },
  ],
};

export const cricketData = {
  hero_section: {
    tag: "REAL-TIME CRICKET DATA API",
    img: "/assets/img/cricket2.png",
    headline: {
      before: "Power your app with live",
      gradient: "cricket",
      after: "data",
    },
    subheadline: "Get live scores, fixtures, player stats, team rankings, ball-by-ball commentary and much more. Built for modern cricket applications.",
    cta_buttons: [
      {
        id: 1,
        text: "Get Started",
        type: "primary",
        url: "/signup",
      },
      {
        id: 2,
        text: "View Docs",
        type: "secondary",
        url: "/docs",
      },
    ],
    key_metrics: [
      {
        id: 1,
        title: "100+",
        subtitle: "Tournaments",
        icon: "FaTrophy",
        iconPackage: "react-icons/fa",
      },
      {
        id: 2,
        title: "250K+",
        subtitle: "Matches / Year",
        icon: "FaCalendarAlt",
        iconPackage: "react-icons/fa",
      },
      {
        id: 3,
        title: "80ms",
        subtitle: "Avg. Response",
        icon: "FaClock",
        iconPackage: "react-icons/fa",
      },
      {
        id: 4,
        title: "99.9%",
        subtitle: "Uptime",
        icon: "FaUsers",
        iconPackage: "react-icons/fa",
      },
      {
        id: 5,
        title: "RESTful",
        subtitle: "API",
        icon: "FaCode",
        iconPackage: "react-icons/fa",
      },
    ],
  },

  supported_competitions: [
    {
      id: 1,
      name: "World Cup",
      country: "International",
      img: "/assets/leagues/champions-league.png",
      features: {
        live: true,
        fixtures: true,
        results: true,
        standings: true,
        players: true,
        teams: true,
      }
    },
    {
      id: 2,
      name: "IPL",
      country: "India",
      img: "/assets/leagues/mls.png",
      features: {
        live: true,
        fixtures: true,
        results: true,
        standings: true,
        players: true,
        teams: true,
      }
    },
    {
      id: 3,
      name: "Big Bash",
      country: "Australia",
      img: "/assets/leagues/europa-league.png",
      features: {
        live: true,
        fixtures: true,
        results: false,
        standings: true,
        players: true,
        teams: true,
      }
    },
    {
      id: 4,
      name: "PSL",
      country: "Pakistan",
      img: "/assets/leagues/laliga.png",
      features: {
        live: true,
        fixtures: true,
        results: true,
        standings: true,
        players: true,
        teams: true,
      }
    },
    {
      id: 5,
      name: "The Hundred",
      country: "England",
      img: "/assets/leagues/fa-cup.png",
      features: {
        live: true,
        fixtures: true,
        results: true,
        standings: true,
        players: true,
        teams: true,
      }
    },
    {
      id: 6,
      name: "Asia Cup",
      country: "Asia",
      img: "/assets/leagues/serie-a.png",
      features: {
        live: true,
        fixtures: true,
        results: true,
        standings: true,
        players: true,
        teams: false,
      }
    }
  ],

  blogs: [
    {
      id: "1",
      type: "Update",
      color: "green",
      title: "Introducing New Cricket API Endpoints",
      subtitle: "Explore our latest cricket API endpoints for live scores, commentary, and player statistics.",
      img: "/assets/blog-img/blog-img-1.png",
      image: "",
      date: "May 10, 2024",
    },
    {
      id: "2",
      type: "Guide",
      color: "blue",
      title: "How To Build A Live Cricket Score App",
      subtitle: "Learn how to integrate real-time cricket scores into your web or mobile application.",
      img: "/assets/blog-img/blog-img-1.png",
      image: "",
      date: "May 18, 2024",
    },
    {
      id: "3",
      type: "Release",
      color: "purple",
      title: "Ball-by-Ball Commentary API Released",
      subtitle: "Get detailed over-by-over and ball-by-ball cricket commentary with our new API release.",
      img: "/assets/blog-img/blog-img-1.png",
      image: "",
      date: "June 02, 2024",
    },
  ],
};

export const pages = [
  {
    "id": 1,
    "title": "Home Page",
    "slug": "home",
    "description": "Excepturi distinctio beatae facilis doloremque laborum. Quia deleniti ut quam. Et qui nobis nam maxime et.",
    "meta_title": "Nihil expedita quae omnis quis.",
    "meta_description": "Porro architecto ipsam at omnis dolores consequuntur. Quisquam vel quo qui vel voluptas ut praesentium. Voluptas illo nihil omnis ut sit aut est. Ut cupiditate voluptates et porro fuga rerum nesciunt modi.",
    "created_at": "2026-06-08T08:12:07.000000Z",
    "updated_at": "2026-06-08T08:12:07.000000Z",
  },
  {
    "id": 2,
    "title": "Cricket Page",
    "slug": "cricket",
    "description": "Praesentium est quaerat eum ullam quam ut natus. Et eaque rerum sunt voluptatum voluptatum tempora sint. Officiis dolorem nulla enim ea velit animi. Laborum voluptates ut alias temporibus cum laudantium facilis.",
    "meta_title": "Eos dolorum nam sed cupiditate.",
    "meta_description": "Assumenda et ullam consequatur est suscipit. Tempore nam qui aut ut. Quae architecto quis voluptas fuga cumque. Aspernatur delectus enim aliquid.",
    "created_at": "2026-06-08T08:12:07.000000Z",
    "updated_at": "2026-06-08T08:12:07.000000Z",
  },
  {
    "id": 3,
    "title": "Football Page",
    "slug": "football",
    "description": "Labore necessitatibus quae ipsa molestiae in. Atque placeat et minima culpa. Alias ut et consectetur sed animi dolorem. Temporibus doloremque at natus repellendus tenetur enim aut.",
    "meta_title": "Illo laboriosam magnam eaque inventore perspiciatis et.",
    "meta_description": "Et ea et maxime voluptatem. Animi excepturi aut et architecto tempora. Sint magnam repellendus neque non voluptate et.",
    "created_at": "2026-06-08T08:12:07.000000Z",
    "updated_at": "2026-06-08T08:12:07.000000Z",
  }
]

export const sections = [
  {
    "id": 1,
    "title": "Molestiae cupiditate labore sunt repellendus rerum pariatur.",
    "page_id": 1,
    "is_active": 1,
    "type": "hero",
    "order": 1,
    "section_data": {
      "headline": "REAL-TIME SPORTS DATA API",
      "title": "Real-time sports data",
      "subtitle": "Power your app with live scores, standings, stats, and more. Built by developers, for developers.",
    },
    "created_at": "2026-06-08T08:12:07.000000Z",
    "updated_at": "2026-06-08T08:12:07.000000Z"
  }
]