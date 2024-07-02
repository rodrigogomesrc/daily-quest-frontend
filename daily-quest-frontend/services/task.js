import axios from "axios";
import { showNotification } from "../utils/utils";

const API_URL = "http://localhost:8080/api/tasks";

const taskService = {
  async getAllTasks() {
    try {
      const response = await axios.get(API_URL);
      showNotification("success", "Tarefas carregadas com sucesso");
      return response && response.data ? response.data : [];
    } catch (error) {
      showNotification("error", "Erro ao carregar tarefas");
      return error;
    }
  },

  async getTaskById(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      showNotification("success", "Tarefa carregada com sucesso");
      return response.data;
    } catch (error) {
      showNotification("error", "Erro ao carregar tarefa");
      return error;
    }
  },

  async createTask(task, userId) {
    try {
      const response = await axios.post(`${API_URL}/${userId}`, task);
      showNotification("success", "Tarefa criada com sucesso");
      return response.data;
    } catch (error) {
      showNotification("error", "Erro ao criar tarefa");
      return error;
    }
  },

  async updateTask(id, task, userId) {
    try {
      const response = await axios.put(`${API_URL}/${id}/${userId}`, task);
      showNotification("success", "Tarefa atualizada com sucesso");
      return response.data;
    } catch (error) {
      showNotification("error", "Erro ao atualizar tarefa");
      return error;
    }
  },

  async deleteTask(id) {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      showNotification("success", "Tarefa deletada com sucesso");
      return response.data;
    } catch (error) {
      showNotification("error", "Erro ao deletar tarefa");
      return error;
    }
  },

  async updateTaskStatus(taskId, taskStatus) {
    try {
      const response = await axios.put(`${API_URL}/${taskId}/${taskStatus}`);
      showNotification("success", "Status da tarefa atualizado com sucesso");
      return response.data;
    } catch (error) {
      showNotification("error", "Erro ao atualizar status da tarefa");
      return;
      error;
    }
  },

  async getValidTaskStatuses() {
    try {
      const response = await axios.get(`${API_URL}/valid-task-statuses`);
      showNotification(
        "success",
        "Status de tarefas válidos carregados com sucesso"
      );
      return response.data;
    } catch (error) {
      showNotification("error", "Erro ao carregar status de tarefas válidos");
      return;
      error;
    }
  },

  async getValidTaskPriorities() {
    try {
      const response = await axios.get(`${API_URL}/valid-task-priorities`);
      showNotification(
        "success",
        "Prioridades de tarefas válidas carregadas com sucesso"
      );
      return response.data;
    } catch (error) {
      showNotification(
        "error",
        "Erro ao carregar prioridades de tarefas válidas"
      );
      return;
      error;
    }
  },
};

export default taskService;
