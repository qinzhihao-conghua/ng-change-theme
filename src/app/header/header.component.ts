import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  theme = 'light';
  ngOnInit() {
  }
  /**
   * 使用localStorage 存储主题的名称
   * theme
   */
  saveTheme(theme): void {
    localStorage.setItem(`theme`, theme);
  }
  /**
   * 获取主题名称并设置到body
   */
  getTheme(): void {
    let theme = localStorage.getItem(`theme`);
    if (!theme) {
      theme = `dark`;
    }
    const body = document.getElementsByTagName('body')[0];
    body.setAttribute('ds-theme', theme);
    this.theme = theme;
  }
  /**
   * 点击按钮 触发改变主题的方法
   */
  changeTheme(): void {
    const body = document.getElementsByTagName('body')[0];
    if (body.getAttribute(`ds-theme`) === 'dark') {
      this.saveTheme(`light`);
      this.getTheme();
    } else {
      this.saveTheme(`dark`);
      this.getTheme();
    }
  }
}
