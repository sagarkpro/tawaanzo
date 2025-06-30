'use server'

/* eslint-disable @next/next/no-img-element */
import ServiceSummary from "@/components/ServiceSummary";
import { HomeContent } from "@/staticContent/HomeContent";
import { lobster } from "@/fonts/Lobster";

export default async function Home() {
  return (
    <div className="p-4 w-full flex flex-wrap justify-center items-stretch">
      <div className="mt-8">
        <h1 className={`text-primary font-semibold text-3xl my-4 ${lobster.className}`}>Who We Are</h1>
        <p className="text-justify my-4">
          We aim to be your &ldquo;one-stop shop&rdquo; for all your needs, whether it&apos;s setting up a business in various jurisdictions, managing Intellectual Property Rights (IPR), obtaining government licenses, or providing post-incorporation compliance solutions. Our services include advisory on business setup, accounting, taxation, and other related professional matters.
        </p>

        <p className="text-justify my-4">
          Our mission is to provide one-click access from anywhere for all your legal and professional needs throughout the lifecycle of your business. We ensure that your business continues to grow while staying compliant with legal and tax authorities.
        </p>

        <p className="text-justify my-4">
          ✅ Trusted by 1000+ Businesses <br />
          ✅ Expert Guidance & Personalized Support <br />
          ✅ Fast, Secure & 100% Online Process <br />
        </p>
      </div>

      <div className="mt-4 flex w-full 2xs:flex-col sm:flex-row">
        <img className="2xs:w-full sm:w-2/5 object-cover object-center" src={`/images/customer-experience-rating.jpg`} alt="Customer Satisfaction" />
        <div className="sm:ml-6 2xs:w-full sm:w-3/5 flex items-center">
          <div className="w-full">
            <p className="text-justify my-4">
              We&apos;re a team of experts and professionals, so we listen attentively and carefully design the roadmap for your business issues. As we&apos;re differentiated through in the industry in-depth knowledge, experience of experts.
            </p>
            <p className="text-justify my-4">
              We are a technology-driven platform of multidisciplinary experts, including Chartered Accountants (CA), Company Secretaries (CS), and Lawyers, who can take care of every aspect of your business.
            </p>
            <p className="text-justify my-4">
              Our team is committed to delivering services with full transparency, ensuring that all client data is safe and secure.
            </p>
            <p className="text-justify my-4">
              Quality is at the core of everything we do. We believe in creating value for our clients and are guided by the principle that if you build a great experience, customers will share it with others. Word of mouth is incredibly powerful.
            </p>
            <p className="text-justify my-4">
              Ready to take your business to the next level? Contact us today to get started!
            </p>
          </div>
        </div>
      </div>

      <h1 className={`text-primary font-semibold text-3xl my-2 mt-8 w-full ${lobster.className}`}>Our Frequently Used Services</h1>

      {
        HomeContent.map((service) => {
          return (
            <div key={`service-${service.title}`} className="2xs:w-full 2xs:p-2 sm:w-1/4 sm:p-0 sm:pr-6 sm:my-8">
              <ServiceSummary service={service} />
            </div>
          )
        })
      }
    </div>
  );
}