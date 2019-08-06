import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactFormModel } from '../models/contactForm.model';

@Injectable({
    providedIn: 'root'
})

export class EmailService {
    constructor(private httpClient: HttpClient) {}

    public post(data: ContactFormModel) {
        return this.httpClient.post('http://localhost:5000/v1/SendMail', data);
    }
}