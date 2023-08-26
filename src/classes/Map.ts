import { User } from "./User";
import { Company } from "./Company";

// Interface -> Gate Keepee

// Instructions to every class on how they
// can be an argumenet to add marker
interface Mappable {
  location: { lat: number; lng: number };
}

export class customMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }

  //   addCompanyMarker(company: Company): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: company.location.lati,
  //         lng: company.location.long,
  //       },
  //     });
  //   }
}
