export class Survey {
  title: string;
  description: string;
  idAuthor: number;
  questions: Array<Question>;
}

export class Question {
  question: string;
  type: number;
  answers: Array<string>;
}
