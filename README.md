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
