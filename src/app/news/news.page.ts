import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
	public news = [];

  constructor() { }

  ngOnInit() {
		this.news = [
			{
				'img': 'https://catracalivre.com.br/wp-content/uploads/2019/09/the-nature-conservancy-paisagem3-1.jpg',
				'title': 'Título da notícia',
				'subtitle': 'Subtítulo da notícia',
				'description': 'Ver mais detalhes.'
			}
		]
  }
}
