import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { PagesRoutingModule } from '../pages-routing.module';

@Component({
    selector: 'ngx-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

    subjectAreas: any;
    questionComplexityList: any;
    message: String;
    headers: any;
    subjectArea: number;
    expertiseLevel: number;

    public subjectDrop;
    public complexDrop;
    
    public questionReturn;

    public ngOnInit() {
        this.retrieveSubjectAreas();
        this.retrieveQuestionComplexityList();
    }

    constructor(private router: Router, private http: Http) {
    }

    public retrieveSubjectAreas() {
        this.http.get('http://localhost:8080/test-your-knowledge/subjectareas')
            .subscribe(
            (subjectareas) => {
                if (subjectareas.status === 200) {
                    this.subjectAreas = subjectareas.json();
                    // console.log(this.subjectAreas[0].quiz_subject_area);
                }
            },
            (error) => {
                if (error.status === 400) {
                    this.message = 'Our Application experienced an issue.  Please try again.';
                }
            },
        );
    }

    public retrieveQuestionComplexityList() {
        alert(this.complexDrop);
        this.http.get('http://localhost:8080/test-your-knowledge/questioncomplexitylist')
            .subscribe(
            (questionComplexityList) => {
                if (questionComplexityList.status === 200) {
                    this.questionComplexityList = questionComplexityList.json();
                    // console.log(this.questionComplexityList[0].question_complexity_level_description);
                }
            },
            (error) => {
                if (error.status === 400) {
                    this.message = 'Our Application experienced an issue.  Please try again.';
                }
            },
        );
    }

    public viewQuestions() {
        // console.log('Retrieving Question and Answers');
        // alert(this.subjectDrop);
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // console.log(this.headers);
        // console.log('subject ' + this.subjectArea);
        // console.log('expertiseLevel ' + this.expertiseLevel);
        this.http.post('http://localhost:8080/test-your-knowledge/takequiz'
            , `subjectArea=${this.subjectDrop}&expertiseLevel=${this.complexDrop}`, { headers: this.headers })
            // , `subjectArea=${this.subjectArea}&expertiseLevel=${this.expertiseLevel}`, { headers: this.headers })
            .subscribe(
            (questions) => {
                if (questions.status === 200) {

                    this.questionReturn = questions.json();
                    // console.log(this.questionReturn);

                    this.router.navigate(['pages/takequiz']);
                    // console.log(questions);
                }
            },
            (error) => {
                if (error.status === 400) {
                    // this.router.navigate(['pages/takequiz']);
                    this.message = 'Our Sincere Apologies.  We are working on creating challenges in the subject area you chose.  Please come back soon and try again.';
                }
            },
        );
    }
}
