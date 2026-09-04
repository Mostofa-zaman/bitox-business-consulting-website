export default function NotFound() {
  return (
    <div
      className="
        w-full h-screen
        flex flex-col items-center justify-center
        px-3 sm:px-6 md:px-8
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${error_bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Error Image */}
      <div className="flex justify-center w-full mb-3 sm:mb-4 md:mb-5 lg:mb-6">
        <Image
          src={error_img}
          width={777}
          height={350}
          alt="404 error"
          className="
            w-[55vw]
            sm:w-[45vw]
            md:w-95
            lg:w-120
            xl:w-145
            2xl:w-162.5
            h-auto
            max-h-[25vh]
            object-contain
          "
        />
      </div>
       {/* Heading Banner */}
      <div className="w-full mb-3 sm:mb-4 md:mb-5 lg:mb-6">
        <h3
          className="
      w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
      bg-[#FF5101] text-white font-bold text-center uppercase
      py-2 sm:py-2.5 md:py-3 lg:py-4
      px-3 sm:px-4
      text-[3.5vw] sm:text-[2.5vw] md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl
      leading-snug
    "
        >
          Sorry, we can't find the page you're looking for.
        </h3>
      </div>

    </div>
  );
}
