import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useTask = () => {
    const {data:tasks = [],refetch,isLoading} = useQuery({
        queryKey:['task'],
        queryFn: async() =>{
            const res = await axios.get('http://localhost:5000/task');
            return res.data;
        }
    });
    return [tasks,refetch,isLoading]
};

export default useTask;