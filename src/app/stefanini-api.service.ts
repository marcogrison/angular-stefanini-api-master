import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StefaniniApiService {

  readonly stefaniniAPIUrl = "https://localhost:7023/api";

  constructor(private http:HttpClient) { }

  //Pessoas
  getPessoaList():Observable<any[]> { 
    return this.http.get<any>(this.stefaniniAPIUrl + '/pessoas');
  }

  addPessoa(data: any) { 
    return this.http.post(this.stefaniniAPIUrl + '/pessoas', data);
  }

  updatePessoa(id: number|string, data: any) { 
    return this.http.put(this.stefaniniAPIUrl + `/pessoas/${id}`, data);
  }

  deletePessoa(id:number|string) { 
    return this.http.delete(this.stefaniniAPIUrl + `/pessoas/${id}`);
  }

  //Cidades
  getCidadeList():Observable<any[]> { 
    return this.http.get<any>(this.stefaniniAPIUrl + '/cidades');
  }

  addCidade(data: any) { 
    return this.http.post(this.stefaniniAPIUrl + '/cidades', data);
  }

  updateCidade(id: number|string, data: any) { 
    return this.http.put(this.stefaniniAPIUrl + `/cidades/${id}`, data);
  }

  deleteCidade(id:number|string) { 
    return this.http.delete(this.stefaniniAPIUrl + `/cidades/${id}`);
  }
}
