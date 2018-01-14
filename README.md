# wxapp-storage

小程序请求

## Usage

```js
import storage from 'wxapp-storage';

// 仅为示例，并非真实的接口地址
storage.set('key', { a: 1 })
  .then(() => {
    console.log(storage.get('key')); // { a: 1 }
  });
```
