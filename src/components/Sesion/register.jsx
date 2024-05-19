import React, { useEffect } from "react";
import Modal from "react-modal";
import { Transition } from "@headlessui/react";


const ModalRegister = ({
    isOpen,
    closeModal,
    nombres,
    apellidos,
    dni,
    telefono,
    password,
    email,
    setNombres,
    setApellidos,
    setDNI,
    setTelefono,
    setPassword,
    setEmail,
    SessionRegister,
}) => {
  const handleCloseModal = () => {
    closeModal();
  };
  useEffect(() => {
    Modal.setAppElement(document.body);
  }, []);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Register Modal"
        className="modal-content modal-session"
        overlayClassName="modal-overlay"
        shouldCloseOnOverlayClick={false}
      >
        <Transition
          as="div"
          appear={true}
          show={true}
          enter="transition-opacity duration-1000 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="flex mt-5 xmd:mt-10 justify-center ">
            <div className="flex flex-col  justify-center items-center w-full">
              <div className="my-2 text-center">
                <label className="text-black text-4xl font-medium underline">
                  Crea una cuenta
                </label>
              </div>

              <form className="flex flex-col text-gray-800 my-2 w-full md:w-10/12">
              <div className="relative my-4 w-full flex flex-row">
                  <div className="relative flex w-[48%]">
                  <input
                    type="text"
                    id="nombres_register"
                    className="peer w-full mr-auto rounded-md p-0.5 text-lg border-2 bg-gray-100 placeholder-transparent "
                    placeholder="Nombres"
                    value={nombres}
                    onChange={(e) => setNombres(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="nombres_register"
                    className=" ml-1 absolute left-0 -top-4 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text peer-focus:cursor-default"
                  >
                    Nombres
                  </label>
                  </div>
                  <div className="w-[4%]"></div>
                  <div className="relative flex w-[48%]">
                  <input
                    type="text"
                    id="apellidos_register"
                    className="peer w-full mr-auto rounded-md p-0.5 text-lg border-2 bg-gray-100 placeholder-transparent "
                    placeholder="Apellidos"
                    value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="apellidos_register"
                    className=" ml-1 absolute left-0 -top-4 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text peer-focus:cursor-default"
                  >
                    Apellidos
                  </label>
                  </div>
                </div>
                <div className="relative my-4  w-full ">
                  <input
                    type="text"
                    id="dni_register"
                    className="peer w-full mr-auto rounded-md p-0.5 text-lg border-2 bg-gray-100 placeholder-transparent "
                    placeholder="DNI"
                    value={dni}
                    onChange={(e) => setDNI(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="dni_register"
                    className=" ml-1 absolute left-0 -top-4 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text peer-focus:cursor-default"
                  >
                    DNI
                  </label>
                </div>
                <div className="relative my-4  w-full ">
                  <input
                    type="text"
                    id="telefono_register"
                    className="peer w-full mr-auto rounded-md p-0.5 text-lg border-2 bg-gray-100 placeholder-transparent "
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="telefono_register"
                    className=" ml-1 absolute left-0 -top-4 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text peer-focus:cursor-default"
                  >
                    Teléfono
                  </label>
                </div>
                <div className="relative my-4  w-full ">
                  <input
                    type="email"
                    id="email_register"
                    className="peer w-full mr-auto rounded-md p-0.5 text-lg border-2 bg-gray-100 placeholder-transparent "
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="email_register"
                    className=" ml-1 absolute left-0 -top-4 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text peer-focus:cursor-default"
                  >
                    Correo Electrónico
                  </label>
                </div>
                <div className="relative my-4  w-full ">
                  <input
                    type="password"
                    id="password_register"
                    className="peer w-full mr-auto rounded-md p-0.5 text-lg border-2 bg-gray-100 placeholder-transparent "
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="password_register"
                    className=" ml-1 absolute left-0 -top-4 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text peer-focus:cursor-default"
                  >
                    Contraseña
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-slate-950 text-xl text-center rounded-md py-2 px-4 text-white hover:bg-slate-900 transform transition-transform hover:scale-105"
              onClick={async () => {
                await SessionRegister();
                handleCloseModal();
              }}
            >
              Registrate
            </button>
          </div>
          <div className="flex justify-center xmd:justify-normal">
            <button
              onClick={handleCloseModal}
              className="rounded-full font-bold py-2 px-2 mt-4 bg-slate-800 hover:bg-slate-950"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
                className="min-w-8 w-8 h-8"
              >
                <path
                  d="M7 11L3 15M3 15L7 19M3 15H16C18.7614 15 21 12.7614 21 10C21 7.23858 18.7614 5 16 5H11"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </Transition>
      </Modal>
    </>
  );
};

export default ModalRegister;
