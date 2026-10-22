import { useState } from 'react';
import {
  ArrowRight,
  Bot,
  MessageSquareText,
  Palette,
  Image as ImageIcon,
  Mic,
  Clapperboard,
  Presentation,
  NotebookPen,
  PenLine,
  Store,
  Keyboard,
  FileText,
  Table2,
  MonitorPlay,
  Mail,
  ShieldCheck,
  FolderOpen,
  Laptop,
  Check,
  Plus,
  GraduationCap,
  Home,
  Briefcase,
  Users,
} from 'lucide-react';
import { PAYMENT_URL, type PageId } from '@/data/mockData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

/* ---------------- Content ---------------- */

const AI_TOOLS = [
  { name: 'ChatGPT', use: 'Writing, research, scripts, emails and client proposals', icon: MessageSquareText },
  { name: 'Google Gemini', use: 'Research with live Google results and Workspace help', icon: Bot },
  { name: 'Claude', use: 'Long documents, reports and careful editing', icon: PenLine },
  { name: 'Canva AI', use: 'Posts, thumbnails, logos and ad creatives', icon: Palette },
  { name: 'Leonardo & Ideogram', use: 'Original images and illustrations from a text prompt', icon: ImageIcon },
  { name: 'ElevenLabs', use: 'Natural voice-overs in English, Hindi and more', icon: Mic },
  { name: 'CapCut', use: 'Reels and Shorts with auto-captions and AI edits', icon: Clapperboard },
  { name: 'Gamma', use: 'Full presentations generated from a single outline', icon: Presentation },
  { name: 'Notion AI', use: 'Planning, notes and organising client work', icon: NotebookPen },
];

const ROADMAP = [
  { title: 'Learn the tools', body: 'Hands-on practice with each AI tool in live classes, with recordings to revise from.' },
  { title: 'Pick one income skill', body: 'Choose the earning path that suits your time and interests. Focus beats doing everything.' },
  { title: 'Build your portfolio', body: 'Complete real assignments you can show to clients, reviewed by your mentor.' },
  { title: 'Find your first client', body: 'Set up your profile, write your pitch, and learn how to price and deliver work.' },
];

const COMPUTER_MODULES = [
  {
    name: 'Computer fundamentals',
    icon: Laptop,
    skills: ['Parts of a computer and Windows basics', 'Installing apps and keeping the PC updated', 'Shortcuts that save hours every week'],
  },
  {
    name: 'Typing',
    icon: Keyboard,
    skills: ['Correct finger placement', 'Speed and accuracy practice', 'Typing in English and Hindi'],
  },
  {
    name: 'Microsoft Word',
    icon: FileText,
    skills: ['Letters, resumes and applications', 'Tables, images and page layout', 'Printing and saving as PDF'],
  },
  {
    name: 'Microsoft Excel',
    icon: Table2,
    skills: ['Formulas: SUM, AVERAGE, IF, VLOOKUP', 'Sorting, filters and charts', 'Budgets, attendance and billing sheets'],
  },
  {
    name: 'Microsoft PowerPoint',
    icon: MonitorPlay,
    skills: ['Clean slide design and themes', 'Animations and transitions', 'Presenting with confidence'],
  },
  {
    name: 'Internet, email and Google tools',
    icon: Mail,
    skills: ['Gmail, Google Drive, Docs and Sheets', 'Filling online forms and applications', 'Video calls on Zoom and Google Meet'],
  },
  {
    name: 'Files and folders',
    icon: FolderOpen,
    skills: ['Organising, zipping and sharing files', 'Scanning documents from your phone', 'Backing up to the cloud'],
  },
  {
    name: 'Online safety and digital payments',
    icon: ShieldCheck,
    skills: ['Strong passwords and two-step login', 'Spotting scams and fake links', 'Using UPI and net banking safely'],
  },
];

const AUDIENCE = [
  { title: 'Students', body: 'Earn pocket money while studying and build skills colleges and employers look for.', icon: GraduationCap },
  { title: 'Job seekers', body: 'Add Excel, PowerPoint and AI tools to your resume and stand out in interviews.', icon: Briefcase },
  { title: 'Homemakers', body: 'Work from home on your own schedule with flexible freelance projects.', icon: Home },
  { title: 'Small business owners', body: 'Make your own posts, bills and records instead of paying someone else.', icon: Store },
];

const FAQS = [
  {
    q: 'Do I need any experience with computers or AI?',
    a: 'No. The computer classes start from the very basics, and the AI course assumes you have never used these tools before.',
  },
  {
    q: 'Can I really earn money with AI tools?',
    a: 'Yes, many people earn through freelancing, content and digital products. How much you earn depends on the time and effort you put in. We teach the skills and the process; we do not promise a fixed income.',
  },
  {
    q: 'Can I join with just a mobile phone?',
    a: 'You can attend live classes and use most AI tools on a phone. For Excel, Word and PowerPoint practice, a laptop or desktop is strongly recommended.',
  },
  {
    q: 'What if I miss a live class?',
    a: 'Every class is recorded and added to the Recordings section, so you can watch it whenever you want.',
  },
  {
    q: 'How do I enroll?',
    a: 'Click Enroll Now to go to our secure payment page. After payment you get access to live classes, recordings and assignments.',
  },
];

/* ---------------- Small pieces ---------------- */

