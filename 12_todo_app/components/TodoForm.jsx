// "use client"
// import React, {useState} from 'react'
// import { Controller, useForm } from 'react-hook-form'
// import {zodResolver} from "@hookform/resolvers/zod"

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";

// import { todoSchema } from '@/validations/todoValidation';
// import { useCreateTodo } from '@/hooks/useCreateTodo';
// import {toast} from "sonner"

// const TodoForm = () => {
//     // console.log("Client component loaded")
//     const [open, setOpen] = useState(false)
//     const createTodoMutation = useCreateTodo();

//     const form = useForm({
//         resolver: zodResolver(todoSchema),
//         defaultValues: {
//             title: "",
//             description:"",
//             priority:"medium",
//         },
//         mode:"onSubmit"
//     })

//     // const {
//     //   register,
//     //   handleSubmit,
//     //   setValue,
//     //   watch,
//     //   reset,
//     //   formState: { errors, isSubmitting },
//     // } = useForm({
//     //   resolver: zodResolver(todoSchema),
//     //   defaultValues: {
//     //     title: "",
//     //     description: "",
//     //     priority: "medium",
//     //   },
//     // });

//     const onSubmit = async (data) => {
//         console.log("form Submitted", data)
//         try {
//             const result = await createTodoMutation.mutateAsync(data)

//             if(result.success){
//                 toast.success("Todo created successfully");
//                 form.reset();
//                 setOpen(false)
//             }else{
//                 console.log(result.error)
//                 toast.error(result.error)
//             }
//             // createTodoMutation.mutate(data, {
//             //   onSuccess: (result) => {
//             //     toast.success("Todo created successfully");
//             //     form.reset();
//             //     setOpen(false);
//             //   },
//             //   onError: () => {
//             //     toast.error("Failed to create todo");
//             //   },
//             // });
//         } catch (error) {
//             console.log(error);
//             toast.error("Faield to create todo");
//         }
//     }
//     if(!open){
//         return (
//             <Button onClick={()=> setOpen(true)}>Add new Todo</Button>
//         )
//     }
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Create New Todo</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={form.handleSubmit(onSubmit)}>
//           <div>
//             <Label htmlFor="title">Title *</Label>
//             <Input
//               id="title"
//               {...form.register("title")}
//               placeholder="Enter your todo..."
//             />
//             {form.formState.errors.title && (
//               <p className="text-gray-950">
//                 {form.formState.errors.title.message}
//               </p>
//             )}
//           </div>
//           <div>
//             <Label htmlFor="desc">Description</Label>
//             <Textarea
//               id="desc"
//               {...form.register("description")}
//               placeholder="Enter description if any"
//             />
//             {form.formState.errors.description && (
//               <p className="text-gray-950">
//                 {form.formState.errors.description.message}
//               </p>
//             )}
//           </div>
//           {/* <div>
//             <Label htmlFor="priority">Priority</Label>
//             <Select
//               value={form.watch("priority")}
//               onValueChange={(value) => form.setValue("priority", value)}
//             >
//               <SelectTrigger>
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="low">Low</SelectItem>
//                 <SelectItem value="medium">Medium</SelectItem>
//                 <SelectItem value="high">High</SelectItem>
//               </SelectContent>
//             </Select>
//           </div> */}
//           <Controller
//             name="priority"
//             control={form.control}
//             render={({ field }) => (
//               <Select value={field.value} onValueChange={field.onChange}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select priority" />
//                 </SelectTrigger>

//                 <SelectContent>
//                   <SelectItem value="low">Low</SelectItem>
//                   <SelectItem value="medium">Medium</SelectItem>
//                   <SelectItem value="high">High</SelectItem>
//                 </SelectContent>
//               </Select>
//             )}
//           />

//           <div>
//             <Button type="submit">Click</Button>
//             {/* <button type="submit" disabled={false}>
//               Create
//             </button> */}
//             <Button
//               type="button"
//               onClick={() => {
//                 setOpen(false);
//                 form.reset();
//               }}
//             >
//               Cancel
//             </Button>
//           </div>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }

// export default TodoForm

"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { todoSchema } from "@/validations/todoValidation";
import { useCreateTodo } from "@/hooks/useCreateTodo";
import { toast } from "sonner";

const TodoForm = () => {
  const [open, setOpen] = useState(false);
  const createTodoMutation = useCreateTodo();

  const form = useForm({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: "",
      description: "",
      priority: "medium",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    console.log("form Submitted", data);
    try {
      const result = await createTodoMutation.mutateAsync(data);

      if (result.success) {
        toast.success("Todo created successfully");
        form.reset();
        setOpen(false);
      } else {
        console.log(result.error);
        toast.error(result.error);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to create todo");
    }
  };

  if (!open) {
    return <Button onClick={() => setOpen(true)}>Add new Todo</Button>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Todo</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              {...form.register("title")}
              placeholder="Enter your todo..."
            />
            {form.formState.errors.title && (
              <p className="text-sm text-red-500">
                {form.formState.errors.title.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="desc">Description</Label>
            <Textarea
              id="desc"
              {...form.register("description")}
              placeholder="Enter description if any"
            />
            {form.formState.errors.description && (
              <p className="text-sm text-red-500">
                {form.formState.errors.description.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority">Priority</Label>
            <Controller
              name="priority"
              control={form.control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange} defaultValues={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {form.formState.errors.priority && (
              <p className="text-sm text-red-500">
                {form.formState.errors.priority.message}
              </p>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              type="submit"
              disabled={
                form.formState.isSubmitting || createTodoMutation.isPending
              }
            >
              {form.formState.isSubmitting || createTodoMutation.isPending
                ? "Creating..."
                : "Create Todo"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setOpen(false);
                form.reset();
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default TodoForm; 