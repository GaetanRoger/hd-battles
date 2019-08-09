import { Injectable } from '@angular/core';
import { DiceRoll } from '../../../models/dice-roll';
import { MonstreContent } from '../../../models/monstre-content';
import { Action } from '../../../models/action';

@Injectable({
  providedIn: 'root'
})
export class InfoParserService {
  private readonly DICE_ROLL_REGEX = /^([1-9][0-9]*) \(([1-9][0-9]?)d(4|6|8|10|12|20)([+\-][0-9]+)?\)/;

  /**
   * Parse un jet de dé sous la form 7 (3d4+1). Retourne les valeurs parsées
   * ou null si la chaine d'entrée était incorrecte.
   *
   * @param value Jet de dé sous la form 7 (3d4+1).
   */
  parseDiceRoll(value: string): DiceRoll | null {
    const regexResults = this.DICE_ROLL_REGEX.exec(value);

    return regexResults ? {
      mean: Number(regexResults[1]),
      diceCount: Number(regexResults[2]),
      diceSize: Number(regexResults[3]),
      modifier: Number(regexResults[4]) || 0
    } : null;
  }

  parseContent(content: string): MonstreContent {
    const reactionRegexGroup2 = /<h2 id="reactions">Réactions<\/h2>(((?!<h2)(.|\n))*)/m;
    const actionsRegexGroup2 = /<h2 id="actions">Actions<\/h2>(((?!<h2)(.|\n))*)/m;
    const capacitesRegexGroup2 = /<h2 id="capacites">Capacités<\/h2>(((?!<h2)(.|\n))*)/m;
    const actionsLegendairesRegexGroup2 = /<h2 id="actions-legendaires">Actions légendaires<\/h2>(((?!<h2)(.|\n))*)/m;

    const parsedReactions = reactionRegexGroup2.exec(content);
    const parsedActions = actionsRegexGroup2.exec(content);
    const parsedCapacites = capacitesRegexGroup2.exec(content);
    const parsedActionsLegendaires = actionsLegendairesRegexGroup2.exec(content);

    return {
      reactions: parsedReactions ? parsedReactions[1].trim() : undefined,
      actions: parsedActions ? this.parseActions(parsedActions[1].trim()) : undefined,
      capacites: parsedCapacites ? parsedCapacites[1].trim() : undefined,
      actionsLegendaires: parsedActionsLegendaires ? parsedActionsLegendaires[1].trim() : undefined
    };
  }

  parseActions(actions: string): (Action | string)[] {
    return actions.split('<p>')
      .map(s => s.replace('</p>', ''))
      .map(s => s.replace('\n', ''))
      .filter(s => !!s && s.length > 0)
      .map(s => this.parseAction(s));

  }

  private parseAction(action: string): Action | string {
    const completeRegex = /^<strong><em>(((?!<\/em>).)*)<\/em><\/strong> ?. <em>(((?!<\/em>).)*)<\/em> : ([+-][0-9]+) (pour toucher|au touché), (.+), (.+)(<br>)?<em>Touché<\/em> : (.+)$/m;
    const partialRegex = /^<strong><em>(((?!<\/em>).)*)<\/em><\/strong> ?. (.*)$/m;

    const regexResults = completeRegex.exec(action);

    if (regexResults) {
      return {
        name: regexResults[1],
        type: regexResults[3],
        modificateur: regexResults[5],
        portee: regexResults[7],
        cibles: regexResults[8].replace('<br>', ''),
        touche: regexResults[10]
      };
    }

    const partialRegexResults = partialRegex.exec(action);

    if (partialRegexResults) {
      return {
        name: partialRegexResults[1],
        description: partialRegexResults[3]
      };
    }

    return action;

  }
}
