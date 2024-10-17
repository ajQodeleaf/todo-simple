import Footer from "../../components/Footer";

export default function SignInLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
