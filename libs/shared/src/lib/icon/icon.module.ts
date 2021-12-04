import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fontAwesomeBrandsIcons } from './icons.font-awesome-brands';
import { fontAwesomeRegularIcons } from './icons.font-awesome-regular';
import { fontAwesomeSolidIcons } from './icons.font-awesome-solid';

@NgModule({
  exports : [FontAwesomeModule]
})
export class IconModule {
  constructor(private faIconLib : FaIconLibrary){
      faIconLib.addIconPacks(
        fontAwesomeBrandsIcons,
        fontAwesomeRegularIcons,
        fontAwesomeSolidIcons
      )
  }
 }
