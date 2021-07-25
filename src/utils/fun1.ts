function enumize<K extends string>(...args: K[]): { [P in K]: P } {
    const ret = {} as { [P in K]: P };
    args.forEach((k) => {
      ret[k] = k;
    });
    return ret;
}

let p = enumize("zhangsan","lisi","wangwu");

type ApiName = typeof p;

function useRequest<T extends keyof ApiName>(api:T,params?:String){
  return api;
}

let key = "sss";
useRequest(key);