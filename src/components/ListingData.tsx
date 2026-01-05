import { ThreadmillIcon } from "./icons/icons";
import { StaticImageData } from "next/image";

export interface TreadmillItem {
  img: string | StaticImageData;
  icons: React.ReactElement;
  model: string;
  features: string;
  price: number;
}

export interface ProductType {
  id: number;
  icons: React.ReactElement;
  title: string;
  slug: string;
  price: number;
  desc: string;
  img: string | StaticImageData;
}

export interface Session {
  id: number;
  img: string | StaticImageData;
  name: string;
  slug: string;
  session: string;
}

export const treadmill: TreadmillItem[] = [
  {
    img: "/assest/treadmill.png",
    icons: <ThreadmillIcon />,
    model: "PowerStride 5000",
    features: "Smart incline • Silent motor • Bluetooth metrics",
    price: 480,
  },
  {
    img: "/assest/treadmill.png",
    icons: <ThreadmillIcon />,
    model: "Enduro Max 10",
    features: "Smart incline • Silent motor • Bluetooth metrics",
    price: 480,
  },
  {
    img: "/assest/treadmill.png",
    icons: <ThreadmillIcon />,
    model: "Urban Sprint Lite",
    features: "Compact ,foldable design  • App control. ",
    price: 480,
  },
  {
    img: "/assest/treadmill.png",
    icons: <ThreadmillIcon />,
    model: "IntelliTrack Plus",
    features:
      "AI-powered speed adjustments and feedback •  personalized workout  • ",
    price: 480,
  },
  {
    img: "/assest/treadmill.png",
    icons: <ThreadmillIcon />,
    model: "IntelliTrack Plus",
    features:
      "Auto-cool deck • Heart rate sync •  12 smart programs built for endurance. ",
    price: 480,
  },
  {
    img: "/assest/treadmill.png",
    icons: <ThreadmillIcon />,
    model: "IntelliTrack Plus",
    features: "Smart incline • Silent motor • Bluetooth metrics",
    price: 480,
  },
];

export const faqs = [
  {
    question: "How do I book a trainer?",
    answer:
      "Browse through our verified coaches, filter by goal (Weight Loss, HIIT, Strength, or Endurance), select your preferred time, and confirm payment. Once booked, you’ll receive instant confirmation and calendar reminders",
  },
  {
    question: "Can I cancel or reschedule a session?",
    answer:
      "Yes, you can cancel or reschedule your session at least 24 hours before your appointment through your account dashboard.",
  },
  {
    question: "How do I book a trainer?",
    answer:
      "Booking a trainer is simple — browse available trainers, view their profiles, and book a time slot that fits your schedule.",
  },
  {
    question: "Do you offer home or virtual training?",
    answer:
      "Yes, we offer both home and virtual training sessions to provide flexibility and convenience for your workout routine.",
  },
  {
    question: "Do you offer home or virtual training?",
    answer:
      "Absolutely! Our platform allows you to choose between in-person, home, or online training options based on your preferences.",
  },
  {
    question: "Do you offer home or virtual training?",
    answer:
      "Yes, our trainers are available for both home visits and live virtual sessions, depending on what you prefer.",
  },
];

