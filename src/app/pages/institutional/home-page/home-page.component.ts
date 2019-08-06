import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
  public form: FormGroup;

  constructor(private service: EmailService, private toastr: ToastrService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])],
      subject: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      message: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])]
    })
  }

  ngOnInit() {
  }

  submit() {
    this.service.post(this.form.value).subscribe(
      (data: String) => {
        console.log(data);
        if (data) {
          this.toastr.success('E-mail enviado com sucesso', 'Sucesso');
          this.form.reset();
        }
        else
          this.toastr.success('Erro ao enviar e-mail, por favor tente mais tarde', 'Erro');
      }
    );
  }
}
