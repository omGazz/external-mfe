import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

import { loadRemoteModule } from '@angular-architects/native-federation';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [],
})
export class AppComponent implements OnInit {
  title = 'external-mfe';
  sadlyNotSingletonService: any = null;

  changeData(): void {
    this.sadlyNotSingletonService.setData('JUUuuuuMaaanNNNjiiii');
    console.log(this.sadlyNotSingletonService.fooDataSignal());
    console.log(this.sadlyNotSingletonService);
  }

  async ngOnInit() {
    try {
      console.log('Loading remote module...');
      const module = await loadRemoteModule({
        remoteEntry: 'http://localhost:4200/remoteEntry.json',
        remoteName: 'shell',
        exposedModule: './FooService',
      });
      console.log('Remote module loaded:', module);
      // This is the only way I found to make it work. But it doesn't becouse is a new
      // instance of FooService and not the singleton from the app shell.
      this.sadlyNotSingletonService = new module.FooService();
      console.log('FooService loaded:', this.sadlyNotSingletonService.fooDataSignal());
    } catch (error) {
      console.error('Error loading remote module:', error);
    }
  }
}
