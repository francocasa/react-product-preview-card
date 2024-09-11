import "../styles/Card.css";

export default function Card() {
  return (
    <>
      <div className="card">
        <div className="image">
        </div>
        <div className="data">
          <h6 className="titulo">P E R F U M E</h6>
          <h2 className="perfume">Gabrielle Essence Eau De Parfum</h2>
          <p className="descripcion">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
          <div className="precio">
            <h1 className="nuevoprecio">$149.99</h1>
            <h3 className="viejoprecio">$169.99</h3>
          </div>
          <button className="btn__add">
            <div className="card__icon"></div>
            <h3>Add to Cart</h3>
          </button>
        </div>
      </div>
    </>
  );
}
