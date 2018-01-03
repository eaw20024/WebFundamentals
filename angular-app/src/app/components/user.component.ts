import { Component } from '@angular/core';
import { PostsService } from '../services/post.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [ PostsService ]
})

export class UserComponent  { 
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts:Post[]

  constructor(private postsService: PostsService){
    this.name = 'Eric W';
    this.email = 'eric.washington.me@gmail.com';
    this.address = {
        street: "200 Q St",
        city: "Washington",
        state: "DC"
    }
    this.hobbies = ['music', 'movies', 'sports']
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(post => {
        this.posts = post;
    });
  }

  toggleHobbies(){
      if(this.showHobbies == true){
          this.showHobbies = false;
      } else {
        this.showHobbies = true;
      }
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
    console.log("Added a new Hobby " + hobby)
  }

  deleteHobby(i){
      this.hobbies.splice(i, 1);
  }
}

interface address {
    street: string;
    city: string;
    state: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
}