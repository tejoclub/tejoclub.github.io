/* Tejo-Club Dossenheim e.V. - Sprachauswahl + Menue */
(function () {
  var LANGS = ['de', 'en', 'es'];
  var root = document.documentElement;

  function pick() {
    try {
      var s = localStorage.getItem('tcd-lang');
      if (LANGS.indexOf(s) > -1) return s;
    } catch (e) {}
    var q = new URLSearchParams(location.search).get('lang');
    if (LANGS.indexOf(q) > -1) return q;
    var n = (navigator.language || 'de').slice(0, 2).toLowerCase();
    return LANGS.indexOf(n) > -1 ? n : 'de';
  }

  function apply(l) {
    root.setAttribute('data-lang', l);
    root.setAttribute('lang', l);
    document.querySelectorAll('.langsw button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === l));
    });
    var ttl = document.querySelector('title[data-' + l + ']');
    if (ttl) document.title = ttl.getAttribute('data-' + l);
    try { localStorage.setItem('tcd-lang', l); } catch (e) {}
  }

  apply(pick());

  document.addEventListener('click', function (e) {
    var b = e.target.closest('.langsw button');
    if (b) { apply(b.dataset.lang); return; }
    var k = e.target.closest('.burger');
    if (k) {
      var nav = document.querySelector('nav.main');
      nav.classList.toggle('open');
      k.setAttribute('aria-expanded', nav.classList.contains('open'));
      return;
    }
    if (!e.target.closest('nav.main')) {
      var n2 = document.querySelector('nav.main.open');
      if (n2) n2.classList.remove('open');
    }
  });
})();
