import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ValidationService} from "../../../shared/validation-service/validation.service";
import {StateAdmin, User} from "../../../model/User";

@Component({
  selector: 'app-sub-profile',
  templateUrl: './sub-profile.component.html',
  styleUrls: ['./sub-profile.component.css']
})
export class SubProfileComponent implements OnInit {
  @Input() member: any;

  profileForm: FormGroup;
  isUpdated: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getStateAdminById();
  }

  buildForm() {
    this.profileForm = this.fb.group({
      firstname: [this.member.firstname],
      lastname: [this.member.lastname],
      password1: [this.member.password, [Validators.required, ValidationService.passwordValidator]],
      password2: [this.member.password, [Validators.required, Validators.minLength(8)]],
      phone: [this.member.phone],
      email: [this.member.email],
    });
  }

  getStateAdminById() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getStateAdminById(id)
      .subscribe(stateAdmin => {
        this.member = stateAdmin;
        //console.log(this.member);
        this.buildForm();
      });
  }


  update() {
    let updateMember = new User({
      username: this.member.username,
      firstname: this.profileForm.controls['firstname'].value,
      lastname: this.profileForm.controls['lastname'].value,
      password: this.profileForm.controls['password1'].value,
      phone: this.profileForm.controls['phone'].value,
      email: this.profileForm.controls['email'].value
    });
    console.log(updateMember);
    /** update method for state admin**/
    this.userService.updateStateAdminById(this.member.id, updateMember).subscribe();
    this.isUpdated = true;

    //TODO: link back to account table list
  }

  goBack() {
    window.history.back();
  }

}
