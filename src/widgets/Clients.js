import SectionHeading from "./SectionHeading";

const Clients = () => {
  return (
    <div>
      <SectionHeading title={"合作客户"} subTitle={"被全球10000个客户信任"} />
      <div className="flex flex-col lg:flex-row items-center md:justify-between gap-8 my-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-28 h-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-28 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-28 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-28 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-28 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
      </div>
      <div className="grid justify-items-center border-2 rounded px-14 mt-28">
          <img alt="" className="w-24 h-24 rounded-full bg-slate-300 -translate-y-1/2"/>
          <p className="mt-5 mb-4 text-xl font-medium">5,001 Mad Scientists creating the formula for vibrant, engaged, and collaborative communities through technology.</p>
          <p className="text-lg font-semibold">安迪刘</p>
          <p className="text-gray-500 mb-8">Opensea老总<a className="text-blue-500" href="/README.md">@Company</a></p>
      </div>
    </div>
  );
};

export default Clients;
