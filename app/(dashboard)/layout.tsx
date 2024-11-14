import RightSide from "@/components/sidebars/right-side"
import Sidebar from "@/components/sidebars/sidebar"


interface LayoutProps{
    children:React.ReactNode
}

const Layout = ({children}:LayoutProps) => {
  return (
    <main className="flex  w-full min-h-screen">
      <RightSide/>
      <Sidebar/>
      <section>
        <div className="flex lg:p-20 ">
          {children}
        </div>
      </section>
   
    </main>
  )
}

export default Layout