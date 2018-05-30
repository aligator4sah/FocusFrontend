import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ValidationService} from "../../../shared/validation-service/validation.service";
import {StateAdmin, User} from "../../../model/User";
import {StateService} from "../../../service/state.service";

@Component({
  selector: 'app-sub-profile',
  templateUrl: './sub-profile.component.html',
  styleUrls: ['./sub-profile.component.css']
})
export class SubProfileComponent implements OnInit, OnDestroy{
  @Input() member: any;
  curRole: String;

  profileForm: FormGroup;
  isUpdated: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private stateService: StateService,
  ) { }

  ngOnInit() {
    //this.getStateAdminById();
    setTimeout(() => {
      this.stateService.subProfileRole$.subscribe(value => this.curRole = value);
      if (this.curRole === "State Administrator") {
        this.getStateAdminById();
      } else if (this.curRole === "Community Administrator") {
        this.getCommunityAdminById();
      } else if (this.curRole === "BHCO") {
        this.getBhcoById();
      }
    });
  }

  ngOnDestroy() {
    this.stateService.subProfileRole$.next("");
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

  getCommunityAdminById() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getCommunityAdminById(id)
      .subscribe(communityAdmin => {
        this.member = communityAdmin;
        this.buildForm();
      })
  }

  getBhcoById() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getBhcoById(id)
      .subscribe(bhco => {
        this.member = bhco;
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
    if (this.curRole === "State Administrator") {
      this.userService.updateStateAdminById(this.member.id, updateMember).subscribe();
    } else if (this.curRole === "Community Administrator") {
      this.userService.updateCommunityAdminById(this.member.id, updateMember).subscribe();
    } else if (this.curRole === "BHCO") {
      this.userService.updateBhcoById(this.member.id, updateMember).subscribe();
    }

    this.isUpdated = true;

    //TODO: link back to account table list
  }

  goBack() {
    window.history.back();
  }

}
