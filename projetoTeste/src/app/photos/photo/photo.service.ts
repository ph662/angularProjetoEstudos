import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    //Se o PhotoService acessa a API, ele precisa 
    //do constructor injetando o httpClient
    constructor(private http: HttpClient) { }

    listFromUser(userName: string) {
        return this.http
            .get<Object[]>(API + '/' + userName + '/photos') //aqui ainda n faz request
    }

}