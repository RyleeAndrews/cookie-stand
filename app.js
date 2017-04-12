'use strict';
var hours = [' ', '6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm;', '1pm:', '2pm:', '3pm:', '4pm:',  '5pm:', '6pm:', '7pm:', '8pm:', 'Daily Location Total '];
var main = document.getElementById('main');

function CookieStore(name,minCust,maxCust, avgCookieSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesAnHour = [];
  this.totalCookies = 0;
}
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
  for (var i = 0; i < 15;i++ ){
    var tableData = document.createElement('td')
    tableData.textContent = this.cookiesAnHour[i];
    tableRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = this.totalCookies;
  tableRow.appendChild(tableData);
  table.appendChild(tableRow);
}
CookieStore.prototype.getTableHead = function() {
  var table = document.getElementById('table');
  var tableRow = document.createElement('tr');
  var tableHead = document.createElement('th');
  table.appendChild(tableHead);
  for (var i = 0; i < 17; i++){
    tableHead = document.createElement('th');
    tableHead.textContent = hours[i];
    tableRow.appendChild(tableHead);
  }
  table.appendChild(tableRow);
}
CookieStore.prototype.getCookiesAnHour = function(){
  for (var i = 0; i < 15;i++){
    var getRandomNums = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    var totalCookies = Math.floor(getRandomNums * this.avgCookieSale);
    this.cookiesAnHour.push(totalCookies);
    this.totalCookies = this.totalCookies + totalCookies;
  }

}
firstNPike.getTableHead()
firstNPike.getTable()
seaTac.getTable()
seaCent.getTable()
capHill.getTable()
alKi.getTable()
