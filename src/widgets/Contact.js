
const Contact = () => {
  return (
    <div className="bg-gray-900 mx-auto w-3/4 flex flex-col p-12">
      <p className="text-white text-2xl">来吧！强化你的公司！</p>
      <p className="text-white mb-4">
        The simplest and fastest way to get up and running with Tailwind CSS
        from scratch is with the Tailwind CLI tool.
      </p>
      <div className="flex space-x-4">
        <input type="text" placeholder="您的邮箱" className="border border-zinc-700 text-gray-400 py-3 px-4 text-sm bg-zinc-800"></input>
        <button className="px-8 py-3 rounded bg-blue-500 text-white font-medium md:ml-2">立即开始</button>
      </div>
      <p className="text-gray-400 mt-4 text-xs">7天免费试用，无需支付</p>
    </div>
  );
};
export default Contact;
