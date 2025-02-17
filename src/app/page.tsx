import ServiceSummary from "@/components/ServiceSummary";
import { HomeContent } from "@/constatns/HomeContent";

export default function Home() {
  return (
    <div className="2xs:p-2 sm:p-8 w-full flex flex-wrap justify-center items-stretch">
      {
        HomeContent.map((service, index) => {
          return(
            <div key={index} className="2xs:w-full 2xs:p-2 sm:w-1/4 sm:p-4">
              <ServiceSummary service={service}/>
            </div>
          )
        })
      }
    </div>
  );
}
