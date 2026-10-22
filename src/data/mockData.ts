import {
  Home,
  MonitorPlay,
  Video,
  ClipboardList,
  Users,
  Bell,
  type LucideIcon,
} from 'lucide-react';

export type PageId =
  | 'home'
  | 'live-classes'
  | 'recordings'
  | 'assignments'
  | 'affiliate'
  | 'notifications';

/** External payment page — the Payments menu item and every Enroll button go here. */
export const PAYMENT_URL = 'https://wealthelite.in/payment/pay-online';

export interface NavItem {
  id: PageId | 'payments';
  label: string;
  icon: LucideIcon;
  /** When set, the item links out to this URL instead of switching pages. */
  href?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'live-classes', label: 'Live Classes', icon: MonitorPlay },
  { id: 'recordings', label: 'Recordings', icon: Video },
  { id: 'assignments', label: 'Assignments', icon: ClipboardList },
  { id: 'affiliate', label: 'Affiliate Hub', icon: Users },
  { id: 'notifications', label: 'Notifications', icon: Bell },
];

/* ---------- Stats ---------- */
export interface StatCard {
  label: string;
  value: string;
  sublabel: string;
  trend: 'up' | 'down' | 'neutral';
}

export const STATS: StatCard[] = [
  { label: 'Attendance Rate', value: '92%', sublabel: '+3% this month', trend: 'up' },
  { label: 'Completed Assignments', value: '18/24', sublabel: '6 pending', trend: 'neutral' },
  { label: 'Pending Classes', value: '4', sublabel: 'Next starts in 2h', trend: 'down' },
  { label: 'Hours Studied', value: '127h', sublabel: '+12h this week', trend: 'up' },
];

/* ---------- Live Classes ---------- */
export interface LiveClass {
  id: string;
  title: string;
  date: string;
  time: string;
  instructor: string;
  zoomUrl: string;
  attended?: boolean;
  status?: 'attended' | 'missed' | 'upcoming';
}

export const UPCOMING_CLASSES: LiveClass[] = [
  {
    id: 'lc1',
    title: 'Advanced React Patterns & Hooks',
    date: 'Oct 23, 2026',
    time: '10:00 AM IST',
    instructor: 'Dr. Rajesh Kumar',
    zoomUrl: 'https://zoom.us/j/1234567890',
    status: 'upcoming',
  },
  {
    id: 'lc2',
    title: 'Data Structures Deep Dive: Trees & Graphs',
    date: 'Oct 24, 2026',
    time: '4:00 PM IST',
    instructor: 'Prof. Sneha Patel',
    zoomUrl: 'https://zoom.us/j/2345678901',
    status: 'upcoming',
  },
  {
    id: 'lc3',
    title: 'System Design Fundamentals',
    date: 'Oct 25, 2026',
    time: '11:00 AM IST',
    instructor: 'Arun Vasudevan',
    zoomUrl: 'https://zoom.us/j/3456789012',
    status: 'upcoming',
  },
  {
    id: 'lc4',
    title: 'Python for Data Science — Session 3',
    date: 'Oct 26, 2026',
    time: '6:00 PM IST',
    instructor: 'Dr. Meena Iyer',
    zoomUrl: 'https://zoom.us/j/4567890123',
    status: 'upcoming',
  },
];

export const NEXT_CLASS = UPCOMING_CLASSES[0];

export const ATTENDANCE_HISTORY: LiveClass[] = [
  {
    id: 'ah1',
    title: 'Intro to TypeScript',
    date: 'Oct 15, 2026',
    time: '10:00 AM IST',
    instructor: 'Dr. Rajesh Kumar',
    zoomUrl: '#',
    status: 'attended',
  },
  {
    id: 'ah2',
    title: 'CSS Flexbox & Grid Mastery',
    date: 'Oct 12, 2026',
    time: '4:00 PM IST',
    instructor: 'Prof. Sneha Patel',
    zoomUrl: '#',
    status: 'attended',
  },
  {
    id: 'ah3',
    title: 'JavaScript ES6+ Features',
    date: 'Oct 8, 2026',
    time: '11:00 AM IST',
    instructor: 'Arun Vasudevan',
    zoomUrl: '#',
    status: 'missed',
  },
  {
    id: 'ah4',
    title: 'Database Normalization',
    date: 'Oct 5, 2026',
    time: '6:00 PM IST',
    instructor: 'Dr. Meena Iyer',
    zoomUrl: '#',
    status: 'attended',
  },
  {
    id: 'ah5',
    title: 'REST API Design Best Practices',
    date: 'Oct 1, 2026',
    time: '10:00 AM IST',
    instructor: 'Dr. Rajesh Kumar',
    zoomUrl: '#',
    status: 'missed',
  },
  {
    id: 'ah6',
    title: 'Git & GitHub Workflows',
    date: 'Sep 28, 2026',
    time: '4:00 PM IST',
    instructor: 'Prof. Sneha Patel',
    zoomUrl: '#',
    status: 'attended',
  },
];

/* ---------- Recordings ---------- */
export interface Recording {
  id: string;
  title: string;
  category: string;
  date: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  instructor: string;
}

export const RECORDINGS: Recording[] = [
  {
    id: 'r1',
    title: 'Intro to TypeScript',
    category: 'Web Development',
    date: 'Oct 15, 2026',
    duration: '1h 32m',
    thumbnail: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    instructor: 'Dr. Rajesh Kumar',
  },
  {
    id: 'r2',
    title: 'CSS Flexbox & Grid Mastery',
    category: 'Web Development',
    date: 'Oct 12, 2026',
    duration: '1h 15m',
    thumbnail: 'https://images.pexels.com/photos/27427258/pexels-photo-27427258.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    instructor: 'Prof. Sneha Patel',
  },
  {
    id: 'r3',
    title: 'JavaScript ES6+ Features',
    category: 'Web Development',
    date: 'Oct 8, 2026',
    duration: '2h 05m',
    thumbnail: 'https://images.pexels.com/photos/5125366/pexels-photo-5125366.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    instructor: 'Arun Vasudevan',
  },
  {
    id: 'r4',
    title: 'Database Normalization',
    category: 'Databases',
    date: 'Oct 5, 2026',
    duration: '1h 48m',
    thumbnail: 'https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    instructor: 'Dr. Meena Iyer',
  },
  {
    id: 'r5',
    title: 'REST API Design Best Practices',
    category: 'Backend',
    date: 'Oct 1, 2026',
    duration: '1h 20m',
    thumbnail: 'https://images.pexels.com/photos/5303591/pexels-photo-5303591.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    instructor: 'Dr. Rajesh Kumar',
  },
  {
    id: 'r6',
    title: 'Git & GitHub Workflows',
    category: 'DevOps',
    date: 'Sep 28, 2026',
    duration: '55m',
    thumbnail: 'https://images.pexels.com/photos/8055848/pexels-photo-8055848.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    instructor: 'Prof. Sneha Patel',
  },
  {
    id: 'r7',
    title: 'Python NumPy & Pandas',
    category: 'Data Science',
    date: 'Sep 25, 2026',
    duration: '1h 40m',
    thumbnail: 'https://images.pexels.com/photos/3986613/pexels-photo-3986613.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    instructor: 'Dr. Meena Iyer',
  },
  {
    id: 'r8',
    title: 'Digital Marketing Funnel Strategy',
    category: 'Marketing',
    date: 'Sep 20, 2026',
    duration: '1h 12m',
    thumbnail: 'https://images.pexels.com/photos/9034728/pexels-photo-9034728.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    instructor: 'Arun Vasudevan',
  },
];

export const RECORDING_CATEGORIES = [
  'All',
  ...Array.from(new Set(RECORDINGS.map((r) => r.category))),
];

/* ---------- Assignments ---------- */
export interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  description: string;
  grade?: string;
}

