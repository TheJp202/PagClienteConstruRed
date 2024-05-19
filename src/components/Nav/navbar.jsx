import { useState, useEffect } from "react";
import ModalLogin from "../Sesion/login";
import ModalRegister from "../Sesion/register";
import ModalMensaje from "../Soporte/mensaje";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoading } from "../../utils/loadingGlobal";
import axios from "axios";

const Navbar = () => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const [nombresRegister, setNombresRegister] = useState("");
  const [apellidosRegister, setApellidosRegister] = useState("");
  const [DNIRegister, setDNIRegister] = useState("");
  const [telefonoRegister, setTelefonoRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [isModalMensajeOpen, setIsModalMensajeOpen] = useState(false);

  const [sessionCliente, setSessionCliente] = useState([]);
  const [isSessionActive, setIsSessionActive] = useState(false);

  const {setLoading} = useLoading();

  const [tipos, setTipos] = useState([]);
  const [tipoMensaje, setTipoMensaje] = useState([]);
  const [mensaje,setMensaje] = useState([]);  


  const openModalLogin = () => {
    setIsModalLoginOpen(true);
  };

  const closeModalLogin = () => {
    setIsModalLoginOpen(false);
  };

  const openModalRegister = () => {
    setIsModalRegisterOpen(true);
  };

  const closeModalRegister = () => {
    setIsModalRegisterOpen(false);
  };

  
  const openModalMensaje = () => {
    setIsModalMensajeOpen(true);
  };

  const closeModalMensaje = () => {
    setIsModalMensajeOpen(false);
  };

  const SessionLogin = async () => {
    try {
      setLoading(true);
      axios.defaults.withCredentials = true;
      const response = await axios.post(
        `https://apiconstrured.onrender.com/cliente/login/`,
        {
          Correo: emailLogin,
          Contraseña: passwordLogin,
        }
      );
      setIsSessionActive(true);
      setSessionCliente(response.data);
      setEmailLogin("");
      setPasswordLogin("");
      toast.success("Sesión iniciada", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        closeButton: true,
      });
    } catch (error) {
      toast.error("Error al iniciar sesión...", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        closeButton: true,
      });
    }
    setLoading(false);

  };

  const SessionLogout = async () => {
    try {
      setLoading(true);
      axios.defaults.withCredentials = true;
      const response = await axios.post(
        `https://apiconstrured.onrender.com/cliente/logout/`,
        {}
      );
      setIsSessionActive(false);
      setSessionCliente([]);
      toast.success("Sesión cerrada", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        closeButton: true,
      });
    } catch (error) {
      toast.error("Error al cerrar sesión...", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        closeButton: true,
      });
    }
    setLoading(false);

  };

  const SessionRegister = async () => {
    try {
      setLoading(true);
      axios.defaults.withCredentials = true;
      const response = await axios.post(
        "https://apiconstrured.onrender.com/cliente/register/",
        {
          Nombres: nombresRegister,
          Apellidos: apellidosRegister,
          DNI: DNIRegister,
          Telefono: telefonoRegister,
          Correo: emailRegister,
          Contraseña: passwordRegister
        }
      );
      toast.success("Cuenta registrada", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        closeButton: true,
      });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          closeButton: true,
        });
      } else {
        toast.error("Error al crear la cuenta...", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          closeButton: true,
        });
      }
    } 
    setLoading(false);
  };

  useEffect(() => {
    const CookieLogin = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.post(
          `https://apiconstrured.onrender.com/cliente/auto_login/`,
          {}
        );
        setIsSessionActive(true);
        setSessionCliente(response.data);
        setNombresRegister("");
        setApellidosRegister("");
        setDNIRegister("");
        setTelefonoRegister("");
        setEmailRegister("");
        setPasswordRegister("");
        setEmailLogin("");
        setPasswordLogin("");
      } catch (error) {
        console.log("No se encontró alguna sesión");
      }

    };
    CookieLogin();
  }, []);

  useEffect(() => {
    const PeticionTipos = async () => {
      try {
        const response = await axios.get(
          `https://apiconstrured.onrender.com/tipoMensaje/`);
        setTipos(response.data);

      } catch (error) {
        console.log("");
      }

    };
    PeticionTipos();
  }, []);

  const EnviarMensaje = async () => {
    try {
      axios.defaults.withCredentials = true;

      const response = await axios.post(
        "https://apiconstrured.onrender.com/mensaje/",
        {
          Descripcion: mensaje,
          Cliente: sessionCliente.user_profile.id,
          TipoMensaje: tipoMensaje
        }
      );
      setMensaje("");
      setTipoMensaje("");
      toast.success("Mensaje Enviado", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        closeButton: true,
      });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          closeButton: true,
        });
      } else {
        toast.error("Error al enviar el mensaje...", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          closeButton: true,
        });
      }
    } 
    setLoading(false);

  };

  return (
    <>
      <div className="fixed w-full h-28 bg-[#18108f] z-10 top-0">
        <div className="flex w-full justify-center">
          <div className="flex w-11/12 flex-row max-w-[1300px]">
            <div className="w-1/3">
              <img
                src="/logo_emp.png"
                className="w-20 h-20 mt-4 rounded-[10%]"
              />
            </div>
            <div className="w-1/3 text-center my-auto">
              <p className="text-white text-2xl font-bold">
                ¡Bienvenido a <span className="font-extrabold">ConstruRed</span>
                !
              </p>
            </div>
            <div className="flex w-1/3 justify-end">
              <div className={`flex-col text-center my-2 ${isSessionActive?"hidden":"flex"}`}>
                <button
                  className="text-white rounded-[5%] bg-blue-500 py-1 px-2 hover:bg-blue-600"
                  onClick={() => openModalLogin()}
                >
                  Inicia Sesión
                </button>
                <p className="text-white my-1">Ó</p>
                <button
                  className="text-white rounded-[5%] bg-blue-500 py-1 px-2 hover:bg-blue-600"
                  onClick={() => openModalRegister()}
                >
                  Registrate
                </button>
              </div>
              <div className={`flex-col text-center my-2 ${isSessionActive?"flex":"hidden"}`}>
              <button
                  className="text-white rounded-[5%] bg-blue-500 py-1 px-2 hover:bg-blue-600"
                  onClick={() => openModalMensaje()}
                >
                  Soporte
                </button>
                <p className="text-white my-1">Ó</p>
                <button
                  className="text-white rounded-[5%] bg-blue-500 py-1 px-2 hover:bg-blue-600"
                  onClick={() => SessionLogout()}
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalLogin
        isOpen={isModalLoginOpen}
        closeModal={closeModalLogin}
        password={passwordLogin}
        email={emailLogin}
        setPassword={setPasswordLogin}
        setEmail={setEmailLogin}
        SessionLogin={SessionLogin}
      />

      <ModalRegister
        isOpen={isModalRegisterOpen}
        closeModal={closeModalRegister}
        nombres={nombresRegister}
        apellidos={apellidosRegister}
        dni={DNIRegister}
        telefono={telefonoRegister}
        password={passwordRegister}
        email={emailRegister}
        setNombres={setNombresRegister}
        setApellidos={setApellidosRegister}
        setDNI={setDNIRegister}
        setTelefono={setTelefonoRegister}
        setPassword={setPasswordRegister}
        setEmail={setEmailRegister}
        SessionRegister={SessionRegister}
      />

      <ModalMensaje
        isOpen = {isModalMensajeOpen}
        closeModal = {closeModalMensaje}
        sessionCliente = {sessionCliente}
        tipos = {tipos}
        tipoMensaje = {tipoMensaje}
        setTipoMensaje = {setTipoMensaje}
        mensaje = {mensaje}
        setMensaje = {setMensaje}
        EnviarMensaje = {EnviarMensaje}
      />

    </>
  );
};

export default Navbar;
