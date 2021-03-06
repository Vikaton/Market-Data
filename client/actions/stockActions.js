import axios from 'axios'

const axiosConfig = {
  baseURL: 'http://localhost:8080/'
}

export const isFetching = (bool) => {
  return { type: 'FETCHING_STOCK_DATA', payload: bool }
}

const getStockQuoteSuccess = (payload) => {
  return { type: 'GET_STOCK_QUOTE_DATA', payload }
}

const getStockQuoteFail = (error) => {
  return { type: 'GET_STOCK_QUOTE_DATA', error }
}

export const getStockQuote = (symbol) => {
  const endPoint = `/v1/stock/${symbol}`

  return dispatch => {
    axios.get(endPoint, axiosConfig)
      .then(response => dispatch(getStockQuoteSuccess(response.data)))
      .catch(error => dispatch(getStockQuoteFail(error.data)))
  }
}

const buyStockSuccess = (payload) => {
  return { type: 'BUY_STOCK_SYMBOL', payload }
}

const buyStockFail = (error) => {
  return { type: 'BUY_STOCK_SYMBOL', error }
}

export const buyStock = (symbol) => {
  const endPoint = `/v1/stock/buy/${symbol}`
}

const sellStockSuccess = (payload) => {
  return { type: 'SELL_STOCK_SYMBOL', payload }
}

const sellStockFail = (error) => {
  return { type: 'SELL_STOCK_SYMBOL', error }
}

export const sellStock = (symbol) => {
  const endPoint = `/v1/stock/sell/${symbol}`
}

const watchStockSuccess = (payload) => {
  return { type: 'WATCH_STOCK_SYMBOL', payload }
}

const watchStockFail = (payload) => {
  return { type: 'WATCH_STOCK_SYMBOL', error }
}

export const watchStock = (symbol) => {
  const endPoint = `/v1/stock/watch/${symbol}`
}
