class p{static async perform(t,a,e,n){await this[t.action]?.(t,a,e,n)}static async set_widget(t,a,e,n){const r=t.args.element,s=await _(t,a,e,n),m=await crs.process.getValue(t.args.context,a,e,n)||e?.parameters?.bId;await crs.binding.events.emitter.postMessage(r,{context:m,html:s})}static async clear_widget(t,a,e,n){const r=t.args.element;if(await crs.binding.events.emitter.postMessage(r,{context:null,html:""}),e?.bindable==!0){let s=crs.binding.data.getContext(e.parameters.bId);delete s.pass,delete s.fail}}static async create_inflation_template(t,a,e,n){const r=await crs.process.getValue(t.args.template_id,a,e,n),s=await crs.process.getValue(t.args.source,a,e,n),m=await crs.process.getValue(t.args.tag_name,a,e,n),o=await crs.process.getValue(t.args.wrapper,a,e,n),d=await crs.process.getValue(t.args.ctx,a,e,n),u=Object.keys(s),i=document.createElement("template");let g=i;if(o!=null){const c=await crs.call("dom","create_element",o,a,e,n);i.content.appendChild(c),g=c}for(let c of u){let f=s[c];f.tag_name=m;let w=await crs.call("dom","create_element",f,a,e,n);w.textContent=["${",c,"}"].join(""),g.content!=null?g.content.appendChild(w):g.appendChild(w)}await crs.binding.inflation.manager.register(r,i,d||"context")}static async elements_from_template(t,a,e,n){const r=await crs.process.getValue(t.args.template_id,a,e,n),s=await crs.process.getValue(t.args.template,a,e,n),m=await crs.process.getValue(t.args.data,a,e,n),o=await crs.process.getValue(t.args.remove_template,a,e,n),d=await crs.process.getValue(t.args.recycle,a,e,n),u=await crs.process.getValue(t.args.row_index,a,e,n);let i=await crs.process.getValue(t.args.parent,a,e,n);i=await crs.dom.get_element(i,a,e,n),s!=null&&await b(s,r);let g=null;i!=null&&(d!=!1&&i.childElementCount>0?g=i.children:i.innerHTML="");const c=await crs.binding.inflation.manager.get(r,m,g,u||0);return c!=null&&i?.appendChild(c),o==!0&&await crs.binding.inflation.manager.unregister(r),c}static async update_cells(t,a,e,n){return this.elements_from_template(t,a,e,n)}}async function _(l,t){if(l.args.url.indexOf("$fn")!=-1){const a=l.args.url.replace("$fn.",""),e=await t[a](l.args),n=document.createElement("template"),r=l.args.html.split(".")[1];return n.innerHTML=e,crs.binding.templates.add(r,n),e}if(l.args.html.indexOf("$template")==0){const a=l.args.html.split(".")[1];return await crs.binding.templates.get(a,l.args.url)}}async function b(l,t,a){let e;l instanceof HTMLTemplateElement?e=l:e=document.querySelector(l),await crs.binding.inflation.manager.register(t,e)}crs.intent.dom_binding=p;export{p as DomBindingActions};