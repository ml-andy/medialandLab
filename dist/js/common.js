function getUrlVars(){for(var o,n=[],i=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),t=0;t<i.length;t++)o=i[t].split("="),n.push(o[0]),n[o[0]]=o[1];return n}$(document).ready(function(){function o(o){o?$(".loading").addClass("on").fadeIn():$(".loading").removeClass("on").fadeOut()}var n=io("http://lab.medialand.com.tw",{path:"/andy/socket.io"}),i={wrapper:$(".wraper"),mainImg:$(".mainImg"),word:$(".wrapper .word")};n.on("ioAlert",function(o){console.log(o.msg),n.emit("userData",{h:$(window).height(),w:$(window).width()})}),n.on("imgGo",function(o){i.word.addClass("on"),console.log(o),i.mainImg.css({height:o.h,width:"auto",top:o.y,left:$(window).width()})}),n.on("imgMove",function(o){i.mainImg.css({left:$(window).width()-o.d})}),n.on("reload",function(o){location.reload()}),$(".wrapper .word").click(function(){i.word.hasClass("on")?(i.word.hide(),$("body").addClass("on"),n.emit("start",{width:i.mainImg.width()+$(window).width()})):n.emit("imgGo")}),$(window).load(function(){o(!1)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJnZXRVcmxWYXJzIiwiaGFzaCIsInZhcnMiLCJoYXNoZXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzbGljZSIsImluZGV4T2YiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJwdXNoIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzaG93TG9hZGluZyIsIl90IiwiYWRkQ2xhc3MiLCJmYWRlSW4iLCJyZW1vdmVDbGFzcyIsImZhZGVPdXQiLCJzb2NrZXQiLCJpbyIsInBhdGgiLCJvIiwid3JhcHBlciIsIm1haW5JbWciLCJ3b3JkIiwib24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1zZyIsImVtaXQiLCJoIiwiaGVpZ2h0IiwidyIsIndpZHRoIiwiY3NzIiwidG9wIiwieSIsImxlZnQiLCJkIiwicmVsb2FkIiwiY2xpY2siLCJoYXNDbGFzcyIsImhpZGUiLCJsb2FkIl0sIm1hcHBpbmdzIjoiQUF1REEsUUFBU0EsY0FFTCxJQUFJLEdBRFFDLEdBQVJDLEtBQWlCQyxFQUFPQyxPQUFPQyxTQUFTQyxLQUFLQyxNQUFNSCxPQUFPQyxTQUFTQyxLQUFLRSxRQUFRLEtBQUssR0FBR0MsTUFBTSxLQUMxRkMsRUFBRSxFQUFFQSxFQUFFUCxFQUFPUSxPQUFPRCxJQUFLVCxFQUFLRSxFQUFPTyxHQUFHRCxNQUFNLEtBQUtQLEVBQUtVLEtBQUtYLEVBQUssSUFBSUMsRUFBS0QsRUFBSyxJQUFJQSxFQUFLLEVBQ2pHLE9BQU9DLEdBMURYVyxFQUFFQyxVQUFVQyxNQUFNLFdBaURkLFFBQVNDLEdBQVlDLEdBQ2RBLEVBQUlKLEVBQUUsWUFBWUssU0FBUyxNQUFNQyxTQUMvQk4sRUFBRSxZQUFZTyxZQUFZLE1BQU1DLFVBbER6QyxHQUFJQyxHQUFTQyxHQUFHLCtCQUFnQ0MsS0FBSyxvQkFDakRDLEdBQ0FDLFFBQVFiLEVBQUUsV0FDVmMsUUFBU2QsRUFBRSxZQUNYZSxLQUFLZixFQUFFLGtCQUdYUyxHQUFPTyxHQUFHLFVBQVUsU0FBU0MsR0FDekJDLFFBQVFDLElBQUlGLEVBQUtHLEtBQ2pCWCxFQUFPWSxLQUFLLFlBQWFDLEVBQUV0QixFQUFFVCxRQUFRZ0MsU0FBU0MsRUFBRXhCLEVBQUVULFFBQVFrQyxZQUU5RGhCLEVBQU9PLEdBQUcsUUFBUSxTQUFTQyxHQUN2QkwsRUFBRUcsS0FBS1YsU0FBUyxNQUNoQmEsUUFBUUMsSUFBSUYsR0FDWkwsRUFBRUUsUUFDRFksS0FDR0gsT0FBVU4sRUFBS0ssRUFDZkcsTUFBUyxPQUNURSxJQUFPVixFQUFLVyxFQUNaQyxLQUFRN0IsRUFBRVQsUUFBUWtDLFlBRzFCaEIsRUFBT08sR0FBRyxVQUFVLFNBQVNDLEdBQ3pCTCxFQUFFRSxRQUFRWSxLQUFLRyxLQUFRN0IsRUFBRVQsUUFBUWtDLFFBQVFSLEVBQUthLE1BRWxEckIsRUFBT08sR0FBRyxTQUFTLFNBQVNDLEdBQ3hCekIsU0FBU3VDLFdBR2IvQixFQUFFLGtCQUFrQmdDLE1BQU0sV0FDbkJwQixFQUFFRyxLQUFLa0IsU0FBUyxPQUNmckIsRUFBRUcsS0FBS21CLE9BQ1BsQyxFQUFFLFFBQVFLLFNBQVMsTUFDbkJJLEVBQU9ZLEtBQUssU0FBU0ksTUFBTWIsRUFBRUUsUUFBUVcsUUFBUXpCLEVBQUVULFFBQVFrQyxXQUd2RGhCLEVBQU9ZLEtBQUssV0FRcEJyQixFQUFFVCxRQUFRNEMsS0FBSyxXQUNYaEMsR0FBWSIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgdmFyIHNvY2tldCA9IGlvKCdodHRwOi8vbGFiLm1lZGlhbGFuZC5jb20udHcnLCB7cGF0aDonL2FuZHkvc29ja2V0LmlvJ30pO1xyXG4gICAgdmFyIG89e1xyXG4gICAgICAgIHdyYXBwZXI6JCgnLndyYXBlcicpLFxyXG4gICAgICAgIG1haW5JbWc6ICQoJy5tYWluSW1nJyksXHJcbiAgICAgICAgd29yZDokKCcud3JhcHBlciAud29yZCcpXHJcbiAgICB9O1xyXG5cclxuICAgIHNvY2tldC5vbignaW9BbGVydCcsZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5tc2cpO1xyXG4gICAgICAgIHNvY2tldC5lbWl0KCd1c2VyRGF0YScseyBoOiQod2luZG93KS5oZWlnaHQoKSx3OiQod2luZG93KS53aWR0aCgpIH0pO1xyXG4gICAgfSk7XHJcbiAgICBzb2NrZXQub24oJ2ltZ0dvJyxmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICBvLndvcmQuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgby5tYWluSW1nXHJcbiAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICdoZWlnaHQnOiBkYXRhLmgsXHJcbiAgICAgICAgICAgICd3aWR0aCc6ICdhdXRvJyxcclxuICAgICAgICAgICAgJ3RvcCc6IGRhdGEueSxcclxuICAgICAgICAgICAgJ2xlZnQnOiAkKHdpbmRvdykud2lkdGgoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBzb2NrZXQub24oJ2ltZ01vdmUnLGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgIG8ubWFpbkltZy5jc3MoeydsZWZ0JzogJCh3aW5kb3cpLndpZHRoKCktZGF0YS5kfSlcclxuICAgIH0pO1xyXG4gICAgc29ja2V0Lm9uKCdyZWxvYWQnLGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoJy53cmFwcGVyIC53b3JkJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBpZihvLndvcmQuaGFzQ2xhc3MoJ29uJykpe1xyXG4gICAgICAgICAgICBvLndvcmQuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdzdGFydCcse3dpZHRoOm8ubWFpbkltZy53aWR0aCgpKyQod2luZG93KS53aWR0aCgpfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdpbWdHbycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gJCgnYm9keScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnb24nKSkgc29ja2V0LmVtaXQoJ3JlbG9hZCcpO1xyXG4gICAgLy8gfSk7XHJcbiAgICBcclxuXHJcbiAgICAkKHdpbmRvdykubG9hZChmdW5jdGlvbigpe1xyXG4gICAgICAgIHNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzaG93TG9hZGluZyhfdCl7XHJcbiAgICAgICAgaWYoX3QpICQoJy5sb2FkaW5nJykuYWRkQ2xhc3MoJ29uJykuZmFkZUluKCk7XHJcbiAgICAgICAgZWxzZSAkKCcubG9hZGluZycpLnJlbW92ZUNsYXNzKCdvbicpLmZhZGVPdXQoKTtcclxuICAgIH1cclxuXHJcbn0pLy9yZWFkeSBlbmRcclxuZnVuY3Rpb24gZ2V0VXJsVmFycygpe1xyXG4gICAgdmFyIHZhcnM9W10saGFzaDt2YXIgaGFzaGVzPXdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJz8nKSsxKS5zcGxpdCgnJicpO1xyXG4gICAgZm9yKHZhciBpPTA7aTxoYXNoZXMubGVuZ3RoO2krKyl7aGFzaD1oYXNoZXNbaV0uc3BsaXQoJz0nKTt2YXJzLnB1c2goaGFzaFswXSk7dmFyc1toYXNoWzBdXT1oYXNoWzFdfVxyXG4gICAgcmV0dXJuIHZhcnNcclxufVxyXG4iXX0=
