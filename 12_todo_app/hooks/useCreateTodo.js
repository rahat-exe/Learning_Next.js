import { createTodo, deleteTodo, getTodos, toogleTodo } from "@/actions/todoActions";
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
      onSuccess:(r) => {
        if(r.success){
            console.log(r)
            queryClient.invalidateQueries({queryKey:todoKeys.lists()})
        }
      }
    });
}

// async function fetchTodos ()  {
//   const setTodos = useTodoStore((state) => state.setTodos);

//   const res = await getTodos();
//   console.log(res);

//   if (res.success) {
//     setTodos(res.data);

//     return res.data;
//   }
//   throw new Error(result.error);
// };
// export function useTodos() {
//   const setTodos = useTodoStore((state) => state.setTodos);

//   return useQuery({
//     queryKey: todoKeys.lists(),
//     queryFn:fetchTodos
//   });
// }

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

export function useToogleTodo(){
  const queryClient = useQueryClient()
  const updateTodoInStore = useTodoStore((state)=> state.updateTodo)

  return useMutation({
    mutationFn:(id) => toogleTodo(id),
    onSuccess:(result, id)=>{
      if(result.success){
        updateTodoInStore(id, {completed: result.data.completed})
        queryClient.invalidateQueries({queryKey:todoKeys.lists()})
      }
    }
  })
}

export function useDeleteTodo(){
  const queryClient = useQueryClient()
  const removeTodo = useTodoStore((state)=> state.removeTodo)

  return useMutation({
    mutationFn:(id) => deleteTodo(id),
    onSuccess:(result, id)=>{
      if(result.success){
        removeTodo(id)
        queryClient.invalidateQueries({queryKey: todoKeys.lists()})
      }
    }
  })
}