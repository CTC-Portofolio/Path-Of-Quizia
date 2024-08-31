export type Question = {
  statement: string;
  type: "single" | "multiple";
  answers: Answer[];
  tags: QuestionTag[];
};

export type Answer = {
  text: string;
  isCorrect: boolean;
};

export type QuestionTag =
  | "crafting"
  | "flasks"
  | "tinctures"
  | "horticrafting"
  | "synthesis"
  | "veiled"
  | "influence"
  | "corruption"
  | "eldritch"
  | "fossils"
  | "essences";
