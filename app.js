'use strict';

var patsstore1stnP = {
  location: '1st and Pike',
  MinCust: 23,
  MaxCust: 65,
  AvgCookieSale: 6.3,
  getRandomNumsCust: function(){
    return Math.floor(Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust;
  getAvgNumsCust: function(){
    return Math.floor(Math.)
  }
  },
};
console.log(patsstore1stnP.getRandomNumsCust());

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
