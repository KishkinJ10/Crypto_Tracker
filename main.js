function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}
let defaultUSD = 1;
let showRow = 10;
let currencySymbol = '$';
toRecall(defaultUSD, showRow, currencySymbol);
let showRow10 = document.getElementById('showRow10');
showRow10.addEventListener('click', function () {

    showRow = 10;
    toRecall(defaultUSD, showRow, currencySymbol);T
})
let showRow30 = document.getElementById('showRow30');
showRow30.addEventListener('click', function () {
    showRow = 30;
    toRecall(defaultUSD, showRow, currencySymbol);
})

let showRow50 = document.getElementById('showRow50');
showRow50.addEventListener('click', function () {
    showRow = 50;
    toRecall(defaultUSD, showRow, currencySymbol);
})
let chngToInr = document.getElementById('chngToInr');
chngToInr.addEventListener('click', function () {
    let convertCurrency = new XMLHttpRequest();
    convertCurrency.open('GET', `http://api.currencylayer.com/live?access_key=10770982a22167d8f44fd8ba68848a9b`, false);
    convertCurrency.onload = function () {
        let changeData = JSON.parse(this.responseText);
        console.lo
        let inrConversion = changeData.quotes.USDINR;
        defaultUSD = inrConversion;
        console.log(defaultUSD);
        currencySymbol = '₹';
    }
    convertCurrency.send();
    toRecall(defaultUSD, showRow, currencySymbol);

})
let chngToEURO = document.getElementById('chngToEURO');
chngToEURO.addEventListener('click', function () {
    let convertCurrency = new XMLHttpRequest();
    convertCurrency.open('GET', `http://api.currencylayer.com/live?access_key=10770982a22167d8f44fd8ba68848a9b`, false);
    convertCurrency.onload = function () {
        let changeData = JSON.parse(this.responseText);
        let inrConversion = changeData.quotes.USDEUR;
        defaultUSD = inrConversion;
        currencySymbol = '€';

        console.log(defaultUSD);

    }
    convertCurrency.send();
    toRecall(defaultUSD, showRow, currencySymbol);
})
let chngToGBP = document.getElementById('chngToGBP');
chngToGBP.addEventListener('click', function () {
    let convertCurrency = new XMLHttpRequest();
    convertCurrency.open('GET', `http://api.currencylayer.com/live?access_key=10770982a22167d8f44fd8ba68848a9b`, false);
    convertCurrency.onload = function () {
        let changeData = JSON.parse(this.responseText);
        let inrConversion = changeData.quotes.USDGBP;
        defaultUSD = inrConversion;
        currencySymbol = '£';

        console.log(defaultUSD);

    }
    convertCurrency.send();
    toRecall(defaultUSD, showRow, currencySymbol);
})
let chngToJPY = document.getElementById('chngToJPY');
chngToJPY.addEventListener('click', function () {
    let convertCurrency = new XMLHttpRequest();
    convertCurrency.open('GET', `http://api.currencylayer.com/live?access_key=10770982a22167d8f44fd8ba68848a9b`, false);
    convertCurrency.onload = function () {
        let changeData = JSON.parse(this.responseText);
        let inrConversion = changeData.quotes.USDJPY;
        defaultUSD = inrConversion;
        currencySymbol = '¥';

        console.log(defaultUSD);

    }
    convertCurrency.send();
    toRecall(defaultUSD, showRow, currencySymbol);

})
let chngToKWD = document.getElementById('chngToKWD');
chngToKWD.addEventListener('click', function () {
    let convertCurrency = new XMLHttpRequest();
    convertCurrency.open('GET', `http://api.currencylayer.com/live?access_key=10770982a22167d8f44fd8ba68848a9b`, false);
    convertCurrency.onload = function () {
        let changeData = JSON.parse(this.responseText);
        let inrConversion = changeData.quotes.USDKWD;
        defaultUSD = inrConversion;
        currencySymbol = 'KD';

        console.log(defaultUSD);

    }
    convertCurrency.send();
    toRecall(defaultUSD, showRow, currencySymbol);

})
function toRecall(defaultUSD, showRow, currencySymbol) {
    let marketTrendTableBody = document.getElementById('marketTrendTableBody');
    const xhrMarketTrend = new XMLHttpRequest();
    xhrMarketTrend.open('GET', `https://api.coinpaprika.com/v1/coins`, false);
    xhrMarketTrend.onload = function () {
        marketResponseText = JSON.parse(this.responseText);
        // console.log(marketResponseText);

        let html = ``;
        for (let i = 0; i <= showRow; i++) {
            let idOfCoin = marketResponseText[i].id;
            // console.log(nameOfCoin);x
            // console.log(idOfCoin);
            // console.log(symbolOfCoin);
            let allInformationTable = new XMLHttpRequest();
            allInformationTable.open('GET', `https://api.coinpaprika.com/v1/ticker/${idOfCoin}`, false);
            allInformationTable.onload = function () {
                allInformationTableText = JSON.parse(this.responseText);
                // console.log(allInformationTableText);


                let nameOfCoin = allInformationTableText.name;
                let symbolOfCoin = allInformationTableText.symbol;
                let priceOfCoin = allInformationTableText.price_usd * defaultUSD;
                let tfhourOfCoin = allInformationTableText.percent_change_24h;
                let dfhourOfCoin = allInformationTableText.percent_change_7d;
                let marketCapOfCoin = allInformationTableText.market_cap_usd * defaultUSD;
                let volume24OfCoin = allInformationTableText.volume_24h_usd * defaultUSD;
                let ciculSuppOfCoin = allInformationTableText.circulating_supply;



                html += `
                
                <tr>
                        <th scope="row">${i + 1}</th>
                        <th scope="row"> <a href="about.html" id='${idOfCoin}'
                        onclick="openNewPage(this.id)"><img src="PNG/${symbolOfCoin}.png" style="width:40px; margin-right:15px;">${nameOfCoin}</a></th>
                        <th scope="row">${currencySymbol} ${separator(priceOfCoin)}</th>
                        <th scope="row" id='tfhourOfCoin${i}'>${separator(tfhourOfCoin)}</th>
                        <th scope="row" id='dfhourOfCoin${i}'>${separator(dfhourOfCoin)}</th>
                        <th scope="row">${currencySymbol} ${separator(marketCapOfCoin)}</th>
                        <th scope="row">${currencySymbol} ${separator(volume24OfCoin)}</th>
                        <th scope="row">${separator(ciculSuppOfCoin)} ${symbolOfCoin}</th>

                        </tr>
                        
                        `;



            }
            marketTrendTableBody.innerHTML = html;


            allInformationTable.send();
        }
    }

    xhrMarketTrend.send();
    for (let i = 0; i < showRow; i++) {
        let tfhourOfCoin1 = document.getElementById(`tfhourOfCoin${i}`);
        let dfhourOfCoin = document.getElementById(`dfhourOfCoin${i}`);

        let tfhourOfCoin1Text = tfhourOfCoin1.innerText;
        let dfhourOfCoinText = dfhourOfCoin.innerText;
        if (tfhourOfCoin1Text[0] == '-') {
            tfhourOfCoin1.style.color = 'red';
        }
        else {
            tfhourOfCoin1.style.color = 'green';

        }
        if (dfhourOfCoinText[0] == '-') {
            dfhourOfCoin.style.color = 'red';
        }
        else {
            dfhourOfCoin.style.color = 'green';

        }
    }

}
function openNewPage(idOfCoin){
   localStorage.setItem('idOfCoin',idOfCoin);
}

