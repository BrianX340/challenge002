import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
export default function Layout({ children, appData, setAppData }) {
  return (
    <>
      <Navbar appData={appData} setAppData={setAppData} />
      <div style={{ height: '100vh', paddingTop:'70px' }}>
        {children}
      </div>
    </>
  )
}