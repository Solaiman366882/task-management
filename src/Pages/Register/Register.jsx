import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
	const { createUser } = useContext(AuthContext);
	const location = useLocation();

	const navigate = useNavigate();
    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleRegister = (data) => {
		console.log(data);
		createUser(data.email, data.password).then((res) => {
			const user = res.user;
			updateProfile(user, {
				displayName: data.name,
				photoURL: data.photo,
			}).then(() => {
				Swal.fire(
					"Well Done",
					"User Created Successfully",
					"success"
				);
				navigate(location?.state ? location.state : "/");
			});
		});
	};
    return (
        <div>
            <div className="max-w-screen-md mx-auto px-5">
            <h2 className="mt-8 text-[#FF6D3C] font-bold text-5xl text-center">Register</h2>
			<form
				onSubmit={handleSubmit(handleRegister)}
				className="flex flex-col gap-5 p-10 border-2 my-12 border-rose-950"
			>
				<div className="flex-1">
					<input
						//defaultValue="John Doe"
						{...register("name", { required: true })}
						className="h-10 w-full border border-[#FF6D3C] pl-5"
						placeholder="Enter Your Name"
					/>
					{errors.name && (
						<span className="text-red-700 block font-medium">
							Name is required
						</span>
					)}
				</div>
				<div className="flex-1">
					<input
						//defaultValue="John Doe"
						{...register("email", { required: true })}
						className="h-10 w-full border border-[#FF6D3C] pl-5"
						placeholder="Enter Your Email"
					/>
					{errors.email && (
						<span className="text-red-700 block font-medium">
							Email is required
						</span>
					)}
				</div>
				<div className="flex-1">
					<input
						//defaultValue="John Doe"
						{...register("photo", { required: true })}
						className="h-10 w-full border border-[#FF6D3C] pl-5"
						placeholder="Enter Your Photo Url"
					/>
					{errors.photo && (
						<span className="text-red-700 block font-medium">
							Photo Url is required
						</span>
					)}
				</div>

				<div className="flex-1">
					<input
						{...register("password", { required: true })}
						className="h-10 w-full border border-[#FF6D3C] pl-5"
						placeholder="Enter Your password"
					/>
					{/* errors will return when field validation fails  */}
					{errors.password && (
						<span className="text-red-700 block font-medium">
							Password is required
						</span>
					)}
				</div>
				<input type="submit" className="btn" />
			</form>
			<div className="flex flex-col gap-5 justify-center w-full flex-1">
				<p  className="text-[#FF6D3C] font-bold text-lg text-center">----------- Or -----------</p>
				<SocialLogin className="w-full"></SocialLogin>
			</div>
            <p className="text-center font-medium mb-8">Already have an account? go to , <span className="text-[#FF6D3C] font-bold text-lg"><Link to="/login">Login</Link></span></p>
		</div>
        </div>
    );
};

export default Register;