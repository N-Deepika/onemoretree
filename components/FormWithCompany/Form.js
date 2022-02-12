const Form = () => {
  return (
    <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
      <div>
        <label
          htmlFor="type"
          className="block text-sm font-medium text-warm-gray-900"
        >
          Type
        </label>
        <div className="mt-1">
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <select className="w-full border bg-white rounded px-3 py-2 outline-none">
                <option className="py-1">Option 1</option>
                <option className="py-1">Option 2</option>
                <option className="py-1">Option 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="fullname"
          className="block text-sm font-medium text-warm-gray-900"
        >
          Name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="John Doe"
            required
            className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-warm-gray-900"
        >
          Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="eripley@nostromo.com"
            required
            className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-warm-gray-900"
          >
            Phone
          </label>
        </div>
        <div className="mt-1">
          <input
            type="text"
            name="phone"
            id="phone"
            autoComplete="tel"
            className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
            placeholder="+1 (123) 456-7890"
            aria-describedby="phone-optional"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor="companyname"
          className="block text-sm font-medium text-warm-gray-900"
        >
          Company Name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="companyname"
            id="companyname"
            placeholder="Name of Your Organization"
            required
            className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-warm-gray-900"
        >
          Location
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Your Location"
            required
            className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2 sm:flex sm:justify-end">
        <button
          type="submit"
          className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
