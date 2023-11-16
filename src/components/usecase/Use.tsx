import { styles } from "../../style";
import SectionTitle from "../SectionTitle";

const Use = () => {
  return (
    <div className="w-full pt-56 mb-20 flex flex-col">
      <SectionTitle section="Use Cases" />

      <section className="flex items-start relative pt-28">
        <div className="pl-28 flex flex-col gap-8 relative">
          <div className="flex flex-col gap-5 items-start">
            <h2 className={`${styles.gradientText}`}>Use case</h2>
            <h1 className="text-5xl leading-tight font-semibold">
              Locker Use Cases
            </h1>
          </div>

          <div className="flex flex-col gap-6 max-w-2xl pr-4">
            <div className="flex gap-5 items-start">
              <img src="/cloud-icon.png" alt="cloud icon" />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl">Subscription Services</h3>
                <p className={`${styles.parraph} text-grayscale-200`}>
                  Businesses offering subscription-based services can utilize
                  the Locker functionality to allow customers to lock up tokens
                  for a specific duration in exchange for access to their
                  services. This ensures consistent revenue streams and
                  incentivizes long-term commitment from customers.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <img src="/cloud-off-icon.png" alt="cloud icon" />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl">Staking Discounts</h3>
                <p className={`${styles.parraph} text-grayscale-200`}>
                  Projects that have their native tokens staked for various
                  purposes can leverage the Locker to provide discounts or
                  exclusive benefits to users who lock up those tokens within
                  the specified duration. This encourages token holders to
                  actively participate in staking and engage with the project's
                  ecosystem.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start degraded-text">
              <img src="/cloud-off-icon.png" alt="cloud icon" />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl">Token Vesting</h3>
                <p className={`${styles.parraph} text-grayscale-200`}>
                  {" "}
                  ICOs and token distribution events can utilize the Locker to
                  implement token vesting schedules, ensuring that tokens are
                  gradually released to investors or team members over a
                  predetermined period. This feature enhances token distribution
                  transparency and discourages market manipulation.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start small:hidden">
              <img src="/cloud-off-icon.png" alt="cloud icon" />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl">Asset Locking</h3>
                <p className={`${styles.parraph} text-grayscale-200`}>
                  {" "}
                  Artists and content creators can leverage the Locker to
                  protect their digital assets and intellectual property rights.
                  By allowing users to lock up tokens to access exclusive
                  content or digital creations, creators can monetize their work
                  and prevent unauthorized redistribution.
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src="use1.png" alt="usecase1" className="absolute right-0 top-0" />
      </section>

      <section className="flex flex-col gap-16 py-28">
        <div className="flex flex-col gap-5 items-center">
          <h2 className={`${styles.gradientText}`}>Use case</h2>
          <h1 className="text-5xl leading-tight font-semibold">
            Direct Pay Use Cases
          </h1>
        </div>

        <div className="pr-28 flex items-start justify-end relative">
          <img
            src="use2.png"
            alt="usecase2"
            className="absolute left-0 -top-32"
          />

          <div className="flex flex-col gap-6 max-w-2xl pr-4">
            <div className="flex gap-5 items-start">
              <img src="/cloud-icon.png" alt="cloud icon" />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl">E-commerce Integration</h3>
                <p className={`${styles.parraph} text-grayscale-200`}>
                  Online retailers and service providers can use the Direct Pay
                  functionality to accept a wide range of cryptocurrencies as
                  payment for their products or services. This expands their
                  customer base to crypto enthusiasts and facilitates
                  frictionless, secure, and borderless transactions.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <img src="/cloud-icon.png" alt="cloud icon" />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl">Cross-Border Payments</h3>
                <p className={`${styles.parraph} text-grayscale-200`}>
                  Businesses operating globally can leverage Direct Pay to
                  overcome the limitations of traditional banking systems and
                  facilitate seamless cross-border transactions. By accepting
                  cryptocurrencies, they can eliminate intermediaries and reduce
                  transaction costs, resulting in faster and more affordable
                  international payments.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <img src="/cloud-icon.png" alt="cloud icon" />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl">Crowdfunding Campaigns</h3>
                <p className={`${styles.parraph} text-grayscale-200`}>
                  {" "}
                  Startups and entrepreneurs seeking funding can utilize Direct
                  Pay to launch crowdfunding campaigns, enabling contributors to
                  make donations or investments in cryptocurrencies. This opens
                  up fundraising opportunities to a global audience, including
                  cryptocurrency holders and enthusiasts interested in
                  supporting innovative projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-start relative">
        <div className="pl-28 flex flex-col gap-8 py-28 relative">
          <div className="flex flex-col gap-5 items-start">
            <h2 className={`${styles.gradientText}`}>Use case</h2>
            <h1 className="text-5xl leading-tight font-semibold">
              Referral Use Cases
            </h1>
          </div>

          <div className="flex flex-col gap-6 max-w-2xl pr-4">
            <div className="flex gap-5 items-start">
              <img src="/cloud-icon.png" alt="cloud icon" />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl">User Acquisition</h3>
                <p className={`${styles.parraph} text-grayscale-200`}>
                  Companies can incentivize their users to refer new customers
                  by offering referral rewards through LockPay's Referral
                  functionality. This not only encourages existing customers to
                  promote the product or service but also helps in acquiring new
                  customers through word-of-mouth marketing, driving organic
                  growth.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <img src="/cloud-off-icon.png" alt="cloud icon" />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl">Community Building</h3>
                <p className={`${styles.parraph} text-grayscale-200`}>
                  Referral programs can be used to foster a strong community
                  around a project or brand. By rewarding users who successfully
                  refer others, companies can encourage active engagement and
                  create a network effect, where existing users become advocates
                  and help expand the user base organically.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <img src="/cloud-off-icon.png" alt="cloud icon" className="opacity-10"/>
              <div className="flex flex-col gap-4 opacity-10">
                <h3 className="text-xl">Market Expansion</h3>
                <p className={`${styles.parraph} text-grayscale-200 small:hidden`}>
                  {" "}
                  Referral programs can be used to foster a strong community
                  around a project or brand. By rewarding users who successfully
                  refer others, companies can encourage active engagement and
                  create a network effect, where existing users become advocates
                  and help expand the user base organically.
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src="use3.png" alt="usecase3" className="absolute right-0" />
      </section>
    </div>
  );
};

export default Use;
