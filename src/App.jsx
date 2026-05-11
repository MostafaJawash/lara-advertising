import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useState } from 'react'
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPrint,
  FaWhatsapp,
} from 'react-icons/fa'
import laraLogo from '../Lara.png'
import stickersSGImage from '../ستيكرات SG.png'
import boxesImage from '../بوكسات هدايا دعائية11 (2).png'
import giftBoxesImage from '../بوكسات هدايا دعائية11.png'
import sealsImage from '../أختام.png'
import cupsImage from '../اكواب.png'
import acrylicImage from '../اكرليك.png'
import bagsImage from '../اكياس قماش وكرتون.png'
import flagsImage from '../اعلام.png'
import brandIdentityImage from '../هوية بصرية كاملة.png'
import bannerStandImage from '../لوحات بنر وستاند آب.png'

const whatsappNumber = '966531659055'
const phoneDisplay = '+966 53 165 9055'
const whatsappMessage = encodeURIComponent('مرحبا، أريد الاستفسار عن خدمات الطباعة')
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
const mapsUrl = 'https://maps.app.goo.gl/9UKAhYHehobnTfCp9?g_st=iwb'

const navLinks = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#about', label: 'من نحن' },
  { href: '#location', label: 'موقعنا' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#contact', label: 'تواصل معنا' },
]

const services = [
  { title: 'ستيكرات SG', image: stickersSGImage },
  { title: 'بوكسات', image: boxesImage },
  { title: 'بوكسات هدايا دعائية', image: giftBoxesImage },
  { title: 'أختام', image: sealsImage },
  { title: 'اكواب', image: cupsImage },
  { title: 'اكرليك', image: acrylicImage },
  { title: 'اكياس قماش وكرتون', image: bagsImage },
  { title: 'اعلام', image: flagsImage },
  { title: 'هوية بصرية كاملة', image: brandIdentityImage },
  { title: 'لوحات بنر وستاند آب', image: bannerStandImage },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'PrintingService',
  name: 'شركة لارا للدعاية والإعلان والطباعة',
  alternateName: 'Lara Advertising & Printing',
  description:
    'شركة طباعة في الرياض تقدم خدمات طباعة بوكسات، ستكرات، لوحات بنر، كروت شخصية، بروشورات، مواد دعائية، وتغليف للشركات والأفراد.',
  url: 'https://lara-advertising.local/',
  telephone: '+966531659055',
  areaServed: {
    '@type': 'City',
    name: 'Riyadh',
    alternateName: 'الرياض',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Riyadh',
    addressRegion: 'Riyadh Province',
    addressCountry: 'SA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    address: 'Riyadh, Saudi Arabia',
  },
  openingHours: 'Sa-Th 09:00-22:00',
  priceRange: '$$',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+966531659055',
    contactType: 'customer service',
    availableLanguage: ['Arabic', 'English'],
  },
  keywords:
    'خدمات الطباعة في الرياض, مطابع الرياض, الطباعة في الرياض, طباعة ستكرات الرياض, لوحات بنر الرياض, printing services Riyadh',
  sameAs: [mapsUrl],
}

