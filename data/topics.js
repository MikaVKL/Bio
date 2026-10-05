// Hier landen alle Lerninhalte. Pro Material ein Thema (topic) anhängen.
// summary: Liste von Abschnitten  {h: "Überschrift", p: ["Stichpunkt", ...]}
// cards:   Lernkarten             {q: "Frage", a: "Antwort"}
// quiz:    Multiple Choice        {q: "Frage", o: ["A","B","C","D"], a: 0 /* Index richtig */, e: "Erklärung"}
window.TOPICS = [
  {
    id: "beispiel-zelle",
    title: "Beispiel: Die Zelle (wird ersetzt)",
    summary: [
      { h: "Eukaryoten vs. Prokaryoten", p: [
        "Eukaryoten haben einen echten Zellkern, Prokaryoten nicht (DNA liegt frei im Cytoplasma).",
        "Eukaryoten besitzen Organellen mit Membran (z. B. Mitochondrien), Prokaryoten nicht."
      ]},
      { h: "Wichtige Organellen", p: [
        "Zellkern: enthält die DNA, Steuerzentrale.",
        "Mitochondrien: Zellatmung, ATP-Produktion.",
        "Ribosomen: Proteinbiosynthese.",
        "Chloroplasten (nur Pflanzen): Photosynthese."
      ]}
    ],
    cards: [
      { q: "Wo findet die Proteinbiosynthese statt?", a: "An den Ribosomen." },
      { q: "Welches Organell produziert ATP durch Zellatmung?", a: "Die Mitochondrien." }
    ],
    quiz: [
      { q: "Welche Zellen besitzen keinen echten Zellkern?", o: ["Pflanzenzellen","Tierzellen","Prokaryoten","Pilzzellen"], a: 2, e: "Prokaryoten (z. B. Bakterien) haben keinen Zellkern." }
    ]
  }
];
