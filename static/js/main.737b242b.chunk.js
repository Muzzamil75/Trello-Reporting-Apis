(this["webpackJsonptrello-tools"]=this["webpackJsonptrello-tools"]||[]).push([[0],{101:function(e,a,t){e.exports=t(159)},159:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),c=t.n(l),s=t(58),o=t(28),d=t(17),i=t(13),m=t(37),u=t(38),h=t(39),p=new(function(){function e(){Object(d.a)(this,e),this.authenticated=!1}return Object(i.a)(e,[{key:"login",value:function(e){this.authenticated=!0,e()}},{key:"logout",value:function(e){this.authenticated=!1,e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}()),f="MUZAMIL",b=123,E=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).getFields=function(e,a){"username"===e?t.setState({username:a.toUpperCase()}):"password"===e&&t.setState({password:a.toUpperCase()})},t.handleSubmit=function(e){var a=t.state,n=a.username,r=a.password;n&&r&&(n===f&&r==b?p.login((function(){return t.props.history.push("/dashboard")})):alert("Not authorized")),e.preventDefault()},t.state={userName:null,password:null},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("section",{className:"content-s"},r.a.createElement("div",{className:"container-center animated slideInDown"},r.a.createElement("div",{className:"view-header"},r.a.createElement("div",{className:"header-icon"},r.a.createElement("i",{className:"pe page-header-icon pe-7s-unlock"})),r.a.createElement("div",{className:"header-title"},r.a.createElement("h3",null,"Login"),r.a.createElement("small",null,"Please enter your credentials to login."))),r.a.createElement("div",{className:"panel panel-filled"},r.a.createElement("div",{className:"panel-body"},r.a.createElement("form",{action:"index.html",id:"loginForm",novalidate:!0},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-form-label",htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",placeholder:"example@gmail.com",title:"Please enter you username",onChange:function(a){return e.getFields("username",a.target.value)},className:"form-control"}),r.a.createElement("span",{className:"form-text small"},"Your unique username to app")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-form-label",htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",title:"Please enter your password",placeholder:"******",onChange:function(a){return e.getFields("password",a.target.value)},className:"form-control"}),r.a.createElement("span",{className:"form-text small"},"Your strong password")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-accent",onClick:this.handleSubmit},"Login"),r.a.createElement("a",{className:"btn btn-default",href:"register.html"},"Register"))))))))}}]),a}(n.Component),v=(t(2),t(61)),N=t.n(v),g=t(83),y=t(31),D="f185658707ae3b2d431801916e197bcd",w="6b5f1e12474c76bc6b4171ed92f08c27ddc4facd1866015e9c688fc68d51ca40",k=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).fetchBoards=function(){fetch("https://api.trello.com/1/members/me/boards?key=".concat(D,"&token=").concat(w)).then((function(e){return e.json()})).then((function(e){t.setState({boardsData:Object(y.a)({},t.state.boardsData,{array:e,selectedBoardId:e[0].id,selectedBoardName:e[0].name})}),t.fetchListWithCardsAgainstBoardId(e[0].id)})).catch(console.log)},t.fetchListWithCardsAgainstBoardId=function(e){fetch("https://api.trello.com/1/boards/".concat(e,"/lists?cards=open&card_fields=all&filter=open&fields=all&key=").concat(D,"&token=").concat(w)).then((function(e){return e.json()})).then((function(e){t.setState({listData:Object(y.a)({},t.state.listData,{array:e})})})).catch(console.log).finally((function(){return t.calculation()}))},t.calculation=Object(g.a)(N.a.mark((function e(){var a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],console.log("liiiiiiiiiiiiiiiiiiii data with ids --\x3e",t.state.listData.array),e.next=4,t.state.listData.array;case 4:if(e.t0=e.sent,!e.t0){e.next=7;break}t.state.listData.array.forEach((function(e){var t={};t.listId=e.id,t.listName=e.name,e.cards.length>0?t.cards=e.cards:t.cards=null,a.push(t)}));case 7:return t.setState({cardsWithIds:a}),n=[],e.next=11,t.state.membersData.array;case 11:if(e.t1=e.sent,!e.t1){e.next=14;break}t.state.membersData.array.forEach((function(e){a.forEach((function(e){var a;null===(a=e.cards)||void 0===a||a.forEach((function(e){n.filter((function(a){return a.id===e})).length?n.map((function(a){a.id===e&&a.count++})):n.push({count:1,singleCard:e})}))}))}));case 14:t.setState({taskCount:n});case 15:case"end":return e.stop()}}),e)}))),t.fetchMembersOfBoard=function(e){fetch("https://api.trello.com/1/boards/".concat(e,"/members?key=").concat(D,"&token=").concat(w)).then((function(e){return e.json()})).then((function(e){t.setState({membersData:Object(y.a)({},t.state.membersData,{array:e})})})).catch(console.log)},t.UpdateDashboardSection=function(e,a,n){t.fetchMembersOfBoard(n),t.fetchListWithCardsAgainstBoardId(n),t.setState({boardsData:Object(y.a)({},t.state.boardsData,{selectedBoardName:a,selectedBoardNo:e,selectedBoardId:n})})},t.showReports=function(e){var a=t.state.boardsData.selectedBoardId;t.props.history.push({pathname:"/reports",search:"?boardId=".concat(a,"&memberId=").concat(e.id)})},t.state={boardsData:{array:null,selectedBoardNo:null,selectedBoardId:null,selectedBoardName:null},listData:{array:null},membersData:{array:null},cardsWithIds:[],taskCount:null},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchBoards()}},{key:"render",value:function(){var e=this,a=this.state,t=a.boardsData,n=a.listData,l=a.membersData;a.selectedBoardNo,a.count;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-default fixed-top"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("div",{id:"mobile-menu"},r.a.createElement("div",{className:"left-nav-toggle"},r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"stroke-hamburgermenu"})))),r.a.createElement("a",{className:"navbar-brand",href:"index.html"},"Crewlogix",r.a.createElement("span",null,"v.1.4"))),r.a.createElement("div",{id:"navbar",className:"navbar-collapse collapse"},r.a.createElement("div",{className:"left-nav-toggle"},r.a.createElement("a",{href:""},r.a.createElement("i",{className:"stroke-hamburgermenu"}))),r.a.createElement("form",{className:"navbar-form mr-auto"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Project Reporting Tool"})),r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",{className:"nav-item profil-link"},r.a.createElement("a",{href:"login.html"},r.a.createElement("span",{className:"profile-address"},"origamiStudios"),r.a.createElement("img",{src:"images/profile.jpg",className:"rounded-circle",alt:""})))))),r.a.createElement("aside",{className:"navigation"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav luna-nav"},r.a.createElement("li",{className:"nav-category"},"All Projects"),!!t.array&&t.array.map((function(a,t){return r.a.createElement("li",{className:"in-active","data-toggle":"collapse",key:t},r.a.createElement("a",{onClick:function(){return e.UpdateDashboardSection(t,a.name,a.id)}},a.name))})),r.a.createElement("li",{className:"nav-info"},r.a.createElement("i",{className:"pe pe-7s-shield text-accent"}),r.a.createElement("div",{className:"m-t-xs"},r.a.createElement("span",{className:"c-white"},"Trello Reporting Tool")))))),r.a.createElement("section",{className:"content"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"view-header"},r.a.createElement("div",{className:"header-icon"},r.a.createElement("i",{className:"pe page-header-icon pe-7s-shield"})),r.a.createElement("div",{className:"header-title"},r.a.createElement("h3",{className:"m-b-xs"},t.selectedBoardName))),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},!!n.array&&n.array.map((function(e,a){return r.a.createElement("div",{className:"col-lg-2 col-xs-6",key:a},r.a.createElement("div",{className:"panel panel-filled"},r.a.createElement("div",{className:"panel-body"},r.a.createElement("h2",{className:"m-b-none"},e.cards&&e.cards.length," ",r.a.createElement("span",{className:"slight"})),r.a.createElement("div",{className:"small"},e.name))))}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"panel panel-filled"},r.a.createElement("div",{className:"panel-body"},r.a.createElement("table",{className:"table table-responsive-sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"No of Tasks Assigned"),r.a.createElement("th",null,"Reports"))),r.a.createElement("tbody",null,!!l.array&&l.array.map((function(a,t){return r.a.createElement("tr",null,r.a.createElement("td",null,a.fullName),r.a.createElement("td",null,r.a.createElement("button",{style:{background:"#f6a821",border:"1px solid #f6a821",width:"100px",height:"30px"},onClick:function(){return e.showReports(a)}},"Get Reports")))}))))))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"panel panel-b-accent"},r.a.createElement("div",{className:"panel-body text-center p-m"},r.a.createElement("h2",{className:"font-light"},"Total 43 Cards"),r.a.createElement("div",{className:"sparkline7 m-t-xs"}))))))))}}]),a}(n.Component),C=t(18),O=t(84),I=t.n(O),T=t(51),j=t(195),S=t(5),x=t(85),M=function(e){parseInt(e%1e3/100),Math.floor(e/1e3%60);var a=Math.floor(e/6e4%60),t=Math.floor(e/36e5%24),n=Math.floor(e/864e5%30),r=Math.floor(e/2592e6%12);return r>0?"".concat(r," months , ").concat(n," days , ").concat(t," hours , ").concat(a," minutes"):n>0?"".concat(n," day ").concat(t," hours and ").concat(a," minutes"):t>0?"".concat(t," hours and ").concat(a," minutes"):a>0?"".concat(a," minutes"):void 0},A=function(e){var a=e.item,t=e.memberName,n=function(e){e=new Date(e);return Y(e.toLocaleString())},l=function(e){return B(function(e,a){var t=new Date(e),n=new Date(a),r=Math.abs(t-n);return M(r)}(e.hasOwnProperty("previousTime")?e.previousTime:e.creationTime,e.updatedTime))};return r.a.createElement("ul",{style:{paddingTop:0}},r.a.createElement("li",null,function(e){switch(e.type){case"cardCreated":return r.a.createElement("h4",null,t," created card  ",Y(e.cardName),"  in  ",Y(e.listName)," at ",n(e.updatedTime),"   ");case"listCreated":return r.a.createElement("h4",null,t," created list  ",Y(e.listName)," ");case"cardRenamed":return r.a.createElement("h4",null,t," renamed the card from  ",Y(e.oldCardName),"  to  ",Y(e.cardName));case"cardMoved":return r.a.createElement("h4",null,t," moved card ",Y(e.cardName)," from ",Y(e.before)," to ",Y(e.after)," at ",n(e.updatedTime)," after ",l(e),"   ");case"memberAddedToCard":return r.a.createElement("h4",null,t," assigned ",Y(e.cardName)," to ",e.assignedTo," at ",n(e.updatedTime)," ");case"memberRemovedFromCard":return r.a.createElement("h4",null,e.deAllocatorName," removed ",Y(e.memberName)," from the card ",e.cardName," at ",n(e.updatedTime)," ");case"cardCommented":return r.a.createElement("h4",null,e.commentorName," commented on the card  ",Y(e.cardName)," as '",Y(e.comment),"'")}}(a)))},B=function(e){return r.a.createElement("span",{style:{color:"rgb(64, 255, 105)"}},e)},Y=function(e){return r.a.createElement("span",{style:{color:"#ffdf40"}},e)},F=function(e){function a(e){var t;Object(d.a)(this,a);var n=e.location.search,r=I.a.parse(n);return(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).fetchActionsAgainstMemberId=function(e,a){fetch("https://api.trello.com/1/members/".concat(e,"/actions?key=").concat(D,"&token=").concat(w,"&fields=all")).then((function(e){return e.json()})).then((function(e){var n=[];e.forEach((function(e){e.data.board.id===a&&n.push(e)})),t.setState({allActions:n},(function(){t.filterTheActions()}))})).catch(console.log)},t.checkDateRange=function(e,a,n){var r=new Date(e.replace(/"/g,"")),l=new Date(a.replace(/"/g,"")),c=new Date(r.getFullYear(),r.getMonth()-1,r.getDate()),s=new Date(l.getFullYear(),l.getMonth()-1,l.getDate()),o=[];n.forEach((function(e){var a=new Date(e.updatedTime),t=new Date(a.getFullYear(),a.getMonth()-1,a.getDate());t>=c&&t<=s&&o.push(e)})),t.setState({actionsBtwDays:o,triggered:!0})},t.handleFilterBtn=function(){var e=t.state,a=e.startDate,n=e.endDate;a&&n?(t.setState({isPeriodSelected:!0}),t.checkDateRange(JSON.stringify(t.state.startDate),JSON.stringify(t.state.endDate),t.state.filteredActions)):(alert("Select the period range"),t.setState({isPeriodSelected:!1}))},t.filterTheActions=function(){var e=Object(C.a)(t.state.allActions),a=[];console.log("actionsss",e),t.setState({memberName:e[0].memberCreator.username,boardName:e[0].data.board.name}),e.forEach((function(t){var n={};"updateCard"===t.type&&(t.data.old.name?(n.type="cardRenamed",n.oldCardName=t.data.old.name,n.cardName=t.data.card.name,n.listId=t.data.list.id,n.listName=t.data.list.name,n.updatedTime=t.date,a.push(n)):t.data.old.due?(n.type="dueDateChanged",n.oldDueDate=t.data.old.due,n.newDueDate=t.data.card.due,n.cardId=t.data.card.id,n.cardName=t.data.list.name,n.listName=t.data.list.name,n.updatedTime=t.date,a.push(n)):t.data.listBefore&&(n.type="cardMoved",n.before=t.data.listBefore.name,n.after=t.data.listAfter.name,n.cardName=t.data.card.name,n.cardId=t.data.card.id,n.updatedTime=t.date,e.filter((function(e){var a,r;if((null===(a=e.data.card)||void 0===a?void 0:a.id)===t.data.card.id&&"createCard"===e.type)n.creationTime=e.date;else if((null===(r=e.data.card)||void 0===r?void 0:r.id)===t.data.card.id&&"updateCard"===e.type){var l;(null===(l=e.data.listAfter)||void 0===l?void 0:l.id)===t.data.listBefore.id&&function(e,a){e=new Date(e);var t=new Date(a);return new Date(e.getFullYear(),e.getMonth()-1,e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds())>new Date(t.getFullYear(),t.getMonth()-1,t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds())}(t.date,e.date)&&(n.previousTime=e.date)}})),a.push(n))),"createCard"===t.type?(n.type="cardCreated",n.cardName=t.data.card.name,n.cardId=t.data.card.id,n.listId=t.data.list.id,n.listName=t.data.list.name,n.updatedTime=t.date,a.push(n)):"createList"===t.type?(n.type="listCreated",n.listId=t.data.list.id,n.listName=t.data.list.name,n.updatedTime=t.date,a.push(n)):"updateList"===t.type?(t.data.list.closed&&(n.type="listClosed",n.listName=t.data.list.name,n.updatedTime=t.date,a.push(n)),t.data.old.name&&!t.data.list.closed&&(n.type="listRenamed",n.listName=t.data.list.name,n.oldListName=t.data.old.name,n.listId=t.data.list.id,n.updatedTime=t.date,a.push(n))):"addMemberToCard"===t.type?(n.type="memberAddedToCard",n.cardName=t.data.card.name,n.cardId=t.data.card.id,n.assignedTo=t.data.member.name,n.assignedMemberId=t.data.member.id,n.taskAssigner=t.memberCreator.fullName,n.taskAssignerId=t.memberCreator.id,n.updatedTime=t.date,a.push(n)):"removeMemberFromCard"===t.type?(n.type="memberRemovedFromCard",n.cardName=t.data.card.name,n.cardId=t.data.card.id,n.memberName=t.data.member.name,n.memberId=t.data.member.id,n.deAllocatorName=t.memberCreator.fullName,n.deAllocatorId=t.memberCreator.id,n.updatedTime=t.date,a.push(n)):"commentCard"===t.type&&(n.type="cardCommented",n.cardName=t.data.card.name,n.cardId=t.data.card.id,n.listName=t.data.list.name,n.listId=t.data.list.id,n.comment=t.data.text,n.commentorName=t.memberCreator.fullName,n.commentorId=t.memberCreator.id,n.updatedTime=t.date,a.push(n))})),console.log("to show",a),t.setState({filteredActions:a})},t.state={allActions:null,boardId:r.boardId,memberId:r.memberId,filteredActions:null,startDate:null,endDate:null,actionsBtwDays:[],triggered:!1,isPeriodSelected:!1,memberName:"",boardName:""},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentWillUnmount",value:function(){this.setState({allActions:[]})}},{key:"componentDidMount",value:function(){this.fetchActionsAgainstMemberId(this.state.memberId,this.state.boardId)}},{key:"render",value:function(){var e=this,a=this.state,t=a.allActions,n=a.startDate,l=a.endDate,c=a.boardName,s=a.actionsBtwDays,o=a.triggered,d=a.isPeriodSelected,i=a.memberName;return r.a.createElement("div",{style:{padding:45}},r.a.createElement("h1",null,"All actions of ",Y(i)," on Board ",Y(c)),r.a.createElement("ul",{className:"nav luna-nav"},!!t&&t.map((function(e,a){return r.a.createElement("li",null,e.type)}))),r.a.createElement("hr",null),r.a.createElement("h1",null,"Filter"),r.a.createElement(T.b,{utils:x.a},r.a.createElement(j.a,{container:!0,justify:"space-evenly"},r.a.createElement("div",{style:{flexDirection:"column"}},r.a.createElement("h1",null,"From date"),r.a.createElement(T.a,{keyboard:!0,placeholder:"MM/DD/YYYY",format:"MM/DD/YYYY",mask:function(e){return e?[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/]:[]},value:n,onChange:function(a){return e.setState({startDate:a})},disableOpenOnEnter:!0,animateYearScrolling:!1,autoOk:!0,clearable:!0})),r.a.createElement("div",{style:{flexDirection:"column"}},r.a.createElement("h1",null,"To date"),r.a.createElement(T.a,{keyboard:!0,placeholder:"MM/DD/YYYY",format:"MM/DD/YYYY",mask:function(e){return e?[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/]:[]},value:l,onChange:function(a){return e.setState({endDate:a})},disableOpenOnEnter:!0,animateYearScrolling:!1,autoOk:!0,clearable:!0}))),r.a.createElement("button",{style:{background:"#f6a821",border:"1px solid #f6a821",marginTop:20,width:"100px",height:"30px"},onClick:this.handleFilterBtn},"Filter Report"),o&&0===s.length&&d&&r.a.createElement("h4",null,"No data found"),!d&&o&&"Select a period First",s.length>0&&s.map((function(e,a){return r.a.createElement(A,{key:a,item:e,boardName:c,memberName:i})}))))}}]),a}(n.Component),R=Object(S.a)({grid:{width:"20%"}})(F),L=function(){return r.a.createElement(s.a,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:E}),r.a.createElement(o.b,{exact:!0,path:"/dashboard",component:k}),r.a.createElement(o.b,{path:"/reports",component:R}),r.a.createElement(o.b,{path:"*",component:function(){return"405 error found"}})))},P=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U={count:0,age:65},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0,t=Object(y.a)({},e);switch(a.type){case"COUNT_UP":t.count+=a.value;break;case"COUNT_DOWN":t.count-=a.value;break;case"CALLBACK":3===t.count&&(t.count=100);break;case"COUNT_T0_1000":t.count=1e3}return t},_=t(90),J=t(41),H=t(89),q=Object(J.c)(W,Object(J.a)(H.a));"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),c.a.render(r.a.createElement(_.a,{store:q},r.a.createElement(P,null)),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.737b242b.chunk.js.map