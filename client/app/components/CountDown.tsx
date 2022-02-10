import CountdownPackage from "react-countdown";

const CountDown = () => {
  return (
    <section className="pt-24 pb-12">
      <div className="flex flex-col items-center border-t-4 border-b-4 border-dashed border-gray-300 mx-8 py-4">
        <h2 className="text-4xl font-black text-rose-900 py-2 uppercase">
          ⏳ resterende tijd ⏳
        </h2>
        <CountdownPackage className="font-bold text-3xl" date={Date.now() + 1000000} />
      </div>
    </section>
  );
};

export default CountDown;
