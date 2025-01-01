const About = () => {
  return (
    <div className="card">
      <span className="card__title">Sobre nosotros</span>
      <p className="card__content">
        Somos una empresa especializada en la personalización de textiles y
        productos promocionales a través de serigrafía de alta calidad y bordado
        profesional. Nos enfocamos en ofrecer soluciones creativas y duraderas
        para empresas, organizaciones, eventos y clientes particulares.{" "}
      </p>

      <p>
        {" "}
        Contamos con un equipo altamente capacitado para garantizar diseños
        únicos, acabados impecables y productos que destacan por su durabilidad
        y estilo.{" "}
      </p>

      <p>
        Desde camisetas y playeras hasta gorras y sudaderas, transformamos tus
        ideas en piezas exclusivas que reflejan tu marca o identidad personal.
        Nuestro compromiso es brindarte un servicio rápido, confiable y con
        atención al detalle para que cada proyecto sea un éxito."
      </p>
      <a
        href="https://wa.me/528666427650"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="card__button">Contáctanos</button>
      </a>
    </div>
  );
};
export default About;
