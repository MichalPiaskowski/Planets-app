export class Planet {
  public name: string;
  public rotation_period: number;
  public orbital_period: number;
  public diameter: number;
  public climate: string;
  public gravity: string;
  public terrain: string;
  public surface_water: number;
  public population: number;

  constructor(name: string, rotation: number, orbital: number, diameter: number,
    climate: string, gravity: string, terrain: string, surface_water: number, population: number) {
    this.name = name;
    this.rotation_period = rotation;
    this.orbital_period = orbital;
    this.diameter = diameter;
    this.climate = climate;
    this.gravity = gravity;
    this.terrain = terrain;
    this.surface_water = surface_water;
    this.population = population;
  }
}
