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
    </div>
  )
}

export default HomePage