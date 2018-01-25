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

