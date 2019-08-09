import { Action } from './action';

export interface MonstreContent {
  actions?: (Action | string)[];
  actionsLegendaires?: string;
  capacites?: string;
  reactions?: string;
}