// let NewsAPI = document.getElementById('NewsBlock');
// const showNews = new XMLHttpRequest();
// showNews.open('GET', `https://newsapi.org/v2/everything?q=Cryptocurrency&from=2022-01-11&sortBy=popularity&apiKey=61c0b30f6c6440289b7b2ea4cda0eb7e`, false);
// showNews.onload = function () {
//       marketResponseText = JSON.parse(this.responseText);
//       let html = ``;

//       let newsArray = marketResponseText.articles;
      

//       html += `
//       <div class="carousel-item active">
//                         <img src="${newsArray[0].urlToImage}" class="d-block w-100" alt="..." style="height : 10%; width:50% ">
//                         <div class="carousel-caption d-none d-md-block">
//                             <h5>${newsArray[0].title}</h5>
//                             <p>${newsArray[0].description}</p>
//                         </div>
//                     </div>
//                     <div class="carousel-item">
//                         <img src="${newsArray[1].urlToImage}" class="d-block w-100" alt="..." style="height : 10%; width:50% ">
//                         <div class="carousel-caption d-none d-md-block">
//                             <h5>${newsArray[1].title}</h5>
//                             <p>${newsArray[1].description}</p>
//                         </div>
//                     </div>
//                     <div class="carousel-item">
//                         <img src="${newsArray[2].urlToImage}" class="d-block w-100" alt="..." style="height : 10%; width:50% ">
//                         <div class="carousel-caption d-none d-md-block">
//                             <h5>>${newsArray[2].title}</h5>
//                             <p>${newsArray[2].description}</p>
//                         </div>
//                     </div>
//    `;
    

