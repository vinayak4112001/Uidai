export const Steps = () => {
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
                    id="d0d83814-78b6-480f-9a5f-7f637616b267"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d0d83814-78b6-480f-9a5f-7f637616b267)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{' '}
            Steps for the AADHAR Update / Registration
          </h2>
        </div>
        <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
          <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
            <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5">Registration</p>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-amber-700 bg-indigo-50">
                1
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Fill up all the details that is in the registration form.
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5">Choose Location</p>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-amber-700 bg-indigo-50">
                2
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Locate the address of home and it gave the nearby operator's location choose anyone.
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5">Date and Time</p>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-amber-700 bg-indigo-50">
                3
              </p>
            </div>
            <p className="text-sm text-gray-900">
               Select the date and time according to your convenience.
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5">Verification of Documents</p>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-amber-700 bg-indigo-50">
                4
              </p>
            </div>
            <p className="text-sm text-gray-900">
              The Operator will come to the location and Verify your Documents.
            </p>
          </div>
        </div>
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-amber-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Registration Form
          </a>
        </div>
      </div>
    );
  };