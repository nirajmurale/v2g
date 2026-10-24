import { Home, UserRound, CreditCard, type LucideIcon } from 'lucide-react';

export type PageId = 'home' | 'about' | 'payment';

export interface NavItem {
  id: PageId;
  label: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: UserRound },
  { id: 'payment', label: 'Payment', icon: CreditCard },
];

/* ---------- Contact & payment details ---------- */
export const WHATSAPP_NUMBER = '9035324065';
export const WHATSAPP_LINK = `https://wa.me/91${WHATSAPP_NUMBER}`;

/** Course fee in rupees — shown on every payment option. */
export const COURSE_FEE = 999;
export const COURSE_FEE_LABEL = '₹999';

export const UPI_ID = '0405pallavi@axl';
export const UPI_NAME = 'PALLAVI B C';
export const UPI_LINK = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(UPI_NAME)}&am=${COURSE_FEE}&cu=INR&mc=0000&mode=02&purpose=00`;

export const BANK_DETAILS = {
  accountName: 'Pallavi BC',
  accountNumber: '149010100072402',
  ifsc: 'UBIN0814903',
  bank: 'Union Bank of India',
};
