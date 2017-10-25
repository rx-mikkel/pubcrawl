import { Component, OnInit, NgZone } from '@angular/core';

declare var google: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	googleMap: any;
	geocoder: any;
	bounds: any;
	distanceService: any;
	infoWindow: any;
	iconColor: string = '#ff0000';
	markersArray: any = [];
	iconSize: number = 48;

	originMarker: any;
	destinationMarker: any;

	markerPath = "M11.168,14.133c0.075,0,0.189-0.01,0.361-0.033c0.554-0.078,1.687-0.523,2.147-0.836c0.293-0.196,0.79-0.632,0.992-1.038c0.151-0.306,0.281-0.717,0.229-1.11c-0.054-0.392-0.29-1.429-1.358-1.566c-0.533-0.069-0.897-0.021-1.128,0.045c-0.005-0.371-0.025-0.759-0.067-1.165c-0.025-0.781-2.09-1.411-4.632-1.411c-2.542,0-4.606,0.63-4.632,1.411l0,0c-0.536,5.325,2.207,7.497,4.632,7.497C8.938,15.926,10.244,15.371,11.168,14.133z M12.368,10.691c0.343-0.277,0.945-0.623,1.562-0.294c0.24,0.128,0.508,0.523,0.404,1.03s-0.705,1.061-1.176,1.285c-0.465,0.221-0.978,0.293-1.352,0.312C12.086,12.37,12.287,11.595,12.368,10.691z M7.71,7.731c2.165,0,3.92,0.32,3.92,0.712c0,0.394-1.756,0.712-3.92,0.712c-2.165,0-3.92-0.32-3.92-0.712C3.791,8.05,5.544,7.731,7.71,7.731z M3.731,9.174C4.541,9.59,6.019,9.869,7.71,9.869c1.698,0,3.182-0.281,3.989-0.699c0.154,4.27-2.103,6.031-3.984,6.031C5.833,15.2,3.579,13.439,3.731,9.174z";

	constructor(
		private ngZone: NgZone
	) {}

	ngOnInit() {
		this.initMap();
	}

	initMap() {
		var self = this;
		var mapOptions = {
	        zoom: 15,
	        minZoom: 13,
	        mapTypeControl: false,
	        streetViewControl: false,
	        fullscreenControl: false,
	        center: new google.maps.LatLng(57.048820, 9.921747),
	        styles: this.getMapStyles(),
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    }

		this.googleMap = new google.maps.Map(document.getElementById('map'), mapOptions);
		this.geocoder = new google.maps.Geocoder();
		this.bounds = new google.maps.LatLngBounds();
		this.infoWindow = new google.maps.InfoWindow();
		this.distanceService = new google.maps.DistanceMatrixService();

		this.drawMarkers();

		this.googleMap.addListener('click', function(e) {
			if(!self.originMarker) {
				var iconUrl = 'http://www.myiconfinder.com/uploads/iconsets/256-256-a5485b563efc4511e0cd8bd04ad0fe9e.png';
				var icon = { 
                	url: iconUrl, 
                	anchor: new google.maps.Point((self.iconSize/2), (self.iconSize/2)), 
                	scaledSize: { width: self.iconSize, height: self.iconSize }
                }

		        var pos = e.latLng

		        self.ngZone.run(() => {
			        self.originMarker = new google.maps.Marker({
			            map: self.googleMap,
			            position: pos,
			            icon: icon,
			            draggable: true
			        });
			    });
			}
		});
	}

	drawMarkers() {
		for(let pub of this.pubs) {
			var self = this;
			this.geocoder.geocode({'address': pub.address}, function (results, status) {

	            if (status == google.maps.GeocoderStatus.OK) {
	                self.bounds.extend(results[0].geometry.location);
	                self.googleMap.fitBounds(self.bounds);
	                
	                // Symbol approach can change color dynamically
	                var icon = {
	                    path: self.markerPath, // url
	                    fillColor: self.iconColor,
	                    fillOpacity: 1,
	                    scale: 3.5,
	                    // centered in 0,0 currently - position a bit off
	                    strokeColor: '#b47f0c',
	                    strokeWeight: 2
	                }

	                // Image approach allows multiple colors but less programmatic control
	                var markerIcon = { 
                    	url: pub.icon, 
                    	anchor: new google.maps.Point((self.iconSize/2), (self.iconSize/2)), 
                    	scaledSize: { width: self.iconSize, height: self.iconSize }
                    }

	                var marker = new google.maps.Marker({
	                    map: self.googleMap,
	                    position: results[0].geometry.location,
	                    icon: markerIcon
	                });

	                marker.addListener('mouseover', function() {
	                	var contentString = '<h3>' + pub.name + '</h3><br />' + pub.address; 
	                	self.infoWindow.setContent(contentString);
	                	self.infoWindow.open(self.googleMap, marker);
					});

					marker.addListener('mouseout', function() {
	                	self.infoWindow.close();
					});

					marker.addListener('click', function() {
	                	//
					});

	                self.markersArray.push(marker);
	            }   

	        });
		}
	}

	getSimpleRoute() {

	}

	getOptimalRoute() {

	}



	getMapStyles() {
        return [
		  {
		    "stylers": [
		      {
		        "color": "#29200c"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative",
		    "stylers": [
		      {
		        "color": "#fefde2"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#000000"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "labels.text",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "stylers": [
		      {
		        "color": "#4a2d0f"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "labels.icon",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "labels.text",
		    "stylers": [
		      {
		        "color": "#d6d3b4"
		      },
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#000000"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "stylers": [
		      {
		        "color": "#252f38"
		      }
		    ]
		  }
		];
	}

	pubs: any = [
		{
			name: 'Cafe frederiksberg',
			address: 'Hadsundvej 1B, 9000 Aalborg, Denmark',
			icon: 'http://icons.iconarchive.com/icons/flat-icons.com/flat/512/Beer-icon.png'
		},
		{
			name: 'Den Lille Havfrue',
			address: 'Hadsundvej 14, 9000 Aalborg, Denmark',
			icon: 'http://icons.iconarchive.com/icons/flat-icons.com/flat/512/Beer-icon.png'
		},
		{
			name: 'Kahytten',
			address: 'Hadsundvej 11A, 9000 Aalborg, Denmark',
			icon: 'https://cdn2.iconfinder.com/data/icons/luchesa-part-3/128/Beer-512.png'
		},
		{
			name: 'Vejgaard Kroen',
			address: 'Hadsundvej 44, 9000 Aalborg, Denmark',
			icon: 'https://static.skillshare.com/uploads/project/239dbec8bcc75f80457b1caa47a4a657/a801f44f'
		},
		{
			name: 'Jægerstuen',
			address: 'Vendsysselgade 2, 9000 Aalborg, Denmark',
			icon: 'https://cdn2.iconfinder.com/data/icons/luchesa-part-3/128/Beer-512.png'
		},
		{
			name: 'Søkroen',
			address: 'Langelandsgade 2, 9000 Aalborg, Denmark',
			icon: 'http://icons.iconarchive.com/icons/flat-icons.com/flat/512/Beer-icon.png'
		},
		{
			name: 'Færøkroen',
			address: 'Færøgade 57, 9000 Aalborg, Denmark',
			icon: 'https://cdn2.iconfinder.com/data/icons/luchesa-part-3/128/Beer-512.png'
		},
		{
			name: 'Østerport',
			address: 'Nørregade 32, 9000 Aalborg, Denmark',
			icon: 'https://static.skillshare.com/uploads/project/239dbec8bcc75f80457b1caa47a4a657/a801f44f'
		},
		{
			name: 'Hjerter Dame',
			address: 'Danmarksgade 96, 9000 Aalborg, Denmark',
			icon: 'https://cdn2.iconfinder.com/data/icons/luchesa-part-3/128/Beer-512.png'
		},
		{
			name: 'Centralcafeen',
			address: 'Danmarksgade 47, 9000 Aalborg, Denmark',
			icon: 'https://static.skillshare.com/uploads/project/239dbec8bcc75f80457b1caa47a4a657/a801f44f'
		}
	]

}
