(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"/B5V":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/book",function(){return n("YQxH")}])},IR5H:function(e,t){e.exports="/_next/static/images/books-f5200ba7535257ce70a563fc9ff56f35.png"},P73Q:function(e,t,n){"use strict";var a=n("CLPb"),i=n("2ewA"),l=n("ERkP"),o=n.n(l),r=n("7xIC"),c=n("lTCR"),u=n.n(c),s=n("wk2l"),d=n("2SGB"),p=n("PDTj"),f=n("Fzwq"),m=o.a.createElement,y=function(e){var t=e.title,n=e.image,a=e.name,i=e.discountInPercent,l=(e.onChange,e.increment,e.decrement,e.data,e.deviceType,e.onClick);Object(s.a)(e,["title","image","name","discountInPercent","onChange","increment","decrement","data","deviceType","onClick"]);return m(f.b,{onClick:l,className:"book-card"},m(f.c,null,m(p.a,{url:n,className:"product-image",style:{position:"relative"},alt:t}),i?m(o.a.Fragment,null,m(f.e,null,i,"%")):""),m(f.d,null,m(f.i,null,t),m(f.a,null,m(d.a,{id:"intlTextBy",defaultMessage:"by"})," ",a)))},g=n("IF2T"),v=n("1U1M"),b=n("89Ff"),h=n("noiX"),T=n("cnNH"),k=n("MFEH"),x=n.n(k),w=n("IYOs"),C=o.a.createElement;function P(){var e=Object(i.a)(["\n  query getProducts(\n    $type: String\n    $text: String\n    $category: String\n    $offset: Int\n    $limit: Int\n  ) {\n    products(\n      type: $type\n      text: $text\n      category: $category\n      offset: $offset\n      limit: $limit\n    ) {\n      items {\n        id\n        title\n        slug\n        price\n        salePrice\n        discountInPercent\n        type\n        image\n        author {\n          id\n          name\n        }\n      }\n      hasMore\n    }\n  }\n"]);return P=function(){return e},e}var I=u()(P());t.a=function(e){var t=e.deviceType,n=e.type,i=e.fetchLimit,c=void 0===i?8:i,u=e.loadMore,s=void 0===u||u,d=Object(r.useRouter)(),p=Object(l.useState)(!1),f=p[0],m=p[1],k=Object(v.c)(I,{variables:{type:n,text:d.query.text,category:d.query.category,offset:0,limit:c}}),P=k.data,M=k.error,O=k.loading,j=k.fetchMore;if(O)return C(g.c,null,C(g.b,null,C(T.c,null)),C(g.b,null,C(T.c,null)),C(g.b,null,C(T.c,null)));if(M)return C("div",null,M.message);if(!P||!P.products||0===P.products.items.length)return C(w.a,null);return C(o.a.Fragment,null,C(g.f,null,P.products.items.map((function(e,n){var a;return C(g.e,{key:n,style:{paddingLeft:0,paddingRight:1}},C(g.d,null,C(x.a,{duration:800,delay:10*n,style:{height:"100%"}},C(y,{title:e.title,image:e.image,name:null===e||void 0===e?void 0:null===(a=e.author)||void 0===a?void 0:a.name,data:e,deviceType:t,onClick:function(){return d.push("/product/[slug]","/product/".concat(e.slug))}}))))}))),s&&P.products.hasMore&&C(g.a,null,C(b.a,{onClick:function(){m(!0),j({variables:{offset:Number(P.products.items.length),limit:c},updateQuery:function(e,t){var n=t.fetchMoreResult;return m(!1),n?{products:{__typename:e.products.__typename,items:[].concat(Object(a.a)(e.products.items),Object(a.a)(n.products.items)),hasMore:n.products.hasMore}}:e}})},title:"Load More",size:"small",isLoading:f,intlButtonId:"loadMoreBtn",loader:C(h.a,{color:"#009E7F"}),style:{minWidth:135,backgroundColor:"#ffffff",border:"1px solid #f1f1f1",color:"#009E7F"}})))}},YQxH:function(e,t,n){"use strict";n.r(t);var a=n("ERkP"),i=n.n(a),l=n("ysqo"),o=n.n(l),r=n("7xIC"),c=n("VU+f"),u=n("ZNCQ"),s=n("kNTC"),d=n("e3cP"),p=n("yWJx"),f=n("j5Ri"),m=n("P73Q"),y=n("NuC5"),g=n("GOnK"),v=n("hD4N"),b=n("IR5H"),h=n.n(b),T=n("OKUF"),k=i.a.createElement,x="books";t.default=Object(u.a)((function(e){var t=e.deviceType,n=Object(r.useRouter)().query,a=i.a.useRef(null);return i.a.useEffect((function(){(n.text||n.category)&&a.current&&window.scrollTo({top:a.current.offsetTop-110,behavior:"smooth"})}),[n]),k(i.a.Fragment,null,k(o.a,null,k("title",null,"Book - PickBazar")),k(c.a,null,k(p.a,{intlTitleId:"booksTitle",intlDescriptionId:"booksSubTitle",imageUrl:h.a}),t.desktop?k(i.a.Fragment,null,k(g.c,null,k(s.a,{items:T.a}),k(f.a,{type:x,deviceType:t})),k(g.e,null,k("div",{style:{margin:"0 -10px"}},k(d.a,{deviceType:t,data:v.a}))),k(g.b,null,k(g.h,null,k(f.a,{type:x,deviceType:t})),k(g.a,null,k("div",{ref:a},k(m.a,{type:x,deviceType:t,fetchLimit:16}))))):k(g.b,null,k(s.a,{items:T.a}),k(f.a,{type:x,deviceType:t}),k(g.e,null,k("div",{style:{margin:"0 -10px"}},k(d.a,{deviceType:t,data:v.a}))),k(g.a,{style:{width:"100%"}},k(m.a,{type:x,deviceType:t,fetchLimit:16}))),k(y.a,{deviceType:t})))}))}},[["/B5V",2,1,8,0,4,3,5,6,7,10,9,11,12,13,14,16,15,17]]]);