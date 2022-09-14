import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StefaniniApiService } from 'src/app/stefanini-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-cidade-pessoa',
  templateUrl: './show-cidade-pessoa.component.html',
  styleUrls: ['./show-cidade-pessoa.component.css'],
})
export class ShowCidadePessoaComponent implements OnInit {
  pessoaList$!: Observable<any[]>;
  cidadeList$!: Observable<any[]>;
  cidadeList: any = [];

  cidadeMap: Map<number, string> = new Map();
  ufMap: Map<number, string> = new Map();

  constructor(private service: StefaniniApiService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.pessoaList$ = this.service.getPessoaList();
    this.cidadeList$ = this.service.getCidadeList();
    this.refreshCidadeMap();
    this.refreshUfMap();
  }
  
  // Variáveis
  modalTitle: string = '';
  activateAddEditCidadePessoaComponent: boolean = false;
  activateAddCidade: boolean = false;
  pessoa: any;
  cidade: any;

  modalAddPessoa() {
    this.pessoa = {
      id: 0,
      nome: null,
      cpf: null,
      id_Cidade: null,
      idade: 0,
    };
    this.modalTitle = 'Adicionar Pessoa';
    this.activateAddEditCidadePessoaComponent = true;
  }

  deletePessoa(item:any) { 
  if(confirm(`Tem certeza que deseja deletar a pessoa ${item.nome} ?`)) { 
      this.service.deletePessoa(item.id).subscribe(res => { 
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if(closeModalBtn){ 
          closeModalBtn.click();
        }
  
        this.toastr.success('Pessoa deletada com sucesso!', 'Sucesso');
        this.pessoaList$ = this.service.getPessoaList();
      })
    }
  }

  modalEditPessoa(item: any) { 
    this.pessoa = item;
    this.modalTitle = "Editar pessoa";
    this.activateAddEditCidadePessoaComponent = true;
  }

  goToCidades() {
    var newloc = "https://localhost:4200/cidades";
    window.location.href = newloc;
  }

  modalClose() {
    this.activateAddEditCidadePessoaComponent = false;
    this.pessoaList$ = this.service.getPessoaList();
  }

  refreshCidadeMap() {
    this.service.getCidadeList().subscribe((data) => {
      this.cidadeList = data;

      for (let i = 0; i < data.length; i++) {
        this.cidadeMap.set(this.cidadeList[i].id, this.cidadeList[i].nome);
      }
    });
  }

  refreshUfMap() {
    this.service.getCidadeList().subscribe((data) => {
      this.cidadeList = data;

      for (let i = 0; i < data.length; i++) {
        this.ufMap.set(this.cidadeList[i].id, this.cidadeList[i].uf);
      }
    });
  }
}
