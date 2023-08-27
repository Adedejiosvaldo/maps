import { faker } from "@faker-js/faker";

export class Company {
  name: string;
  catchPhase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPhase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h3>
    Company: ${this.name} , \n
    </h3>

    <h4>
    Catchprase :${this.catchPhase}
    </h4>

    </div>
    `;
  }
}
