import { AiFillStar } from "react-icons/ai";
import { GiPalmTree } from "react-icons/gi";

export default function Products({ trees }) {
  return (
    <div className="bg-slate-50">
      <div className="max-w-4/5 mx-auto py-12 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="text-4xl mt-10 mb-16 py-2 border-b-4 border-b-slate-500">
          Explore Our Trees
        </div>

        {/* <h2 className="sr-only">Products</h2> */}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {trees.map((tree) => (
            <div key={tree.id} className="">
              <div className="h-full flex flex-col border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={tree.image}
                  alt="blog"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Planted : {tree.planted}
                  </h2>
                  <h1 className="title-font first-letter:text-2xl first-letter:font-bold first-letter:text-green-700 tracking-wide text-lg font-medium text-gray-900 mb-3">
                    {tree.name}
                  </h1>
                  <div>
                    {tree.benefits.map((val, index) => (
                      <li key={index} className="last:mb-4">
                        {val}
                      </li>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center flex-wrap">
                      <button className="text-indigo-500 border-2 px-2 py-1 hover:bg-indigo-500 hover:text-white inline-flex cursor-pointer items-center md:mb-2 lg:mb-0">
                        Plant This
                      </button>
                      <span className="text-gray-700 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <div className="px-1">
                          <AiFillStar />
                        </div>
                        <div>{(Math.random() * 6 + 3).toFixed(2)}</div>
                      </span>
                      <span className="text-gray-700 inline-flex items-center leading-none text-sm">
                        ₹ {Math.floor(Math.random() * 200) + 300}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
