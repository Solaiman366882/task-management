import { Dropdown } from "flowbite-react";
import useTask from "../../hooks/useTask";
import { SlOptionsVertical } from "react-icons/sl";
import { DragDropContext } from "react-beautiful-dnd";
// import { useState } from "react";
const TaskList = () => {
	const [tasks] = useTask();
	// const [todoTask,setTodoTask] = useState([]);
	// const [completedTask,setCompletedTask] = useState([]);

	const todoTask = tasks.filter((task) => task.status === "to-do");
	const ongoingTask = tasks.filter((task) => task.status === "ongoing");
	const completedTask = tasks.filter((task) => task.status === "completed");

	return (
		<div className="max-w-screen-xl mx-auto px-5">
			<DragDropContext>
				<div className="w-full grid grid-cols-3 gap-5">
					<div className="p-4 border ">
						<h2 className="text-2xl font-bold text-center border-b pb-2">
							Todo
						</h2>
						{todoTask.length > 0 ? (
							<ul className="flex flex-col">
								{todoTask.map((task) => (
									<li key={task._id}>
										<div className="flex justify-between items-center p-3">
											<div className="flex-1">
												<h2 className="font-semibold capitalize">
													{task?.name}
												</h2>
												<div className="mt-2 flex justify-around items-center">
													<p className="text-xs capitalize">
														Status : {task.status}
													</p>
													<p className="text-xs capitalize">
														Priority :{" "}
														{task.priority}
													</p>
												</div>
											</div>
											<div>
												<Dropdown
													label=""
													dismissOnClick={false}
													renderTrigger={() => (
														<span>
															<SlOptionsVertical />
														</span>
													)}
												>
													<Dropdown.Item>
														Edit
													</Dropdown.Item>
													<Dropdown.Item>
														Delete
													</Dropdown.Item>
												</Dropdown>
											</div>
										</div>
									</li>
								))}
							</ul>
						) : (
							<h2 className="font-bold text-xl text-center text-gray-400 mt-6">
								No Task....
							</h2>
						)}
					</div>
					<div className="p-4 border ">
						<h2 className="text-2xl font-bold text-center border-b pb-2">
							Ongoing
						</h2>
						{ongoingTask.length > 0 ? (
							<ul className="flex flex-col">
								{ongoingTask.map((task) => (
									<li key={task._id}>
										<div className="flex justify-between items-center p-3">
											<div className="flex-1">
												<h2 className="font-semibold capitalize">
													{task?.name}
												</h2>
												<div className="mt-2 flex justify-around items-center">
													<p className="text-xs capitalize">
														Status : {task.status}
													</p>
													<p className="text-xs capitalize">
														Priority :{" "}
														{task.priority}
													</p>
												</div>
											</div>
											<div>
												<Dropdown
													label=""
													dismissOnClick={false}
													renderTrigger={() => (
														<span>
															<SlOptionsVertical />
														</span>
													)}
												>
													<Dropdown.Item>
														Edit
													</Dropdown.Item>
													<Dropdown.Item>
														Delete
													</Dropdown.Item>
												</Dropdown>
											</div>
										</div>
									</li>
								))}
							</ul>
						) : (
							<h2 className="font-bold text-xl text-center text-gray-400 mt-6">
								No Task....
							</h2>
						)}
					</div>
					<div className="p-4 border ">
						<h2 className="text-2xl font-bold text-center border-b pb-2">
							Completed
						</h2>
						{completedTask.length > 0 ? (
							<ul className="flex flex-col">
								{completedTask.map((task) => (
									<li key={task._id}>
										<div className="flex justify-between items-center p-3">
											<div className="flex-1">
												<h2 className="font-semibold capitalize">
													{task?.name}
												</h2>
												<div className="mt-2 flex justify-around items-center">
													<p className="text-xs capitalize">
														Status : {task.status}
													</p>
													<p className="text-xs capitalize">
														Priority :{" "}
														{task.priority}
													</p>
												</div>
											</div>
											<div>
												<Dropdown
													label=""
													dismissOnClick={false}
													renderTrigger={() => (
														<span>
															<SlOptionsVertical />
														</span>
													)}
												>
													<Dropdown.Item>
														Edit
													</Dropdown.Item>
													<Dropdown.Item>
														Delete
													</Dropdown.Item>
												</Dropdown>
											</div>
										</div>
									</li>
								))}
							</ul>
						) : (
							<h2 className="font-bold text-xl text-center text-gray-400 mt-6">
								No Task....
							</h2>
						)}
					</div>
				</div>
			</DragDropContext>
		</div>
	);
};

export default TaskList;
