import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/pt-br";

moment.locale("pt-br");

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <span className="logo-orange">Daily</span>
          <span className="logo-black">Quest</span>
        </div>
        <div className="navbar-search">
          <Input
            placeholder="Buscar..."
            suffix={
              <Button type="primary" className="search-button">
                <SearchOutlined />
              </Button>
            }
          />
        </div>
        <div className="navbar-date">
          <div className="date-day">{moment().format("dddd")}</div>
          <div className="date-full">
            {moment().format("D [de] MMMM [de] YYYY")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
