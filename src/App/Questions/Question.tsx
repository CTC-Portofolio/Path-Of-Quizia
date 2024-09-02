import { QuestionData } from "./types";

export interface QuestionProps {
  data: QuestionData;
  onSubmit: () => void;
}

export const Question = ({ data, onSubmit }: QuestionProps) => {
  const { statement, tags, type, answers } = data;

  const answerInputType = type === "single" ? "radio" : "checkbox";

  return (
    <form onSubmit={onSubmit} className="tw-max-w-lg">
      <h2>{statement}</h2>

      <fieldset>
        <legend>Answers:</legend>
        <ul>
          {answers.map(({ text }) => {
            return (
              <li key={text}>
                <label>
                  <input type={answerInputType} name="answer[]" />
                  {text}
                </label>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <h3>Tags</h3>

      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </form>
  );
};
