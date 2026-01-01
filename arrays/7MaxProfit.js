const MaxProfit = (prices)=>{
  let MaxProfit = 0

  let MinPrice = prices[0]
  let MaxPrice = 0  

  for(let i=1;i<prices.length;i++){
    if(prices[i]<MinPrice){
      MinPrice = prices[i]
    }
  }
  for(let i =0;i<prices.length;i++){
    if(prices[i]>MaxPrice){
      MaxPrice = prices[i]
    }
  }

  MaxProfit = MaxPrice - MinPrice


  return MaxProfit
}

console.log(MaxProfit([7,1,5,3,6,4]))