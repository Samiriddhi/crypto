let prom = fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");

prom.then((data1) => {
    return data1.json()
}).then((data2) =>{
    console.log(data2);
})

