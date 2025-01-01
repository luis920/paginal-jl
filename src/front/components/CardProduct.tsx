import React from "react";

interface Props {
  title: string;
  img: string;
  body: string;
}

const CardProduct: React.FC<Props> = ({ title, img, body }) => {
  return (
    <div className="card-producto">
      <div className="content-producto">
        <div className="back-producto">
          <div className="back-content">
            <img src={img} alt="foto" className="img-serigrafia" />
            <strong>
              <h1>{title}</h1>
            </strong>
          </div>
        </div>
        <div className="front-producto">
          <div className="front-content">
            <p>{body}</p>
            <div className="description-producto">
              <div className="title-producto"></div>
              <p className="card-footer">A partir de 12 piezas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
