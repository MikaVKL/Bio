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
      { q: "Basiskonzept „Struktur und Funktion“ (engl. form follows function)", a: "Der Bau eines Bauteils (z. B. verzweigte Dendriten) ist an seine Aufgabe angepasst." }
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
  }
];
