$(document).ready(function(){})
var friends=['Timmy', 'Turner','Tilini', 'Tony','Todd'];
var loco=['bathroom', 'kitchen', 'bedroom1', 'basement', 'gameroom', 'livingroom', 'diningroom','laundryroom', 'balcony', 'attic'];
var weapons=['shoe', 'bat', 'rope', 'laser', 'chainsaw', 'tazer', 'pepperspray', 'book', 'sword', 'spikes', 'shield', 'boomerang', 'brassknuckles', 'nerfgun', 'hammer', 'bowandarrow', 'pie', 'belt', 'helmet', 'ball'];

document.addEventListener('DOMContentLoaded', function () {    
       for (let i = 1; i < 101; i++) {
            var h3 = document.createElement('h3');
        h3.innerText = 'Accusation ' + i;          
        h3.addEventListener('click', function () {
            var friend = friends[Math.floor(Math.random() * friends.length)];
            var weapon = weapons[Math.floor(Math.random() * weapons.length)];
            var locos = loco[Math.floor(Math.random() * loco.length)];
                      alert('Accusation ' + i + ':' + 'I accuse ' + friend + ' with the ' + weapon + ' in the ' + locos + '!')
           });             
           document.body.appendChild(h3);
       }
   });