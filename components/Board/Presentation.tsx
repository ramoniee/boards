import React from "react";

interface BoardTaskInfoProps {
  id: number;
  title: string;
  description: string;
  project_id: number;
  project_name: string;
  project_color: string;
  status: string;
}

interface HandleButtonClickType {
  (id: number): void;
}

interface BoardInfoProps {
 id: number;
 tasks: BoardTaskInfoProps[];
 handleButtonNextMove: HandleButtonClickType;
 handleButtonPrevMove: HandleButtonClickType;
}

const colorMap: Record<string, string> = {
  blue: "bg-blue-200",
  green: "bg-green-200",
  amber: "bg-amber-200",
  pink: "bg-pink-200",
  purple: "bg-purple-200",
};

const Presentation: React.FC<BoardInfoProps> = ({id, tasks, handleButtonNextMove, handleButtonPrevMove}) => {
  return (
    <>
        <section>
            <section className="flex justify-between space-x-1">
                {["backlog", "in progress", "completed"].map((status) => 
                    (   <section className="w-1/3 space-y-1 bg-gray-400 p-1">
                            <h1 className="text-center bg-blue-300 p-1 font-bold text-md rounded-sm">{status}</h1>
                            <section className=" bg-gray-400 min-h-136 max-h-136 overflow-y-scroll">
                                <section className="grid mt-1 space-y-1 ">
                                {   
                                    tasks.map((task,id) => {
                                        if (task.status === status){
                                            return ( 
                                                <section key={id} className="px-1">
                                                    <section className={`${colorMap[task.project_color]} rounded-sm p-1 max-h-32`}>
                                                        <section className="min-h-23 space-y-3">
                                                            <section className="">
                                                                <h2 className="font-semibold">{task.title}</h2>
                                                                <h3 className="font-light">{task.project_name}</h3>
                                                            </section>

                                                            <section className="">
                                                                <p className="">{task.description}</p>
                                                            </section>  
                                                        </section>
                                                        
                                                        {task.status === "backlog" && 
                                                            (
                                                                <section className="flex space-x-1 p-1 bg-amber-300 rounded-sm justify-end">
                                                                    <button onClick={() => handleButtonNextMove(task.id)} className="border-2 border-gray-500/30 bg-blue-300 hover:bg-blue-200 rounded-md px-2 text-gray-500">progress</button>
                                                                </section>
                                                            )
                                                        }

                                                        {task.status === "in progress" && 
                                                            (
                                                                <section className="flex space-x-1 p-1 bg-amber-300 rounded-sm justify-end">
                                                                    <button onClick={() => handleButtonPrevMove(task.id)} className="border-2 border-gray-500/30 bg-blue-300 hover:bg-blue-200 rounded-md px-2 text-gray-500">backlog</button>
                                                                    <button onClick={() => handleButtonNextMove(task.id)} className="border-2 border-gray-500/30 bg-blue-300 hover:bg-blue-200 rounded-md px-2 text-gray-500">completed</button>
                                                                </section>
                                                            )
                                                        }

                                                        {task.status === "completed" && 
                                                            (
                                                                <section className="flex space-x-1 p-1 bg-amber-300 rounded-sm justify-end">
                                                                    <button onClick={() => handleButtonPrevMove(task.id)} className="border-2 border-gray-500/30 bg-blue-300 hover:bg-blue-200 rounded-md px-2 text-gray-500">progress</button>
                                                                </section>
                                                            )
                                                        }
                                                    </section>
                                                </section>
                                            )
                                        }
                                    }
                                )}
                                </section>
                            </section>
                        </section>
              
                    )
                )}        
            </section>
        </section>    
    </>
  );
};

export default Presentation;
