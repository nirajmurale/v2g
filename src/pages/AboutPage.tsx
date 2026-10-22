import {
  Quote,
  Sparkles,
  Briefcase,
  Palette,
  TrendingUp,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  DoorOpen,
} from 'lucide-react';

const ROLES = ['Digital coach', 'Entrepreneur', 'Speaker', 'Founder'];

const INITIATIVES = ['Digital Villages', 'Startup Utsav', 'Digital Connect', 'Digipreneur.AI', 'Telugu AI Bootcamp'];

const SKILLS_TAUGHT = ['Practical digital skills', 'AI tools', 'Automation', 'Branding', 'Freelancing', 'Business growth'];

const BOOTCAMP_OUTCOMES = [
  { icon: GraduationCap, title: 'Students', body: 'build portfolios that open doors.' },
  { icon: Briefcase, title: 'Freelancers', body: 'automate their work and save hours.' },
  { icon: Palette, title: 'Creators', body: 'grow their personal brands.' },
  { icon: TrendingUp, title: 'Business owners', body: 'use AI to generate leads and scale faster.' },
];

const VALUES = [
  { icon: HeartHandshake, title: 'Confidence', body: 'Believing you can learn technology, whatever your background.' },
  { icon: Lightbulb, title: 'Clarity', body: 'Simple, practical teaching in a language you understand.' },
  { icon: DoorOpen, title: 'Opportunity', body: 'Skills you can use in real life, for study, work and business.' },
];

const AUDIENCE = ['Students', 'Creators', 'Entrepreneurs', 'Professionals', 'Homemakers', 'Rural dreamers'];

export default function AboutPage() {
  return (
    <div className="pb-16">
      {/* Founder intro */}
      <section className="mt-2 mb-12 rounded-[2rem] bg-gradient-to-br from-indigo-50 via-white to-violet-50 border border-indigo-100 px-6 py-10 sm:px-12 sm:py-14 grid lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-14 items-center">
        <div className="mx-auto w-full max-w-[260px] sm:max-w-[340px]">
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-2 sm:-inset-3 rounded-[2rem] bg-indigo-600 rotate-3" />
            <img
              src="/founder.jpg"
              alt="Shilpa Pallavi, founder of v2gaiacademy"
              width={640}
              height={803}
              className="relative w-full h-auto rounded-[1.6rem] border-4 border-white object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-indigo-700 font-semibold">Meet the founder</p>
          <h1 className="mt-2 font-display text-[2.6rem] leading-[1.05] sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Shilpa Pallavi
          </h1>
          <ul className="mt-4 flex flex-wrap gap-2">
            {ROLES.map((r) => (
              <li key={r} className="px-3 py-1 rounded-full bg-white border border-indigo-100 text-sm font-medium text-slate-700">
                {r}
              </li>
            ))}
          </ul>
          <blockquote className="mt-7 relative pl-6 border-l-4 border-indigo-600">
            <p className="text-xl sm:text-2xl text-slate-800 leading-relaxed font-medium">
              Technology should not be limited to big cities, English-speaking professionals, or people with technical
              backgrounds. It should reach everyone, in a language they understand and in a way they can use in real life.
            </p>
          </blockquote>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
            {AUDIENCE.map((a) => (
              <li key={a} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Journey */}
      <section className="mb-12 grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">My journey</h2>
          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            Bridging the gap between rural potential and digital opportunity.
          </p>
        </div>
        <div className="space-y-5 text-lg text-slate-700 leading-relaxed">
          <p>
            My journey has always been about bridging the gap between rural potential and digital opportunity. As a
            digital coach, entrepreneur, speaker and founder, I have worked on initiatives that help people learn the
            skills they need to grow.
          </p>
          <div className="flex flex-wrap gap-2">
            {INITIATIVES.map((i) => (
              <span
                key={i}
                className={`px-4 py-2 rounded-xl text-sm font-semibold ${
                  i === 'Telugu AI Bootcamp' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-800'
                }`}
              >
                {i}
              </span>
            ))}
          </div>
          <p>Through these programs, people learn:</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-base">
            {SKILLS_TAUGHT.map((s) => (
              <li key={s} className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Telugu AI Bootcamp */}
      <section className="mb-12 rounded-[2rem] bg-indigo-600 px-6 py-10 sm:px-12 sm:py-12">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">Telugu AI Bootcamp</h2>
          <p className="mt-3 text-lg text-indigo-100 leading-relaxed">
            I started Telugu AI Bootcamp to make AI education simple, practical and accessible in Telugu. What began as a
            training program has grown into a movement.
          </p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BOOTCAMP_OUTCOMES.map((o) => (
            <div key={o.title} className="rounded-2xl bg-white p-6">
              <span className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <o.icon className="w-5 h-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-slate-900">{o.title}</h3>
              <p className="mt-1 text-slate-600 leading-relaxed">{o.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission + values */}
      <section className="mb-12 grid lg:grid-cols-[1fr_1.2fr] gap-4">
        <div className="rounded-[2rem] bg-amber-50 border border-amber-100 p-7 sm:p-10 flex flex-col justify-center">
          <h2 className="font-display text-xl font-bold text-slate-900">My mission</h2>
          <p className="mt-3 font-display text-6xl sm:text-7xl font-extrabold tracking-tight text-amber-600">100,000+</p>
          <p className="mt-3 text-lg text-slate-700 leading-relaxed">
            Telugu people learning AI in Telugu, and using it practically for education, careers, creativity, business
            and everyday growth.
          </p>
        </div>
        <div className="rounded-[2rem] bg-emerald-50 border border-emerald-100 p-7 sm:p-10">
          <h2 className="font-display text-xl font-bold text-slate-900">More than teaching tools</h2>
          <p className="mt-2 text-slate-700">This work is about giving people three things:</p>
          <div className="mt-6 space-y-4">
            {VALUES.map((v) => (
              <div key={v.title} className="flex gap-4 rounded-2xl bg-white border border-emerald-100 p-4">
                <span className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <v.icon className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="max-w-3xl mx-auto text-center pt-4">
        <Quote className="w-9 h-9 mx-auto text-indigo-300" />
        <p className="mt-4 font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
          My story is still being written through every learner who starts believing in their own potential, every
          business that grows with digital skills, and every community that gets access to the opportunities of the AI
          era.
        </p>
        <p className="mt-5 text-slate-600 font-medium">Shilpa Pallavi, Founder, v2gaiacademy</p>
      </section>
    </div>
  );
}
