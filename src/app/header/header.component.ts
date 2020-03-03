import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  theme = 'light';
  flag = false;
  theme3 = 'light';
  linkDom: HTMLLinkElement;
  ngOnInit() {
  }
  /**
   * sessionStorage 存储主题的名称
   * theme
   */
  saveTheme(theme: string): void {
    sessionStorage.setItem(`theme`, theme);
  }
  /**
   * 获取主题名称并设置到body
   */
  getTheme(): void {
    let theme = sessionStorage.getItem(`theme`);
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

  /**
   * 方式二，根据实际业务情况更改
   */
  changeTheme1(): void {
    const body = document.getElementsByTagName('body')[0];
    let resultTheme;
    if (!this.flag) {
      resultTheme = JSON.parse(sessionStorage.getItem('change'));
    } else {
      resultTheme = JSON.parse(sessionStorage.getItem('base'));
    }
    this.flag = !this.flag;
    console.log(resultTheme);
    body.style.setProperty('--body-color', resultTheme.bodyColor);
    body.style.setProperty('--child-color', resultTheme.childColor);
  }

  /**
   * 方式三，动态引入css
   */
  changeTheme2(): void {
    if (!this.linkDom) {
      this.linkDom = document.createElement('link');
      this.linkDom.rel = 'stylesheet';
    }
    if (this.theme3 === 'light') {
      this.linkDom.href = '../../assets/dark-theme.css';
      this.theme3 = 'dark';
    } else {
      this.linkDom.href = '../../assets/light-theme.css';
      this.theme3 = 'light';
    }
    document.head.appendChild(this.linkDom);
  }
}
