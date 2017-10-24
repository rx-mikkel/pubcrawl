import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	googleMap: any;

	ngOnInit() {
		this.initMap();
	}


	initMap() {
		var mapOptions = {
	        zoom: 15,
	        center: new google.maps.LatLng(57.048820, 9.921747),
	        styles: this.getMapStyles(),
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    }
		this.googleMap = new google.maps.Map(document.getElementById('map'), mapOptions);
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


	
}
