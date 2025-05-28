import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //provides a collection of things needed by every angular application needs to run (such as directives)

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ],
  bootstrap: [AppComponent], //root component
  imports: [BrowserModule, SharedModule, TasksModule], //registering standalone components in the imports to use in the module (DatePipe is alr in browser module)
})
export class AppModule {}
