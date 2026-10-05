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
  },
  {
    id: "membran-ruhepotential",
    title: "Neurobiologie 3: Biomembran & Ruhepotential im Detail",
    summary: [
      { h: "Starteraufgabe Biomembran (Ziffern 1–7)", p: [
        "Aufbau der Biomembran: Phospholipid-Doppelschicht (hydrophile Köpfe außen, hydrophobe Fettsäureschwänze innen) mit eingelagerten Proteinen.",
        "1 Transmembranprotein (integrales Protein, durchspannt die Membran).",
        "2 Fettsäureschwänze der Phospholipide (hydrophober Teil der Doppelschicht).",
        "3 Membranprotein mit Zuckerkette (Glykoprotein).",
        "4 Kohlenhydratkette auf der Außenseite (Glykokalyx-Anteil, z. B. an Glykolipid oder Glykoprotein).",
        "5 Hydrophiler Kopf der Phospholipide (Phosphatgruppe).",
        "6 Eingelagertes bzw. peripheres Protein (innen).",
        "7 Kanalprotein (hier Kaliumkanal): K⁺ strömt entlang des Konzentrationsgefälles nach außen.",
        "Hinweis: Zuordnung aus der Abbildung abgeleitet, vor allem 1, 4, 6. Mit der Unterrichtslösung abgleichen."
      ]},
      { h: "1. Potential und Potenzialdifferenz", p: [
        "Im Ruhezustand: Zellinneres negativ, Zelläußeres positiv. Potenzialdifferenz −70 mV = Ruhepotential.",
        "Ursache: Ionen sind auf beiden Seiten der Membran unterschiedlich konzentriert.",
        "Definition (Vorschlag): Das Ruhepotential ist die elektrische Spannung (ca. −70 mV) an der Membran einer nicht erregten Nervenzelle, die durch ungleiche Ionenverteilung und selektive Durchlässigkeit der Membran entsteht."
      ]},
      { h: "2. Wichtige Ionen (mit Hydrathülle)", p: [
        "Anorganische/organische Anionen A⁻ (z. B. Phosphat PO₄³⁻): inklusive Hydrathülle die größten Ionen.",
        "Na⁺: bindet viele Wassermoleküle, zweitgrößtes Ion.",
        "K⁺: mit Hydrathülle etwas kleiner als Na⁺.",
        "Cl⁻: mit Hydrathülle kaum größer als K⁺."
      ]},
      { h: "3. Ionenverteilung (Säugetierneuron)", p: [
        "Na⁺: außen 145, innen 15 mmol/l, Verhältnis außen:innen ≈ 10:1.",
        "K⁺: außen 4, innen 140 mmol/l, Verhältnis ≈ 1:35.",
        "Cl⁻: außen 120, innen 10–15 mmol/l, Verhältnis ≈ 10:1.",
        "A⁻: außen sehr gering (< 5), innen ≈ 150 mmol/l, außen kaum vorhanden.",
        "Na⁺ außen trägt zur positiven Außenladung bei, A⁻ innen zur negativen Innenladung.",
        "Hinweis: Die Zahlen unterscheiden sich vom Riesenaxon-Arbeitsblatt (Na⁺ 440/50, K⁺ 20/400). Tendenz ist gleich. Im Zweifel nach den Werten der Aufgabe richten."
      ]},
      { h: "4. Die Axonmembran: selektiv permeabel", p: [
        "Kalium-Kanäle: Durchlässigkeit relativ hoch, es gibt offene Kanäle.",
        "Natrium-Kanäle: im Ruhezustand fast vollständig geschlossen.",
        "Chlorid-Kanäle: Chlorid diffundiert durch spezielle Kanäle, Permeabilität deutlich unter der für Kalium.",
        "Natrium-Kalium-Pumpe: aktives Transportprotein, transportiert unter Verbrauch von 1 ATP 3 Na⁺ nach außen und 2 K⁺ nach innen."
      ]},
      { h: "5. Ionen in Bewegung", p: [
        "K⁺ diffundiert aus der Zelle (innen höher konzentriert). Das Innere wird negativer, das Äußere positiver. Dafür reichen schon wenige K⁺-Ionen.",
        "Ein elektrischer Gradient baut sich auf, er wirkt dem Konzentrationsgradienten entgegen und zieht K⁺ zurück. Gleichgewicht zwischen chemischem und elektrischem Gradienten.",
        "Na⁺ würde einströmen (außen höher, innen negativ), kann es aber kaum, da die Kanäle im Ruhezustand geschlossen sind.",
        "Cl⁻ tendiert zum Einstrom, wird aber durch die negative Innenladung teilweise zurückgehalten."
      ]},
      { h: "6. Aufrechterhaltende Prozesse", p: [
        "Ohne Gegenmaßnahme würde K⁺ immer weiter einströmen und Na⁺ ins Innere diffundieren: Das Ruhepotential bräche zusammen.",
        "Die Natrium-Kalium-Pumpe (Na⁺/K⁺-ATPase) hält das Ungleichgewicht von Na⁺ und K⁺ aufrecht, rund um die Uhr.",
        "Etwa 50–70 % des ATP im Gehirn werden allein dadurch verbraucht."
      ]}
    ],
    cards: [
      { q: "Aufbau der Biomembran in einem Satz?", a: "Phospholipid-Doppelschicht (hydrophile Köpfe außen, hydrophobe Schwänze innen) mit eingelagerten Proteinen." },
      { q: "Wie hoch ist das Ruhepotential, und wie ist die Ladung verteilt?", a: "Ca. −70 mV. Innen negativ, außen positiv." },
      { q: "Warum entsteht eine Potenzialdifferenz an der Membran?", a: "Ionen sind innen und außen unterschiedlich konzentriert und die Membran ist selektiv permeabel." },
      { q: "Größenreihenfolge der Ionen mit Hydrathülle", a: "A⁻ (größte) > Na⁺ > K⁺ > Cl⁻ (kaum größer als K⁺)." },
      { q: "Na⁺: Konzentration außen/innen und Verhältnis (Säuger)", a: "145 / 15 mmol/l, ca. 10:1." },
      { q: "K⁺: Konzentration außen/innen und Verhältnis (Säuger)", a: "4 / 140 mmol/l, ca. 1:35." },
      { q: "Cl⁻: Konzentration außen/innen und Verhältnis (Säuger)", a: "120 / 10–15 mmol/l, ca. 10:1." },
      { q: "Was bedeutet „selektiv permeabel“?", a: "Die Membran lässt verschiedene Ionen unterschiedlich gut durch (Ionenkanäle, Pumpen)." },
      { q: "Kalium-Kanäle im Ruhezustand?", a: "Teilweise offen, hohe Durchlässigkeit für K⁺." },
      { q: "Natrium-Kanäle im Ruhezustand?", a: "Fast vollständig geschlossen." },
      { q: "Natrium-Kalium-Pumpe: Aufgabe und Bilanz?", a: "Aktiver Transport unter ATP-Verbrauch: 3 Na⁺ nach außen, 2 K⁺ nach innen. Hält die Ionenungleichverteilung aufrecht." },
      { q: "Wie entsteht das Ruhepotential im Kern?", a: "K⁺ diffundiert nach außen (Konzentrationsgradient), Anionen bleiben zurück. Der elektrische Gradient zieht K⁺ zurück: Gleichgewicht." },
      { q: "Warum bricht das Ruhepotential nicht zusammen?", a: "Die Na⁺/K⁺-Pumpe stellt die Konzentrationsunterschiede ständig wieder her." },
      { q: "Wie viel ATP im Gehirn verbraucht die Na⁺/K⁺-Pumpe?", a: "Etwa 50–70 %." }
    ],
    quiz: [
      { q: "Wie viele Na⁺ und K⁺ transportiert die Na⁺/K⁺-Pumpe pro ATP?", o: ["3 K⁺ raus, 2 Na⁺ rein","3 Na⁺ raus, 2 K⁺ rein","2 Na⁺ raus, 3 K⁺ rein","1 Na⁺ raus, 1 K⁺ rein"], a: 1, e: "Pro ATP: 3 Na⁺ nach außen, 2 K⁺ nach innen." },
      { q: "Welche Kanäle sind im Ruhezustand überwiegend geöffnet?", o: ["Natriumkanäle","Kaliumkanäle","Calciumkanäle","Alle Kanäle"], a: 1, e: "Kalium hat relativ hohe Durchlässigkeit, Natriumkanäle sind fast geschlossen." },
      { q: "In welche Richtung diffundiert K⁺ im Ruhezustand?", o: ["Aus der Zelle heraus","In die Zelle hinein","Gar nicht","Nur durch die Pumpe"], a: 0, e: "K⁺ ist innen höher konzentriert und diffundiert nach außen." },
      { q: "Was zieht K⁺ wieder in die Zelle zurück?", o: ["Der elektrische Gradient","Die Hydrathülle","Die Schwerkraft","Der Natrium-Kanal"], a: 0, e: "Das negative Innere wirkt dem Konzentrationsgradienten entgegen." },
      { q: "Warum strömt Na⁺ im Ruhezustand kaum ein?", o: ["Es gibt innen zu viel Na⁺","Die Natriumkanäle sind fast geschlossen","Na⁺ ist zu klein","Die Membran ist undurchlässig für alles"], a: 1, e: "Obwohl Konzentrations- und elektrischer Gradient nach innen zeigen, sind die Kanäle zu." },
      { q: "Welches Ionenverhältnis außen:innen passt zu K⁺?", o: ["10:1","1:35","1:1","35:1"], a: 1, e: "K⁺ ist innen ca. 35-mal höher konzentriert." },
      { q: "Was gilt für A⁻-Ionen?", o: ["Hauptsächlich außen","Gleich verteilt","Fast ausschließlich innen","Nur in Gliazellen"], a: 2, e: "Sie tragen zur negativen Innenladung bei und können die Membran nicht verlassen." },
      { q: "Welche Aussage zum Energieverbrauch stimmt?", o: ["Die Pumpe braucht kein ATP","Die Pumpe verbraucht 50–70 % des ATP im Gehirn","Die Pumpe läuft nur bei Erregung","ATP wird nur für Kanäle gebraucht"], a: 1, e: "Die Na⁺/K⁺-ATPase läuft rund um die Uhr." },
      { q: "Welches Ion ist inklusive Hydrathülle am größten?", o: ["A⁻ (Anionen)","Cl⁻","K⁺","Na⁺"], a: 0, e: "Größenreihenfolge: A⁻ > Na⁺ > K⁺ ≈ Cl⁻." },
      { q: "Woraus besteht die Grundstruktur der Biomembran?", o: ["Proteinschicht","Phospholipid-Doppelschicht","Zellulose","Einfache Lipidschicht"], a: 1, e: "Hydrophile Köpfe außen, hydrophobe Schwänze innen, dazwischen eingelagerte Proteine." }
    ]
  },
  {
    id: "potenziale-modell",
    title: "Neurobiologie 4: Chemisches & elektrisches Potenzial (Modell)",
    summary: [
      { h: "Messung von Potenzialen (Buch S. 14)", p: [
        "Nordischer Kalmar (Loligo forbesi): Modellorganismus, Axondurchmesser ca. 1 mm, 100- bis 1000-mal dicker als bei Säugern.",
        "An diesen Riesenaxonen wurden die Vorgänge an Nervenzellen erstmals untersucht. Heute auch an lebenden, viel kleineren Zellen.",
        "Methode: Nervenzelle im Außenmedium (entspricht Flüssigkeit außerhalb der Zelle), O₂ und Nährstoffe halten sie am Leben. Zwei Mikroelektroden, Signalverstärker, Monitor (mV über Zeit).",
        "Eine Elektrode im Zellplasma, die zweite im Außenmedium: Die Ladungsdifferenz zwischen Zellinnerem und Außenmedium wird verstärkt und dargestellt."
      ]},
      { h: "Spannung, Ladung und Strom", p: [
        "An allen Nervenzellen hat die Außenseite der Membran eine andere elektrische Ladung als die Innenseite.",
        "Spannung (Einheit Volt, V) = Ladungsdifferenz durch ungleiche Verteilung von Ladungsträgern (Protonen, Elektronen, Ionen).",
        "In Zellen sind Ionen in Plasma und Außenmedium die wichtigsten Ladungsträger.",
        "Strom: gerichtete Bewegung von Ladungsträgern. Stromstärke (Einheit Ampere, A) = Ladungsträger pro Zeit durch den Leiterquerschnitt. Die Spannung treibt den Strom an."
      ]},
      { h: "Chemisches Potenzial", p: [
        "Brownsche Teilchenbewegung: Ionen und Wassermoleküle bewegen sich zufällig. Folge: Diffusion.",
        "Netto-Ionenfluss geht vom Ort höherer zum Ort niedrigerer Konzentration, weil statistisch mehr Teilchen so wechseln.",
        "Der Konzentrationsunterschied ist die Triebkraft der Diffusion: chemisches Potenzial.",
        "Je geringer der Konzentrationsunterschied, desto kleiner das chemische Potenzial. Bei gleicher Konzentration: kein chemisches Potenzial mehr.",
        "Modell: Gefäß mit Filter in zwei Kammern. Links Ionenlösung (gleich viele Kationen und Anionen), rechts destilliertes Wasser. Filter für beide Ionenarten durchlässig. Ergebnis: Ausgleich auf beide Seiten (z. B. 8:8), Ladungsdifferenz bleibt 0."
      ]},
      { h: "Elektrisches Potenzial im Modell", p: [
        "Filter wird durch eine selektiv permeable Membran ersetzt: nur für Kationen durchlässig, Anionen bleiben links (16 : 0 am Start).",
        "Kationen strömen entlang des chemischen Potenzials nach rechts. Links bleibt eine negative Überschussladung, rechts entsteht eine positive.",
        "Das erzeugt ein elektrisches Potenzial (Ladungsunterschied), das Kationen wieder nach links zieht, also dem chemischen Potenzial entgegenwirkt.",
        "Modellschritte (Kationen/Anionen links): 16:0 → 15:1 (Ladungsdifferenz 2) → 14:2 (Differenz 4) → 12:4 (Differenz 8).",
        "Mit jedem Kation, das nach rechts wechselt, sinkt das chemische Potenzial und steigt das elektrische Potenzial.",
        "Der Kationenstrom nach rechts wird dadurch immer geringer."
      ]},
      { h: "Gleichgewicht und Membranpotenzial", p: [
        "Bei 4 Kationen rechts (links 12 : 4) haben chemisches und elektrisches Potenzial den gleichen Wert (Betrag 8).",
        "Dann strömen gleich viele Kationen in beide Richtungen, die Konzentration ändert sich nicht mehr: dynamisches Gleichgewicht.",
        "Das elektrische Potenzial im Gleichgewichtszustand heißt Gleichgewichtspotenzial.",
        "Entsteht es an einer selektiv permeablen Membran, heißt es auch Membranpotenzial.",
        "Übertragung: In der Nervenzelle ist K⁺ das durchlässige Kation, die großen Anionen A⁻ bleiben innen. Dadurch entsteht das Ruhepotential.",
        "Hinweis: Die Zahlenschritte im Text/Bild sind teils schwer lesbar (Foto). Zentral ist die Logik, nicht die exakten Zahlen."
      ]}
    ],
    cards: [
      { q: "Warum wird der Kalmar in der Neurobiologie untersucht?", a: "Riesenaxone (Ø ca. 1 mm, 100–1000-mal dicker als bei Säugern) ermöglichten die ersten Messungen." },
      { q: "Wie misst man ein Potenzial an der Nervenzelle?", a: "Zwei Mikroelektroden: eine im Zellplasma, eine im Außenmedium, verbunden mit Verstärker und Monitor." },
      { q: "Spannung: Definition und Einheit", a: "Ladungsdifferenz durch ungleiche Verteilung von Ladungsträgern. Einheit Volt (V)." },
      { q: "Stromstärke: Definition und Einheit", a: "Anzahl der Ladungsträger pro Zeit durch einen Leiterquerschnitt. Einheit Ampere (A)." },
      { q: "Was sind die wichtigsten Ladungsträger in Zellen?", a: "Ionen (in Zellplasma und Außenmedium)." },
      { q: "Chemisches Potenzial", a: "Triebkraft der Diffusion durch einen Konzentrationsunterschied." },
      { q: "Wann ist das chemische Potenzial null?", a: "Wenn die Konzentrationen beiderseits gleich sind." },
      { q: "Warum findet Diffusion statt?", a: "Brownsche Teilchenbewegung: Zufallsbewegung, statistisch wechseln mehr Teilchen von hoher zu niedriger Konzentration." },
      { q: "Elektrisches Potenzial", a: "Triebkraft für die Bewegung von Ladungsträgern (Ionen). Unterschiedliche Ladungen ziehen sich an, Kationen wandern Richtung negativer Ladung." },
      { q: "Wie entsteht im Modell das elektrische Potenzial?", a: "Nur Kationen passieren die Membran. Links bleibt negative Überschussladung, rechts wird positiv." },
      { q: "Wie verhalten sich chemisches und elektrisches Potenzial zueinander?", a: "Sie wirken gegeneinander. Mit jedem Kation, das wechselt, sinkt das chemische und steigt das elektrische Potenzial." },
      { q: "Gleichgewichtspotenzial", a: "Elektrisches Potenzial im Gleichgewicht (chemisches = elektrisches Potenzial, Betrag gleich). Es fließen gleich viele Kationen in beide Richtungen." },
      { q: "Membranpotenzial", a: "Anderer Name für das Gleichgewichtspotenzial an einer selektiv permeablen Membran." },
      { q: "Dynamisches Gleichgewicht", a: "Teilchen bewegen sich weiter in beide Richtungen, aber die Konzentration ändert sich netto nicht mehr." }
    ],
    quiz: [
      { q: "Was ist die Triebkraft der Diffusion?", o: ["Elektrisches Potenzial","Chemisches Potenzial (Konzentrationsunterschied)","Ladungsdifferenz","Die Schwerkraft"], a: 1, e: "Das chemische Potenzial ist die Triebkraft aus dem Konzentrationsunterschied." },
      { q: "Was geschieht im Modell mit einem für beide Ionenarten durchlässigen Filter langfristig?", o: ["Alle Ionen bleiben links","Ausgleich auf beide Kammern, Ladungsdifferenz 0","Anionen wandern nach rechts, Kationen bleiben","Es entsteht ein elektrisches Potenzial"], a: 1, e: "Beide Ionenarten gleichen sich aus, kein Ladungsunterschied." },
      { q: "Was ändert sich, wenn die Membran nur für Kationen durchlässig ist?", o: ["Nichts","Es entsteht ein Ladungsunterschied (elektrisches Potenzial)","Die Anionen wandern auch","Das chemische Potenzial steigt"], a: 1, e: "Die Anionen bleiben zurück, die Kationen wandern, das erzeugt Ladungsdifferenz." },
      { q: "Wohin zieht das elektrische Potenzial im Modell die Kationen?", o: ["Nach rechts (zur positiven Seite)","Nach links (zur negativen Seite)","Gar nicht","In die Membran"], a: 1, e: "Kationen werden von der negativen Seite angezogen." },
      { q: "Wann herrscht Gleichgewicht?", o: ["Wenn die Konzentrationen gleich sind","Wenn chemisches und elektrisches Potenzial gleich groß sind und entgegengesetzt wirken","Wenn kein Ion mehr die Membran passiert","Wenn die Ladungsdifferenz 0 ist"], a: 1, e: "Es fließen gleich viele Kationen in beide Richtungen: dynamisches Gleichgewicht." },
      { q: "Wie heißt das elektrische Potenzial im Gleichgewichtszustand?", o: ["Aktionspotenzial","Gleichgewichtspotenzial (Membranpotenzial)","Schwellenwert","Ruhestrom"], a: 1, e: "An einer selektiv permeablen Membran auch Membranpotenzial genannt." },
      { q: "In welcher Einheit wird Spannung gemessen?", o: ["Ampere","Volt","Watt","Joule"], a: 1, e: "Spannung in Volt (V), Stromstärke in Ampere (A)." },
      { q: "Was ist ein elektrischer Strom?", o: ["Ruhende Ladung","Gerichtete Bewegung von Ladungsträgern","Konzentrationsunterschied","Brownsche Bewegung"], a: 1, e: "Die Spannung treibt die gerichtete Bewegung an." },
      { q: "Wie dick ist ein Kalmar-Riesenaxon etwa?", o: ["1 µm","ca. 1 mm","1 cm","10 cm"], a: 1, e: "100- bis 1000-mal dicker als Säugeraxone." },
      { q: "Was ändert sich mit jedem Kation, das im Modell die Kammer wechselt?", o: ["Beide Potenziale steigen","Chemisches Potenzial sinkt, elektrisches steigt","Beide sinken","Nichts"], a: 1, e: "Konzentrationsunterschied schrumpft, Ladungsunterschied wächst." }
    ]
  },
  {
    id: "aktionspotential",
    title: "Neurobiologie 5: Ablauf des Aktionspotentials",
    summary: [
      { h: "Versuchsaufbau und Grafik (Aufgabe 1, Lösungsblatt a–j)", p: [
        "Eine tierische Nervenzelle wird gereizt, die Membranspannung am Axon wird mit zwei Elektroden registriert.",
        "a Neuron, b Messgerät/Verstärker, c Darstellung auf dem Oszilloskop.",
        "d Axonaußenseite, e Axoninnenseite, f links Ruhepotential (RP), rechts Aktionspotential (AP) – Ladungsverteilung an der Membran.",
        "g Membranpotential in mV (y-Achse), h Zeit in ms (x-Achse).",
        "i Ruhepotential (ca. −70 mV), j Schwelle (ca. −50 mV)."
      ]},
      { h: "Die Phasen A–E (Aufgabe 2, k–o)", p: [
        "A (k) Ruhepotential: Geöffnete „normale“ K⁺-Kanäle erzeugen das Ruhepotential, K⁺ folgt dem Konzentrationsgradienten nach außen. Spannungsabhängige Kanäle sind zu.",
        "B (l) Depolarisation bis zur Schwelle: Der Reiz verändert die Spannung und öffnet einige Na⁺-Kanäle. Na⁺ strömt entlang des Konzentrations- und Ladungsgradienten ein.",
        "C (m) Aufstrich und Overshoot: Weitere spannungsabhängige Na⁺-Kanäle öffnen (positive Rückkopplung), schneller Aufstrich zum Spitzenpotential, Na⁺ diffundiert weiter nach innen (Umpolung, Overshoot > 0 mV).",
        "D (n) Repolarisation: Die Na⁺-Kanäle werden durch die Spannungsänderung geschlossen (inaktiviert), zeitverzögert öffnen spannungsabhängige K⁺-Kanäle, K⁺ strömt nach außen. Evtl. Hyperpolarisation (Nachpotential unter −70 mV).",
        "E (o) Rückkehr zum Ruhepotential: Alle spannungsabhängigen Kanäle sind wieder geschlossen.",
        "Wiederherstellung der Ionenverteilung danach durch die Na⁺/K⁺-Pumpe (nur wenige Ionen haben die Seiten gewechselt)."
      ]},
      { h: "Refraktärphase (Aufgabe 3)", p: [
        "Laufen die Phasen A–E ab, können neu ankommende Reize nicht beantwortet werden: Die spannungsabhängigen Kanäle sind verändert und können nicht erneut geöffnet werden.",
        "Absolute Refraktärphase: gar keine neue Erregung möglich (Na⁺-Kanäle inaktiviert).",
        "Relative Refraktärphase: nur mit stärkerem Reiz auslösbar (Hyperpolarisation, K⁺-Kanäle noch offen).",
        "Bedeutung: Das AP läuft nur in eine Richtung (Rückwärtslauf ausgeschlossen), und die Frequenz der APs ist begrenzt."
      ]},
      { h: "Alles-oder-Nichts und Schwelle", p: [
        "Erst wenn die Depolarisation die Schwelle erreicht, kommt es zum AP. Ein AP hat immer dieselbe Amplitude („Alles-oder-Nichts-Gesetz“). Die Reizstärke steckt in der Frequenz.",
        "Aufgabe 4: Am Axonhügel ist die Dichte spannungsabhängiger Na⁺-Kanäle am höchsten. Dort ist die Schwelle zum Auslösen eines APs am geringsten, das AP entsteht dort zuerst."
      ]},
      { h: "Basiskonzept Kompartimentierung", p: [
        "Der Aufbau der Ionengradienten an der Membran der Nervenzelle lässt sich dem Basiskonzept Kompartimentierung zuordnen (Membran trennt Reaktions- bzw. Ionenräume).",
        "Hinweis: Die Hinweise wie „Lösungen k–o“ stammen vom Lösungsblatt zu Arbeitsblatt S. 15 (Foto). Das Lösungsblatt enthält nur Stichworte."
      ]}
    ],
    cards: [
      { q: "Ruhepotential und Schwellenwert (Zahlen)?", a: "Ruhepotential ca. −70 mV, Schwelle ca. −50 mV." },
      { q: "Phase A: Ruhepotential – was geschieht?", a: "Offene K⁺-Kanäle: K⁺ strömt nach außen, spannungsabhängige Na⁺-/K⁺-Kanäle sind geschlossen." },
      { q: "Phase B: Depolarisation bis zur Schwelle", a: "Reiz öffnet einige Na⁺-Kanäle, Na⁺ strömt ein (Konzentrations- und Ladungsgradient)." },
      { q: "Phase C: Aufstrich / Overshoot", a: "Weitere spannungsabhängige Na⁺-Kanäle öffnen, schneller Na⁺-Einstrom bis zum Spitzenpotential (positiv)." },
      { q: "Phase D: Repolarisation", a: "Na⁺-Kanäle schließen/inaktivieren, zeitverzögert öffnen spannungsabhängige K⁺-Kanäle, K⁺ strömt aus. Evtl. Hyperpolarisation." },
      { q: "Phase E: Rückkehr zum Ruhepotential", a: "Alle spannungsabhängigen Kanäle sind geschlossen, Ruhepotential stellt sich wieder ein." },
      { q: "Depolarisation", a: "Das Membranpotential wird weniger negativ (Na⁺-Einstrom)." },
      { q: "Repolarisation", a: "Rückkehr zum negativen Ruhepotential durch K⁺-Ausstrom." },
      { q: "Hyperpolarisation", a: "Das Membranpotential wird kurzzeitig negativer als das Ruhepotential (K⁺-Kanäle noch offen)." },
      { q: "Overshoot", a: "Positive Spitze über 0 mV, weil weiter Na⁺ einströmt (Umpolung der Membran)." },
      { q: "Warum können in den Phasen A–E keine neuen Reize beantwortet werden?", a: "Spannungsabhängige Kanäle sind verändert (Na⁺-Kanäle inaktiviert) und können nicht erneut öffnen: Refraktärphase." },
      { q: "Absolute vs. relative Refraktärphase", a: "Absolut: gar keine Erregung möglich. Relativ: nur mit stärkerem Reiz auslösbar." },
      { q: "Warum ist am Axonhügel die Schwelle am geringsten?", a: "Dort ist die Dichte spannungsabhängiger Na⁺-Kanäle am höchsten." },
      { q: "Alles-oder-Nichts-Gesetz", a: "Ein AP wird entweder ganz (immer gleiche Amplitude) oder gar nicht ausgelöst. Reizstärke wird über die Frequenz codiert." },
      { q: "Welches Basiskonzept passt zu den Ionengradienten an der Membran?", a: "Kompartimentierung." }
    ],
    quiz: [
      { q: "Welches Ion strömt in Phase B/C ein?", o: ["K⁺","Na⁺","Cl⁻","A⁻"], a: 1, e: "Spannungsabhängige Na⁺-Kanäle öffnen, Na⁺ strömt ein." },
      { q: "Was geschieht in der Repolarisationsphase (D)?", o: ["Na⁺-Kanäle öffnen weiter","Na⁺-Kanäle schließen, K⁺-Kanäle öffnen, K⁺ strömt aus","Cl⁻ strömt aus","Die Pumpe stoppt"], a: 1, e: "Na⁺-Kanäle inaktiviert, zeitverzögert öffnen spannungsabhängige K⁺-Kanäle." },
      { q: "Was löst die Öffnung der weiteren spannungsabhängigen Na⁺-Kanäle aus?", o: ["Das Erreichen der Schwelle (Spannungsänderung)","Ein Ligand","ATP","Sinkende K⁺-Konzentration"], a: 0, e: "Ab der Schwelle öffnen sich viele Na⁺-Kanäle (positive Rückkopplung)." },
      { q: "Wie heißt der Zustand kurz nach dem AP, in dem die Spannung unter −70 mV liegt?", o: ["Overshoot","Hyperpolarisation","Depolarisation","Schwelle"], a: 1, e: "K⁺-Kanäle sind noch offen, das Potential ist kurzzeitig negativer als im Ruhezustand." },
      { q: "Warum läuft das AP nur in eine Richtung?", o: ["Weil das Axon nur eine Richtung hat","Wegen der Refraktärphase hinter dem AP","Wegen der Myelinscheide allein","Wegen der Pumpe"], a: 1, e: "Hinter dem AP sind die Na⁺-Kanäle inaktiviert, ein Rückwärtslauf ist ausgeschlossen." },
      { q: "Wo ist die Schwelle zum Auslösen eines APs am niedrigsten?", o: ["Am Axonende","Am Axonhügel","An den Dendriten","Im Zellkern"], a: 1, e: "Höchste Dichte spannungssensitiver Na⁺-Kanäle am Axonhügel." },
      { q: "Was besagt das Alles-oder-Nichts-Gesetz?", o: ["Die Amplitude des APs hängt linear von der Reizstärke ab","Ein AP hat immer dieselbe Amplitude oder entsteht gar nicht","APs sind immer negativ","Reize unter −70 mV lösen ein AP aus"], a: 1, e: "Die Reizstärke wird über die Frequenz der APs codiert." },
      { q: "Wie hoch ist ungefähr die Schwelle?", o: ["−90 mV","−70 mV","−50 mV","+30 mV"], a: 2, e: "Ruhepotential −70 mV, Schwelle ca. −50 mV." },
      { q: "Was erzeugt das Ruhepotential laut Lösungsblatt?", o: ["Geöffnete „normale“ K⁺-Kanäle","Offene Na⁺-Kanäle","Ca²⁺-Einstrom","Das Oszilloskop"], a: 0, e: "K⁺ folgt dem Konzentrationsgradienten nach außen." },
      { q: "Welches Basiskonzept passt zum Aufbau von Ionengradienten an der Membran?", o: ["Energieumwandlung","Kompartimentierung","Steuerung und Regelung","Variation"], a: 1, e: "Die Membran trennt Räume mit unterschiedlicher Ionenzusammensetzung." },
      { q: "Was zeigt die x-Achse im Oszilloskopbild?", o: ["Membranpotential in mV","Zeit in ms","Ionenkonzentration","Stromstärke"], a: 1, e: "y-Achse: Membranpotential (mV), x-Achse: Zeit (ms)." }
    ]
  },
  {
    id: "saltatorisch",
    title: "Neurobiologie 6: Saltatorische Erregungsleitung",
    summary: [
      { h: "Aufbau einer markhaltigen Faser", p: [
        "Das Axon ist abschnittsweise von Myelinscheiden (Schwann-Zellen) isoliert, dazwischen liegen die Ranvier’schen Schnürringe (ca. 2 µm lang, Internodien ca. 2000 µm).",
        "Nur an den Schnürringen liegen Axonmembran und spannungsabhängige Na⁺-Kanäle frei, dort kann ein AP entstehen."
      ]},
      { h: "Aufgabe 1: Räumlich-zeitlicher Verlauf (Abb. 1) – Vorschlag", p: [
        "Die Leitungszeit für ein AP steigt in kleinen Stufen an: An den Schnürringen (Na⁺-Ioneneinstrom) steigt die Zeit steil, entlang der Myelinscheide (2000 µm) nur flach.",
        "Deutung: Im Bereich der Myelinscheide wird die Erregung schnell passiv (elektrisch, Ladungsverschiebung im Axoninneren) weitergeleitet, an den Schnürringen wird das AP neu aufgebaut (kostet Zeit).",
        "Die Erregung „springt“ von Schnürring zu Schnürring: saltatorische Erregungsleitung (lat. saltare = springen)."
      ]},
      { h: "Aufgabe 2: Ionenbewegungen (Abb. 2) – Vorschlag", p: [
        "① Am Schnürring A öffnen spannungsabhängige Na⁺-Kanäle, Na⁺ strömt ein (Depolarisation). Ladungsausgleich im Axon zum nächsten Schnürring B.",
        "② Bei B wird die Schwelle erreicht, Na⁺-Kanäle öffnen. In A öffnen K⁺-Kanäle, K⁺ strömt aus (Repolarisation).",
        "③ In C beginnt Na⁺-Einstrom, in B strömt K⁺ aus, A ist refraktär: Die Erregung läuft nur vorwärts.",
        "Konzentrationen: Innen sinkt kurz K⁺ und steigt Na⁺. Die Veränderung ist nur minimal. Die Na⁺/K⁺-Pumpe stellt die Ausgangskonzentrationen wieder her."
      ]},
      { h: "Aufgabe 3: Modell (Dominoeffekt, Abb. 3) – Vorschlag", p: [
        "Verdeutlicht: Eine Auslenkung löst die nächste aus (Weiterleitung als Kettenreaktion), Energie steckt in jedem Element (Dominostein = Schnürring), die Brücke steht für die isolierte Strecke.",
        "Modellkritik: Dominosteine fallen nur einmal und müssen von Hand wieder aufgestellt werden, das Neuron regeneriert selbstständig (Pumpe, Kanäle). Modell zeigt keine Ionen, Kanäle, Schwelle oder elektrische Ladung. Kein Alles-oder-Nichts-Verhalten bei unterschiedlicher Stoßstärke."
      ]},
      { h: "Aufgabe 4: Was erhöht die Geschwindigkeit der saltatorischen Leitung? – Vorschlag", p: [
        "Myelinscheide: elektrische Isolation, Ladung geht nicht über die Membran verloren.",
        "Sprünge zwischen Schnürringen statt kontinuierlicher Erregung der ganzen Membran: weniger Orte, an denen Kanäle öffnen müssen.",
        "Größerer Axondurchmesser: geringerer Längswiderstand im Axon.",
        "Zusätzlich: Energiesparen, weil weniger Ionen die Membran passieren und weniger Pumparbeit nötig ist.",
        "Marklose Axone: kontinuierliche Erregungsleitung, deutlich langsamer.",
        "Hinweis: Dieses Blatt hat kein Lösungsblatt. Die Antworten sind mein Vorschlag. Vergleiche sie mit dem Unterrichtsergebnis."
      ]}
    ],
    cards: [
      { q: "Saltatorische Erregungsleitung", a: "Sprunghafte Erregungsleitung in markhaltigen Axonen: Das AP entsteht nur an den Ranvier’schen Schnürringen." },
      { q: "Warum „saltatorisch“?", a: "Lateinisch saltare = springen. Die Erregung springt von Schnürring zu Schnürring." },
      { q: "Wo liegen die spannungsabhängigen Na⁺-Kanäle bei markhaltigen Axonen?", a: "Vor allem an den Ranvier’schen Schnürringen (nicht isolierte Stellen)." },
      { q: "Was passiert zwischen zwei Schnürringen?", a: "Passive, schnelle elektrische Weiterleitung (Ladungsverschiebung im Axoninneren) durch die isolierte Strecke." },
      { q: "Funktion der Myelinscheide für die Leitgeschwindigkeit?", a: "Isoliert elektrisch, verhindert Ladungsverlust und erhöht die Geschwindigkeit." },
      { q: "Welche Faktoren erhöhen die Geschwindigkeit der Erregungsleitung?", a: "Myelinisierung (Sprünge), größerer Axondurchmesser (geringerer Längswiderstand)." },
      { q: "Erregungsleitung in marklosen Axonen?", a: "Kontinuierlich entlang der ganzen Membran, deutlich langsamer." },
      { q: "Warum läuft die Erregung nur in eine Richtung weiter?", a: "Hinter dem AP ist der Schnürring refraktär (Na⁺-Kanäle inaktiviert)." },
      { q: "Wie lang sind Schnürring und Internodium (Abb. 1)?", a: "Schnürring ca. 2 µm, Myelinabschnitt ca. 2000 µm." },
      { q: "Wo steigt die Leitungszeit im Diagramm steil an?", a: "An den Schnürringen (Na⁺-Einstrom, AP wird neu aufgebaut)." },
      { q: "Warum spart die saltatorische Leitung Energie?", a: "Nur an den Schnürringen strömen Ionen, also muss die Na⁺/K⁺-Pumpe weniger arbeiten." },
      { q: "Modell Dominosteine: Kritik?", a: "Fällt nur einmal, keine Regeneration, keine Ionen/Kanäle/Schwelle, kein Alles-oder-Nichts." }
    ],
    quiz: [
      { q: "Wo wird bei der saltatorischen Erregungsleitung das AP neu gebildet?", o: ["Entlang der gesamten Myelinscheide","An den Ranvier’schen Schnürringen","Nur am Axonhügel","Nur an den Endknöpfchen"], a: 1, e: "Nur dort sind spannungsabhängige Kanäle zugänglich." },
      { q: "Was bedeutet „saltatorisch“?", o: ["Kontinuierlich","Springend","Rückwärts","Chemisch"], a: 1, e: "Von lat. saltare = springen." },
      { q: "Welche Aussage zur Myelinscheide ist richtig?", o: ["Sie erzeugt das AP","Sie isoliert und erhöht die Geschwindigkeit","Sie bremst die Leitung","Sie enthält die meisten Na⁺-Kanäle"], a: 1, e: "Isolation verhindert Ladungsverlust." },
      { q: "In welchen Axonen ist die Erregungsleitung kontinuierlich?", o: ["Markhaltigen","Marklosen","Beiden","Keinen"], a: 1, e: "Marklose Axone leiten entlang der ganzen Membran, langsamer." },
      { q: "Wie wirkt sich ein größerer Axondurchmesser aus?", o: ["Schneller (geringerer Längswiderstand)","Langsamer","Gar nicht","Nur in Gliazellen"], a: 0, e: "Ein größerer Querschnitt senkt den Widerstand im Axon." },
      { q: "Warum geht die Erregung nicht rückwärts?", o: ["Refraktärphase","Zu wenig ATP","Kein Myelin","Schwelle zu hoch"], a: 0, e: "Hinter dem AP sind Na⁺-Kanäle inaktiviert." },
      { q: "Was zeigt der Anstieg der Leitungszeit an den Schnürringen in Abb. 1?", o: ["Das AP wird dort neu aufgebaut und das kostet Zeit","Das Axon ist dort dicker","Dort ist die Myelinscheide","Dort fließt kein Strom"], a: 0, e: "Zwischen den Schnürringen läuft die Weiterleitung schnell." },
      { q: "Warum spart saltatorische Leitung Energie?", o: ["Es strömen weniger Ionen über die Membran","Es wird kein ATP gebraucht","Die Axone sind dünner","Es gibt keine Pumpen"], a: 0, e: "Nur an den Schnürringen wechseln Ionen die Seite." },
      { q: "Was ist ein Kritikpunkt am Domino-Modell?", o: ["Es zeigt zu viele Ionen","Die Steine regenerieren sich nicht selbst wie das Neuron","Es ist zu schnell","Es zeigt Myelin zu genau"], a: 1, e: "Das Neuron stellt seinen Ausgangszustand wieder her." }
    ]
  },
  {
    id: "na-k-pumpe",
    title: "Neurobiologie 7: Natrium-Kalium-Pumpe",
    summary: [
      { h: "Aufgabe: Art und Funktion der Pumpe (Abb.)", p: [
        "Art: Ionenpumpe, ein Transmembranprotein (Carrier), das aktiven Transport betreibt: Na⁺/K⁺-ATPase.",
        "Funktion: Transportiert unter Spaltung von ATP (ATP → ADP + P) Na⁺-Ionen aus der Zelle (innen → außen) und K⁺-Ionen in die Zelle (außen → innen).",
        "Der Transport geht gegen den Konzentrationsgradienten (Na⁺ ist außen höher, K⁺ innen höher), deshalb braucht er Energie.",
        "Bilanz: 3 Na⁺ nach außen, 2 K⁺ nach innen pro ATP.",
        "Bedeutung: Erhält die Ionenungleichverteilung und damit das Ruhepotential; stellt sie nach einem Aktionspotential wieder her."
      ]},
      { h: "Ablauf (für die Pantomime-Zusatzaufgabe)", p: [
        "1. Drei Na⁺ binden von innen an die Pumpe.",
        "2. ATP bindet und wird gespalten (ADP + P), die Pumpe ändert ihre Form (Konformationsänderung).",
        "3. Na⁺ werden nach außen abgegeben.",
        "4. Zwei K⁺ binden von außen, werden durch weitere Formänderung nach innen transportiert und dort freigegeben.",
        "5. Pumpe kehrt in den Ausgangszustand zurück, der Zyklus beginnt neu.",
        "Hinweis: 3:2 steht im Arbeitsblatt „Ruhepotenzial lesen und malen“. Das Bild zeigt es nur schematisch."
      ]}
    ],
    cards: [
      { q: "Art der Natrium-Kalium-Pumpe", a: "Ionenpumpe (Transportprotein) für aktiven Transport: Na⁺/K⁺-ATPase." },
      { q: "Welche Ionen transportiert die Pumpe in welche Richtung?", a: "Na⁺ innen → außen, K⁺ außen → innen." },
      { q: "Bilanz pro ATP?", a: "3 Na⁺ nach außen, 2 K⁺ nach innen." },
      { q: "Warum braucht die Pumpe Energie?", a: "Sie transportiert gegen den Konzentrationsgradienten (aktiver Transport)." },
      { q: "Was geschieht mit ATP?", a: "Es wird zu ADP + Phosphat gespalten, die Energie dient dem Transport." },
      { q: "Welche Aufgabe hat die Pumpe für die Nervenzelle?", a: "Aufrechterhaltung der Ionenungleichverteilung (Ruhepotential) und Wiederherstellung nach dem AP." },
      { q: "Wie viel Gehirn-ATP verbraucht die Pumpe?", a: "Etwa 50–70 %." },
      { q: "Unterschied: Kanal vs. Pumpe", a: "Kanal: passiver Transport entlang des Gradienten. Pumpe: aktiver Transport gegen den Gradienten unter ATP-Verbrauch." }
    ],
    quiz: [
      { q: "Welche Aussage zur Na⁺/K⁺-Pumpe ist richtig?", o: ["Sie transportiert passiv entlang des Gradienten","Sie transportiert aktiv unter ATP-Verbrauch","Sie ist ein Ionenkanal ohne Energiebedarf","Sie arbeitet nur während des APs"], a: 1, e: "Aktiver Transport gegen den Konzentrationsgradienten." },
      { q: "In welche Richtung werden Na⁺-Ionen transportiert?", o: ["Von außen nach innen","Von innen nach außen","Gar nicht","In beide Richtungen"], a: 1, e: "Na⁺ wird aus der Zelle gepumpt." },
      { q: "Wie viele K⁺ nimmt die Pumpe pro Zyklus auf?", o: ["1","2","3","4"], a: 1, e: "3 Na⁺ raus, 2 K⁺ rein." },
      { q: "Warum heißt sie ATPase?", o: ["Sie baut ATP auf","Sie spaltet ATP zur Energiegewinnung","Sie transportiert ATP","Sie bildet Kanäle"], a: 1, e: "ATP wird zu ADP + P gespalten." },
      { q: "Wozu dient die Pumpe nach einem Aktionspotential?", o: ["Zur Wiederherstellung der Ionenverteilung","Zur Öffnung der Na⁺-Kanäle","Zur Bildung der Myelinscheide","Zur Verstärkung des APs"], a: 0, e: "Sie stellt Na⁺/K⁺-Gradienten wieder her." }
    ]
  }
];
