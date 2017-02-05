var url = window.location.href;    

if (url.indexOf('?') > -1){
   url += ''
}else{
   url += '?O=OrderByReleaseDateDESC&PS=72#por-mostrador:analógico|por-mostrador:digital'
}
window.location.href = url;

var orderItens = location.search.split('PS' + '=')[0];
var currentItens = location.search.split('PS' + '=')[1];
var currentHash = window.location.hash;


$('select.dropdown').on('change', function() {
    alert($(this).val());
    
    if($('select.dropdown').val() === '1') {
        currentItens = 'PS=24';
        window.location.href = orderItens + currentItens + currentHash;
    };
    
    if($('select.dropdown').val() === '2') {
        currentItens = 'PS=48';
        window.location.href = orderItens + currentItens + currentHash;
    };
    
    if($('select.dropdown').val() === '3') {
        currentItens = 'PS=72';
        window.location.href = orderItens + currentItens + currentHash;
    };
    
    if($('select.dropdown').val() === '4') {
        currentItens = 'PS=96';
        window.location.href = orderItens + currentItens + currentHash;
    };
});