function Seo() {
  const title = 'شركة لارا للطباعة'
  const description =
    'شركة لارا للدعاية والإعلان والطباعة تقدم خدمات الطباعة في الرياض: طباعة ستكرات، لوحات بنر، بوكسات، كروت شخصية، بروشورات، وتغليف احترافي.'

  return (
    <Helmet>
      <html lang="ar" dir="rtl" />
      <title>{title}</title>
      <meta
        name="google-site-verification"
        content="eMz8EexTzfYLfdkf-cuX2_BOqFth5Pdp74XiY7bJK7k"
      />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="خدمات الطباعة في الرياض, مطابع الرياض, الطباعة في الرياض, طباعة ستكرات الرياض, لوحات بنر الرياض, printing services Riyadh"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="شركة لارا للدعاية والإعلان والطباعة" />
      <meta name="theme-color" content="#6D28D9" />
      <link rel="canonical" href="https://lara-advertising.local/" />
      <meta property="og:locale" content="ar_SA" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="شركة لارا للدعاية والإعلان والطباعة" />
      <meta property="og:image" content="/favicon.svg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/favicon.svg" />
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
    </Helmet>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-purple-100 bg-white/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="التنقل الرئيسي"
      >
        <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="شركة لارا الرئيسية">
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-md border border-slate-200 bg-white">
            <img src={laraLogo} alt="شعار شركة لارا" className="h-full w-full object-cover" />
          </span>
          <span className="flex min-w-0 flex-col gap-0.5 leading-tight">
            <span className="text-sm font-semibold text-zinc-900 sm:text-base">شركة لارا للطباعة</span>
            <span className="text-xs font-semibold text-purple-700">Lara Advertising & Printing</span>
          </span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-bold text-zinc-700 transition hover:bg-purple-50 hover:text-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t border-purple-50 md:hidden">
        <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 sm:px-6" aria-label="روابط الأقسام">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className="inline-flex h-9 items-center rounded-md bg-purple-50 px-3 text-sm font-bold text-purple-800"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

function SectionEyebrow({ children }) {
  return <p className="mb-4 text-base font-extrabold tracking-tight text-purple-700 sm:text-lg">{children}</p>
}

function Hero() {
  return (
    <section id="home" className="scroll-mt-24 bg-white">
      <div className="mx-auto grid min-h-[calc(100svh-68px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div>
          <SectionEyebrow>شركة لارا للدعاية والإعلان والطباعة</SectionEyebrow>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            خدمات الطباعة في الرياض للشركات والمتاجر بجودة احترافية
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-bold leading-8 text-zinc-700 sm:text-xl">
            مطابع الرياض التي تجمع بين التصميم، الطباعة، التغليف، البنرات، وطباعة
            ستكرات الرياض في تجربة سريعة ومنظمة تناسب احتياجك التجاري.
          </p>
          <figure className="relative mx-auto mt-8 w-full max-w-[540px]">
            <img
              src={laraLogo}
              width="340"
              height="360"
              alt="شعار شركة لارا للطباعة في الرياض"
              className="relative mx-auto h-auto w-[74%] max-w-[380px] drop-shadow-2xl"
              fetchPriority="high"
            />
          </figure>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-md bg-purple-700 px-7 text-base font-black text-white shadow-lg shadow-purple-950/15 transition hover:-translate-y-0.5 hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
            >
              <FaPrint aria-hidden="true" className="h-5 w-5" />
              تصفح خدماتنا
            </a>
            <a
              href="#contact"
              className="inline-flex h-14 items-center justify-center rounded-md border border-purple-200 px-7 text-base font-black text-purple-800 transition hover:border-purple-700 hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
            >
              معلومات التواصل
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-purple-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <SectionEyebrow>مطابع الرياض بخدمة منظمة</SectionEyebrow>
          <h2 className="text-3xl font-black text-zinc-950 sm:text-4xl">من نحن</h2>
          <div className="mt-6 space-y-5 text-lg leading-9 text-zinc-700">
            <p>
              شركة لارا للدعاية والإعلان والطباعة تقدم حلول طباعة في الرياض للشركات،
              المتاجر، ورواد الأعمال، من الفكرة والتصميم حتى التسليم النهائي.
            </p>
            <p>
              نركز على جودة الخامة، وضوح الألوان، ودقة التشطيب في طباعة البوكسات،
              الستكرات، لوحات البنر، الكروت الشخصية، البروشورات، ومواد التغليف.
            </p>
            <p>
              هدفنا أن يحصل العميل على مطبوعات عملية تعكس هوية علامته التجارية وتخدم
              حملاته اليومية والمعارض والمناسبات داخل الرياض.
            </p>
          </div>
        </div>
        <figure className="overflow-hidden rounded-lg border border-purple-100 bg-white shadow-xl shadow-purple-950/5">
          <img
            src={laraLogo}
            width="680"
            height="520"
            loading="lazy"
            alt="خدمات الطباعة في الرياض من شركة لارا للدعاية والإعلان والطباعة"
            className="h-full min-h-[280px] w-full object-contain p-8"
          />
        </figure>
      </div>
    </section>
  )
}

function Location() {
  return (
    <section id="location" className="scroll-mt-24 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8 lg:py-24">
        <div>
          <SectionEyebrow>خدمة طباعة داخل الرياض</SectionEyebrow>
          <h2 className="text-3xl font-black text-zinc-950 sm:text-4xl">موقعنا في الرياض</h2>
          <p className="mt-5 text-lg leading-9 text-zinc-700">
            نخدم جميع أحياء الرياض بخدمات طباعة سريعة وواضحة للشركات والمتاجر. يمكنك
            طلب طباعة ستكرات الرياض، لوحات بنر الرياض، البوكسات، والتغليف مع تنسيق
            التوصيل أو التركيب حسب احتياج المشروع.
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md border border-purple-200 px-5 text-sm font-black text-purple-800 transition hover:border-purple-700 hover:bg-purple-50"
          >
            <FaMapMarkerAlt aria-hidden="true" className="h-4 w-4" />
            فتح الموقع على خرائط Google
          </a>
        </div>
        <div className="overflow-hidden rounded-lg border border-purple-100 shadow-xl shadow-purple-950/5">
          <iframe
            title="موقع شركة لارا للدعاية والإعلان والطباعة في الرياض"
            src="https://www.google.com/maps?q=Riyadh%2C%20Saudi%20Arabia&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-slate-100 text-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-black text-slate-600">حلول طباعة متكاملة</p>
          <h2 className="text-3xl font-black sm:text-4xl">خدماتنا</h2>
          <p className="mt-5 text-lg leading-9 text-slate-700">
            نقدم printing services Riyadh وخدمات عربية متخصصة تشمل الدعاية، التغليف،
            البنرات، الستكرات، والمطبوعات التجارية بجودة تناسب حضور علامتك.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => {
            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10"
              >
                <div className="flex aspect-square items-center justify-center rounded-xl bg-slate-50 p-3">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-3 text-center text-sm font-bold leading-6 text-zinc-900 sm:text-base">
                  {service.title}
                </h3>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [showPhone, setShowPhone] = useState(false)

  const revealPhone = () => {
    if (!showPhone) {
      setShowPhone(true)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <SectionEyebrow>تواصل معنا</SectionEyebrow>
        <h2 className="text-3xl font-black text-zinc-950 sm:text-4xl">
          احصل على عرض مناسب لخدمات الطباعة في الرياض
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-zinc-700">
          أخبرنا بنوع الطباعة، الكمية، المقاس، والخامة المطلوبة، وسيساعدك فريق لارا
          في اختيار الحل الأنسب لمشروعك التجاري أو الإعلاني.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="flex w-full max-w-sm items-center justify-center sm:w-auto">
            <button
              type="button"
              onClick={revealPhone}
              onPointerDown={revealPhone}
              onPointerMove={revealPhone}
              className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-purple-300 bg-white text-purple-700 transition hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
              aria-label="إظهار رقم الهاتف"
            >
              <FaArrowRight aria-hidden="true" className="h-5 w-5" />
            </button>
            <a
              href="tel:+966531659055"
              className={`inline-flex h-14 items-center justify-center overflow-hidden whitespace-nowrap rounded-md border border-purple-200 bg-purple-50 text-lg font-bold text-purple-900 transition-all duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 ${
                showPhone
                  ? 'mr-3 max-w-sm translate-x-0 px-6 opacity-100'
                  : 'mr-0 max-w-0 translate-x-6 px-0 opacity-0 pointer-events-none'
              }`}
              aria-label={`اتصل على ${phoneDisplay}`}
            >
              <FaPhoneAlt aria-hidden="true" className="ms-2 h-5 w-5 shrink-0" />
              <span dir="ltr">{phoneDisplay}</span>
            </a>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-green-500 px-6 text-lg font-black text-white transition hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 sm:w-auto"
            aria-label="تواصل مع شركة لارا عبر واتساب"
          >
            <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
            <span>واتساب</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function FloatingWhatsapp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="تواصل مع شركة لارا عبر واتساب"
      className="fixed bottom-4 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-950/25 transition hover:scale-105 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
    >
      <FaWhatsapp aria-hidden="true" className="h-7 w-7" />
    </a>
  )
}

function Footer() {
  return (
    <footer className="border-t border-purple-100 bg-purple-50 px-4 py-8 text-center text-sm font-semibold text-zinc-600">
      <p>شركة لارا للدعاية والإعلان والطباعة - خدمات الطباعة في الرياض</p>
      <p className="mt-3">جميع الحقوق محفوظة © شركة لارا للطباعة</p>
    </footer>
  )
}

function App() {
  return (
    <HelmetProvider>
      <Seo />
      <div className="min-h-screen bg-white font-sans text-zinc-950">
        <Header />
        <main>
          <Hero />
          <About />
          <Location />
          <Services />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsapp />
      </div>
    </HelmetProvider>
  )
}

export default App
