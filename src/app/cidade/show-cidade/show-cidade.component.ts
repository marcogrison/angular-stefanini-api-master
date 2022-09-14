import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StefaniniApiService } from 'src/app/stefanini-api.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-show-cidade',
  templateUrl: './show-cidade.component.html',
  styleUrls: ['./show-cidade.component.css']
})
export class ShowCidadeComponent implements OnInit {

  cidadeList$!: Observable<any[]>;
  cidadeList: any=[];

  cidadeMap:Map<number, string> = new Map();
  ufMap:Map<number, string> = new Map();

  constructor(private service:StefaniniApiService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cidadeList$ = this.service.getCidadeList();
  }

  // Variáveis
  modalTitle: string = '';
  activateAddCidade: boolean = false;
  cidade: any;

  modalAddCidade() { 
    this.cidade = { 
      id: 0,
      nome: null,
      uf: null,
      id_Cidade: null,
      idade: 0
    }
    this.modalTitle = "Adicionar Cidade";
    this.activateAddCidade = true;
  }

  modalEditCidade(item: any) { 
    this.cidade = item;
    this.modalTitle = "Editar Cidade";
    this.activateAddCidade = true;
  }

  modalClose() { 
    this.activateAddCidade = false;
    this.cidadeList$ = this.service.getCidadeList();
  }

  deleteCidade(item:any) { 
    if(confirm(`Tem certeza que deseja deletar a cidade ${item.nome} ?`)) { 
        this.service.deleteCidade(item.id).subscribe(res => { 
          var closeModalBtn = document.getElementById('add-edit-modal-close');
          if(closeModalBtn){ 
            closeModalBtn.click();
          }
    
          this.toastr.success('Cidade deletada com sucesso!', 'Sucesso');
          this.cidadeList$ = this.service.getCidadeList();
        })
      }
    }

}
