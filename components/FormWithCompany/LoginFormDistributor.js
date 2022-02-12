const Form = () => {
  return (
    <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
      <div className="sm:col-span-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-warm-gray-900"
        >
          Email
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Your Email"
            required
            className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-warm-gray-900"
        >
          Password
        </label>
        <div className="mt-1">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            required
            className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2 sm:flex sm:justify-end">
        <button
          type="submit"
          className="mt-2 w-full inline-flex items-center justify-center px-32 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
