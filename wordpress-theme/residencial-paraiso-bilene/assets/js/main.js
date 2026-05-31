(function(){
    var header = document.getElementById('site-header');
    if ( header ) {
        var toggle = header.querySelector('.menu-toggle');
        if ( toggle ) {
            toggle.addEventListener('click', function(){
                var open = header.classList.toggle('menu-open');
                toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            });
        }
    }
    document.querySelectorAll('.main-nav a').forEach(function(a){
        a.addEventListener('click', function(){ header && header.classList.remove('menu-open'); });
    });
})();

function rpbWaSearch(e){
    e.preventDefault();
    var ci = document.getElementById('rpb-checkin').value;
    var co = document.getElementById('rpb-checkout').value;
    var tp = document.getElementById('rpb-type').value;
    var msg = 'Olá! Gostaria de reservar:\nTipologia: ' + tp + '\nCheck-in: ' + ci + '\nCheck-out: ' + co;
    var base = e.target.getAttribute('action').split('?')[0];
    window.open(base + '?text=' + encodeURIComponent(msg), '_blank');
    return false;
}