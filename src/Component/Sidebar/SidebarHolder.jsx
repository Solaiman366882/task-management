import { Sidebar } from "flowbite-react";
import {
	HiArrowSmRight,
	HiChartPie,
	HiInbox,
	HiTable,
	HiHome,
} from "react-icons/hi";
const SidebarHolder = () => {
	return (
		<div>
			<Sidebar aria-label="sidebar" className="bg-[#A4EDE6]" >
				<Sidebar.Items className="bg-[#A4EDE6]">
					<Sidebar.ItemGroup>
						<Sidebar.Item href="/dashboard" icon={HiChartPie}>
							Dashboard
						</Sidebar.Item>
						<Sidebar.Item
							href="/"
							icon={HiHome}
						>
							Home
						</Sidebar.Item>
						<Sidebar.Item href="/dashboard/addTask" icon={HiInbox} >
							Add Task
						</Sidebar.Item>
						<Sidebar.Item href="/login" icon={HiArrowSmRight}>
							Sign In
						</Sidebar.Item>
						<Sidebar.Item href="/register" icon={HiTable}>
							Sign Up
						</Sidebar.Item>
					</Sidebar.ItemGroup>
				</Sidebar.Items>
			</Sidebar>
		</div>
	);
};

export default SidebarHolder;
