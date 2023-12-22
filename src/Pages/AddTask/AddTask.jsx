import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddTask = () => {

    const {user} = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleAddTask = (data) => {
		const newTask = {
            name:data.task_name,
            description:data.description,
            priority:data.priority,
            status:"to-do",
            taskOwner:user?.displayName,
            email:user?.email,
        }
        axios.post('https://task-management-server-steel-kappa.vercel.app/task',newTask)
        .then(res => {
            //console.log(res.data);
            if(res.data?.insertedId)
            {
                Swal.fire({
                    title: "Good job!",
                    text: "New Task added to your task list",
                    icon: "success"
                  });
            }
        })
        .err(err => console.log(err));
	};

	return (
		<div>
			<div>
				<h2 className="mt-8 text-[#FF6D3C] font-bold text-5xl text-center">
					Add New Task
				</h2>
				<form
					onSubmit={handleSubmit(handleAddTask)}
					className="flex flex-col gap-5 p-10 border-2 my-8 border-rose-950"
				>
					<div className="flex-1">
						<input
							//defaultValue="John Doe"
							{...register("task_name", { required: true })}
							className="h-10 w-full border border-[#FF6D3C] pl-5"
							placeholder="Task Name"
						/>
						{errors.task_name && (
							<span className="text-red-700 block font-medium">
								Task Name is required
							</span>
						)}
					</div>

					<div className="flex-1">
						<input
							{...register("description", { required: true })}
							className="h-10 w-full border border-[#FF6D3C] pl-5"
							placeholder="Add Description"
						/>
						{/* errors will return when field validation fails  */}
						{errors.description && (
							<span className="text-red-700 block font-medium">
								Description is required
							</span>
						)}
					</div>
					<div>
						<select
							{...register("priority")}
							className="h-10 w-full border border-[#FF6D3C] pl-5 overflow-hidden"
						>
							<option value="low">Low</option>
							<option value="moderate">Moderate</option>
							<option value="high">High</option>
						</select>
					</div>
					<input type="submit" className="btn" />
				</form>
			</div>
		</div>
	);
};

export default AddTask;
