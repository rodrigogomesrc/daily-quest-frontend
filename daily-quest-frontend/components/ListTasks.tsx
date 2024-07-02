import React, { useEffect, useState } from "react";
import { Row, Col, Spin } from "antd";
import taskService from "../services/task";
import TaskCard from "./TaskCard";
import { Task } from "../models/Task";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await taskService.getAllTasks();
        if (!data.error) {
          setTasks(data);
        } else {
          setError(data.error);
        }
      } catch (error) {
        setError("Erro ao carregar tarefas");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <Spin tip="Carregando..." />;
  if (error) return <div>{error}</div>;

  return (
    <Row gutter={16}>
      {tasks.map((task) => (
        <Col span={6} key={task.id}>
          <TaskCard task={task} />
        </Col>
      ))}
    </Row>
  );
};

export default TaskList;
