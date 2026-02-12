import { siteConfig } from "@/config/site";

export default function Contact() {
  return (
    <section className="px-6 py-24 text-center border-t border-gray-800">
      <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>

      <p className="text-gray-400 mb-8">
        Available for freelance & collaborations.
      </p>

      <a
        href={`mailto:${siteConfig.email}`}
        className="border border-white px-6 py-3 hover:bg-white hover:text-black transition"
      >
        Contact Me
      </a>

      <div className="mt-6">
        <a
          href={siteConfig.linkedin}
          target="_blank"
          className="text-gray-400 hover:text-white"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
