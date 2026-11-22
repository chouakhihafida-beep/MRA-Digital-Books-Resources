import { FormEvent, useMemo, useState } from 'react';
import { MotionConfig, motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import {
  DIGITAL_EDITIONS,
  EDITORIAL_PILLARS,
  STORE_INFO,
  STORE_SPECS,
  type DigitalEdition,
} from './data/storeData';
import { ResilientImage } from './components/ResilientImage';
import { EditionPreviewModal } from './components/EditionPreviewModal';

type FilterCategory = 'all' | 'reflection' | 'action';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('all');
  const [activeEdition, setActiveEdition] = useState<DigitalEdition | null>(null);

  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const filteredEditions = useMemo(() => {
    if (selectedFilter === 'all') return DIGITAL_EDITIONS;
    return DIGITAL_EDITIONS.filter((item) => item.categoryKey === selectedFilter);
  }, [selectedFilter]);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = subscriberEmail.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmed) {
      setFormError('Please enter your email address.');
      return;
    }
    if (!emailPattern.test(trimmed)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setFormError(null);
    setIsSubscribed(true);
    setSubscriberEmail('');
  };

  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="min-h-screen flex flex-col bg-[#091A14] text-[#F6F4EE]">
        {/* Top Bar Contract: 3 clean zones separated by gap-8 */}
        <header className="w-full border-b border-[#1D3E32] bg-[#091A14]">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 h-16 flex items-center justify-between gap-8">
            {/* Zone 1: Single-line brand wordmark */}
            <a
              href="#top"
              className="text-lg font-bold tracking-tight text-[#F6F4EE] hover:text-[#E2C15A] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
            >
              {STORE_INFO.brandName}
            </a>

            {/* Zone 2: 4 concise single-line nav links */}
            <nav
              aria-label="Primary navigation"
              className="hidden md:flex items-center gap-7 text-sm font-medium text-[#B8C5BE]"
            >
              <a
                href="#editions"
                className="hover:text-[#E2C15A] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0 py-2"
              >
                Editions
              </a>
              <a
                href="#philosophy"
                className="hover:text-[#E2C15A] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0 py-2"
              >
                About
              </a>
              <a
                href="#reading-experience"
                className="hover:text-[#E2C15A] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0 py-2"
              >
                Delivery
              </a>
              <a
                href="#updates"
                className="hover:text-[#E2C15A] hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0 py-2"
              >
                Updates
              </a>
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center shrink-0">
              <a
                href={STORE_INFO.gumroadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-[#091A14] bg-[#D4AF37] hover:bg-[#E2C15A] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
              >
                <span>Visit Gumroad Store</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {/* Section 1: Split Hero + Full-width 4-Column Spec Strip */}
          <section className="max-w-[1200px] mx-auto px-6 sm:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              {/* Hero Copy Column */}
              <div className="lg:col-span-6 flex flex-col justify-center py-2">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                  className="text-xs sm:text-sm font-medium text-[#E2C15A] mb-4"
                >
                  {STORE_INFO.fullTitle}
                  <span className="mx-2 text-[#4A6B5D]" aria-hidden="true">·</span>
                  <span className="text-[#B8C5BE]">najisaid.gumroad.com</span>
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08, ease: EASE_OUT_EXPO }}
                  className="headline-balance font-display font-bold text-[#F6F4EE] tracking-tight leading-[1.14]"
                  style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
                >
                  Focused digital books built to turn ideas into real action
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.16, ease: EASE_OUT_EXPO }}
                  className="mt-5 text-base sm:text-[17px] leading-relaxed text-[#C5D1CB] max-w-[54ch]"
                >
                  Welcome to the official MRA storefront on Gumroad. Explore curated
                  digital titles written for clarity, reflection, and daily follow-through—with
                  instant download access right after checkout.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.22, ease: EASE_OUT_EXPO }}
                  className="mt-4 text-sm font-mono text-[#E2C15A]/90"
                >
                  “{STORE_INFO.welcomeQuote}”
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.28, ease: EASE_OUT_EXPO }}
                  className="mt-8 flex flex-wrap items-center gap-4"
                >
                  <a
                    href="#editions"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#091A14] bg-[#D4AF37] hover:bg-[#E2C15A] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                  >
                    Browse Editions
                  </a>
                  <a
                    href={STORE_INFO.gumroadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-3 text-sm font-medium text-[#F6F4EE] bg-[#0F271F] border border-[#244D3E] hover:border-[#D4AF37]/60 hover:bg-[#143228] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                  >
                    <span>Open Gumroad Profile</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E2C15A]" aria-hidden="true" />
                  </a>
                </motion.div>
              </div>

              {/* Hero Visual Column */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.65, delay: 0.14, ease: EASE_OUT_EXPO }}
                className="lg:col-span-6"
              >
                <div className="w-full h-full min-h-[280px] sm:min-h-[360px] rounded-lg overflow-hidden border border-[#244D3E] bg-[#0F271F]">
                  <ResilientImage
                    src={STORE_INFO.heroImage}
                    alt={STORE_INFO.heroImageAlt}
                    fallbackTitle={STORE_INFO.fullTitle}
                    className="w-full h-full lg:h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Full-width 4-column editorial specification strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34, ease: EASE_OUT_EXPO }}
              className="mt-12 lg:mt-16 pt-8 border-t border-[#1D3E32] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {STORE_SPECS.map((spec) => (
                <div key={spec.label} className="flex flex-col gap-1.5">
                  <span className="font-mono text-2xl font-medium text-[#E2C15A] tabular-nums">
                    {spec.index}
                  </span>
                  <h2 className="text-sm font-semibold text-[#F6F4EE]">{spec.label}</h2>
                  <p className="text-sm text-[#A5B6AE] leading-6">{spec.detail}</p>
                </div>
              ))}
            </motion.div>
          </section>

          {/* Section 2: Featured Digital Editions */}
          <section
            id="editions"
            className="border-t border-[#1D3E32] bg-[#0D221B] py-16 lg:py-24"
          >
            <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#1D3E32]">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                >
                  <p className="text-xs font-medium text-[#E2C15A] mb-2">
                    Current Catalog
                  </p>
                  <h2 className="headline-balance font-display text-2xl sm:text-3xl font-bold text-[#F6F4EE] tracking-tight">
                    Digital Editions Available on Gumroad
                  </h2>
                </motion.div>

                {/* Interactive segmented filter tabs */}
                <div
                  role="group"
                  aria-label="Filter editions"
                  className="inline-flex items-center gap-1 p-1 bg-[#091A14] border border-[#1D3E32] rounded-md self-start md:self-auto"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedFilter('all')}
                    aria-pressed={selectedFilter === 'all'}
                    className={`px-3.5 py-2 text-xs font-medium rounded transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[36px] ${
                      selectedFilter === 'all'
                        ? 'bg-[#D4AF37] text-[#091A14] font-semibold'
                        : 'text-[#B8C5BE] hover:text-[#F6F4EE]'
                    }`}
                  >
                    All (02)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedFilter('reflection')}
                    aria-pressed={selectedFilter === 'reflection'}
                    className={`px-3.5 py-2 text-xs font-medium rounded transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[36px] ${
                      selectedFilter === 'reflection'
                        ? 'bg-[#D4AF37] text-[#091A14] font-semibold'
                        : 'text-[#B8C5BE] hover:text-[#F6F4EE]'
                    }`}
                  >
                    Word of Mouth
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedFilter('action')}
                    aria-pressed={selectedFilter === 'action'}
                    className={`px-3.5 py-2 text-xs font-medium rounded transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[36px] ${
                      selectedFilter === 'action'
                        ? 'bg-[#D4AF37] text-[#091A14] font-semibold'
                        : 'text-[#B8C5BE] hover:text-[#F6F4EE]'
                    }`}
                  >
                    Strategy &amp; Action
                  </button>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {filteredEditions.map((edition, index) => (
                  <motion.article
                    key={edition.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.02 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                      ease: EASE_OUT_EXPO,
                    }}
                    className="group flex flex-col justify-between bg-[#091A14] border border-[#1F4235] hover:border-[#D4AF37]/50 rounded-lg p-6 sm:p-8 transition-[transform,border-color] duration-200 hover:-translate-y-1"
                  >
                    <div>
                      {/* Official 16:9 Gumroad Cover Display */}
                      <div className="aspect-video w-full bg-[#07130E] rounded-md overflow-hidden border border-[#1D3E32] mb-6">
                        <ResilientImage
                          src={edition.coverImage}
                          alt={edition.coverAlt}
                          fallbackTitle={edition.title}
                          className="w-full h-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                        />
                      </div>

                      {/* Unboxed Clean Metadata */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2 text-xs text-[#A5B6AE]">
                          <span className="font-mono tabular-nums text-[#E2C15A]">
                            {edition.indexNumber}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{edition.categoryLabel}</span>
                          <span aria-hidden="true">·</span>
                          <span>{edition.format}</span>
                        </div>
                        <span className="font-mono text-sm font-semibold text-[#E2C15A] tabular-nums">
                          {edition.priceLabel}
                        </span>
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F6F4EE] tracking-tight">
                        {edition.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[#D4AF37] leading-6">
                        {edition.subtitle}
                      </p>

                      <p className="mt-4 text-[15px] leading-7 text-[#C5D1CB]">
                        {edition.shortDescription}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#1D3E32] flex flex-wrap items-center gap-3">
                      <a
                        href={edition.gumroadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-[#091A14] bg-[#D4AF37] hover:bg-[#E2C15A] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                      >
                        <span>Get on Gumroad ({edition.priceLabel})</span>
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </a>

                      <button
                        type="button"
                        onClick={() => setActiveEdition(edition)}
                        className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#F6F4EE] bg-[#0F271F] border border-[#244D3E] hover:border-[#D4AF37]/60 hover:bg-[#143228] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                      >
                        Preview Details
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Editorial Philosophy & Reading Experience */}
          <section
            id="philosophy"
            className="border-t border-[#1D3E32] bg-[#091A14] py-16 lg:py-24"
          >
            <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                  className="lg:col-span-5"
                >
                  <p className="text-xs font-medium text-[#E2C15A] mb-2">
                    Publishing Approach
                  </p>
                  <h2 className="headline-balance font-display text-2xl sm:text-3xl font-bold text-[#F6F4EE] tracking-tight leading-snug">
                    Practical reading built for clarity and fast delivery
                  </h2>
                  <p className="mt-4 text-[15px] leading-7 text-[#C5D1CB]">
                    MRA focuses on direct, purposeful digital publications hosted on
                    Gumroad—keeping the entire experience centered on clean ideas and
                    effortless access without unnecessary friction.
                  </p>
                  <div className="mt-6">
                    <a
                      href={STORE_INFO.gumroadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E2C15A] hover:underline underline-offset-4 whitespace-nowrap py-2"
                    >
                      <span>Visit Official Storefront on Gumroad</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </motion.div>

                <div
                  id="reading-experience"
                  className="lg:col-span-7 divide-y divide-[#1D3E32] border-t border-b border-[#1D3E32]"
                >
                  {EDITORIAL_PILLARS.map((pillar, index) => (
                    <motion.div
                      key={pillar.number}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.05 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                        ease: EASE_OUT_EXPO,
                      }}
                      className="py-7 first:pt-6 last:pb-6 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline"
                    >
                      <span className="sm:col-span-2 font-mono text-sm font-medium text-[#D4AF37] tabular-nums">
                        {pillar.number}
                      </span>
                      <div className="sm:col-span-10">
                        <h3 className="text-lg font-semibold text-[#F6F4EE]">
                          {pillar.title}
                        </h3>
                        <p className="mt-2 text-[15px] leading-7 text-[#B8C5BE]">
                          {pillar.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Upcoming Releases Notification & Storefront Conversion */}
          <section
            id="updates"
            className="border-t border-[#1D3E32] bg-[#0D221B] py-16 lg:py-20"
          >
            <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                  className="lg:col-span-6"
                >
                  <p className="text-xs font-medium text-[#E2C15A] mb-2">
                    Stay Informed
                  </p>
                  <h2 className="headline-balance font-display text-2xl sm:text-3xl font-bold text-[#F6F4EE] tracking-tight">
                    Explore the store today or follow upcoming releases
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-[#C5D1CB] max-w-[52ch]">
                    Visit the official Gumroad storefront to check live pricing and
                    download current books, or leave your email below to register your
                    interest in future MRA digital resources.
                  </p>
                  <div className="mt-6">
                    <a
                      href={STORE_INFO.gumroadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#091A14] bg-[#D4AF37] hover:bg-[#E2C15A] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                    >
                      <span>Go to najisaid.gumroad.com</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </motion.div>

                <div className="lg:col-span-6">
                  <div className="bg-[#091A14] border border-[#1F4235] rounded-lg p-6 sm:p-8">
                    {isSubscribed ? (
                      <div className="flex flex-col gap-3 py-2">
                        <div className="flex items-center gap-2 text-[#E2C15A] font-semibold text-base">
                          <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                          <span>Interest recorded successfully</span>
                        </div>
                        <p className="text-sm text-[#C5D1CB] leading-6">
                          To receive automatic release alerts directly from Gumroad, you
                          can also click Follow on{' '}
                          <a
                            href={STORE_INFO.gumroadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#E2C15A] font-medium underline underline-offset-4"
                          >
                            MRA’s official Gumroad storefront
                          </a>
                          .
                        </p>
                        <div>
                          <button
                            type="button"
                            onClick={() => setIsSubscribed(false)}
                            className="mt-2 text-xs font-medium text-[#A5B6AE] hover:text-[#F6F4EE] underline underline-offset-4 py-1"
                          >
                            Register another email
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubscribe} noValidate className="flex flex-col gap-4">
                        <div>
                          <label
                            htmlFor="subscriber-email"
                            className="block text-sm font-semibold text-[#F6F4EE] mb-1.5"
                          >
                            New Release Notifications
                          </label>
                          <p className="text-xs text-[#A5B6AE] mb-3">
                            Enter your email address to be notified about upcoming MRA books and digital resources.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <input
                              id="subscriber-email"
                              type="email"
                              value={subscriberEmail}
                              onChange={(event) => {
                                setSubscriberEmail(event.target.value);
                                if (formError) setFormError(null);
                              }}
                              placeholder="name@example.com"
                              aria-invalid={Boolean(formError)}
                              aria-describedby={formError ? 'email-error' : undefined}
                              className="flex-1 min-h-[44px] px-4 py-2.5 text-sm text-[#F6F4EE] bg-[#0D221B] border border-[#244D3E] rounded-md placeholder:text-[#6E867B] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                            />
                            <button
                              type="submit"
                              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#F6F4EE] bg-[#143228] border border-[#2C5D4B] hover:border-[#D4AF37]/70 hover:bg-[#193D31] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                            >
                              Notify Me
                            </button>
                          </div>
                          {formError && (
                            <p id="email-error" role="alert" className="mt-2 text-xs text-[#F59E0B] font-medium">
                              {formError}
                            </p>
                          )}
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Quiet Footer */}
        <footer className="border-t border-[#1D3E32] bg-[#091A14] py-10">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-[#F6F4EE]">
                {STORE_INFO.fullTitle}
              </p>
              <p className="mt-1 text-xs text-[#9CB0A7]">
                All product links and purchases connect directly to the official Gumroad storefront.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#B8C5BE]">
              <a href="#editions" className="hover:text-[#E2C15A] whitespace-nowrap">
                Editions
              </a>
              <a href="#philosophy" className="hover:text-[#E2C15A] whitespace-nowrap">
                About
              </a>
              <a
                href={STORE_INFO.gumroadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E2C15A] hover:underline underline-offset-4 whitespace-nowrap"
              >
                najisaid.gumroad.com
              </a>
            </div>
          </div>
        </footer>

        {/* Interactive Edition Detail Modal */}
        <EditionPreviewModal
          edition={activeEdition}
          onClose={() => setActiveEdition(null)}
        />
      </div>
    </MotionConfig>
  );
}