function SectionHeading({ title, body }: { title: string; body?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
      {body && <p className="mt-3 text-lg text-slate-600 leading-relaxed">{body}</p>}
    </div>
  );
}

function EnrollButton({ label = 'Enroll now' }: { label?: string }) {
  return (
    <a
      href={PAYMENT_URL}
      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
    >
      {label}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:text-indigo-700"
      >
        <span className="font-semibold text-slate-900">{q}</span>
        <Plus className={`w-5 h-5 shrink-0 text-indigo-600 transition-transform ${open ? 'rotate-45' : ''}`} />
      </button>
      {open && <p className="pb-5 -mt-1 text-slate-600 leading-relaxed max-w-3xl">{a}</p>}
    </div>
  );
}

/* ---------------- Page ---------------- */

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="pb-8">
      {/* Hero */}
      <section className="pt-10 pb-20 sm:pt-16">
        <div className="max-w-3xl">
          <h1 className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Learn AI tools.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
            Master high-income AI tools that help you earn money online, while building
            essential computer skills in PowerPoint, Excel, Word, and everyday computer basics.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <EnrollButton />
            <a
              href="#ai-course"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 text-slate-800 font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              See what you’ll learn
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            {['Recordings of every session', 'Assignments reviewed by mentors'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                {t}
              </li>
            ))}
          </ul>
        </div>

      </section>

      {/* Two tracks */}
      <section className="grid md:grid-cols-2 gap-5 pb-24">
        <a href="#ai-course" className="group rounded-3xl border border-slate-200 p-7 hover:border-indigo-300 transition-colors">
          <Bot className="w-8 h-8 text-indigo-600" />
          <h2 className="mt-5 font-display text-2xl font-bold text-slate-900">AI Tools & Online Earning</h2>
          <p className="mt-2 text-slate-600 leading-relaxed">
            Use AI to write, design, edit videos and build an income through freelancing, content and digital products.
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700">
            View the AI course <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </a>
        <a href="#computer-course" className="group rounded-3xl border border-slate-200 p-7 hover:border-emerald-300 transition-colors">
          <Laptop className="w-8 h-8 text-emerald-600" />
          <h2 className="mt-5 font-display text-2xl font-bold text-slate-900">Basic Computer Classes</h2>
          <p className="mt-2 text-slate-600 leading-relaxed">
            Excel, Word, PowerPoint, typing, email and online safety, taught step by step from zero.
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700">
            View the computer course <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </a>
      </section>

      {/* AI tools */}
      <section id="ai-course" className="scroll-mt-24 pb-24">
        <SectionHeading
          title="The AI tools you’ll master"
          body="You won’t just watch demos. In every class you open the tool and make something real with it."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200">
          {AI_TOOLS.map((tool) => (
            <div key={tool.name} className="flex gap-4 p-6 border-b border-r border-slate-200">
              <tool.icon className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-slate-900">{tool.name}</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{tool.use}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="pb-24">
        <SectionHeading title="From first class to first client" body="The AI course follows four stages." />
        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ROADMAP.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="font-display text-5xl font-extrabold text-indigo-200">{i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Computer classes */}
      <section id="computer-course" className="scroll-mt-24 pb-24">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div className="lg:sticky lg:top-28 self-start">
            <SectionHeading
              title="Basic computer classes"
              body="Practical skills for school, college, office jobs and running your own work. Every lesson ends with a task you complete on your own computer."
            />
            <div className="mt-8">
              <EnrollButton label="Join the computer course" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {COMPUTER_MODULES.map((mod) => (
              <div key={mod.name}>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <mod.icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-semibold text-slate-900">{mod.name}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {mod.skills.map((s) => (
                    <li key={s} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="pb-24">
        <SectionHeading title="Who these classes are for" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AUDIENCE.map((a) => (
            <div key={a.title} className="rounded-3xl border border-slate-200 p-6">
              <a.icon className="w-6 h-6 text-indigo-600" />
              <h3 className="mt-4 font-display text-lg font-bold text-slate-900">{a.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="pb-24">
        <div className="rounded-3xl border border-slate-200 p-7 sm:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">Everything you need is in your student area</h2>
            <p className="mt-2 text-slate-600">Join classes, rewatch lessons and submit your work, all in one place.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Live classes', page: 'live-classes' as PageId },
              { label: 'Recordings', page: 'recordings' as PageId },
              { label: 'Assignments', page: 'assignments' as PageId },
            ].map((l) => (
              <button
                key={l.label}
                onClick={() => onNavigate(l.page)}
                className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-sm font-medium hover:bg-slate-200 transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24 max-w-3xl">
        <SectionHeading title="Questions students ask" />
        <div className="mt-8 border-t border-slate-200">
          {FAQS.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mb-16 rounded-3xl bg-slate-900 px-7 py-14 sm:px-12 sm:py-16 text-center">
        <Users className="w-8 h-8 mx-auto text-amber-300" />
        <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Start learning skills that pay.
        </h2>
        <p className="mt-3 text-slate-300 max-w-xl mx-auto">
          Enroll today and get access to live classes, recordings and mentor-reviewed assignments.
        </p>
        <div className="mt-8">
          <a
            href={PAYMENT_URL}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-300 text-slate-900 font-semibold hover:bg-amber-200 transition-colors"
          >
            Enroll now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
