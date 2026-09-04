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
    </div>
  );
}
