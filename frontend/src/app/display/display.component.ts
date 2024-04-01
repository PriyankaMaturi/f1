import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
export interface CollectionItem{
  name:string;
  price:number;
  cooktime:number;
  tag:string
  } 
  
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})


export class DisplayComponent {
  displayedColumns : string[]=['name','price','cooktime','tag','actions'];
dataSource: CollectionItem[]=[];
flag=false;
itemid:any;
addItemGroup:any;
constructor(private http:HttpClient, private router: Router, public fb:FormBuilder){
  this.addItemGroup=this.fb.group({
    name:[''],
    price:[''],
    cooktime:[''],
    tag:['']
  })
}

ngOnInit(){
  this.fetchDataFromMongoDB();
}

fetchDataFromMongoDB(){
  this.http.get("http://localhost:5000/food/allfood").subscribe(
    (data: any) =>{
      this.dataSource=data;
    },
    error =>{
      console.error('error fetching data from mongodb',error);
    }
  )
}
deleteItem(itemId:string){
  this.http.delete(`http://localhost:5000/food/delete/${itemId}`).subscribe(
    ()=>{
      console.log('Item deleted succesfully');
      this.fetchDataFromMongoDB();
    },
    error =>{
console.error('error deleting data from mongodb',error);
    }
  )
}

editItem(item:any){
  this.flag=true;
  this.addItemGroup.patchValue({ 
    name:item.name,
    price:item.price,
    cooktime:item.cooktime,
    tag:item.tag
  })
  this.flag=true;
  this.itemid=item._id;
 }
 onSubmit(){
 // http://localhost:5000/food/update/6603b8098182976fe070c32f
this.http.put(`http://localhost:5000/food/update/${this.itemid}`,this.addItemGroup.value).subscribe(
  ()=>{
    console.log('Item updated succesfully');
    
  },
  error =>{
console.error('error updating data from mongodb',error);
  }
)
this.flag=false;
console.log('onsubmit works')
 }
}
