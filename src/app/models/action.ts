export interface Action {
  name: string;
  description?: string;
  type?: 'cac' | 'd' | 'cacd' | 'other';
  typeFull?: string;
  modificateur?: string;
  portee?: string;
  cibles?: string;
  touche?: string;
}
