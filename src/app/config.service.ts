import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  public appVersion: string = String('V1.0');   // to store the application version
  
  constructor() { }

}