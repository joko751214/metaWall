import{f as s}from"./index.069599b2.js";import{s as a}from"./request.06e4783a.js";const r={set(t,e){window.localStorage.setItem(t,JSON.stringify(e))},get(t){const e=window.localStorage.getItem(t);return JSON.parse(e)},remove(t){window.localStorage.removeItem(t)},clear(){window.localStorage.clear()}};function n(t){return a({url:"/users",method:"get",params:t})}const c=s({id:"user",state:()=>({token:r.get("token")||"6276532b78634221c137502d",name:"",photo:""}),actions:{async getUsersData(){const t=await n({token:this.token}),{data:e,status:o}=t.data;o===200&&(this.name=e.name,this.photo=e.photo)}}}),m=()=>({user:c()});export{m as u};