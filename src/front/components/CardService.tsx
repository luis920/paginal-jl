import React from "react";

interface Props {
  title: string;
  body: string;
  img: string;
}

const CardService: React.FC<Props> = ({ title, body, img }) => {
  return (
    <div className="card-servicio">
      <div className="content-servicio">
        <div className="back-servicio">
          <div className="back-content">
            <img src={img} alt="foto" className="img-serigrafia" />
            <strong>
              <h1>{title}</h1>
            </strong>
          </div>
        </div>
        <div className="front-servicio">
          <div className="front-content">
            <p>{body}</p>
            <div className="description-servicio">
              <div className="title-servicio"></div>
              <p className="card-footer">A partir de 12 piezas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardService;
