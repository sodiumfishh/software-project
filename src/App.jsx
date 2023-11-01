import Explore from "./components/Explore"
import Footer from "./components/Footer"
import Header from "./components/Header"
import How from "./components/How"
import Join from "./components/Join"
import PopularGroups from "./components/PopularGroups"
import UpcomingEvent from "./components/UpcomingEvent"

export default function App() {
  return (
    <>
      <Header />
      <Join />
      <Explore />
      <How />
      <UpcomingEvent />
      <PopularGroups />
      <Footer />
    </>
  )
}