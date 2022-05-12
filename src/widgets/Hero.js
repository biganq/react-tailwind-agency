const Hero = () => {
  return (
    <div className="grid justify-items-center gap-8 pb-28 relative">
      <p className="text-4xl md:text-6xl font-black text-center leading-normal md:leading-normal">
        打造一个完美的、充满创造力的网站
      </p>
      <p className="text-xl text-gray-700 md:w-1/2 text-center">
        这是一个完美的工具这是一个完美的工具这是一个完美的工具这是一个完美的工具这是一个完美的工具这是一个完美的工具
      </p>
      <div>
        <button className="rounded bg-blue-500 text-white py-3 px-8">
          立即试用
        </button>
        <button className="rounded bg-gray-900 text-white py-3 px-8 ml-3">
          了解更多
        </button>
      </div>
      <div className="relative w-full"></div>
      <div className="relative grid justify-items-center">
        <iframe
          className="w-[768px] h-[432px] object-cover object-top rounded"
          src="https://www.youtube.com/embed/qLC8GBOw4Ns"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="flex absolute rounded-full bg-white -bottom-7 px-5 py-4 drop-shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          查看2分钟演示视频
        </div>
      </div>
    </div>
  );
};
export default Hero;
