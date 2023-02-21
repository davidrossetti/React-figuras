import "./style.css"
const Item = ({articulo}) => {
  return (
    <div className="item">
    <h2>{articulo.producto}</h2>
    <h2>Precio: {articulo.precioUSD} Usd</h2>
    <img alt={articulo.producto} src={articulo.imagen} width="100px"/>
    </div>
    
  )
}

export default Item
