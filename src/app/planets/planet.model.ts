
export class Planet {
  public name: string;
  public rotation_period: number;
  public orbital_period: number;
  public diameter: number;
  public climate: string;

  constructor(name: string, rotation: number, orbital: number, diameter: number, climate: string) {
    this.name = name;
    this.rotation_period = rotation;
    this.orbital_period = orbital;
    this.diameter = diameter;
    this.climate = climate;
  }
}
