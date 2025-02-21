import ServiceDetails from "./ServiceDetails";

export default class Service{
  id: string = '';
  name: string = '';
  heading: string = '';
  subHeading: string = '';
  cta: string = '';
  types: ServiceDetails[] = [];
}