import React from 'react'

const StockDetails = (props) => {
  if (props.Message) return alert(props.Message)

  return (
    <div>
      <span><h5>{ props.Symbol } {props.Name}</h5></span>
      <span>
        <h6>{ props.LastPrice.toFixed(2) } &nbsp; { props.Change.toFixed(2) }</h6>
      </span>
      <span>
        <a onClick={props.onClick} value='buy'>Buy</a> &nbsp;
        <a onClick={props.onClick} value='sell'>Sell</a> &nbsp;
        <a onClick={props.onClick} value='watch'>Watch</a>
      </span>
    </div>
  )
}

export default StockDetails
