import { Component, OnInit , AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit , AfterViewInit{
  list = [
    {
      name: 'Account Info',
      img:  "far fa-user-circle",
      link: 'accountinfo'

    },
    {
      name: 'Users',
      img: "fas fa-user-friends",
      link: 'users'
    },
    {
      name: 'Subscription',
      img: "fas fa-address-book",
      link: 'subscription'
    },
    {
      name: 'Billing',
      img: "fas fa-file-invoice",
      link: 'billing'
    },
    {
      name: 'Invoices',
      img: "fas fa-receipt",
      link: 'invoices'
    },
    {
      name: 'GDPR',
      img: "fas fa-shield-virus",
      link: 'cdpr'
    },
  ];


  constructor(
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(){
    document.querySelector('li').classList.add('active')
  }

  onSelectItem(item){
    document.querySelectorAll('li').forEach((i) =>{
      i.classList.remove('active')
    })
    item.classList.add('active')
  }

}