//       NewsAPI.innerHTML = html;
// }

// showNews.send();
// let part1left = document.getElementById('part1left');
// let xhrPart1left = new XMLHttpRequest();
// xhrPart1left.open('GET', `https://newsapi.org/v2/everything?q=Cryptocurrency&from=2022-01-11&sortBy=popularity&apiKey=61c0b30f6c6440289b7b2ea4cda0eb7e`, true);
// xhrPart1left.onload = function () {
//     if (this.status != 200) {
//         return;
//     }
//     let newsObj = JSON.parse(this.responseText);
//     let articles = newsObj["articles"];
//     let newsHtml = ``;
//     for (let i = 0; i < 1; i++) {
//         // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
//         //     return;
//         // }
//         newsHtml +=
//             `
                                
//                 <div class="carousel-item active" data-bs-interval="10000">

//                 <img class="center-block d-block w-100 carouselPartChange" style="background-image:
//                 linear-gradient(0deg, rgba(0,0,0,0.8858893899356618) 10%, rgba(0,0,0,0.6001751042213761) 43%, rgba(0,0,0,0) 77%),
//                 url('${articles[i]["urlToImage"]}'); background-size: cover;"
//                 alt="...">
//                 <div class="upImage-top-left"><span
//                         style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Politics</span>
//                         </div>
//                         <div class="centered"><span>${articles[i]["title"]}</span></div>
                        
//                 <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

//                 <div class="carousel-caption d-none d-md-block">
//                     <h3><span style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["title"]}</span>
//                     </h3>
//                     <p><span style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["description"]}</span></p>
//                 </div></a>
//             </div>

//                             `;
//     }
//     for (let i = 1; i < 2; i++) {
//         // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
//         //     return;
//         // }
//         newsHtml +=
//             `
                                
//                 <div class="carousel-item" data-bs-interval="2000">
//                 <img class="center-block d-block w-100 carouselPartChange"
//                 style="background-image:
//                 linear-gradient(0deg, rgba(0,0,0,0.8858893899356618) 10%, rgba(0,0,0,0.6001751042213761) 43%, rgba(0,0,0,0) 77%),
//                 url('${articles[i]["urlToImage"]}'); background-size: cover;"
//                     alt="...">
//                 <div class="upImage-top-left"><span
//                         style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Entertainment</span>
//                 </div>
//                 <div class="centered"><span>${articles[i]["title"]}</span></div>
//                 <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

