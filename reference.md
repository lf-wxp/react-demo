# React 18 New Features


## createRoot

18 以前
```js
  import ReactDOM from 'react-dom';
  import App from 'App';

  const container = document.getElementById('app');

  ReactDOM.render(<App tab="home" />, container);

  ReactDOM.render(<App tab="profile" />, container);
```

18
```js
  import ReactDOM from 'react-dom';
  const container = document.getElementById('app');

  const root = ReactDOM.createRoot(container);

  root.render(<App tab="home" />);

  root.render(<App tab="profile" />);
```

### 区别
- 写法的区别
- 去掉了render的callback函数, 由于部分的hydration(ReactDOM 复用 ReactDOMServer 服务端渲染的内容时尽可能保留结构，并补充事件绑定等 Client 特有内容的过程)过程和渐进式的SSR。
  ```js
  // before 18
  function App() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement, () => console.log("renderered"));

  //after 18

  function App({ callback }) {
  // Callback will be called when the div is first created.
    return (
      <div ref={callback}>
        <h1>Hello World</h1>
      </div>
    );
  }
  const rootElement = document.getElementById("root");

  const root = ReactDOM.createRoot(rootElement);
  root.render(<App callback={() => console.log("renderered")} />);

  ```

## useId
