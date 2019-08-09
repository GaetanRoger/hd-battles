export interface Sort {
  header: {
    title: string;
    spell: {
      casting_time: string;
      range: string;
      components: string;
      duration: string;
    };
    taxonomy: {
      source: string[];
      category: string[];
      spell_school: string[];
      spell_level: string[];
      spell_class: string[];
      spell_tag: string[];
    };
    process: {
      markdown: boolean;
      twig: boolean;
    }
  };
  content: string;
  link: string;
  title: string;
  level: string;
  casting_time: string;
  range: string;
  components: string;
  duration: string;
}