//                 <div class="carousel-caption d-none d-md-block">
//                     <h3><span style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["title"]}</span>
//                     </h3>
//                     <p><span
//                             style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["description"]}</span></p>
//                 </div>
//                 </a>

//             </div>

//                             `;
//     }
//     for (let i = 2; i < 3; i++) {
//         // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
//         //     return;
//         // }
//         newsHtml +=
//             `
                                
//                 <div class="carousel-item">
//                                             <img class="center-block d-block w-100 carouselPartChange"
//                                             style="background-image:
//                                             linear-gradient(0deg, rgba(0,0,0,0.8858893899356618) 10%, rgba(0,0,0,0.6001751042213761) 43%, rgba(0,0,0,0) 77%),
//                                             url('${articles[i]["urlToImage"]}'); background-size: cover;"
//                                                 alt="...">
//                                             <div class="upImage-top-left"><span
//                                                     style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Latest</span>
//                                             </div>
//                                             <div class="centered"><span>${articles[i]["title"]}</span></div>
//                 <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

//                                             <div class="carousel-caption d-none d-md-block">
//                     <h3><span style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["title"]}</span>
//                     </h3>
//                     <p><span
//                             style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["description"]}</span></p>
//                 </div>
//                 </a>
//                                         </div> 
//                             `;
//     }
//     for (let i = 3; i < 4; i++) {
//         // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
//         //     return;
//         // }
//         newsHtml +=
//             `
                                
//                 <div class="carousel-item" data-bs-interval="2000">
//                 <img class="center-block d-block w-100 carouselPartChange"
//                 style="background-image:
//                 linear-gradient(0deg, rgba(0,0,0,0.8858893899356618) 10%, rgba(0,0,0,0.6001751042213761) 43%, rgba(0,0,0,0) 77%),
//                 url('${articles[i]["urlToImage"]}'); background-size: cover;"
//                     alt="...">
//                 // <div class="upImage-top-left"><span
//                 //         style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Entertainment</span>
//                 // </div>
//                 <div class="centered"><span>${articles[i]["title"]}</span></div>
//                 <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

//                 <div class="carousel-caption d-none d-md-block">
//                     <h3><span style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["title"]}</span>
//                     </h3>
//                     <p><span
//                             style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["description"]}</span></p>
//                 </div>
//                 </a>

//             </div>

//                             `;
//     }
//     for (let i = 4; i < 5; i++) {
//         // if (articles[i]["urlToImage"] == null || articles[i]["title"] == null || articles[i]["description"] == null || articles[i]["urlToImage"] == undefined || articles[i]["title"] == undefined || articles[i]["description"] == undefined) {
//         //     return;
//         // }
//         newsHtml +=
//             `
                                
//                 <div class="carousel-item" data-bs-interval="2000">
//                 <img class="center-block d-block w-100 carouselPartChange"
//                 style="background-image:
//                 linear-gradient(0deg, rgba(0,0,0,0.8858893899356618) 10%, rgba(0,0,0,0.6001751042213761) 43%, rgba(0,0,0,0) 77%),
//                 url('${articles[i]["urlToImage"]}'); background-size: cover;"
//                     alt="...">
//                 <div class="upImage-top-left"><span
//                         style="background-color: rgb(179, 0, 0); padding: 1px 10px 1px 10px;">Entertainment</span>
//                 </div>
//                 <div class="centered"><span>${articles[i]["title"]}</span></div>
//                 <a href='${articles[i].url}' style="text-decoration:none; color:black;">        

//                 <div class="carousel-caption d-none d-md-block">
//                     <h3><span style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["title"]}</span>
//                     </h3>
//                     <p><span
//                             style="color:white; padding: 1px 10px 1px 10px;">${articles[i]["description"]}</span></p>
//                 </div>
// </a>
//             </div>

//                             `;
//     }
//     part1left.innerHTML = newsHtml;
// }
// xhrPart1left.send();