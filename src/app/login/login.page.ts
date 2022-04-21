import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// import { ApiService } from '../services/api.service';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isSubmitted = false;
  showPass:boolean = false;
  passIcon='eye';
  login;
  username: String;
  password: String;
  form: FormGroup;
  type: boolean = true;
  isLoading:boolean;


  constructor(
    private router: Router, private actRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    // private apiService: ApiService ,
    public alertController: AlertController,
    public toastCtrl: ToastController,
    public loadingController: LoadingController
    // private storage: Storage
  ) 
    {

  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(2)]
      }),
    });
  }

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Please wait...',
      duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }


  changeType() {
    this.type = !this.type;
  }

  async signIn() {
    // if(!this.form.valid) {
    //   this.form.markAllAsTouched();
    //   return;
    // }
    // else{
    //   let body = {
    //     username: this.form.get('username').value,
    //     password: this.form.get('password').value
    //   };
    
    //   this.apiService.post('login.php',body).subscribe( async data =>{
    //     console.log(data);
    //     if(data.success) {
    //       if(data.type == "admin") {
    //         this.router.navigate(['/admin-panel']);
    //         const toast = await this.toastCtrl.create({
    //           message: 'Welcome Admin',
    //           duration: 2000
    //         });
    //       toast.present();
    //       }
    //       else{
    //         this.router.navigate(['/tow-vehicle']);
    //         const toast = await this.toastCtrl.create({
    //           message: 'Welcome User',
    //           duration: 2000
    //         });
    //       toast.present();
    //       }
    //     }
    //     else {
    //       alert(data.msg)
    //     }
    //     this.login=data.list;
    //   });
    // }
  }

  forgot() {
    this.router.navigate(['/forgot']);
  }

  newaccount() {
    this.router.navigate(['/register']);
  }
  
}

