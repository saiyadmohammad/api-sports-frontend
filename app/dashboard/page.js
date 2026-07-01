import DashboardBody from "@/components/dahsboard/DashboardBody";
import Sidebar from "@/components/dahsboard/Sidebar";
import SideNav from "@/components/dahsboard/SideNav";


export default function Dashboard(){


  return(
    <div className="flex">
      <div className="shadow-md border-r border-gray-100 flex">
        <SideNav />
        <Sidebar />
      </div>

      <DashboardBody />
    </div>
  )
}