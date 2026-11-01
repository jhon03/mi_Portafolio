import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiBookOpen,
  FiCalendar,
  FiCamera,
  FiCheckCircle,
  FiDownload,
  FiExternalLink,
  FiFileText,
  FiX,
} from "react-icons/fi";
import "../styles/Formacion.css";

const formaciones = [
  {
    id: "primaria",
    type: "Educación básica",
    period: "Etapa escolar",
    title: "Educación primaria",
    institution: "Escuela Manuela Beltrán · Jamundí, Valle del Cauca",
    description:
      "En esta primera etapa de formación comenzó a consolidarse mi curiosidad por aprender, crear y comprender cómo funcionan las cosas.",
    image: "/images/Formacion/primaria.png",
  },
  {
    id: "bachillerato",
    type: "Educación básica",
    period: "Etapa escolar",
    title: "Bachillerato",
    institution:
      "Colegio Central de Bachillerato Integrado y Colegio Luis Carlos Valencia · Jamundí",
    description:
      "Cursé hasta grado noveno en el Colegio Central de Bachillerato Integrado y finalicé los grados décimo y undécimo en el Colegio Luis Carlos Valencia, en la zona rural de Jamundí, obteniendo el título de Bachiller Técnico Agropecuario.",
    image: "/images/formacion/bachillerato.jpg",
  },
  {
    id: "tecnico",
    type: "Formación técnica",
    period: "Primer acercamiento a la tecnología",
    title: "Técnico en Sistemas",
    institution: "Instituto Técnico Educando a Colombia",
    description:
      "Esta formación representó uno de mis primeros pasos hacia el mundo de la tecnología y fue fundamental para descubrir en los sistemas una herramienta para crear, solucionar problemas y aportar a otras personas.",
    image: "/images/formacion/tecnico-sistemas.jpg",
  },
  {
    id: "ingenieria",
    type: "Formación profesional",
    period: "Ingeniería de Sistemas",
    title: "Ingeniero de Sistemas",
    institution: "Universidad de San Buenaventura Cali · Egresado",
    description:
      "Inicié mis estudios profesionales en la Fundación Universitaria San Martín y posteriormente tuve la oportunidad de continuar mi proceso académico en la Universidad de San Buenaventura Cali, donde realicé la homologación y obtuve mi título como Ingeniero de Sistemas.",
    image: "/images/formacion/ingenieria-sistemas.jpg",
    featured: true,
  },
];

const diplomados = [
  {
    id: "mediacion",
    title: "Educación con mediación tecnológica",
    institution: "Universidad de San Buenaventura Bogotá",
    image: "/images/formacion/diplomado-mediacion-tecnologica.jpg",
    document: "/documents/formacion/diplomado-mediacion-tecnologica.pdf",
  },
  {
    id: "proyectos",
    title: "Formación Profesional de Proyectos",
    institution: "Universidad de San Buenaventura Cali",
    image: "/images/formacion/diplomado-proyectos.jpg",
    document: "/documents/formacion/diplomado-proyectos.pdf",
  },
  {
    id: "pensamiento-abc",
    title: "Pensamiento ABC",
    institution: "Universidad de San Buenaventura Medellín",
    image: "/images/formacion/diplomado-pensamiento-abc.jpg",
    document: "/documents/formacion/diplomado-pensamiento-abc.pdf",
  },
];

