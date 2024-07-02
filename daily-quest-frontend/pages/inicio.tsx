import React from "react";
import TaskList from "../components/ListTasks";
import AppLayout from "../components/Layout";

const Inicio: React.FC = () => {
  return (
    <AppLayout>
      <TaskList></TaskList>
    </AppLayout>
  );
};

export default Inicio;
