

const ItemDetail = ({detail}) => {
    console.log(detail)
  return (
    <div>
      <h2>{detail.producto}</h2>
      <h2>{detail.categoria}</h2>
      <h2>{detail.precioUSD}</h2>
    </div>
  )
}

export default ItemDetail
