(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"16l3":function(e,a,t){"use strict";t.r(a),t.d(a,"projectsQuery",(function(){return b}));var c=t("KQm4"),r=t("q1tI"),n=t.n(r),l=t("NGwb"),i=t.n(l),o=t("Bl7J"),d=t("9eSz"),m=t.n(d),s=t("kOA+"),p=t.n(s),u=t("vOnD"),f=Object(u.a)(p.a).withConfig({displayName:"ProjectCard__StyledLink",componentId:"sc-1ha4j9f-0"})(["text-decoration:none;color:black;"]),j=function(e){var a=e.title,t=e.featured_image,c="/projects/"+e.slug;return n.a.createElement(f,{to:c,cover:!0,bg:"black",direction:"right",className:"project-card"},n.a.createElement("div",{className:"project-card__container"},n.a.createElement("div",{className:"project-card__top"},t?n.a.createElement("div",{className:"scaler"},n.a.createElement(i.a,{animateIn:"scale-down",delay:150},n.a.createElement("figure",{className:"project-card__featured-image"},n.a.createElement(m.a,{fluid:t,alt:a})))):null),n.a.createElement("div",{className:"project-card__bottom"},n.a.createElement("h2",{className:"project-card__title"},a),n.a.createElement("div",{className:"project-card__cta"},n.a.createElement("span",null,"See project")))))},g=u.a.div.withConfig({displayName:"projects__ProjectsContainer",componentId:"sc-1bxmbzc-0"})(["margin-top:5rem;padding:0 2rem;"]),_=u.a.ul.withConfig({displayName:"projects__ProjectsList",componentId:"sc-1bxmbzc-1"})(["display:flex;flex-direction:row;flex-wrap:wrap;li{flex-basis:50%;&:nth-child(even){padding-top:6rem;&:nth-child(even){padding-top:3rem;}}@media (max-width:768px){flex-basis:100%;padding-top:3rem;}}"]),b=(a.default=function(e){var a=e.data.allMarkdownRemark.edges;return n.a.createElement(o.a,{themeColor:"white"},n.a.createElement(g,null,n.a.createElement("h1",null,"Projects"),n.a.createElement(_,null,a&&[].concat(Object(c.a)(a),Object(c.a)(a),Object(c.a)(a),Object(c.a)(a)).map((function(e){var a=e.node.frontmatter,t=a.title,c=a.featuredImage,r=a.slug;return n.a.createElement("li",{key:r},n.a.createElement(i.a,{animateIn:"fadeInUp"},n.a.createElement(j,{title:t,slug:r,featured_image:c.childImageSharp.fluid})))})))))},"154391549")}}]);
//# sourceMappingURL=component---src-pages-projects-js-d7deb5530889aa1511a1.js.map