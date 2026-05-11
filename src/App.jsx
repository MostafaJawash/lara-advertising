import { Helmet, HelmetProvider } from 'react-helmet-async'
import heroImage from './assets/hero.png'

const whatsappNumber = '966531659055'
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
  {
    title: 'شركة مطابع',
    description:
      'حلول متكاملة لمن يبحث عن مطابع الرياض بجودة ثابتة وتنفيذ سريع للمطبوعات التجارية.',
    alt: 'خدمات شركة مطابع في الرياض للمطبوعات التجارية',
    tone: 'red',
  },
  {
    title: 'طباعة بوكسات',
    description:
      'طباعة بوكسات الرياض بتصاميم مخصصة للتغليف، المتاجر، والهدايا مع تشطيب احترافي.',
    alt: 'طباعة بوكسات في الرياض للتغليف التجاري',
    tone: 'black',
  },
  {
    title: 'طباعة بروشورات',
    description:
      'بروشورات تعريفية وتسويقية تعكس هوية نشاطك وتدعم حملاتك داخل الرياض.',
    alt: 'طباعة بروشورات دعائية في الرياض',
    tone: 'gray',
  },
  {
    title: 'طباعة كروت شخصية',
    description:
      'كروت شخصية فاخرة بتصاميم واضحة وخامات مناسبة للشركات ورواد الأعمال.',
    alt: 'طباعة كروت شخصية فاخرة في الرياض',
    tone: 'red',
  },
  {
    title: 'طباعة أكواب',
    description:
      'طباعة أكواب دعائية وهدايا مكتبية مناسبة للفعاليات والعلامات التجارية.',
    alt: 'طباعة أكواب دعائية في الرياض',
    tone: 'black',
  },
  {
    title: 'طباعة ستكرات',
    description:
      'طباعة ستكرات الرياض للمنتجات، التغليف، الواجهات، والملصقات المقاومة حسب الطلب.',
    alt: 'طباعة ستكرات الرياض للمنتجات والواجهات',
    tone: 'gray',
  },
  {
    title: 'طباعة هدايا دعائية',
    description:
      'هدايا دعائية مطبوعة تساعد شركتك على الظهور باحترافية في المعارض والمناسبات.',
    alt: 'طباعة هدايا دعائية للشركات في الرياض',
    tone: 'red',
  },
  {
    title: 'طباعة ورق فاخر',
    description:
      'طباعة ورق فاخر للمراسلات الرسمية، الدعوات، والمواد التسويقية عالية الجودة.',
    alt: 'طباعة ورق فاخر في الرياض للمراسلات والدعوات',
    tone: 'black',
  },
  {
    title: 'طباعة أظرف',
    description:
      'أظرف مطبوعة بهوية شركتك لتعزيز الحضور الرسمي في المراسلات اليومية.',
    alt: 'طباعة أظرف رسمية بهوية الشركات في الرياض',
    tone: 'gray',
  },
  {
    title: 'طباعة بروفايل شركات',
    description:
      'تصميم وطباعة بروفايل شركات يعرض خدماتك وإنجازاتك بلغة بصرية موثوقة.',
    alt: 'طباعة بروفايل شركات في الرياض',
    tone: 'red',
  },
  {
    title: 'طباعة فولدرات',
    description:
      'فولدرات عملية وأنيقة للعروض، العقود، والملفات التسويقية الخاصة بالشركات.',
    alt: 'طباعة فولدرات شركات في الرياض',
    tone: 'black',
  },
  {
    title: 'طباعة لوحات بنر',
    description:
      'لوحات بنر الرياض للواجهات والفعاليات والإعلانات الخارجية مع خيارات تركيب وتوصيل.',
    alt: 'طباعة لوحات بنر الرياض للإعلانات الخارجية',
    tone: 'gray',
  },
  {
    title: 'طباعة أكياس (قماش / كرتون)',
    description:
      'أكياس مطبوعة من القماش أو الكرتون للمتاجر والمعارض بتشطيب يناسب علامتك.',
    alt: 'طباعة أكياس قماش وكرتون في الرياض',
    tone: 'red',
  },
]

