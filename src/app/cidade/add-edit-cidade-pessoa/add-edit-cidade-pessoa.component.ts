import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StefaniniApiService } from 'src/app/stefanini-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-cidade-pessoa',
  templateUrl: './add-edit-cidade-pessoa.component.html',
  styleUrls: ['./add-edit-cidade-pessoa.component.css']
})
export class AddEditCidadePessoaComponent implements OnInit {

  pessoaList$!: Observable<any[]>;
  cidadeList$!: Observable<any[]>;
  cidadeList: any=[];

  constructor(private service: StefaniniApiService, private toastr: ToastrService) { }

  @Input() pessoa: any;
  id: number = 0;
  nome: string = "";
  cpf: string = "";
  idade: number = 0;
  id_Cidade!: number;

  ngOnInit(): void {
    this.id = this.pessoa.id;
    this.nome = this.pessoa.nome;
    this.cpf = this.pessoa.cpf;
    this.idade = this.pessoa.idade;
    this.id_Cidade = this.pessoa.id_Cidade; 
    this.cidadeList$ = this.service.getCidadeList();
  }

  addPessoa(){ 
    var pessoa = { 
      nome: this.nome,
      cpf: this.cpf,
      idade: this.idade,
      id_Cidade: this.id_Cidade
    }

    this.service.addPessoa(pessoa).subscribe(res => { 
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){ 
        closeModalBtn.click();
      }

      this.toastr.success('Pessoa adicionada com sucesso!', 'Sucesso');
    });
  }

  updatePessoa() { 
    var pessoa = { 
      id: this.id,
      nome: this.nome,
      cpf: this.cpf,
      idade: this.idade,
      id_Cidade: this.id_Cidade
    }

    var id:number = this.id;

    this.service.updatePessoa(id,pessoa).subscribe(res => { 
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){ 
        closeModalBtn.click();
      }

      this.toastr.success('Pessoa alterada com sucesso!', 'Sucesso');
    });
  }
}
