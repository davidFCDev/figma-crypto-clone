import { styles } from "../../style";

const Subscribe = () => {
  return (
    <main className={`${styles.paddingX} w-full`}>
      <div className="w-full bg-blue-gradient flex flex-col small:flex-row items-center justify-between gap-12 small:gap-0 py-6 small:py-14 px-6 small:px-20 rounded">
        <h2 className="text-3xl small:text-4xl leading-tight small:leading-snug font-semibold small:max-w-lg pr-10 small:pr-0">
          Subscribe to our newsletter for latest updates
        </h2>

        <form className="flex gap-28 bg-input items-center p-1 ">
          <div className="flex items-center gap-2 pl-4">
            <img src="/message-icon.png" alt="Email" />
            <input
              className="w-full bg-transparent placeholder:text-white outline-none focus:outline-none"
              type="email"
              placeholder="Enter email..."
            />
          </div>

          <button className="p-4 bg-inputButton hover:bg-input" type="submit">
            <img src="/send-icon.png" alt="Send" />
          </button>
        </form>
      </div>
    </main>
  );
};

export default Subscribe;
