import { Injectable } 	from '@angular/core';

@Injectable()
export class LocationService {
	
	constructor(
	) { }

    getLocations() {
        let pubs: any = [
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
        ];

        return pubs;
    }
}