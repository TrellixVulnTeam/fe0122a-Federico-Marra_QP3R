import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';

@Component({
  selector: 'app-post-card',
  template: `
    <div
      [ngClass]="{
        'bg-warning': post.type == 'notizie',
        'bg-info': post.type == 'formazione',
        'bg-dark': post.type == 'politica',
        'text-white': post.type == 'politica'
      }"
      class="card mb-4"
    >
      <h5 class="card-header">Post</h5>
      <div class="card-body">
        <h5 class="card-title">
          {{ post.title }}
        </h5>
        <p class="card-text">
          {{ post.body }}
        </p>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [``],
})
export class PostCardComponent implements OnInit {
  @Input() post!: Post;
  @Input() bgColor!: string;

  constructor() {}

  ngOnInit(): void {}
}
