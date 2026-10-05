// Hier landen alle Lerninhalte. Pro Material ein Thema (topic) anhängen.
// summary: Liste von Abschnitten  {h: "Überschrift", p: ["Stichpunkt", ...]}
// cards:   Lernkarten             {q: "Frage", a: "Antwort"}
// quiz:    Multiple Choice        {q: "Frage", o: ["A","B","C","D"], a: 0 /* Index richtig */, e: "Erklärung"}
window.TOPICS = [
  {
    id: "neuron-aufbau",
    title: "Neurobiologie 1: Aufbau von Neuronen",
    summary: [
      { h: "Aufgabe und Besonderheit", p: [
        "Neurone (Nervenzellen) sind spezialisierte Zellen für Reizaufnahme sowie Weitergabe und Verarbeitung elektrischer Impulse (Erregungsleitung).",
        "Wegen dieser Funktion weicht ihr Aufbau stark von anderen Körperzellen ab (Basiskonzept: Struktur und Funktion, englisch „form follows function“)."
      ]},
      { h: "Grundaufbau eines Neurons", p: [
        "Zellkörper (Soma): enthält Zellkern und Organellen; Stoffwechsel und Proteinbiosynthese.",
        "Dendriten (gr. dendron = Baum): verzweigt wie Äste, nehmen elektrische Impulse auf und leiten sie zum Zellkörper.",
        "Axonhügel: Sammelpunkt, an dem alle ankommenden Signale verrechnet werden; Übergang vom Zellkörper ins Axon.",
        "Axon: lange ableitende Struktur. Wird am Axonhügel ein Schwellenwert erreicht, wird die Erregung über das Axon weitergeleitet.",
        "Meist nur ein Axon pro Neuron; Länge von wenigen µm bis zu ca. 1 m (motorische Neurone der Beinmuskulatur).",
        "Axonende: verzweigt sich in feine Axon-Endigungen mit Endknöpfchen."
      ]},
      { h: "Synapsen", p: [
        "Endknöpfchen bilden an der Membran der nachfolgenden Zelle Kontaktstellen: die Synapsen.",
        "Ist die nachgeschaltete Zelle eine Muskelzelle: neuromuskuläre Synapse (= motorische Endplatte).",
        "An der Synapse wird die Information an die nächste Zelle weitergegeben."
      ]},
      { h: "Gliazellen und Myelin", p: [
        "Gliazellen (gr. glia = Kleber) umgeben jedes Neuron: Hilfszellen, die Neurone mit Nährstoffen versorgen, Abfallstoffe abtransportieren und helfen, Botenstoffe (Transmitter) zu regenerieren.",
        "Schwann’sche Zellen (nur bei Wirbeltieren): wickeln sich in regelmäßigen Abständen um das Axon und bilden die Myelinschicht.",
        "Myelin: fettreich, isoliert das Neuron elektrisch und beeinflusst die Signalweiterleitung.",
        "Ranvier’sche Schnürringe (nach Louis-Antoine Ranvier): Stellen zwischen zwei Schwann-Zellen, an denen das Axon freiliegt."
      ]},
      { h: "Was ist ein Nerv?", p: [
        "Ein Nerv ist ein Bündel aus Axonen, von einer Bindegewebshülle zusammengefasst (wie Kabel in einer Plastikummantelung).",
        "Zellkörper und Dendriten der zugehörigen Neurone liegen häufig im Rückenmark.",
        "Nerven sind deshalb auch ohne Mikroskop gut erkennbar."
      ]},
      { h: "Aufgabe 1: Warum viele Dendriten?", p: [
        "Auf Zellkörper und Dendriten enden Tausende Endknöpfchen anderer Neurone (Abb. 4).",
        "Viele Dendriten = große Oberfläche = Platz für sehr viele Synapsen, also viele Eingangssignale gleichzeitig.",
        "Der Axonhügel kann so Informationen vieler Zellen verrechnen (Struktur-Funktion-Zusammenhang)."
      ]},
      { h: "Aufgabe 2: Tabelle zu Abb. 5 (Motoneuron)", p: [
        "1 Dendriten: nehmen Impulse auf, leiten sie zum Zellkörper.",
        "2 Zellkörper (Soma): Stoffwechsel, Proteinbiosynthese.",
        "3 Zellkern (Nucleus): enthält die DNA.",
        "4 Axonhügel: verrechnet Signale, Entstehung der Erregung bei Schwellenwert.",
        "5 Myelinscheide (Schwann’sche Zelle): elektrische Isolation, beeinflusst Signalweiterleitung.",
        "6 Axon: leitet die Erregung vom Zellkörper weg.",
        "7 Ranvier’scher Schnürring: freiliegendes Axon zwischen zwei Schwann-Zellen.",
        "8 Synapse (Endknöpfchen) zu einem anderen Neuron: Informationsweitergabe.",
        "9 Axonendigungen: Verzweigung zur Kontaktaufnahme mit der Zielzelle.",
        "10 Motorische Endplatte (neuromuskuläre Synapse): Übertragung auf die Muskelfaser.",
        "Hinweis: Die Zuordnung von 5/6 und 8/9/10 ist aus der Abbildung abgeleitet. Vergleiche mit deiner Lösung aus dem Unterricht."
      ]},
      { h: "Starteraufgabe: Zuordnung a–g (Modellzeichnung)", p: [
        "a Dendriten, b Zellkern, c Axonhügel, d Gliazelle (Myelinhülle), e Axon, f Schnürring, g Endknöpfchen.",
        "Soma = Zellkörper, Neurit = Axon mit Hüllen, Endverzweigung = Axonende.",
        "Hinweis: Zuordnung aus der Abbildung abgeleitet, besonders d/e. Mit der Unterrichtslösung abgleichen."
      ]}
    ],
    cards: [
      { q: "Wofür sind Neurone zuständig?", a: "Reizaufnahme sowie Weitergabe und Verarbeitung elektrischer Impulse (Erregungsleitung)." },
      { q: "Soma", a: "Zellkörper: enthält Zellkern und Organellen, Stoffwechsel und Proteinbiosynthese." },
      { q: "Dendriten: Funktion?", a: "Nehmen elektrische Impulse auf und leiten sie zum Zellkörper. Verzweigt wie Äste (gr. dendron = Baum)." },
      { q: "Axonhügel", a: "Sammelpunkt, an dem alle ankommenden Signale verrechnet werden. Übergang vom Zellkörper ins Axon. Bei Erreichen des Schwellenwerts wird die Erregung weitergeleitet." },
      { q: "Axon: Funktion und Länge?", a: "Leitet die Erregung weg vom Zellkörper. Wenige µm bis ca. 1 m lang. Meist nur eines pro Neuron." },
      { q: "Endknöpfchen", a: "Verdickungen der Axon-Endigungen, bilden mit der nachfolgenden Zelle die Synapsen." },
      { q: "Synapse", a: "Kontaktstelle zwischen Endknöpfchen und der Membran der nachgeschalteten Zelle." },
      { q: "Neuromuskuläre Synapse", a: "Synapse zwischen Neuron und Muskelzelle (= motorische Endplatte)." },
      { q: "Gliazellen: Aufgaben?", a: "Hilfszellen: Nährstoffversorgung, Abtransport von Abfallstoffen, Regeneration von Botenstoffen (Transmittern)." },
      { q: "Schwann’sche Zellen", a: "Gliazellen nur bei Wirbeltieren. Wickeln sich um das Axon und bilden die Myelinschicht." },
      { q: "Myelin: Eigenschaft und Wirkung?", a: "Fettreich, isoliert das Axon elektrisch und beeinflusst die Signalweiterleitung." },
      { q: "Ranvier’sche Schnürringe", a: "Stellen zwischen zwei Schwann-Zellen, an denen das Axon freiliegt." },
      { q: "Was ist ein Nerv?", a: "Ein Bündel aus Axonen in einer Bindegewebshülle. Die Zellkörper liegen häufig im Rückenmark." },
      { q: "Warum haben Neurone oft sehr viele Dendriten?", a: "Große Oberfläche für Tausende Synapsen anderer Neurone, so können viele Signale gleichzeitig aufgenommen und am Axonhügel verrechnet werden." },
      { q: "Basiskonzept „Struktur und Funktion“ (engl. form follows function)", a: "Der Bau eines Bauteils (z. B. verzweigte Dendriten) ist an seine Aufgabe angepasst." },
      { q: "Starteraufgabe: Welche Beschreibung gehört zu „Schnürring“?", a: "Nicht isolierter Teil des Axons, dient der Erregungsweiterleitung." },
      { q: "Starteraufgabe: Welche Beschreibung gehört zu „Endknöpfchen“?", a: "Teil der Synapse, Verbindung zur nächsten Nervenzelle oder zum Muskel." },
      { q: "Starteraufgabe: Welche Beschreibung gehört zu „Axon“?", a: "Langer (bis zu 1 m), dünner Zellfortsatz, leitet die Erregung weiter." },
      { q: "Starteraufgabe: Welche Beschreibung gehört zu „Axonhügel“?", a: "Hier entsteht die zelleigene Erregung." }
    ],
    quiz: [
      { q: "Wo werden die ankommenden Signale eines Neurons verrechnet?", o: ["Am Axonende","Am Axonhügel","Am Ranvier’schen Schnürring","In der Myelinscheide"], a: 1, e: "Der Axonhügel ist der Sammelpunkt. Wird dort der Schwellenwert erreicht, wird die Erregung über das Axon weitergeleitet." },
      { q: "Welche Struktur nimmt elektrische Impulse auf und leitet sie zum Zellkörper?", o: ["Axon","Endknöpfchen","Dendriten","Schwann’sche Zelle"], a: 2, e: "Dendriten sind verzweigte Fortsätze, die Impulse aufnehmen." },
      { q: "Was bilden die Schwann’schen Zellen?", o: ["Synapsen","Die Myelinschicht um das Axon","Die Dendriten","Den Zellkern"], a: 1, e: "Sie wickeln sich um das Axon und bilden die fettreiche Myelinschicht." },
      { q: "Welche Aussage über Myelin ist richtig?", o: ["Es ist eiweißreich und leitet Strom besonders gut","Es ist fettreich und isoliert das Neuron elektrisch","Es befindet sich in den Dendriten","Es bildet die Synapse"], a: 1, e: "Myelin ist fettreich, isoliert elektrisch und beeinflusst die Signalweiterleitung." },
      { q: "Wie nennt man die freiliegenden Stellen des Axons zwischen zwei Schwann-Zellen?", o: ["Axonhügel","Ranvier’sche Schnürringe","Endknöpfchen","Dendriten"], a: 1, e: "Benannt nach Louis-Antoine Ranvier." },
      { q: "Wie nennt man die Synapse zwischen einem Neuron und einer Muskelzelle?", o: ["Axonhügel-Synapse","Gliazelle","Neuromuskuläre Synapse (motorische Endplatte)","Ranvier-Synapse"], a: 2, e: "Ist die Zielzelle eine Muskelzelle, spricht man von neuromuskulärer Synapse bzw. motorischer Endplatte." },
      { q: "Welche Aufgabe haben Gliazellen NICHT?", o: ["Nährstoffversorgung der Neurone","Abtransport von Abfallstoffen","Regeneration von Botenstoffen","Verrechnung der Signale am Axonhügel"], a: 3, e: "Die Verrechnung übernimmt das Neuron selbst am Axonhügel." },
      { q: "Warum besitzen Neurone häufig sehr viele Dendriten?", o: ["Damit sie schwerer werden","Für große Oberfläche, um viele Synapsen anderer Neurone aufzunehmen","Um Myelin zu speichern","Um Nährstoffe zu produzieren"], a: 1, e: "Viele Dendriten = viele Kontaktstellen = viele gleichzeitige Eingangssignale (Struktur und Funktion)." },
      { q: "Was ist ein Nerv?", o: ["Eine einzelne Nervenzelle","Ein Bündel aus Axonen mit Bindegewebshülle","Ein Bündel aus Zellkörpern","Eine Synapse"], a: 1, e: "Nerven sind Axonbündel. Die Zellkörper liegen häufig im Rückenmark." },
      { q: "Wie lang kann ein Axon beim Menschen maximal werden?", o: ["ca. 1 mm","ca. 10 cm","bis ca. 1 m","über 10 m"], a: 2, e: "Motorische Neurone der Beinmuskulatur können bis zu einem Meter lang sein." },
      { q: "Schwann’sche Zellen kommen vor bei …", o: ["allen Tieren","nur Wirbeltieren","nur Säugetieren","nur Pflanzen"], a: 1, e: "Dieser Gliazelltyp existiert nur bei Wirbeltieren." },
      { q: "Wo findet im Neuron hauptsächlich Stoffwechsel und Proteinbiosynthese statt?", o: ["Im Axon","Im Zellkörper (Soma)","In der Myelinscheide","Im Endknöpfchen"], a: 1, e: "Das Soma enthält Zellkern und Organellen." }
    ]
  },
  {
    id: "ruhepotential",
    title: "Neurobiologie 2: Ruhepotential – Messungen & Ionen",
    summary: [
      { h: "Galvani (18. Jh.) – Aufgabe 1", p: [
        "Versuche an Froschmuskeln mit noch vorhandenen Nervenfasern: Der Muskel kontrahiert, wenn unterschiedliche Ladungen Nerv und Muskel berühren.",
        "Erkenntnis: Elektrische Reize lösen über den Nerv eine Muskelkontraktion aus. Nerven stehen also mit elektrischen Vorgängen in Verbindung (Galvani sprach von „tierischer Elektrizität“).",
        "Nerv und Muskel sind funktionell verbunden: Der Nerv leitet die Erregung zum Muskel."
      ]},
      { h: "Messung am Riesenaxon (Abb. 1 und 2) – Aufgabe 2", p: [
        "Aufbau: Glasmikroelektrode (Spitze < 1 µm, Silberelektrode in KCl-Lösung), Bezugselektrode, Oszilloskop, Axon in isotonischer Salzlösung.",
        "Abb. 1: Beide Elektroden außen auf der Zelle: 0 mV. Es gibt keinen Spannungsunterschied zwischen zwei Punkten außerhalb der Zelle.",
        "Abb. 2: Eine Elektrode im Zellinneren, eine außen: −70 mV. Zwischen Innen- und Außenseite der Membran besteht eine Spannung, das Innere ist gegenüber außen negativ.",
        "Dieser Wert der ruhenden Nervenzelle heißt Ruhepotential (Ruhemembranpotential).",
        "Folgerung: Die Ladungsverteilung an der Membran ist ungleich. Die Spannung liegt an der Membran, nicht im Außenmedium."
      ]},
      { h: "Ionenkonzentrationen (mmol/l) – Aufgabe 3", p: [
        "Na⁺: innen 50, außen 440 (außen viel höher).",
        "K⁺: innen 400, außen 20 (innen viel höher).",
        "Cl⁻: innen 108, außen 560 (außen viel höher).",
        "A⁻ (organische Proteinanionen): innen 460, außen 0 (nur innen).",
        "Vergleich: Na⁺ und Cl⁻ sind außen angereichert, K⁺ und die großen Anionen A⁻ innen.",
        "Skizze: Neuron zeichnen, innen und außen die vier Ionen mit Werten eintragen (z. B. Pfeile: Na⁺ außen groß, K⁺ innen groß)."
      ]},
      { h: "Vermutungen zum Potentialaufbau – Aufgabe 4", p: [
        "Die Membran ist selektiv durchlässig (semipermeabel): Für K⁺ gut durchlässig, für die großen Proteinanionen A⁻ undurchlässig.",
        "K⁺ diffundiert dem Konzentrationsgefälle folgend von innen nach außen. Die negativen A⁻ bleiben zurück, das Innere wird negativ.",
        "Der entstehende elektrische Gradient zieht K⁺ wieder nach innen, bis sich ein Gleichgewicht einstellt: Ruhepotential.",
        "Na⁺ strömt nur wenig ein. Ionenpumpen könnten die Konzentrationsunterschiede dauerhaft aufrechterhalten (Vermutung, Vorgriff auf Unterricht).",
        "Hinweis: Das sind Vermutungen im Sinn der Aufgabenstellung. Vergleiche mit dem Unterrichtsergebnis."
      ]}
    ],
    cards: [
      { q: "Was beobachtete Galvani?", a: "Ein Froschmuskel mit Nervenfasern kontrahiert, wenn unterschiedliche Ladungen Nerv und Muskel berühren." },
      { q: "Welche Erkenntnis ergibt sich aus Galvanis Versuch?", a: "Elektrische Reize lösen über den Nerv eine Muskelkontraktion aus, Nerven hängen mit elektrischen Vorgängen zusammen („tierische Elektrizität“)." },
      { q: "Abb. 1: beide Elektroden außen. Messwert und Deutung?", a: "0 mV. Außen gibt es keinen Spannungsunterschied." },
      { q: "Abb. 2: eine Elektrode innen, eine außen. Messwert und Deutung?", a: "−70 mV. An der Membran besteht eine Spannung, innen ist negativ gegenüber außen (Ruhepotential)." },
      { q: "Ruhepotential", a: "Spannung zwischen Innen- und Außenseite der Membran einer nicht erregten Nervenzelle (hier ca. −70 mV)." },
      { q: "Na⁺-Konzentration innen / außen (mmol/l)?", a: "Innen 50, außen 440." },
      { q: "K⁺-Konzentration innen / außen (mmol/l)?", a: "Innen 400, außen 20." },
      { q: "Cl⁻-Konzentration innen / außen (mmol/l)?", a: "Innen 108, außen 560." },
      { q: "Proteinanionen (A⁻) innen / außen (mmol/l)?", a: "Innen 460, außen 0." },
      { q: "Welche Ionen sind außen angereichert, welche innen?", a: "Außen: Na⁺ und Cl⁻. Innen: K⁺ und A⁻." },
      { q: "Wie könnte das Ruhepotential entstehen?", a: "Membran selektiv durchlässig: K⁺ diffundiert nach außen, negative A⁻ können nicht folgen, das Innere wird negativ." },
      { q: "Warum kann A⁻ nicht aus der Zelle diffundieren?", a: "Es sind große organische Proteinanionen, die die Membran nicht passieren." }
    ],
    quiz: [
      { q: "Wie hoch ist die gemessene Spannung, wenn beide Elektroden außen auf der Nervenzelle liegen?", o: ["−70 mV","+70 mV","0 mV","−140 mV"], a: 2, e: "Zwischen zwei Punkten außerhalb der Zelle besteht kein Spannungsunterschied." },
      { q: "Wie hoch ist die Spannung bei einer Elektrode innen und einer außen?", o: ["0 mV","−70 mV","+70 mV","+440 mV"], a: 1, e: "Das ist das Ruhepotential: innen negativ gegenüber außen." },
      { q: "Welche Ionen sind in der Nervenzelle in höherer Konzentration als außen?", o: ["Na⁺ und Cl⁻","K⁺ und A⁻","Nur Na⁺","Nur Cl⁻"], a: 1, e: "K⁺ (400 vs. 20) und A⁻ (460 vs. 0) sind innen angereichert." },
      { q: "Welche Ionen sind außerhalb der Zelle angereichert?", o: ["K⁺ und A⁻","Na⁺ und Cl⁻","Nur K⁺","Nur A⁻"], a: 1, e: "Na⁺ (440 vs. 50) und Cl⁻ (560 vs. 108)." },
      { q: "Welche Ionensorte kommt nur innerhalb der Zelle vor?", o: ["Na⁺","K⁺","Cl⁻","Organische Proteinanionen (A⁻)"], a: 3, e: "A⁻ innen 460 mmol/l, außen 0." },
      { q: "Was erkannte Galvani aus seinem Froschschenkel-Versuch?", o: ["Muskeln leiten keinen Strom","Elektrische Reize über den Nerv lösen eine Muskelkontraktion aus","Frösche erzeugen Licht","Nerven bestehen aus Metall"], a: 1, e: "Unterschiedliche Ladungen an Nerv und Muskel führten zur Kontraktion." },
      { q: "Warum wird das Zellinnere beim Ruhepotential negativ?", o: ["K⁺ diffundiert nach außen, A⁻ bleiben zurück","Na⁺ strömt massenhaft ein","Cl⁻ wird aktiv eingepumpt","Die Membran ist völlig undurchlässig"], a: 0, e: "Die K⁺-Ionen folgen dem Konzentrationsgefälle nach außen, die großen Anionen können die Membran nicht passieren." },
      { q: "Was ist ein Ruhepotential?", o: ["Spannung an der Membran einer nicht erregten Nervenzelle","Spannung zwischen zwei Elektroden außen","Die Erregung beim Muskel","Der Schwellenwert am Axonhügel"], a: 0, e: "Es beschreibt den Ruhezustand der Nervenzelle (hier ca. −70 mV)." },
      { q: "Wozu dient die Bezugselektrode im Versuch?", o: ["Sie stimuliert das Axon","Sie liefert den Vergleichspunkt außerhalb der Zelle für die Spannungsmessung","Sie färbt die Zelle","Sie kühlt das Axon"], a: 1, e: "Gemessen wird die Spannung zwischen Glasmikroelektrode und Bezugselektrode." },
      { q: "Wie groß ist die Spitze der Glasmikroelektrode?", o: ["Ø < 1 µm","Ø ca. 1 mm","Ø ca. 1 cm","Ø ca. 1 m"], a: 0, e: "Sehr dünn, damit sie die Zelle (Riesenaxon) kaum schädigt." }
    ]
  }
];
