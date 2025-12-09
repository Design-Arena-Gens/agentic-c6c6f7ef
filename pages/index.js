import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Problems from '../components/Problems'
import Solution from '../components/Solution'
import CaseStudies from '../components/CaseStudies'
import Process from '../components/Process'
import ContactForm from '../components/ContactForm'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adcraze | Performance-Based Digital Advertising That Scales Revenue</title>
        <meta name="description" content="Stop wasting ad spend. Data-driven campaigns that deliver real ROI—no fluff, no excuses, just results. Get your free strategy call today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <CaseStudies />
        <Process />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
