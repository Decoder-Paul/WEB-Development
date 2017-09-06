$(document).ready(function(){
	  
	 //Showing Modal on page load
    $("#myModal").modal('show');
  
	 $('#myModal').on('shown.bs.modal', function () {
  		$('#usrname').focus()
	 })
	 // Get the modal
	 var modal = document.getElementById('myModal');
	 // When the user clicks anywhere outside of the modal, close it
	 window.onclick = function(event) {
    	if (event.target == modal) {
        modal.style.display = "none";
    	}
	 }
	//Getting username & password
	$("#modalLogin").click(function(){
		var user = document.getElementById("usrname").value;
		console.log(user);
		var pass = document.getElementById("psw").value;
	//XMLHttpRequest object
		var xmlhttp = new XMLHttpRequest();
		var url = "https://api.myjson.com/bins/2kq83";
		xmlhttp.onreadystatechange = function() {
			 if (this.readyState == 4 && this.status == 200) {
				  var myArr = JSON.parse(this.responseText);
				  myFunction(myArr);
			 }
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
		function myFunction(arr) {
			if(user==arr.username)
			{
				if(pass==arr.password)
				{
					//alert('Successfully logged in');
					$('#myModal').modal('hide');
					 
				}
				else{
					alert('Wrong Password!!');
					$('#psw').focus();
				}
			}
			else{
				alert('Wrong Username');
				$('#usrname').focus();
			}
		}
	})
});
// Sidenav Animation
					function openNav() {
   				document.getElementById("mySidenav").style.width = "45%";
					}
					function closeNav() {
   				document.getElementById("mySidenav").style.width = "0";
					}
// Geolocation Part
					window.onload = myLocation;
					var map;
					 var i=0;
					 function myLocation(){
						if (navigator.geolocation) {		
							navigator.geolocation.getCurrentPosition(function(position) {
								//position object binds the loation data
								var pos = {
								  lat: position.coords.latitude,
								  lng: position.coords.longitude
								};
								// rendering the div element for printing current location
								var location = document.getElementById("location");
								location.innerHTML = "Your Location: "+pos.lat+", Longitude: "+pos.lng;
								initMap(pos);
							});
						}
						else{
							alert("Maps not get loaded!!");
						}
					 }

					function initMap(pos) {
						//the map is redered in div element with few maptions like center, zoom
						map = new google.maps.Map(document.getElementById('map'), {
						 center: pos,
						 zoom: 15
					  });

					 // infowindow = new google.maps.InfoWindow();
					  var service = new google.maps.places.PlacesService(map);

						var request_parameter = {
						 location: pos,
						 radius: 800,
						 type: ['cafe']
						}
						//the actual search with map options 
						service.nearbySearch( request_parameter, callback);
					}

					function callback(results, status) {
					  if (status === google.maps.places.PlacesServiceStatus.OK) {
					  var c =1;
					  var row = document.createElement('div');
					  row.className="row";
					  row.id = 'row'+c;
					  document.body.appendChild(row);
						  for (var i = 0; i < results.length; i++) {
							var place = results[i];
							 console.log(place);
							 createMarker(place);
							  if(i%3==0){
								  c++;
								 row = document.createElement('div');
								 row.className="row";
								 row.id = 'row'+c;
								 document.body.appendChild(row);
							 }
							 if(place.photos){
								 createNewCard(row.id,place);
							 }
							 else{
								 createNewCardWithoutImg(row.id,place);
							 }
						 }
					  }
					}

					function createMarker(place) {
					  var marker = new google.maps.Marker({
						 map: map,
						 position: place.geometry.location,
						 animation: google.maps.Animation.DROP,
						 clickable: true
					  });
						var content = place.name;
						var infoWindow = new google.maps.InfoWindow();
						google.maps.event.addListener(marker, 'click', function() {
						infoWindow.setContent(place.name);
						infoWindow.open(map,this);
					  });
					}
					function createNewCard(rowid,placeResult){
						var container = document.getElementById(rowid);
							var card = document.createElement('div');
							card.className='card';
								var image = document.createElement('img');
								image.className = 'card-img-top';
								image.src = placeResult.photos[0].getUrl({ 'maxWidth': 300, 'maxHeight': 300 });
							card.appendChild(image);
								var block = document.createElement('div');
								block.className = 'card-block';	
									var title = document.createElement('h4');
									title.className='card-title';
									title.innerHTML="<b>"+placeResult.name+"</b>";
								block.appendChild(title);
								if(placeResult.rating){
										var ratng = document.createElement('p');
										ratng.className='card-text';
										ratng.innerHTML="Rating: <b>"+placeResult.rating.toString()+"</b>";
										block.appendChild(ratng);
									}
									var details=document.createElement('p');
									details.className='card-text';
									details.innerHTML="<hr>"+placeResult.vicinity;
								block.appendChild(details);
							card.appendChild(block);
						container.appendChild(card);
					}
					function createNewCardWithoutImg(rowid,placeResult){
						var container = document.getElementById(rowid);
							var card = document.createElement('div');
							card.className='card';
								var block = document.createElement('div');
								block.className = 'card-block';	
									var title = document.createElement('h4');
									title.className='card-title';
									title.innerHTML="<b>"+placeResult.name+"</b></br>";
									block.appendChild(title);				
									if(placeResult.rating){
										var ratng = document.createElement('p');
										ratng.className='card-text';
										ratng.innerHTML="Rating: <b>"+placeResult.rating.toString()+"</b>";
										block.appendChild(ratng);
									}
									var details=document.createElement('p');
									details.className='card-text';
									details.innerHTML="<hr>"+placeResult.vicinity;
								block.appendChild(details);
							card.appendChild(block);
						container.appendChild(card);
					}