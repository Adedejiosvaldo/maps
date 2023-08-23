import { faker } from "@faker-js/faker";

export class Company {
  name: string;
  catchPhase: string;
  location: {
    lati: number;
    long: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPhase = faker.company.catchPhrase();
    this.location = {
      lati: faker.location.latitude(),
      long: faker.location.longitude(),
    };
  }
}
