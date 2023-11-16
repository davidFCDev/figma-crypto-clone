import SectionTitle from "../SectionTitle";

const Detail = () => {
  return (
    <main className="font-chakra w-full pt-48  relative justify-center items-center flex flex-col">
      <SectionTitle section="Detail Solution" />

      <div className="flex relative top-20 items-start justify-center">
        <img src="/public/circles.png" alt="circles" className="relative z-0 top-0" />
        <img
          src="/public/services.png"
          alt="services"
          className="absolute z-10 top-4 right-2"
        />
      </div>
    </main>
  );
};

export default Detail;
