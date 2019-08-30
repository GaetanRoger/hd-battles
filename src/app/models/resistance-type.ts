export interface ResistanceType {
  /**
   * Nom de la resistance.
   */
  name: string;

  /**
   * Type de degats resistes.
   */
  resists: string;

  /**
   * Type du jet de sauvegarde sur lequel la resistance apporte un avantage.
   */
  avantage?: string;
}
