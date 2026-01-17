import React, { useEffect } from "react";
import { useState } from "react";
import Presentation from "./Presentation";

interface BoardTaskInfoProps {
  id: number;
  title: string;
  project_id: number;
  project_name: string;
  project_color: string;
  description: string;
  status: string;
}

interface HandleButtonClickType {
  (id: number): void;
}

interface BoardInfoProps {
 id: number;
 tasks: BoardTaskInfoProps[];
 handleButtonNextMove?: HandleButtonClickType;
 handleButtonPrevMove?: HandleButtonClickType;
}

interface BoardInfoDataProps {
 id: number;
 tasks: BoardTaskInfoProps[];
}




function Board() {
  const [boardInfo, setBoardInfo] = useState<BoardInfoDataProps>({ 
    id: 1,
   tasks: [
    {
      id: 1,
      project_id: 101,
      project_name: "Task Management System",
      project_color: "blue",
      title: "Set up project repo",
      description: "Create the Git repository and initialize the project structure",
      status: "backlog"
    },
    {
      id: 2,
      project_id: 102,
      project_name: "Customer Support Portal",
      project_color: "green",
      title: "Define support workflows",
      description: "Document ticket states and escalation rules",
      status: "backlog"
    },
    {
      id: 3,
      project_id: 103,
      project_name: "Inventory Tracker",
      project_color: "amber",
      title: "Design database schema",
      description: "Plan product, warehouse, and stock tables",
      status: "backlog"
    },
    {
      id: 4,
      project_id: 104,
      project_name: "Marketing Website",
      project_color: "pink",
      title: "Content outline",
      description: "Define sections and messaging for the site",
      status: "backlog"
    },
    {
      id: 5,
      project_id: 105,
      project_name: "Mobile Banking App",
      project_color: "purple",
      title: "Security requirements",
      description: "List compliance and security constraints",
      status: "backlog"
    },

    {
      id: 6,
      project_id: 101,
      project_name: "Task Management System",
      project_color: "blue",
      title: "Create wireframes",
      description: "Design low-fidelity UI wireframes",
      status: "backlog"
    },
    {
      id: 7,
      project_id: 102,
      project_name: "Customer Support Portal",
      project_color: "green",
      title: "Role definitions",
      description: "Define agent, supervisor, and admin roles",
      status: "backlog"
    },
    {
      id: 8,
      project_id: 103,
      project_name: "Inventory Tracker",
      project_color: "amber",
      title: "Stock movement rules",
      description: "Define inbound and outbound stock logic",
      status: "backlog"
    },
    {
      id: 9,
      project_id: 104,
      project_name: "Marketing Website",
      project_color: "pink",
      title: "SEO keyword research",
      description: "Identify primary and secondary keywords",
      status: "backlog"
    },
    {
      id: 10,
      project_id: 105,
      project_name: "Mobile Banking App",
      project_color: "purple",
      title: "User onboarding flow",
      description: "Plan KYC and first-time user steps",
      status: "backlog"
    },

    {
      id: 11,
      project_id: 101,
      project_name: "Task Management System",
      project_color: "blue",
      title: "Login page",
      description: "Implement login UI and validation",
      status: "in progress"
    },
    {
      id: 12,
      project_id: 102,
      project_name: "Customer Support Portal",
      project_color: "green",
      title: "Ticket creation API",
      description: "Endpoint for creating support tickets",
      status: "in progress"
    },
    {
      id: 13,
      project_id: 103,
      project_name: "Inventory Tracker",
      project_color: "amber",
      title: "Product CRUD API",
      description: "Create, update, and delete products",
      status: "in progress"
    },
    {
      id: 14,
      project_id: 104,
      project_name: "Marketing Website",
      project_color: "pink",
      title: "Landing page layout",
      description: "Build responsive hero and feature sections",
      status: "in progress"
    },
    {
      id: 15,
      project_id: 105,
      project_name: "Mobile Banking App",
      project_color: "purple",
      title: "Account dashboard",
      description: "Display balances and recent transactions",
      status: "in progress"
    },

    {
      id: 16,
      project_id: 101,
      project_name: "Task Management System",
      project_color: "blue",
      title: "Kanban board",
      description: "Backlog, in-progress, and completed columns",
      status: "in progress"
    },
    {
      id: 17,
      project_id: 102,
      project_name: "Customer Support Portal",
      project_color: "green",
      title: "Agent dashboard",
      description: "View and manage assigned tickets",
      status: "in progress"
    },
    {
      id: 18,
      project_id: 103,
      project_name: "Inventory Tracker",
      project_color: "amber",
      title: "Low-stock alerts",
      description: "Notify users when stock drops below threshold",
      status: "in progress"
    },
    {
      id: 19,
      project_id: 104,
      project_name: "Marketing Website",
      project_color: "pink",
      title: "Homepage deployment",
      description: "Deploy homepage to production",
      status: "completed"
    },
    {
      id: 20,
      project_id: 102,
      project_name: "Customer Support Portal",
      project_color: "green",
      title: "Ticket status lifecycle",
      description: "Implemented open, pending, resolved states",
      status: "completed"
    },
    {
      id: 21,
      project_id: 101,
      project_name: "Task Management System",
      project_color: "blue",
      title: "Project scaffolding",
      description: "Initial project setup completed",
      status: "completed"
    },
    {
      id: 22,
      project_id: 103,
      project_name: "Inventory Tracker",
      project_color: "amber",
      title: "Database migrations",
      description: "Initial schema migrations applied",
      status: "completed"
    },
    {
      id: 23,
      project_id: 105,
      project_name: "Mobile Banking App",
      project_color: "purple",
      title: "Authentication module",
      description: "Secure login and token handling",
      status: "completed"
    },
    {
      id: 24,
      project_id: 104,
      project_name: "Marketing Website",
      project_color: "pink",
      title: "Analytics integration",
      description: "Added traffic and conversion tracking",
      status: "completed"
    },
    {
      id: 25,
      project_id: 102,
      project_name: "Customer Support Portal",
      project_color: "green",
      title: "Initial release",
      description: "First production release deployed",
      status: "completed"
    }
  ]




}
  );

  useEffect(() => {},[boardInfo])



  const handleButtonNextMove: HandleButtonClickType = (id) => {
    // get all tasks without task in question
    const modifiedTaskList:BoardTaskInfoProps[] = [...boardInfo.tasks.filter((task) => task.id !== id)]

    // get the task in question
    const taskInQuestion: BoardTaskInfoProps = [...boardInfo.tasks.filter((task) => task.id === id)][0]

    console.log("task: ", taskInQuestion)

    // modify its state
    const modifiedTaskInQuestion = {
      ...taskInQuestion,
      status:
        taskInQuestion.status === "backlog"
          ? "in progress"
          : taskInQuestion.status === "in progress"
            ? "completed"
            : taskInQuestion.status,
    };

    // put the task in question inside new task list
    const newTaskList:BoardTaskInfoProps[] = [...modifiedTaskList, modifiedTaskInQuestion]

    console.log("new list: ", newTaskList)

    // set new state with updated task list 
    setBoardInfo({...boardInfo, tasks: newTaskList.sort((a,b) => a.id - b.id)})
  };

  const handleButtonPrevMove: HandleButtonClickType = (id) => {
    // get all tasks without task in question
    const modifiedTaskList:BoardTaskInfoProps[] = [...boardInfo.tasks.filter((task) => task.id !== id)]

    // get the task in question
    const taskInQuestion: BoardTaskInfoProps = [...boardInfo.tasks.filter((task) => task.id === id)][0]

    console.log("task: ", taskInQuestion)

    // modify its state
    const modifiedTaskInQuestion = {
      ...taskInQuestion,
      status:
        taskInQuestion.status === "completed"
          ? "in progress"
          : taskInQuestion.status === "in progress"
            ? "backlog"
            : taskInQuestion.status,
    };

    // put the task in question inside new task list
    const newTaskList:BoardTaskInfoProps[] = [...modifiedTaskList, modifiedTaskInQuestion]

    console.log("new list: ", newTaskList)

    // set new state with updated task list 
    setBoardInfo({...boardInfo, tasks: newTaskList.sort((a,b) => a.id - b.id)})
  };

  


  return <Presentation id={boardInfo.id} tasks={boardInfo.tasks} handleButtonPrevMove={handleButtonPrevMove} handleButtonNextMove={handleButtonNextMove} />;
}

export default Board;