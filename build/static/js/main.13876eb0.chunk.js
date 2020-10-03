(this["webpackJsonptrello-tools"]=this["webpackJsonptrello-tools"]||[]).push([[0],{101:function(e,a,t){e.exports=t(159)},159:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),c=t.n(l),o=t(58),s=t(28),d=t(17),i=t(13),m=t(37),u=t(38),h=t(39),p=new(function(){function e(){Object(d.a)(this,e),this.authenticated=!1}return Object(i.a)(e,[{key:"login",value:function(e){this.authenticated=!0,e()}},{key:"logout",value:function(e){this.authenticated=!1,e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}()),f="ADMIN",b=123,v=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).getFields=function(e,a){"username"===e?t.setState({username:a.toUpperCase()}):"password"===e&&t.setState({password:a.toUpperCase()})},t.handleSubmit=function(e){var a=t.state,n=a.username,r=a.password;console.log(t.state),n&&r&&(n===f&&r==b?p.login((function(){return t.props.history.push("/dashboard")})):alert("Not authorized")),e.preventDefault()},t.state={username:null,password:null},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("section",{className:"content-s"},r.a.createElement("div",{className:"container-center animated slideInDown"},r.a.createElement("div",{className:"view-header"},r.a.createElement("div",{className:"header-icon"},r.a.createElement("i",{className:"pe page-header-icon pe-7s-unlock"})),r.a.createElement("div",{className:"header-title"},r.a.createElement("h3",null,"Login"),r.a.createElement("small",null,"Please enter your credentials to login."))),r.a.createElement("div",{className:"panel panel-filled"},r.a.createElement("div",{className:"panel-body"},r.a.createElement("form",{action:"index.html",id:"loginForm",novalidate:!0},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-form-label",htmlFor:"username"},"Username as :  Admin"),r.a.createElement("input",{type:"text",placeholder:"example@gmail.com",title:"Please enter you username",onChange:function(a){return e.getFields("username",a.target.value)},className:"form-control"}),r.a.createElement("span",{className:"form-text small"},"Your unique username to app")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-form-label",htmlFor:"password"},"Password as : 123"),r.a.createElement("input",{type:"password",title:"Please enter your password",placeholder:"******",onChange:function(a){return e.getFields("password",a.target.value)},className:"form-control"}),r.a.createElement("span",{className:"form-text small"},"Your strong password")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-accent",onClick:this.handleSubmit},"Login"))))))))}}]),a}(n.Component),E=t(2),N=function(e){var a=e.component,t=Object(E.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},t,{render:function(e){return p.isAuthenticated()?(console.log(p.authenticated),r.a.createElement(a,e)):r.a.createElement(s.a,{to:"/"})}}))},g=t(61),y=t.n(g),D=t(83),w=t(31),k="f185658707ae3b2d431801916e197bcd",C="6b5f1e12474c76bc6b4171ed92f08c27ddc4facd1866015e9c688fc68d51ca40",O=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).fetchBoards=function(){fetch("https://api.trello.com/1/members/me/boards?key=".concat(k,"&token=").concat(C)).then((function(e){return e.json()})).then((function(e){t.setState({boardsData:Object(w.a)({},t.state.boardsData,{array:e,selectedBoardId:e[0].id,selectedBoardName:e[0].name})}),t.fetchListWithCardsAgainstBoardId(e[0].id)})).catch(console.log)},t.fetchListWithCardsAgainstBoardId=function(e){fetch("https://api.trello.com/1/boards/".concat(e,"/lists?cards=open&card_fields=all&filter=open&fields=all&key=").concat(k,"&token=").concat(C)).then((function(e){return e.json()})).then((function(e){t.setState({listData:Object(w.a)({},t.state.listData,{array:e})})})).catch(console.log).finally((function(){return t.calculation()}))},t.calculation=Object(D.a)(y.a.mark((function e(){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],console.log("liiiiiiiiiiiiiiiiiiii data with ids --\x3e",t.state.listData.array),e.next=4,t.state.listData.array;case 4:if(e.t0=e.sent,!e.t0){e.next=7;break}t.state.listData.array.forEach((function(e){var t={};t.listId=e.id,t.listName=e.name,e.cards.length>0?t.cards=e.cards:t.cards=null,a.push(t)}));case 7:return t.setState({cardsWithIds:a}),n=[],e.next=11,t.state.membersData.array;case 11:if(e.t1=e.sent,!e.t1){e.next=14;break}t.state.membersData.array.forEach((function(e){a.forEach((function(e){var a;null===(a=e.cards)||void 0===a||a.forEach((function(e){n.filter((function(a){return a.id===e})).length?n.map((function(a){a.id===e&&a.count++})):n.push({count:1,singleCard:e})}))}))}));case 14:t.setState({taskCount:n});case 15:case"end":return e.stop()}}),e)}))),t.fetchMembersOfBoard=function(e){fetch("https://api.trello.com/1/boards/".concat(e,"/members?key=").concat(k,"&token=").concat(C)).then((function(e){return e.json()})).then((function(e){t.setState({membersData:Object(w.a)({},t.state.membersData,{array:e})})})).catch(console.log)},t.UpdateDashboardSection=function(e,a,n){t.fetchMembersOfBoard(n),t.fetchListWithCardsAgainstBoardId(n),t.setState({boardsData:Object(w.a)({},t.state.boardsData,{selectedBoardName:a,selectedBoardNo:e,selectedBoardId:n})})},t.showReports=function(e){var a=t.state.boardsData.selectedBoardId;t.props.history.push({pathname:"/reports",search:"?boardId=".concat(a,"&memberId=").concat(e.id)})},t.state={boardsData:{array:null,selectedBoardNo:null,selectedBoardId:null,selectedBoardName:null},listData:{array:null},membersData:{array:null},cardsWithIds:[],taskCount:null},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchBoards()}},{key:"render",value:function(){var e=this,a=this.state,t=a.boardsData,n=a.listData,l=a.membersData;a.selectedBoardNo,a.count;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-default fixed-top"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("div",{id:"mobile-menu"},r.a.createElement("div",{className:"left-nav-toggle"},r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"stroke-hamburgermenu"})))),r.a.createElement("a",{className:"navbar-brand",href:"index.html"},"Muzzamil's",r.a.createElement("span",null,"v.1.4"))),r.a.createElement("div",{id:"navbar",className:"navbar-collapse collapse"},r.a.createElement("div",{className:"left-nav-toggle"},r.a.createElement("a",{href:""},r.a.createElement("i",{className:"stroke-hamburgermenu"}))),r.a.createElement("form",{className:"navbar-form mr-auto"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Project Reporting Tool"})),r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",{className:"nav-item profil-link"},r.a.createElement("a",{href:"login.html"},r.a.createElement("span",{className:"profile-address"},"origamiStudios"),r.a.createElement("img",{src:"images/profile.jpg",className:"rounded-circle",alt:""})))))),r.a.createElement("aside",{className:"navigation"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav luna-nav"},r.a.createElement("li",{className:"nav-category"},"All Projects"),!!t.array&&t.array.map((function(a,t){return r.a.createElement("li",{className:"in-active","data-toggle":"collapse",key:t},r.a.createElement("a",{onClick:function(){return e.UpdateDashboardSection(t,a.name,a.id)}},a.name))})),r.a.createElement("li",{className:"nav-info"},r.a.createElement("i",{className:"pe pe-7s-shield text-accent"}),r.a.createElement("div",{className:"m-t-xs"},r.a.createElement("span",{className:"c-white"},"Trello Reporting Tool")))))),r.a.createElement("section",{className:"content"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"view-header"},r.a.createElement("div",{className:"header-icon"},r.a.createElement("i",{className:"pe page-header-icon pe-7s-shield"})),r.a.createElement("div",{className:"header-title"},r.a.createElement("h3",{className:"m-b-xs"},t.selectedBoardName))),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},!!n.array&&n.array.map((function(e,a){return r.a.createElement("div",{className:"col-lg-2 col-xs-6",key:a},r.a.createElement("div",{className:"panel panel-filled"},r.a.createElement("div",{className:"panel-body"},r.a.createElement("h2",{className:"m-b-none"},e.cards&&e.cards.length," ",r.a.createElement("span",{className:"slight"})),r.a.createElement("div",{className:"small"},e.name))))}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"panel panel-filled"},r.a.createElement("div",{className:"panel-body"},r.a.createElement("table",{className:"table table-responsive-sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"No of Tasks Assigned"),r.a.createElement("th",null,"Reports"))),r.a.createElement("tbody",null,!!l.array&&l.array.map((function(a,t){return r.a.createElement("tr",null,r.a.createElement("td",null,a.fullName),r.a.createElement("td",null,r.a.createElement("button",{style:{background:"#f6a821",border:"1px solid #f6a821",width:"100px",height:"30px"},onClick:function(){return e.showReports(a)}},"Get Reports")))}))))))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"panel panel-b-accent"},r.a.createElement("div",{className:"panel-body text-center p-m"},r.a.createElement("h2",{className:"font-light"},"Total 43 Cards"),r.a.createElement("div",{className:"sparkline7 m-t-xs"}))))))))}}]),a}(n.Component),I=t(18),T=t(84),j=t.n(T),A=t(51),S=t(195),x=t(5),M=t(85),B=function(e){parseInt(e%1e3/100),Math.floor(e/1e3%60);var a=Math.floor(e/6e4%60),t=Math.floor(e/36e5%24),n=Math.floor(e/864e5%30),r=Math.floor(e/2592e6%12);return r>0?"".concat(r," months , ").concat(n," days , ").concat(t," hours , ").concat(a," minutes"):n>0?"".concat(n," day ").concat(t," hours and ").concat(a," minutes"):t>0?"".concat(t," hours and ").concat(a," minutes"):a>0?"".concat(a," minutes"):void 0},Y=function(e){var a=e.item,t=e.memberName,n=function(e){e=new Date(e);return R(e.toLocaleString())},l=function(e){return F(function(e,a){var t=new Date(e),n=new Date(a),r=Math.abs(t-n);return B(r)}(e.hasOwnProperty("previousTime")?e.previousTime:e.creationTime,e.updatedTime))};return r.a.createElement("ul",{style:{paddingTop:0}},r.a.createElement("li",null,function(e){switch(e.type){case"cardCreated":return r.a.createElement("h4",null,t," created card  ",R(e.cardName),"  in  ",R(e.listName)," at ",n(e.updatedTime),"   ");case"listCreated":return r.a.createElement("h4",null,t," created list  ",R(e.listName)," ");case"cardRenamed":return r.a.createElement("h4",null,t," renamed the card from  ",R(e.oldCardName),"  to  ",R(e.cardName));case"cardMoved":return r.a.createElement("h4",null,t," moved card ",R(e.cardName)," from ",R(e.before)," to ",R(e.after)," at ",n(e.updatedTime)," after ",l(e),"   ");case"memberAddedToCard":return r.a.createElement("h4",null,t," assigned ",R(e.cardName)," to ",e.assignedTo," at ",n(e.updatedTime)," ");case"memberRemovedFromCard":return r.a.createElement("h4",null,e.deAllocatorName," removed ",R(e.memberName)," from the card ",e.cardName," at ",n(e.updatedTime)," ");case"cardCommented":return r.a.createElement("h4",null,e.commentorName," commented on the card  ",R(e.cardName)," as '",R(e.comment),"'")}}(a)))},F=function(e){return r.a.createElement("span",{style:{color:"rgb(64, 255, 105)"}},e)},R=function(e){return r.a.createElement("span",{style:{color:"#ffdf40"}},e)},P=function(e){function a(e){var t;Object(d.a)(this,a);var n=e.location.search,r=j.a.parse(n);return(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).fetchActionsAgainstMemberId=function(e,a){fetch("https://api.trello.com/1/members/".concat(e,"/actions?key=").concat(k,"&token=").concat(C,"&fields=all")).then((function(e){return e.json()})).then((function(e){var n=[];e.forEach((function(e){e.data.board.id===a&&n.push(e)})),t.setState({allActions:n},(function(){t.filterTheActions()}))})).catch(console.log)},t.checkDateRange=function(e,a,n){var r=new Date(e.replace(/"/g,"")),l=new Date(a.replace(/"/g,"")),c=new Date(r.getFullYear(),r.getMonth()-1,r.getDate()),o=new Date(l.getFullYear(),l.getMonth()-1,l.getDate()),s=[];n.forEach((function(e){var a=new Date(e.updatedTime),t=new Date(a.getFullYear(),a.getMonth()-1,a.getDate());t>=c&&t<=o&&s.push(e)})),t.setState({actionsBtwDays:s,triggered:!0})},t.handleFilterBtn=function(){var e=t.state,a=e.startDate,n=e.endDate;a&&n?(t.setState({isPeriodSelected:!0}),t.checkDateRange(JSON.stringify(t.state.startDate),JSON.stringify(t.state.endDate),t.state.filteredActions)):(alert("Select the period range"),t.setState({isPeriodSelected:!1}))},t.filterTheActions=function(){var e,a,n,r,l,c=Object(I.a)(t.state.allActions),o=[];console.log("actionsss",c),t.setState({memberName:null===(e=c[0])||void 0===e?void 0:null===(a=e.memberCreator)||void 0===a?void 0:a.username,boardName:null===(n=c[0])||void 0===n?void 0:null===(r=n.data)||void 0===r?void 0:null===(l=r.board)||void 0===l?void 0:l.name}),c.forEach((function(e){var a={};"updateCard"===e.type&&(e.data.old.name?(a.type="cardRenamed",a.oldCardName=e.data.old.name,a.cardName=e.data.card.name,a.listId=e.data.list.id,a.listName=e.data.list.name,a.updatedTime=e.date,o.push(a)):e.data.old.due?(a.type="dueDateChanged",a.oldDueDate=e.data.old.due,a.newDueDate=e.data.card.due,a.cardId=e.data.card.id,a.cardName=e.data.list.name,a.listName=e.data.list.name,a.updatedTime=e.date,o.push(a)):e.data.listBefore&&(a.type="cardMoved",a.before=e.data.listBefore.name,a.after=e.data.listAfter.name,a.cardName=e.data.card.name,a.cardId=e.data.card.id,a.updatedTime=e.date,c.filter((function(t){var n,r;if((null===(n=t.data.card)||void 0===n?void 0:n.id)===e.data.card.id&&"createCard"===t.type)a.creationTime=t.date;else if((null===(r=t.data.card)||void 0===r?void 0:r.id)===e.data.card.id&&"updateCard"===t.type){var l;(null===(l=t.data.listAfter)||void 0===l?void 0:l.id)===e.data.listBefore.id&&function(e,a){e=new Date(e);var t=new Date(a);return new Date(e.getFullYear(),e.getMonth()-1,e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds())>new Date(t.getFullYear(),t.getMonth()-1,t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds())}(e.date,t.date)&&(a.previousTime=t.date)}})),o.push(a))),"createCard"===e.type?(a.type="cardCreated",a.cardName=e.data.card.name,a.cardId=e.data.card.id,a.listId=e.data.list.id,a.listName=e.data.list.name,a.updatedTime=e.date,o.push(a)):"createList"===e.type?(a.type="listCreated",a.listId=e.data.list.id,a.listName=e.data.list.name,a.updatedTime=e.date,o.push(a)):"updateList"===e.type?(e.data.list.closed&&(a.type="listClosed",a.listName=e.data.list.name,a.updatedTime=e.date,o.push(a)),e.data.old.name&&!e.data.list.closed&&(a.type="listRenamed",a.listName=e.data.list.name,a.oldListName=e.data.old.name,a.listId=e.data.list.id,a.updatedTime=e.date,o.push(a))):"addMemberToCard"===e.type?(a.type="memberAddedToCard",a.cardName=e.data.card.name,a.cardId=e.data.card.id,a.assignedTo=e.data.member.name,a.assignedMemberId=e.data.member.id,a.taskAssigner=e.memberCreator.fullName,a.taskAssignerId=e.memberCreator.id,a.updatedTime=e.date,o.push(a)):"removeMemberFromCard"===e.type?(a.type="memberRemovedFromCard",a.cardName=e.data.card.name,a.cardId=e.data.card.id,a.memberName=e.data.member.name,a.memberId=e.data.member.id,a.deAllocatorName=e.memberCreator.fullName,a.deAllocatorId=e.memberCreator.id,a.updatedTime=e.date,o.push(a)):"commentCard"===e.type&&(a.type="cardCommented",a.cardName=e.data.card.name,a.cardId=e.data.card.id,a.listName=e.data.list.name,a.listId=e.data.list.id,a.comment=e.data.text,a.commentorName=e.memberCreator.fullName,a.commentorId=e.memberCreator.id,a.updatedTime=e.date,o.push(a))})),console.log("to show",o),t.setState({filteredActions:o})},t.state={allActions:null,boardId:r.boardId,memberId:r.memberId,filteredActions:null,startDate:null,endDate:null,actionsBtwDays:[],triggered:!1,isPeriodSelected:!1,memberName:"",boardName:""},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentWillUnmount",value:function(){this.setState({allActions:[]})}},{key:"componentDidMount",value:function(){this.fetchActionsAgainstMemberId(this.state.memberId,this.state.boardId)}},{key:"render",value:function(){var e=this,a=this.state,t=a.allActions,n=a.startDate,l=a.endDate,c=a.boardName,o=a.actionsBtwDays,s=a.triggered,d=a.isPeriodSelected,i=a.memberName;return r.a.createElement("div",{style:{padding:45}},r.a.createElement("h1",null,"All actions of ",R(i)," on Board ",R(c)),r.a.createElement("ul",{className:"nav luna-nav"},!!t&&t.map((function(e,a){return r.a.createElement("li",null,e.type)}))),r.a.createElement("hr",null),r.a.createElement("h1",null,"Filter"),r.a.createElement(A.b,{utils:M.a},r.a.createElement(S.a,{container:!0,justify:"space-evenly"},r.a.createElement("div",{style:{flexDirection:"column"}},r.a.createElement("h1",null,"From date"),r.a.createElement(A.a,{keyboard:!0,placeholder:"MM/DD/YYYY",format:"MM/DD/YYYY",mask:function(e){return e?[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/]:[]},value:n,onChange:function(a){return e.setState({startDate:a})},disableOpenOnEnter:!0,animateYearScrolling:!1,autoOk:!0,clearable:!0})),r.a.createElement("div",{style:{flexDirection:"column"}},r.a.createElement("h1",null,"To date"),r.a.createElement(A.a,{keyboard:!0,placeholder:"MM/DD/YYYY",format:"MM/DD/YYYY",mask:function(e){return e?[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/]:[]},value:l,onChange:function(a){return e.setState({endDate:a})},disableOpenOnEnter:!0,animateYearScrolling:!1,autoOk:!0,clearable:!0}))),r.a.createElement("button",{style:{background:"#f6a821",border:"1px solid #f6a821",marginTop:20,width:"100px",height:"30px"},onClick:this.handleFilterBtn},"Filter Report"),s&&0===o.length&&d&&r.a.createElement("h4",null,"No data found"),!d&&s&&"Select a period First",o.length>0&&o.map((function(e,a){return r.a.createElement(Y,{key:a,item:e,boardName:c,memberName:i})}))))}}]),a}(n.Component),L=Object(x.a)({grid:{width:"20%"}})(P),U=function(){return r.a.createElement(o.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:v}),r.a.createElement(N,{exact:!0,path:"/dashboard",component:O}),r.a.createElement(N,{exact:!0,path:"/reports",component:L}),r.a.createElement(s.b,{path:"*",component:function(){return"405 error found"}})))},W=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _={count:0,age:65},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0,t=Object(w.a)({},e);switch(a.type){case"COUNT_UP":t.count+=a.value;break;case"COUNT_DOWN":t.count-=a.value;break;case"CALLBACK":3===t.count&&(t.count=100);break;case"COUNT_T0_1000":t.count=1e3}return t},z=t(90),H=t(41),q=t(89),G=Object(H.c)(J,Object(H.a)(q.a));"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),c.a.render(r.a.createElement(z.a,{store:G},r.a.createElement(W,null)),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.13876eb0.chunk.js.map