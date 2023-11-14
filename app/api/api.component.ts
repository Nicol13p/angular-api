import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit{
  data : any[]= [];
  constructor (private apiService: ApiService){}
  ngOnInit(): void {
    this.mostrarDatos();
  }
  mostrarDatos(){
    this.apiService.getData().subscribe( datos => {
    this.data = datos;
    console.log(this.data);
    })
  }
}