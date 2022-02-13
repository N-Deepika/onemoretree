import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";

function Index() {
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            BUILDING TEAM
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            The Talented People Behind the Scenes of the Organization
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex gap-x-1 sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://avatars.githubusercontent.com/u/62516824?v=4"
                      alt
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Alok Punj Sharma
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    ST1LLWATER
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Alok is a full stack developer with a passion for building
                    and designing. Alok is a self-taught developer and has
                    worked on various projects.
                    <br />
                    P.S. Looking for Internship Opportunities
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="https://github.com/st1llwater" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://twitter.com/AlokPunjSharma1"
                      className="mx-5"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/alokpunjsharma/"
                      className="mx-5"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enableBackground="new 0 0 24 24"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                        >
                          <path d="M7.5006104,9C7.5003662,9,7.5001831,9,7.5,9h-4C3.223999,8.9998169,3.0001831,9.2234497,3,9.4993896C3,9.4996338,3,9.4998169,3,9.5v12c-0.0001831,0.276001,0.2234497,0.4998169,0.4993896,0.5C3.4996338,22,3.4998169,22,3.5,22h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507C8,21.5003662,8,21.5001831,8,21.5v-12C8.0001831,9.223999,7.7765503,9.0001831,7.5006104,9z M7,21H4V10h3V21z M18,9c-1.0848389,0.000061-2.1393433,0.3580933-3,1.0185547V9.5c0.0001831-0.276001-0.2234497-0.4998169-0.4993896-0.5C14.5003662,9,14.5001831,9,14.5,9h-4c-0.276001-0.0001831-0.4998169,0.2234497-0.5,0.4993896C10,9.4996338,10,9.4998169,10,9.5v12c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5c0.0001831,0,0.0003662,0,0.0005493,0h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507c0-0.0001831,0-0.0003662,0-0.0005493V16c0-0.8284302,0.6715698-1.5,1.5-1.5S18,15.1715698,18,16v5.5c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5c0.0001831,0,0.0003662,0,0.0005493,0h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507c0-0.0001831,0-0.0003662,0-0.0005493V14C22.9967651,11.2399292,20.7600708,9.0032349,18,9z M22,21h-3v-5c0-1.3807373-1.1192627-2.5-2.5-2.5S14,14.6192627,14,16v5h-3V10h3v1.203125c0,0.2124634,0.1343994,0.4016724,0.335022,0.4716797c0.2001343,0.0721436,0.4240112,0.0079956,0.5556641-0.1591797c1.3625488-1.7268066,3.8669434-2.0220337,5.59375-0.6594238C21.4462891,11.6152344,22.0053101,12.7747192,22,14V21z M5.867981,2.0018311C5.7503662,1.9935913,5.6323242,1.992981,5.5146484,2C4.0053711,1.8969116,2.6983032,3.0368652,2.5952148,4.5461426c-0.0041504,0.06073-0.0062256,0.121521-0.0063477,0.182373c-0.0130005,1.49646,1.1895752,2.7200928,2.6860352,2.7330933c0.0610962,0.0005493,0.1221313-0.0010376,0.1831055-0.0046387h0.0283203c1.5064087,0.1054077,2.8129883-1.0303345,2.918396-2.5367432S7.3743896,2.1072388,5.867981,2.0018311z M5.8334351,6.4598389C5.7179565,6.470459,5.6016235,6.4695435,5.4863281,6.4569702H5.4580078C4.5018921,6.5304565,3.6672974,5.8150024,3.593811,4.8588867C3.5203247,3.902832,4.2357788,3.0681763,5.1918945,2.9946899C5.2994385,2.9864502,5.4074707,2.9882202,5.5146484,3C6.4700317,2.9119873,7.315918,3.6151123,7.4039917,4.5704956C7.4920044,5.5259399,6.7888794,6.3718262,5.8334351,6.4598389z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://avatars.githubusercontent.com/u/50576944?v=4"
                      alt
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Soodit Kumar
                  </div>
                  <p className="text-gray-800 text-sm text-center">BabaYaga</p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Soodit Kumar is a Full Stack Developer and Designer with a
                    passion for building and designing Products. Soodit has
                    experience in various technologies.
                    <br />
                    P.S. Looking for Internship Opportunities
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="https://github.com/sooditk" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a href="https://twitter.com/sooditk" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/soodit-kumar-864a0a1b0/"
                      className="mx-5"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enableBackground="new 0 0 24 24"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                        >
                          <path d="M7.5006104,9C7.5003662,9,7.5001831,9,7.5,9h-4C3.223999,8.9998169,3.0001831,9.2234497,3,9.4993896C3,9.4996338,3,9.4998169,3,9.5v12c-0.0001831,0.276001,0.2234497,0.4998169,0.4993896,0.5C3.4996338,22,3.4998169,22,3.5,22h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507C8,21.5003662,8,21.5001831,8,21.5v-12C8.0001831,9.223999,7.7765503,9.0001831,7.5006104,9z M7,21H4V10h3V21z M18,9c-1.0848389,0.000061-2.1393433,0.3580933-3,1.0185547V9.5c0.0001831-0.276001-0.2234497-0.4998169-0.4993896-0.5C14.5003662,9,14.5001831,9,14.5,9h-4c-0.276001-0.0001831-0.4998169,0.2234497-0.5,0.4993896C10,9.4996338,10,9.4998169,10,9.5v12c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5c0.0001831,0,0.0003662,0,0.0005493,0h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507c0-0.0001831,0-0.0003662,0-0.0005493V16c0-0.8284302,0.6715698-1.5,1.5-1.5S18,15.1715698,18,16v5.5c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5c0.0001831,0,0.0003662,0,0.0005493,0h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507c0-0.0001831,0-0.0003662,0-0.0005493V14C22.9967651,11.2399292,20.7600708,9.0032349,18,9z M22,21h-3v-5c0-1.3807373-1.1192627-2.5-2.5-2.5S14,14.6192627,14,16v5h-3V10h3v1.203125c0,0.2124634,0.1343994,0.4016724,0.335022,0.4716797c0.2001343,0.0721436,0.4240112,0.0079956,0.5556641-0.1591797c1.3625488-1.7268066,3.8669434-2.0220337,5.59375-0.6594238C21.4462891,11.6152344,22.0053101,12.7747192,22,14V21z M5.867981,2.0018311C5.7503662,1.9935913,5.6323242,1.992981,5.5146484,2C4.0053711,1.8969116,2.6983032,3.0368652,2.5952148,4.5461426c-0.0041504,0.06073-0.0062256,0.121521-0.0063477,0.182373c-0.0130005,1.49646,1.1895752,2.7200928,2.6860352,2.7330933c0.0610962,0.0005493,0.1221313-0.0010376,0.1831055-0.0046387h0.0283203c1.5064087,0.1054077,2.8129883-1.0303345,2.918396-2.5367432S7.3743896,2.1072388,5.867981,2.0018311z M5.8334351,6.4598389C5.7179565,6.470459,5.6016235,6.4695435,5.4863281,6.4569702H5.4580078C4.5018921,6.5304565,3.6672974,5.8150024,3.593811,4.8588867C3.5203247,3.902832,4.2357788,3.0681763,5.1918945,2.9946899C5.2994385,2.9864502,5.4074707,2.9882202,5.5146484,3C6.4700317,2.9119873,7.315918,3.6151123,7.4039917,4.5704956C7.4920044,5.5259399,6.7888794,6.3718262,5.8334351,6.4598389z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://avatars.githubusercontent.com/u/66058598?v=4"
                      alt
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    N Deepika
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    LightYagami
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Deepika is a full stack developer and content writer with a
                    passion for creating and sharing content. She is currently
                    in her Junior Year of Engineering.
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="https://github.com/n-deepika" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://twitter.com/lightyagami613"
                      className="mx-5"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/n-deepika/"
                      className="mx-5"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enableBackground="new 0 0 24 24"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                        >
                          <path d="M7.5006104,9C7.5003662,9,7.5001831,9,7.5,9h-4C3.223999,8.9998169,3.0001831,9.2234497,3,9.4993896C3,9.4996338,3,9.4998169,3,9.5v12c-0.0001831,0.276001,0.2234497,0.4998169,0.4993896,0.5C3.4996338,22,3.4998169,22,3.5,22h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507C8,21.5003662,8,21.5001831,8,21.5v-12C8.0001831,9.223999,7.7765503,9.0001831,7.5006104,9z M7,21H4V10h3V21z M18,9c-1.0848389,0.000061-2.1393433,0.3580933-3,1.0185547V9.5c0.0001831-0.276001-0.2234497-0.4998169-0.4993896-0.5C14.5003662,9,14.5001831,9,14.5,9h-4c-0.276001-0.0001831-0.4998169,0.2234497-0.5,0.4993896C10,9.4996338,10,9.4998169,10,9.5v12c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5c0.0001831,0,0.0003662,0,0.0005493,0h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507c0-0.0001831,0-0.0003662,0-0.0005493V16c0-0.8284302,0.6715698-1.5,1.5-1.5S18,15.1715698,18,16v5.5c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5c0.0001831,0,0.0003662,0,0.0005493,0h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507c0-0.0001831,0-0.0003662,0-0.0005493V14C22.9967651,11.2399292,20.7600708,9.0032349,18,9z M22,21h-3v-5c0-1.3807373-1.1192627-2.5-2.5-2.5S14,14.6192627,14,16v5h-3V10h3v1.203125c0,0.2124634,0.1343994,0.4016724,0.335022,0.4716797c0.2001343,0.0721436,0.4240112,0.0079956,0.5556641-0.1591797c1.3625488-1.7268066,3.8669434-2.0220337,5.59375-0.6594238C21.4462891,11.6152344,22.0053101,12.7747192,22,14V21z M5.867981,2.0018311C5.7503662,1.9935913,5.6323242,1.992981,5.5146484,2C4.0053711,1.8969116,2.6983032,3.0368652,2.5952148,4.5461426c-0.0041504,0.06073-0.0062256,0.121521-0.0063477,0.182373c-0.0130005,1.49646,1.1895752,2.7200928,2.6860352,2.7330933c0.0610962,0.0005493,0.1221313-0.0010376,0.1831055-0.0046387h0.0283203c1.5064087,0.1054077,2.8129883-1.0303345,2.918396-2.5367432S7.3743896,2.1072388,5.867981,2.0018311z M5.8334351,6.4598389C5.7179565,6.470459,5.6016235,6.4695435,5.4863281,6.4569702H5.4580078C4.5018921,6.5304565,3.6672974,5.8150024,3.593811,4.8588867C3.5203247,3.902832,4.2357788,3.0681763,5.1918945,2.9946899C5.2994385,2.9864502,5.4074707,2.9882202,5.5146484,3C6.4700317,2.9119873,7.315918,3.6151123,7.4039917,4.5704956C7.4920044,5.5259399,6.7888794,6.3718262,5.8334351,6.4598389z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://avatars.githubusercontent.com/u/71445997?v=4"
                      alt
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Buddhadeb Chhetri
                  </div>
                  <p className="text-gray-800 text-sm text-center">A.K.</p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Passionate Game Developer, @BlockchainWeb Enthusiast and
                    Blogger At Dev.to || Open-source Maintainer & Contributor
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="https://github.com/buddhad" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a href="https://twitter.com/Buddhadeb01" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/buddhadebchhetri/"
                      className="mx-5"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enableBackground="new 0 0 24 24"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                        >
                          <path d="M7.5006104,9C7.5003662,9,7.5001831,9,7.5,9h-4C3.223999,8.9998169,3.0001831,9.2234497,3,9.4993896C3,9.4996338,3,9.4998169,3,9.5v12c-0.0001831,0.276001,0.2234497,0.4998169,0.4993896,0.5C3.4996338,22,3.4998169,22,3.5,22h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507C8,21.5003662,8,21.5001831,8,21.5v-12C8.0001831,9.223999,7.7765503,9.0001831,7.5006104,9z M7,21H4V10h3V21z M18,9c-1.0848389,0.000061-2.1393433,0.3580933-3,1.0185547V9.5c0.0001831-0.276001-0.2234497-0.4998169-0.4993896-0.5C14.5003662,9,14.5001831,9,14.5,9h-4c-0.276001-0.0001831-0.4998169,0.2234497-0.5,0.4993896C10,9.4996338,10,9.4998169,10,9.5v12c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5c0.0001831,0,0.0003662,0,0.0005493,0h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507c0-0.0001831,0-0.0003662,0-0.0005493V16c0-0.8284302,0.6715698-1.5,1.5-1.5S18,15.1715698,18,16v5.5c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5c0.0001831,0,0.0003662,0,0.0005493,0h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507c0-0.0001831,0-0.0003662,0-0.0005493V14C22.9967651,11.2399292,20.7600708,9.0032349,18,9z M22,21h-3v-5c0-1.3807373-1.1192627-2.5-2.5-2.5S14,14.6192627,14,16v5h-3V10h3v1.203125c0,0.2124634,0.1343994,0.4016724,0.335022,0.4716797c0.2001343,0.0721436,0.4240112,0.0079956,0.5556641-0.1591797c1.3625488-1.7268066,3.8669434-2.0220337,5.59375-0.6594238C21.4462891,11.6152344,22.0053101,12.7747192,22,14V21z M5.867981,2.0018311C5.7503662,1.9935913,5.6323242,1.992981,5.5146484,2C4.0053711,1.8969116,2.6983032,3.0368652,2.5952148,4.5461426c-0.0041504,0.06073-0.0062256,0.121521-0.0063477,0.182373c-0.0130005,1.49646,1.1895752,2.7200928,2.6860352,2.7330933c0.0610962,0.0005493,0.1221313-0.0010376,0.1831055-0.0046387h0.0283203c1.5064087,0.1054077,2.8129883-1.0303345,2.918396-2.5367432S7.3743896,2.1072388,5.867981,2.0018311z M5.8334351,6.4598389C5.7179565,6.470459,5.6016235,6.4695435,5.4863281,6.4569702H5.4580078C4.5018921,6.5304565,3.6672974,5.8150024,3.593811,4.8588867C3.5203247,3.902832,4.2357788,3.0681763,5.1918945,2.9946899C5.2994385,2.9864502,5.4074707,2.9882202,5.5146484,3C6.4700317,2.9119873,7.315918,3.6151123,7.4039917,4.5704956C7.4920044,5.5259399,6.7888794,6.3718262,5.8334351,6.4598389z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
