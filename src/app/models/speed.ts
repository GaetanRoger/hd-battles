export interface Speed {
  type: 'sol' | 'vol' | 'nage' | 'escalade' | 'fouissement';
  value: number;
  description?: string;
}
