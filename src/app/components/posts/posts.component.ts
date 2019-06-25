import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  url = '';
  posts: any;
  postForm: any;
  id: any = false;

  constructor(private service: GlobalService) { }

  ngOnInit() {
     this.service.getData('posts')
       .subscribe(response => {
          this.posts = response;
       });
     this.postForm = new FormGroup({
        title: new FormControl('', [
          Validators.required,
          Validators.minLength(4)
        ]),
        body: new FormControl('', [
          Validators.required,
          Validators.minLength(4)
        ]),
      });
  }
  get title() { return this.postForm.get('title'); }

  get body() { return this.postForm.get('body'); }

  createPost() {
      const addEditId = (this.id) ? this.id : this.posts.length + 1;
      const post = {id: addEditId, title: this.postForm.get('title').value, body: this.postForm.get('body').value, userId: '1'};
      if (this.id) {
        this.service.UpdateData('posts', addEditId, post)
            .subscribe(res => {
               this.posts[this.id - 1] = post;
            });
      } else {
        this.service.CreateData('posts', post)
        .subscribe(res => {
              this.posts.splice(0, 0, post);
         });
      }

  }
  updateForm(index) {
    const post = this.posts[index] ;
    this.title.setValue(post.title);
    this.body.setValue(post.body);
    this.id = post.id;
  }
  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.service.DeleteData('posts', post.id).subscribe(response => {
        this.posts.splice(index, 1);
    });

  }

}
