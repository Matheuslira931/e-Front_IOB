import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ButtonsModule } from './buttons/buttons.module';
import { CheckboxModule } from './checkbox/checkbox.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonsModule
  ],
  exports: [
    ButtonsModule,
    CheckboxModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'always' },
    },
  ],
})
export class SharedModule {}
