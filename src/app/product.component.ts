import { Component } from '@angular/core';
import {ProductRepository} from './repository.model';
import {Product} from './product.model';import { getLocaleExtraDayPeriodRules, I18nPluralPipe } from '@angular/common';
;

@Component({
    selector:"app",
    templateUrl:"product.component.html",
   
})

export class ProductComponent {
    repository: ProductRepository = new ProductRepository();

    product: Product = this.repository.getProductById(1);
    disable:true;

    getClasses(id:number):string{
        let product = this.repository.getProductById(id);
        return (product.price>1000?"bg-info" : "bg-secondary")+ " m-2 p-2"; //ezer diğer stylleri
    }

    
    getClassMap(id:number): Object{
        let product =this.repository.getProductById(id);
        return{
            "bg-info":product.price<=1000,
            "bg-secondary": product.price>1000,
            "text-center text-white":product.name=="Samsung S6"
        }

    }

    color:string="red";
    fontSize:string="45px";
    margin:string=this.repository.getProductById(1).price<=1000? "10px":"20px";  //gibi şartlamalarda yapılabilir yada topluca aktarmakistersek eğer.

    getStyles(id:number){
        let product=this.repository.getProductById(id);
        return{
            fontSize:"15px",
            color:product.price<=1000?"green":"silver"
            //şart olmasına gerek yok aslında direk atanabilir olay.
        }
    }

    getStyles2(){
       
        return{
            fontSize:"15px",
            color:"red"
        
        }
    }

    title:string;
    
    onSubmit($event){
        this.title="clicked";

        //sınırlar birinine girdiği için biribirinden uzaklaşması için sinirların:
        //$event.stopPropagation() deriz.

        

    }

   
    divClick(){
        this.color="blue";
    }


    tus:string;
    value:string;
    onKeyUp($event){
        if($event.keyCode==13)
        {
            this.tus="enter tuşuna bastınız:"
        }
        else if($event.keyCode==27)
        {
            this.tus="esc ye bastınız";
        }

        this.value=$event.target.value; //yazdıgımız veriyi böyle tutarız
    }

    sadeceEnter(){
        this.tus="entere basıldı kanks."
    }



    email="email@halo";

    onKeyUp1(){
        console.log(this.email);
    }


    //Pipelar için


    today:number=Date.now();
    tittle:string="angular pipes";
    students=21536;
    price:number=395.99;
    completed:number=0.26;

    text:string="lorem ipsum dolor sit amet kod vbnre deneme lazım";


}