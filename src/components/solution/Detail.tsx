import { styles } from "../../style";
import Button from "../Button";
import SectionTitle from "../SectionTitle";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const Detail = () => {
  return (
    <main className="w-full pt-56 pb-20 relative">
      <SectionTitle section="Detail Solution" />

      <section className="flex flex-col justify-center items-center relative">
        <div className="flex absolute top-20 items-start justify-center">
          <img
            src="/circles.png"
            alt="circles"
            className="relative z-0 top-0 hidden small:block"
          />
          <img
            src="/services.png"
            alt="services"
            className="absolute z-10 top-4 right-2 hidden small:block"
          />

          <img
            src="/circles-responsive.png"
            alt="circles"
            className="relative z-0 top-0 block small:hidden"
          />

          <div className="absolute z-10 top-4 flex items-center small:hidden">
            <img
              src="/esphera-off.png"
              alt="services"
              className="w-60 relative z-10 top-20 -left-20"
            />
            <img
              src="/esphera.png"
              alt="services"
              className="w-60 relative z-10"
            />
            <img
              src="/esphera-off.png"
              alt="services"
              className="w-60 relative z-10 top-20 -right-20"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 small:max-w-2xl mt-[74%] small:mt-[20%] px-6 small:px-0">
          <div className="flex gap-10 small:hidden text-2xl">
            <button>
              <IoMdArrowBack />
            </button>
            <button>
              <IoMdArrowForward />
            </button>
          </div>

          <div className="flex flex-col gap-5 items-center text-center">
            <h2 className={`${styles.gradientText}`}>Solution</h2>
            <h1 className="text-5xl small:text-5xl leading-tight font-semibold">
              Enhanced Asset Security
            </h1>
          </div>

          <p className={`${styles.parraph} text-grayscale-200`}>
            Traditional methods of securing digital assets often lack
            flexibility and fail to meet the evolving needs of businesses and
            projects. LockPay's locker functionality provides a customizable
            solution, allowing users to create lockers tailored to their
            specific requirements.
          </p>

          <p className={`${styles.parraph} text-grayscale-200`}>
            Whether it's locking up assets for a predetermined duration or
            implementing multiple unlocking intervals, LockPay's locker offers
            unparalleled flexibility and security. Additionally, the ability to
            verify staking of specific tokens adds an extra layer of security
            and incentivizes users through discounted transactions. Write a
            bullet list and text with hading.
          </p>

          <div className="flex flex-col gap-4 bg-grayscale-300 box-shadow rounded-sm p-6 small:p-12 z-30">
            <p>Benefits and Features</p>
            <ul className="flex flex-col gap-4 font-light mt-2">
              <li className="flex items-baseline gap-4">
                <img src="/checkbox.png" alt="check" />
                <span>
                  Users can create lockers tailored to their specific asset
                  security requirements.
                </span>
              </li>
              <li className="flex items-baseline gap-4">
                <img src="/checkbox.png" alt="check" />
                <span>
                  Users have control over the locking and unlocking parameters,
                  allowing them to adapt to evolving needs.
                </span>
              </li>
              <li className="flex items-baseline gap-4">
                <img src="/checkbox.png" alt="check" />
                <span>
                  Assets can be securely locked up for a predetermined duration,
                  reducing the risk of unauthorized access.
                </span>
              </li>
              <li className="flex items-baseline gap-4">
                <img src="/checkbox.png" alt="check" />
                <span>
                  LockPay incentivizes users by offering discounted transactions
                  for verified staking of specific tokens.
                </span>
              </li>
            </ul>
          </div>

          <p className={`${styles.parraph} text-grayscale-200`}>
            Overall, LockPay's locker functionality provides enhanced asset
            security by offering customizable lockers, flexibility in locking
            and unlocking parameters, advanced security measures, multiple
            unlocking intervals, token staking verification, and incentives
            through discounted transactions. Businesses and projects can trust
            LockPay to meet their evolving asset security needs effectively.
          </p>

          <div className="flex items-start w-full">
            <Button text="Contact us" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Detail;
