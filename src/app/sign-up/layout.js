import Footer from '../../components/Footer';

export default function SignUpLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
