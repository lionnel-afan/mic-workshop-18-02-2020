import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  messageForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dataservice: DataService
  ) {}

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      username: ["", Validators.required],
      name: ["", Validators.required]
    });
  }

  firstClick() {
    console.log("Form value : ", this.messageForm);
    // this.router.navigate(["/members"]);
  }

  onSubmit() {
    // console.log("Form value : ", this.messageForm.value);
    this.dataservice.logmeIn(this.messageForm.value).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        this.messageForm.reset();
        this.router.navigate(["/members"]);
      },
      error => {
        console.log("Error", error);
      }
    );
  }
}
