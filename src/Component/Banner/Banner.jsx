import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
	return (
		<section className="banner-section">
			<div className="max-w-screen-xl mx-auto p-5 h-full">
				<div className="hero w-full flex min-h-[80vh] flex-col justify-center">
					<h1 className="text-[#FF6D3C] font-bold text-6xl">
						M Task
					</h1>
					<p className="mt-3 mb-6 font-medium text-lg">
						Manage your task or work, and track them to <br />{" "}
						increase your productivity. Its easy to operate ...
					</p>
					<div>
						<div className="">
							<Link to="/dashboard">
								<button className="btn">
									{"Let's Explore"}
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
