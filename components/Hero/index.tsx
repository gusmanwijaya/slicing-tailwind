import Navbar from "../Navbar";

export default function Hero() {
  return (
    <div className="bg-hero 2xl:h-[712px] xl:h-[600px] lg:h-[550px] md:h-[500px] pb-20">
      <Navbar />
      <div className="px-14 py-14 flex flex-col justify-center items-center space-y-6">
        <h1 className="text-xl lg:text-3xl tracking-widest leading-normal text-center">
          Saya seorang front-end engineer, back-end <br /> engineer, dan juga UI
          designer
        </h1>
        <p className="text-center text-sm text-white text-opacity-70 tracking-widest leading-loose">
          Sejak 13 tahun saya memulai programming. Sejak <br /> 3 tahun memulai
          UI design.
        </p>
        <button
          type="button"
          className="btn bg-yellow-500 text-slate-600 px-8 py-4 rounded-full border-none shadow-md shadow-yellow-500/20 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/30"
        >
          Pelajari
        </button>
      </div>
    </div>
  );
}
