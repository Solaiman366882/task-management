import { useForm } from "react-hook-form";

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
            <h2 className="mt-8 text-[#FF6D3C] font-bold text-5xl text-center">Login Here</h2>
			<form
				onSubmit={handleSubmit(handleLogin)}
				className="flex flex-col gap-5 p-10 border-2 my-12 border-rose-950"
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
		</div>
	);
};

export default Login;
