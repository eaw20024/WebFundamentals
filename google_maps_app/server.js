//Map Options
function initMap(){
   var options = {
       zoom: 8,
       center:{lat:38.9072,lng:-77.0369}
   } 
   //New Map
   var map = new google.maps.Map(document.getElementById('map'), options);

   //Listen for Click on Map 
   google.maps.event.addListener(map, 'click', 
        function(event){
           //Add Marker
           addMarker({coords:event.latLng});
    });

   /*
   //Add Marker
   var marker = new google.maps.Marker({
    position:{lat:38.8767,lng:-77.0175},
    map:map,
    icon:'https://www.mequedouno.com.mx/skin/frontend/tm_themes/theme765/images/home-icon.png'
   });

   var infoWindow = new google.maps.InfoWindow({
        content: '<h1>Southwest, Washington, DC</h1>'
   });

   marker.addListener('click', function(){
    infoWindow.open(map, marker);
   });
   */

  //Array of markers
  var markers = [
    {
      coords:{lat:38.8767,lng:-77.0175},
      iconImage:'https://www.mequedouno.com.mx/skin/frontend/tm_themes/theme765/images/home-icon.png',
      content:'<h3>Southwest, SW, Washington, DC</h3>'
    },
    {
      coords:{lat:38.911088369544856,lng:-77.00371026992798},
      iconImage:'https://www.mequedouno.com.mx/skin/frontend/tm_themes/theme765/images/home-icon.png',
      content:'<h3>Eckington Place, NE, Washington, DC</h3>'
    },
    {
      coords:{lat:38.916439453206,lng:-76.97377681732178},
      iconImage:'http://infoparky.com/common/images/icons/School-Icon50X50.png',
      content:'<h3>New York Ave & Bladensburg Rd, NE, Washington, DC</h3>'
    }
  ];

  //Loop through Markers
  for(var i = 0; i < markers.length; i++){
    //Add Markers
    addMarker(markers[i]);
  }

//   //Coords for Southwest DC
//   addMarker({
//       coords:{lat:38.8767,lng:-77.0175},
//       iconImage:'https://www.mequedouno.com.mx/skin/frontend/tm_themes/theme765/images/home-icon.png',
//       content:'<h3>Southwest, SW, Washington, DC</h3>'
//     });
//   //Coords for Eckington Place NE DC
//   addMarker({
//       coords:{lat:38.911088369544856,lng:-77.00371026992798},
//       iconImage:'https://www.mequedouno.com.mx/skin/frontend/tm_themes/theme765/images/home-icon.png',
//       content:'<h3>Eckington Place, NE, Washington, DC</h3>'
//     });
//   //Coords for my High School 
//   addMarker({
//       coords:{lat:38.916439453206,lng:-76.97377681732178},
//       iconImage:'http://infoparky.com/common/images/icons/School-Icon50X50.png',
//       content:'<h3>New York Ave & Bladensburg Rd, NE, Washington, DC</h3>'
//     });
   
   //Add Marker Function 
   function addMarker(props){
        var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
        //icon:props.iconImage
    });
        //Check for custom icon 
        if (props.iconImage){
        //Set Icon Image
            marker.setIcon(props.iconImage)
        }

        //Check Content
        if (props.content){
            var infoWindow = new google.maps.InfoWindow({
            content: props.content
            });

        marker.addListener('click', function(){
        infoWindow.open(map, marker);
   });
        }
   }
}

