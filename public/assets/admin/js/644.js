"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[644],{176:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(645),a=n.n(o)()((function(e){return e[1]}));a.push([e.id,".ce-block__content,.ce-toolbar__content{max-width:calc(100% - 80px)!important}.cdx-block{max-width:100%!important}.cdx-notifies{z-index:9999}.ct{z-index:2000}",""]);const r=a},644:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var o=n(821),a=["value"];var r={id:"editor"};var i=n(582),l=n.n(i),c=n(919),d=n.n(c),u=n(964),s=n.n(u),p=n(896),h=n.n(p);const v={messages:{ui:{blockTunes:{toggler:{"Click to tune":"Нажмите, чтобы настроить","or drag to move":"или перетащите"}},inlineToolbar:{converter:{"Convert to":"Конвертировать в"}},toolbar:{toolbox:{Add:"Добавить"},Filter:"Фильтр"}},toolNames:{Text:"Параграф",Heading:"Заголовок",List:"Список",Warning:"Примечание",Checklist:"Чеклист",Quote:"Цитата",Code:"Код",Delimiter:"Разделитель","Raw HTML":"HTML-фрагмент",Table:"Таблица",Link:"Ссылка",Marker:"Маркер",Bold:"Полужирный",Italic:"Курсив",InlineCode:"Моноширинный"},tools:{warning:{Title:"Название",Message:"Сообщение"},link:{"Add a link":"Вставьте ссылку"},stub:{"The block can not be displayed correctly.":"Блок не может быть отображен"}},blockTunes:{delete:{Delete:"Удалить"},moveUp:{"Move up":"Переместить вверх"},moveDown:{"Move down":"Переместить вниз"}}}},b=function(e){var t="";return e.forEach((function(e){f.hasOwnProperty(e.type)?t+=f[e.type](e):console.log(e)})),t};var f={HeaderJS:function(e){return"<h".concat(e.data.level,">").concat(e.data.text,"</h").concat(e.data.level,">")},paragraph:function(e){return"<p>".concat(e.data.text,"</p>")},ListJS:function(e){var t=e.data.items.reduce((function(e,t){return e+"<li>".concat(t,"</li>")}),"");return"ordered"==e.data.style?"<ol>".concat(t,"</ol>"):"<ul>".concat(t,"</ul>")},TableJS:function(e){var t=e.data.content.reduce((function(t,n,o){var a=n.reduce((function(t,n){return e.data.withHeadings&&0==o?t+"<th>".concat(n,"</th>"):t+"<td>".concat(n,"</td>")}),"");return t+"<tr>".concat(a,"</tr>")}),"");return"<table><tbody>".concat(t,"</tbody></table>")}};const m={props:{initialValue:{type:String},disabled:{type:Boolean,default:!1}},emits:["change"],data:function(){return{editor:void 0}},methods:{change:function(e,t){var n=this;this.editor.save().then((function(e){n.$emit("change",{outputData:e,html:b(e.blocks)})}))}},beforeMount:function(){var e=this;this.editor=new(l())({holder:"editor",tools:{HeaderJS:{class:d(),inlineToolbar:!0},ListJS:{class:s(),inlineToolbar:!0,config:{defaultStyle:"unordered"}},TableJS:{class:h(),inlineToolbar:!0},paragraph:{preserveBlank:!0,inlineToolbar:!0}},onReady:function(){var t,n=null===(t=JSON.parse(e.initialValue||"{}"))||void 0===t?void 0:t.outputData;n&&(e.editor.render(n),e.$emit("change",{outputData:n,html:b(n.blocks)}))},onChange:this.change,placeholder:"Начните вводить текст здесь",i18n:v})}};var g=n(379),k=n.n(g),y=n(176),T={insert:"head",singleton:!1};k()(y.Z,T);y.Z.locals;var x=n(744);const w={props:{disabled:{type:Boolean},data:{type:Object}},emits:["update","refreshPreview"],components:{editor:(0,x.Z)(m,[["render",function(e,t,n,a,i,l){return(0,o.openBlock)(),(0,o.createElementBlock)("div",r)}]])},data:function(){return{content:{}}},methods:{updateText:function(e){this.content=e}}},C=(0,x.Z)(w,[["render",function(e,t,n,r,i,l){var c,d=(0,o.resolveComponent)("editor");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(d,{"initial-value":null===(c=n.data)||void 0===c?void 0:c.content,disabled:n.disabled,onChange:l.updateText},null,8,["initial-value","disabled","onChange"]),(0,o.createElementVNode)("textarea",{name:"content",value:JSON.stringify(i.content),style:{display:"none"}},null,8,a)])}]])}}]);