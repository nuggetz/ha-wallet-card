const t="ha_wallet",e="sensor.wallet_by_budgetbakers_",s="cash_flow",i="spending",a="spending_by_cardinality",n="last_records",r="credit_utilization",o="standing_orders",l="record_rules",c="categories",d="labels",h="account_",p="balance_",u="add_record",m="update_record",g="delete_record",v="add_transfer",$="manage_budget",f="manage_category",y="manage_account",_="manage_label",b="delete_standing_order",w="delete_record_rule",x="import_history",k={this_year:"This year",this_month:"This month",custom:"Custom period"},A="#F7A81B",C="#4EC3F7",S="#F5433A",I="#8BC34A",E="#5C6BC0",P="#AF52DE",M="#34C759",T="#F5433A",N="#4C8DFF",F="#1f9d4d",R="rgba(52,199,89,.15)",B="#e0362b",D="rgba(245,67,58,.14)",O="#3EC6E0",z="#4C8DFF",U="#1E7A46",L="#3EC6E0",j="#4C8DFF",G="#FF9F0A",W="#FF2E97",H="#C6FF3A",V={housing:A,shopping:C,"food & drinks":S,food:S,"life & entertainment":I,life:I,"communication, pc":E,communication:E,vehicle:P},q={Blue:"#2F6FED",Charcoal:"#4B5563",CoffeeBrown:"#795548",DarkPurple:"#5B2C86",Green:"#34C759",LightBlue:"#4EC3F7",Lime:"#C6FF3A",Orange:"#F7A81B",PineGreen:"#1E7A46",Pink:"#FF2E97",Purple:"#AF52DE",Red:"#F5433A",Stone:"#8D8D93",Turquoise:"#3EC6E0",Wine:"#8E1E3B",Yellow:"#FFD60A"},Y={housing:"mdi:home-variant",shopping:"mdi:shopping","food & drinks":"mdi:silverware-fork-knife",food:"mdi:silverware-fork-knife","life & entertainment":"mdi:party-popper",life:"mdi:party-popper","communication, pc":"mdi:laptop",communication:"mdi:laptop",vehicle:"mdi:car"},K=["cash","debit_card","credit_card","transfer","voucher","mobile_payment","web_payment"],Z=["BUDGET_INTERVAL_WEEK","BUDGET_INTERVAL_MONTH","BUDGET_INTERVAL_YEAR","BUDGET_CUSTOM"],J=["General","Cash","CurrentAccount","SavingAccount","Insurance"],Q=["none","must","need","want"],X=Object.keys(q);function tt(t,e,s,i){var a,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,s,r):a(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}"function"==typeof SuppressedError&&SuppressedError;const et=globalThis,st=et.ShadowRoot&&(void 0===et.ShadyCSS||et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol(),at=new WeakMap;let nt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==it)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(st&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=at.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&at.set(e,t))}return t}toString(){return this.cssText}};const rt=st?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new nt("string"==typeof t?t:t+"",void 0,it))(e)})(t):t,{is:ot,defineProperty:lt,getOwnPropertyDescriptor:ct,getOwnPropertyNames:dt,getOwnPropertySymbols:ht,getPrototypeOf:pt}=Object,ut=globalThis,mt=ut.trustedTypes,gt=mt?mt.emptyScript:"",vt=ut.reactiveElementPolyfillSupport,$t=(t,e)=>t,ft={toAttribute(t,e){switch(e){case Boolean:t=t?gt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},yt=(t,e)=>!ot(t,e),_t={attribute:!0,type:String,converter:ft,reflect:!1,useDefault:!1,hasChanged:yt};Symbol.metadata??=Symbol("metadata"),ut.litPropertyMetadata??=new WeakMap;let bt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_t){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&lt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:a}=ct(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);a?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_t}static _$Ei(){if(this.hasOwnProperty($t("elementProperties")))return;const t=pt(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($t("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($t("properties"))){const t=this.properties,e=[...dt(t),...ht(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(rt(t))}else void 0!==t&&e.push(rt(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(st)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of e){const e=document.createElement("style"),i=et.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=s.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const a=(void 0!==s.converter?.toAttribute?s.converter:ft).toAttribute(e,s.type);this._$Em=t,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:ft;this._$Em=i;const n=a.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s,i=!1,a){if(void 0!==t){const n=this.constructor;if(!1===i&&(a=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??yt)(a,e)||s.useDefault&&s.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:a},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==a||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};bt.elementStyles=[],bt.shadowRootOptions={mode:"open"},bt[$t("elementProperties")]=new Map,bt[$t("finalized")]=new Map,vt?.({ReactiveElement:bt}),(ut.reactiveElementVersions??=[]).push("2.1.2");const wt=globalThis,xt=t=>t,kt=wt.trustedTypes,At=kt?kt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ct="$lit$",St=`lit$${Math.random().toFixed(9).slice(2)}$`,It="?"+St,Et=`<${It}>`,Pt=document,Mt=()=>Pt.createComment(""),Tt=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Nt=Array.isArray,Ft="[ \t\n\f\r]",Rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bt=/-->/g,Dt=/>/g,Ot=RegExp(`>|${Ft}(?:([^\\s"'>=/]+)(${Ft}*=${Ft}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),zt=/'/g,Ut=/"/g,Lt=/^(?:script|style|textarea|title)$/i,jt=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),Gt=jt(1),Wt=jt(2),Ht=Symbol.for("lit-noChange"),Vt=Symbol.for("lit-nothing"),qt=new WeakMap,Yt=Pt.createTreeWalker(Pt,129);function Kt(t,e){if(!Nt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==At?At.createHTML(e):e}const Zt=(t,e)=>{const s=t.length-1,i=[];let a,n=2===e?"<svg>":3===e?"<math>":"",r=Rt;for(let e=0;e<s;e++){const s=t[e];let o,l,c=-1,d=0;for(;d<s.length&&(r.lastIndex=d,l=r.exec(s),null!==l);)d=r.lastIndex,r===Rt?"!--"===l[1]?r=Bt:void 0!==l[1]?r=Dt:void 0!==l[2]?(Lt.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=Ot):void 0!==l[3]&&(r=Ot):r===Ot?">"===l[0]?(r=a??Rt,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,o=l[1],r=void 0===l[3]?Ot:'"'===l[3]?Ut:zt):r===Ut||r===zt?r=Ot:r===Bt||r===Dt?r=Rt:(r=Ot,a=void 0);const h=r===Ot&&t[e+1].startsWith("/>")?" ":"";n+=r===Rt?s+Et:c>=0?(i.push(o),s.slice(0,c)+Ct+s.slice(c)+St+h):s+St+(-2===c?e:h)}return[Kt(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Jt{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let a=0,n=0;const r=t.length-1,o=this.parts,[l,c]=Zt(t,e);if(this.el=Jt.createElement(l,s),Yt.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Yt.nextNode())&&o.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(Ct)){const e=c[n++],s=i.getAttribute(t).split(St),r=/([.?@])?(.*)/.exec(e);o.push({type:1,index:a,name:r[2],strings:s,ctor:"."===r[1]?se:"?"===r[1]?ie:"@"===r[1]?ae:ee}),i.removeAttribute(t)}else t.startsWith(St)&&(o.push({type:6,index:a}),i.removeAttribute(t));if(Lt.test(i.tagName)){const t=i.textContent.split(St),e=t.length-1;if(e>0){i.textContent=kt?kt.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],Mt()),Yt.nextNode(),o.push({type:2,index:++a});i.append(t[e],Mt())}}}else if(8===i.nodeType)if(i.data===It)o.push({type:2,index:a});else{let t=-1;for(;-1!==(t=i.data.indexOf(St,t+1));)o.push({type:7,index:a}),t+=St.length-1}a++}}static createElement(t,e){const s=Pt.createElement("template");return s.innerHTML=t,s}}function Qt(t,e,s=t,i){if(e===Ht)return e;let a=void 0!==i?s._$Co?.[i]:s._$Cl;const n=Tt(e)?void 0:e._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),void 0===n?a=void 0:(a=new n(t),a._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=a:s._$Cl=a),void 0!==a&&(e=Qt(t,a._$AS(t,e.values),a,i)),e}class Xt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??Pt).importNode(e,!0);Yt.currentNode=i;let a=Yt.nextNode(),n=0,r=0,o=s[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new te(a,a.nextSibling,this,t):1===o.type?e=new o.ctor(a,o.name,o.strings,this,t):6===o.type&&(e=new ne(a,this,t)),this._$AV.push(e),o=s[++r]}n!==o?.index&&(a=Yt.nextNode(),n++)}return Yt.currentNode=Pt,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=Vt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Qt(this,t,e),Tt(t)?t===Vt||null==t||""===t?(this._$AH!==Vt&&this._$AR(),this._$AH=Vt):t!==this._$AH&&t!==Ht&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>Nt(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Vt&&Tt(this._$AH)?this._$AA.nextSibling.data=t:this.T(Pt.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Jt.createElement(Kt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Xt(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=qt.get(t.strings);return void 0===e&&qt.set(t.strings,e=new Jt(t)),e}k(t){Nt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const a of t)i===e.length?e.push(s=new te(this.O(Mt()),this.O(Mt()),this,this.options)):s=e[i],s._$AI(a),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=xt(t).nextSibling;xt(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,a){this.type=1,this._$AH=Vt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=a,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Vt}_$AI(t,e=this,s,i){const a=this.strings;let n=!1;if(void 0===a)t=Qt(this,t,e,0),n=!Tt(t)||t!==this._$AH&&t!==Ht,n&&(this._$AH=t);else{const i=t;let r,o;for(t=a[0],r=0;r<a.length-1;r++)o=Qt(this,i[s+r],e,r),o===Ht&&(o=this._$AH[r]),n||=!Tt(o)||o!==this._$AH[r],o===Vt?t=Vt:t!==Vt&&(t+=(o??"")+a[r+1]),this._$AH[r]=o}n&&!i&&this.j(t)}j(t){t===Vt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class se extends ee{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Vt?void 0:t}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Vt)}}class ae extends ee{constructor(t,e,s,i,a){super(t,e,s,i,a),this.type=5}_$AI(t,e=this){if((t=Qt(this,t,e,0)??Vt)===Ht)return;const s=this._$AH,i=t===Vt&&s!==Vt||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==Vt&&(s===Vt||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ne{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Qt(this,t)}}const re=wt.litHtmlPolyfillSupport;re?.(Jt,te),(wt.litHtmlVersions??=[]).push("3.3.3");const oe=globalThis;class le extends bt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let a=i._$litPart$;if(void 0===a){const t=s?.renderBefore??null;i._$litPart$=a=new te(e.insertBefore(Mt(),t),t,void 0,s??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ht}}le._$litElement$=!0,le.finalized=!0,oe.litElementHydrateSupport?.({LitElement:le});const ce=oe.litElementPolyfillSupport;ce?.({LitElement:le}),(oe.litElementVersions??=[]).push("4.2.2");const de=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},he={attribute:!0,type:String,converter:ft,reflect:!1,hasChanged:yt},pe=(t=he,e,s)=>{const{kind:i,metadata:a}=s;let n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const a=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,a,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const a=this[i];e.call(this,s),this.requestUpdate(i,a,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};function ue(t){return(e,s)=>"object"==typeof s?pe(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function me(t){return ue({...t,state:!0,attribute:!1})}const ge=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new nt(s,t,it)})`
  :host {
    /* surfaces & text — HA vars */
    --w-surface: var(--ha-card-background, var(--card-background-color, #fff));
    --w-page-bg: var(--primary-background-color, #f4f5f7);
    --w-text: var(--primary-text-color, #14181f);
    --w-muted: var(--secondary-text-color, #6b7280);
    --w-line: var(--divider-color, rgba(0, 0, 0, 0.12));
    --w-chip: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
    --w-track: var(--divider-color, rgba(0, 0, 0, 0.1));
    --w-radius: var(--ha-card-border-radius, 18px);
    --w-shadow: var(
      --ha-card-box-shadow,
      0 2px 8px rgba(0, 0, 0, 0.08)
    );

    /* brand & semantic — constant */
    --w-c-housing: #f7a81b;
    --w-c-shopping: #4ec3f7;
    --w-c-food: #f5433a;
    --w-c-life: #8bc34a;
    --w-c-comm: #5c6bc0;
    --w-c-vehicle: #af52de;
    --w-income: #34c759;
    --w-expense: #f5433a;
    --w-transfer: #4c8dff;
    --w-up: #1f9d4d;
    --w-up-bg: rgba(52, 199, 89, 0.15);
    --w-down: #e0362b;
    --w-down-bg: rgba(245, 67, 58, 0.14);
    --w-brand-amber: #ff7a1a;
    --w-brand-acid: #c6ff3a;

    display: block;
  }

  ha-card {
    background: var(--w-surface);
    border: 1px solid var(--w-line);
    border-radius: var(--w-radius);
    box-shadow: var(--w-shadow);
    padding: 20px 22px;
    color: var(--w-text);
    box-sizing: border-box;
    overflow: hidden;
  }

  .card-head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 14px;
  }

  .title {
    font-weight: 800;
    font-size: 20px;
    letter-spacing: -0.01em;
    line-height: 1.1;
    margin: 0;
    color: var(--w-text);
  }

  .svc-caption {
    font-family: var(--code-font-family, ui-monospace, SFMono-Regular, Menlo, monospace);
    font-size: 11px;
    color: var(--w-muted);
    opacity: 0.9;
    white-space: nowrap;
  }

  .caption,
  .label {
    font-weight: 600;
    font-size: 12px;
    color: var(--w-muted);
  }

  .caption-up {
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .big-value {
    font-weight: 800;
    font-size: 26px;
    letter-spacing: -0.02em;
    line-height: 1.05;
  }

  .row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .between {
    justify-content: space-between;
  }

  .col {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .stack {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .income {
    color: var(--w-income);
  }
  .expense {
    color: var(--w-expense);
  }
  .transfer {
    color: var(--w-transfer);
  }

  /* VS-previous chip */
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-weight: 700;
    font-size: 13px;
    padding: 3px 9px;
    border-radius: 999px;
    white-space: nowrap;
  }
  .chip .arrow {
    font-size: 12px;
    line-height: 1;
  }

  /* progress bars */
  .bar-track {
    position: relative;
    width: 100%;
    height: 12px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--w-track) 55%, transparent);
    overflow: hidden;
  }
  .bar-fill {
    position: absolute;
    inset: 0 auto 0 0;
    border-radius: 999px;
    transition: width 0.3s ease;
  }

  /* segmented control (§2) */
  .segmented {
    display: inline-flex;
    background: var(--w-chip);
    border-radius: 11px;
    padding: 3px;
    gap: 2px;
  }
  .segmented button {
    appearance: none;
    border: 0;
    background: transparent;
    color: var(--w-muted);
    font: inherit;
    font-weight: 600;
    font-size: 13px;
    padding: 7px 14px;
    border-radius: 9px;
    cursor: pointer;
    min-height: 34px;
  }
  .segmented button.active {
    background: var(--w-surface);
    color: var(--w-text);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14);
  }
  .segmented button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* chips / pills */
  .pill-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    min-height: 40px;
    border-radius: 12px;
    border: 1.5px solid var(--w-line);
    background: var(--w-chip);
    color: var(--w-text);
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
  }

  /* inputs */
  .field {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .field label {
    font-size: 12px;
    font-weight: 600;
    color: var(--w-muted);
  }
  .field input,
  .field select,
  .field textarea {
    font: inherit;
    padding: 9px 11px;
    border-radius: 10px;
    border: 1px solid var(--w-line);
    background: var(--w-chip);
    color: var(--w-text);
    box-sizing: border-box;
    min-height: 40px;
  }

  /* primary buttons (color set inline per operation) */
  .btn {
    appearance: none;
    border: 0;
    border-radius: 12px;
    padding: 12px 16px;
    font: inherit;
    font-weight: 700;
    font-size: 15px;
    color: #fff;
    cursor: pointer;
    min-height: 48px;
    width: 100%;
  }
  .btn[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* list rows */
  .list-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 0;
  }
  .list-row + .list-row {
    border-top: 1px solid var(--w-line);
  }
  .avatar {
    flex: 0 0 auto;
    width: 38px;
    height: 38px;
    border-radius: 11px;
    display: grid;
    place-items: center;
  }
  .avatar.round {
    border-radius: 999px;
  }
  .grow {
    flex: 1 1 auto;
    min-width: 0;
  }
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .subline {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--w-muted);
  }
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    flex: 0 0 auto;
  }

  /* --- state: empty --- */
  .state-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-align: center;
    color: var(--w-muted);
    padding: 26px 12px;
  }
  .state-empty ha-icon {
    --mdc-icon-size: 34px;
    opacity: 0.6;
  }
  .dashed {
    border: 1.5px dashed var(--w-line);
    border-radius: 12px;
    padding: 16px;
    color: var(--w-muted);
    font-size: 13px;
    text-align: center;
  }

  /* --- state: error --- */
  .stale-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: var(--w-down);
    background: var(--w-down-bg);
    padding: 2px 7px;
    border-radius: 999px;
  }
  .state-error {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-align: center;
    color: var(--w-muted);
    padding: 22px 12px;
  }
  .state-error ha-icon {
    --mdc-icon-size: 32px;
    color: var(--w-down);
  }

  /* --- state: loading (skeleton) --- */
  @keyframes shimmer {
    0% {
      background-position: -360px 0;
    }
    100% {
      background-position: 360px 0;
    }
  }
  .sk {
    border-radius: 8px;
    background: linear-gradient(
      90deg,
      color-mix(in srgb, var(--w-track) 60%, transparent) 25%,
      var(--w-chip) 37%,
      color-mix(in srgb, var(--w-track) 60%, transparent) 63%
    );
    background-size: 720px 100%;
    animation: shimmer 1.3s infinite linear;
  }
  .sk-line {
    height: 12px;
  }
  .sk-title {
    height: 22px;
    width: 45%;
  }
  .sk-value {
    height: 28px;
    width: 40%;
  }
  .sk-bar {
    height: 12px;
    width: 100%;
  }
  .sk-block {
    width: 100%;
  }

  /* overlays (quick-add / action feedback) */
  .overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: center;
    padding: 24px;
    background: color-mix(in srgb, var(--w-surface) 92%, transparent);
    backdrop-filter: blur(2px);
    border-radius: var(--w-radius);
    z-index: 5;
  }
  .overlay ha-icon {
    --mdc-icon-size: 44px;
  }
  .overlay.ok ha-icon {
    color: var(--w-income);
  }
  .overlay.err ha-icon {
    color: var(--w-expense);
  }
  .relative {
    position: relative;
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
  .muted {
    color: var(--w-muted);
  }
  .footnote {
    font-size: 11px;
    color: var(--w-muted);
    margin-top: 10px;
  }
`;class ve extends le{constructor(){super(...arguments),this.seenGood=!1}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={...t}}getCardSize(){return 3}updated(t){super.updated(t),t.has("hass")&&this.hass&&this.trackGood()&&(this.seenGood=!0)}trackGood(){return!1}cardTitle(t){return this._config?.title??t}periodLabel(t){const e=this._config?.period??t??"this_year";return k[e]??k.this_year}head(t){return Gt`
      <div class="card-head">
        <h2 class="title">${this.cardTitle(this.defaultTitle())}</h2>
        ${t?Gt`<div>${t}</div>`:""}
      </div>
    `}wrap(t){return Gt`<ha-card>${t}</ha-card>`}render(){return this._config?this.hass?this.renderContent():this.wrap(Gt`${this.head()}<div class="dashed">Waiting for Home Assistant…</div>`):Gt``}}function $e(t){const s=new Set,i=new Set;if(t.devices)for(const e of Object.values(t.devices)){"Wallet by BudgetBakers"===(e.name_by_user||e.name||"")&&i.add(e.id)}if(t.entities&&i.size)for(const e of Object.values(t.entities))e.device_id&&i.has(e.device_id)&&s.add(e.entity_id);if(!s.size)for(const i of Object.keys(t.states))i.startsWith(e)&&s.add(i);return[...s]}function fe(t,s,i){if(i&&t.states[i])return t.states[i];const a=t.states[e+s];if(a)return a;const n=`_${s}`;for(const e of $e(t))if(e.endsWith(n)&&t.states[e])return t.states[e]}function ye(t,s){const i=[],a=e+s,n=new Set;for(const e of Object.keys(t.states))e.startsWith(a)&&!n.has(e)&&(n.add(e),i.push(t.states[e]));if(!i.length)for(const a of $e(t)){a.replace(e,"").startsWith(s)&&!n.has(a)&&(n.add(a),i.push(t.states[a]))}return i}ve.styles=ge,tt([ue({attribute:!1})],ve.prototype,"hass",void 0),tt([me()],ve.prototype,"_config",void 0);const _e=(t,e)=>fe(t,s,e),be=(t,e)=>fe(t,i,e),we=(t,e)=>fe(t,a,e),xe=(t,e)=>fe(t,n,e),ke=(t,e)=>fe(t,r,e),Ae=(t,e)=>fe(t,o,e),Ce=(t,e)=>fe(t,l,e),Se=(t,e)=>fe(t,c,e),Ie=(t,e)=>fe(t,d,e),Ee=t=>ye(t,h),Pe=t=>ye(t,p);function Me(e,s){return Boolean(e.services?.[t]?.[s])}const Te=new Set(["unavailable","unknown","none","",null]);function Ne(t){return!t||Te.has(t.state)}const Fe={EUR:"€",USD:"$",GBP:"£",CHF:"CHF ",JPY:"¥",CZK:"Kč",PLN:"zł"};function Re(t,e,s,i={}){if(null==e||Number.isNaN(e))return"—";const a=i.decimals??2,n=Math.abs(e),r=t?.locale?.language||t?.language||"en";let o;if(s)try{o=new Intl.NumberFormat(r,{style:"currency",currency:s,minimumFractionDigits:a,maximumFractionDigits:a}).format(n)}catch{o=((l=s)?Fe[l]??`${l} `:"")+Be(n,r,a)}else o=Be(n,r,a);var l;if(i.signed){return`${e<0?"−":"+"}${o}`}return e<0?`−${o}`:o}function Be(t,e,s){try{return new Intl.NumberFormat(e,{minimumFractionDigits:s,maximumFractionDigits:s}).format(t)}catch{return t.toFixed(s)}}function De(t,e){if(!e)return"";const s=new Date(e);if(Number.isNaN(s.getTime()))return String(e);const i=t?.locale?.language||t?.language||"en";try{return new Intl.DateTimeFormat(i,{day:"2-digit",month:"2-digit",year:"numeric"}).format(s)}catch{return s.toISOString().slice(0,10)}}function Oe(t,e){if(!e)return"";const s=new Date(e);if(Number.isNaN(s.getTime()))return"";const i=t?.locale?.language||t?.language||"en",a=s.getTime()-Date.now(),n=Math.abs(a),r=function(t){try{return new Intl.RelativeTimeFormat(t,{numeric:"auto"})}catch{return null}}(i),o=[[31536e6,"year"],[2592e6,"month"],[864e5,"day"],[36e5,"hour"],[6e4,"minute"],[1e3,"second"]];for(const[t,e]of o)if(n>=t||"second"===e){const s=Math.round(a/t);return r?r.format(s,e):`${Math.abs(s)} ${e}s ago`}return""}function ze(t){if(null==t||""===t)return null;const e="number"==typeof t?t:Number(t);return Number.isFinite(e)?e:null}const Ue=[A,C,S,I,E,P,O,G,W];function Le(t,e){const s=(t??"").trim().toLowerCase();if(e&&s){const t=e.find(t=>(t.name??"").toLowerCase()===s),i=je(t?.color);if(i)return i}if(s in V)return V[s];const i=s.split(/[:>\-–—]/)[0].trim();return i in V?V[i]:Ue[function(t){let e=0;for(let s=0;s<t.length;s++)e=(e<<5)-e+t.charCodeAt(s),e|=0;return Math.abs(e)}(s)%Ue.length]}function je(t){return t?t.startsWith("#")?t:t in q?q[t]:null:null}function Ge(t,e){const s=t.replace("#","");if(6!==s.length)return t;return`rgba(${parseInt(s.slice(0,2),16)},${parseInt(s.slice(2,4),16)},${parseInt(s.slice(4,6),16)},${e})`}function We(t,e){const s=100*Math.max(0,Math.min(1,t));return Gt`
    <div class="bar-track">
      <div class="bar-fill" style="width:${s}%;background:${e}"></div>
    </div>
  `}function He(t,e=!0){if(null==t||Number.isNaN(t))return"";const{color:s,bg:i,arrow:a}=function(t,e=!0){const s=t>=0,i=e?s:!s;return{color:i?F:B,bg:i?R:D,arrow:s?"↑":"↓"}}(t,e);return Gt`
    <span class="chip" style="color:${s};background:${i}">
      <span class="arrow">${a}</span>${function(t){if(null==t||Number.isNaN(t))return"";const e=Math.round(t);return`${e<0?"−":e>0?"+":""}${Math.abs(e)}%`}(t)}
    </span>
  `}function Ve(t){const e=(t??"").trim().toLowerCase();if(e in Y)return Y[e];const s=e.split(/[:>\-–—]/)[0].trim();return Y[s]??"mdi:tag"}function qe(t,e="mdi:inbox-outline"){return Gt`
    <div class="state-empty">
      <ha-icon icon=${e}></ha-icon>
      <div>${t}</div>
    </div>
  `}function Ye(t="Can't reach Wallet API",e="The integration coordinator failed to update."){return Gt`
    <div class="state-error">
      <ha-icon icon="mdi:cloud-alert"></ha-icon>
      <div><strong>${t}</strong></div>
      <div class="footnote">${e}</div>
    </div>
  `}function Ke(){return Gt`<span class="stale-badge"><ha-icon
      icon="mdi:history"
      style="--mdc-icon-size:13px"
    ></ha-icon>stale</span>`}function Ze(t){return Gt`
    <div class="stack">
      <div class="sk sk-value"></div>
      ${Array.from({length:t},()=>Gt`
          <div class="col">
            <div class="sk sk-line" style="width:30%"></div>
            <div class="sk sk-bar"></div>
          </div>
        `)}
    </div>
  `}function Je(t=180){return Gt`<div class="sk sk-block" style="height:${t}px"></div>`}function Qe(t){return Gt`
    <div>
      ${Array.from({length:t},()=>Gt`
          <div class="list-row">
            <div class="sk avatar"></div>
            <div class="grow col">
              <div class="sk sk-line" style="width:55%"></div>
              <div class="sk sk-line" style="width:35%"></div>
            </div>
            <div class="sk sk-line" style="width:60px"></div>
          </div>
        `)}
    </div>
  `}let Xe=class extends ve{defaultTitle(){return"Cash Flow"}entity(){return this.hass?_e(this.hass,this._config.entity):void 0}trackGood(){return!Ne(this.entity())}renderContent(){const t=this.entity();if(Ne(t))return this.wrap(Gt`
        ${this.head()}
        ${this.seenGood?Ye():Ze(2)}
      `);const e=t.attributes,s=e.currency??void 0,i=ze(t.state),a=ze(e.income)??0,n=ze(e.expense)??0,r=ze(e.vs_previous_pct),o=e.period;if(0===a&&0===n)return this.wrap(Gt`
        ${this.head()}
        ${qe("No cash flow this period","mdi:cash-remove")}
      `);const l=Math.max(a,n,1);return this.wrap(Gt`
      ${this.head(this.seenGood&&Ne(t)?Ke():"")}
      <div class="row between" style="align-items:flex-end">
        <div class="col">
          <span class="caption">${this.periodLabel(o)}</span>
          <span
            class="big-value ${null!==i&&i<0?"expense":"income"}"
            >${Re(this.hass,i,s,{signed:!0})}</span
          >
        </div>
        <div class="col" style="align-items:flex-end">
          <span class="caption caption-up">VS Previous Period</span>
          ${He(r,!0)}
        </div>
      </div>
      <div class="stack" style="margin-top:16px">
        ${this.barRow("Income",a,l,M,s)}
        ${this.barRow("Expense",n,l,T,s)}
      </div>
    `)}barRow(t,e,s,i,a){return Gt`
      <div class="col">
        <div class="row between">
          <span class="label">${t}</span>
          <span style="font-weight:700;color:${i}"
            >${Re(this.hass,e,a)}</span
          >
        </div>
        ${We(e/s,i)}
      </div>
    `}};function ts(t){return"number"==typeof t?t:new Date(t).getTime()}function es(t){return null!==t.state&&void 0!==t.state?t.state:null!==t.mean&&void 0!==t.mean?t.mean:null!==t.max&&void 0!==t.max?t.max:null}Xe=tt([de("wallet-cash-flow-card")],Xe);class ss extends ve{constructor(){super(...arguments),this._stats={},this._loading=!0,this._error=!1,this.statPeriod="month",this._lastIds="",this._fetching=!1}windowStart(){return new Date((new Date).getFullYear(),0,1)}setConfig(t){super.setConfig(t)}updated(t){super.updated(t),t.has("hass")&&this.hass&&this.maybeFetch()}async maybeFetch(){const t=this.statisticIds(),e=t.join("|");if(t.length){if(!this._fetching&&e!==this._lastIds){this._lastIds=e,this._fetching=!0;try{const e=await async function(t,e,s,i=new Date,a="month"){if(!t?.callWS||!e.length)return{};try{const n=await t.callWS({type:"recorder/statistics_during_period",statistic_ids:e,start_time:s.toISOString(),end_time:i.toISOString(),period:a,types:["mean","min","max","sum","state"]}),r={};for(const t of e){const e=n?.[t]??[];r[t]=e.map(t=>({start:ts(t.start),end:ts(t.end),mean:t.mean??null,min:t.min??null,max:t.max??null,sum:t.sum??null,state:t.state??null}))}return r}catch{return{}}}(this.hass,t,this.windowStart(),new Date,this.statPeriod);this._stats=e,this._error=!1,Object.values(e).some(t=>t.length)&&(this.seenGood=!0)}catch{this._error=!0}finally{this._loading=!1,this._fetching=!1}}}else this._loading=!1}partialFraction(){const t=function(t){let e=null;for(const s of Object.values(t))if(s.length){const t=s[0].start;e=null===e?t:Math.min(e,t)}return e}(this._stats);if(null===t)return null;const e=this.windowStart().getTime(),s=Date.now();return t<=e+864e5?null:Math.max(0,Math.min(1,(t-e)/(s-e)))}months(){return function(t){const e=(()=>{try{return new Intl.DateTimeFormat(t,{month:"short"})}catch{return null}})(),s=[];for(let t=0;t<12;t++){const i=new Date(2020,t,1);s.push(e?e.format(i):i.toLocaleString("en",{month:"short"}))}return s}(this.hass?.locale?.language||this.hass?.language||"en")}collectingNote(){if(null===this.partialFraction())return"";const t=this.hass&&Me(this.hass,x);return Gt`
      <div class="footnote">
        Trend building from install date forward.${t?Gt` Run <code>ha_wallet.import_history</code> to backfill.`:""}
      </div>
    `}}tt([me()],ss.prototype,"_stats",void 0),tt([me()],ss.prototype,"_loading",void 0),tt([me()],ss.prototype,"_error",void 0);const is="var(--w-line)",as="color-mix(in srgb, var(--w-line) 60%, transparent)",ns="var(--w-muted)";function rs(t){const e=function(t,e,s){return Math.min(s,Math.max(e,t))}(t,0,1),s=120,i=128,a=(t,e,a)=>Wt`<path d=${function(t,e,s,i,a){const n=i*Math.PI/180,r=a*Math.PI/180,o=t+s*Math.cos(n),l=e-s*Math.sin(n),c=t+s*Math.cos(r),d=e-s*Math.sin(r),h=Math.abs(a-i)>180?1:0;return`M ${o} ${l} A ${s} ${s} 0 ${h} ${a<i?1:0} ${c} ${d}`}(s,i,96,t,e)} fill="none" stroke=${a}
      stroke-width="18" stroke-linecap="round" />`,n=180-180*e,r=s+90*Math.cos(n*Math.PI/180),o=i-90*Math.sin(n*Math.PI/180);return Wt`
    <svg viewBox="0 0 ${240} ${140}" role="img" aria-label="gauge">
      ${a(180,120,"#f5433a")}
      ${a(120,60,"#f7a81b")}
      ${a(60,0,"#34c759")}
      <circle cx=${s} cy=${i} r="7" fill="var(--w-text)" />
      <line x1=${s} y1=${i} x2=${r} y2=${o}
        stroke="var(--w-text)" stroke-width="4" stroke-linecap="round" />
    </svg>
  `}function os(t,e,s,i,a){return Array.from({length:a+1},(n,r)=>{const o=e+i/a*r;return Wt`<line x1=${t} y1=${o} x2=${t+s} y2=${o}
      stroke=${as} stroke-width="1" stroke-dasharray="3 4" />`})}function ls(t,e,s,i){return i.length?i.map((a,n)=>{const r=i.length>1?t+n/(i.length-1)*e:t,o=0===n?"start":n===i.length-1?"end":"middle";return Wt`<text x=${r} y=${s} font-size="10" fill=${ns}
      text-anchor=${o}>${a}</text>`}):""}function cs(t){if(!t.length)return"";if(t.length<3)return t.map((t,e)=>`${e?"L":"M"} ${t.x} ${t.y}`).join(" ");let e=`M ${t[0].x} ${t[0].y}`;for(let s=0;s<t.length-1;s++){const i=t[0===s?0:s-1],a=t[s],n=t[s+1],r=t[s+2]??n;e+=` C ${a.x+(n.x-i.x)/6} ${a.y+(n.y-i.y)/6} ${n.x-(r.x-a.x)/6} ${n.y-(r.y-a.y)/6} ${n.x} ${n.y}`}return e}function ds(t){return Gt`
    <div class="row" style="flex-wrap:wrap;gap:14px;justify-content:center;margin-top:10px">
      ${t.map(t=>Gt`<span class="subline"
          ><span class="dot" style="background:${t.color}"></span>${t.label}${t.extra?Gt` <span class="muted">${t.extra}</span>`:""}</span
        >`)}
    </div>
  `}let hs=class extends ss{defaultTitle(){return"Cash Flow Trend"}cashFlowId(){const t=this.hass?_e(this.hass,this._config.entity):void 0;return t?.entity_id}spendingId(){const t=this.hass?be(this.hass):void 0;return t?.entity_id}statisticIds(){return[this.cashFlowId(),this.spendingId()].filter(t=>!!t)}renderContent(){if(!this.statisticIds().length)return this.wrap(Gt`
        ${this.head()}
        ${qe("Cash-flow sensor not found","mdi:chart-bar")}
      `);if(this._loading&&!Object.keys(this._stats).length)return this.wrap(Gt`${this.head()}${Je(200)}`);if(this._error)return this.wrap(Gt`${this.head()}${Ye("Couldn't load history")}`);const t=this._stats[this.cashFlowId()??""]??[],e=this._stats[this.spendingId()??""]??[],s=ps(t),i=ps(e);if(s.length<1)return this.wrap(Gt`
        ${this.head()}
        ${qe("Not enough history yet","mdi:chart-bar")}
        ${this.collectingNote()}
      `);const a=s.map((t,e)=>{const s=Math.abs(i[e]??0),a=t+s;return{income:Math.max(0,a),expense:s,net:t}});return this.wrap(Gt`
      ${this.head()}
      <div style="margin-top:6px">
        ${function(t,e,s){const i=Math.max(1,...t.map(t=>Math.max(t.income,t.expense,Math.abs(t.net))))||1,a=t.length?308/t.length:308,n=Math.min(20,.5*a),r=t=>t/i*83,o=t.map((t,e)=>{const i=6+a*e+a/2,o=r(t.income),l=r(t.expense);return Wt`
      <rect x=${i-n/2} y=${93-o} width=${n} height=${o}
        rx="3" fill=${s.income} />
      <rect x=${i-n/2} y=${93} width=${n} height=${l}
        rx="3" fill=${s.expense} />`}),l=t.map((t,e)=>({x:6+a*e+a/2,y:93-r(t.net)})),c=cs(l);return Wt`
    <svg viewBox="0 0 ${320} ${200}" role="img" aria-label="income expense bars">
      <line x1=${6} y1=${93} x2=${314} y2=${93}
        stroke=${is} stroke-width="1" />
      ${o}
      <path d=${c} fill="none" stroke=${s.net}
        stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" />
      ${ls(6,308,192,e)}
    </svg>
  `}(a,this.months(),{income:M,expense:T,net:"var(--w-text)"})}
      </div>
      ${ds([{label:"Cash flow",color:"var(--w-text)"},{label:"Expense",color:T},{label:"Income",color:M}])}
      ${this.collectingNote()}
    `)}};function ps(t){const e=t.map(es),s=[];let i=0;for(const t of e)null!==t?(s.push(t-i),i=t):s.push(0);return s}hs=tt([de("wallet-cash-flow-trend-card")],hs);let us=class extends ve{defaultTitle(){return"Spending"}entity(){return this.hass?be(this.hass,this._config.entity):void 0}trackGood(){return!Ne(this.entity())}renderContent(){const t=this.entity();if(Ne(t))return this.wrap(Gt`
        ${this.head()}
        ${this.seenGood?Ye():Je(150)}
      `);const e=t.attributes,s=e.currency,i=ze(t.state),a=ze(e.vs_previous_pct),n=e.period;if(!i)return this.wrap(Gt`
        ${this.head()}
        ${qe("Nothing spent yet","mdi:cart-off")}
      `);let r=null;null!==a&&a>-100&&(r=i/(1+a/100));const o=1.25*Math.max(r??0,i)||i||1,l=1-Math.min(1,i/o);return this.wrap(Gt`
      ${this.head(Ne(t)&&this.seenGood?Ke():"")}
      <div class="row between">
        <span class="caption">${this.periodLabel(n)}</span>
        <div class="col" style="align-items:flex-end">
          <span class="caption caption-up">VS Previous Period</span>
          ${He(a,!1)}
        </div>
      </div>
      <div style="max-width:260px;margin:6px auto 0">${rs(l)}</div>
      <div class="col" style="align-items:center;margin-top:-8px">
        <span class="big-value expense"
          >${Re(this.hass,-Math.abs(i),s,{signed:!0})}</span
        >
        ${null!==r?Gt`<span class="caption"
              >of ${Re(this.hass,r,s)} typical</span
            >`:""}
      </div>
    `)}};us=tt([de("wallet-spending-card")],us);const ms={must:S,need:A,want:I};let gs=class extends ve{constructor(){super(...arguments),this._filter="all"}defaultTitle(){return"Nature of Spending"}entity(){return this.hass?we(this.hass,this._config.entity):void 0}trackGood(){return!Ne(this.entity())}renderContent(){const t=this.entity();if(Ne(t))return this.wrap(Gt`
        ${this.head()}
        ${this.seenGood?Ye():Je(170)}
      `);const e=t.attributes,s=e.currency,i=Math.abs(ze(e.must)??0),a=Math.abs(ze(e.need)??0),n=Math.abs(ze(e.want)??0);if(0===i+a+n)return this.wrap(Gt`
        ${this.head()}
        ${qe("No categorised spend","mdi:shape-outline")}
      `);const r=[["must",i],["need",a],["want",n]].filter(([t])=>"all"===this._filter||this._filter===t),o={segments:r.map(([t,e])=>({value:e,color:ms[t]}))};return this.wrap(Gt`
      ${this.head(Ne(t)&&this.seenGood?Ke():"")}
      <div class="segmented" style="margin-bottom:14px">
        ${["all","must","need","want"].map(t=>Gt`<button
            class=${this._filter===t?"active":""}
            @click=${()=>this._filter=t}
          >
            ${"all"===t?"All":t[0].toUpperCase()+t.slice(1)}
          </button>`)}
      </div>
      <div style="max-width:120px;margin:0 auto">
        ${function(t,e){const s=308,i=t.map(t=>t.segments.reduce((t,e)=>t+e.value,0)),a=Math.max(1,...i),n=t.length?s/t.length:s,r=Math.min(22,.55*n),o=t.map((t,e)=>{const s=6+n*e+n/2;let i=166;return t.segments.map(t=>{const e=t.value/a*156;return i-=e,Wt`<rect x=${s-r/2} y=${i} width=${r} height=${e}
        fill=${t.color} />`})});return Wt`
    <svg viewBox="0 0 ${320} ${190}" role="img" aria-label="stacked bars">
      ${os(6,10,s,156,4)}
      ${o}
      ${ls(6,s,182,e)}
    </svg>
  `}([o],[this.periodLabel(e.period)])}
      </div>
      <div class="row between" style="margin-top:8px">
        ${r.map(([t,e])=>Gt`<span class="subline" style="color:var(--w-text)">
            <span class="dot" style="background:${ms[t]}"></span>
            ${t[0].toUpperCase()+t.slice(1)}
            <span class="muted">${Re(this.hass,e,s)}</span>
          </span>`)}
      </div>
      ${ds([{label:"Must",color:ms.must},{label:"Need",color:ms.need},{label:"Want",color:ms.want}])}
    `)}};tt([me()],gs.prototype,"_filter",void 0),gs=tt([de("wallet-nature-of-spending-card")],gs);let vs=class extends ve{defaultTitle(){return"Balance by Currencies"}balances(){return this.hass?Pe(this.hass):[]}trackGood(){return this.balances().some(t=>!Ne(t))}renderContent(){const t=this.balances(),e=t.filter(t=>!Ne(t));if(!t.length)return this.wrap(Gt`
        ${this.head()}
        ${this.seenGood?qe("No accounts selected in options","mdi:bank-off"):Qe(2)}
      `);if(!e.length)return this.wrap(Gt`${this.head()}${Qe(t.length||2)}`);const s=e.map(t=>({currency:t.attributes.currency??t.attributes.unit_of_measurement,value:Math.abs(ze(t.state)??0),raw:ze(t.state)??0})).sort((t,e)=>e.value-t.value),i=s[0]?.value||1;return this.wrap(Gt`
      ${this.head()}
      <div class="stack">
        ${s.map(t=>Gt`
            <div class="col">
              <div class="row between">
                <span class="label" style="color:var(--w-text)"
                  >${function(t){const e={EUR:"Euro",USD:"US Dollar",GBP:"British Pound",CHF:"Swiss Franc",CZK:"Czech Koruna",PLN:"Polish Złoty",JPY:"Japanese Yen"};return t&&e[t]||t||"—"}(t.currency)}</span
                >
                <span class="big-value" style="font-size:20px"
                  >${Re(this.hass,t.raw,t.currency)}</span
                >
              </div>
              ${We(t.value/i,O)}
            </div>
          `)}
      </div>
      <div class="footnote">Per-currency — never merged into one total.</div>
    `)}};vs=tt([de("wallet-balance-by-currencies-card")],vs);let $s=class extends ve{defaultTitle(){return"Spending by Categories"}entity(){return this.hass?be(this.hass,this._config.entity):void 0}categories(){const t=this.hass?Se(this.hass):void 0;return t?.attributes.categories??[]}trackGood(){return!Ne(this.entity())}renderContent(){const t=this.entity();if(Ne(t))return this.wrap(Gt`
        ${this.head()}
        ${this.seenGood?Ye():Ze(4)}
      `);const e=t.attributes,s=e.currency,i=e.by_category??{},a=ze(e.vs_previous_pct),n=e.period,r=Object.entries(i).map(([t,e])=>({name:t,value:Math.abs(ze(e)??0)})).filter(t=>t.value>0).sort((t,e)=>e.value-t.value);if(!r.length)return this.wrap(Gt`
        ${this.head()}
        ${qe("No expenses this period","mdi:cart-off")}
      `);const o=r.reduce((t,e)=>t+e.value,0),l=r[0].value||1,c=r.slice(0,5),d=r.length-c.length,h=this.categories();return this.wrap(Gt`
      ${this.head(Ne(t)&&this.seenGood?Ke():"")}
      <div class="row between" style="align-items:flex-end">
        <div class="col">
          <span class="caption">${this.periodLabel(n)}</span>
          <span class="big-value expense"
            >${Re(this.hass,-o,s,{signed:!0})}</span
          >
        </div>
        <div class="col" style="align-items:flex-end">
          <span class="caption caption-up">VS Previous Period</span>
          ${He(a,!1)}
        </div>
      </div>
      <div class="stack" style="margin-top:14px">
        ${c.map(t=>{const e=Le(t.name,h);return Gt`
            <div class="col">
              <div class="row between">
                <span class="label" style="color:var(--w-text)">${t.name}</span>
                <span style="font-weight:700"
                  >${Re(this.hass,t.value,s)}</span
                >
              </div>
              ${We(t.value/l,e)}
            </div>
          `})}
        ${d>0?Gt`<span class="footnote">+ ${d} more categor${1===d?"y":"ies"}</span>`:""}
      </div>
    `)}};$s=tt([de("wallet-spending-by-categories-card")],$s);let fs=class extends ve{defaultTitle(){return"Credit Limits Utilization"}entity(){return this.hass?ke(this.hass,this._config.entity):void 0}trackGood(){return void 0!==this.entity()}renderContent(){const t=this.entity();if(!t)return this.wrap(Gt`
        ${this.head()}
        ${this.seenGood?Ye():Ze(2)}
      `);const e=t.attributes,s=e.currency,i=ze(e.credit_balance),a=ze(e.total_credit_limit),n=ze(e.available);if(Ne(t)||null===i&&null===a)return this.wrap(Gt`
        ${this.head()}
        <span class="caption caption-up">${this.periodLabel()}</span>
        <div class="dashed" style="margin:12px 0">
          No credit accounts found or missing credit-card limit setting.
        </div>
        ${this.figures(0,0,s)}
      `);const r=Math.abs(i??0),o=Math.abs(a??0),l=o>0?r/o:0;return this.wrap(Gt`
      ${this.head()}
      <span class="caption caption-up">${this.periodLabel()}</span>
      ${this.figures(i??0,a??0,s)}
      <div class="col" style="margin-top:14px;gap:6px">
        ${We(l,A)}
        <span class="footnote"
          >${Math.round(100*l)}% utilized ·
          ${Re(this.hass,n??o-r,s)} available</span
        >
      </div>
    `)}figures(t,e,s){return Gt`
      <div class="row" style="gap:32px;margin-top:10px;flex-wrap:wrap">
        <div class="col">
          <span class="caption caption-up">Credit Balance</span>
          <span class="big-value expense"
            >${Re(this.hass,-Math.abs(t),s,{signed:!0})}</span
          >
        </div>
        <div class="col">
          <span class="caption caption-up">Total Credit Limit</span>
          <span class="big-value">${Re(this.hass,e,s)}</span>
        </div>
      </div>
    `}};fs=tt([de("wallet-credit-limits-card")],fs);let ys=class extends ss{defaultTitle(){return"Balance Trend"}target(){if(!this.hass)return;if(this._config.entity&&this.hass.states[this._config.entity])return this.hass.states[this._config.entity];return Pe(this.hass).slice().sort((t,e)=>Math.abs(Number(e.state)||0)-Math.abs(Number(t.state)||0))[0]}statisticIds(){const t=this.target();return t?[t.entity_id]:[]}renderContent(){const t=this.target();if(!t)return this.wrap(Gt`
        ${this.head()}
        ${qe("No balance sensors — select accounts in options","mdi:bank-off")}
      `);if(this._loading&&!Object.keys(this._stats).length)return this.wrap(Gt`${this.head()}${Je(170)}`);if(this._error)return this.wrap(Gt`${this.head()}${Ye("Couldn't load history")}`);const e=(this._stats[t.entity_id]??[]).map(es).filter(t=>null!==t),s=t.attributes.currency??t.attributes.unit_of_measurement;if(e.length<2)return this.wrap(Gt`
        ${this.head()}
        ${qe("Not enough history yet","mdi:chart-line")}
        ${this.collectingNote()}
      `);const i=e[e.length-1],a=e[0],n=0!==a?(i-a)/Math.abs(a)*100:null,r=this.partialFraction();return this.wrap(Gt`
      ${this.head()}
      <div class="row between" style="align-items:flex-end">
        <div class="col">
          <span class="caption">${this.periodLabel()}</span>
          <span class="big-value">${Re(this.hass,i,s)}</span>
        </div>
        <div class="col" style="align-items:flex-end">
          <span class="caption caption-up">VS Previous Period</span>
          ${He(n,!0)}
        </div>
      </div>
      <div style="margin-top:10px">
        ${function(t,e,s,i={}){const a=312,n=140,r=Math.max(...t,1),o=Math.min(...t,0),l=r-o||1,c=`w-area-${Math.random().toString(36).slice(2,8)}`,d=t.map((e,s)=>({x:4+(t.length>1?s/(t.length-1)*a:0),y:148-(e-o)/l*n})),h=d.map((t,e)=>`${e?"L":"M"} ${t.x} ${t.y}`).join(" "),p=`${h} L ${d[d.length-1]?.x??4} 148 L ${d[0]?.x??4} 148 Z`,u=void 0!==i.partialFrom&&i.partialFrom>0?Wt`<line x1=${4+i.partialFrom*a} y1=${8}
          x2=${4+i.partialFrom*a} y2=${148}
          stroke=${is} stroke-width="1.5" stroke-dasharray="4 4" />`:"";return Wt`
    <svg viewBox="0 0 ${320} ${170}" role="img" aria-label="area chart">
      <defs>
        <linearGradient id=${c} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color=${e} stop-opacity="0.28" />
          <stop offset="1" stop-color=${e} stop-opacity="0" />
        </linearGradient>
      </defs>
      ${os(4,8,a,n,4)}
      <path d=${p} fill=${`url(#${c})`} />
      <path d=${h} fill="none" stroke=${e} stroke-width="2.5"
        stroke-linejoin="round" stroke-linecap="round" />
      ${u}
      ${ls(4,a,162,s)}
    </svg>
  `}(e,z,this.months(),{partialFrom:r??void 0})}
      </div>
      ${this.collectingNote()}
    `)}};ys=tt([de("wallet-balance-trend-card")],ys);let _s=class extends ve{defaultTitle(){return"Expenses Structure"}entity(){return this.hass?be(this.hass,this._config.entity):void 0}categories(){const t=this.hass?Se(this.hass):void 0;return t?.attributes.categories??[]}trackGood(){return!Ne(this.entity())}renderContent(){const t=this.entity();if(Ne(t))return this.wrap(Gt`
        ${this.head()}
        ${this.seenGood?Ye():Je(180)}
      `);const e=t.attributes,s=e.currency,i=e.by_category??{},a=this.categories(),n=Object.entries(i).map(([t,e])=>({name:t,value:Math.abs(ze(e)??0)})).filter(t=>t.value>0).sort((t,e)=>e.value-t.value);if(!n.length)return this.wrap(Gt`
        ${this.head()}
        ${qe("No expenses to break down","mdi:chart-donut")}
      `);const r=n.reduce((t,e)=>t+e.value,0),o=n.map(t=>({label:t.name,value:t.value,color:Le(t.name,a)}));return this.wrap(Gt`
      ${this.head(Ne(t)&&this.seenGood?Ke():"")}
      <div class="row" style="align-items:center;gap:18px;flex-wrap:wrap">
        <div style="flex:0 0 180px;max-width:180px">
          ${function(t,e,s){const i=180,a=t.reduce((t,e)=>t+Math.max(0,e.value),0),n=2*Math.PI*66;let r=0;const o=a?t.filter(t=>t.value>0).map(t=>{const e=t.value/a*n,s=Wt`<circle cx=${90} cy=${90} r=${66} fill="none"
            stroke=${t.color} stroke-width=${26}
            stroke-dasharray="${e} ${n-e}"
            stroke-dashoffset=${-r}
            transform="rotate(-90 ${90} ${90})" />`;return r+=e,s}):[Wt`<circle cx=${90} cy=${90} r=${66} fill="none" stroke=${as}
          stroke-width=${26} />`];return Wt`
    <svg viewBox="0 0 ${i} ${i}" role="img" aria-label="donut">
      ${o}
      <text x=${90} y=${86} text-anchor="middle"
        font-size="11" fill=${ns}>${e}</text>
      <text x=${90} y=${104} text-anchor="middle"
        font-size="15" font-weight="800" fill="var(--w-text)">${s}</text>
    </svg>
  `}(o,s??"",Re(this.hass,r,s))}
        </div>
        <div class="grow stack" style="gap:8px;min-width:150px">
          ${o.map(t=>{const e=Math.round(t.value/r*100);return Gt`
              <div class="row between">
                <span class="subline" style="color:var(--w-text)">
                  <span class="dot" style="background:${t.color}"></span>${t.label}
                </span>
                <span class="muted" style="font-weight:700">${e}%</span>
              </div>
            `})}
        </div>
      </div>
    `)}};_s=tt([de("wallet-expenses-structure-card")],_s);let bs=class extends ss{constructor(){super(...arguments),this._metric="cash_flow"}defaultTitle(){return"Period to Period Comparison"}windowStart(){return new Date((new Date).getFullYear()-2,0,1)}cashFlowId(){return(this.hass?_e(this.hass,this._config.entity):void 0)?.entity_id}spendingId(){return(this.hass?be(this.hass):void 0)?.entity_id}statisticIds(){return[this.cashFlowId(),this.spendingId()].filter(t=>!!t)}renderContent(){if(!this.statisticIds().length)return this.wrap(Gt`
        ${this.head()}
        ${qe("Cash-flow sensor not found","mdi:chart-line")}
      `);if(this._loading&&!Object.keys(this._stats).length)return this.wrap(Gt`${this.head()}${Je(180)}`);if(this._error)return this.wrap(Gt`${this.head()}${Ye("Couldn't load history")}`);const t=this.metricByYear(),e=Object.keys(t).map(Number).sort((t,e)=>e-t),s=e.filter(e=>t[e].some(t=>null!==t));if(s.length<2)return this.wrap(Gt`
        ${this.head()}
        ${qe("Not enough history to compare","mdi:chart-timeline-variant")}
        ${this.collectingNote()}
      `);const[i,a,n]=s,r=[{name:"Current Period",color:j,values:t[i]}];return void 0!==a&&r.push({name:"Same period a year ago",color:G,values:t[a]}),void 0!==n&&r.push({name:"Previous Period",color:W,values:t[n]}),this.wrap(Gt`
      ${this.head()}
      <div class="segmented" style="margin-bottom:12px">
        ${[["cash_flow","Cash flow"],["expense","Expense"],["income","Income"]].map(([t,e])=>Gt`<button
            class=${this._metric===t?"active":""}
            @click=${()=>this._metric=t}
          >
            ${e}
          </button>`)}
      </div>
      ${function(t,e){const s=148,i=t.flatMap(t=>t.values.filter(t=>null!==t)),a=Math.max(1,...i),n=Math.min(0,...i),r=a-n||1,o=t.map(t=>{const e=t.values.map((e,i)=>null===e?null:{x:6+308*(t.values.length>1?i/(t.values.length-1):0),y:158-(e-n)/r*s}).filter(t=>null!==t);return Wt`<path d=${cs(e)} fill="none" stroke=${t.color}
      stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" />`});return Wt`
    <svg viewBox="0 0 ${320} ${180}" role="img" aria-label="comparison lines">
      ${os(6,10,308,s,4)}
      <line x1=${6} y1=${158-(0-n)/r*s}
        x2=${314} y2=${158-(0-n)/r*s}
        stroke=${is} stroke-width="1" />
      ${o}
      ${ls(6,308,174,e)}
    </svg>
  `}(r,this.months())}
      ${ds(r.map(t=>({label:t.name,color:t.color})))}
      ${this.collectingNote()}
    `)}metricByYear(){const t=this._stats[this.cashFlowId()??""]??[],e=this._stats[this.spendingId()??""]??[],s=xs(t),i=xs(e),a=new Set([...Object.keys(s).map(Number),...Object.keys(i).map(Number)]),n={};for(const t of a){const e=s[t]??ws(),a=i[t]??ws();n[t]=e.map((t,e)=>{const s=a[e];return"cash_flow"===this._metric?t:"expense"===this._metric?null===s?null:Math.abs(s):null===t&&null===s?null:(t??0)+Math.abs(s??0)})}return n}};function ws(){return Array.from({length:12},()=>null)}function xs(t){const e={};for(const s of t){const t=new Date(s.start),i=t.getFullYear(),a=t.getMonth();(e[i]??=ws())[a]=es(s)}return e}function ks(t){return Ee(t).filter(t=>!Ne(t)).map(t=>{const e=t.attributes,s=e.friendly_name,i=s?s.replace(/^.*?Account\s+/i,"").trim()||s:t.entity_id;return{entity_id:t.entity_id,id:String(e.account_id??""),name:i,type:e.account_type,currency:e.currency??e.unit_of_measurement,bankSynced:Boolean(e.bank_synced),balance:Cs(t.state)}}).filter(t=>t.id)}function As(t){const e=Se(t);return e?.attributes.categories??[]}function Cs(t){const e=Number(t);return Number.isFinite(e)?e:null}tt([me()],bs.prototype,"_metric",void 0),bs=tt([de("wallet-period-comparison-card")],bs);let Ss=class extends ve{defaultTitle(){return"Last Records"}entity(){return this.hass?xe(this.hass,this._config.entity):void 0}categories(){const t=this.hass?Se(this.hass):void 0;return t?.attributes.categories??[]}syncedAccountNames(){const t=new Set;if(!this.hass)return t;for(const e of ks(this.hass))e.bankSynced&&t.add(e.name);return t}trackGood(){return!Ne(this.entity())}renderContent(){const t=this.entity();if(Ne(t))return this.wrap(Gt`
        ${this.head()}
        ${this.seenGood?Ye():Qe(3)}
      `);const e=t.attributes.records??[];if(!e.length)return this.wrap(Gt`
        ${this.head()}
        ${qe("No records in this period","mdi:receipt-text-outline")}
      `);const s=this.categories(),i=this.syncedAccountNames();return this.wrap(Gt`
      ${this.head(Ne(t)&&this.seenGood?Ke():"")}
      <div>
        ${e.map(t=>{const e=Le(t.category,s),a=ze(t.amount)??0,n=t.bank_synced??(!!t.account&&i.has(t.account));return Gt`
            <div class="list-row">
              <div class="avatar round" style="background:${Ge(e,.16)}">
                <ha-icon icon=${Ve(t.category)} style="color:${e}"></ha-icon>
              </div>
              <div class="grow col" style="gap:2px">
                <span class="ellipsis" style="font-weight:700"
                  >${t.category??"Uncategorised"}</span
                >
                <span class="subline">
                  <span
                    class="dot"
                    style="background:${n?U:"var(--w-muted)"}"
                  ></span>
                  <span class="ellipsis">${t.account??""}</span>
                  ${t.date?Gt`· ${De(this.hass,t.date)}`:""}
                </span>
              </div>
              <span
                style="font-weight:800;white-space:nowrap"
                class=${a<0?"expense":"income"}
                >${Re(this.hass,a,void 0,{signed:!0})}</span
              >
            </div>
          `})}
      </div>
    `)}};Ss=tt([de("wallet-last-records-card")],Ss);let Is=class extends ve{defaultTitle(){return"Accounts"}accounts(){return this.hass?Ee(this.hass):[]}trackGood(){return this.accounts().some(t=>!Ne(t))}renderContent(){const t=this.accounts(),e=t.filter(t=>!Ne(t));return t.length?e.length?this.wrap(Gt`
      ${this.head()}
      <div>
        ${e.map(t=>this.accountRow(t))}
      </div>
    `):this.wrap(Gt`${this.head()}${Qe(t.length)}`):this.wrap(Gt`
        ${this.head()}
        ${this.seenGood?qe("No accounts selected in options","mdi:bank-off"):Qe(2)}
      `)}accountRow(t){const e=t.attributes,s=Boolean(e.bank_synced),i=e.currency??e.unit_of_measurement,a=e.account_type??"",n=this.accountName(t),r=s?U:L,o=s?"mdi:bank":"mdi:cash-multiple";return Gt`
      <div class="list-row">
        <div class="avatar" style="background:${Ge(r,.16)}">
          <ha-icon icon=${o} style="color:${r}"></ha-icon>
        </div>
        <div class="grow col" style="gap:2px">
          <span class="ellipsis" style="font-weight:700">${n}</span>
          <span class="subline">
            ${function(t){return{Cash:"Cash",General:"General",CurrentAccount:"Current account",SavingAccount:"Savings",Insurance:"Insurance",CreditCard:"Credit card",Overdraft:"Overdraft"}[t]??t}(a)}
            ${s?Gt` · <ha-icon
                    icon="mdi:check-circle"
                    style="--mdc-icon-size:13px;color:${U}"
                  ></ha-icon>
                  Synced ${Oe(this.hass,e.last_change)}`:""}
          </span>
        </div>
        <span style="font-weight:800;white-space:nowrap"
          >${Re(this.hass,ze(t.state),i)}</span
        >
      </div>
    `}accountName(t){const e=t.attributes.friendly_name;return e?e.replace(/^.*?Account\s+/i,"").trim()||e:t.entity_id}};Is=tt([de("wallet-accounts-card")],Is);let Es=class extends ve{constructor(){super(...arguments),this._digits="",this._kind="expense",this._categoryId=null,this._accountId=null,this._submitting=!1,this._result=null}defaultTitle(){return"Quick Add"}trackGood(){return!!this.hass&&ks(this.hass).length>0}amount(){const t=parseInt(this._digits||"0",10)/100;return"expense"===this._kind?-t:t}selectedAccount(t){return t.find(t=>t.id===this._accountId)}renderContent(){const t=this.hass?ks(this.hass):[],e=this.hass?As(this.hass):[];if(!t.length&&!this.seenGood)return this.wrap(Gt`${this.head()}${Qe(3)}`);const s=this.selectedAccount(t),i=s?.currency??this.hass?.config.currency??void 0,a=!!this._accountId&&!!s&&!s.bankSynced&&""!==this._digits&&0!==this.amount();return this.wrap(Gt`
      <div class="relative">
        ${this._result?this.overlay(this._result):""}
        ${this.head(Gt`<span class="chip"
          style="background:${H};color:#0B0E14">INTERACTIVE</span>`)}

        ${this.amountPanel(i)}
        ${this.typeToggle()}
        ${this.categorySection(e)}
        ${this.accountSection(t,s)}
        ${this.keypad()}

        <button
          class="btn"
          style="background:${"expense"===this._kind?T:M};margin-top:14px"
          ?disabled=${!a||this._submitting}
          @click=${()=>this.submit(s)}
        >
          ${this._submitting?"Adding…":"Add record"}
        </button>
        ${s?.bankSynced?Gt`<div class="footnote" style="color:${T}">
              ${s.name} is bank-synced (read-only). Pick a cash/manual account.
            </div>`:""}
      </div>
    `)}amountPanel(t){return Gt`
      <div
        style="background:var(--w-chip);border-radius:14px;padding:16px 18px;margin-bottom:12px"
      >
        <span class="caption caption-up"
          >${this._kind} · ${t??""}</span
        >
        <div
          class="big-value ${"expense"===this._kind?"expense":"income"}"
          style="font-size:34px;margin-top:4px"
        >
          ${Re(this.hass,this.amount(),t,{signed:!0})}
        </div>
      </div>
    `}typeToggle(){return Gt`
      <div class="segmented" style="margin-bottom:12px">
        ${["expense","income"].map(t=>Gt`<button
            class=${this._kind===t?"active":""}
            @click=${()=>this._kind=t}
          >
            ${t[0].toUpperCase()+t.slice(1)}
          </button>`)}
      </div>
    `}categorySection(t){const e=t.filter(t=>t.name);return e.length?Gt`
      <span class="label">Category</span>
      <div class="pill-row" style="margin:6px 0 12px">
        ${e.slice(0,12).map(e=>{const s=Le(e.name,t),i=this._categoryId===e.id;return Gt`<button
            class="pill"
            style=${i?`border-color:${s};background:${Ge(s,.13)}`:""}
            @click=${()=>this._categoryId=i?null:e.id}
          >
            <ha-icon
              icon=${Ve(e.name)}
              style="--mdc-icon-size:18px;color:${s}"
            ></ha-icon>
            ${e.name}
          </button>`})}
      </div>
    `:Gt``}accountSection(t,e){return Gt`
      <span class="label">Account</span>
      <div class="stack" style="gap:6px;margin:6px 0 12px">
        ${t.map(t=>{const e=this._accountId===t.id,s=t.bankSynced;return Gt`<button
            class="pill"
            style="width:100%;justify-content:space-between;${e?`border-color:${N}`:""};${s?"opacity:.55":""}"
            @click=${()=>!s&&(this._accountId=t.id)}
          >
            <span class="row" style="gap:8px">
              <ha-icon
                icon=${t.bankSynced?"mdi:bank":"mdi:cash"}
                style="--mdc-icon-size:18px;color:${t.bankSynced?U:L}"
              ></ha-icon>
              ${t.name}
              ${s?Gt`<span class="muted" style="font-size:11px">read-only</span>`:""}
            </span>
            ${e?Gt`<ha-icon icon="mdi:check" style="--mdc-icon-size:18px"></ha-icon>`:""}
          </button>`})}
        ${e?.bankSynced?Gt`<span class="footnote">Bank-synced accounts can't receive manual records.</span>`:""}
      </div>
    `}keypad(){return Gt`
      <div
        style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px"
      >
        ${["1","2","3","4","5","6","7","8","9",".","0","⌫"].map(t=>Gt`<button
            class="pill"
            style="justify-content:center;min-height:48px;font-size:18px;font-weight:700"
            @click=${()=>this.press(t)}
          >
            ${t}
          </button>`)}
      </div>
    `}press(t){this._result&&(this._result=null),"⌫"!==t?"."!==t&&(this._digits.length>=7||""===this._digits&&"0"===t||(this._digits+=t)):this._digits=this._digits.slice(0,-1)}async submit(e){if(!this.hass||!e||e.bankSynced)return;const s=this.amount();if(!s)return;this._submitting=!0;const i={account_id:e.id,amount:s,payment_type:"cash"};this._categoryId&&(i.category_id=this._categoryId);try{await this.hass.callService(t,u,i),this._result={ok:!0,msg:`${Re(this.hass,s,e.currency,{signed:!0})} logged to ${e.name} via ${t}.${u}.`},this._digits=""}catch(t){this._result={ok:!1,msg:Ps(t)}}finally{this._submitting=!1}}overlay(t){return Gt`
      <div class="overlay ${t.ok?"ok":"err"}">
        <ha-icon icon=${t.ok?"mdi:check-circle":"mdi:alert-circle"}></ha-icon>
        <strong>${t.ok?"Record added":"Couldn't add record"}</strong>
        <div class="footnote">${t.msg}</div>
        <button
          class="btn"
          style="background:var(--w-transfer);max-width:180px"
          @click=${()=>this._result=null}
        >
          ${t.ok?"Add another":"Try again"}
        </button>
      </div>
    `}getCardSize(){return 8}};function Ps(t){return String(t&&"object"==typeof t&&"message"in t?t.message:t)}function Ms(t){return"create"===t?M:"patch"===t?N:T}function Ts(t){return"create"===t?"Create":"patch"===t?"Patch":"Delete"}tt([me()],Es.prototype,"_digits",void 0),tt([me()],Es.prototype,"_kind",void 0),tt([me()],Es.prototype,"_categoryId",void 0),tt([me()],Es.prototype,"_accountId",void 0),tt([me()],Es.prototype,"_submitting",void 0),tt([me()],Es.prototype,"_result",void 0),Es=tt([de("wallet-quick-add-card")],Es);class Ns extends ve{constructor(){super(...arguments),this._submitting=!1,this._result=null}serviceCaption(e){return Gt`<span class="svc-caption">${t}.${e}</span>`}segmented(t,e,s,i=[]){return Gt`
      <div class="segmented" style="margin-bottom:14px">
        ${t.map(([t,a])=>Gt`<button
            class=${e===t?"active":""}
            ?disabled=${i.includes(t)}
            @click=${()=>!i.includes(t)&&s(t)}
          >
            ${i.includes(t)?Gt`<ha-icon
                  icon="mdi:lock"
                  style="--mdc-icon-size:13px;vertical-align:-2px"
                ></ha-icon> `:""}${a}
          </button>`)}
      </div>
    `}primaryButton(t,e,s,i=!1){return Gt`
      <button
        class="btn"
        style="background:${e};margin-top:12px"
        ?disabled=${i||this._submitting}
        @click=${s}
      >
        ${this._submitting?"Working…":t}
      </button>
    `}async call(e,s,i){if(this.hass){this._submitting=!0;try{await this.hass.callService(t,e,s),this._result={ok:!0,title:"Service called",msg:`${t}.${e}`},this.onSuccess?.(i)}catch(t){this._result={ok:!1,title:"Service error",msg:Ps(t)}}finally{this._submitting=!1}}}overlay(){if(!this._result)return"";const t=this._result;return Gt`
      <div class="overlay ${t.ok?"ok":"err"}">
        <ha-icon icon=${t.ok?"mdi:check-circle":"mdi:alert-circle"}></ha-icon>
        <strong>${t.title}</strong>
        <div class="footnote" style="word-break:break-word">${t.msg}</div>
        <button
          class="btn"
          style="background:var(--w-transfer);max-width:160px"
          @click=${()=>this._result=null}
        >
          Dismiss
        </button>
      </div>
    `}getCardSize(){return 6}}tt([me()],Ns.prototype,"_submitting",void 0),tt([me()],Ns.prototype,"_result",void 0);let Fs=class extends Ns{constructor(){super(...arguments),this._mode="add",this._amount="",this._kind="expense",this._accountId=null,this._categoryId=null,this._payment="cash",this._note="",this._labelsRaw="",this._recordId=null,this._force=!1}defaultTitle(){return"Records"}trackGood(){return!!this.hass&&ks(this.hass).length>0}service(){return"add"===this._mode?u:"edit"===this._mode?m:g}renderContent(){const t=this.hass?ks(this.hass):[],e=this.hass?As(this.hass):[];return this.wrap(Gt`
      <div class="relative">
        ${this.overlay()}
        ${this.head(this.serviceCaption(this.service()))}
        ${this.segmented([["add","Add"],["edit","Edit"],["delete","Delete"]],this._mode,t=>this._mode=t)}
        ${"delete"===this._mode?this.deleteForm():this.editForm(t,e)}
      </div>
    `)}editForm(t,e){const s=t.find(t=>t.id===this._accountId),i=this.signedAmount(),a=s?.currency,n="edit"===this._mode?!!this._recordId:!!this._accountId&&!!s&&!s.bankSynced&&0!==i;return Gt`
      <div class="stack">
        <div
          style="background:var(--w-chip);border-radius:12px;padding:14px"
        >
          <span class="caption caption-up">${this._kind} ${a??""}</span>
          <div
            class="big-value ${"expense"===this._kind?"expense":"income"}"
            style="font-size:26px"
          >
            ${Re(this.hass,i,a,{signed:!0})}
          </div>
        </div>

        <div class="segmented">
          ${["expense","income"].map(t=>Gt`<button
              class=${this._kind===t?"active":""}
              @click=${()=>this._kind=t}
            >
              ${t[0].toUpperCase()+t.slice(1)}
            </button>`)}
        </div>

        <div class="field">
          <label>Amount</label>
          <input
            type="number"
            step="0.01"
            min="0"
            .value=${this._amount}
            @input=${t=>this._amount=t.target.value}
            placeholder="0.00"
          />
        </div>

        ${"edit"===this._mode?Gt`<div class="field">
              <label>Record id (from Last Records)</label>
              <input
                .value=${this._recordId??""}
                @input=${t=>this._recordId=t.target.value||null}
                placeholder="record id"
              />
            </div>`:this.accountPicker(t)}

        <div class="field">
          <label>Category</label>
          <div class="pill-row">
            ${e.slice(0,10).map(t=>{const s=Le(t.name,e),i=this._categoryId===t.id;return Gt`<button
                class="pill"
                style=${i?`border-color:${s};background:${Ge(s,.13)}`:""}
                @click=${()=>this._categoryId=i?null:t.id}
              >
                <ha-icon
                  icon=${Ve(t.name)}
                  style="--mdc-icon-size:16px;color:${s}"
                ></ha-icon>
                ${t.name}
              </button>`})}
          </div>
        </div>

        <div class="field">
          <label>Payment type</label>
          <select
            .value=${this._payment}
            @change=${t=>this._payment=t.target.value}
          >
            ${K.map(t=>Gt`<option value=${t}>${t.replace("_"," ")}</option>`)}
          </select>
        </div>

        <div class="field">
          <label>Labels (comma-separated ids)</label>
          <input
            .value=${this._labelsRaw}
            @input=${t=>this._labelsRaw=t.target.value}
            placeholder="label id, label id"
          />
        </div>

        <div class="field">
          <label>Note</label>
          <input
            .value=${this._note}
            @input=${t=>this._note=t.target.value}
          />
        </div>

        ${s?.bankSynced?Gt`<div class="footnote" style="color:${T}">
              ${s.name} is bank-synced (read-only).
            </div>`:""}
        ${this.primaryButton("add"===this._mode?"Add record":"Save changes",Ms("add"===this._mode?"create":"patch"),()=>this.submitEdit(s),!n)}
      </div>
    `}accountPicker(t){return Gt`
      <div class="field">
        <label>Account</label>
        <div class="stack" style="gap:6px">
          ${t.map(t=>{const e=this._accountId===t.id;return Gt`<button
              class="pill"
              style="width:100%;justify-content:space-between;${e?`border-color:${N}`:""};${t.bankSynced?"opacity:.55":""}"
              @click=${()=>!t.bankSynced&&(this._accountId=t.id)}
            >
              <span>${t.name}${t.bankSynced?" · read-only":""}</span>
              ${e?Gt`<ha-icon icon="mdi:check" style="--mdc-icon-size:16px"></ha-icon>`:""}
            </button>`})}
        </div>
      </div>
    `}deleteForm(){const t=this.hass?xe(this.hass):void 0,e=t?.attributes.records??[];if(!e.length)return Gt`<div class="state-empty">
        <ha-icon icon="mdi:receipt-text-outline"></ha-icon>
        <div>No recent records to delete</div>
      </div>`;const s=e.find(t=>t.id===this._recordId);return Gt`
      <div class="stack">
        <div class="field">
          <label>Pick a record</label>
          <div class="stack" style="gap:6px">
            ${e.map(t=>{const e=this._recordId===t.id,s=ze(t.amount)??0;return Gt`<button
                class="pill"
                style="width:100%;justify-content:space-between;${e?`border-color:${T}`:""}"
                @click=${()=>this._recordId=e?null:t.id}
              >
                <span class="ellipsis"
                  >${t.category??"Record"} · ${t.account??""} ·
                  ${De(this.hass,t.date)}</span
                >
                <span class=${s<0?"expense":"income"}
                  >${Re(this.hass,s,void 0,{signed:!0})}</span
                >
              </button>`})}
          </div>
        </div>
        ${s?Gt`<div class="dashed" style="text-align:left">
              <strong>Reference pre-check runs before delete.</strong> Records on
              bank-synced accounts cannot be deleted.
            </div>`:""}
        <label class="row" style="gap:8px;cursor:pointer">
          <input
            type="checkbox"
            .checked=${this._force}
            @change=${t=>this._force=t.target.checked}
          />
          <span class="label">Force (skip reference pre-check)</span>
        </label>
        ${this.primaryButton("Delete record",Ms("delete"),()=>this.submitDelete(),!this._recordId)}
      </div>
    `}signedAmount(){const t=Math.abs(ze(this._amount)??0);return"expense"===this._kind?-t:t}labelIds(){return this._labelsRaw.split(",").map(t=>t.trim()).filter(Boolean)}submitEdit(t){const e=this.signedAmount();if("add"===this._mode){if(!t||t.bankSynced||!e)return;const s={account_id:t.id,amount:e,payment_type:this._payment};this._categoryId&&(s.category_id=this._categoryId),this._note&&(s.note=this._note),this.labelIds().length&&(s.label_ids=this.labelIds()),this.call(u,s,"Record added")}else{if(!this._recordId)return;const t={record_id:this._recordId};this._amount&&(t.amount=e),this._categoryId&&(t.category_id=this._categoryId),this._note&&(t.note=this._note),this._payment&&(t.payment_type=this._payment),this.labelIds().length&&(t.label_ids=this.labelIds()),this.call(m,t,"Record updated")}}submitDelete(){if(!this._recordId)return;const t={record_id:this._recordId};this._force&&(t.force=!0),this.call(g,t,"Record deleted")}getCardSize(){return 9}};tt([me()],Fs.prototype,"_mode",void 0),tt([me()],Fs.prototype,"_amount",void 0),tt([me()],Fs.prototype,"_kind",void 0),tt([me()],Fs.prototype,"_accountId",void 0),tt([me()],Fs.prototype,"_categoryId",void 0),tt([me()],Fs.prototype,"_payment",void 0),tt([me()],Fs.prototype,"_note",void 0),tt([me()],Fs.prototype,"_labelsRaw",void 0),tt([me()],Fs.prototype,"_recordId",void 0),tt([me()],Fs.prototype,"_force",void 0),Fs=tt([de("wallet-records-action-card")],Fs);let Rs=class extends Ns{constructor(){super(...arguments),this._from=null,this._to=null,this._amount="",this._pairing="new",this._note=""}defaultTitle(){return"Transfer"}trackGood(){return!!this.hass&&ks(this.hass).length>0}renderContent(){const t=this.hass?ks(this.hass):[];if(!t.length&&!this.seenGood)return this.wrap(Gt`${this.head()}${Qe(3)}`);const e=t.find(t=>t.id===this._from),s=Math.abs(ze(this._amount)??0),i=!!this._from&&!!this._to&&this._from!==this._to&&s>0;return this.wrap(Gt`
      <div class="relative">
        ${this.overlay()}
        ${this.head(this.serviceCaption(v))}

        <div class="row" style="gap:10px;align-items:stretch">
          ${this.tile("From",t,this._from,t=>this._from=t)}
          <div class="row" style="align-items:center">
            <ha-icon icon="mdi:arrow-right-bold" style="color:${N}"></ha-icon>
          </div>
          ${this.tile("To",t,this._to,t=>this._to=t)}
        </div>

        <div
          style="background:var(--w-chip);border-radius:12px;padding:14px;margin-top:12px"
        >
          <span class="caption caption-up">Amount ${e?.currency??""}</span>
          <div class="big-value transfer" style="font-size:26px">
            ${Re(this.hass,s,e?.currency,{signed:!1})}
          </div>
        </div>
        <div class="field" style="margin-top:10px">
          <input
            type="number"
            step="0.01"
            min="0"
            .value=${this._amount}
            @input=${t=>this._amount=t.target.value}
            placeholder="0.00"
          />
        </div>

        <div class="field" style="margin-top:10px">
          <label>Pairing</label>
          <div class="segmented">
            ${[["new","Paired"],["unpaired","Two records"]].map(([t,e])=>Gt`<button
                class=${this._pairing===t?"active":""}
                @click=${()=>this._pairing=t}
              >
                ${e}
              </button>`)}
          </div>
        </div>

        <div class="field" style="margin-top:10px">
          <label>Note</label>
          <input
            .value=${this._note}
            @input=${t=>this._note=t.target.value}
          />
        </div>

        ${this._from&&this._from===this._to?Gt`<div class="footnote" style="color:${T}">
              From and To must differ.
            </div>`:""}
        ${this.primaryButton("Transfer",Ms("patch"),()=>this.submit(),!i)}
      </div>
    `)}tile(t,e,s,i){const a=e.find(t=>t.id===s);return Gt`
      <div class="grow field">
        <label>${t}</label>
        <select
          .value=${s??""}
          @change=${t=>i(t.target.value)}
        >
          <option value="" disabled selected=${!s}>Select…</option>
          ${e.map(t=>Gt`<option value=${t.id}>${t.name}</option>`)}
        </select>
        ${a?Gt`<span class="footnote"
              >${Re(this.hass,a.balance,a.currency)}</span
            >`:""}
      </div>
    `}submit(){const t=Math.abs(ze(this._amount)??0);if(!this._from||!this._to||this._from===this._to||!t)return;const e={from_account_id:this._from,to_account_id:this._to,amount:t,pairing_mode:this._pairing};this._note&&(e.note=this._note),this.call(v,e,"Transfer created")}};tt([me()],Rs.prototype,"_from",void 0),tt([me()],Rs.prototype,"_to",void 0),tt([me()],Rs.prototype,"_amount",void 0),tt([me()],Rs.prototype,"_pairing",void 0),tt([me()],Rs.prototype,"_note",void 0),Rs=tt([de("wallet-transfer-card")],Rs);let Bs=class extends Ns{constructor(){super(...arguments),this._op="create",this._budgetId="",this._name="",this._limit="",this._type=Z[1],this._currency="",this._categoryIds=[]}defaultTitle(){return"Budgets"}renderContent(){const t=this.hass?As(this.hass):[],e="create"!==this._op,s="delete"===this._op?!!this._budgetId:!("patch"===this._op&&!this._budgetId||"create"===this._op&&(!this._name||!this._limit));return this.wrap(Gt`
      <div class="relative">
        ${this.overlay()}
        ${this.head(this.serviceCaption($))}
        ${this.segmented([["create","Create"],["patch","Patch"],["delete","Delete"]],this._op,t=>this._op=t)}
        <div class="stack">
          ${e?this.textField("Budget id",this._budgetId,t=>this._budgetId=t):""}
          ${"delete"!==this._op?Gt`
                ${this.textField("Name",this._name,t=>this._name=t)}
                ${this.numberField("Limit",this._limit,t=>this._limit=t)}
                <div class="field">
                  <label>Interval</label>
                  <select
                    .value=${this._type}
                    @change=${t=>this._type=t.target.value}
                  >
                    ${Z.map(t=>Gt`<option value=${t}>${t}</option>`)}
                  </select>
                </div>
                ${this.textField("Currency code",this._currency,t=>this._currency=t,"EUR")}
                ${this.categoryChips(t)}
              `:Gt`<div class="dashed" style="text-align:left">
                Deleting a budget removes its awareness automations' source. This can't be undone.
              </div>`}
          ${this.primaryButton(`${Ts(this._op)} budget`,Ms(this._op),()=>this.submit(),!s)}
        </div>
      </div>
    `)}categoryChips(t){return Gt`
      <div class="field">
        <label>Categories</label>
        <div class="pill-row">
          ${t.slice(0,12).map(e=>{const s=Le(e.name,t),i=this._categoryIds.includes(e.id);return Gt`<button
              class="pill"
              style=${i?`border-color:${s};background:${Ge(s,.13)}`:""}
              @click=${()=>this._categoryIds=i?this._categoryIds.filter(t=>t!==e.id):[...this._categoryIds,e.id]}
            >
              ${e.name}
            </button>`})}
        </div>
      </div>
    `}textField(t,e,s,i=""){return Gt`<div class="field">
      <label>${t}</label>
      <input
        .value=${e}
        placeholder=${i}
        @input=${t=>s(t.target.value)}
      />
    </div>`}numberField(t,e,s){return Gt`<div class="field">
      <label>${t}</label>
      <input
        type="number"
        step="0.01"
        .value=${e}
        @input=${t=>s(t.target.value)}
      />
    </div>`}submit(){const t={operation:this._op};"create"!==this._op&&(t.budget_id=this._budgetId),"delete"!==this._op&&(this._name&&(t.name=this._name),this._limit&&(t.limit=Number(this._limit)),this._type&&(t.type=this._type),this._currency&&(t.currency_code=this._currency),this._categoryIds.length&&(t.category_ids=this._categoryIds)),this.call($,t,"Budget saved")}};tt([me()],Bs.prototype,"_op",void 0),tt([me()],Bs.prototype,"_budgetId",void 0),tt([me()],Bs.prototype,"_name",void 0),tt([me()],Bs.prototype,"_limit",void 0),tt([me()],Bs.prototype,"_type",void 0),tt([me()],Bs.prototype,"_currency",void 0),tt([me()],Bs.prototype,"_categoryIds",void 0),Bs=tt([de("wallet-budgets-action-card")],Bs);let Ds=class extends Ns{constructor(){super(...arguments),this._op="create",this._categoryId="",this._parentId="",this._name="",this._cardinality="none",this._color="Blue"}defaultTitle(){return"Categories"}renderContent(){const t=this.hass?As(this.hass):[],e=t.filter(t=>t.custom),s=t.filter(t=>!t.parent_id),i="create"===this._op?!!this._name&&!!this._parentId:!!this._categoryId;return this.wrap(Gt`
      <div class="relative">
        ${this.overlay()}
        ${this.head(this.serviceCaption(f))}
        ${this.segmented([["create","Create"],["patch","Patch"],["delete","Delete"]],this._op,t=>this._op=t)}
        <div class="footnote" style="margin-bottom:10px">
          Only custom categories are deletable; built-ins are locked.
        </div>
        <div class="stack">
          ${"create"===this._op?this.selectField("Parent category",this._parentId,s.map(t=>[t.id,t.name]),t=>this._parentId=t):this.selectField("Custom category",this._categoryId,e.map(t=>[t.id,t.name]),t=>this._categoryId=t)}
          ${"delete"!==this._op?Gt`
                <div class="field">
                  <label>Name</label>
                  <input
                    .value=${this._name}
                    @input=${t=>this._name=t.target.value}
                  />
                </div>
                <div class="field">
                  <label>Cardinality</label>
                  <select
                    .value=${this._cardinality}
                    @change=${t=>this._cardinality=t.target.value}
                  >
                    ${Q.map(t=>Gt`<option value=${t}>${t}</option>`)}
                  </select>
                </div>
                ${this.colorPicker()}
              `:Gt`<div class="dashed" style="text-align:left">
                Deleting a custom category can't be undone. Built-in categories reject delete.
              </div>`}
          ${this.primaryButton(`${Ts(this._op)} category`,Ms(this._op),()=>this.submit(),!i)}
        </div>
      </div>
    `)}colorPicker(){return Gt`
      <div class="field">
        <label>Color</label>
        <div class="pill-row">
          ${X.map(t=>{const e=q[t],s=this._color===t;return Gt`<button
              class="pill"
              title=${t}
              style="padding:6px;border-color:${s?e:"var(--w-line)"};${s?`box-shadow:0 0 0 2px ${e}`:""}"
              @click=${()=>this._color=t}
            >
              <span
                class="dot"
                style="width:18px;height:18px;background:${e}"
              ></span>
            </button>`})}
        </div>
      </div>
    `}selectField(t,e,s,i){return Gt`<div class="field">
      <label>${t}</label>
      <select
        .value=${e}
        @change=${t=>i(t.target.value)}
      >
        <option value="" disabled selected=${!e}>Select…</option>
        ${s.map(([t,e])=>Gt`<option value=${t}>${e}</option>`)}
      </select>
    </div>`}submit(){const t={operation:this._op};"create"===this._op?(t.parent_id=this._parentId,t.name=this._name,"none"!==this._cardinality&&(t.cardinality=this._cardinality),t.color=this._color):"patch"===this._op?(t.category_id=this._categoryId,this._name&&(t.name=this._name),"none"!==this._cardinality&&(t.cardinality=this._cardinality),je(this._color)&&(t.color=this._color)):t.category_id=this._categoryId,this.call(f,t,"Category saved")}};tt([me()],Ds.prototype,"_op",void 0),tt([me()],Ds.prototype,"_categoryId",void 0),tt([me()],Ds.prototype,"_parentId",void 0),tt([me()],Ds.prototype,"_name",void 0),tt([me()],Ds.prototype,"_cardinality",void 0),tt([me()],Ds.prototype,"_color",void 0),Ds=tt([de("wallet-categories-action-card")],Ds);let Os=class extends Ns{constructor(){super(...arguments),this._op="create",this._accountId="",this._name="",this._type=J[1],this._currency="",this._initialBalance="",this._color="Turquoise",this._excludeFromStats=!1,this._archived=!1}defaultTitle(){return"Accounts"}renderContent(){const t=this.hass?ks(this.hass):[],e="create"===this._op?!!this._name:!!this._accountId;return this.wrap(Gt`
      <div class="relative">
        ${this.overlay()}
        ${this.head(this.serviceCaption(y))}
        ${this.segmented([["create","Create"],["patch","Patch"],["delete","Delete"]],this._op,t=>this._op=t,["delete"])}
        <div class="footnote" style="margin-bottom:10px">
          Delete not exposed in v1 (contract). Cash/manual accounts only.
        </div>
        <div class="stack">
          ${"patch"===this._op?Gt`<div class="field">
                <label>Account</label>
                <select
                  .value=${this._accountId}
                  @change=${t=>this._accountId=t.target.value}
                >
                  <option value="" disabled selected=${!this._accountId}>Select…</option>
                  ${t.map(t=>Gt`<option value=${t.id}>${t.name}</option>`)}
                </select>
              </div>`:""}
          <div class="field">
            <label>Name</label>
            <input
              .value=${this._name}
              @input=${t=>this._name=t.target.value}
            />
          </div>
          <div class="field">
            <label>Account type</label>
            <select
              .value=${this._type}
              @change=${t=>this._type=t.target.value}
            >
              ${J.map(t=>Gt`<option value=${t}>${t}</option>`)}
            </select>
          </div>
          ${"create"===this._op?Gt`
                <div class="field">
                  <label>Currency code</label>
                  <input
                    .value=${this._currency}
                    placeholder="EUR"
                    @input=${t=>this._currency=t.target.value}
                  />
                </div>
                <div class="field">
                  <label>Initial balance</label>
                  <input
                    type="number"
                    step="0.01"
                    .value=${this._initialBalance}
                    @input=${t=>this._initialBalance=t.target.value}
                  />
                </div>
              `:""}
          ${this.colorPicker()}
          <label class="row" style="gap:8px;cursor:pointer">
            <input
              type="checkbox"
              .checked=${this._excludeFromStats}
              @change=${t=>this._excludeFromStats=t.target.checked}
            />
            <span class="label">Exclude from stats</span>
          </label>
          ${"patch"===this._op?Gt`<label class="row" style="gap:8px;cursor:pointer">
                <input
                  type="checkbox"
                  .checked=${this._archived}
                  @change=${t=>this._archived=t.target.checked}
                />
                <span class="label">Archived</span>
              </label>`:""}
          ${this.primaryButton(`${Ts(this._op)} account`,Ms(this._op),()=>this.submit(),!e)}
        </div>
      </div>
    `)}colorPicker(){return Gt`
      <div class="field">
        <label>Color</label>
        <div class="pill-row">
          ${X.map(t=>{const e=q[t],s=this._color===t;return Gt`<button
              class="pill"
              title=${t}
              style="padding:6px;border-color:${s?e:"var(--w-line)"};${s?`box-shadow:0 0 0 2px ${e}`:""}"
              @click=${()=>this._color=t}
            >
              <span class="dot" style="width:18px;height:18px;background:${e}"></span>
            </button>`})}
        </div>
      </div>
    `}submit(){if("delete"===this._op)return;const t={operation:this._op};"patch"===this._op&&(t.account_id=this._accountId),this._name&&(t.name=this._name),this._type&&(t.account_type=this._type),"create"===this._op&&(this._currency&&(t.currency_code=this._currency),this._initialBalance&&(t.initial_balance=Number(this._initialBalance))),t.color=this._color,t.exclude_from_stats=this._excludeFromStats,"patch"===this._op&&(t.archived=this._archived),this.call(y,t,"Account saved")}};tt([me()],Os.prototype,"_op",void 0),tt([me()],Os.prototype,"_accountId",void 0),tt([me()],Os.prototype,"_name",void 0),tt([me()],Os.prototype,"_type",void 0),tt([me()],Os.prototype,"_currency",void 0),tt([me()],Os.prototype,"_initialBalance",void 0),tt([me()],Os.prototype,"_color",void 0),tt([me()],Os.prototype,"_excludeFromStats",void 0),tt([me()],Os.prototype,"_archived",void 0),Os=tt([de("wallet-accounts-action-card")],Os);let zs=class extends Ns{constructor(){super(...arguments),this._op="create",this._labelId="",this._name="",this._color="Pink",this._archived=!1}defaultTitle(){return"Labels"}renderContent(){const t=this.hass?function(t){const e=Ie(t);return e?.attributes.labels??[]}(this.hass):[],e="create"===this._op?!!this._name:!!this._labelId;return this.wrap(Gt`
      <div class="relative">
        ${this.overlay()}
        ${this.head(this.serviceCaption(_))}
        ${this.segmented([["create","Create"],["patch","Patch"],["delete","Delete"]],this._op,t=>this._op=t,["delete"])}
        <div class="footnote" style="margin-bottom:10px">
          Delete not exposed in v1. Archive instead.
        </div>
        <div class="stack">
          ${"patch"===this._op?Gt`<div class="field">
                <label>Label</label>
                <select
                  .value=${this._labelId}
                  @change=${t=>this._labelId=t.target.value}
                >
                  <option value="" disabled selected=${!this._labelId}>Select…</option>
                  ${t.map(t=>Gt`<option value=${t.id}>${t.name}</option>`)}
                </select>
              </div>`:""}
          <div class="field">
            <label>Name</label>
            <input
              .value=${this._name}
              @input=${t=>this._name=t.target.value}
            />
          </div>
          <div class="field">
            <label>Color</label>
            <div class="pill-row">
              ${X.map(t=>{const e=q[t],s=this._color===t;return Gt`<button
                  class="pill"
                  title=${t}
                  style="padding:6px;border-color:${s?e:"var(--w-line)"};${s?`box-shadow:0 0 0 2px ${e}`:""}"
                  @click=${()=>this._color=t}
                >
                  <span class="dot" style="width:18px;height:18px;background:${e}"></span>
                </button>`})}
            </div>
          </div>
          <label class="row" style="gap:8px;cursor:pointer">
            <input
              type="checkbox"
              .checked=${this._archived}
              @change=${t=>this._archived=t.target.checked}
            />
            <span class="label">Archived</span>
          </label>
          ${this.primaryButton(`${Ts(this._op)} label`,Ms(this._op),()=>this.submit(),!e)}
        </div>
      </div>
    `)}submit(){if("delete"===this._op)return;const t={operation:this._op};"patch"===this._op&&(t.label_id=this._labelId),this._name&&(t.name=this._name),t.color=this._color,t.archived=this._archived,this.call(_,t,"Label saved")}};tt([me()],zs.prototype,"_op",void 0),tt([me()],zs.prototype,"_labelId",void 0),tt([me()],zs.prototype,"_name",void 0),tt([me()],zs.prototype,"_color",void 0),tt([me()],zs.prototype,"_archived",void 0),zs=tt([de("wallet-labels-action-card")],zs);let Us=class extends Ns{constructor(){super(...arguments),this._tab="orders"}defaultTitle(){return"Automations"}ordersEntity(){return this.hass?Ae(this.hass):void 0}rulesEntity(){return this.hass?Ce(this.hass):void 0}trackGood(){return!Ne(this.ordersEntity())||!Ne(this.rulesEntity())}renderContent(){const t="orders"===this._tab?b:w;return this.wrap(Gt`
      <div class="relative">
        ${this.overlay()}
        ${this.head(this.serviceCaption(t))}
        <div class="segmented" style="margin-bottom:14px">
          ${[["orders","Standing orders"],["rules","Record rules"]].map(([t,e])=>Gt`<button
              class=${this._tab===t?"active":""}
              @click=${()=>this._tab=t}
            >
              ${e}
            </button>`)}
        </div>
        ${"orders"===this._tab?this.renderOrders():this.renderRules()}
      </div>
    `)}renderOrders(){const t=this.ordersEntity();if(Ne(t))return this.seenGood?qe("Standing orders unavailable","mdi:calendar-sync"):Qe(3);const e=t.attributes.orders??[];return e.length?Gt`
      <div>
        ${e.map(t=>this.row("mdi:calendar-sync",t.name??"Standing order",Gt`${t.type??""}
            ${t.due_date?Gt`· ${De(this.hass,t.due_date)}`:""}
            ${void 0!==t.amount?Gt`· ${Re(this.hass,ze(t.amount),t.currency)}`:""}`,()=>this.call(b,{standing_order_id:t.id},"Deleted")))}
      </div>
    `:qe("No standing orders","mdi:calendar-blank")}renderRules(){const t=this.rulesEntity();if(Ne(t))return this.seenGood?qe("Record rules unavailable","mdi:auto-fix"):Qe(3);const e=t.attributes.rules??[];return e.length?Gt`
      <div>
        ${e.map(t=>{const e=Array.isArray(t.keywords)?t.keywords.join(", "):t.keywords;return this.row("mdi:auto-fix",t.name??"Rule",Gt`${t.category?Gt`→ ${t.category}`:""}
            ${e?Gt`· ${e}`:""}`,()=>this.call(w,{record_rule_id:t.id},"Deleted"))})}
      </div>
    `:qe("No record rules","mdi:auto-fix")}row(t,e,s,i){return Gt`
      <div class="list-row">
        <div class="avatar" style="background:${Ge(N,.16)}">
          <ha-icon icon=${t} style="color:${N}"></ha-icon>
        </div>
        <div class="grow col" style="gap:2px">
          <span class="ellipsis" style="font-weight:700">${e}</span>
          <span class="subline">${s}</span>
        </div>
        <button
          class="pill"
          style="padding:8px;background:${Ge(T,.12)};border-color:transparent"
          title="Delete"
          ?disabled=${this._submitting}
          @click=${i}
        >
          <ha-icon icon="mdi:trash-can-outline" style="color:${T}"></ha-icon>
        </button>
      </div>
    `}getCardSize(){return 5}};tt([me()],Us.prototype,"_tab",void 0),Us=tt([de("wallet-automations-action-card")],Us);let Ls=class extends Ns{constructor(){super(...arguments),this._filePath=""}defaultTitle(){return"Import History"}available(){return!!this.hass&&Me(this.hass,x)}renderContent(){return this.available()?this.wrap(Gt`
      <div class="relative">
        ${this.overlay()}
        ${this.head(this.serviceCaption(x))}
        <div
          class="dashed"
          style="padding:26px;text-align:center;margin-bottom:12px"
        >
          <ha-icon icon="mdi:file-upload-outline" style="--mdc-icon-size:32px"></ha-icon>
          <div style="margin-top:8px">Path to a Wallet CSV export on the HA host</div>
        </div>
        <div class="field">
          <label>File path</label>
          <input
            .value=${this._filePath}
            placeholder="/config/wallet_export.csv"
            @input=${t=>this._filePath=t.target.value}
          />
        </div>
        <div class="footnote">
          Validated &amp; idempotent — safe to re-run; existing stats aren't skewed.
          Seeds LTS so trends work from day one.
        </div>
        <button
          class="btn"
          style="background:var(--w-text);color:var(--w-surface);margin-top:12px"
          ?disabled=${!this._filePath||this._submitting}
          @click=${()=>this.call(x,{file_path:this._filePath},"Import started")}
        >
          ${this._submitting?"Importing…":"Import history"}
        </button>
      </div>
    `):this.wrap(Gt`
        ${this.head(this.serviceCaption(x))}
        <div class="dashed" style="text-align:left">
          <strong>Coming in 0.1.x.</strong> The
          <code>ha_wallet.import_history</code> service isn't available in this
          version of the integration yet. Once released it will seed long-term
          statistics from a Wallet CSV export so Balance / Cash Flow /
          Period-to-Period trends work from day one.
        </div>
      `)}};tt([me()],Ls.prototype,"_filePath",void 0),Ls=tt([de("wallet-import-history-card")],Ls);const js=[["wallet-cash-flow-card","Wallet · Cash Flow","Net income vs expense with a VS-previous chip."],["wallet-cash-flow-trend-card","Wallet · Cash Flow Trend","Monthly income/expense bars + net line (LTS)."],["wallet-spending-card","Wallet · Spending","Spending gauge with total and VS-previous."],["wallet-nature-of-spending-card","Wallet · Nature of Spending","Must / Need / Want split."],["wallet-balance-by-currencies-card","Wallet · Balance by Currencies","One bar per currency, never merged."],["wallet-spending-by-categories-card","Wallet · Spending by Categories","Category bars for the period."],["wallet-credit-limits-card","Wallet · Credit Limits","Credit balance / limit utilization."],["wallet-balance-trend-card","Wallet · Balance Trend","Balance area chart over time (LTS)."],["wallet-expenses-structure-card","Wallet · Expenses Structure","Donut of expense shares by category."],["wallet-period-comparison-card","Wallet · Period to Period","Compare metric across three windows (LTS)."],["wallet-last-records-card","Wallet · Last Records","Most recent records list."],["wallet-accounts-card","Wallet · Accounts","Account balances with sync status."],["wallet-quick-add-card","Wallet · Quick Add","Keypad cash entry → add_record."],["wallet-records-action-card","Wallet · Records (write)","Add / edit / delete records."],["wallet-transfer-card","Wallet · Transfer","Account-to-account transfer."],["wallet-budgets-action-card","Wallet · Budgets (write)","Create / patch / delete budgets."],["wallet-categories-action-card","Wallet · Categories (write)","Manage custom categories."],["wallet-accounts-action-card","Wallet · Accounts (write)","Create / patch accounts."],["wallet-labels-action-card","Wallet · Labels (write)","Create / patch labels."],["wallet-automations-action-card","Wallet · Automations","Delete standing orders / record rules."],["wallet-import-history-card","Wallet · Import History","Seed LTS from a CSV export (0.1.x)."]].map(([t,e,s])=>({type:t,name:e,description:s}));window.customCards=window.customCards??[];for(const t of js)window.customCards.push({type:`custom:${t.type}`,name:t.name,description:t.description,preview:!0,documentationURL:"https://github.com/nuggetz/ha-wallet-card"});console.info("%c ha-wallet-card %c v0.1.0 ","color:#0B0E14;background:#C6FF3A;font-weight:700;border-radius:4px 0 0 4px;padding:2px 6px","color:#fff;background:#FF7A1A;font-weight:700;border-radius:0 4px 4px 0;padding:2px 6px");
