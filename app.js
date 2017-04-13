'use strict';
var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm;', '1pm:', '2pm:', '3pm:', '4pm:',  '5pm:', '6pm:', '7pm:', '8pm:'];

function render(){
  this.counts15Times();
  this.heading = document.createElement('h2');
  this.heading.textContent = this.location;
  this.heading.setAttribute('id', this.id);
  document.body.appendChild(this.heading);

<<<<<<< HEAD
  this.img = document.createElement('img');
  this.img.setAttribute('id', this.id);
  this.img.setAttribute('src', this.imgSrc);
  this.img.setAttribute('alt', this.location);
  document.body.appendChild(this.img);

  this.list = document.createElement('ul');
  this.list.setAttribute('id', this.id);

  for (var i = 0; i < this.avgCookiesADay.length; i++){
    var cookiesanhourLi = document.createElement('li');
    cookiesanhourLi.setAttribute('class', 'avgCookiesADay');
    this.list.appendChild(cookiesanhourLi);
  }
}

var firstAndPike = {
  id: '1stnPike',
  img:null,
  list: null,
  header: null,
  location: '1st and Pike',
  imgSrc:'https://media-cdn.tripadvisor.com/media/photo-s/09/d2/bd/6d/original-starbucks.jpg',
  MinCust: 23,
  MaxCust: 65,
  AvgCookieSale: 6.3,
  avgCookiesADay:[],
  getRandomNums: function(){
    return Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust;
  },
  counts15Times: function(){
    for (var i = 0; i < 15; i++ ){
      var avgCookieHr = this.getRandomNums() * this.AvgCookieSale
      this.avgCookiesADay.push(Math.floor(avgCookieHr))
    }
  },
  render: render
}
firstAndPike.render()
var seaTac = {
  id: 'seatac',
  list: null,
  header: null,
  img:null,
  imgSrc:'http://www.abkj.com/uploads/big/4fed0f25aed0d__0016_seatac-4.jpg',
  location: 'SeaTac Airport',
  MinCust: 3,
  MaxCust:24,
  AvgCookieSale: 1.2,
  avgCookiesADay:[],
  getRandomNums: function(){
    return Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust;
  },
  counts15Times: function(){
    for (var i = 0; i < 15; i++ ){
      var avgCookieHr = this.getRandomNums() * this.AvgCookieSale
      this.avgCookiesADay.push(Math.floor(avgCookieHr))
    }
  },
  render: render
};
seaTac.render()

var seaCent = {
  header: null,
  list:null,
  img:null,
  imgSrc:'https://s-media-cache-ak0.pinimg.com/originals/05/6c/4e/056c4e0fecb999392338729187480823.jpg',
  id: 'seattlec',
  location: 'Seattle Center',
  MinCust: 11,
  MaxCust:38,
  AvgCookieSale: 3.7,
  avgCookiesADay: [],
  getRandomNums: function(){
    return Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust;
},
counts15Times: function(){
  for (var i = 0; i < 15; i++ ){
    var avgCookieHr = this.getRandomNums() * this.AvgCookieSale
    this.avgCookiesADay.push(Math.floor(avgCookieHr))
  }
},
render: render
};
seaCent.render()
=======
CookieStoreList.prototype.getHourlyTotals = function(){
  var totals = [];
  for(var i = 0; i < this.stores.length; i++) {
    var store = this.stores[i];
    for(var t = 0; t < hours.length - 2; t++) {
      if(totals[t]) {
        totals[t] = totals[t] + store.cookiesAnHour[t];
      } else {
        totals[t] = store.cookiesAnHour[t];
      }
    }

    if(totals[hours.length - 2]) {
      totals[hours.length - 2] = totals[hours.length - 2] + store.totalCookies;
    } else {
      totals[hours.length - 2] = store.totalCookies;
    }
  }

  var table = document.getElementById('table');
  var tableRow = document.createElement('tr');
  var tableFooter = document.createElement('td');
  tableFooter.textContent = 'Total';
  tableRow.appendChild(tableFooter);
  for (var i = 0; i < hours.length; i++){
    var getRandomNums = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    var totalCookies = Math.floor(getRandomNums * this.avgCookieSale);
    tableFooter = document.createElement('td');
    tableFooter.textContent = totals[i];
    tableRow.appendChild(tableFooter);
  }

  table.appendChild(tableRow);

};

