var quiz=new Vue({el:"#quiz",data:{steadyIncome:"",peoplePerson:"",drive:"",physicalWork:"",skilled:"",fixingThings:"",kids:"",organized:"",comfortHome:"",lovesDogs:"",regularClients:"",menialTasks:"",socialMedia:"",groceryShopper:"",showRideShareQuestion:!1,carYesNo:"",showAssistantQuestion:!1,computerYesNo:"",showResults:!1},computed:{},methods:{calculateResults:function(){let s={rideShare:0,tutor:0,groceryShopper:0,dogWalker:0,taskHandler:0,virtualAssistant:0};this.steadyIncome&&(s.rideShare++,s.tutor+=2,s.groceryShopper++,s.dogWalker++,s.virtualAssistant+=2),this.peoplePerson&&(s.rideShare++,s.tutor++,s.virtualAssistant++),this.drive&&(s.rideShare+=2),this.physicalWork&&(s.taskHandler+=2),this.skilled&&(s.tutor+=2),this.fixingThings&&(s.taskHandler+=2),this.kids&&(s.tutor+=2),this.organized&&(s.tutor++,s.groceryShopper++,s.virtualAssistant+=2),this.comfortHome&&(s.tutor++,s.virtualAssistant+=2),this.lovesDogs&&(s.dogWalker+=2),this.regularClients&&(s.tutor+=2,s.dogWalker+=2,s.taskHandler++,s.virtualAssistant+=2),this.menialTasks&&(s.rideShare+=2,s.groceryShopper+=2,s.dogWalker++,s.taskHandler+=2,s.virtualAssistant+=2),this.socialMedia&&(s.virtualAssistant+=2),this.groceryShopper&&(s.groceryShopper+=2);let t="Ride-share: "+s.rideShare+"; Tutor: "+s.tutor+"; Grocery shopper: "+s.groceryShopper+"; Dog Walker: "+s.dogWalker+"; Task handler: "+s.taskHandler+"; Virtual assistant: "+s.virtualAssistant,e=Object.keys(s).sort(function(t,e){return s[e]-s[t]||.5-Math.random()});console.log(t),console.log(e);let r=e[0];console.log(r),"rideShare"!==r&&"virtualAssistant"!==r&&(this.showResults=!this.ShowResults,console.log(r)),"rideShare"==r?this.showRideShareQuestion=!this.showRideShareQuestion:"virtualAssistant"==r&&(this.showAssistantQuestion=!this.showAssistantQuestion),console.log(this.showRideShareQuestion)}}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsicXVpeiIsIlZ1ZSIsImVsIiwiZGF0YSIsInN0ZWFkeUluY29tZSIsInBlb3BsZVBlcnNvbiIsImRyaXZlIiwicGh5c2ljYWxXb3JrIiwic2tpbGxlZCIsImZpeGluZ1RoaW5ncyIsImtpZHMiLCJvcmdhbml6ZWQiLCJjb21mb3J0SG9tZSIsImxvdmVzRG9ncyIsInJlZ3VsYXJDbGllbnRzIiwibWVuaWFsVGFza3MiLCJzb2NpYWxNZWRpYSIsImdyb2NlcnlTaG9wcGVyIiwic2hvd1JpZGVTaGFyZVF1ZXN0aW9uIiwiY2FyWWVzTm8iLCJzaG93QXNzaXN0YW50UXVlc3Rpb24iLCJjb21wdXRlclllc05vIiwic2hvd1Jlc3VsdHMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJjYWxjdWxhdGVSZXN1bHRzIiwic2lkZUh1c3RsZXMiLCJyaWRlU2hhcmUiLCJ0dXRvciIsImRvZ1dhbGtlciIsInRhc2tIYW5kbGVyIiwidmlydHVhbEFzc2lzdGFudCIsInRoaXMiLCJxdWl6UmVzdWx0cyIsInNvcnRlZCIsIk9iamVjdCIsImtleXMiLCJzb3J0IiwiYSIsImIiLCJNYXRoIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsIlNob3dSZXN1bHRzIl0sIm1hcHBpbmdzIjoiQUFDQSxJQUFBQSxLQUFBLElBQUFDLElBQUEsQ0FDQUMsR0FBQSxRQUNBQyxLQUFBLENBQ0FDLGFBQUEsR0FDQUMsYUFBQSxHQUNBQyxNQUFBLEdBQ0FDLGFBQUEsR0FDQUMsUUFBQSxHQUNBQyxhQUFBLEdBQ0FDLEtBQUEsR0FDQUMsVUFBQSxHQUNBQyxZQUFBLEdBQ0FDLFVBQUEsR0FDQUMsZUFBQSxHQUNBQyxZQUFBLEdBQ0FDLFlBQUEsR0FDQUMsZUFBQSxHQUVBQyx1QkFBQSxFQUNBQyxTQUFBLEdBQ0FDLHVCQUFBLEVBQ0FDLGNBQUEsR0FFQUMsYUFBQSxHQUVBQyxTQUFBLEdBSUFDLFFBQUEsQ0FFQUMsaUJBQUEsV0FFQSxJQUFBQyxFQUFBLENBQ0FDLFVBQUEsRUFDQUMsTUFBQSxFQUNBWCxlQUFBLEVBQ0FZLFVBQUEsRUFDQUMsWUFBQSxFQUNBQyxpQkFBQSxHQUdBQyxLQUFBNUIsZUFDQXNCLEVBQUFDLFlBQ0FELEVBQUFFLE9BQUEsRUFDQUYsRUFBQVQsaUJBQ0FTLEVBQUFHLFlBQ0FILEVBQUFLLGtCQUFBLEdBR0FDLEtBQUEzQixlQUNBcUIsRUFBQUMsWUFDQUQsRUFBQUUsUUFDQUYsRUFBQUssb0JBR0FDLEtBQUExQixRQUNBb0IsRUFBQUMsV0FBQSxHQUdBSyxLQUFBekIsZUFDQW1CLEVBQUFJLGFBQUEsR0FHQUUsS0FBQXhCLFVBQ0FrQixFQUFBRSxPQUFBLEdBR0FJLEtBQUF2QixlQUNBaUIsRUFBQUksYUFBQSxHQUdBRSxLQUFBdEIsT0FDQWdCLEVBQUFFLE9BQUEsR0FHQUksS0FBQXJCLFlBQ0FlLEVBQUFFLFFBQ0FGLEVBQUFULGlCQUNBUyxFQUFBSyxrQkFBQSxHQUdBQyxLQUFBcEIsY0FDQWMsRUFBQUUsUUFDQUYsRUFBQUssa0JBQUEsR0FHQUMsS0FBQW5CLFlBQ0FhLEVBQUFHLFdBQUEsR0FHQUcsS0FBQWxCLGlCQUNBWSxFQUFBRSxPQUFBLEVBQ0FGLEVBQUFHLFdBQUEsRUFDQUgsRUFBQUksY0FDQUosRUFBQUssa0JBQUEsR0FHQUMsS0FBQWpCLGNBQ0FXLEVBQUFDLFdBQUEsRUFDQUQsRUFBQVQsZ0JBQUEsRUFDQVMsRUFBQUcsWUFDQUgsRUFBQUksYUFBQSxFQUNBSixFQUFBSyxrQkFBQSxHQUdBQyxLQUFBaEIsY0FDQVUsRUFBQUssa0JBQUEsR0FHQUMsS0FBQWYsaUJBQ0FTLEVBQUFULGdCQUFBLEdBR0EsSUFBQWdCLEVBQUEsZUFBQVAsRUFBQUMsVUFBQSxZQUFBRCxFQUFBRSxNQUFBLHNCQUFBRixFQUFBVCxlQUFBLGlCQUFBUyxFQUFBRyxVQUFBLG1CQUFBSCxFQUFBSSxZQUFBLHdCQUFBSixFQUFBSyxpQkFFQUcsRUFBQUMsT0FBQUMsS0FBQVYsR0FDQVcsS0FBQSxTQUFBQyxFQUFBQyxHQUNBLE9BQUFiLEVBQUFhLEdBQUFiLEVBQUFZLElBQUEsR0FBQUUsS0FBQUMsV0FHQUMsUUFBQUMsSUFBQVYsR0FDQVMsUUFBQUMsSUFBQVQsR0FFQSxJQUFBVSxFQUFBVixFQUFBLEdBQ0FRLFFBQUFDLElBQUFDLEdBRUEsY0FBQUEsR0FBQSxxQkFBQUEsSUFDQVosS0FBQVYsYUFBQVUsS0FBQWEsWUFDQUgsUUFBQUMsSUFBQUMsSUFHQSxhQUFBQSxFQUNBWixLQUFBZCx1QkFBQWMsS0FBQWQsc0JBQ0Esb0JBQUEwQixJQUNBWixLQUFBWix1QkFBQVksS0FBQVosdUJBR0FzQixRQUFBQyxJQUFBWCxLQUFBZCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICB2YXIgcXVpeiA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI3F1aXonLFxuICAgIGRhdGE6IHtcbiAgICAgIHN0ZWFkeUluY29tZTogJycsXG4gICAgICBwZW9wbGVQZXJzb246ICcnLFxuICAgICAgZHJpdmU6ICcnLFxuICAgICAgcGh5c2ljYWxXb3JrOiAnJyxcbiAgICAgIHNraWxsZWQ6ICcnLFxuICAgICAgZml4aW5nVGhpbmdzOiAnJyxcbiAgICAgIGtpZHM6ICcnLFxuICAgICAgb3JnYW5pemVkOiAnJyxcbiAgICAgIGNvbWZvcnRIb21lOiAnJyxcbiAgICAgIGxvdmVzRG9nczogJycsXG4gICAgICByZWd1bGFyQ2xpZW50czogJycsXG4gICAgICBtZW5pYWxUYXNrczogJycsXG4gICAgICBzb2NpYWxNZWRpYTogJycsXG4gICAgICBncm9jZXJ5U2hvcHBlcjogJycsXG5cbiAgICAgIHNob3dSaWRlU2hhcmVRdWVzdGlvbjogZmFsc2UsXG4gICAgICBjYXJZZXNObzogJycsXG4gICAgICBzaG93QXNzaXN0YW50UXVlc3Rpb246IGZhbHNlLFxuICAgICAgY29tcHV0ZXJZZXNObzogJycsXG5cbiAgICAgIHNob3dSZXN1bHRzOiBmYWxzZVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIC8vIHJlc3VsdHMgZ28gaGVyZVxuXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAvLyBmdW5jdGlvbnMgZ28gaGVyZVxuICAgICAgY2FsY3VsYXRlUmVzdWx0czogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgbGV0IHNpZGVIdXN0bGVzID0ge1xuICAgICAgICAgIHJpZGVTaGFyZTogMCxcbiAgICAgICAgICB0dXRvcjogMCxcbiAgICAgICAgICBncm9jZXJ5U2hvcHBlcjogMCxcbiAgICAgICAgICBkb2dXYWxrZXI6IDAsXG4gICAgICAgICAgdGFza0hhbmRsZXI6IDAsXG4gICAgICAgICAgdmlydHVhbEFzc2lzdGFudDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnN0ZWFkeUluY29tZSkge1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnJpZGVTaGFyZSsrO1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnR1dG9yKz0yO1xuICAgICAgICAgIHNpZGVIdXN0bGVzLmdyb2NlcnlTaG9wcGVyKys7XG4gICAgICAgICAgc2lkZUh1c3RsZXMuZG9nV2Fsa2VyKys7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudmlydHVhbEFzc2lzdGFudCs9MjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBlb3BsZVBlcnNvbikge1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnJpZGVTaGFyZSsrO1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnR1dG9yKys7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudmlydHVhbEFzc2lzdGFudCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZHJpdmUpIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy5yaWRlU2hhcmUrPTI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5waHlzaWNhbFdvcmspIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy50YXNrSGFuZGxlcis9MjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNraWxsZWQpIHtcbiAgICAgICAgICBzaWRlSHVzdGxlcy50dXRvcis9MjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZpeGluZ1RoaW5ncykge1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnRhc2tIYW5kbGVyKz0yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMua2lkcykge1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnR1dG9yKz0yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3JnYW5pemVkKSB7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudHV0b3IrKztcbiAgICAgICAgICBzaWRlSHVzdGxlcy5ncm9jZXJ5U2hvcHBlcisrO1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnZpcnR1YWxBc3Npc3RhbnQrPTI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb21mb3J0SG9tZSkge1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnR1dG9yKys7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudmlydHVhbEFzc2lzdGFudCs9MjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxvdmVzRG9ncykge1xuICAgICAgICAgIHNpZGVIdXN0bGVzLmRvZ1dhbGtlcis9MjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnJlZ3VsYXJDbGllbnRzKSB7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudHV0b3IrPTI7XG4gICAgICAgICAgc2lkZUh1c3RsZXMuZG9nV2Fsa2VyKz0yO1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnRhc2tIYW5kbGVyKys7XG4gICAgICAgICAgc2lkZUh1c3RsZXMudmlydHVhbEFzc2lzdGFudCs9MjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1lbmlhbFRhc2tzKSB7XG4gICAgICAgICAgc2lkZUh1c3RsZXMucmlkZVNoYXJlKz0yO1xuICAgICAgICAgIHNpZGVIdXN0bGVzLmdyb2NlcnlTaG9wcGVyKz0yO1xuICAgICAgICAgIHNpZGVIdXN0bGVzLmRvZ1dhbGtlcisrO1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnRhc2tIYW5kbGVyKz0yO1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnZpcnR1YWxBc3Npc3RhbnQrPTI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zb2NpYWxNZWRpYSkge1xuICAgICAgICAgIHNpZGVIdXN0bGVzLnZpcnR1YWxBc3Npc3RhbnQrPTI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ncm9jZXJ5U2hvcHBlcikge1xuICAgICAgICAgIHNpZGVIdXN0bGVzLmdyb2NlcnlTaG9wcGVyKz0yO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHF1aXpSZXN1bHRzID0gXCJSaWRlLXNoYXJlOiBcIiArIHNpZGVIdXN0bGVzLnJpZGVTaGFyZSArICBcIjsgVHV0b3I6IFwiICsgc2lkZUh1c3RsZXMudHV0b3IgKyBcIjsgR3JvY2VyeSBzaG9wcGVyOiBcIiArIHNpZGVIdXN0bGVzLmdyb2NlcnlTaG9wcGVyICsgXCI7IERvZyBXYWxrZXI6IFwiICsgc2lkZUh1c3RsZXMuZG9nV2Fsa2VyICsgXCI7IFRhc2sgaGFuZGxlcjogXCIgKyBzaWRlSHVzdGxlcy50YXNrSGFuZGxlciArIFwiOyBWaXJ0dWFsIGFzc2lzdGFudDogXCIgKyBzaWRlSHVzdGxlcy52aXJ0dWFsQXNzaXN0YW50O1xuXG4gICAgICAgIGxldCBzb3J0ZWQgPSBPYmplY3Qua2V5cyhzaWRlSHVzdGxlcylcbiAgICAgICAgICAgICAgICAgICAgICAuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNpZGVIdXN0bGVzW2JdIC0gc2lkZUh1c3RsZXNbYV0gfHwgMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhxdWl6UmVzdWx0cylcbiAgICAgICAgY29uc29sZS5sb2coc29ydGVkKVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBzb3J0ZWRbMF07XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcblxuICAgICAgICBpZiAocmVzdWx0ICE9PSBcInJpZGVTaGFyZVwiICYmIHJlc3VsdCAhPT0gXCJ2aXJ0dWFsQXNzaXN0YW50XCIpIHtcbiAgICAgICAgICB0aGlzLnNob3dSZXN1bHRzID0gIXRoaXMuU2hvd1Jlc3VsdHM7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQgPT0gXCJyaWRlU2hhcmVcIikge1xuICAgICAgICAgIHRoaXMuc2hvd1JpZGVTaGFyZVF1ZXN0aW9uID0gIXRoaXMuc2hvd1JpZGVTaGFyZVF1ZXN0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSBcInZpcnR1YWxBc3Npc3RhbnRcIikge1xuICAgICAgICAgIHRoaXMuc2hvd0Fzc2lzdGFudFF1ZXN0aW9uID0gIXRoaXMuc2hvd0Fzc2lzdGFudFF1ZXN0aW9uO1xuICAgICAgICB9IFxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2hvd1JpZGVTaGFyZVF1ZXN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4vLyB9LCAxMDAwKVxuIl19