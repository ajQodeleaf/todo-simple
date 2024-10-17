import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideNavBar from "../../components/SideNavBar.js";

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <SideNavBar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
