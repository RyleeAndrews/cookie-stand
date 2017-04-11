'use strict';
var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm;', '1pm:', '2pm:', '3pm:', '4pm:',  '5pm:', '6pm:', '7pm:', '8pm:'];

var firstAndPike = {
  id: '1stnPike',
  list: null,
  header: null,
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
  },
  render: function(){
    this.counts15Times();
    this.heading = document.createElement('h2');
    this.heading.textContent = this.location;
    this.heading.setAttribute('id', this.id);
    document.body.appendChild(this.heading);

    this.list = document.createElement('ul');
    this.list.setAttribute('id', this.id);
    document.body.appendChild(this.list);

    for (var i = 0; i < this.avgCookiesADay.length; i++){
      var cookiesanhourLi = document.createElement('li');
      cookiesanhourLi.setAttribute('class', 'avgCookiesADay');
      cookiesanhourLi.textContent = hours[i]  + ' ' + this.avgCookiesADay[i];
      this.list.appendChild(cookiesanhourLi);
    }
  }
};
firstAndPike.render()
var seaTac = {
  id: 'seatac',
  list: null,
  header: null,
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
  render: function(){
    this.counts15Times();
    this.heading = document.createElement('h2');
    this.heading.textContent = this.location;
    this.heading.setAttribute('id', this.id);
    document.body.appendChild(this.heading);

    this.list = document.createElement('ul');
    this.list.setAttribute('id', this.id);
    document.body.appendChild(this.list);

    for (var i = 0; i < this.avgCookiesADay.length; i++){
      var cookiesanhourLi = document.createElement('li');
      cookiesanhourLi.setAttribute('class', 'avgCookiesADay');
      cookiesanhourLi.textContent = hours[i]  + ' ' + this.avgCookiesADay[i];
      this.list.appendChild(cookiesanhourLi);
    }
  }
};
seaTac.render()

var seaCent = {
  header: null,
  list:null,
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
render: function(){
  this.counts15Times();
  this.heading = document.createElement('h2');
  this.heading.textContent = this.location;
  this.heading.setAttribute('id', this.id);
  document.body.appendChild(this.heading);

  this.list = document.createElement('ul');
  this.list.setAttribute('id', this.id);
  document.body.appendChild(this.list);

  for (var i = 0; i < this.avgCookiesADay.length; i++){
    var cookiesanhourLi = document.createElement('li');
    cookiesanhourLi.setAttribute('class', 'avgCookiesADay');
    cookiesanhourLi.textContent = hours[i]  + ' ' + this.avgCookiesADay[i];
    this.list.appendChild(cookiesanhourLi);
  }
 }
};
seaCent.render()

var capHill = {
  list:null,
  header:null,
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
render: function(){
  this.counts15Times();
  this.heading = document.createElement('h2');
  this.heading.textContent = this.location;
  this.heading.setAttribute('id', this.id);
  document.body.appendChild(this.heading);

  this.list = document.createElement('ul');
  this.list.setAttribute('id', this.id);
  document.body.appendChild(this.list);

  for (var i = 0; i < this.avgCookiesADay.length; i++){
    var cookiesanhourLi = document.createElement('li');
    cookiesanhourLi.setAttribute('class', 'avgCookiesADay');
    cookiesanhourLi.textContent = hours[i]  + ' ' + this.avgCookiesADay[i];
    this.list.appendChild(cookiesanhourLi);
  }
 }
};
capHill.render()

var alkiBeach = {
  list:null,
  head:null,
  id: 'alkibeach'
  location: 'Alki',
  MinCust: 2,
  MaxCust: 16,
  AvgCookieSale: 4.6,
};
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
render: function(){
this.counts15Times();
this.heading = document.createElement('h2');
this.heading.textContent = this.location;
this.heading.setAttribute('id', this.id);
document.body.appendChild(this.heading);

this.list = document.createElement('ul');
this.list.setAttribute('id', this.id);
document.body.appendChild(this.list);

for (var i = 0; i < this.avgCookiesADay.length; i++){
  var cookiesanhourLi = document.createElement('li');
  cookiesanhourLi.setAttribute('class', 'avgCookiesADay');
  cookiesanhourLi.textContent = hours[i]  + ' ' + this.avgCookiesADay[i];
  this.list.appendChild(cookiesanhourLi);
  }
 }
};
alkiBeach.render()
