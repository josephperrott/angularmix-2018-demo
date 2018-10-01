import { Component } from '@angular/core';
import {CdkDragDrop, transferArrayItem, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: string[] = [
    'Late Morning Snoozle',
    'Check Front Door for Intruders',
    'Afternoon Snoozle',
    'Greet Human upon Return',
    'Play Fetch',
    'Find Crunchiest Leaf'
  ]
  
  completed: string[] = [
    'Morning Snoozle',
    'Guard the Skittle Under the Fridge',
    'Mid-Morning Zoomies',
    'Bark at the Window',
  ]

  /** Moves a task to the end of the TODO list from the Completed List */
  moveToTodo(idx: number) {
    transferArrayItem(this.completed, this.todos, idx, this.todos.length);
  }

  /** Moves a task to the end of the Completed list from the TODO List */
  moveToCompleted(idx: number) {
    transferArrayItem(this.todos, this.completed, idx, this.completed.length);
  }

  onDrop($event: CdkDragDrop<string[]>) {
    if ($event.container === $event.previousContainer) {
      moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex);
    } else {
      transferArrayItem($event.previousContainer.data, $event.container.data, $event.previousIndex, $event.currentIndex);
    }
  }
}
