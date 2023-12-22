import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-[#0C303C]">
			<div className="py-16">
				<div className="max-w-screen-xl mx-auto px-5 flex justify-around">
					<h2 className="text-white font-bold text-3xl">
						{" "}
						<Link to="/">M Task</Link>
					</h2>
					<div>
						<h2 className="text-white font-bold text-xl mb-6">Important Links</h2>
						<ul>
							<li className="text-white ">
								<Link to="/home">Home</Link>
							</li>
							<li className="text-white ">
								<Link to="/login">Login</Link>
							</li>
							<li className="text-white ">
								<Link to="/register">Register</Link>
							</li>
							<li className="text-white ">
								<Link to="/dashboard">Dashboard</Link>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="text-white font-bold text-xl mb-6">Social Links</h2>
						<ul>
							<li className="text-white ">
								<Link to="#">Facebook</Link>
							</li>
							<li className="text-white ">
								<Link to="#">Twitter</Link>
							</li>
							<li className="text-white ">
								<Link to="#">Linked In</Link>
							</li>
							<li className="text-white ">
								<Link to="#">GitHub</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<p className="p-4 border-t-2 border-gray-400 text-center text-white">
				All Copyrights reserved to M Task.
			</p>
		</div>
	);
};

export default Footer;
