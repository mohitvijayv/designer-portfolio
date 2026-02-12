import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mahima Gupta",
  jobTitle: "Senior Graphic Designer",
  url: "https://mahimagupta.vercel.app",
  image: "https://mahimagupta.vercel.app/mahima.JPG",
  email: "mahimagupta7707@gmail.com",
  telephone: "+91-9217812776",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurgaon",
    addressCountry: "IN",
  },
  sameAs: ["https://linkedin.com/in/mahimagupta787"],
  knowsAbout: [
    "Graphic Design",
    "Brand Identity",
    "Packaging Design",
    "Performance Creatives",
    "Motion Graphics",
    "Visual Storytelling",
    "Figma",
    "Adobe Illustrator",
    "Adobe Photoshop",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Newmi Care",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Delhi",
    },
    {
      "@type": "EducationalOrganization",
      name: "Arena Animation",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
    </>
  );
}
