import { useEffect } from "react";
import anime from "animejs";
import "./footer.css"; // Asumiendo que tienes este archivo para estilos adicionales

const Footer = () => {
  useEffect(() => {
    anime({
      targets: ".footer-content h1",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <footer className="footer-content flex justify-center items-center py-4">
      <h1 className="text-4xl font-extrabold text-indigo-600">ConstruRed ©</h1>
    </footer>
  );
};

export default Footer;
