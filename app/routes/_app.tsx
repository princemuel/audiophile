import { Outlet } from "react-router";

import { Footer } from "@/layout/footer";
import { Header } from "@/layout/header";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
