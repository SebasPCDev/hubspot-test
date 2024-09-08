// Define una interfaz para los elementos dentro del array `properties`
export interface Property {
  property: string;
  value: string;
}

// Define una interfaz para el objeto principal
export interface MainObject {
  properties: Property[];
  json: boolean;
}
