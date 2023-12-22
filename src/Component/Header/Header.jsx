import { Navbar } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
	const {user} =  useContext(AuthContext);
	return (
		<div className="bg-[#A4EDE6]">
			<Navbar fluid rounded className="bg-[#A4EDE6]">
				<Navbar.Brand href="/">
					{/* <img
						src="/favicon.svg"
						className="mr-3 h-6 sm:h-9"
						alt="Flowbite React Logo"
					/> */}
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
						M Task
					</span>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Navbar.Link href="/">
						Home
					</Navbar.Link>
					<Navbar.Link  href="/login">
						Login
					</Navbar.Link>
					<Navbar.Link href="/Register">Register</Navbar.Link>
					{user?.email ? <Navbar.Link href="#">Logout</Navbar.Link> : ""}
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
