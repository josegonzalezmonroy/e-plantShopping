import React, { useState, useEffect } from "react";
import "./ProductList.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const plantsArray = [
    {
      category: "Plantas Purificadoras de Aire",
      plants: [
        {
          name: "Cinta",
          description: "Filtra formaldehído y xileno del aire.",
          cost: "$12",
        },
        {
          name: "Lirio de la Paz",
          description: "Elimina esporas de moho y purifica el aire.",
          cost: "$18",
        },
        {
          name: "Helecho de Boston",
          description: "Añade humedad al aire y elimina toxinas.",
          cost: "$20",
        },
        {
          name: "Planta de Caucho",
          description: "Fácil de cuidar y eficaz para eliminar toxinas.",
          cost: "$17",
        },
      ],
    },
    {
      category: "Plantas Aromáticas y Fragantes",
      plants: [
        {
          name: "Lavanda",
          description: "Aroma relajante, usado en aromaterapia.",
          cost: "$20",
        },
        {
          name: "Jazmín",
          description: "Fragancia dulce, promueve la relajación.",
          cost: "$18",
        },
        {
          name: "Romero",
          description: "Aroma vigorizante, usado también en la cocina.",
          cost: "$15",
        },
        {
          name: "Menta",
          description: "Aroma refrescante, usado en tés y cocina.",
          cost: "$12",
        },
        {
          name: "Melisa",
          description: "Aroma cítrico, alivia el estrés y favorece el sueño.",
          cost: "$14",
        },
        {
          name: "Jacinto",
          description:
            "Jacinto es una hermosa planta con flores conocida por su fragancia.",
          cost: "$22",
        },
      ],
    },
    {
      category: "Plantas Repelentes de Insectos",
      plants: [
        {
          name: "Orégano",
          description:
            "El orégano contiene compuestos que pueden repeler ciertos insectos.",
          cost: "$10",
        },
        {
          name: "Caléndula",
          description:
            "Repelente natural de insectos, también añade color al jardín.",
          cost: "$8",
        },
        {
          name: "Geranios",
          description:
            "Conocidos por repeler insectos mientras aportan un aroma agradable.",
          cost: "$20",
        },
        {
          name: "Albahaca",
          description: "Repele moscas y mosquitos, también usada en la cocina.",
          cost: "$9",
        },
        {
          name: "Lavanda",
          description: "Aroma relajante, usado en aromaterapia.",
          cost: "$20",
        },
        {
          name: "Hierba Gatera",
          description: "Repele mosquitos y atrae a los gatos.",
          cost: "$13",
        },
      ],
    },
    {
      category: "Plantas Medicinales",
      plants: [
        {
          name: "Aloe Vera",
          description: "Gel calmante usado para afecciones de la piel.",
          cost: "$14",
        },
        {
          name: "Equinácea",
          description:
            "Refuerza el sistema inmunológico, ayuda a combatir resfriados.",
          cost: "$16",
        },
        {
          name: "Menta Piperita",
          description: "Alivia problemas digestivos y dolores de cabeza.",
          cost: "$13",
        },
        {
          name: "Melisa",
          description: "Calma los nervios y promueve la relajación.",
          cost: "$14",
        },
        {
          name: "Manzanilla",
          description: "Alivia la ansiedad y favorece el sueño.",
          cost: "$15",
        },
        {
          name: "Caléndula",
          description: "Cura heridas y calma irritaciones de la piel.",
          cost: "$12",
        },
      ],
    },
    {
      category: "Plantas de Bajo Mantenimiento",
      plants: [
        {
          name: "Zamioculca",
          description: "Prospera con poca luz y requiere riego mínimo.",
          cost: "$25",
        },
        {
          name: "Potus",
          description: "Tolera descuidos y puede crecer en varias condiciones.",
          cost: "$10",
        },
        {
          name: "Sansevieria",
          description:
            "Requiere riego poco frecuente y es resistente a la mayoría de plagas.",
          cost: "$15",
        },
        {
          name: "Aspidistra",
          description: "Planta resistente que tolera poca luz y descuido.",
          cost: "$20",
        },
        {
          name: "Suculentas",
          description:
            "Plantas tolerantes a la sequía con formas y colores únicos.",
          cost: "$18",
        },
        {
          name: "Aglaonema",
          description:
            "Requiere cuidados mínimos y añade color a los espacios interiores.",
          cost: "$22",
        },
      ],
    },
  ];

  const styleObj = {
    backgroundColor: "#4CAF50",
    color: "#fff!important",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignIems: "center",
    fontSize: "20px",
  };
  const styleObjUl = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "1100px",
  };
  const styleA = {
    color: "white",
    fontSize: "30px",
    textDecoration: "none",
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true); // Set showCart to true when cart icon is clicked
  };
  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
    setShowCart(false); // Hide the cart when navigating to About Us
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const addToCart = (planta) => {
    dispatch(addItem(planta));
  };

  const inCar = (planta) => {
    return cartItems.items.some((i) => i.name === planta.name);
  };

  const getTotalItems = () =>
    cartItems.items.reduce((total, item) => {
      return (total += item.quantity);
    }, 0);

  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn.pixabay.com/photo/2022/11/08/14/42/monstera-7578722_1280.png"
              alt=""
            />
            <a href="/" onClick={(e) => handleHomeClick(e)}>
              <div style={{ marginLeft: "10px" }}>
                <h3 style={{ color: "white" }}>Vivero Paraíso</h3>
                <i style={{ color: "white" }}>Las mejores plantas</i>
              </div>
            </a>
          </div>
        </div>
        <div style={styleObjUl}>
          <div>
            <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>
              Plantas
            </a>
          </div>
          <div>
            <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
              <h1 className="cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="IconChangeColor"
                  height="68"
                  width="68"
                >
                  <rect width="156" height="156" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path
                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                    fill="none"
                    stroke="#faf9f9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    id="mainIconPathAttribute"
                  ></path>
                </svg>

                {getTotalItems() > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "10px",
                      background: "red",
                      color: "white",
                      borderRadius: "50%",
                      padding: "4px 8px",
                      fontSize: "16px",
                    }}
                  >
                    {getTotalItems()}
                  </span>
                )}
              </h1>
            </a>
          </div>
        </div>
      </div>
      {!showCart ? (
        plantsArray.map((tipo, index) => (
          <div className="product-grid">
            <h1 style={{ marginTop: 40, marginBottom: 20 }}>{tipo.category}</h1>
            <div key={index} className="product-list">
              {plantsArray[index].plants.map((planta, indexPlanta) => (
                <div key={index + indexPlanta} className="product-card">
                  <div className="product-title">{planta.name}</div>
                  <div className="product-image">
                    <img
                      src="https://cdn.pixabay.com/photo/2021/08/13/22/35/plant-6544088_1280.jpg"
                      alt={planta.name}
                    />
                  </div>
                  <div className="product-price">{planta.cost}</div>
                  <div style={{ margin: 10 }}>
                    <i>{planta.description}</i>
                  </div>
                  <button
                    className={`product-button ${
                      inCar(planta) ? "added-to-cart" : ""
                    }`}
                    disabled={inCar(planta)}
                    onClick={() => addToCart(planta)}
                  >
                    {inCar(planta) ? (
                      <p>Agregado al carrito</p>
                    ) : (
                      <p>Agregar al carrito</p>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
