import { Footer } from "@/layout/footer";
// import { Header } from "@/layout/header";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      {/*<Header />*/}
      <Outlet />
      <Footer />
    </>
  );
}
