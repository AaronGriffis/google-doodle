document.addEventListener('DOMContentLoaded', function() {
   var leaf = document.createElementNS("http://www.w3.org/2000/svg", "svg");
   leaf.setAttributeNS(null, "viewBox", "-1 -1 6 6");
   leaf.setAttributeNS(null, "height", 3);
   leaf.setAttributeNS(null, "width", 3);
   leaf.setAttributeNS(null, "class", "leaf");

   var leafPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
   leafPath.setAttributeNS(null, "d", "M0 0 v 1 a 2 2 0 0 0 2 2 h 1 v -1 a 2 2 0 0 0 -2 -2 z M1 1 l 2.5 2.5 M2 1 v 1");
   
   leaf.appendChild(leafPath);

   var leaves = 40;
   for(var i = 0; i < leaves; i++) {
      document.getElementById('leaves').appendChild(leaf.cloneNode(true));
   }
 });