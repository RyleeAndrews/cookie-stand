'use strict';
var hours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm;', '1pm:', '2pm:', '3pm:', '4pm:',  '5pm:', '6pm:', '7pm:', '8pm:'];

function render(){
  this.counts15Times();
  this.heading = document.createElement('h2');
  this.heading.textContent = this.location;
  this.heading.setAttribute('id', this.id);
  document.body.appendChild(this.heading);