function Formacion() {
  const [selectedDocument, setSelectedDocument] = useState(null);

  return (
    <main className="formacion-page">
      <section className="formacion-hero">
        <div className="formacion-background" aria-hidden="true">
          <span className="formacion-orb formacion-orb--one" />
          <span className="formacion-orb formacion-orb--two" />
          <div className="formacion-grid" />
        </div>

        <div className="container formacion-container">
          <motion.div
            className="formacion-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <span className="formacion-eyebrow">
              <FiBookOpen aria-hidden="true" />
              Formación
            </span>

            <h1>
              Un camino de <span>aprendizaje continuo.</span>
            </h1>

            <p className="formacion-intro">
              Mi proceso de formación ha sido construido a través de
              diferentes etapas, experiencias y oportunidades que han
              contribuido a formar no solo al profesional que soy hoy, sino
              también mi manera de entender el aprendizaje, la tecnología y el
              servicio a los demás.
            </p>
          </motion.div>

          <motion.div
            className="formacion-highlight"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="formacion-highlight-icon">
              <FiCheckCircle aria-hidden="true" />
            </div>
            <div>
              <strong>De estudiante a formador</strong>
              <p>
                Mi formación también me llevó a compartir conocimientos:
                años después de realizar mi Técnico en Sistemas, tuve la
                oportunidad de formar nuevos técnicos en sistemas en Jamundí.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="formacion-timeline-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">Mi recorrido</span>
            <h2>De las primeras aulas a la ingeniería.</h2>
            <p>
              Cada etapa aportó una experiencia distinta y fue construyendo el
              camino que hoy conecta tecnología, educación y propósito.
            </p>
          </div>

          <div className="formacion-timeline">
            {formaciones.map((item, index) => (
              <motion.article
                className={`timeline-item ${
                  item.featured ? "timeline-item--featured" : ""
                }`}
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div className="timeline-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="timeline-card">
                  <div className="timeline-content">
                    <span className="timeline-type">{item.type}</span>
                    <span className="timeline-period">
                      <FiCalendar aria-hidden="true" />
                      {item.period}
                    </span>

                    <h3>{item.title}</h3>
                    <h4>{item.institution}</h4>
                    <p>{item.description}</p>

                    {item.id === "tecnico" && (
                      <div className="experience-note">
                        <FiArrowRight aria-hidden="true" />
                        <span>
                          Años después regresé a este ámbito desde otro rol:
                          como formador de nuevos técnicos en sistemas.
                        </span>
                      </div>
                    )}

                    {item.id === "ingenieria" && (
                      <div className="experience-note">
                        <FiArrowRight aria-hidden="true" />
                        <span>
                          Esta etapa consolidó mi perfil profesional y abrió
                          el camino hacia la ingeniería de software, la
                          educación y la gestión de proyectos.
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="timeline-media">
                    <div className="media-frame">
                      <img
                        src={item.image}
                        alt={`Vivencia de ${item.title}`}
                        loading="lazy"
                      />
                      <div className="media-label">
                        <FiCamera aria-hidden="true" />
                        Vivencia
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="diplomas-section">
        <div className="container">
          <div className="section-heading section-heading--center">
            <span className="section-kicker">Formación complementaria</span>
            <h2>Seguir aprendiendo también es parte del camino.</h2>
            <p>
              Estos diplomados complementan mi formación profesional y
              fortalecen la conexión entre tecnología, educación y gestión.
            </p>
          </div>

          <div className="diplomas-grid">
            {diplomados.map((item, index) => (
              <motion.article
                className="diploma-card"
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <div className="diploma-image">
                  <img
                    src={item.image}
                    alt={`Experiencia de ${item.title}`}
                    loading="lazy"
                  />
                  <span>
                    <FiCamera aria-hidden="true" />
                    Experiencia
                  </span>
                </div>

                <div className="diploma-body">
                  <span className="diploma-label">Diplomado</span>
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>

                  <div className="diploma-actions">
                    <button
                      type="button"
                      className="formacion-button formacion-button--primary"
                      onClick={() => setSelectedDocument(item)}
                    >
                      <FiFileText aria-hidden="true" />
                      Ver diploma
                    </button>

                    <a
                      className="formacion-button formacion-button--secondary"
                      href={item.document}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiDownload aria-hidden="true" />
                      Abrir PDF
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="ponencia-section">
        <div className="container ponencia-container">
          <motion.div
            className="ponencia-media"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <div className="ponencia-image">
              <img
                src="/images/formacion/ponencia-ingenieria.jpg"
                alt="Participación como ponente en un encuentro de ingeniería"
                loading="lazy"
              />
              <div className="ponencia-badge">
                <FiCamera aria-hidden="true" />
                Experiencia académica
              </div>
            </div>
          </motion.div>

          <motion.div
            className="ponencia-content"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <span className="section-kicker">Compartir conocimiento</span>
            <h2>La formación también se construye compartiendo.</h2>
            <p>
              He tenido la oportunidad de participar como ponente en encuentros
              de Ingeniería de la Universidad Autónoma, presentando y
              resaltando la labor que desarrolla la Universidad de San
              Buenaventura desde el Centro de Desarrollo Comunitario San
              Francisco de Asís, en el marco de su trabajo de Proyección
              Social.
            </p>
            <p>
              Esta experiencia representa para mí una conexión entre
              <strong> ingeniería, educación, tecnología y tejido social</strong>,
              demostrando cómo el conocimiento puede trascender las aulas y
              convertirse en una herramienta para generar impacto en las
              comunidades.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedDocument && (
          <motion.div
            className="document-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDocument(null)}
          >
            <motion.div
              className="document-modal__content"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="document-modal__header">
                <div>
                  <span>Certificación</span>
                  <h3>{selectedDocument.title}</h3>
                </div>

                <button
                  type="button"
                  className="document-modal__close"
                  onClick={() => setSelectedDocument(null)}
                  aria-label="Cerrar documento"
                >
                  <FiX aria-hidden="true" />
                </button>
              </div>

              <iframe
                src={selectedDocument.document}
                title={`Diploma ${selectedDocument.title}`}
                className="document-modal__viewer"
              />

              <div className="document-modal__footer">
                <a
                  href={selectedDocument.document}
                  target="_blank"
                  rel="noreferrer"
                  className="formacion-button formacion-button--primary"
                >
                  <FiExternalLink aria-hidden="true" />
                  Abrir documento
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Formacion;