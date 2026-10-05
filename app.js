(() => {
  const T = window.TOPICS || [];
  const $ = s => document.querySelector(s);
  const app = $("#app");
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // Fortschritt (localStorage, tolerant gegen Fehler)
  let P = { cards: {}, quiz: {} };
  try { P = Object.assign(P, JSON.parse(localStorage.getItem("bio-progress") || "{}")); } catch (e) {}
  const save = () => { try { localStorage.setItem("bio-progress", JSON.stringify(P)); } catch (e) {} };
  const key = (t, i) => t.id + "#" + i;

  let view = "home", topicSel = "all", examTimer;

  const items = (kind, sel) => T.filter(t => sel === "all" || t.id === sel)
    .flatMap(t => (t[kind] || []).map((x, i) => ({ ...x, t, k: key(t, i) })));

  const topicSelect = () => `<select id="ts"><option value="all">Alle Themen</option>${T.map(t =>
    `<option value="${esc(t.id)}"${t.id === topicSel ? " selected" : ""}>${esc(t.title)}</option>`).join("")}</select>`;
  const bindSelect = rerender => { $("#ts").onchange = e => { topicSel = e.target.value; rerender(); }; };

  function go(v) {
    view = v; clearInterval(examTimer);
    document.querySelectorAll("#nav button").forEach(b => b.classList.toggle("on", b.dataset.v === v));
    ({ home, summary, cards, quiz, exam })[v]();
  }
  document.querySelectorAll("#nav button").forEach(b => b.onclick = () => go(b.dataset.v));

  // ---------- Übersicht ----------
  function home() {
    const pct = (n, d) => d ? Math.round(100 * n / d) : 0;
    app.innerHTML = `<p class="mut">${T.length} Themen · Fortschritt wird auf diesem Gerät gespeichert.</p>
    <div class="grid">${T.map(t => {
      const c = t.cards || [], q = t.quiz || [];
      const cn = c.filter((_, i) => P.cards[key(t, i)] === 1).length;
      const qn = q.filter((_, i) => P.quiz[key(t, i)] === 1).length;
      const p = pct(cn + qn, c.length + q.length);
      return `<div class="card"><b>${esc(t.title)}</b>
        <div class="mut">${c.length} Karten · ${q.length} Fragen</div>
        <div class="bar"><i style="width:${p}%"></i></div><div class="mut">${p}% gekonnt</div>
        <div class="row" style="margin-top:8px"><button data-t="${esc(t.id)}" data-v="summary">Lesen</button><button data-t="${esc(t.id)}" data-v="cards">Üben</button></div></div>`;
    }).join("")}</div>
    <button id="reset" class="mut">Fortschritt zurücksetzen</button>`;
    app.querySelectorAll("button[data-t]").forEach(b => b.onclick = () => { topicSel = b.dataset.t; go(b.dataset.v); });
    $("#reset").onclick = () => {
      $("#reset").outerHTML = `<span class="row">Wirklich alles löschen? <button id="yes0" class="pri">Ja, löschen</button><button id="no0">Abbrechen</button></span>`;
      $("#yes0").onclick = () => { P = { cards: {}, quiz: {} }; save(); home(); };
      $("#no0").onclick = home;
    };
  }

  // ---------- Zusammenfassung ----------
  function summary() {
    const draw = () => {
      const q = ($("#q") || { value: "" }).value.toLowerCase();
      const ts = T.filter(t => topicSel === "all" || t.id === topicSel);
      $("#out").innerHTML = ts.map(t => {
        const secs = (t.summary || []).map(s => ({ ...s, hit: !q || (s.h + s.p.join(" ")).toLowerCase().includes(q) })).filter(s => s.hit);
        if (!secs.length) return "";
        return `<div class="card"><h2 style="margin-top:0">${esc(t.title)}</h2>${secs.map(s =>
          `<h3>${esc(s.h)}</h3><ul>${s.p.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`).join("")}</div>`;
      }).join("") || `<p class="mut">Nichts gefunden.</p>`;
    };
    app.innerHTML = `<div class="row">${topicSelect()}<input id="q" placeholder="Suchen…" style="flex:1"></div><div id="out" style="margin-top:12px"></div>`;
    bindSelect(draw); $("#q").oninput = draw; draw();
  }

  // ---------- Lernkarten ----------
  function cards() {
    let deck, i, shown, onlyOpen = false;
    const build = () => {
      deck = shuffle(items("cards", topicSel).filter(c => !onlyOpen || P.cards[c.k] !== 1));
      i = 0; shown = false; draw();
    };
    const draw = () => {
      const head = `<div class="row">${topicSelect()}<label class="mut"><input type="checkbox" id="oo" ${onlyOpen ? "checked" : ""}> nur offene</label></div>`;
      if (!deck.length) { app.innerHTML = head + `<p class="card">Keine Karten (mehr) – super! 🎉</p>`; return fin(); }
      if (i >= deck.length) { app.innerHTML = head + `<div class="card">Stapel durch.<br><button class="pri" id="again" style="margin-top:8px">Nochmal</button></div>`; $("#again").onclick = build; return fin(); }
      const c = deck[i];
      app.innerHTML = head + `<p class="mut">Karte ${i + 1}/${deck.length} · ${esc(c.t.title)}</p>
        <div class="card flip" id="f">${esc(shown ? c.a : c.q)}</div>
        ${shown ? `<div class="row"><button id="no">❌ Nochmal</button><button class="pri" id="yes">✅ Gewusst</button></div>` : `<div class="mut">Tippen zum Umdrehen</div>`}`;
      $("#f").onclick = () => { shown = true; draw(); };
      if (shown) { $("#yes").onclick = () => mark(1); $("#no").onclick = () => mark(0); }
      fin();
    };
    const fin = () => { bindSelect(build); $("#oo").onchange = e => { onlyOpen = e.target.checked; build(); }; };
    const mark = v => { P.cards[deck[i].k] = v; save(); i++; shown = false; draw(); };
    build();
  }

  // ---------- Quiz & Prüfung ----------
  function runQuiz(list, { exam = false, minutes = 0 } = {}) {
    let i = 0, score = 0, done = false, wrongs = [];
    const end = () => {
      clearInterval(examTimer);
      app.innerHTML = `<div class="card"><div class="big">${score}/${list.length}</div>
        <p>${Math.round(100 * score / list.length)}% richtig</p>
        ${wrongs.length ? `<h3>Zum Wiederholen</h3><ul>${wrongs.map(w => `<li>${esc(w.q)} → <b>${esc(w.o[w.a])}</b></li>`).join("")}</ul>` : "<p>Fehlerfrei! 🎉</p>"}
        <button class="pri" id="r" style="margin-top:10px">Nochmal</button></div>`;
      $("#r").onclick = () => exam ? go("exam") : quiz();
    };
    const draw = () => {
      if (i >= list.length) return end();
      const q = list[i], order = shuffle(q.o.map((t, idx) => idx));
      done = false;
      app.innerHTML = `<p class="mut">Frage ${i + 1}/${list.length} · ${esc(q.t.title)} <span id="tm" style="float:right"></span></p>
        <div class="card"><b>${esc(q.q)}</b><div id="os">${order.map(idx => `<button class="opt" data-i="${idx}">${esc(q.o[idx])}</button>`).join("")}</div><div id="ex"></div></div>`;
      app.querySelectorAll(".opt").forEach(b => b.onclick = () => {
        if (done) return; done = true;
        const ok = +b.dataset.i === q.a;
        if (ok) score++; else wrongs.push(q);
        P.quiz[q.k] = ok ? 1 : 0; save();
        app.querySelectorAll(".opt").forEach(x => { if (+x.dataset.i === q.a) x.classList.add("right"); });
        if (!ok) b.classList.add("wrong");
        $("#ex").innerHTML = (q.e && !exam ? `<div class="expl">${esc(q.e)}</div>` : "") + `<button class="pri" id="nx" style="margin-top:10px">${i + 1 < list.length ? "Weiter" : "Ergebnis"}</button>`;
        $("#nx").onclick = () => { i++; draw(); };
      });
    };
    if (minutes) {
      let left = minutes * 60;
      examTimer = setInterval(() => {
        left--; const el = $("#tm"); if (el) el.textContent = `⏱ ${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}`;
        if (left <= 0) end();
      }, 1000);
    }
    draw();
  }
  function quiz() {
    const start = (onlyWrong) => {
      let l = items("quiz", topicSel);
      if (onlyWrong) l = l.filter(q => P.quiz[q.k] !== 1);
      if (!l.length) { $("#out").innerHTML = `<p class="card">Keine Fragen verfügbar.</p>`; return; }
      runQuiz(shuffle(l));
    };
    app.innerHTML = `<div class="row">${topicSelect()}</div>
      <div class="row" style="margin-top:12px"><button class="pri" id="a">Alle Fragen</button><button id="w">Nur noch nicht gekonnte</button></div><div id="out"></div>`;
    bindSelect(quiz); $("#a").onclick = () => start(false); $("#w").onclick = () => start(true);
  }
  function exam_() {
    const all = items("quiz", "all");
    if (!all.length) return;
    const n = Math.min(+$("#n").value || 20, all.length), m = +$("#m").value || 20;
    runQuiz(shuffle(all).slice(0, n), { exam: true, minutes: m });
  }
  function exam() {
    app.innerHTML = `<div class="card"><h2 style="margin-top:0">Prüfungssimulation</h2>
      <p class="mut">Zufällige Fragen aus allen Themen, mit Zeitlimit, ohne Erklärung bis zum Ende.</p>
      <div class="row"><label>Fragen <input id="n" type="number" value="20" min="1" style="width:70px"></label>
      <label>Minuten <input id="m" type="number" value="20" min="1" style="width:70px"></label></div>
      <button class="pri" id="go" style="margin-top:10px">Starten</button></div>`;
    $("#go").onclick = exam_;
  }

  go("home");
})();
