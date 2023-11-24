
# Kayısılı Künefe

Bu bir e-commerance projesidir. Projenin amacı next js kullanımı üzerine pratik yapmak ve front end akademisinde öğrendiğimiz yeni yöntemleri pekiştirmektir.
## Demo

https://kayisilikunefe-project.vercel.app/

![Ekran Görüntüsü 1-1](https://github.com/fatihdonmezdev/kayisilikunefe-project/assets/112933979/8e97c9c5-c620-4245-9b61-64a5c839f671)
![Ekran Görüntüsü 2-2](https://github.com/fatihdonmezdev/kayisilikunefe-project/assets/112933979/115fca47-2fb2-4b14-9db9-dc72eb7d3332)

### RTK Örnek Açıklamalar

Bu projede RTK ile gelen 'createSlice' ,'configureStore', 'reducer', 'Provider','useSelector' ve 'useDispatch' özellikleri kullanılır. Şimdi bu özeliklerin kullanım amacı aşşağıdaki gibidir.

#### 1.createSlice:
Redux state yönetimini kolaylaştarak reducer'ların action'larını birleştirebileceğimiz bir alan oluşturur.
Not:Reducer durumları değiştiren eylemeri tanımladığımız yerdir.

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    incrementByAmount(state, action) {
      state.count += action.payload;
    },
  },
});

#### 2.configureStore: 
Redux store (state yönetiminin yapıldığı yer) içinde yer alan yapılandırmaları oluşturur.

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; 

const store = configureStore({
     reducer: rootReducer,
     middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
     });
     
     export default store;
Yukarıdaki kodda ana reducer çağırılır. Eylemleri yapılandırmak için 'getDefaultMiddleware' fonksiyonu kullanılır. Bu özellikleri bir araya configureStore toplar.

#### 3.Provider: 
Redux store'u uygulamanın tüm bileşenlerine erişilebilir kıllar. Aşşağıdaki kodda ana dosya provider ile çerçevelenir ve store çağırılır.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'; // Redux store dosyası

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

#### 4. useSelector ve useDispatch : 
useSelector isminden de anlaşılacağı üzere bir state' seçerken kullanılır. useDispatch önceden atanmış action'ları tetiklemek için kullanılır.

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;

Yukarıdaki kodda useSelector value özelliğini seçer ve count değişkenine atanır. useSelector ise handleDecrement ve handleIncrement fonksiyonları aracılığı ile artıp azalma eylemleirne işlevsellik sağlar.


  
## Kullanılan Teknolojiler

**İstemci:** Next, React, Redux, TailwindCSS

**Sunucu:** Node, 

  



