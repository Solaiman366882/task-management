import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleLogin = (data) => {
		console.log(data);
	};

	return (
		<div className="max-w-screen-md mx-auto px-5">
			<h2 className="mt-8 text-[#FF6D3C] font-bold text-5xl text-center">
				Login Here
			</h2>
			<form
				onSubmit={handleSubmit(handleLogin)}
				className="flex flex-col gap-5 p-10 border-2 my-8 border-rose-950"
			>
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
			<p className="text-center font-medium mb-8">
				{"Don't "}have an account? go to ,{" "}
				<span className="text-[#FF6D3C] font-bold text-lg">
					<Link to="/register">Register</Link>
				</span>
			</p>
		</div>
	);
};

export default Login;
