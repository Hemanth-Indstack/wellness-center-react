import { useState } from "react"

import Navbar from "./components/layout/Navbar"
import Hero from "./sections/Hero"
import Services from "./sections/Services"
import About from "./sections/About"
import CTA from "./sections/CTA"
import Footer from "./components/layout/Footer"

import AppointmentModal from "./ui/AppointmentModal"
import ContactModal from "./ui/ContactModal"

export default function App() {
  const [appointmentOpen, setAppointmentOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <Navbar
        onBook={() => setAppointmentOpen(true)}
        onContact={() => setContactOpen(true)}
      />

      <Hero onContact={() => setContactOpen(true)} />

      <Services />
      <About />
      <CTA onBook={() => setAppointmentOpen(true)} />

      <Footer onBook={() => setAppointmentOpen(true)} />

      <AppointmentModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  )
}
