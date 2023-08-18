let doe=(n,...a)=>{
    let
        state=0,
        p={
            function:f=>f(n),
            number(n){state=n},
            object(o){
                let array=a=>o.map(transform)
                if(o instanceof Array)
                    array()
                else if(o instanceof Node)
                    n[state?'removeChild':'appendChild'](o)
                else if(('length' in o)||o[Symbol.iterator]){
                    o=Array.from(o)
                    array()
                }else if(state)
                    Object.entries(o).map(([a,b])=>n.setAttribute(a,b))
                else
                    Object.assign(n,o)
            },
            string(s){n.appendChild(document.createTextNode(s))},
        }
    transform(a)
    return n
    function transform(t){
        for(let q;q=p[typeof t];t=q(t));
    }
}
let method={
    html:(...a)=>doe(document.documentElement,...a),
    head:(...a)=>doe(document.head,...a),
    body:(...a)=>doe(document.body,...a),
}
export default new Proxy(doe,{
    get:(t,p)=>method[p]||doe.bind(0,document.createElement(p))
})
