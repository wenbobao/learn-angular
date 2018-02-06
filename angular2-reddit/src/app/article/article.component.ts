import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {

 @Input() article: Article;

  ngOnInit() {
  }

  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }
}
