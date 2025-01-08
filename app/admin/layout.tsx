import Aside from "@/components/Admin/Aside"


const layout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <div className=" adminLayoutGrid bg-black/90 overflow-y-auto overflow-x-hidden z-20 p-5 gap-5">
      
      
        <Aside ></Aside>
        <div className="[grid-area:main] h-full overflow-auto"> {children}</div>
       
      </div>
  )
}

export default layout