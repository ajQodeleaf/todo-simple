import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideNavBar from "@/components/SideNavBar";

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <SideNavBar />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <main style={{ flexGrow: 1, width: "100%" }}>{children}</main>
      </div>
      <Footer />
    </>
  );
}
