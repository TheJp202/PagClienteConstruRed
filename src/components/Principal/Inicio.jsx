import { useState } from "react";

const Inicio = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center mt-28">
        <div className="flex w-full h-full max-w-[1300px] max-h-[700px]  justify-center my-1">
          <img src="/banner.jpg" className="w-11/12 h-1/3 rounded-[1%]" />
        </div>
        <div className="my-1 flex justify-center text-center max-w-[1300px]">
          <p className="text-2xl">
            La empresa <span className="font-medium">ConstruRed</span> se dedica
            al sector de la construcción e inmobiliario. Su principal actividad
            empresarial consiste en llevar a cabo proyectos de construcción,
            desarrollo y venta de bienes raíces, como edificios residenciales,
            comerciales u otros tipos de infraestructuras.
          </p>
        </div>
        <div className="flex flex-col max-w-[1300px] w-full">
          <div className="flex flex-row ml-14 my-4 items-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="min-w-20 w-20 h-20"
            >
              <path
                d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="ml-4 text-3xl font-bold">+51 930 693 203</p>
          </div>
          <div className="flex flex-row ml-14 my-4 items-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="min-w-20 w-20 h-20"
            >
              <path
                d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className="ml-4 text-3xl font-bold">
              construred2024@hotmail.com
            </p>
          </div>
          <div className="flex flex-row ml-14 my-4 items-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="min-w-20 w-20 h-20"
            >
              <path
                d="M5.7 15C4.03377 15.6353 3 16.5205 3 17.4997C3 19.4329 7.02944 21 12 21C16.9706 21 21 19.4329 21 17.4997C21 16.5205 19.9662 15.6353 18.3 15M12 9H12.01M18 9C18 13.0637 13.5 15 12 18C10.5 15 6 13.0637 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="ml-4 text-3xl font-bold">
              Av. Alfredo Mendiola 3540, S.M.P.15311
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col max-w-[1300px] text-center mb-28">
          <p className="text-4xl font-extrabold mt-8 mb-4">
            ¿Porqué confiar en Construred?
          </p>
          <img
            src="/imgConstrured1.jpg"
            className="w-9/12 h-1/3 rounded-[1%]"
          />
          <p className="text-2xl text-justify">
            En ConstruRed, entendemos que cada proyecto de construcción es único
            y requiere un enfoque personalizado para garantizar su éxito. ¿Por
            qué deberías confiar en nosotros para tu próximo proyecto?
            <br />
            <br />
            <span className="font-medium">Experiencia y Expertise:</span> Con
            años de experiencia en el sector, nuestro equipo de profesionales
            altamente capacitados cuenta con el conocimiento y la expertise
            necesaria para abordar cualquier desafío de construcción que se
            presente.
            <br />
            <br />
            <span className="font-medium">Compromiso con la Calidad:</span> En
            ConstruRed, la calidad es nuestra prioridad número uno. Nos
            comprometemos a ofrecer resultados excepcionales en cada proyecto,
            desde el diseño inicial hasta la entrega final, garantizando que
            cada detalle se maneje con precisión y cuidado.
            <br />
            <br />
            <span className="font-medium">
              Transparencia y Comunicación:
            </span>{" "}
            Valoramos la transparencia y la comunicación abierta con nuestros
            clientes. Mantenemos una comunicación constante y clara durante todo
            el proceso de construcción, asegurando que estés informado en cada
            etapa del proyecto.
            <br />
            <br />
            <span className="font-medium">Innovación y Tecnología:</span> Nos
            mantenemos a la vanguardia de las últimas tecnologías y tendencias
            en la industria de la construcción. Utilizamos herramientas y
            métodos innovadores para optimizar la eficiencia y la calidad en
            cada proyecto que emprendemos.
            <br />
            <br />
            <span className="font-medium">
              Compromiso con la Satisfacción del Cliente:
            </span>{" "}
            En ConstruRed, tu satisfacción es nuestra máxima prioridad. Nos
            esforzamos por superar tus expectativas en cada proyecto, trabajando
            en estrecha colaboración contigo para cumplir con tus necesidades y
            objetivos específicos. Confía en ConstruRed para tu próximo proyecto
            de construcción y descubre la diferencia que podemos hacer.
            <br />
            <br />
            Contáctanos hoy mismo para comenzar.{" "}
            <span className="text-3xl font-semibold">
              ¡Estamos aquí para convertir tu visión en realidad!
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Inicio;
