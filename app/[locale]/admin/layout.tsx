import Aside from "@/components/Admin/Aside";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" adminLayoutGrid bg-black/90 overflow-y-auto overflow-x-hidden z-20 p-5 gap-5">
      <aside className="[grid-area:aside]">
        <Aside></Aside>
      </aside>

      {children}
    </div>
  );
};

export default layout;
