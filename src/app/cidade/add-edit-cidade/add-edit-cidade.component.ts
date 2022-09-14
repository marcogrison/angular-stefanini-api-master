import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StefaniniApiService } from 'src/app/stefanini-api.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-edit-cidade',
  templateUrl: './add-edit-cidade.component.html',
  styleUrls: ['./add-edit-cidade.component.css']
})
export class AddEditCidadeComponent implements OnInit {

  cidadeList$!: Observable<any[]>;
  cidadeList: any=[];

  constructor(private service: StefaniniApiService, private toastr: ToastrService) { }

  @Input() cidade: any;
  id: number = 0;
  nome: string = "";
  uf: string = "";

  ngOnInit(): void {
    this.id = this.cidade.id;
    this.nome = this.cidade.nome;
    this.uf = this.cidade.uf;
  }

  addCidade(){ 
    var cidade = { 
      nome: this.nome,
      uf: this.uf,
    }

    this.service.addCidade(cidade).subscribe(res => { 
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){ 
        closeModalBtn.click();
      }

      this.toastr.success('Cidade adicionada com sucesso!', 'Sucesso');
    });
  }

  updateCidade() { 
    var cidade = { 
      id: this.id,
      nome: this.nome,
      uf: this.uf,
    }

    var id:number = this.id;

    this.service.updateCidade(id,cidade).subscribe(res => { 
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){ 
        closeModalBtn.click();
      }

      this.toastr.success('Cidade alterada com sucesso!', 'Sucesso');
    });
  }
}
