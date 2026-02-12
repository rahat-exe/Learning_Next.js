import { create } from "zustand";
import {devtools} from "zustand/middleware"


export const useTodoStore = create(
  devtools(
    (set, get) => ({
      todos: [],
      filter: "all",
      isLoading: false,

      setTodos: (todos) => set({ todos }),
      // setTodos: (newTodos) => set({ todos: newTodos }),

      addTodo: (todo) =>
        set((state) => ({
          todos: [todo, ...state.todos],
        })),

      setFilter: (filter) => set({filter}),
      setLoading: (isLoading) => set({isLoading}),

      filteredTodos: () => {
        const {todos, filter} = get()
        switch(filter){
          case "active":
            return todos.filter((todo) => !todo.completed)
          case "completed":
            return todos.filter((todo) => todo.completed)
          default:
            return todos
        }
      },

      completedCount: () => {
        const {todos} = get()
        const completed = todos.filter((todo) => todo.completed)
        const count = completed.length
        return count
      },

      activeCount: () => get().todos.filter((todo) => !todo.completed).length,

    }),
    {
      name: "todo-store",
    },
  ),
);