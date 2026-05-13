import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  public produtos = [
    {
      nome: 'Smartphone Pro Max',
      preco: 5500.00,
      categoria: 'Eletrônicos',
      imagem: 'https://via.placeholder.com/150',
      descricao: 'Tela de 6.7 polegadas, 256GB de memória.'
    },
    {
      nome: 'Notebook Gamer',
      preco: 8200.50,
      categoria: 'Informática',
      imagem: 'https://via.placeholder.com/150',
      descricao: 'Processador i7, 16GB RAM, RTX 3060.'
    },
    {
      nome: 'Fone Bluetooth Noise Cancelling',
      preco: 1200.00,
      categoria: 'Acessórios',
      imagem: 'https://via.placeholder.com/150',
      descricao: 'Cancelamento de ruído ativo e 30h de bateria.'
    }
  ];

  public produtoSelecionado: any = null;

  selecionar(produto: any) {
    this.produtoSelecionado = produto;
  }
}