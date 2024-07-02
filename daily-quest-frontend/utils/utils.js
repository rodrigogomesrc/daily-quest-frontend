import { message } from "antd";

export const showNotification = (type, description) => {
  const msg = `${description ? description : ""}`;
  switch (type) {
    case "error":
      message.error(msg);
      break;
    case "success":
      message.success(msg);
      break;
  }
};
