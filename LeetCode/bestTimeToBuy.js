// @param {number[]} prices
// @return {number}

const maxProfit = function(prices) {
  let profit = 0, buy = 0, sell = 0;
  const buySellDays = [...prices];
  for (i=0; i < prices.length - 1; i += 1){
    prices[i] < prices[i+1] ? buySellDays[i] = 1 : buySellDays[i] = -1
  }
  prices[prices.length - 1] < prices[prices.length - 2] ? buySellDays[i] = 1 : buySellDays[i] = -1
  if (buySellDays[0] === 1) buy = prices[0];
  for (i=1; i < prices.length; i += 1){
    if (buySellDays[i] !== buySellDays[i-1]){
      if (buySellDays[i] === -1) {
        sell = prices[i];
        profit += sell - buy;
      } else {
        buy = prices[i];
      }
    }
  }
  return profit;
};
