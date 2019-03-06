import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
//import { Address } from "cluster";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: any;
  hobbies: string[];
  street: string;
  city: string;
  state: string;
  isEdit: boolean = false;
  posts: Post[];

  constructor(private dataService: DataService) {
    console.log("constructure ran..");
  }

  ngOnInit() {
    console.log("ngOnInit ran...");

    this.name = "John Doe";
    this.email = "jd@gmail.com";
    this.street = "50 Main st";
    this.city = "Boston";
    this.state = "MA";
    this.hobbies = ["Write code", "Watch movies", "Listen to music"];

    this.dataService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onClick() {
    this.name = "James Wilson";
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
