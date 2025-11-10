const Loader = ({ text }) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-[80vh]">
      <div className="w-12 h-12 border-4 border-slate-200 border-t-primary-red rounded-full animate-spin"></div>
      <h2 className="text-lg font-normal text-slate-800">Loading {text} </h2>
    </div>
  );
};

export default Loader;
