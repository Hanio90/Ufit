import { Component, OnInit } from '@angular/core';
import { PectoralService } from '../Services/pectoral.service';
import { Exercise } from '../models/exercise';

@Component({
  selector: 'app-chest',
  templateUrl: './chest.component.html',
  styleUrls: ['./chest.component.css']
})
export class ChestComponent implements OnInit {

  exercises: [];

  constructor(private service: PectoralService) { }

  ngOnInit() {
    this.service.getExercises().subscribe(exercises => {
      console.log(exercises);
    });
  }


}
