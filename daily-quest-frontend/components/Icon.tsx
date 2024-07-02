import React from "react";

interface IconProps {
  name: string;
  width?: number;
  height?: number;
  selected?: boolean;
}

const Icon: React.FC<IconProps> = ({
  name,
  width = 20,
  height = 20,
  selected = false,
}) => {
  switch (name) {
    case "dashboard":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          className="image"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3333 8V0H24V8H13.3333ZM0 13.3333V0H10.6667V13.3333H0ZM13.3333 24V10.6667H24V24H13.3333ZM0 24V16H10.6667V24H0Z"
            fill={selected ? "#ff6767" : "white"}
          />
        </svg>
      );
    case "vital":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 8 20"
          className="image"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.875 0C2.84729 0 1.86166 0.408258 1.13496 1.13496C0.408258 1.86166 0 2.84729 0 3.875C0 6.795 1.207 10.427 1.813 12.074C1.96964 12.4942 2.25167 12.8561 2.62086 13.1106C2.99006 13.3651 3.42858 13.5 3.877 13.497C4.781 13.497 5.616 12.955 5.94 12.079C6.546 10.439 7.75 6.825 7.75 3.875C7.75 2.84729 7.34174 1.86166 6.61504 1.13496C5.88834 0.408258 4.90271 0 3.875 0ZM3.876 14.998C3.21269 14.998 2.57655 15.2615 2.10753 15.7305C1.6385 16.1996 1.375 16.8357 1.375 17.499C1.375 18.1623 1.6385 18.7984 2.10753 19.2675C2.57655 19.7365 3.21269 20 3.876 20C4.53931 20 5.17545 19.7365 5.64447 19.2675C6.1135 18.7984 6.377 18.1623 6.377 17.499C6.377 16.8357 6.1135 16.1996 5.64447 15.7305C5.17545 15.2615 4.53931 14.998 3.876 14.998Z"
            fill={selected ? "#ff6767" : "white"}
          />
        </svg>
      );
    case "tasks":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 18 20"
          className="image"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 20H16C17.103 20 18 19.103 18 18V3C18 1.897 17.103 1 16 1H14C14 0.734784 13.8946 0.48043 13.7071 0.292893C13.5196 0.105357 13.2652 0 13 0H5C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1H2C0.897 1 0 1.897 0 3V18C0 19.103 0.897 20 2 20ZM2 3H4V5H14V3H16V18H2V3Z"
            fill={selected ? "#ff6767" : "white"}
          />
        </svg>
      );
    case "categories":
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          className="image"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.65329 19.7143H24V21.4286H9.65329V19.7143ZM2.65414 20.5714L0.0102479 22.7829L1.45517 24L5.55423 20.5714L1.45517 17.1429L0 18.3514L2.65414 20.5714ZM9.65329 11.1429H24V12.8571H9.65329V11.1429ZM2.65414 12L0.0102479 14.2114L1.45517 15.4286L5.55423 12L1.45517 8.57143L0 9.78L2.65414 12ZM9.65329 2.57143H24V4.28571H9.65329V2.57143ZM2.65414 3.42857L0.0102479 5.64L1.45517 6.85714L5.55423 3.42857L1.45517 0L0 1.20857L2.65414 3.42857Z"
            fill={selected ? "#ff6767" : "white"}
          />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
