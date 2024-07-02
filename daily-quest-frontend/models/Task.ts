export interface Task {
  id: number;
  text: string;
  title: string;
  imgLink: string;
  priority: "LOW" | "NORMAL" | "MEDIUM" | "HIGH";
  status: "NOT_INITIATED" | "IN_PROGRESS" | "COMPLETED";
  creator: {
    id: number;
    name: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    userType: "COMMON" | "MANAGER";
    rewardsGained: number;
  };
  createdAt: string;
  dueDate: string;
  reward: number;
}
