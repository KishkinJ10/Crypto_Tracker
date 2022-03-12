function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

let idOfCoin = localStorage.getItem('idOfCoin');
console.log(idOfCoin);
let html = ``
let section1headingleft = document.getElementById('section1headingleft');
let section1headingleftAPI = new XMLHttpRequest();
section1headingleftAPI.open('GET', `https://api.coinpaprika.com/v1/ticker/${idOfCoin}`, true);
section1headingleftAPI.onload = function () {
    let section1headingleftAPIText = JSON.parse(this.responseText);
    let nameOfCoin = section1headingleftAPIText.name;
    let symbolOfCoin = section1headingleftAPIText.symbol;
    let tfhChng = section1headingleftAPIText.percent_change_24h;

    html += `
    <h2>
                                <img src="PNG/${symbolOfCoin}.png" style="width: 50px;">

                                <span style="font-size: 40px; font-weight: 700; vertical-align: middle;">${nameOfCoin}
                                </span><span class="badge bg-secondary" style="margin: auto;">${symbolOfCoin}</span>

                            </h2>
    `;
    section1headingleft.innerHTML = html;
    let sectionMarketCap = section1headingleftAPIText.market_cap_usd;
    let sectionVolume24 = section1headingleftAPIText.volume_24h_usd;
    let sectionCirculatingSupply = section1headingleftAPIText.circulating_supply
    let sectionTotalSupply = section1headingleftAPIText.total_supply;
    let sectionMaxSupply = section1headingleftAPIText.total_supply;
    let section24hChng = section1headingleftAPIText.percent_change_24h;
    let sectiondhChng = section1headingleftAPIText.percent_change_7d;
    let section2 = document.getElementById('section2');
    let section2html = `
    <section class="py-5 bg-light" id="scroll-target">
            <div class="container px-5">
                <div class="row">
                    <div class="col" style="border-right:0.5px solid grey;">
                        <h5 style="font-weight:bold; color:grey; text-align:center;">Market cap</h5>
                        <br>
                        <h5 style="font-weight:bold; text-align:center;">$${separator(sectionMarketCap)}</h5>
                    </div>
                    <div class="col" style="border-right:0.5px solid grey;">
                    <h5 style="font-weight:bold; color:grey; text-align:center;">Volume 24h</h4><br>
                    <h5 style="font-weight:bold; text-align:center;">$${separator(sectionVolume24)}</h4>
                    </div>
                    <div class="col" style="border-right:0.5px solid grey;">
                    <h5 style="font-weight:bold; color:grey; text-align:center;">Percentage Change</h4>
                        <br>
                        <h5 style="font-weight:bold; text-align:center;">24h Change : ${separator(section24hChng)}</h4>
                        <h5 style="font-weight:bold; text-align:center;">7d change : ${separator(sectiondhChng)}</h4>
                    </div>
                    <div class="col" >
                    <h5 style="font-weight:bold; color:grey; text-align:center;">Circulating supply</h4>
                    <h5 style="font-weight:bold; text-align:center;">${separator(sectionCirculatingSupply)} ${symbolOfCoin	}</h4>
                        <h5 style="font-weight:bold; text-align:center;">Max supply : ${separator(sectionMaxSupply)}</h4>
                        <h5 style="font-weight:bold; text-align:center;">Total supply : ${separator(sectionTotalSupply)}</h4>
                    </div>
                </div>
            </div>
        </section>`;
    section2.innerHTML = section2html;
    
    let section3Chart = document.getElementById('section3Chart');
    let section3html = `
   
    <coingecko-coin-price-chart-widget coin-id="${nameOfCoin}" currency="usd" height="600" locale="en" style="border:0px;"> 
    </coingecko-coin-price-chart-widget>
`;
    section3Chart.innerHTML = section3html;
}
section1headingleftAPI.send();

