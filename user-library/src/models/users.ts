export interface User {
  name?: {
    title?: string;
    first?: string;
    last?: string;
  };
  location?: {
    street?: {
      number?: number;
      name?: string;
    };
    city?: string;
    state?: string;
    country?: string;
    postcode?: string;
    coordinates?: {
      latitude?: string;
      longitude?: string;
    };
    timezone?: {
      offset?: string;
      description?: string;
    };
  };
  email?: string;
  login?: {
    uuid?: string;
  };
  picture?: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
}
