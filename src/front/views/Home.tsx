import Navbar from "../components/Navbar.tsx";
import About from "../components/About.tsx";
import CardService from "../components/CardService.tsx";
import CardProduct from "../components/CardProduct.tsx";
export const Home = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
          <About />
          <h1 className="productos-servicios">Nuestros servicios</h1>
          <div>
            <CardService
              title="Serigrafia"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypjs2jLiaQqoVEpxwNQlMJSPCPzC2NwQl6A&s"
              body="'Transforma tu estilo con nuestras playeras impresas en serigrafía. Ofrecemos diseños personalizados y de alta calidad, perfectos para tu marca, evento o regalo. Con colores vibrantes y durabilidad, nuestras playeras son ideales para destacar tu mensaje o creatividad. ¡Haz tu pedido hoy y luce único!' "
            />
            <CardService
              title="Bordado"
              img="https://st5.depositphotos.com/66485572/75754/v/450/depositphotos_757547820-stock-illustration-sewing-needle-icon-vector-illustration.jpg"
              body="'Descubre nuestros productos bordados de alta calidad, ideales para personalizar tu estilo o marca. Ofrecemos diseños detallados y duraderos en ropa, gorras y accesorios. Perfectos para eventos, empresas o regalos personalizados. ¡Haz tu pedido hoy y luce lo que realmente te representa!' "
            />
          </div>
          <h1 className="productos-servicios">Productos que manejamos</h1>
          <CardProduct
            title="Playeras"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypjs2jLiaQqoVEpxwNQlMJSPCPzC2NwQl6A&s"
            body="kdcnvfsjvfnv ljb gdciknfvfjlvodncvljvbfdkcdnvjfvbfjvdncdc"
          />
          <CardProduct
            title="Sudaderas"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypjs2jLiaQqoVEpxwNQlMJSPCPzC2NwQl6A&s"
            body="kdcnvfsjvfnv ljb gdciknfvfjlvodncvljvbfdkcdnvjfvbfjvdncdc"
          />
          <CardProduct
            title="Camisas"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypjs2jLiaQqoVEpxwNQlMJSPCPzC2NwQl6A&s"
            body="kdcnvfsjvfnv ljb gdciknfvfjlvodncvljvbfdkcdnvjfvbfjvdncdc"
          />
          <CardProduct
            title="Gorras"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypjs2jLiaQqoVEpxwNQlMJSPCPzC2NwQl6A&s"
            body="kdcnvfsjvfnv ljb gdciknfvfjlvodncvljvbfdkcdnvjfvbfjvdncdc"
          />
        </div>
      </div>
    </>
  );
};
