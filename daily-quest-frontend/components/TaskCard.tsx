import React from "react";
import { Card } from "antd";
import { Task } from "../models/Task";

interface TaskCardProps {
  task: Task;
}

const priorityTranslation: Record<string, string> = {
  LOW: "Baixa",
  NORMAL: "Normal",
  MEDIUM: "Moderada",
  HIGH: "Alta",
};

const statusTranslation: Record<string, string> = {
  NOT_INITIATED: "Pendentes",
  IN_PROGRESS: "Em progresso",
  COMPLETED: "Completadas",
};

const priorityColor: Record<"LOW" | "NORMAL" | "MEDIUM" | "HIGH", string> = {
  LOW: "#52c41a",
  NORMAL: "#1890ff",
  MEDIUM: "#1890ff",
  HIGH: "#ff4d4f",
};

const statusColor: Record<
  "NOT_INITIATED" | "IN_PROGRESS" | "COMPLETED",
  string
> = {
  NOT_INITIATED: "#ff4d4f",
  IN_PROGRESS: "#1890ff",
  COMPLETED: "#52c41a",
};

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const getPriorityColor = (priority: "LOW" | "NORMAL" | "MEDIUM" | "HIGH") =>
    priorityColor[priority];

  const getStatusColor = (
    status: "NOT_INITIATED" | "IN_PROGRESS" | "COMPLETED"
  ) => statusColor[status];

  return (
    <Card className="task-card">
      <div
        className="status-circle"
        style={{ borderColor: getStatusColor(task.status) }}
      ></div>
      <div className="task-card-content">
        <div className="task-info">
          <Card.Meta
            title={<strong>{task.title}</strong>}
            description={<span className="task-description">{task.text}</span>}
          />
        </div>
        <img src={task.imgLink} alt={task.title} className="task-image" />
      </div>
      <div className="task-details">
        <p>
          Prioridade:{" "}
          <span style={{ color: getPriorityColor(task.priority) }}>
            {priorityTranslation[task.priority]}
          </span>
        </p>
        <p>
          Status:{" "}
          <span style={{ color: getStatusColor(task.status) }}>
            {statusTranslation[task.status]}
          </span>
        </p>
        <p className="created-at">
          Criado em: {new Date(task.createdAt).toLocaleDateString("pt-BR")}
        </p>
      </div>
    </Card>
  );
};

export default TaskCard;
