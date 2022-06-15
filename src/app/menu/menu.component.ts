import { Component, OnInit } from '@angular/core';
import { This } from '../compartida/This';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  th : This[] = [
    {id: '0', categoria: 'a', precio: 3, nombre: 'as', label: 's', img: './../assets/angular.png'},
    {id: '1', categoria: 'c', precio: 45, nombre: 'assss', label: 's', img: './../assets/angular2.webp'},
    {id: '2', categoria: 'd', precio: 50, nombre: 'asss', label: 's', img: './../assets/angular3.jpg'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