let section2propertiesLeftAPI = new XMLHttpRequest();
section2propertiesLeftAPI.open('GET', `https://api.coinpaprika.com/v1/coins/${idOfCoin}`, true);
section2propertiesLeftAPI.onload = function () {
    let section2propertiesLeftText = JSON.parse(this.responseText);
    // console.log(section2propertiesLeftText);
    let section2propertiesLeft = document.getElementById('section2propertiesLeft');


    let websiteOfCoin = section2propertiesLeftText.links.website[0];
    let redditOfCoin = section2propertiesLeftText.links.reddit[0];
    let sourceCodeOfCoin = section2propertiesLeftText.links.source_code[0];
    let whitePaperOfCoin = section2propertiesLeftText.whitepaper.link;
    let explorerOfCoin = section2propertiesLeftText.links.explorer;
    let html = `
    <a href="${websiteOfCoin}"><button type="button" class="btn btn-dark" style="margin-top: 5px;"><i
                                    class="fas fa-link"></i>
                                coin.org <i class="fas fa-external-link-alt"
                                    style="color: rgb(174, 174, 174); padding-left:3px; "></i></button></a>
                                    <a href="">
                        <button type="button" class="btn btn-dark" style="padding: 0; border: 0; margin-top: 5px;">
                            <div class="dropdown" style="padding: 0; margin: 0; ">
                                <a class="btn btn-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-search"></i> Explorer
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </button>
                        </a>
                        <a href="${redditOfCoin}">
                        <button type="button" class="btn btn-dark" style="margin-top: 5px;"><i class="fas fa-link"></i>
                            reddit <i class="fas fa-external-link-alt"
                                style="color: rgb(174, 174, 174); padding-left:3px; "></i></button>
                                </a>
                                <a href="${sourceCodeOfCoin}">
                        <button type="button" class="btn btn-dark" style="margin-top: 5px;"><i class="fas fa-code"></i>
                            source code <i class="fas fa-external-link-alt"
                                style="color: rgb(174, 174, 174); padding-left:3px; "></i></button>
                                </a>
                                <a href="${whitePaperOfCoin}">
                        <button type="button" class="btn btn-dark" style="margin-top: 5px;"><i
                                class="far fa-file-alt"></i> Whitepaper <i class="fas fa-external-link-alt"
                                style="color: rgb(174, 174, 174); padding-left:3px; "></i></button>
                                </a>
                    `;
    section2propertiesLeft.innerHTML = html;


   

}
section2propertiesLeftAPI.send();

let section1rightAPI = new XMLHttpRequest();
let section1right = document.getElementById('section1right');
section1rightAPI.open('GET', `https://api.coinpaprika.com/v1/ticker/${idOfCoin}`, false);
section1rightAPI.onload = function () {
    let allInformationTableText = JSON.parse(this.responseText);

    let symbolOfCoin = allInformationTableText.symbol;
    let nameOfCoin = allInformationTableText.name;
    let priceOfCoin = allInformationTableText.price_usd;
    let tfhourOfCoin = allInformationTableText.percent_change_24h;
    

    let html = `<h5 style="text-align: right; font-size: 15px;">${nameOfCoin} Price (${symbolOfCoin})</h5>
    <div class="containerdiv">
    <h2>

    <span style="font-size: 40px; font-weight: 700; vertical-align: middle;">$${separator(priceOfCoin)}
    </span><span class="badge" style="margin: auto; background-color:black;" id="perChangeColor">${tfhourOfCoin}%</span>
    </h2>
    <div id="section1LowCost"></div>
    `;

    section1right.innerHTML = html;
    let perChangeColor = document.getElementById('perChangeColor');
    perChangeColorText = perChangeColor.innerText;
    if (perChangeColorText[0] == '-') {
        perChangeColor.style.background = 'red';
    }
    else {
        perChangeColor.style.background = 'green';
    }
}
section1rightAPI.send();
let section1rightOHLCAPI = new XMLHttpRequest();
section1rightOHLCAPI.open('GET',`https://api.coinpaprika.com/v1/coins/${idOfCoin}/ohlcv/latest/`,false);
section1rightOHLCAPI.onload = function(){
    let section1LowCost = document.getElementById('section1LowCost');
    let section1rightOHLText = JSON.parse(this.responseText);
    let low = section1rightOHLText[0].low;
    let high = section1rightOHLText[0].high;
    console.log(high);
    let html = `
    <div style="float:right;">
        <div style="font-size:20px; font-weight:600;">low : ${separator(low)}</div>
        <div style="font-size:20px; font-weight:600;">high :${separator(high)} </div>
        </div>
    `;
    section1LowCost.innerHTML = html;
}
section1rightOHLCAPI.send();
