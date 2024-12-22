import Aside from "@/components/Admin/Aside"
import Header from "@/components/global/Header/Header"


const layout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <div className=" adminLayoutGrid  overflow-y-auto overflow-x-hidden z-20 pb-5 gap-2">
      <div className="[grid-area:header]">
        <Header></Header>
      </div>
      
        <Aside ></Aside>
        {children}
      </div>
  )
}

export default layout