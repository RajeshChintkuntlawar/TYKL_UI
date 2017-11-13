
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { PagesRoutingModule } from '../pages-routing.module';


@Component({
  selector: 'ngx-add-quiz',
  templateUrl: './addquiz.component.html',
})

export class AddQuizComponent implements OnInit {
  
  public q;
  public a1;
  public a2;
  public a3;
  public a4;
  public subject;
  public complexity;
  public radioQ1;
  public message;

  
  public headers;

  postData: string;
  
  public ngOnInit() {}

  
  constructor(private router: Router, private http: Http) {}

          mycollapse(q){ 

              const myvar = document.getElementById(q).hidden;
              if (myvar === false) {
                document.getElementById(q).hidden = true;
              } else {
                document.getElementById(q).hidden = false;
              }
            }

            

            public addQuizSubmit(){
              
              this.headers = new Headers();
              this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
              this.http.post('http://localhost:8080/test-your-knowledge/add'
              , `q=${this.q}&subject=${this.subject}&complexity=${this.complexity}&a1=${this.a1}&a2=${this.a2}&a3=${this.a3}&a4=${this.a4}&result=${this.radioQ1}`, {headers: this.headers})
              .subscribe(
                (data) => {
                  if (data.status === 200){
                    this.message = `Question created!`;
                    sleep (1000).then(() => {
                     location.reload();
                    
                  }); 

                } else {
                  this.message = `Question creation failed. Try again...`;
                }
              
              function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
              }
              
            });

}

}
