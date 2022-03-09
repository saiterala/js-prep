function Stream() {
    let subscriptions = [];
    
    subscribe = (method) => {
      if(typeof method !== 'function'){
        throw new Error('Invalid method!.');
      }
      
      subscriptions.push(method);
    }
    
    push = (val) => {    
      subscriptions.forEach((method) => {
        method.call(this, val);
      });
    }
    return {
        subscribe, push
    }
  }

const z = Stream();
z.subscribe((value) => console.log(value));
z.subscribe((value) => console.log(value * 2));
z.subscribe((value) => console.log(value * 3));
z.push(2);