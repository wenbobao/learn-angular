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