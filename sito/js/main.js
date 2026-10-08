/* Menu mobile: nessun cookie, nessun dato salvato. */
(function () {
  var btn = document.querySelector(".menu-toggle");
  var wrap = document.getElementById("menu-principale");
  if (!btn || !wrap) return;
  function set(open) {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.querySelector(".menu-label").textContent = open ? "Chiudi" : "Menu";
    document.documentElement.classList.toggle("menu-aperto", open);
  }
  btn.addEventListener("click", function () {
    set(btn.getAttribute("aria-expanded") !== "true");
  });
  wrap.addEventListener("click", function (e) {
    if (e.target.closest("a")) set(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") { set(false); btn.focus(); }
  });
  window.matchMedia("(min-width:901px)").addEventListener("change", function (m) { if (m.matches) set(false); });
})();

/* Pannello "Qual è la sua situazione?" (solo home page). Nessun cookie, nessun dato salvato. */
(function () {
  var box = document.getElementById("risposta");
  if (!box) return;

  var casi = {
    atto: {
      t: "Ha ricevuto una notifica o una citazione",
      p: "Non la sottovaluti: gli atti giudiziari prevedono termini precisi. Conservi tutta la documentazione ricevuta e, prima di rendere dichiarazioni, si confronti con un avvocato. In consulenza verifichiamo la natura dell’atto e le azioni da intraprendere."
    },
    strada: {
      t: "Incidente o controllo alla guida",
      p: "Conservi il verbale, i referti medici e i documenti del veicolo. Dopo un controllo con esito positivo all’alcol o un incidente con feriti, sia il procedimento sia gli effetti sulla patente sono soggetti a termini: è opportuno attivarsi tempestivamente."
    },
    vittima: {
      t: "È persona offesa da un reato",
      p: "In caso di pericolo immediato chiami il 112. Per stalking e violenza è attivo il numero gratuito 1522, raggiungibile 24 ore su 24. Conservi messaggi, fotografie e referti. La querela è soggetta a termini di legge: è opportuno rivolgersi a un avvocato quanto prima."
    },
    minore: {
      t: "Una situazione che riguarda un minore",
      p: "Il procedimento penale minorile segue regole proprie, orientate alla tutela e al percorso educativo del ragazzo. Prima di qualsiasi dichiarazione è importante che il minore sia assistito da un difensore."
    },
    famiglia: {
      t: "Separazione, figli, mantenimento",
      p: "Separazione, affidamento dei figli e mantenimento richiedono una documentazione precisa: redditi, spese, situazione dei figli. Porti con sé quanto disponibile: in consulenza individueremo gli elementi mancanti e la soluzione più adatta."
    }
  };

  var chips = document.querySelectorAll(".chip");
  var t = document.getElementById("r-titolo");
  var p = document.getElementById("r-testo");

  function mostra(k, anima) {
    var c = casi[k];
    if (!c) return;
    t.textContent = c.t;
    p.textContent = c.p;
    chips.forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.k === k ? "true" : "false");
    });
    if (anima) {
      box.classList.remove("cambia");
      void box.offsetWidth;
      box.classList.add("cambia");
    }
  }

  chips.forEach(function (b) {
    b.addEventListener("click", function () { mostra(b.dataset.k, true); });
  });
  mostra("atto", false);
})();
