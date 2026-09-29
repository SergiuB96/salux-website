/* Harta operatorilor de salubrizare licentiati ANRSC, pe judete.
   Date: data/operatori.json. Contur judete: assets/romania-judete.svg (geo-spatial.org, CC BY-SA 4.0). */
(function () {
  var root = document.getElementById('harta-operatori');
  if (!root) return;

  var VERSION = '20260929';
  var mapEl = root.querySelector('.ho-map');
  var selectEl = root.querySelector('.ho-select');
  var panelEl = root.querySelector('.ho-panel');
  var sourceEl = root.parentNode.querySelector('.ho-source');
  var LEVELS = [0, 1, 3, 6, 11]; // praguri pentru nuante: 0, 1-2, 3-5, 6-10, 11+

  var data = null;
  var paths = {};
  var names = {};

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function levelFor(count) {
    var lvl = 0;
    for (var i = 0; i < LEVELS.length; i++) if (count >= LEVELS[i]) lvl = i;
    return lvl;
  }

  function operatorsLabel(n) {
    if (n === 1) return '1 operator licențiat';
    var r = n % 100;
    return n + ((r === 0 && n > 0) || r >= 20 ? ' de' : '') + ' operatori licențiați';
  }

  function list(code) {
    return (data && data.counties && data.counties[code]) || [];
  }

  function renderSummary() {
    panelEl.innerHTML = '';
    var total = 0, covered = 0;
    Object.keys(data.counties).forEach(function (c) {
      var n = data.counties[c].length;
      total += n;
      if (n) covered++;
    });
    panelEl.appendChild(el('p', 'ho-kicker', 'România'));
    panelEl.appendChild(el('h3', 'ho-title', operatorsLabel(total)));
    panelEl.appendChild(el('p', 'ho-hint', 'Cu sediul în ' + covered + ' din 42 de județe. Selectați un județ pe hartă sau din listă pentru a vedea operatorii.'));
  }

  function renderCounty(code) {
    var ops = list(code);
    panelEl.innerHTML = '';
    panelEl.appendChild(el('p', 'ho-kicker', 'Județul'));
    panelEl.appendChild(el('h3', 'ho-title', names[code] || code));
    panelEl.appendChild(el('p', 'ho-count', operatorsLabel(ops.length)));
    if (!ops.length) {
      panelEl.appendChild(el('p', 'ho-hint', 'Lista ANRSC nu include operatori licențiați cu sediul în acest județ. Serviciul poate fi prestat și de operatori din alte județe.'));
    } else {
      var ul = el('ul', 'ho-list');
      ops.forEach(function (op) {
        var li = el('li');
        li.appendChild(el('span', 'ho-op', op.name));
        var meta = [op.city, op.license ? (op.city ? 'licența ' : 'Licența ') + op.license : '', op.valid_until ? 'valabilă până la ' + op.valid_until : '']
          .filter(Boolean).join(', ');
        if (meta) li.appendChild(el('span', 'ho-meta', meta));
        ul.appendChild(li);
      });
      panelEl.appendChild(ul);
    }
    var cta = el('a', 'btn btn-green ho-cta', 'Programați o demonstrație');
    cta.href = '/contact';
    panelEl.appendChild(cta);
  }

  function select(code, fromSelect) {
    Object.keys(paths).forEach(function (c) {
      var on = c === code;
      paths[c].classList.toggle('is-active', on);
      paths[c].setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    if (code && paths[code]) paths[code].parentNode.appendChild(paths[code]); // conturul activ deasupra
    if (!fromSelect) selectEl.value = code || '';
    if (code) renderCounty(code); else renderSummary();
  }

  function renderError() {
    panelEl.innerHTML = '';
    panelEl.appendChild(el('h3', 'ho-title', 'Datele nu au putut fi încărcate'));
    panelEl.appendChild(el('p', 'ho-hint', 'Reîncărcați pagina. Lista oficială este disponibilă și pe site-ul ANRSC.'));
  }

  function setup(svgText) {
    mapEl.innerHTML = svgText;
    var svg = mapEl.querySelector('svg');
    svg.setAttribute('focusable', 'false');
    var codes = [];
    svg.querySelectorAll('path[data-code]').forEach(function (p) {
      var code = p.getAttribute('data-code');
      var n = list(code).length;
      paths[code] = p;
      names[code] = p.getAttribute('data-name');
      codes.push(code);
      p.classList.add('lvl' + levelFor(n));
      p.setAttribute('tabindex', '0');
      p.setAttribute('role', 'button');
      p.setAttribute('aria-pressed', 'false');
      p.setAttribute('aria-label', names[code] + ': ' + operatorsLabel(n));
      p.querySelector('title').textContent = names[code] + ' - ' + operatorsLabel(n);
      p.addEventListener('click', function () { select(code); });
      p.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(code); }
      });
    });

    codes.sort(function (a, b) { return names[a].localeCompare(names[b], 'ro'); });
    codes.forEach(function (code) {
      var o = el('option', null, names[code] + ' (' + list(code).length + ')');
      o.value = code;
      selectEl.appendChild(o);
    });
    selectEl.disabled = false;
    selectEl.addEventListener('change', function () { select(selectEl.value, true); });

    if (sourceEl && data.source) {
      sourceEl.innerHTML = '';
      sourceEl.appendChild(document.createTextNode('Sursa: '));
      var a = el('a', null, data.source);
      a.href = data.source_url;
      a.rel = 'noopener';
      a.target = '_blank';
      sourceEl.appendChild(a);
      sourceEl.appendChild(document.createTextNode(
        (data.source_date && data.source.indexOf(data.source_date) < 0 ? ', ' + data.source_date : '') +
        '. Operatori grupați după județul sediului. Limite administrative: geo-spatial.org (CC BY-SA 4.0).'));
    }
    root.classList.remove('is-loading');
    renderSummary();
  }

  Promise.all([
    fetch('assets/romania-judete.svg?v=' + VERSION).then(function (r) { if (!r.ok) throw r; return r.text(); }),
    fetch('data/operatori.json?v=' + VERSION).then(function (r) { if (!r.ok) throw r; return r.json(); })
  ]).then(function (res) {
    data = res[1];
    setup(res[0]);
  }).catch(function () {
    root.classList.remove('is-loading');
    root.classList.add('is-error');
    renderError();
  });
})();
