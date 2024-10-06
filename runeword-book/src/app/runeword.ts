export interface Runeword {
    name: string;
    english: string;
    level: string;
    sockets: string;
    runes: string[];
    type: string[];
    stats: string[];
  }

export enum VisualizationMode {
  cards = "cards",
  table = "table"
}