export const ASSIGNMENTS: Assignment[] = [
  {
    id: 'a1',
    title: 'Build a Todo App with React + TypeScript',
    course: 'Advanced React Patterns',
    dueDate: 'Oct 28, 2026',
    status: 'pending',
    description:
      'Create a fully functional Todo application using React, TypeScript, and Tailwind CSS. Include add, edit, delete, and filter functionality. Use localStorage for persistence.',
  },
  {
    id: 'a2',
    title: 'Implement a Binary Search Tree',
    course: 'Data Structures Deep Dive',
    dueDate: 'Oct 30, 2026',
    status: 'pending',
    description:
      'Implement a BST with insert, delete, search, and traversal (in-order, pre-order, post-order) operations. Include unit tests.',
  },
  {
    id: 'a3',
    title: 'Design a URL Shortener System',
    course: 'System Design Fundamentals',
    dueDate: 'Nov 2, 2026',
    status: 'pending',
    description:
      'Design a scalable URL shortener service. Document your architecture, database schema, API design, and scaling strategy. Include a diagram.',
  },
  {
    id: 'a4',
    title: 'Data Analysis with Pandas',
    course: 'Python for Data Science',
    dueDate: 'Oct 18, 2026',
    status: 'submitted',
    description:
      'Use Pandas to analyze the provided dataset. Generate summary statistics, visualizations, and a brief report of your findings.',
  },
  {
    id: 'a5',
    title: 'Create a REST API with CRUD Operations',
    course: 'REST API Design',
    dueDate: 'Oct 10, 2026',
    status: 'graded',
    description:
      'Build a RESTful API for a blog system with CRUD operations for posts and comments. Use Express.js and include proper error handling.',
    grade: 'A',
  },
  {
    id: 'a6',
    title: 'Normalize a Database to 3NF',
    course: 'Database Normalization',
    dueDate: 'Oct 8, 2026',
    status: 'graded',
    description:
      'Given a denormalized schema, normalize it to Third Normal Form (3NF). Show each step and explain the reasoning.',
    grade: 'A+',
  },
];

/* ---------- Affiliate ---------- */
export interface ReferredStudent {
  id: string;
  name: string;
  joinedDate: string;
  status: 'active' | 'pending' | 'completed';
  earnings: string;
}

export const REFERRAL_STUDENTS: ReferredStudent[] = [
  { id: 'ref1', name: 'Aditya Sharma', joinedDate: 'Oct 18, 2026', status: 'active', earnings: '₹2,500' },
  { id: 'ref2', name: 'Priya Nair', joinedDate: 'Oct 14, 2026', status: 'completed', earnings: '₹2,500' },
  { id: 'ref3', name: 'Karthik Reddy', joinedDate: 'Oct 10, 2026', status: 'active', earnings: '₹2,500' },
  { id: 'ref4', name: 'Ananya Gupta', joinedDate: 'Oct 5, 2026', status: 'completed', earnings: '₹2,500' },
  { id: 'ref5', name: 'Vikram Singh', joinedDate: 'Sep 28, 2026', status: 'pending', earnings: '₹0' },
  { id: 'ref6', name: 'Deepa Krishnan', joinedDate: 'Sep 22, 2026', status: 'active', earnings: '₹2,500' },
];

export const AFFILIATE_STATS = {
  totalReferrals: 6,
  activeReferrals: 3,
  totalEarnings: '₹12,500',
  pendingPayout: '₹2,500',
};

/* ---------- Notifications ---------- */
export interface AppNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'class' | 'assignment' | 'payment' | 'general';
  read: boolean;
}

export const NOTIFICATIONS: AppNotification[] = [
  {
    id: 'n1',
    title: 'Live class starts in 30 minutes',
    message: 'Advanced React Patterns & Hooks with Dr. Rajesh Kumar starts at 10:00 AM IST.',
    time: '29 min ago',
    type: 'class',
    read: false,
  },
  {
    id: 'n2',
    title: 'New assignment posted',
    message: 'Build a Todo App with React + TypeScript — due Oct 28, 2026.',
    time: '2 hours ago',
    type: 'assignment',
    read: false,
  },
  {
    id: 'n3',
    title: 'Payment confirmed',
    message: 'Your October tuition payment of ₹5,000 has been verified and confirmed.',
    time: '1 day ago',
    type: 'payment',
    read: true,
  },
  {
    id: 'n4',
    title: 'Recording available',
    message: 'Intro to TypeScript recording is now available in the Recordings section.',
    time: '2 days ago',
    type: 'general',
    read: true,
  },
  {
    id: 'n5',
    title: 'Assignment graded',
    message: 'Your REST API assignment received grade A. Check the Assignments section for feedback.',
    time: '3 days ago',
    type: 'assignment',
    read: true,
  },
  {
    id: 'n6',
    title: 'New course enrollment',
    message: 'You have been enrolled in System Design Fundamentals starting Oct 25, 2026.',
    time: '5 days ago',
    type: 'general',
    read: true,
  },
];
