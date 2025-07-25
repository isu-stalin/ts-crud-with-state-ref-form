import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content" style={{padding: '20px'}}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
