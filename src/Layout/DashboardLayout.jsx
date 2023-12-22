import { useContext } from "react";
import SidebarHolder from "../Component/Sidebar/SidebarHolder";
import { AuthContext } from "../Provider/AuthProvider";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
	const { user } = useContext(AuthContext);
	return (
		<div className="flex">
			<div>
				<SidebarHolder></SidebarHolder>
			</div>
			<div className="p-5  flex-1">
				<div className="bg-[#0C303C]  p-5 rounded-lg w-full">
					<div className=" flex justify-between">
						<div className="flex gap-5">
							<img
								src={user?.photoURL}
								alt={`${user?.displayName} profile img`}
								className="w-28 h-28 object-cover rounded-lg"
							/>
							<div className="">
								<h2 className="text-2xl font-bold text-white capitalize">{user?.displayName}</h2>
								<p className="font-medium text-white ">{user?.email}</p>
							</div>
						</div>
						<div>hi</div>
					</div>
				</div>
				<div className="mt-8">
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
