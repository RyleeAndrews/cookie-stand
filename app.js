'use strict';
var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm;', '1pm:', '2pm:', '3pm:', '4pm:',  '5pm:', '6pm:', '7pm:', '8pm:'];
var patsstore1stnP = {
  location: '1st and Pike',
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
  }
};
patsstore1stnP.counts15Times()
console.log(patsstore1stnP.avgCookiesADay);
var cookiesanhourUL = document.getElementById('cookiesanhour');
console.log(cookiesanhourUL);
var cookiesanhourLi;
for (var i = 0; i < patsstore1stnP.avgCookiesADay.length; i++){
  cookiesanhourLi = document.createElement('li');
  cookiesanhourLi.setAttribute('class', 'avgCookiesADay');
  cookiesanhourLi.textContent = hours[i]  + ' ' + patsstore1stnP.avgCookiesADay[i];
  cookiesanhourUL.appendChild(cookiesanhourLi);
}
var patsstoreSeaTacA = {
  location: 'SeaTac Airport',
  MinCust: 3,
  MaxCust:24,
  AvgCookieSale: 1.2,
};


var patsstoreSeattleC = {
  location: 'Seattle Center',
  MinCust: 11,
  MaxCust:38,
  AvgCookieSale: 3.7,
};

var patsstoreCapitolH = {
  location: 'Capitol Hill',
  MinCust: 20,
  MaxCust:38,
  AvgCookieSale: 2.3,
};

var patsstoreAlki = {
  location: 'Alki',
  MinCust: 2,
  MaxCust: 16,
  AvgCookieSale: 4.6,
};
