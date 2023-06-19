import img1 from './newdoc.png'
import img2 from './update.png'

export const Pricing = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="ace59d72-08d5-4850-b9e4-d9d0b86c0525"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#ace59d72-08d5-4850-b9e4-d9d0b86c0525)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative"></span>
            </span>{' '}
            Nominal charges of Document Verification
          </h2>
        </div>
        <div className="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-md lg:grid-cols-2 sm:mx-auto">
          <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
            <div className="mb-6">
              <div className="flex items-center justify-between pb-6 mb-6 border-b">
                <div>
                  <p className="text-sm font-bold tracking-wider uppercase">
                    New Aadhar card
                  </p>
                  <p className="text-5xl font-extrabold">₹ 50</p>
                </div>
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-gray-50">
                  <img src={img1} />
                </div>
              </div>
              <div>
                <p className="mb-2 font-bold tracking-wide">Features</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-amber-700"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-800">
                      
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-amber-700"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-800">10 GB of storage</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-amber-700"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-800">Unlimited domains</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-amber-700"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-800">SSL Certificates</p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Book Now
              </a>
              <p className="text-sm text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
            <div className="mb-6">
              <div className="flex items-center justify-between pb-6 mb-6 border-b">
                <div>
                  <p className="text-sm font-bold tracking-wider uppercase">
                    Updation of Aadhar
                  </p>
                  <p className="text-5xl font-extrabold">₹ 25</p>
                </div>
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50">
                  <img src={img2} />
                </div>
              </div>
              <div>
                <p className="mb-2 font-bold tracking-wide">Features</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-amber-700"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-800">Unlimited deploys</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-amber-700"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-800">
                      Up to 10 Team Members
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-amber-700"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-800">100 GB of starge</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-amber-700"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-800">24/7 support</p>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2">
                      <svg
                        className="w-4 h-4 text-amber-700"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-800">Global CDN</p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-amber-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };