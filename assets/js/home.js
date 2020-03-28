$(document).ready(function(){


   $("#confirmToastBtn").click(function () {
      $("#confirmToast").toast('hide');
   })

   $("#suspectedToastBtn").click(function () {
      $("#suspectedToast").toast('hide');
   })


   var mymap = L.map('map').setView([23.008633, 95.424236], 6);
  // L.tileLayer.provider('Stamen.Watercolor').addTo(map);


   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 28,
      attribution: 'Develop with ❤️ by <a href="https://www.linkedin.com/in/htun-htun-htet-75464299/" target="_blank">Htun Htun Htet</a> | Last update as 2020-03-28',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
   }).addTo(mymap);


   /** Tedaim **/
   let tedaimDetail = {
      'caseNum'     : '1',
      'confirmTime' : '2020-03-23 23:45:00',
      'gender'      : 'Male',
      'age'         : '36',
      'from'        : 'United States of America',
      'visited'     : 'Tedim',
      'currentTreatmentPlace': 'Tedim General Hospital',
      'startTreatment'   : '2020-03-21',
      'sourceLink'  : 'https://www.facebook.com/199295433433103/posts/3270706242958658/?d=n',
      'sourceLabel' : 'Ministry of Health and Sports, Myanmar',
      'lat'         : '23.381879',
      'lng'         : '93.656913',
      'fromLat'     : '39.902897',
      'fromLng'      : '-100.172324'
   }
   drawMarker(L,mymap,tedaimDetail)

   /** Hlegu**/
   let hleguiDetail = {
      'caseNum'     : '2',
      'confirmTime' : '2020-03-23 23:45:00',
      'gender'      : 'Male',
      'age'         : '26',
      'from'        : 'United Kingdom, England',
      'visited'     : 'Hlegu',
      'currentTreatmentPlace': 'Wai Bar Gi Hospital',
      'startTreatment'   : '2020-03-21',
      'sourceLink'  : 'https://www.facebook.com/199295433433103/posts/3270706242958658/?d=n',
      'sourceLabel' : 'Ministry of Health and Sports, Myanmar',
      'lat'         : '17.095311',
      'lng'         : '96.211199',
      'fromLat'     : '55.158797',
      'fromLng'      : '-2.569196'
   }

   drawMarker(L,mymap,hleguiDetail)


   /** Case 3 **/
   let case3Detail = {
      'caseNum'     : '3',
      'confirmTime' : '2020-03-25 01:00:00',
      'gender'      : 'Male',
      'age'         : '26',
      'from'        : 'United Kingdom, England',
      'visited'     : 'Insein',
      'currentTreatmentPlace': 'Insein Hospital',
      'startTreatment'   : '2020-03-23',
      'sourceLink'  : 'https://www.facebook.com/MinistryOfHealthAndSportsMyanmar/photos/pcb.3273579806004635/3273599522669330/?type=3&theater',
      'sourceLabel' : 'Ministry of Health and Sports, Myanmar',
      'lat'         : '16.915120',
      'lng'         : '96.092386',
      'fromLat'     : '55.158797',
      'fromLng'      : '-2.569196'
   }

   drawMarker(L,mymap,case3Detail)


    /** Case 4 **/
   let case4Detail= {
      'caseNum'     : '4',
      'confirmTime' : '2020-03-25 01:00:00',
      'gender'      : 'Male',
      'age'         : '33',
      'from'        : 'United State Of Amarica',
      'visited'     : 'Chan Myae Thar Si,Mandalay',
      'currentTreatmentPlace': 'Kandaw Nadi Hospital',
      'startTreatment'   : '2020-03-25',
      'sourceLink'  : 'https://www.facebook.com/MinistryOfHealthAndSportsMyanmar/photos/pcb.3278754752153807/3278751742154108/?type=3&theater',
      'sourceLabel' : 'Ministry of Health and Sports, Myanmar',
      'lat'         : '21.945382',
      'lng'         : '96.095052',
      'fromLat'     : '39.734131',
      'fromLng'      : '-102.765097'
   }

   drawMarker(L,mymap,case4Detail)

   /** Case 5 **/
   let case5Detail= {
      'caseNum'     : '5',
      'confirmTime' : '2020-03-25 01:00:00',
      'gender'      : 'Male',
      'age'         : '69',
      'from'        : 'Australia (1) Month / Singapore (4) Days',
      'visited'     : 'Mingalar Taung Nyunt Township, Yangon',
      'currentTreatmentPlace': 'Yangon General Hospital',
      'startTreatment'   : '2020-03-25',
      'sourceLink'  : 'https://www.facebook.com/MinistryOfHealthAndSportsMyanmar/photos/pcb.3278754752153807/3278751742154108/?type=3&theater',
      'sourceLabel' : 'Ministry of Health and Sports, Myanmar',
      'lat'         : '16.789411',
      'lng'         : '96.176882',
      'fromLat'     : '-25.190995',
      'fromLng'      : ' 133.765219'
   }

   drawMarker(L,mymap,case5Detail)

   /** Case 6 **/
   let case6Detail= {
      'caseNum'     : '6',
      'confirmTime' : '2020-03-26 01:00:00',
      'gender'      : 'Male',
      'age'         : '29',
      'from'        : 'United Kingdom, England',
      'visited'     : 'Wai Bar Gi Hospital, Yangon, Myanmar (Burma)',
      'currentTreatmentPlace': 'Wai Bar Gi Hospital, Yangon, Myanmar (Burma)',
      'startTreatment'   : '2020-03-26',
      'sourceLink'  : 'https://www.facebook.com/MinistryOfHealthAndSportsMyanmar/photos/pcb.3281142441915038/3281134091915873/?type=3&theater',
      'sourceLabel' : 'Ministry of Health and Sports, Myanmar',
      'lat'         : '16.920784',
      'lng'         : '96.156547',
      'fromLat'     : '62.066858',
      'fromLng'      : '-6.700055'
   }

   drawMarker(L,mymap,case6Detail)

   /** Case 7 **/
   let case7Detail= {
      'caseNum'     : '7',
      'confirmTime' : '2020-03-26 01:00:00',
      'gender'      : 'Female',
      'age'         : '58',
      'from'        : 'Switzerland, Geneve',
      'visited'     : 'Naypyitaw Airport',
      'currentTreatmentPlace': '1000 bedded Naypyitaw General Hospital, Naypyitaw',
      'startTreatment'   : '2020-03-26',
      'sourceLink'  : 'https://www.facebook.com/MinistryOfHealthAndSportsMyanmar/photos/pcb.3281142441915038/3281134091915873/?type=3&theater',
      'sourceLabel' : 'Ministry of Health and Sports, Myanmar',
      'lat'         : '19.743111',
      'lng'         : '96.100803',
      'fromLat'     : '46.203242',
      'fromLng'      : '6.144946'
   }

   drawMarker(L,mymap,case7Detail)

   /** Case 7 **/
   let case8Detail= {
      'caseNum'     : '8',
      'confirmTime' : '2020-03-26 01:00:00',
      'gender'      : 'Female',
      'age'         : '60',
      'from'        : 'Local Transmission',
      'visited'     : 'Unknown (Local Tramsmission)',
      'currentTreatmentPlace': 'Yangon General Hospital',
      'startTreatment'   : '2020-03-26',
      'sourceLink'  : 'https://www.facebook.com/MinistryOfHealthAndSportsMyanmar/photos/pcb.3281142441915038/3281134091915873/?type=3&theater',
      'sourceLabel' : 'Ministry of Health and Sports, Myanmar',
      'lat'         : '16.781626',
      'lng'         : '96.144727',
      'fromLat'     : 'null',
      'fromLng'      : 'null'
   }

   drawMarker(L,mymap,case8Detail);
});


function drawMarker(L,mymap,details) {

   const {caseNum, confirmTime, gender,age, from, visited, startTreatment,
            sourceLink, sourceLabel , lat, lng, fromLat, fromLng , currentTreatmentPlace } = details;


   let confirm = L.icon({
      iconUrl: confirmIcon,
      iconSize:     [40, 40], // size of the icon
      iconAnchor:   [22, 35], // point of the icon which will correspond to marker's location
      popupAnchor:  [-2, -30] // point from which the popup should open relative to the iconAnchor
   });

   let description = `<div> 
                        <div class="caseHeader">Case #${caseNum} <br/> (Confirmed On : ${confirmTime})</div>
                            <div class="caseBody">
                                <ul class="caseDesc">
                                    <li>Gender: <strong>${gender}</strong> </li>
                                    <li>Age: <strong>${age}</strong></li>
                                    <li>From : <strong>${from}</strong></li>
                                    <li>Visited: <strong>${visited}</strong></li>
                                    <li>Current Treatment Place: <strong>${currentTreatmentPlace}</strong></li>
                                    <li>Start Treatment At: <strong>${startTreatment}</strong></li>
                                    <li>Source : <a href="${sourceLink}" target="_blank">${sourceLabel}</a></li>
                                </ul>
                            </div>
                </div>`

   L.marker([`${lat}`, `${lng}`], {icon: confirm}).addTo(mymap)
       .bindPopup(description);



   if (fromLng !== 'null' && fromLng !== null ){
      let polylineLatLngs = [
         [`${fromLat}`, `${fromLng}`],
         [`${lat}`, `${lng}`]
      ]

      let polyline = L.polyline(polylineLatLngs, {color: 'red'}).addTo(mymap);


      polyline.setStyle({
         color: '#ff763b'
      });
   }


}