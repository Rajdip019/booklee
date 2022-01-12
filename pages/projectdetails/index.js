import Document from "../document";
import Navbar from "../components/Navbar";
import GeneralSidebar from "../components/GeneralSidebar";

export default function ProjectDetails() {
  return (
    <>
      <Document />
      <Navbar />
      <GeneralSidebar title="Project Details" />
      <div className="lg:w-[calc(100%-300px)] ">
        <div className="lg:ml-[calc(300px+4vw)] w-11/12 mx-auto lg:text-left">
          <h1 className="text-4xl font-semibold mt-14 mb-4">Project Details</h1>
          <p className="text-xl">
            Booklee : A Old Book Donation and Selling Platform to help spread
            Education.
          </p>
          <h2 className="text-2xl font-semibold mt-3 mb-1">
            Short Introduction:
          </h2>
          <p>
            Our Project 'Booklee' is basically a platform where people can buy
            and sell old books through our website. They can also donate to
            their nearby NGOs and contact them to donate old academic books.
            These books will be donated by the respective NGO and delivered to
            those who need them badly.
          </p>
          <h2 className="text-2xl font-semibold mt-3 mb-4">Design:</h2>
          <div>
            <iframe
              width="100%"
              height="700"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FHHIkVgJzmzmNicbdS6coRO%2FBooklee%3Fnode-id%3D0%253A1"
              allowfullscreen
            ></iframe>
          </div>
          <div className="my-10">
            <h2 className="text-2xl font-semibold mb-5">Technologies Used:</h2>
            <ul class="marker:text-sky-400 list-disc pl-5 space-y-3 text-blue-600 font-semibold text-lg w-[300px] cursor-pointer">
              <a href="https://nextjs.org/" target="_blank">
                <li className="after:content-['↗'] my-2">Next.js</li>
              </a>
              <a href="https://tailwindcss.com/" target="_blank">
                <li className="after:content-['↗'] my-2">TailwindCSS</li>
              </a>
              <a href="https://headlessui.dev/" target="_blank">
                <li className="after:content-['↗'] my-2">Headless UI</li>
              </a>
              <a href="https://chakra-ui.com/" target="_blank">
                <li className="after:content-['↗'] my-2">Chakra UI</li>
              </a>
              <a
                href="https://azure.microsoft.com/en-us/services/cosmos-db/"
                target="_blank"
              >
                <li className="after:content-['↗'] my-2">Cosmos DB</li>
              </a>
              <a
                href="https://azure.microsoft.com/en-us/services/azure-maps/"
                target="_blank"
              >
                <li className="after:content-['↗'] my-2">Azure Maps API</li>
              </a>
              <a
                href="https://azure.microsoft.com/en-in/services/search/?&ef_id=Cj0KCQiA8vSOBhCkARIsAGdp6RQ4mHaopgg2eI3bSLm5QDs2H-kSrlYxdybGghzVbdJrADJ6USyBjYAaAi-PEALw_wcB:G:s&OCID=AID2200195_SEM_Cj0KCQiA8vSOBhCkARIsAGdp6RQ4mHaopgg2eI3bSLm5QDs2H-kSrlYxdybGghzVbdJrADJ6USyBjYAaAi-PEALw_wcB:G:s&gclid=Cj0KCQiA8vSOBhCkARIsAGdp6RQ4mHaopgg2eI3bSLm5QDs2H-kSrlYxdybGghzVbdJrADJ6USyBjYAaAi-PEALw_wcB"
                target="_blank"
              >
                <li className="after:content-['↗'] my-2">
                  Azure Cognitive Search
                </li>
              </a>
              <a href="https://next-auth.js.org/" target="_blank">
                <li className="after:content-['↗'] my-2">Next-Auth</li>
              </a>
              <a href="https://sendgrid.com/" target="_blank">
                <li className="after:content-['↗'] my-2">Sengrid</li>
              </a>
              <a href="https://www.mapbox.com/" target="_blank">
                <li className="after:content-['↗'] my-2">Map Box</li>
              </a>
              <a href="https://vercel.com/" target="_blank">
                <li className="after:content-['↗'] my-2">Vercel</li>
              </a>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-3 mb-1">
            Dependencies Used:
          </h2>
          <ul class="marker:text-sky-400 list-disc pl-5 space-y-1 text-blue-600 font-semibold text-lg flex justify-self-auto flex-col sm:flex-row ">
            <div>
              <li className=" my-0">@chakra-ui/react</li>
              <li className=" my-0">@emotion/react</li>
              <li className=" my-0">@emotion/styled</li>
              <li className=" my-0">@headlessui/react</li>
              <li className=" my-0">@heroicons/react</li>
              <li className=" my-0">@sendgrid/mail</li>
              <li className=" my-0">@tailwindcss/aspect-ratio</li>
              <li className=" my-0">@tailwindcss/forms</li>
              <li className=" my-0">dotenv</li>
              <li className=" my-0">framer-motion</li>
              <li className=" my-0">geolib</li>
            </div>
            <div className="sm:ml-48">
              <li className=" my-0">mongodb</li>
              <li className=" my-0">mongoose</li>
              <li className=" my-0">next</li>
              <li className=" my-0">next-auth</li>
              <li className=" my-0">react</li>
              <li className=" my-0">react-dom</li>
              <li className=" my-0">react-map-gl</li>
              <li className=" my-0">react-top-loading-bar</li>
              <li className=" my-0">swr</li>
            </div>
          </ul>
          <div className="my-10 flex flex-col items-center sm:block ">
            <span className="text-2xl font-semibold mb-1">GitHub Link:</span>
            <a
              href="https://github.com/Rajdip019/booklee"
              className="ml-5 text-xl marker:text-sky-400 transition-all hover:bg-blue-500 bg-skin-darkBlue text-skin-lightBlue px-4 py-2 rounded-2xl after:content-['↗']"
              target="_blank"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
