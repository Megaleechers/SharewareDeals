var readtourcookie=null, enablebuttontour=false;var dealsearch = window['location']['hash']['replace']('#', '')['replace'](/%20/g, ' ');var ismobilerequest=false;if(/Mobi/.test(navigator.userAgent)){ismobilerequest=true;}var widthsweet = '570px';
// SecureRedirect
function secureredirect(r){var e=window.open(r);e?e.focus():swal({title:'Error!',type:'error',text:"Please allow popups for this website!",showCloseButton:true,allowOutsideClick:false,confirmButtonText:'Close',confirmButtonColor:'#8cd4f5',})}
// Cookie Functions
function createCookie(name,value,days){var expires="";if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toUTCString()}document.cookie=name+"="+value+expires+"; path=/"}function readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length)}return null}function eraseCookie(name){createCookie(name,"",-1)}function eraseCookie(name){createCookie(name,"",-1);}
// Buttons Codes - Do Not Copy!
var _0x5873=["","\x2E\x63\x6F\x70\x79\x63\x62","\x73\x75\x63\x63\x65\x73\x73","\x41\x63\x74\x69\x6F\x6E\x3A","\x61\x63\x74\x69\x6F\x6E","\x69\x6E\x66\x6F","\x54\x65\x78\x74\x3A","\x74\x65\x78\x74","\x54\x72\x69\x67\x67\x65\x72\x3A","\x74\x72\x69\x67\x67\x65\x72","\x43\x6F\x75\x70\x6F\x6E\x20\x63\x6F\x70\x69\x65\x64\x20\x74\x6F\x20\x79\x6F\x75\x72\x20\x63\x6C\x69\x70\x62\x6F\x61\x72\x64\x21","\x43\x6C\x6F\x73\x65","\x23\x38\x63\x64\x34\x66\x35","\x63\x6C\x65\x61\x72\x53\x65\x6C\x65\x63\x74\x69\x6F\x6E","\x6F\x6E","\x65\x72\x72\x6F\x72","\x50\x6C\x65\x61\x73\x65\x20\x43\x6F\x70\x79\x20\x43\x6F\x75\x70\x6F\x6E\x20\x4D\x61\x6E\x75\x61\x6C\x6C\x79\x21","\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x20\x66\x61\x2D\x63\x61\x72\x74\x2D\x70\x6C\x75\x73\x20\x66\x61\x2D\x6C\x67\x22\x20\x61\x72\x69\x61\x2D\x68\x69\x64\x64\x65\x6E\x3D\x22\x74\x72\x75\x65\x22\x3E\x3C\x2F\x69\x3E","\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x20\x66\x61\x2D\x68\x61\x6E\x64\x2D\x6F\x2D\x64\x6F\x77\x6E\x20\x66\x61\x2D\x6C\x67\x20\x6D\x69\x66\x2D\x61\x6E\x69\x2D\x66\x6C\x6F\x61\x74\x20\x6D\x69\x66\x2D\x61\x6E\x69\x2D\x66\x61\x73\x74\x22\x20\x61\x72\x69\x61\x2D\x68\x69\x64\x64\x65\x6E\x3D\x22\x74\x72\x75\x65\x22\x3E\x3C\x2F\x69\x3E","\x20\x20\x7C\x20\x20","\x3C\x62\x72\x20\x2F\x3E","\x3C\x62\x75\x74\x74\x6F\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x75\x79\x73\x77\x65\x65\x74\x62\x75\x74\x74\x6F\x6E\x22\x3E\x42\x75\x79\x20\x4E\x6F\x77\x21\x3C\x2F\x62\x75\x74\x74\x6F\x6E\x3E","\x6D\x65\x67\x61\x6C\x65\x65\x63\x68\x65\x72\x73","\x69\x6E\x64\x65\x78\x4F\x66","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x2F\x2F\x73\x68\x61\x72\x65\x77\x61\x72\x65\x2E\x64\x65\x61\x6C\x73","\x4D\x65\x67\x61\x6C\x65\x65\x63\x68\x65\x72\x73\x2E\x63\x6F\x6D","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6F\x75\x70\x6F\x6E\x62\x6F\x78\x22\x3E","\x3C\x2F\x73\x70\x61\x6E\x3E","\x4E\x6F\x20\x43\x6F\x75\x70\x6F\x6E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6F\x75\x70\x6F\x6E\x6E\x6F\x74\x69\x63\x65\x22\x3E","\x20\x3C\x62\x3E\x59\x6F\x75\x72\x20\x64\x69\x73\x63\x6F\x75\x6E\x74\x20\x77\x69\x6C\x6C\x20\x62\x65\x20\x61\x75\x74\x6F\x6D\x61\x74\x69\x63\x61\x6C\x6C\x79\x20\x61\x70\x70\x6C\x69\x65\x64\x20\x61\x74\x20\x63\x68\x65\x63\x6B\x6F\x75\x74\x3C\x2F\x62\x3E\x20","\x3C\x2F\x64\x69\x76\x3E","\x20\x3C\x62\x3E\x43\x6F\x75\x70\x6F\x6E\x20\x43\x6F\x64\x65\x20\x77\x69\x6C\x6C\x20\x77\x6F\x72\x6B\x20\x3C\x75\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x69\x66\x2D\x61\x6E\x69\x2D\x66\x6C\x61\x73\x68\x20\x6D\x69\x66\x2D\x61\x6E\x69\x2D\x73\x6C\x6F\x77\x22\x3E\x6F\x6E\x6C\x79\x3C\x2F\x75\x3E\x20\x6F\x6E\x20\x74\x68\x65\x20\x6C\x69\x6E\x6B\x28\x73\x29\x20\x62\x65\x6C\x6F\x77\x3C\x2F\x62\x3E\x20","\x20\x3C\x62\x3E\x51\x75\x69\x63\x6B\x20\x63\x68\x65\x63\x6B\x6F\x75\x74\x20\x6C\x69\x6E\x6B\x28\x73\x29\x20\x66\x6F\x72\x20\x79\x6F\x75\x72\x20\x63\x6F\x6E\x76\x65\x6E\x69\x65\x6E\x63\x65\x3C\x2F\x62\x3E\x20","\x3C\x61\x20\x72\x65\x6C\x3D\x22\x6E\x6F\x66\x6F\x6C\x6C\x6F\x77\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x73\x69\x6D\x75\x6C\x61\x74\x65\x22\x20\x6F\x6E\x63\x6C\x69\x63\x6B\x3D\x22\x73\x65\x63\x75\x72\x65\x72\x65\x64\x69\x72\x65\x63\x74\x28\x27","\x27\x29\x3B\x22\x3E","\x3C\x2F\x61\x3E","\x3C\x62\x72\x20\x2F\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x64\x2D\x64\x69\x76\x69\x64\x65\x72\x22\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6D\x69\x6E\x6F\x72\x68\x65\x61\x64\x73\x69\x7A\x65\x22\x3E\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x20\x66\x61\x2D\x71\x75\x65\x73\x74\x69\x6F\x6E\x2D\x63\x69\x72\x63\x6C\x65\x2D\x6F\x22\x20\x61\x72\x69\x61\x2D\x68\x69\x64\x64\x65\x6E\x3D\x22\x74\x72\x75\x65\x22\x3E\x3C\x2F\x69\x3E\x20\x4E\x65\x65\x64\x20\x48\x65\x6C\x70\x3F\x21\x3C\x2F\x64\x69\x76\x3E\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x68\x65\x6C\x70\x6E\x6F\x74\x69\x63\x65\x22\x3E\x43\x6F\x6E\x74\x61\x63\x74\x20\x61\x20\x3C\x61\x20\x63\x6C\x61\x73\x73\x3D\x22\x73\x69\x6D\x75\x6C\x61\x74\x65\x22\x20\x6F\x6E\x63\x6C\x69\x63\x6B\x3D\x22\x43\x68\x61\x74\x72\x61\x28\x27\x6F\x70\x65\x6E\x43\x68\x61\x74\x27\x2C\x20\x74\x72\x75\x65\x29\x22\x3E\x4C\x69\x76\x65\x20\x41\x67\x65\x6E\x74\x3C\x2F\x61\x3E\x20\x6F\x72\x20\x61\x6C\x74\x65\x72\x6E\x61\x74\x69\x76\x65\x6C\x79\x20\x63\x6C\x69\x63\x6B\x20\x6F\x6E\x20\x74\x68\x65\x20\x6C\x69\x76\x65\x20\x63\x68\x61\x74\x20\x77\x69\x64\x67\x65\x74\x20\x6F\x6E\x20\x74\x68\x65\x20\x62\x6F\x74\x74\x6F\x6D\x2D\x6C\x65\x66\x74\x20\x63\x6F\x72\x6E\x65\x72\x2E\x20\x57\x65\x20\x77\x69\x6C\x6C\x20\x62\x65\x20\x68\x61\x70\x70\x79\x20\x74\x6F\x20\x61\x73\x73\x69\x73\x74\x20\x79\x6F\x75\x21\x3C\x2F\x73\x70\x61\x6E\x3E","\x23\x73\x65\x61\x72\x63\x68\x74\x61\x62\x6C\x65\x20\x74\x62\x6F\x64\x79\x20\x74\x72","\x69\x6E\x70\x75\x74","\x5E\x28\x3F\x3D\x2E\x2A","\x29\x28\x3F\x3D\x2E\x2A","\x6A\x6F\x69\x6E","\x73\x70\x6C\x69\x74","\x76\x61\x6C","\x74\x72\x69\x6D","\x29\x2E\x2A\x24","\x69","\x68\x69\x64\x65","\x20","\x72\x65\x70\x6C\x61\x63\x65","\x74\x65\x73\x74","\x66\x69\x6C\x74\x65\x72","\x73\x68\x6F\x77","\x23\x73\x65\x61\x72\x63\x68"];var snotetext=_0x5873[0];var clipboard= new ClipboardJS(_0x5873[1]);clipboard[_0x5873[14]](_0x5873[2],function(_0x89a3x3){console[_0x5873[5]](_0x5873[3],_0x89a3x3[_0x5873[4]]),console[_0x5873[5]](_0x5873[6],_0x89a3x3[_0x5873[7]]),console[_0x5873[5]](_0x5873[8],_0x89a3x3[_0x5873[9]]),swal({title:_0x5873[10],type:_0x5873[2],width:widthsweet,html:snotetext,showCloseButton:true,allowOutsideClick:false,confirmButtonText:_0x5873[11],confirmButtonColor:_0x5873[12]}),_0x89a3x3[_0x5873[13]]()}),clipboard[_0x5873[14]](_0x5873[15],function(_0x89a3x3){console[_0x5873[15]](_0x5873[3],_0x89a3x3[_0x5873[4]]),console[_0x5873[15]](_0x5873[8],_0x89a3x3[_0x5873[9]]),swal({title:_0x5873[16],type:_0x5873[5],html:snotetext,showCloseButton:true,allowOutsideClick:false,confirmButtonText:_0x5873[11],confirmButtonColor:_0x5873[12]}),_0x89a3x3[_0x5873[13]]()});function AlertCopyCustom(_0x89a3x5,_0x89a3x6,_0x89a3x7,_0x89a3x8,_0x89a3x9,_0x89a3xa,_0x89a3xb,_0x89a3xc,_0x89a3xd,_0x89a3xe,_0x89a3xf,_0x89a3x10){var _0x89a3x11=_0x5873[17];var _0x89a3x12=_0x5873[18];var _0x89a3x13=_0x5873[0],_0x89a3x14=_0x5873[0],_0x89a3x15=_0x5873[0],_0x89a3x16=_0x5873[0],_0x89a3x17=_0x5873[0],_0x89a3x18=_0x5873[0],_0x89a3x19=_0x5873[19],_0x89a3x1a=_0x5873[20],_0x89a3x1b=_0x5873[21];if(top[_0x5873[25]][_0x5873[24]][_0x5873[23]](_0x5873[22])< 0&& top[_0x5873[25]][_0x5873[24]][_0x5873[23]](_0x5873[26])< 0){_0x89a3x5= _0x5873[27]};snotetext= _0x5873[28]+ _0x89a3x5+ _0x5873[29]+ _0x89a3x1a+ _0x89a3x1a;if(_0x89a3x5[_0x5873[23]](_0x5873[30])>  -1){snotetext= snotetext+ _0x5873[31]+ _0x89a3x12+ _0x5873[32]+ _0x89a3x12+ _0x5873[33]+ _0x89a3x1a}else {var _0x89a3x1c;if(!!_0x89a3x6){_0x89a3x1c= _0x5873[34]}else {_0x89a3x1c= _0x5873[35]};snotetext= snotetext+ _0x5873[31]+ _0x89a3x12+ _0x89a3x1c+ _0x89a3x12+ _0x5873[33]+ _0x89a3x1a};_0x89a3x13= _0x89a3x18+ _0x89a3x7+ _0x89a3x19+ _0x5873[36]+ _0x89a3x8+ _0x5873[37]+ _0x89a3x1b+ _0x5873[38];if(_0x89a3x9!= null&& _0x89a3xa!= null){_0x89a3x14= _0x89a3x1a+ _0x89a3x18+ _0x89a3x9+ _0x89a3x19+ _0x5873[36]+ _0x89a3xa+ _0x5873[37]+ _0x89a3x1b+ _0x5873[38];if(_0x89a3xb!= null&& _0x89a3xc!= null){_0x89a3x15= _0x89a3x1a+ _0x89a3x18+ _0x89a3xb+ _0x89a3x19+ _0x5873[36]+ _0x89a3xc+ _0x5873[37]+ _0x89a3x1b+ _0x5873[38];if(_0x89a3xd!= null&& _0x89a3xe!= null){_0x89a3x16= _0x89a3x1a+ _0x89a3x18+ _0x89a3xd+ _0x89a3x19+ _0x5873[36]+ _0x89a3xe+ _0x5873[37]+ _0x89a3x1b+ _0x5873[38];if(_0x89a3xf!= null&& _0x89a3x10!= null){_0x89a3x17= _0x89a3x1a+ _0x89a3x18+ _0x89a3xf+ _0x89a3x19+ _0x5873[36]+ _0x89a3x10+ _0x5873[37]+ _0x89a3x1b+ _0x5873[38]}}}};snotetext= snotetext+ _0x89a3x13+ _0x89a3x14+ _0x89a3x15+ _0x89a3x16+ _0x89a3x17;if(!ismobilerequest){snotetext= snotetext+ _0x89a3x1a+ _0x5873[39]}}var $rows=$(_0x5873[40]);$(_0x5873[56])[_0x5873[14]](_0x5873[41],function(_0x89a3x1e){var _0x89a3x1f,_0x89a3x1e=_0x5873[42]+ $[_0x5873[47]]($(this)[_0x5873[46]]())[_0x5873[45]](/\s+/)[_0x5873[44]](_0x5873[43])+ _0x5873[48],_0x89a3x20=RegExp(_0x89a3x1e,_0x5873[49]);$rows[_0x5873[55]]()[_0x5873[54]](function(){return _0x89a3x1f= $(this)[_0x5873[7]]()[_0x5873[52]](/\s+/g,_0x5873[51]),!_0x89a3x20[_0x5873[53]](_0x89a3x1f)})[_0x5873[50]]()})
// Table
$(document).ready(function(){
         var distable = $('#searchtable').DataTable({
        "ajax": 'ajax.txt',
        "pageLength": 100,
         //'sDom': 't' show only the table
         //"paging":   false,
         //"ordering": false,
         //"info":     false,
        "aaSorting": [], // Set the aaSorting option to an empty array, disable initial sorting, whilst still allowing manual sorting when you click on a column.
        //stateSave: true, // save the state of a table (its paging position, ordering state etc) so that is can be restored when the user reloads a page, or comes back to the page after visiting a sub-page.
        //"orderable": false,
        "deferRender": true, // This option allows DataTables to create the nodes (rows and cells in the table body) only when they are needed for a draw.
        //renderer: "bootstrap",
        responsive: true,
         "columnDefs": [{ "orderable": false, "targets": [2,3,4] }, { "width": "325px", "targets": 0 }, { "width": "75px", "targets": 1 }, { "width": "90px", "targets": 2 }, { "width": "155px", "targets": 3 }, { "width": "45px", "targets": 4 }], // {"className": "dt-center", "targets": "_all"}, { className: 'text-center', targets: [1,4] } instead of productstyle: { className: "productstyle", "targets": [ 0 ] }
         "iDisplayLength": 400, // Number of rows to display on a single page when using pagination.  Default 10 or paging: false
         "lengthChange": true,
         "aLengthMenu": [[25, 50, 100 , 200,-1], [25, 50, 100,200, "All"]],
          "initComplete": function(settings, json) {
          if(dealsearch != '' && dealsearch != null){document['getElementById']('search')['value'] = dealsearch; distable.search(dealsearch).draw();}

         // Tour
         enablebuttontour = true;
         readtourcookie=readCookie('mlshowtour');if(readtourcookie==null){if((dealsearch==""||dealsearch==null)&&enablebuttontour){var tour={id:"hello-hopscotch",steps:[{title:"Quick Tip!",content:"Use the below search box to find your desired coupon!",target:document.querySelector(".searchbox"),placement:"top"},{title: "Activate Deal",content: "To get your special deal click on this button!",target: document.querySelector(".buy-button"),placement: "top"}]}}else{var tour={id:"hello-hopscotch",steps:[{title:"Quick Tip!",content:"Use the below search box to find your desired coupon!",target:document.querySelector(".searchbox"),placement:"top"}]}};hopscotch.startTour(tour);createCookie('mlshowtour','already',30);}

    } // end initComplete
    }); // end DataTable

    // Search the table using a custom input:
    $('#search').on('keyup',function (){distable.search(this.value).draw();});

// Backtotop
$(window).scroll(function(){$(this).scrollTop()>300?$(".backtotop").addClass('showe'):$(".backtotop").removeClass('showe')}),$(".backtotop").click(function(){return $("html,body").animate({scrollTop:0},300),!1})});
// Cookie Style
window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#eaf7f7",
      "text": "#5c7291"
    },
    "button": {
      "background": "#56cbdb",
      "text": "#ffffff"
    }
  },
  "theme": "classic",
  "position": "top-right"
})
// Chatra {literal}
$(function(){// Bind event on button click 
$('.live-chat-button').on('click', function() {// Open chat and focus input field
Chatra('openChat', true);});});
    (function(d, w, c) {
        w.ChatraID = 'SXfWTs6b85ZNknLsn';
        var s = d.createElement('script');
        w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
        };
        s.async = true;
        s.src = (d.location.protocol === 'https:' ? 'https:': 'http:')
        + '//call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
    })(document, window, 'Chatra');
// Chatra {literal}

}); // end (document).ready