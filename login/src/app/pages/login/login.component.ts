import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { StorageService } from "./../../../_shared/services/storage.service";
import { FormErrorMixin } from "../../../_shared/mixins/form-error.mixin";
import { MixinHandler } from "../../../_shared/mixins/mixin-handler";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public hide = true;
  public form!: FormGroup;

  public hasError!: (controlName: string, errorName: string, loginForm: FormGroup) => false;

  constructor(private fb: FormBuilder, private storageService: StorageService) {}

  ngOnInit(): void {
    MixinHandler.applyMixins(LoginComponent, [FormErrorMixin]);
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      user: [{value: "", disabled: false}, Validators.required],
      password: [{value: "", disabled: false}, Validators.required],
    });
  }

  public onSubmit() {
    this.storageService.setItem("user", this.form.get("user")?.value);
    this.storageService.setItem("password", this.form.get("password")?.value);
    window.location.pathname = "/frame";
  }
}
