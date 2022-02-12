import { PencilAltIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Form from "./Form";

const REPO_URL = "/";

const ExternalLink = ({ children, hoverColor = "text-teal-800", href }) => (
  <Link
    className={`underline hover:${hoverColor} transition-all`}
    href={href}
    rel="noreferrer"
    target="_blank"
  >
    {children}
  </Link>
);

export default function FormPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-warm-gray-50">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between pt-6 px-6 xl:px-8"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <Link href="/">
                <PencilAltIcon className="text-teal-800 h-8 w-auto sm:h-10" />
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <main className="overflow-hidden">
        {/* Header */}
        <div className="bg-warm-gray-50">
          <div className="py-12 lg:py-12"></div>
        </div>

        {/* Contact section */}
        <section
          className="relative bg-white pb-24"
          aria-labelledby="contactHeading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-xl">
              <h2 id="contactHeading" className="sr-only">
                Contact us
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact information */}
                <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-teal-500 to-teal-600 sm:px-10 xl:p-12">
                  {/* Decorative angle backgrounds */}
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    One More Tree
                  </h3>
                  <p className="mt-6 text-base text-teal-50 max-w-3xl">
                    lorem ipsum dolor set imet lorem ipsum dolor set imet lorem
                    ipsum dolor set imet
                    <br />
                    Just submit Your Details here, We wll get back to you soon.
                    <br />
                    {/* <ExternalLink hoverColor="text-teal-300" href="/">
                      Learn More
                    </ExternalLink> */}
                  </p>
                </div>

                {/* Contact form */}
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-warm-gray-900">
                    Send us a message
                  </h3>
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-warm-gray-900" aria-labelledby="footerHeading">
        <h2 id="footerHeading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-3 lg:px-8">
          <p className="text-base text-warm-gray-400 xl:text-center">
            Do not know where you are, who we are, what we do{" "}
            <ExternalLink hoverColor="text-warm-gray-200" href="/">
              GO HOME
            </ExternalLink>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
