# 设置开发环境

1. 安装 `node.js` 和 `npm`, 建议使用8.9.x以上版本。
2. 全局安装 `Angular CLI` 。

```
npm install -g @angular/cli
```

# 创建新项目

```
ng new my-app
```

# 启动开发服务器

```
cd my-app
ng serve --open   /  ng serve -o
```


# chap01-知识点

## 插值表达式

```
<h1>{{title}}</h1>
```

## 多行模版字符串

```
template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div><label>name: </label>{{hero.name}}</div>
    <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    `,
```

## 双向绑定

需要在 `AppModule`类中导入 `FormsModule`

```
<input [(ngModel)]="hero.name" placeholder="name">
```

# chap02-知识点

## ngFor 显示列表

```
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
```

## ngIf 控制显示隐藏

```
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </div>
    </div>
```

## 添加点击事件

```
    <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
```

## 动态给列表添加样式

```
    <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
```

# chap03-知识点

## @Input 输入属性

1. 父组件

```
<hero-detail [hero]="selectedHero"></hero-detail>

```
2. 子组件

```
@Component({
  selector: 'hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
```

# chap04-知识点

## 定义服务

```
@Injectable()
export class HeroService {
  getHeroes(): void {} // stub
}
```

## 注入服务

```
@Component({
  selector: 'app-root',
  template: `
  `],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  constructor(private heroService: HeroService) {
  }
}
```

## ngOnInit

```
export class AppComponent implements OnInit {
  ngOnInit() {
    this.getHeroes();
  }
}
```

## Promise

```
  getHeroesAsync(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
```

```
export class AppComponent implements OnInit {
  heroes: Hero[];
  getHeroes(): void {
    // Promise
    this.heroService.getHeroesAsync().then(heroes => {
      this.heroes = heroes;
    });
  }
}
```

# chap05-知识点

## 路由

### 配置路由

```
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

```

### 路由重定向

```
{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},
```

### 路由出口(Outlet)

通常把`<router-outlet>`标签添加到模板的底部。 `RouterOutlet`是由`RouterModule`提供的指令之一。 当我们在应用中导航时，路由器就把激活的组件显示在`<router-outlet>`里面。

```
<h1> {{title}}</h1>
<nav>
  <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
  <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
</nav>
<router-outlet></router-outlet>
// 这里是 导航内容现实的地方
```

当导航到某个界面时，会把导航的组件显示在 `<router-outlet></router-outlet>` 标签下面。

### 路由器连接

1. 指令

```
// 不带参数
<a routerLink="/dashboard">Dashboard</a>
// 带参数
<a *ngFor="let hero of heroes" class="col-1-4" [routerLink]="['/detail', hero.id]">
    <div class="module hero">
      <h4>{{hero.name}}</h4>
    </div>
  </a>
```

2. 代码

```
import { Router } from '@angular/router';
...
gotoDetail() {
  this.router.navigate(['/detail', this.selectedHero.id]);
}
```

### routerLinkActive

`Angular`路由器提供了`routerLinkActive`指令，我们可以用它来为匹配了活动路由的 HTML 导航元素自动添加一个 CSS 类。

```
<nav>
  <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
  <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
</nav>
```

```
nav a.active {
  color: #039be5;
}
```

## 管道

管道能干预插值表达式绑定的过程。例如: 格式化字符串、金额、日期和其它显示数据。

```
{{selectedHero.name | uppercase}} is my hero
```