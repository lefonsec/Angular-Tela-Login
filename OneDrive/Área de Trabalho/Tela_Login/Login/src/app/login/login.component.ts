import { AuthService } from './../auth/auth.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form : FormGroup;
  public msgErro:string = '';
  public carregando:boolean = false;

  constructor(private fb : FormBuilder, private authService:AuthService) {
   this.form = this.fb.group({
      login: [null, Validators.compose([Validators.required, Validators.email])],
      senha:[null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  async submit(): Promise<void>{
    console.log(this.form.value);
    if(this.form.invalid){
      return;
    }
    this.carregando =true;
    try{
      //autentica ususario, salvar o token de autorização.
      throw new Error('teste');

    }catch(e:any){
      //mostra mensagem de erro.
      this.msgErro = e.error && e.error.message ?
      e.error.message :
      'ocorreu um erro ao efutuar login' ;
    }finally{
      this.carregando = false;
    }

  }

}
