import { User } from "./classes/User";
import { Company } from "./classes/Company";

import { customMap } from "./classes/Map";

const user = new User();
const company = new Company();
const newMap = new customMap("map");

newMap.addUserMarker(user);
newMap.addCompanyMarker(company);
