import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // temporary storing data into session
  getFormData() {
    const formData = sessionStorage.getItem('formData');
    return formData ? JSON.parse(formData) : [];
  }

  addFormData(item: any) {
    const formData: any = this.getFormData();
    if (formData.find((data:any) => JSON.stringify(data.Email) === JSON.stringify(item.Email))) {
      return false;
    } else {
      formData.push(item);
      sessionStorage.setItem('formData', JSON.stringify(formData));
      return true;
    }
  }
}
