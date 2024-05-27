import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Nav/navbar";
import Loading from "./loading";
import { useLoading } from "../utils/loadingGlobal";
import Footer from "../components/Fot/footer"; 

const Layout = (props) => {
  const { loading } = useLoading();

  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Navbar />
          <ToastContainer autoClose={5000} />
          {props.children}
          <Footer/>
        </>
      )}
    </>
  );
};
export default Layout;
