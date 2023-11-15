import Faq from "../components/Faq"
import Functionality from "../components/Functionality"
import Hero from "../components/Hero"
import Lockpay from "../components/Lockpay"
import Solution from "../components/Solution"
import Usecases from "../components/Usecases"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Lockpay />
      <Functionality />
      <Solution />
      <Usecases />
      <Faq />
    </div>
  )
}

export default HomePage