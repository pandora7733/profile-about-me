import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />

      <main className="pt-14">
        {children}
      </main>

      <Footer />
    </div>
  );
}