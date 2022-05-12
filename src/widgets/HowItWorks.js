import SectionHeading from "./SectionHeading";

const HowItWorks = () => {
  return (
    <div>
      <SectionHeading
        title={"工作流程"}
        subTitle={
          "Beautiful hand-crafted SVG icons,by the makers of Tailwind CSS."
        }
      />
      <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="grid justify-items-center gap-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-lg font-bold">初步沟通</p>
            <p className="text-gray-500">
              For primary navigation and marketing sections, designed to be rendered at 24x24.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HowItWorks;
