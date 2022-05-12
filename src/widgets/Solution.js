import SectionHeading from "./SectionHeading";

const Solution = () => {
  return (
    <div>
      <SectionHeading
        title={"解决方案"}
        subTitle={
          "这期视频，我们使用 Vite 创建 React 项目，配置 Tailwind CSS，制作一个响应式的企业官网，从这个视频中，你会提高 HTML 和 CSS 的布局能力。"
        }
      />
      <div className="grid lg:grid-cols-2 mt-20 gap-20">
        <div>
          <h3 className="mt-7 text-[32px] font-bold">强有力的工具</h3>
          <p className="mt-4 mb-8 text-gray-500">
            这期视频，我们使用 Vite 创建 React 项目，配置 Tailwind
            CSS，制作一个响应式的企业官网，从这个视频中，你会提高 HTML 和 CSS
            的布局能力。
          </p>
          <ul className="grid gap-3">
            {[1, 2, 3].map((item) => (
              <li
                className={`p-5 justify-between rounded border border-zinc-100 ${
                  item === 1 && "bg-zinc-100"
                }`}
                key={item}
              >
                <p className="text-lg font-semibold">构建简单的生态系统</p>
                <div className="flex justify-between relative items-center">
                  <p className="text-lg leading-7 mt-1">
                    Tailwind CSS works by scanning all of your HTML files,
                    JavaScript components, and any other templates for class
                    names, generating the corresponding styles and then writing
                    them to a static CSS file.It's fast, flexible, and reliable
                    — with zero-runtime.
                  </p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 ml"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto px-2 flex items-center rounded">
        <img src="https://img.seadn.io/files/4212c454e42a1ecee57865da7410c36e.png" className="rounded" alt="text" />
        </div>
      </div>
    </div>
  );
};
export default Solution;
