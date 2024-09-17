import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
//import { FooService } from 'shell/FooService';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //providers: [FooService],
})
export class AppComponent {
  title = 'external-mfe';
  //fooService = inject(FooService);

  changeData(): void {
    //this.fooService.setData('JuMAAAAnjIIIIIIii')
    console.log('>>>> from external-mfe')
  }
}
