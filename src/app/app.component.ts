import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageEnum } from 'c:/Users/USER/Desktop/translate/src/app/enums/language.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngx-translate';
  languageEnum = LanguageEnum;
  selectedLanguage: LanguageEnum = LanguageEnum.English;

  constructor(public translate: TranslateService) {}

  changeLanguage(language: LanguageEnum): void {
    this.translate.use(language);
    this.selectedLanguage = language;
  }
}
