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
          img: "https://cdn.pixabay.com/photo/2020/03/21/21/29/plant-4955230_1280.jpg",
        },
        {
          name: "Lirio de la Paz",
          description: "Elimina esporas de moho y purifica el aire.",
          cost: "$18",
          img: "https://cdn.pixabay.com/photo/2020/08/27/13/27/flower-5522053_1280.jpg",
        },
        {
          name: "Helecho de Boston",
          description: "Añade humedad al aire y elimina toxinas.",
          cost: "$20",
          img: "https://cdn.pixabay.com/photo/2022/03/03/14/10/nature-7045451_1280.jpg",
        },
        {
          name: "Planta de Caucho",
          description: "Fácil de cuidar y eficaz para eliminar toxinas.",
          cost: "$17",
          img: "https://cdn.pixabay.com/photo/2021/02/03/03/45/three-5976503_640.jpg",
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
          img: "https://cdn.pixabay.com/photo/2021/07/09/06/57/lavender-6398425_640.jpg",
        },
        {
          name: "Jazmín",
          description: "Fragancia dulce, promueve la relajación.",
          cost: "$18",
          img: "https://cdn.pixabay.com/photo/2020/06/06/15/48/scent-of-jasmine-5267072_640.jpg",
        },
        {
          name: "Romero",
          description: "Aroma vigorizante, usado también en la cocina.",
          cost: "$15",
          img: "https://cdn.pixabay.com/photo/2020/05/01/13/24/herbs-5117039_640.jpg",
        },
        {
          name: "Menta",
          description: "Aroma refrescante, usado en tés y cocina.",
          cost: "$12",
          img: "https://cdn.pixabay.com/photo/2017/06/12/19/23/moroccan-mint-2396530_640.jpg",
        },
        {
          name: "Melisa",
          description: "Aroma cítrico, alivia el estrés y favorece el sueño.",
          cost: "$14",
          img: "https://cdn.pixabay.com/photo/2015/11/26/01/32/mellisa-1063171_1280.jpg",
        },
        {
          name: "Jacinto",
          description:
            "Jacinto es una hermosa planta con flores conocida por su fragancia.",
          cost: "$22",
          img: "https://cdn.pixabay.com/photo/2018/04/02/18/11/muscari-3284637_640.jpg",
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
          img: "https://cdn.pixabay.com/photo/2014/04/10/15/37/oregano-321033_640.jpg",
        },
        {
          name: "Caléndula",
          description:
            "Repelente natural de insectos, también añade color al jardín.",
          cost: "$8",
          img: "https://cdn.pixabay.com/photo/2018/06/02/18/51/calendula-3448949_640.jpg",
        },
        {
          name: "Geranios",
          description:
            "Conocidos por repeler insectos mientras aportan un aroma agradable.",
          cost: "$20",
          img: "https://cdn.pixabay.com/photo/2017/09/26/18/07/geraniums-2789597_640.jpg",
        },
        {
          name: "Albahaca",
          description: "Repele moscas y mosquitos, también usada en la cocina.",
          cost: "$9",
          img: "https://cdn.pixabay.com/photo/2014/12/30/11/12/basil-583816_640.jpg",
        },
        {
          name: "Hierba Gatera",
          description: "Repele mosquitos y atrae a los gatos.",
          cost: "$13",
          img: "https://cdn.pixabay.com/photo/2021/11/16/13/46/grape-catnip-6801005_640.jpg",
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
          img: "https://cdn.pixabay.com/photo/2021/08/13/22/35/plant-6544088_1280.jpg",
        },
        {
          name: "Equinácea",
          description:
            "Refuerza el sistema inmunológico, ayuda a combatir resfriados.",
          cost: "$16",
          img: "https://cdn.pixabay.com/photo/2023/07/23/13/04/flower-8145077_640.jpg",
        },
        {
          name: "Menta Piperita",
          description: "Alivia problemas digestivos y dolores de cabeza.",
          cost: "$13",
          img: "https://cdn.pixabay.com/photo/2018/04/28/22/57/spice-3358557_1280.jpg",
        },
        {
          name: "Manzanilla",
          description: "Alivia la ansiedad y favorece el sueño.",
          cost: "$15",
          img: "https://cdn.pixabay.com/photo/2023/07/11/13/03/mayweed-8120555_640.jpg",
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
          img: "https://cdn.pixabay.com/photo/2015/10/08/23/59/fortune-spring-978602_640.jpg",
        },
        {
          name: "Potus",
          description: "Tolera descuidos y puede crecer en varias condiciones.",
          cost: "$10",
          img: "https://cdn.pixabay.com/photo/2017/09/14/17/10/money-plant-2749714_640.jpg",
        },
        {
          name: "Sansevieria",
          description:
            "Requiere riego poco frecuente y es resistente a la mayoría de plagas.",
          cost: "$15",
          img: "https://cdn.pixabay.com/photo/2022/08/14/12/12/sansevieria-7385720_640.jpg",
        },
        {
          name: "Aspidistra",
          description: "Planta resistente que tolera poca luz y descuido.",
          cost: "$20",
          img: "https://cdn.pixabay.com/photo/2013/02/13/14/39/etlingera-wyniosa-81281_640.jpg",
        },
        {
          name: "Suculentas",
          description:
            "Plantas tolerantes a la sequía con formas y colores únicos.",
          cost: "$18",
          img: "https://cdn.pixabay.com/photo/2017/02/07/09/05/succulent-plants-2045388_640.jpg",
        },
        {
          name: "Aglaonema",
          description:
            "Requiere cuidados mínimos y añade color a los espacios interiores.",
          cost: "$22",
          img: "https://cdn.pixabay.com/photo/2022/01/14/17/32/leaves-6937875_640.jpg",
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
              alt="Vivero Paraíso logo"
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
                    <img src={planta.img} alt={planta.name} />
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
