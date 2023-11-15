import { styles } from "../../style";

const Subscribe = () => {
  return (
    <main className={`${styles.paddingX} w-full font-chakra py-10`}>
      <div className="w-full bg-blue-gradient flex items-center justify-between py-14 px-20">
        <h2 className="text-4xl leading-normal font-semibold max-w-lg ">
          Subscribe to our newsletter for latest updates
        </h2>

        <form className="flex gap-28 bg-input items-center p-1">
          <div className="flex items-center gap-2 pl-4">
            <img src="/public/message-icon.png" alt="Email" />
            <input
              className="w-full bg-transparent placeholder:text-white outline-none focus:outline-none"
              type="email"
              placeholder="Enter your email address"
            />
          </div>

          <button className="p-4 bg-inputButton hover:bg-input" type="submit">
            <img src="/public/send-icon.png" alt="Send" />
          </button>
        </form>
      </div>
    </main>
  );
};

export default Subscribe;
