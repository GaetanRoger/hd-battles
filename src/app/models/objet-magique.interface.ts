export interface ObjetMagique {
  header: {
    title: string;
    magicitem: {
      type: string;
      rarity: string;
      subtype?: string;
      attunement?: string;
    };
    taxonomy: {
      category: string[];
      source: string[];
    };
  };
  content: string;
  link: string;
  title: string;
  type: string;
  subtype?: string;
  rarity: string;
  attunement?: string;
}
