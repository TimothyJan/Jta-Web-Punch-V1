import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-comp',
  templateUrl: './input-comp.component.html',
  styleUrls: ['./input-comp.component.scss']
})
export class InputCompComponent implements OnInit {
  IDNumber = '';
  CardNumber = '';
  isAuthenticated = false;
  errorMessage = "";
  statusMessage = "";
  usernameDisplay = "";
  /* Dummy Info */
  user = {
    ID: "201",
    CardNumber: "201",
    username: "MICHELLE PETERSON"
  };

  constructor() { }

  ngOnInit(): void {
    console.log("Web App is working!");
  }

  onEnter(): void {
    this.IDNumber = (<HTMLInputElement>document.getElementById("ID-Number")).value;
    this.CardNumber = (<HTMLInputElement>document.getElementById("Card-Number")).value;
    // Check Database if ID/Card# exists.
    if (this.IDNumber === this.user.ID && this.CardNumber === this.user.CardNumber) {
      console.log("ID: ", this.IDNumber);
      console.log("CardNumber: ", this.CardNumber);
      // If ID/Card# exists allow punching in and out
      this.isAuthenticated = true;
      this.usernameDisplay = this.user.username;
      this.errorMessage = "";
    }
    else {
      console.log("Invalid ID or Card #!");
      this.IDNumber = "";
      this.CardNumber = "";
      this.errorMessage = "The ID or Card # you entered is incorrect";
    }
  }

  onCancel(): void {
    console.log("Cancel clicked!");
    this.IDNumber = "";
    this.CardNumber = "";
  }

  onIn(): void {
    this.statusMessage = "In clicked!";
    console.log("In clicked!");
  }
  onOut(): void {
    this.statusMessage = "Out clicked!";
    console.log("Out clicked!");
  }

  onViewLastPunch(): void {
    this.statusMessage = "View Last Punch clicked!";
    console.log("ViewLastPunch clicked!");
  }

  onViewTotalHour(): void {
    this.statusMessage = "View Total Hour clicked!!";
    console.log("ViewTotalHour clicked!");
  }

  onCompanyChange(): void {
    this.statusMessage = "Company Change clicked!!";
    console.log("CompanyChange clicked!");
  }

  onBranchChange(): void {
    this.statusMessage = "Branch Change clicked!";
    console.log("BranchChange clicked!");
  }

  onDeptChange(): void {
    this.statusMessage = "Dept Change clicked!";
    console.log("DeptChange clicked!");
  }

  onTip(): void {
    this.statusMessage = "Tip clicked!";
    console.log("Tip clicked!");
  }

}
