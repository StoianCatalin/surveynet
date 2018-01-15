import {Component, OnInit} from '@angular/core';
import {InputsAnswer} from "../../models/InputsAnswer";
import {Survey} from "../../models/Survey";

@Component({
  selector: 'app-addsurvey',
  templateUrl: './addsurvey.component.html',
  styleUrls: ['./addsurvey.component.css']
})
export class AddsurveyComponent implements OnInit {

  choosedAnswer: number;
  length: number;
  inputsArray: Array<InputsAnswer> = new Array<InputsAnswer>();
  survey: Survey = new Survey();

  constructor() {
  }

  ngOnInit() {
    this.survey.questions = [];
    this.survey.questions.push({question: '', type: 0, answers: []});
  }

  selectAnswer(value) {
    this.choosedAnswer = value;
    if (value == 1 && this.inputsArray.length == 0) {
      this.survey.questions[0].answers.push('');
      // this.inputsArray.push();
      this.length = this.inputsArray.length;
    }
  }

  addAnswer(indexQuestion) {
    this.survey.questions[indexQuestion].answers.push("");
    this.inputsArray.push({answer: ''});
    this.length = this.inputsArray.length;
  }

  modifyAnswer(indexAnswer, indexQuestion, value) {
    this.survey.questions[indexQuestion].answers[indexAnswer] = value;
    // this.inputsArray[index].answer = value;
  }

  removeAnswer(indexAnswer, indexQuestion) {
    this.survey.questions[indexQuestion].answers.splice(indexAnswer, 1);
    // this.inputsArray.splice(index,1);
    // if(this.inputsArray.length == 0)
    //   this.inputsArray.push({answer: ''});
  }

  addQuestion() {
    this.survey.questions.push({question: '', type: 0, answers: []});
  }

  removeQuestion(index) {
    if (this.survey.questions.length > 1)
      this.survey.questions.splice(index, 1);
  }

}
