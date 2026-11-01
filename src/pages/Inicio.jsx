 import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";

import "../styles/Home.css";

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="home">
      <section className="home-hero" id="inicio">
        <div className="home-background" aria-hidden="true">
          <span className="home-orb home-orb--one" />
          <span className="home-orb home-orb--two" />
          <span className="home-grid" />
        </div>

        <div className="container home-container">
          <motion.div
            className="home-profile"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="profile-photo-wrapper">
              <div className="profile-photo-ring" />
              <img
                src="/images/perfil.png"
                alt="John Hoyos, Ingeniero de Sistemas"
                className="profile-photo"
              />
            </div>

            <motion.p
              className="identity-phrase"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Conecto tecnología, creatividad y conocimiento para crear soluciones con propósito.
              <span className="quote-close">”</span>
            </motion.p>
          </motion.div>

          <motion.div
            className="home-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="home-eyebrow">Ingeniero de Sistemas</span>

            <h1>
              Hola, soy{" "}
              <span className="home-name">
                John Hoyos
              </span>
            </h1>

            <p className="home-lead">
              Ingeniero de Sistemas apasionado por la tecnología, la educación,
              la innovación, el tejido social y la creación de soluciones que generan valor.
            </p>

            <div className="home-divider" />

            <div className="home-story">
              <p>
                Soy colombiano, de raíces putumayenses. Nací en Puerto Asís,
                Putumayo, y desde los cuatro años el municipio de Jamundí,
                “Tierra del Cholao”, en el Valle del Cauca, se convirtió en el
                territorio donde crecí, construí mi historia y he desarrollado
                gran parte de mi trayectoria personal y profesional.
              </p>

              <p>
                Desde la primaria surgió en mí un gusto especial por la
                ingeniería, por crear cosas y por ayudar a las personas. En las
                aulas me inspiraba realizando dibujos en perspectiva,
                diagramas y planos arquitectónicos, despertando inicialmente
                mi interés por la Ingeniería Civil.
              </p>

              <p>
                Al terminar el bachillerato, las realidades del país y las
                posibilidades de acceso a la educación superior transformaron
                ese camino. Pasé de proyectarme hacia la Ingeniería Civil a
                descubrir en la Ingeniería de Sistemas una profesión que me
                permitiría unir mi interés por la creación, la tecnología y la
                solución de problemas.
              </p>

              <p>
                Inicié con una formación técnica y, con perseverancia y
                aprendizaje continuo, llegué a convertirme en el ingeniero de
                software que soy hoy. Este recorrido me ha permitido desarrollar
                soluciones que buscan transformar la vida de las personas a
                través de la tecnología.
              </p>

              <p>
                Además, mi trayectoria laboral me ha llevado a encontrar otra
                de mis grandes pasiones: la educación. He tenido la oportunidad
                de compartir conocimientos con cientos de niños, jóvenes y
                adultos, experiencia que hoy me impulsa a combinar la ingeniería
                con la educación y a entender la tecnología no solo como una
                herramienta, sino como un medio para aprender, conectar y
                transformar.
              </p>
            </div>

            <div className="home-actions">
              <a
                href="/cv/John-Hoyos-CV.pdf"
                className="home-button home-button--primary"
                download
              >
                <FiDownload aria-hidden="true" />
                Descargar CV
              </a>

              <a
            
              href="mailto:hoyosb90@gmail.com"
             className="home-button home-button--secondary"
           >
           <FiMail aria-hidden="true" />
             Contáctame

              </a>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#formacion"
          className="home-scroll-indicator"
          aria-label="Ir a la sección Formación"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span>Explorar</span>
          <FiArrowDown aria-hidden="true" />
        </motion.a>
      </section>
    </main>
  );
}