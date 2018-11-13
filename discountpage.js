// Buttons and Table Codes - Do Not Copy!

function ShowSweet(title, type, width, html){ if (title == 'No Coupon') {title=null}
    swal({
        title: title,
        type: type,
        width: widthsweet,
        html: snotetext,
        showCloseButton: true,
        allowOutsideClick: false,
        confirmButtonText: 'Close',
        confirmButtonColor: '#8cd4f5'
    })
    
}

var snotetext = ''; var _0x89a3x11 = '<i class="fa fa-cart-plus fa-lg" aria-hidden="true"></i>';
    var _0x89a3x12 = '<i class="fa fa-hand-o-down fa-lg mif-ani-float mif-ani-fast" aria-hidden="true"></i>';
    var _0x89a3x13 = '',
        _0x89a3x14 = '',
        _0x89a3x15 = '',
        _0x89a3x16 = '',
        _0x89a3x17 = '',
        _0x89a3x18 = '',
        _0x89a3x19 = '  |  ',
        _0x89a3x1a = '<br />',
        _0x89a3x1b = '<button class="buysweetbutton">Buy Now!</button>', noCoupon = false;
        
        
var clipboard = new ClipboardJS('.copycb');

clipboard.on('success', function(e) {
    ShowSweet('Coupon copied to your clipboard!', 'success', widthsweet, snotetext);
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    e.clearSelection();
});

clipboard.on('error', function(e) {
    ShowSweet('Please Copy Coupon Manually!', 'info', widthsweet, snotetext);
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

function AlertCopyCustom(_0x89a3x5, _0x89a3x6, _0x89a3x7, _0x89a3x8, _0x89a3x9, _0x89a3xa, _0x89a3xb, _0x89a3xc, _0x89a3xd, _0x89a3xe, _0x89a3xf, _0x89a3x10) {
   // Reset Var
   
   _0x89a3x13 = '',
        _0x89a3x14 = '',
        _0x89a3x15 = '',
        _0x89a3x16 = '',
        _0x89a3x17 = '',
        _0x89a3x18 = ''; 
   
    if (top['location']['href']['indexOf']('megaleechers') < 0 && top['location']['href']['indexOf']('//shareware.deals') < 0) {
        _0x89a3x5 = 'Megaleechers.com'
    };
    
    if (_0x89a3x5['indexOf']('No Coupon') > -1) {noCoupon = true} else noCoupon = false;
    
    
    snotetext = '<span class="couponbox">' + _0x89a3x5 + '</span>' + _0x89a3x1a + _0x89a3x1a;
    if (noCoupon) {
        snotetext = snotetext + '<div class="couponnotice">' + _0x89a3x12 + ' <b>Your discount will be automatically applied at checkout</b> ' + _0x89a3x12 + '</div>' + _0x89a3x1a
    } else {
        var _0x89a3x1c;
        if (!!_0x89a3x6) {
            _0x89a3x1c = ' <b>Coupon Code will work <u class="mif-ani-flash mif-ani-slow">only</u> on the link(s) below</b> '
        } else {
            _0x89a3x1c = ' <b>Quick checkout link(s) for your convenience</b> '
        };
        snotetext = snotetext + '<div class="couponnotice">' + _0x89a3x12 + _0x89a3x1c + _0x89a3x12 + '</div>' + _0x89a3x1a
    };
    _0x89a3x13 = _0x89a3x18 + _0x89a3x7 + _0x89a3x19 + '<a rel="nofollow" class="simulate" onclick="secureredirect(\'' + _0x89a3x8 + '\');">' + _0x89a3x1b + '</a>';
    if (_0x89a3x9 != null && _0x89a3xa != null) {
        _0x89a3x14 = _0x89a3x1a + _0x89a3x18 + _0x89a3x9 + _0x89a3x19 + '<a rel="nofollow" class="simulate" onclick="secureredirect(\'' + _0x89a3xa + '\');">' + _0x89a3x1b + '</a>';
        if (_0x89a3xb != null && _0x89a3xc != null) {
            _0x89a3x15 = _0x89a3x1a + _0x89a3x18 + _0x89a3xb + _0x89a3x19 + '<a rel="nofollow" class="simulate" onclick="secureredirect(\'' + _0x89a3xc + '\');">' + _0x89a3x1b + '</a>';
            if (_0x89a3xd != null && _0x89a3xe != null) {
                _0x89a3x16 = _0x89a3x1a + _0x89a3x18 + _0x89a3xd + _0x89a3x19 + '<a rel="nofollow" class="simulate" onclick="secureredirect(\'' + _0x89a3xe + '\');">' + _0x89a3x1b + '</a>';
                if (_0x89a3xf != null && _0x89a3x10 != null) {
                    _0x89a3x17 = _0x89a3x1a + _0x89a3x18 + _0x89a3xf + _0x89a3x19 + '<a rel="nofollow" class="simulate" onclick="secureredirect(\'' + _0x89a3x10 + '\');">' + _0x89a3x1b + '</a>'
                }
            }
        }
    };
    snotetext = snotetext + _0x89a3x13 + _0x89a3x14 + _0x89a3x15 + _0x89a3x16 + _0x89a3x17;
    if (!ismobilerequest) {
        snotetext = snotetext + _0x89a3x1a + '<br /><div class="d-divider"></div><div class="minorheadsize"><i class="fa fa-question-circle-o" aria-hidden="true"></i> Need Help?!</div><span class="helpnotice">Contact a <a class="simulate" onclick="Chatra(\'openChat\', true)">Live Agent</a> or alternatively click on the live chat widget on the bottom-left corner. We will be happy to assist you!</span>'
    }
    
    if (noCoupon)
    {
        ShowSweet('No Coupon', 'success', widthsweet, snotetext);
    }
}


// Table
$(document).ready(function(){
         var distable = $('#searchtable').DataTable({
        "ajax": '../ajax.txt',
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
