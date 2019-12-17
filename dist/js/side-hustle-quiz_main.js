Vue.component("result",{props:["title","image","content"],template:'\n    <div>\n      <h2>You got: <span class="highlight">{{ title }}</span></h2>\n      <img v-bind:src="image" class="result-image">\n      <p class="body-text" v-html="content"></p>\n    </div>\n  '});var quiz=new Vue({el:"#quiz",data:{questions:[{name:"steadyIncome",text:"I am only looking for steady income."},{name:"peoplePerson",text:"I consider myself a people person."},{name:"drive",text:"I can drive for long stretches and keep my focus."},{name:"physicalWork",text:"I can lift heavy boxes, assemble things, or clean a house."},{name:"skilled",text:"I'm skilled in music, sports, math, or another topic, and would love to share my knowledge."},{name:"fixingThings",text:"When someone needs something fixed around the house, they call me."},{name:"kids",text:"I like working with kids."},{name:"organized",text:"I'm highly organized."},{name:"comfortHome",text:"I prefer to work from the comfort of my own home."},{name:"lovesDogs",text:"I am comfortable handling multiple dogs at one time."},{name:"regularClients",text:"I prefer regular clients I can develop relationships with rather than one-shot deals."},{name:"menialTasks",text:"I don't mind doing menial tasks."},{name:"socialMedia",text:"I am good at, and enjoy using, social media."},{name:"groceryShopper",text:"I can stay calm in a busy grocery store."}],selected:[],result:"",runnerUp:"",runnerUp2:"",showRideShareQuestion:!1,carYesNo:"",showAssistantQuestion:!1,computerYesNo:"",showError:"",showRideShare:"",showTutor:"",showShopper:"",showWalker:"",showHandler:"",showAssistant:""},computed:{},methods:{calculateResults:function(){this.reset();let e={rideShare:0,tutor:0,groceryShopper:0,dogWalker:0,taskHandler:0,virtualAssistant:0},s=this.questions;s[0].checked&&(e.rideShare++,e.tutor+=2,e.groceryShopper++,e.dogWalker+=2,e.virtualAssistant+=2),s[1].checked&&(e.rideShare++,e.tutor+=2,e.virtualAssistant++),s[2].checked&&(e.rideShare+=2),s[3].checked&&(e.taskHandler+=2),s[4].checked?e.tutor+=2:e.tutor-=20,s[5].checked&&(e.taskHandler+=2),s[6].checked&&(e.tutor+=2),s[7].checked&&(e.tutor++,e.groceryShopper++,e.virtualAssistant+=2),s[8].checked&&(e.tutor++,e.virtualAssistant+=2),s[9].checked&&(e.dogWalker+=2),s[10].checked&&(e.tutor+=2,e.dogWalker+=2,e.taskHandler++,e.virtualAssistant+=2),s[11].checked&&(e.rideShare+=2,e.groceryShopper+=2,e.dogWalker++,e.taskHandler+=2,e.virtualAssistant+=2),s[12].checked&&(e.virtualAssistant+=2),s[13].checked&&(e.groceryShopper+=2);let t,o="Ride-share: "+e.rideShare+"; Tutor: "+e.tutor+"; Grocery shopper: "+e.groceryShopper+"; Dog Walker: "+e.dogWalker+"; Task handler: "+e.taskHandler+"; Virtual assistant: "+e.virtualAssistant;console.log(o),-20==Object.values(e).reduce((e,s)=>e+s,0)?this.showError=!this.showError:(t=Object.keys(e).sort(function(s,t){return e[t]-e[s]||.5-Math.random()}),console.log(t),this.result=t[0],this.runnerUp=t[1],this.runnerUp2=t[2],this.showError=!1),"rideShare"==this.result?this.showRideShareQuestion=!this.showRideShareQuestion:"virtualAssistant"==this.result?this.showAssistantQuestion=!this.showAssistantQuestion:"tutor"==this.result?this.showTutor=!this.showTutor:"groceryShopper"==this.result?this.showShopper=!this.showShopper:"dogWalker"==this.result?this.showWalker=!this.showWalker:"taskHandler"==this.result&&(this.showHandler=!this.showHandler)},findFallback:function(e,s,t){"rideShare"==s||"virtualAssistant"==s?(this.showRideShareQuestion=!this.showRideShareQuestion,this.showAssistantQuestion=!this.showAssistantQuestion,"no"==this.carYesNo&&"no"==this.computerYesNo&&(e=t,this.hideQuestion())):(e=s,this.hideQuestion()),"tutor"==e?this.showTutor=!this.showTutor:"groceryShopper"==e?this.showShopper=!this.showShopper:"dogWalker"==e?this.showWalker=!this.showWalker:"taskHandler"==e&&(this.showHandler=!this.showHandler)},reset:function(){this.showRideShare=!1,this.showTutor=!1,this.showShopper=!1,this.showWalker=!1,this.showHandler=!1,this.showAssistant=!1,this.hideQuestion()},hideQuestion:function(){this.showRideShareQuestion=!1,this.showAssistantQuestion=!1},resetAll:function(){this.reset(),this.showRideShareQuestion=!1,this.showAssistantQuestion=!1;for(var e=0;e<this.questions.length;e++)this.questions[e].checked&&(this.questions[e].checked=!1)}}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiVnVlIiwiY29tcG9uZW50IiwicHJvcHMiLCJ0ZW1wbGF0ZSIsInF1aXoiLCJlbCIsImRhdGEiLCJxdWVzdGlvbnMiLCJuYW1lIiwidGV4dCIsInNlbGVjdGVkIiwicmVzdWx0IiwicnVubmVyVXAiLCJydW5uZXJVcDIiLCJzaG93UmlkZVNoYXJlUXVlc3Rpb24iLCJjYXJZZXNObyIsInNob3dBc3Npc3RhbnRRdWVzdGlvbiIsImNvbXB1dGVyWWVzTm8iLCJzaG93RXJyb3IiLCJzaG93UmlkZVNoYXJlIiwic2hvd1R1dG9yIiwic2hvd1Nob3BwZXIiLCJzaG93V2Fsa2VyIiwic2hvd0hhbmRsZXIiLCJzaG93QXNzaXN0YW50IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiY2FsY3VsYXRlUmVzdWx0cyIsInRoaXMiLCJyZXNldCIsInNpZGVIdXN0bGVzIiwicmlkZVNoYXJlIiwidHV0b3IiLCJncm9jZXJ5U2hvcHBlciIsImRvZ1dhbGtlciIsInRhc2tIYW5kbGVyIiwidmlydHVhbEFzc2lzdGFudCIsImNoZWNrZWQiLCJzb3J0ZWQiLCJxdWl6UmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhIiwiYiIsImtleXMiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsImZpbmRGYWxsYmFjayIsImhpZGVRdWVzdGlvbiIsInJlc2V0QWxsIiwiaSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUFBLElBQUFDLFVBQUEsU0FBQSxDQUNBQyxNQUFBLENBQUEsUUFBQSxRQUFBLFdBQ0FDLFNBQUEsMk1BVUEsSUFBQUMsS0FBQSxJQUFBSixJQUFBLENBQ0FLLEdBQUEsUUFDQUMsS0FBQSxDQUNBQyxVQUFBLENBQ0EsQ0FBQUMsS0FBQSxlQUFBQyxLQUFBLHdDQUNBLENBQUFELEtBQUEsZUFBQUMsS0FBQSxzQ0FDQSxDQUFBRCxLQUFBLFFBQUFDLEtBQUEscURBQ0EsQ0FBQUQsS0FBQSxlQUFBQyxL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QTFCLEtBQUFyQixVQUFBK0MsR0FBQWpCLFVBQ0FULEtBQUFyQixVQUFBK0MsR0FBQWpCLFNBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlZ1ZS5jb21wb25lbnQoJ3Jlc3VsdCcsIHtcbiAgcHJvcHM6IFsndGl0bGUnLCAnaW1hZ2UnLCAnY29udGVudCddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXY+XG4gICAgICA8aDI+WW91IGdvdDogPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj57eyB0aXRsZSB9fTwvc3Bhbj48L2gyPlxuICAgICAgPGltZyB2LWJpbmQ6c3JjPVwiaW1hZ2VcIiBjbGFzcz1cInJlc3VsdC1pbWFnZVwiPlxuICAgICAgPHAgY2xhc3M9XCJib2R5LXRleHRcIiB2LWh0bWw9XCJjb250ZW50XCI+PC9wPlxuICAgIDwvZGl2PlxuICBgXG59KVxuXG4vLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gIHZhciBxdWl6ID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjcXVpeicsXG4gICAgZGF0YToge1xuICAgICAgcXVlc3Rpb25zOiBbXG4gICAgICAgIHtcIm5hbWVcIjogXCJzdGVhZHlJbmNvbWVcIiwgXCJ0ZXh0XCI6IFwiSSBhbSBvbmx5IGxvb2tpbmcgZm9yIHN0ZWFkeSBpbmNvbWUuXCJ9LFxuICAgICAgICB7XCJuYW1lXCI6IFwicGVvcGxlUGVyc29uXCIsIFwidGV4dFwiOiBcIkkgY29uc2lkZXIgbXlzZWxmIGEgcGVvcGxlIHBlcnNvbi5cIn0sXG4gICAgICAgIHtcIm5hbWVcIjogXCJkcml2ZVwiLCBcInRleHRcIjogXCJJIGNhbiBkcml2ZSBmb3IgbG9uZyBzdHJldGNoZXMgYW5kIGtlZXAgbXkgZm9jdXMuXCJ9LFxuICAgICAgICB7XCJuYW1lXCI6IFwicGh5c2ljYWxXb3JrXCIsIFwidGV4dFwiOiBcIkkgY2FuIGxpZnQgaGVhdnkgYm94ZXMsIGFzc2VtYmxlIHRoaW5ncywgb3IgY2xlYW4gYSBob3VzZS5cIn0sXG4gICAgICAgIHtcIm5hbWVcIjogXCJza2lsbGVkXCIsIFwidGV4dFwiOiBcIkknbSBza2lsbGVkIGluIG11c2ljLCBzcG9ydHMsIG1hdGgsIG9yIGFub3RoZXIgdG9waWMsIGFuZCB3b3VsZCBsb3ZlIHRvIHNoYXJlIG15IGtub3dsZWRnZS5cIn0sXG4gICAgICAgIHtcIm5hbWVcIjogXCJmaXhpbmdUaGluZ3NcIiwgXCJ0ZXh0XCI6IFwiV2hlbiBzb21lb25lIG5lZWRzIHNvbWV0aGluZyBmaXhlZCBhcm91bmQgdGhlIGhvdXNlLCB0aGV5IGNhbGwgbWUuXCJ9LFxuICAgICAgICB7XCJuYW1lXCI6IFwia2lkc1wiLCBcInRleHRcIjogXCJJIGxpa2Ugd29ya2luZyB3aXRoIGtpZHMuXCJ9LFxuICAgICAgICB7XCJuYW1lXCI6IFwib3JnYW5pemVkXCIsIFwidGV4dFwiOiBcIkknbSBoaWdobHkgb3JnYW5pemVkLlwifSxcbiAgICAgICAge1wibmFtZVwiOiBcImNvbWZvcnRIb21lXCIsIFwidGV4dFwiOiBcIkkgcHJlZmVyIHRvIHdvcmsgZnJvbSB0aGUgY29tZm9ydCBvZiBteSBvd24gaG9tZS5cIn0sXG4gICAgICAgIHtcIm5hbWVcIjogXCJsb3Zlc0RvZ3NcIiwgXCJ0ZXh0XCI6IFwiSSBhbSBjb21mb3J0YWJsZSBoYW5kbGluZyBtdWx0aXBsZSBkb2dzIGF0IG9uZSB0aW1lLlwifSxcbiAgICAgICAge1wibmFtZVwiOiBcInJlZ3VsYXJDbGllbnRzXCIsIFwidGV4dFwiOiBcIkkgcHJlZmVyIHJlZ3VsYXIgY2xpZW50cyBJIGNhbiBkZXZlbG9wIHJlbGF0aW9uc2hpcHMgd2l0aCByYXRoZXIgdGhhbiBvbmUtc2hvdCBkZWFscy5cIn0sXG4gICAgICAgIHtcIm5hbWVcIjogXCJtZW5pYWxUYXNrc1wiLCBcInRleHRcIjogXCJJIGRvbid0IG1pbmQgZG9pbmcgbWVuaWFsIHRhc2tzLlwifSxcbiAgICAgICAge1wibmFtZVwiOiBcInNvY2lhbE1lZGlhXCIsIFwidGV4dFwiOiBcIkkgYW0gZ29vZCBhdCwgYW5kIGVuam95IHVzaW5nLCBzb2NpYWwgbWVkaWEuXCJ9LFxuICAgICAgICB7XCJuYW1lXCI6IFwiZ3JvY2VyeVNob3BwZXJcIiwgXCJ0ZXh0XCI6IFwiSSBjYW4gc3RheSBjYWxtIGluIGEgYnVzeSBncm9jZXJ5IHN0b3JlLlwifSxcbiAgICAgIF0sXG4gICAgICBcbiAgICAgIHNlbGVjdGVkOiBbXSxcblxuICAgICAgcmVzdWx0OiAnJyxcbiAgICAgIHJ1bm5lclVwOiAnJyxcbiAgICAgIHJ1bm5lclVwMjogJycsXG5cbiAgICAgIHNob3dSaWRlU2hhcmVRdWVzdGlvbjogZmFsc2UsXG4gICAgICBjYXJZZXNObzogJycsXG4gICAgICBzaG93QXNzaXN0YW50UXVlc3Rpb246IGZhbHNlLFxuICAgICAgY29tcHV0ZXJZZXNObzogJycsXG5cbiAgICAgIHNob3dFcnJvcjogJycsXG5cbiAgICAgIHNob3dSaWRlU2hhcmU6ICcnLFxuICAgICAgc2hvd1R1dG9yOiAnJyxcbiAgICAgIHNob3dTaG9wcGVyOiAnJyxcbiAgICAgIHNob3dXYWxrZXI6ICcnLFxuICAgICAgc2hvd0hhbmRsZXI6ICcnLFxuICAgICAgc2hvd0Fzc2lzdGFudDogJydcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAvLyByZXN1bHRzIGdvIGhlcmVcblxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgLy8gZnVuY3Rpb25zIGdvIGhlcmVcbiAgICAgIGNhbGN1bGF0ZVJlc3VsdHM6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcblxuICAgICAgICBsZXQgc2lkZUh1c3RsZXMgPSB7IFxuICAgICAgICAgIHJpZGVTaGFyZTogMCxcbiAgICAgICAgICB0dXRvcjogMCxcbiAgICAgICAgICBncm9jZXJ5U2hvcHBlcjogMCxcbiAgICAgICAgICBkb2dXYWxrZXI6IDAsXG4gICAgICAgICAgdGFza0hhbmRsZXI6IDAsXG4gICAgICAgICAgdmlydHVhbEFzc2lzdGFudDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBxdWVzdGlvbnMgPSB0aGlzLnF1ZXN0aW9ucztcblxuICAgICAgICBpZiAocXVlc3Rpb25zWzBdLmNoZWNrZWQpIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy5yaWRlU2hhcmUrKztcbiAgICAgICAgICBzaWRlSHVzdGxlcy50dXRvcis9MjtcbiAgICAgICAgICBzaWRlSHVzdGxlcy5ncm9jZXJ5U2hvcHBlcisrO1xuICAgICAgICAgIHNpZGVIdXN0bGVzLmRvZ1dhbGtlcis9MjtcbiAgICAgICAgICBzaWRlSHVzdGxlcy52aXJ0dWFsQXNzaXN0YW50Kz0yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHF1ZXN0aW9uc1sxXS5jaGVja2VkKSB7XG4gICAgICAgICAgc2lkZUh1c3RsZXMucmlkZVNoYXJlKys7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudHV0b3IrPTI7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudmlydHVhbEFzc2lzdGFudCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHF1ZXN0aW9uc1syXS5jaGVja2VkKSB7XG4gICAgICAgICAgc2lkZUh1c3RsZXMucmlkZVNoYXJlKz0yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHF1ZXN0aW9uc1szXS5jaGVja2VkKSB7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudGFza0hhbmRsZXIrPTI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVlc3Rpb25zWzRdLmNoZWNrZWQpIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy50dXRvcis9MjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy50dXRvci09MjA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVlc3Rpb25zWzVdLmNoZWNrZWQpIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy50YXNrSGFuZGxlcis9MjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxdWVzdGlvbnNbNl0uY2hlY2tlZCkge1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnR1dG9yKz0yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHF1ZXN0aW9uc1s3XS5jaGVja2VkKSB7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudHV0b3IrKztcbiAgICAgICAgICBzaWRlSHVzdGxlcy5ncm9jZXJ5U2hvcHBlcisrO1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnZpcnR1YWxBc3Npc3RhbnQrPTI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVlc3Rpb25zWzhdLmNoZWNrZWQpIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy50dXRvcisrO1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnZpcnR1YWxBc3Npc3RhbnQrPTI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVlc3Rpb25zWzldLmNoZWNrZWQpIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy5kb2dXYWxrZXIrPTI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVlc3Rpb25zWzEwXS5jaGVja2VkKSB7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudHV0b3IrPTI7XG4gICAgICAgICAgc2lkZUh1c3RsZXMuZG9nV2Fsa2VyKz0yO1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnRhc2tIYW5kbGVyKys7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudmlydHVhbEFzc2lzdGFudCs9MjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxdWVzdGlvbnNbMTFdLmNoZWNrZWQpIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy5yaWRlU2hhcmUrPTI7XG4gICAgICAgICAgc2lkZUh1c3RsZXMuZ3JvY2VyeVNob3BwZXIrPTI7XG4gICAgICAgICAgc2lkZUh1c3RsZXMuZG9nV2Fsa2VyKys7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudGFza0hhbmRsZXIrPTI7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudmlydHVhbEFzc2lzdGFudCs9MjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxdWVzdGlvbnNbMTJdLmNoZWNrZWQpIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy52aXJ0dWFsQXNzaXN0YW50Kz0yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHF1ZXN0aW9uc1sxM10uY2hlY2tlZCkge1xuICAgICAgICAgIHNpZGVIdXN0bGVzLmdyb2NlcnlTaG9wcGVyKz0yO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHF1aXpSZXN1bHRzID0gXCJSaWRlLXNoYXJlOiBcIiArIHNpZGVIdXN0bGVzLnJpZGVTaGFyZSArICBcIjsgVHV0b3I6IFwiICsgc2lkZUh1c3RsZXMudHV0b3IgKyBcIjsgR3JvY2VyeSBzaG9wcGVyOiBcIiArIHNpZGVIdXN0bGVzLmdyb2NlcnlTaG9wcGVyICsgXCI7IERvZyBXYWxrZXI6IFwiICsgc2lkZUh1c3RsZXMuZG9nV2Fsa2VyICsgXCI7IFRhc2sgaGFuZGxlcjogXCIgKyBzaWRlSHVzdGxlcy50YXNrSGFuZGxlciArIFwiOyBWaXJ0dWFsIGFzc2lzdGFudDogXCIgKyBzaWRlSHVzdGxlcy52aXJ0dWFsQXNzaXN0YW50O1xuXG4gICAgICAgIGxldCBzb3J0ZWQ7IFxuXG4gICAgICAgIGNvbnNvbGUubG9nKHF1aXpSZXN1bHRzKVxuXG4gICAgICAgIGxldCB2YWx1ZUFycmF5ID0gT2JqZWN0LnZhbHVlcyhzaWRlSHVzdGxlcyk7XG4gICAgICAgIGxldCBzdW0gPSB2YWx1ZUFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApXG5cbiAgICAgICAgaWYgKHN1bSA9PSAtMjApIHtcbiAgICAgICAgICB0aGlzLnNob3dFcnJvciA9ICF0aGlzLnNob3dFcnJvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3J0ZWQgPSBPYmplY3Qua2V5cyhzaWRlSHVzdGxlcylcbiAgICAgICAgICAgICAgICAgICAgICAuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNpZGVIdXN0bGVzW2JdIC0gc2lkZUh1c3RsZXNbYV0gfHwgMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzb3J0ZWQpXG4gICAgICAgICAgdGhpcy5yZXN1bHQgPSBzb3J0ZWRbMF0sXG4gICAgICAgICAgdGhpcy5ydW5uZXJVcCA9IHNvcnRlZFsxXTtcbiAgICAgICAgICB0aGlzLnJ1bm5lclVwMiA9IHNvcnRlZFsyXTtcbiAgICAgICAgICB0aGlzLnNob3dFcnJvciA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucmVzdWx0ID09IFwicmlkZVNoYXJlXCIpIHtcbiAgICAgICAgICB0aGlzLnNob3dSaWRlU2hhcmVRdWVzdGlvbiA9ICF0aGlzLnNob3dSaWRlU2hhcmVRdWVzdGlvbjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc3VsdCA9PSBcInZpcnR1YWxBc3Npc3RhbnRcIikge1xuICAgICAgICAgIHRoaXMuc2hvd0Fzc2lzdGFudFF1ZXN0aW9uID0gIXRoaXMuc2hvd0Fzc2lzdGFudFF1ZXN0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzdWx0ID09IFwidHV0b3JcIikge1xuICAgICAgICAgIHRoaXMuc2hvd1R1dG9yID0gIXRoaXMuc2hvd1R1dG9yO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzdWx0ID09IFwiZ3JvY2VyeVNob3BwZXJcIikge1xuICAgICAgICAgIHRoaXMuc2hvd1Nob3BwZXIgPSAhdGhpcy5zaG93U2hvcHBlcjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc3VsdCA9PSBcImRvZ1dhbGtlclwiKSB7XG4gICAgICAgICAgdGhpcy5zaG93V2Fsa2VyID0gIXRoaXMuc2hvd1dhbGtlcjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc3VsdCA9PSBcInRhc2tIYW5kbGVyXCIpIHtcbiAgICAgICAgICB0aGlzLnNob3dIYW5kbGVyID0gIXRoaXMuc2hvd0hhbmRsZXJcbiAgICAgICAgfVxuXG4gICAgICB9LFxuICAgICAgZmluZEZhbGxiYWNrOiBmdW5jdGlvbiAocmVzdWx0LCBydW5uZXJVcCwgcnVubmVyVXAyKSB7XG5cbiAgICAgICAgICBpZiAocnVubmVyVXAgPT0gXCJyaWRlU2hhcmVcIiB8fCBydW5uZXJVcCA9PSBcInZpcnR1YWxBc3Npc3RhbnRcIikge1xuICAgICAgICAgICAgdGhpcy5zaG93UmlkZVNoYXJlUXVlc3Rpb24gPSAhdGhpcy5zaG93UmlkZVNoYXJlUXVlc3Rpb247XG4gICAgICAgICAgICB0aGlzLnNob3dBc3Npc3RhbnRRdWVzdGlvbiA9ICF0aGlzLnNob3dBc3Npc3RhbnRRdWVzdGlvbjtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhclllc05vID09IFwibm9cIiAmJiB0aGlzLmNvbXB1dGVyWWVzTm8gPT0gXCJub1wiKSB7XG4gICAgICAgICAgICAgIHJlc3VsdD1ydW5uZXJVcDI7XG4gICAgICAgICAgICAgIHRoaXMuaGlkZVF1ZXN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gcnVubmVyVXA7XG4gICAgICAgICAgICB0aGlzLmhpZGVRdWVzdGlvbigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyZXN1bHQgPT0gXCJ0dXRvclwiKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUdXRvciA9ICF0aGlzLnNob3dUdXRvcjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSBcImdyb2NlcnlTaG9wcGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Nob3BwZXIgPSAhdGhpcy5zaG93U2hvcHBlcjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSBcImRvZ1dhbGtlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dXYWxrZXIgPSAhdGhpcy5zaG93V2Fsa2VyO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09IFwidGFza0hhbmRsZXJcIikge1xuICAgICAgICAgICAgdGhpcy5zaG93SGFuZGxlciA9ICF0aGlzLnNob3dIYW5kbGVyXG4gICAgICAgICAgfSBcblxuICAgICAgfSxcbiAgICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaG93UmlkZVNoYXJlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd1R1dG9yID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd1Nob3BwZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93V2Fsa2VyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd0hhbmRsZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93QXNzaXN0YW50ID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMuY29tcHV0ZXJZZXNObyA9ICcnO1xuICAgICAgICAvLyB0aGlzLmNhclllc05vID0gJyc7XG5cbiAgICAgICAgdGhpcy5oaWRlUXVlc3Rpb24oKTtcbiAgICAgIH0sXG4gICAgICBoaWRlUXVlc3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNob3dSaWRlU2hhcmVRdWVzdGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dBc3Npc3RhbnRRdWVzdGlvbiA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgIH0sXG4gICAgICByZXNldEFsbDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLy8gdGhpcy5xdWVzdGlvbnMgPSB0aGlzLnF1ZXN0aW9ucy5maWx0ZXIoeCA9PiAheC5jaGVja2VkKTtcblxuICAgICAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICAgICAgdGhpcy5zaG93UmlkZVNoYXJlUXVlc3Rpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93QXNzaXN0YW50UXVlc3Rpb24gPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpPTA7aTx0aGlzLnF1ZXN0aW9ucy5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMucXVlc3Rpb25zW2ldLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cblxuICAgICAgfVxuICAgIH1cbiAgfSlcbi8vIH0sIDEwMDApIl19
