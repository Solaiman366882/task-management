import { Sidebar } from "flowbite-react";
import {
	HiArrowSmRight,
	HiChartPie,
	HiInbox,
	HiShoppingBag,
	HiTable,
	HiUser,
	HiViewBoards,
} from "react-icons/hi";
const SidebarHolder = () => {
	return (
		<div>
			<Sidebar aria-label="sidebar" className="bg-[#A4EDE6]" >
				<Sidebar.Items className="bg-[#A4EDE6]">
					<Sidebar.ItemGroup>
						<Sidebar.Item href="#" icon={HiChartPie}>
							Dashboard
						</Sidebar.Item>
						<Sidebar.Item
							href="#"
							icon={HiViewBoards}
						>
							Kanban
						</Sidebar.Item>
						<Sidebar.Item href="/dashboard/addTask" icon={HiInbox} >
							Add Task
						</Sidebar.Item>
						<Sidebar.Item href="#" icon={HiUser}>
							Users
						</Sidebar.Item>
						<Sidebar.Item href="#" icon={HiShoppingBag}>
							Products
						</Sidebar.Item>
						<Sidebar.Item href="#" icon={HiArrowSmRight}>
							Sign In
						</Sidebar.Item>
						<Sidebar.Item href="#" icon={HiTable}>
							Sign Up
						</Sidebar.Item>
					</Sidebar.ItemGroup>
				</Sidebar.Items>
			</Sidebar>
		</div>
	);
};

export default SidebarHolder;