export const products: ProductType[] = [
  {
    id: 1,
    title: "Enduro Max 10",
    slug: "enduro-max-10",
    price: 480000,
    desc: "Smart incline · Silent motor · Bluetooth metrics",
    img: "/assest/treadmill.png",
    icons: <ThreadmillIcon />,
  },
  {
    id: 2,
    title: "IntelliTrack Plus",
    slug: "intellitrack-plus",
    price: 720000,
    desc: "Smart incline · Silent motor · Bluetooth metrics",
    img: "/assest/treadmill.png",
    icons: <ThreadmillIcon />,
  },
  {
    id: 3,
    title: "Urban Sprint Lite",
    slug: "urban-sprint-lite",
    price: 640000,
    desc: "Smart incline · Silent motor · Bluetooth metrics",
    img: "/assest/treadmill.png",
    icons: <ThreadmillIcon />,
  },
  {
    id: 4,
    title: "Aeroline Pro X",
    slug: "aeroline-pro-x",
    price: 640000,
    desc: "Smart incline · Silent motor · Bluetooth metrics",
    img: "/assest/treadmill.png",
    icons: <ThreadmillIcon />,
  },

  {
    id: 5,
    title: "Aeroline Pro X",
    slug: "aeroline-pro-x-2",
    price: 640000,
    desc: "Smart incline · Silent motor · Bluetooth metrics",
    img: "/assest/treadmill.png",
    icons: <ThreadmillIcon />,
  },
  {
    id: 6,
    title: "Aeroline Pro X",
    slug: "aeroline-pro-x-13",
    price: 640000,
    desc: "Smart incline · Silent motor · Bluetooth metrics",
    img: "/assest/treadmill.png",
    icons: <ThreadmillIcon />,
  },
  {
    id: 7,
    title: "Aeroline Pro X",
    slug: "aeroline-pro-x-3",
    price: 640000,
    desc: "Smart incline · Silent motor · Bluetooth metrics",
    img: "/assest/treadmill.png",
    icons: <ThreadmillIcon />,
  },
  {
    id: 8,
    title: "Aeroline Pro X",
    slug: "aeroline-pro-x-4",
    price: 640000,
    desc: "Smart incline · Silent motor · Bluetooth metrics",
    img: "/assest/treadmill.png",
    icons: <ThreadmillIcon />,
  },
  {
    id: 9,
    title: "Aeroline Pro X",
    slug: "aeroline-pro-x-5",
    price: 640000,
    desc: "Smart incline · Silent motor · Bluetooth metrics",
    img: "/assest/treadmill.png",
    icons: <ThreadmillIcon />,
  },
  {
    id: 10,
    title: "Aeroline Pro X",
    slug: "aeroline-pro-x-6",
    price: 640000,
    desc: "Smart incline · Silent motor · Bluetooth metrics",
    img: "/assest/treadmill.png",
    icons: <ThreadmillIcon />,
  },
  {
    id: 11,
    title: "Aeroline Pro X",
    slug: "aeroline-pro-x-7",
    price: 640000,
    desc: "Smart incline · Silent motor · Bluetooth metrics",
    img: "/assest/treadmill.png",
    icons: <ThreadmillIcon />,
  },
  {
    id: 12,
    title: "Aeroline Pro X",
    slug: "aeroline-pro-x-8",
    price: 640000,
    desc: "Smart incline · Silent motor · Bluetooth metrics",
    img: "/assest/treadmill.png",
    icons: <ThreadmillIcon />,
  },
];

export const trainingSessions: Session[] = [
  {
    id: 1,
    img: "/gymnast.webp",
    name: "Hammed Bello",
    slug: "hammed-bello",
    session: "Cardio & endurance",
  },
  {
    id: 2,
    img: "/female-trainer.webp",
    name: "Susan Peters",
    slug: "susan-peters",
    session: "Mobility & wellness",
  },
  {
    id: 3,
    img: "/trainer-3.webp",
    name: "John Doe",
    slug: "john-doe",
    session: "Strength & Condition",
  },
  {
    id: 4,
    img: "/female-trainer.webp",
    name: "Susan Peter",
    slug: "susan-peter",
    session: "Mobility & wellness",
  },
  {
    id: 5,
    img: "/trainer-3.webp",
    name: "John Do",
    slug: "john-do",
    session: "Strength & Condition",
  },
  {
    id: 6,
    img: "/gymnast.webp",
    name: "Hammed Bell",
    slug: "hammed-bell",
    session: "Cardio & endurance",
  },
  {
    id: 7,
    img: "/trainer-3.webp",
    name: "John ",
    slug: "john",
    session: "Strength & Condition",
  },
  {
    id: 8,
    img: "/gymnast.webp",
    name: "Hammed",
    slug: "hammed",
    session: "Cardio & endurance",
  },
  {
    id: 9,
    img: "/female-trainer.webp",
    name: "Susan",
    slug: "susan",
    session: "Mobility & wellness",
  },
];
