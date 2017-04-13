'use strict';
var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm;', '1pm:', '2pm:', '3pm:', '4pm:',  '5pm:', '6pm:', '7pm:', '8pm:'];

function render(){
  this.counts15Times();
  this.heading = document.createElement('h2');
  this.heading.textContent = this.location;
  this.heading.setAttribute('id', this.id);
  document.body.appendChild(this.heading);

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