function makeTable(){
  var main = document.getElementById('main');
  var table = document.createElement('table');
  table.setAttribute('id', 'table');
  main.appendChild(table);
}
makeTable();
var firstNPike = new CookieStore ('First and Pike', 23, 65, 6.3);
var seaTac = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var seaCent = new CookieStore('Seattle Center', 11, 38, 3.7);
var capHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alKi = new CookieStore('Alki', 2, 16, 4.6);

CookieStore.prototype.getTable = function() {
  this.getCookiesAnHour();
  var table = document.getElementById('table');
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('td');
  tableData.textContent = this.name;
  tableRow.appendChild(tableData);
  for (var i = 0; i < hours.length - 2;i++ ){
    tableData = document.createElement('td')
    tableData.textContent = this.cookiesAnHour[i];
    tableRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = this.totalCookies;
  tableRow.appendChild(tableData);
  table.appendChild(tableRow);
};
CookieStore.prototype.getTableHead = function() {
  var table = document.getElementById('table');
  var tableRow = document.createElement('tr');
  var tableHead = document.createElement('th');
  table.appendChild(tableHead);
  for (var i = 0; i < hours.length; i++){
    tableHead = document.createElement('th');
    tableHead.textContent = hours[i];
    tableRow.appendChild(tableHead);
  }
  table.appendChild(tableRow);
};
CookieStore.prototype.getCookiesAnHour = function(){
  for (var i = 0; i < hours.length - 2;i++){
    var getRandomNums = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    var totalCookies = Math.floor(getRandomNums * this.avgCookieSale);
    this.cookiesAnHour.push(totalCookies);
    this.totalCookies = this.totalCookies + totalCookies;
  }
};
CookieStore.prototype.getTableFooter = function() {
  var table = document.getElementById('table');
  var tableRow = document.createElement('tr');
  var tableFooter = document.createElement('tf');
  tableRow.appendChild(tableFooter);
  for (var i = 0; i < hours.length; i++){
    var getRandomNums = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    var totalCookies = Math.floor(getRandomNums * this.avgCookieSale);
    tableFooter = document.createElement('tf');
    tableFooter.textContent = total[i];
    tableRow.appendChild(tableFooter);
  }
  table.appendChild(tableRow);
};

firstNPike.getTableHead()
firstNPike.getTable()
seaTac.getTable()
seaCent.getTable()
capHill.getTable()
alKi.getTable()

>>>>>>> lab8

var capHill = {
  list:null,
  header:null,
  img:null,
  imgSrc:'https://s3-us-west-2.amazonaws.com/g5-orion-clients/g5-c-ibsddh6p-pillar-properties-client/g5-cl-55us94ubz-the-lyric-capitol-hill/uploads/view-photo-gallery1.jpg',
  id: 'caphill',
  location: 'Capitol Hill',
  MinCust: 20,
  MaxCust:38,
  AvgCookieSale: 2.3,
  avgCookiesADay: [],
  getRandomNums: function(){
    return Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust;
 },
 counts15Times: function(){
   for (var i = 0; i < 15; i++ ){
     var avgCookieHr = this.getRandomNums() * this.AvgCookieSale
     this.avgCookiesADay.push(Math.floor(avgCookieHr))
 }
},
render: render
};
capHill.render()

<<<<<<< HEAD
var alkiBeach = {
  list:null,
  head:null,
  img:null,
  imgSrc:'https://images.trvl-media.com/media/content/shared/images/travelguides/destination/178307/Alki-Beach-20835.jpg',
  id: 'alkibeach',
  location: 'Alki',
  MinCust: 2,
  MaxCust: 16,
  AvgCookieSale: 4.6,
avgCookiesADay: [],
getRandomNums: function(){
  return Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust;
},
counts15Times: function(){
 for (var i = 0; i < 15; i++ ){
   var avgCookieHr = this.getRandomNums() * this.AvgCookieSale
   this.avgCookiesADay.push(Math.floor(avgCookieHr))
 }
},
render: render
};
alkiBeach.render()
=======
storesList.getHourlyTotals();


function handleLocationCreateSubmit(submit){
  event.preventDefault();
  var form = submit.target;
  var name = form.storeName.value;
  var maxCust = form.maxCust.value;
  maxCust = parseInt(maxCust);
  var minCust = form.minCust.value;
  minCust = parseInt(minCust);
  var avgCookieSale = form.avgCookieSale.value;
  avgCookieSale = parseInt(avgCookieSale);
  var cookieStore = new CookieStore(name,maxCust,minCust,avgCookieSale);
  cookieStore.getTable();
}
var storeCreate = document.getElementById('create-store');
storeCreate.addEventListener('submit', handleLocationCreateSubmit);
>>>>>>> lab8
