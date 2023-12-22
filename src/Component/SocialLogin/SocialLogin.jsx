import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { handleGoogleLogin } = useContext(AuthContext);
	const location = useLocation();

	const navigate = useNavigate();

	const handleSocialLogin = (media) => {
		media().then((result) => {
			console.log(result);
			Swal.fire("Good job!", "Successfully login with google", "success");
			navigate(location?.state ? location.state : "/");
		});
	};
    return (
        <div className="w-full">
            <button className="btn w-full" onClick={()=>handleSocialLogin(handleGoogleLogin)}>Continue with Google</button>
        </div>
    );
};

export default SocialLogin;