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
    }),
    {
      name: "todo-store",
    },
  ),
);