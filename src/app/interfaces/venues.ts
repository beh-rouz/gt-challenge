export interface Venues {
  venues: Venue[];
}

export interface Venue {
  id:        string;
  name:      string;
  lat:       string;
  lng:       string;
  address:   string;
  city:      string;
  postcode:  string;
  telephone: string;
  link:      string;
  hours:     string;
}