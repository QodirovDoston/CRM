import { ReactNode } from "react"
import Navbar from "../components/Navbar/Navbar"
import { Footer, Sidebar } from "../components"
import { useLocation } from "react-router-dom"
// bu leayout ning ichada sidebarmenu va footer va appbar va main componetlar boladi 
export type PropType = {
  children: ReactNode
}
const MainLayout = (props: PropType) => {

  const location = useLocation();
  
  return (
    <>
      {location.pathname == "/login" ? <main>{props.children}</main> :
        <>
          <Navbar />
          <div className="flex items-start">
            <Sidebar />
            <main className="w-full relative h-[800px] overflow-hidden">{props.children}</main>
          </div>
          <Footer />
        </>
      }
    </>
  )
}

export default MainLayout