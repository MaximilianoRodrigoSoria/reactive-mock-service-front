import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading:boolean=false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      password:['',Validators.required]
      }
    )
  }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    if(usuario == 'maxi' && password =='1q2w3e')
    {
      //redireccion
      console.log( usuario);
      this.runLoading();
    }
    else {
      this.error();
      this.form.reset();
    }
  }
  error(){
    this._snackBar.open('Usuario o Contraseña no valido',
      '',{horizontalPosition: 'center',
      duration:5000,
      verticalPosition: 'bottom'})
  }

  runLoading(){
    this.loading = true;
    setTimeout(() =>{
      this.loading = false;} , 1500);

  }
}
