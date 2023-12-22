import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useTask = () => {

    const {user} = useContext(AuthContext);

    const {data:tasks = [],refetch,isLoading} = useQuery({
        queryKey:['task'],
        queryFn: async() =>{
            const res = await axios.get(`https://task-management-server-steel-kappa.vercel.app/task/?email=${user?.email}`);
            return res.data;
        }
    });
    return [tasks,refetch,isLoading]
};

export default useTask;