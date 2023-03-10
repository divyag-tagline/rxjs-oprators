import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  BehaviorSubject,
  concatMap,
  exhaustMap,
  from,
  fromEvent,
  Observable,
  of,
  Subscription,
  toArray,
} from 'rxjs';
import { SwitchMapService } from '../switch-map.service';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone: string;
  website?: string;
  company?: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss'],
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {
  @ViewChild('addUsers') addUsers!: ElementRef<any>;
  usersData!: User[];
  userDetails!: FormGroup;
  getUser!: User;
  submitted: Boolean = false;
  editId!: number;
  detailsId!: number;
  patchId!: number;
  accessToken!: string;
  patchDetailsId!: number;
  deleteIndex!: number;
  toggle: boolean = false;
  private detail = Subscription;
  private _todos = new BehaviorSubject<User[]>([]);
  dataStore: any;
  pi: any = 3.14159265359;
  readonly todos = this._todos.asObservable();

  constructor(
    private formBuilder: FormBuilder,
    private httpClientService: SwitchMapService,
    private activatedRoute: ActivatedRoute
  ) {
    this.createUserForm();
    // this.usersData = this.activatedRoute.snapshot.data['allDetails'];
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    fromEvent(this.addUsers.nativeElement, 'click')
      .pipe(
        exhaustMap(() => this.addUser())
      )
      .subscribe((res) => console.log('res :>> ', res), this.displayDetails());
  }

  createUserForm() {
    this.userDetails = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  get useDetailsControls() {
    return this.userDetails.controls;
  }
  //display data with function
  //with promise
  // public displayDetails() {
  //   console.log('working!!!');
  //   this.httpClientService.getDataPromise().then((res: any) => {
  //     console.log('res :>> ', res);
  //   });

  public displayDetails(): any {
    return of(
      this.httpClientService.displyUser().subscribe(
        (res) => {
          this.usersData = res;
        }
      )
    );
  }
  // public displayDetails() :any {
  //   //observerable with observer

  //   // this.httpClientService
  //   //   .displyUser()
  //   //   .pipe(map((users: any) => users.map((user: any) => console.log(user))));
  //   return from(this.httpClientService.displyUser().subscribe(
  //     (res) => {
  //       this.usersData = res;

  //       // let customeObservable = Observable.create((observer: Observer<any>) => {
  //       //   setInterval(() => {
  //       //     observer.next(this.usersData);
  //       //     observer.complete();
  //       //   }, 1000);
  //       //   return {
  //       //     unsubscribe(): void {
  //       //       console.log('unsubscribe');
  //       //     },
  //       //   };
  //       // });
  //       // customeObservable.subscribe({
  //       //   next(res: any) {
  //       //     console.log('res :>> ', res);
  //       //     this.dataStore = res;
  //       //   },
  //       //   complete() {
  //       //     console.log('Finished sequence');
  //       //   },
  //       // });
  //       // console.log('this.dataStore :>> ', this.dataStore);
  //     },
  //     (err) => alert(err.message)
  //   ))
  // }
  addUser(): Observable<any>  {
    let details = {
      id: +this.usersData.length + 1,
      ...this.userDetails.value,
    };
    return of(this.httpClientService.addUser(details).subscribe(
      (res) => {
        if (res) {
          this.usersData.push(res);
        }
      }
    ))
  }
  // addUser() {
  //  return  if (this.userDetails.invalid) {
  //     this.submitted = true;
  //     return;
  //   } else {
  //     // if (this.editId) {
  //     //   let editDteails = (this.usersData[this.detailsId] = {
  //     //     id: this.editId,
  //     //     ...this.userDetails.value,
  //     //   });

  //     //   this.httpClientService.editUser(editDteails, this.editId).subscribe(
  //     //     (res) => (
  //     //       (this.usersData[this.editId] = res),
  //     //       alert('Update Record Successfully !')
  //     //     ),
  //     //     (err) => alert(err.Message)
  //     //   );
  //     //   this.toggle = false;
  //     //   this.editId = 0;
  //     //   this.submitted = false;
  //     // } else {
  //     let details = {
  //       id: +this.usersData.length + 1,
  //       ...this.userDetails.value,
  //     };

  //     this.httpClientService.addUser(details).subscribe(
  //       (res) => {
  //         if (res) {
  //           this.usersData.push(res);
  //           alert('Add Record Successfully !');
  //         }
  //       },
  //       (err) => alert(err.Message)
  //     );
  //     this.submitted = false;
  //   }
  //   // }
  //   this.userDetails.reset();
  // }

  handleDelete(index: number, detail: User) {
    this.deleteIndex = index;
    this.getUser = detail;
  }

  deleted() {
    this.httpClientService.deleteUser(this.deleteIndex).subscribe(
      () => {
        this.usersData.splice(this.deleteIndex, 1),
          alert('Your Record has been deleted.. ');
      },
      (err) => alert(err.Message)
    );
  }

  handleEdit(details: any, index: number) {
    this.userDetails.patchValue(details);
    this.editId = details.id;
    if (details.invalid) {
      this.submitted = true;
    }
    this.detailsId = index;
    this.toggle = true;
  }

  handlePatch(details: any, index: number) {
    this.userDetails.patchValue(details);
    this.patchId = details.id;
    this.patchDetailsId = index;
  }

  blockCharacter(e: any) {
    var x = e.which || e.keycode;
    if (x >= 42 && x <= 57) return true;
    else return false;
  }
}
