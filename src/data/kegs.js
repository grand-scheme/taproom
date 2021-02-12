// until databasing / Live State is involved, this is a hard-coded "database" of kegs for the taproom //
import { v4 } from 'uuid' ;

export const kegsList = [
  { 
    kegId: v4(), 
    name: "Alpha", 
    brandName: "Get Kegged", 
    price: 4.5, 
    abv: 4.5, 
    inventory: 100
  },
  { 
    kegId: v4(), 
    name: "Beta", 
    brandName: "Get Kegged", 
    price: 7, 
    abv: 14, 
    inventory: 90
  },
  { 
    kegId: v4(), 
    name: "Gamma", 
    brandName: "Get Kegged", 
    price: 9, 
    abv: 12, 
    inventory: 55
  },
  { 
    kegId: v4(), 
    name: "Delta", 
    brandName: "Beveragy Hills", 
    price: 9, 
    abv: 10.5, 
    inventory: 32
  },
  { 
    kegId: v4(), 
    name: "Epsilon", 
    brandName: "Beveragy Hills", 
    price: 6.5, 
    abv: 6, 
    inventory: 12
  }
];