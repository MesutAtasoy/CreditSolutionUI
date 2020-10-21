import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IPersonalType} from '../../types/personal-type';
import {PersonalService} from '../../services/personal-service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.sass']
})
export class PersonalComponent implements OnInit {
  public isDataSend: boolean = false;
  public oData: Array<IPersonalType>;
  public oInput: IPersonalType = {
    IdentityNumber: null,
    Name: '',
    PhoneNumber: '',
    MonthlyIncome: null,
  };

  public message : String = "";
  constructor(private personalService: PersonalService) {
  }

  ngOnInit(): void {
    
  }

  sendPersonelData() {    
    this.personalService.postPersonalData(this.oInput).subscribe(result => {
      if(result.payload.approved === true){
        this.message = result.payload.creditLimit +  " limitli kredi başvurunuz onaylanmıştır. Güle güle kullanın. Kredi Skorunuz : " + result.payload.creditScore;
      } else {
        this.message = "Kredi Başvurunuz onaylanmamıştır. Kredi Skorunuz : " + result.payload.creditScore;
      }
      this.isDataSend = true;
    }, errorResult=> {
      if(errorResult.error && errorResult.error.Messages)
      {
        this.message = "";
        errorResult.error.Messages.forEach(errorMessage => {
          this.message = this.message + ";" + errorMessage.Message;
        });
      } else {
        this.message = "Bir hata oluştu";
      }
    });
  }
}
