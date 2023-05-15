       /* place the navigation on the page*/ 

       function openNav() {
        var w = window.innerWidth;
         /*var rem_font =  window.getComputedStyle(document.getElementById("page")).fontSize;
            var remW = w / Number(rem_font);*/
        if (w < 1120){
          document.getElementById("theDrawer").style.right = "0";
        }
        }
     /*place the navigation off the page */
      function closeNav() {
        document.getElementById("theDrawer").style.right = "-250px";
      }
    