function serviceImage(title, tone) {
  const fills = {
    red: ['#d71920', '#111111'],
    black: ['#111111', '#d71920'],
    gray: ['#f3f4f6', '#d71920'],
  }
  const [primary, secondary] = fills[tone]
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420">
      <rect width="640" height="420" rx="28" fill="#ffffff"/>
      <rect x="44" y="56" width="552" height="308" rx="24" fill="#f7f7f8"/>
      <rect x="96" y="104" width="448" height="68" rx="14" fill="${primary}"/>
      <rect x="96" y="198" width="250" height="36" rx="10" fill="${secondary}" opacity=".9"/>
      <rect x="96" y="258" width="360" height="20" rx="10" fill="#c9ccd1"/>
      <rect x="96" y="294" width="286" height="20" rx="10" fill="#dfe1e5"/>
      <circle cx="504" cy="268" r="50" fill="${secondary}" opacity=".14"/>
      <text x="320" y="148" text-anchor="middle" font-size="34" font-family="Arial, sans-serif" font-weight="700" fill="#ffffff">${title}</text>
    </svg>
  `
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

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
    'خدمات الطباعة في الرياض, مطابع الرياض, الطباعة في الرياض, طباعة ستكرات الرياض, لوحات بنر الرياض, طباعة بوكسات الرياض, printing services Riyadh',
  sameAs: [mapsUrl],
}

function Seo() {
  const title = 'شركة لارا للطباعة في الرياض | خدمات الطباعة والستكرات والبنر'
  const description =
    'أفضل شركة طباعة في الرياض تقدم خدمات طباعة بوكسات، ستكرات، لوحات بنر، كروت شخصية، وأعمال الطباعة التجارية بجودة عالية وسرعة تنفيذ.'

  return (
    <Helmet>
      <html lang="ar" dir="rtl" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="خدمات الطباعة في الرياض, مطابع الرياض, الطباعة في الرياض, طباعة ستكرات الرياض, لوحات بنر الرياض, طباعة بوكسات الرياض, printing services Riyadh"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="شركة لارا للدعاية والإعلان والطباعة" />
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
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/92 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="التنقل الرئيسي"
      >
        <a href="#home" className="flex min-w-0 flex-col leading-tight" aria-label="شركة لارا الرئيسية">
          <span className="text-base font-black text-zinc-950 sm:text-lg">لارا للطباعة</span>
          <span className="text-xs font-semibold text-red-700">Lara Advertising & Printing</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-bold text-zinc-700 transition hover:bg-red-50 hover:text-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-md bg-red-700 px-4 text-sm font-black text-white shadow-sm transition hover:bg-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
        >
          واتساب
        </a>
      </nav>
      <div className="border-t border-zinc-100 md:hidden">
        <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 sm:px-6" aria-label="روابط الأقسام">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className="inline-flex h-9 items-center rounded-md bg-zinc-50 px-3 text-sm font-bold text-zinc-700"
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
  return <p className="mb-3 text-sm font-black text-red-700">{children}</p>
}

function Hero() {
  return (
    <section id="home" className="scroll-mt-24 bg-white">
      <div className="mx-auto grid min-h-[calc(100svh-68px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-16">
        <div>
          <SectionEyebrow>شركة لارا للدعاية والإعلان والطباعة</SectionEyebrow>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            خدمات الطباعة في الرياض | مطابع الرياض | طباعة ستكرات | لوحات بنر | طباعة بوكسات
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-bold leading-8 text-zinc-700 sm:text-xl">
            لكافة خدمات الطباعة في الرياض بجودة عالية، تنفيذ سريع، وخيارات توصيل وتركيب
            تخدم الشركات والأفراد في جميع أنحاء المدينة.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-md bg-red-700 px-7 text-base font-black text-white shadow-lg shadow-red-900/15 transition hover:-translate-y-0.5 hover:bg-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
            >
              تواصل عبر واتساب
            </a>
            <a
              href="#services"
              className="inline-flex h-14 items-center justify-center rounded-md border border-zinc-300 px-7 text-base font-black text-zinc-950 transition hover:border-red-700 hover:text-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
            >
              تصفح خدماتنا
            </a>
          </div>
        </div>
        <figure className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute inset-8 rounded-full bg-red-100 blur-3xl" aria-hidden="true" />
          <img
            src={heroImage}
            width="340"
            height="360"
            alt="تصميم طبقات مطبوعة يرمز إلى خدمات الطباعة في الرياض"
            className="relative mx-auto h-auto w-[72%] max-w-[360px] drop-shadow-2xl"
            fetchPriority="high"
          />
          <figcaption className="relative mt-8 grid grid-cols-2 gap-3 text-center text-sm font-black text-zinc-800">
            <span className="rounded-md border border-zinc-200 bg-white p-3 shadow-sm">طباعة تجارية</span>
            <span className="rounded-md border border-zinc-200 bg-white p-3 shadow-sm">دعاية وتغليف</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-zinc-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <SectionEyebrow>خدمات الطباعة داخل الرياض</SectionEyebrow>
          <h2 className="text-3xl font-black text-zinc-950 sm:text-4xl">من نحن</h2>
          <div className="mt-6 space-y-5 text-lg leading-9 text-zinc-700">
            <p>
              شركة لارا للدعاية والإعلان والطباعة هي شركة رائدة في مجال خدمات الطباعة
              في مدينة الرياض، نقدم حلول طباعة متكاملة للشركات والأفراد باستخدام أحدث
              تقنيات الطباعة الرقمية والتجارية.
            </p>
            <p>
              نقدم خدمات تشمل تصميم وطباعة المواد الإعلانية، التغليف، اللوحات
              الإعلانية، الكروت الشخصية، والمواد الدعائية بجودة عالية وسرعة تنفيذ.
            </p>
            <p>
              نهدف إلى تقديم نتائج تفوق توقعات العملاء من خلال الجودة والدقة
              والابتكار، مع اهتمام واضح بتفاصيل الهوية البصرية لكل مشروع.
            </p>
          </div>
        </div>
        <figure className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-xl shadow-zinc-950/5">
          <img
            src={serviceImage('مطابع الرياض', 'red')}
            width="640"
            height="420"
            loading="lazy"
            alt="خدمات الطباعة في الرياض من شركة لارا للدعاية والإعلان والطباعة"
            className="h-full min-h-[280px] w-full object-cover"
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
          <SectionEyebrow>نصل إليك أينما كنت</SectionEyebrow>
          <h2 className="text-3xl font-black text-zinc-950 sm:text-4xl">موقعنا في الرياض</h2>
          <p className="mt-5 text-lg leading-9 text-zinc-700">
            نخدم جميع مناطق الرياض ونوفر التوصيل والتركيب حسب الطلب. سواء كنت تحتاج
            الطباعة في الرياض لمتجر، مكتب، معرض، أو حملة إعلانية، يساعدك فريق لارا
            على اختيار الخامة المناسبة وتنفيذها بدقة.
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-md border border-zinc-300 px-5 text-sm font-black text-zinc-950 transition hover:border-red-700 hover:text-red-700"
          >
            فتح الموقع على خرائط Google
          </a>
        </div>
        <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-xl shadow-zinc-950/5">
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
    <section id="services" className="scroll-mt-24 bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-black text-red-300">حلول طباعة متكاملة</p>
          <h2 className="text-3xl font-black sm:text-4xl">خدماتنا</h2>
          <p className="mt-5 text-lg leading-9 text-zinc-300">
            نقدم printing services Riyadh وخدمات عربية متخصصة تشمل الدعاية، التغليف،
            البنرات، الستكرات، والمطبوعات التجارية بجودة تناسب حضور علامتك.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-lg bg-white text-zinc-950 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-950/20"
            >
              <img
                src={serviceImage(service.title, service.tone)}
                width="640"
                height="420"
                loading="lazy"
                alt={service.alt}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <SectionEyebrow>ابدأ طلبك الآن</SectionEyebrow>
        <h2 className="text-3xl font-black text-zinc-950 sm:text-4xl">
          تواصل معنا الآن للحصول على أفضل عروض الطباعة في الرياض
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-zinc-700">
          أخبرنا بنوع الطباعة، الكمية، والمقاس المطلوب، وسيساعدك فريق شركة لارا في
          اختيار الحل المناسب مع عرض سعر واضح وسرعة في التنفيذ.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-14 w-full items-center justify-center rounded-md bg-red-700 px-8 text-base font-black text-white shadow-lg shadow-red-900/15 transition hover:bg-zinc-950 sm:w-auto"
          >
            اطلب عرض سعر عبر واتساب
          </a>
          <a
            href="tel:+966531659055"
            className="inline-flex h-14 w-full items-center justify-center rounded-md border border-zinc-300 px-8 text-base font-black text-zinc-950 transition hover:border-red-700 hover:text-red-700 sm:w-auto"
          >
            +966 53 165 9055
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
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-sm font-black text-white shadow-2xl shadow-green-950/25 transition hover:scale-105 hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
    >
      WA
    </a>
  )
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 px-4 py-8 text-center text-sm font-semibold text-zinc-600">
      <p>شركة لارا للدعاية والإعلان والطباعة - خدمات الطباعة في الرياض</p>
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
