'use strict';
var hours = [' ', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm',  '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Daily Location Total'];
var main = document.getElementById('main');
function CookieStore(name,minCust,maxCust, avgCookieSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesAnHour = [];
  this.totalCookies = 0;
  this.totalByHour = 0;
}

function CookieStoreList(stores) {
  this.stores = stores;
}

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


var storesList = new CookieStoreList([firstNPike, seaTac, seaCent, capHill, alKi]);

storesList.getHourlyTotals();
