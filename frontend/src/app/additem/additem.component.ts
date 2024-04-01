import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent {


 addItemGroup= new FormGroup({
  name:new FormControl(),
  price:new FormControl(),
  cooktime:new FormControl(),
  tag:new FormControl()
 })

 constructor(private http:HttpClient){
  
 }
 onSubmit(){
  const formData = this.addItemGroup.value;
  this.http.post("http://localhost:5000/food/add-food",formData).subscribe((resultData: any )=>{
    console.log(resultData);
    alert("Food added successfully");
    this.addItemGroup.reset();
  })
 }
}


