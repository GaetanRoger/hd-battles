export interface Action {
  name: string;
  description?: string;
  type?: string;
  modificateur?: string;
  portee?: string;
  cibles?: string;
  touche?: string;
}
