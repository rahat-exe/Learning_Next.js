import { createTodo, getTodos } from "@/actions/todoActions";
import { useTodoStore } from "@/store/todoStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


export const todoKeys = {
    all:["todo"],
    lists:()=>[...todoKeys.all, "list"]
}

export function useCreateTodo(){
    const queryClient = useQueryClient() // this gives access to react query's cache system

    const addTodo = useTodoStore((state)=> state.addTodo) // getting the addTodo from zustand store

    // for mutating the data like post,put,patch and delete
    return useMutation({
      mutationFn: (data) => createTodo(data),
      onSuccess:(result) => {
        if(result.success){
            console.log(result)
            queryClient.invalidateQueries({queryKey:todoKeys.lists()})
        }
      }
    });
}

export function useTodos(){
  const setTodos = useTodoStore((state)=> state.setTodos)

  return useQuery({
    queryKey:todoKeys.lists(),
    queryFn: async () => {
      const res = await getTodos()
      console.log(res);

      if(res.success){
        setTodos(res.data)

        return res.data
      }
      throw new Error(result.error)
    }

  })
}