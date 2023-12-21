import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

const MainLayout = () => {
	return (
		<div>
			<div>
				<Header></Header>
			</div>
			<div>
				<Outlet></Outlet>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default MainLayout;
