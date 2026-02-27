window.rb2a1 = [
  {
    q: "Ist folgende Aussage wahr oder falsch? Sind $(x_n)$ und $(y_n)$ Folgen komplexer Zahlen, so dass $(x_n y_n)$ eine Nullfolge ist, so ist mindestens eine der beiden Folgen ebenfalls eine Nullfolge.",
    a: `Falsch.
Ein Gegenbeispiel:
- Setze $x_n = n$ und $y_n = \\frac{1}{n^2}$.
- Dann gilt $x_n y_n = \\frac{1}{n} \\to 0$, aber weder $(x_n)$ noch $(y_n)$ ist eine Nullfolge.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Jeder diskrete metrische Raum ist vollständig.",
    a: `Wahr.
In der diskreten Metrik gilt: Jede Cauchy-Folge ist ab einem Index konstant und damit konvergent.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Der Durchschnitt einer absteigenden Folge abzählbar vieler Intervalle in $\\mathbb{R}$ besteht immer aus genau einem Punkt.",
    a: `Falsch.
Beispiel:
$$I_n = [0,1+\\tfrac{1}{n}]$$
Dann ist $\\bigcap_n I_n = [0,1]$, also ein ganzes Intervall.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? In einem kompakten metrischen Raum konvergiert jede Cauchy-Folge.",
    a: `Wahr.
Kompakte metrische Räume sind vollständig.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? In jedem metrischen Raum gibt es genau eine abgeschlossene Teilmenge, die auch dicht ist.",
    a: `Falsch.
Beispiel: In $\\mathbb{R}$ sind sowohl $\\mathbb{R}$ als auch jede abgeschlossene Menge mit leerem Inneren (z.B. Cantor-Menge) dicht in sich selbst.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Das Innere der Cantor-Menge ist leer.",
    a: `Wahr.
Die Cantor-Menge ist perfekt, abgeschlossen und hat kein Intervall als Teilmenge.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Für reelle Reihen mit ausschließlich negativen Gliedern ist Konvergenz äquivalent zu absoluter Konvergenz.",
    a: `Wahr.
Bei nicht-positiven Gliedern gilt $|a_n| = -a_n$, also absolute Konvergenz ⇔ Konvergenz.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Eine Reihe in $\\mathbb{R}^k$ divergiert genau dann, wenn mindestens eine ihrer Komponentenreihen divergiert.",
    a: `Wahr.
Konvergenz in $\\mathbb{R}^k$ bedeutet komponentenweise Konvergenz.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Das Abel-Dirichlet-Kriterium erlaubt Aussagen über absolute Konvergenz.",
    a: `Falsch.
Es liefert nur Aussagen über bedingte Konvergenz.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Konvergiert für eine komplexe Reihe $\\sum z_k$ die Reihe $\\sum |z_k|$, so konvergiert auch die ursprüngliche Reihe.",
    a: `Wahr.
Absolute Konvergenz impliziert Konvergenz.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Gilt $\\frac{|a_{n+1}|}{|a_n|} < 1$ für alle $n$, so konvergiert die Reihe $\\sum a_n$ absolut.",
    a: `Falsch.
Das Verhältnis muss *gegen* einen Grenzwert $<1$ konvergieren. Ein punktweises $<1$ reicht nicht.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Für alle $n$ existiert ein $x_0$, sodass für alle $x > x_0$ gilt: $e^x > x^n$.",
    a: `Wahr.
Die Exponentialfunktion wächst schneller als jedes Polynom.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Für alle $n$ existiert ein $x_0 > 0$, sodass für alle $x > x_0$ gilt: $\\ln(x) < \\frac{x}{n}$.",
    a: `Wahr.
$\\ln(x)$ wächst langsamer als jede lineare Funktion.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Die Folge $\\frac{3^n}{n^3}$ ist eine Nullfolge.",
    a: `Falsch.
Exponentielles Wachstum dominiert polynomielles Wachstum: $3^n$ wächst schneller als $n^3$.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Zu jeder konvergenten Reihe $\\sum x_n$ mit $x_n \\neq 0$ existiert eine Folge $(c_n)$ mit $c_n x_n \\to 0$, aber $\\sum c_n x_n$ divergiert.",
    a: `Wahr.
Man kann z.B. $c_n$ so wählen, dass die Terme kleiner werden, aber die Reihe dennoch divergiert (klassische Umordnung/Manipulation).`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Jede Abbildung $f:\\mathbb{N} \\to Y$ in einen metrischen Raum ist stetig.",
    a: `Wahr.
$\\mathbb{N}$ ist diskret in der Standardmetrik. Jede Funktion ist dort stetig.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Eine Abbildung $f:\\mathbb{R} \\to \\mathbb{N}$ ist genau dann stetig, wenn sie konstant ist.",
    a: `Wahr.
$\\mathbb{N}$ ist diskret, daher müsste jedes Urbild eines Punktes offen sein → nur bei konstanten Funktionen möglich.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Die Abbildung $f:\\mathbb{Q} \\to \\mathbb{R}$ mit $f(x)=0$ für $x<\\sqrt{2}$ und $f(x)=1$ für $x>\\sqrt{2}$ ist stetig.",
    a: `Wahr.
$\\sqrt{2}$ liegt nicht in $\\mathbb{Q}$, daher gibt es keine Stelle, an der ein Sprung entsteht.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Durch sukzessives Falten entlang der Koordinatenachsen erhält man eine stetige Abbildung $f:\\mathbb{R}^2 \\to [0,\\infty)^2$.",
    a: `Wahr.
Die Abbildung $(x,y) \\mapsto (|x|,|y|)$ ist stetig und entspricht genau diesem Falten.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Zu zwei Punkten $z_1,z_2 \\in \\mathbb{C}$ existiert immer eine stetige Abbildung $f:[0,1]\\to\\mathbb{C}$ mit $f(0)=z_1$ und $f(1)=z_2$.",
    a: `Wahr.
$\\mathbb{C}$ ist wegzusammenhängend; die Strecke $t \\mapsto (1-t)z_1 + t z_2$ ist stetig.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Sind $f,g:X\\to Y$ stetig und stimmen auf einer dichten Menge überein, so gilt $f=g$.",
    a: `Wahr.
Stetigkeit + Übereinstimmung auf dichter Menge erzwingt Gleichheit.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Die Abstandsfunktion $d:X\\times X\\to[0,\\infty)$ ist stets stetig.",
    a: `Wahr.
Die Dreiecksungleichung liefert Lipschitz-Stetigkeit.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Jede stetige Abbildung $f:[0,1]\\to\\mathbb{C}$ ist gleichmäßig stetig.",
    a: `Wahr.
$[0,1]$ ist kompakt → stetig ⇒ gleichmäßig stetig.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Zu jeder konvergenten Reihe $\\sum x_n$ existiert eine Folge $c_n \\to \\infty$, sodass auch $\\sum c_n x_n$ konvergiert.",
    a: `Wahr.
Man kann $c_n$ sehr langsam wachsen lassen, z.B. $c_n = 1 + \\frac{1}{\\sqrt{n}}$, sodass die Reihe weiterhin konvergiert.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Für jede bijektive stetige Abbildung $f:\\mathbb{R}\\to\\mathbb{R}$ ist die Umkehrabbildung ebenfalls stetig.",
    a: `Falsch.
Beispiel: strikte Monotonie ist nötig. Eine stetige Bijektion auf $\\mathbb{R}$ kann nicht-monoton sein und dann ist $f^{-1}$ nicht stetig.`
  },

  {
    q: "Ist folgende Aussage wahr oder falsch? Es gibt irrationale $x,y>0$ mit rationalem $x^y$.",
    a: `Wahr.
Klassisches Beispiel:
- Setze $x = \\sqrt{2}$.
- Betrachte $y = \\log_{\\sqrt{2}}(9)$.
Dann ist $x^y = 9$ rational.`
  },
  { q: "Wann ist eine Folge $(x_n)$ eine Nullfolge?", a: `Eine Folge ist Nullfolge, wenn gilt: \ \[ \\forall \\varepsilon > 0:\\ \\exists N:\\ \\forall n > N:\\ |x_n| < \\varepsilon. \\] Dies entspricht $x_n \\to 0$.` }, { q: "Warum impliziert absolute Konvergenz die Konvergenz einer Reihe?", a: `Weil gilt: - Ist $\\sum |a_n|$ konvergent, so ist $(a_n)$ eine Nullfolge. - Die Majorantenkriterium-Argumentation zeigt, dass $\\sum a_n$ konvergiert. - Absolute Konvergenz ist stärker als bedingte Konvergenz.` }, { q: "Was bedeutet es, dass ein metrischer Raum vollständig ist?", a: `Ein metrischer Raum $(X,d)$ ist vollständig, wenn jede Cauchy-Folge in $X$ konvergiert. Formal: \ \[ \\forall (x_n) \\subset X:\\ (x_n \\text{ Cauchy}) \\Rightarrow (\\exists x \\in X:\\ x_n \\to x). \\] ` }, { q: "Warum ist die Cantor-Menge perfekt?", a: `Weil sie: - abgeschlossen ist, - keine isolierten Punkte besitzt, - jeder Punkt Grenzpunkt ist. Damit ist sie eine perfekte Menge.` }, { q: "Warum ist jede Funktion $f:\\mathbb{N}\\to Y$ stetig?", a: `In der Standardmetrik ist $\\mathbb{N}$ diskret: - Jede Menge $\\{n\\}$ ist offen. - Für jedes $n$ existiert ein $\\delta$ mit $B_\\delta(n)=\\{n\\}$. Damit ist jede Abbildung automatisch stetig.` }, { q: "Warum ist eine Funktion $f:\\mathbb{R}\\to\\mathbb{N}$ nur dann stetig, wenn sie konstant ist?", a: `Da $\\mathbb{N}$ diskret ist, muss das Urbild jedes Punktes offen sein. Das geht nur, wenn $f^{-1}(\\{k\\})$ entweder leer oder ganz $\\mathbb{R}$ ist. Also ist $f$ konstant.` }, { q: "Warum ist die Abbildung $t \\mapsto (1-t)z_1 + t z_2$ ein Pfad in $\\mathbb{C}$?", a: `Weil: - sie linear ist, - stetig in $t$, - $f(0)=z_1$ und $f(1)=z_2$ erfüllt. Damit ist sie ein stetiger Pfad zwischen zwei Punkten.` }, { q: "Was bedeutet es, dass eine Menge dicht ist?", a: `Eine Menge $A$ ist dicht in $X$, wenn gilt: \ \[ \\overline{A} = X. \\] Das heißt: Jeder Punkt von $X$ ist Grenzpunkt oder Element von $A$.` }, { q: "Warum ist die Abstandsfunktion $d(x,y)$ Lipschitz-stetig?", a: `Weil gilt: \ \[ |d(x,y) - d(x',y')| \\le d(x,x') + d(y,y'). \\] Damit ist $d$ sogar 1-Lipschitz in jedem Argument.` }, { q: "Warum ist jede stetige Funktion auf einem kompakten Intervall gleichmäßig stetig?", a: `Nach dem Heine–Cantor-Satz: - Stetigkeit + Kompaktheit ⇒ gleichmäßige Stetigkeit. - Intuition: Auf kompakten Mengen kann eine Funktion nicht „zu schnell“ oszillieren.` }, { q: "Warum ist $\\frac{3^n}{n^3}$ keine Nullfolge?", a: `Weil exponentielles Wachstum jedes polynomielle Wachstum dominiert: \ \[ \\lim_{n\\to\\infty} \\frac{3^n}{n^3} = \\infty. \\] ` }, { q: "Was ist ein klassisches Beispiel für irrationale $x,y>0$ mit rationalem $x^y$?", a: `Standardkonstruktion: - Betrachte $a = \\sqrt{2}^{\\sqrt{2}}$. - Falls $a$ rational ist, fertig. - Falls $a$ irrational ist, setze $x=a$ und $y=\\sqrt{2}$. Dann ist: \ \[ x^y = (\\sqrt{2}^{\\sqrt{2}})^{\\sqrt{2}} = 2. \\] ` }, { q: "Warum ist die Aussage „Sind $(x_n y_n)$ Nullfolge ⇒ mindestens eine Nullfolge“ falsch?", a: `Gegenbeispiel: \ \[ x_n = n,\\quad y_n = \\frac{1}{n^2}. \\] Dann: \ \[ x_n y_n = \\frac{1}{n} \\to 0, \\] aber weder $(x_n)$ noch $(y_n)$ ist Nullfolge.` }, { q: "Was bedeutet es, dass zwei stetige Funktionen auf einer dichten Menge übereinstimmen?", a: `Wenn $f$ und $g$ stetig sind und $f(x)=g(x)$ für alle $x$ in einer dichten Menge $D$, dann folgt: \ \[ f=g \\text{ auf ganz } X. \\] Grund: Stetigkeit überträgt Gleichheit auf Grenzpunkte.` }
];
