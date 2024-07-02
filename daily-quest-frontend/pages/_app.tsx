import React from "react";
import type { AppProps } from "next/app";
import "../styles/sidebar.css";
import "../styles/icon.css";
import "../styles/navbar.css";
import "../styles/taskCard.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
