window.cards_3_methodik-ana = [

/* -----------------------------------------------------------
   1) Wurzelkriterium
----------------------------------------------------------- */
{
  q: "Wann wendet man das Wurzelkriterium an?",
  a: `
1. Wenn das allgemeine Glied $a_n$ komplizierte Potenzen enthält, z.B. $a_n = (n^2+3)^n$ oder $a_n = c^n$.
2. Wenn $a_n^{1/n}$ sich leicht berechnen lässt.
3. Besonders geeignet für Reihen mit Exponentialcharakter.
4. Typische Form: $a_n = b_n^n$ oder $a_n = r^n\\cdot n^k$.
5. Entscheidungskriterium:
   $$L = \\limsup_{n\\to\\infty} |a_n|^{1/n}.$$
   - $L < 1$: konvergent  
   - $L > 1$: divergent  
   - $L = 1$: keine Aussage
`
},

/* -----------------------------------------------------------
   2) Quotientenkriterium
----------------------------------------------------------- */
{
  q: "Wann wendet man das Quotientenkriterium an?",
  a: `
1. Wenn $\\frac{a_{n+1}}{a_n}$ einfach zu berechnen ist.
2. Besonders geeignet für Reihen mit Fakultäten oder Produkten.
3. Typische Form: $a_n = \\frac{n^k}{n!}$ oder $a_n = \\frac{(2n)!}{n!}$.
4. Entscheidungskriterium:
   $$L = \\lim_{n\\to\\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|.$$
   - $L < 1$: konvergent  
   - $L > 1$: divergent  
   - $L = 1$: keine Aussage
`
},

/* -----------------------------------------------------------
   3) Wann Taylorentwicklung verwenden?
----------------------------------------------------------- */
{
  q: "Wann sollte man eine Taylorentwicklung verwenden?",
  a: `
1. Wenn Grenzwerte der Form $0/0$ oder $\\infty/\\infty$ auftreten.
2. Wenn Funktionen wie $\\sin x$, $\\cos x$, $e^x$, $\\ln(1+x)$ beteiligt sind.
3. Wenn man die genaue Ordnung des ersten nichtverschwindenden Terms braucht.
4. Besonders geeignet für Aufgaben wie:
   - Bestimme größtes $n$ mit endlichem Grenzwert.
   - Vergleiche $f(x)$ und $g(x)$ für $x\\to 0$.
5. Vorteil: Exakte Kontrolle über die Ordnung der Terme.
`
},

/* -----------------------------------------------------------
   4) Wann l'Hospital anwenden?
----------------------------------------------------------- */
{
  q: "Wann sollte man l'Hospital anwenden?",
  a: `
1. Nur bei Grenzwerten der Form $0/0$ oder $\\infty/\\infty$.
2. Wenn Zähler und Nenner differenzierbar sind.
3. Wenn Ableitungen einfacher werden als die ursprünglichen Funktionen.
4. Nicht geeignet, wenn Ableitungen komplizierter werden.
5. Vorsicht: Nach der ersten Ableitung prüfen, ob die Form noch $0/0$ ist.
`
},

/* -----------------------------------------------------------
   5) Wann Vergleichskriterium verwenden?
----------------------------------------------------------- */
{
  q: "Wann verwendet man das Vergleichskriterium?",
  a: `
1. Wenn man eine Reihe mit bekannter Konvergenzstruktur findet.
2. Typische Vergleichsreihen:
   - $\\sum \\frac{1}{n^p}$  
   - $\\sum r^n$  
3. Besonders geeignet für Reihen mit rationalen Ausdrücken.
4. Idee: $0 \\le a_n \\le b_n$ und $\\sum b_n$ konvergiert ⇒ $\\sum a_n$ konvergiert.
`
},

/* -----------------------------------------------------------
   6) Wann Majoranten-/Minorantenkriterium?
----------------------------------------------------------- */
{
  q: "Wann verwendet man Majoranten- oder Minorantenkriterium?",
  a: `
1. Wenn $a_n$ nicht direkt mit einer Standardreihe vergleichbar ist.
2. Man sucht eine obere Schranke (Majorante) oder untere Schranke (Minorante).
3. Besonders nützlich bei trigonometrischen oder logarithmischen Termen.
4. Beispiel: $|\\sin x| \\le |x|$ liefert Majoranten.
`
},

/* -----------------------------------------------------------
   7) Wann Cauchy-Kriterium?
----------------------------------------------------------- */
{
  q: "Wann verwendet man das Cauchy-Kriterium?",
  a: `
1. Wenn man Konvergenz ohne explizite Grenzwerte zeigen will.
2. Besonders geeignet für abstrakte Beweise.
3. Kriterium:
   $$\\forall \\varepsilon>0\\ \\exists N:\\ |s_m - s_n| < \\varepsilon.$$
4. Praktisch selten direkt angewendet, aber theoretisch wichtig.
`
},

/* -----------------------------------------------------------
   8) Wann Potenzreihenmethoden (Konvergenzradius)?
----------------------------------------------------------- */
{
  q: "Wann verwendet man Methoden für Potenzreihen (Konvergenzradius)?",
  a: `
1. Wenn die Reihe die Form $\\sum a_n (z-z_0)^n$ hat.
2. Typische Werkzeuge:
   - Wurzelkriterium  
   - Quotientenkriterium  
3. Ziel: Bestimme $R$ mit
   $$R = \\frac{1}{\\limsup |a_n|^{1/n}}.$$
4. Besonders geeignet für komplexe Analysis.
`
},

/* -----------------------------------------------------------
   9) Wann Grenzwertvergleiche (asymptotisch)?
----------------------------------------------------------- */
{
  q: "Wann verwendet man asymptotische Vergleiche wie $f(x)\\sim g(x)$?",
  a: `
1. Wenn man das Verhalten für $x\\to 0$ oder $x\\to\\infty$ untersucht.
2. Besonders geeignet für:
   - $\\sin x \\sim x$
   - $1-\\cos x \\sim x^2/2$
   - $e^x - 1 \\sim x$
3. Ideal für Grenzwerte ohne l'Hospital.
`
},

/* -----------------------------------------------------------
   10) Wann Monotonie + Beschränktheit?
----------------------------------------------------------- */
{
  q: "Wann verwendet man das Monotonie-Beschränktheits-Kriterium?",
  a: `
1. Wenn man eine Folge $(a_n)$ hat, keine Reihe.
2. Prüfe:
   - Monoton steigend oder fallend?
   - Beschränkt?
3. Wenn ja ⇒ Folge konvergiert.
4. Besonders geeignet für rekursive Folgen.
`
},

/* -----------------------------------------------------------
   1) Wurzelkriterium
----------------------------------------------------------- */
{
  q: "Wann sollte man das Wurzelkriterium anwenden?",
  a: `
1. Wenn das allgemeine Glied $a_n$ starke Potenzen enthält, z.B. $a_n = (n^2+3)^n$ oder $a_n = c^n$.
2. Wenn $|a_n|^{1/n}$ sich leicht berechnen lässt.
3. Besonders geeignet für Reihen mit exponentiellem Wachstum oder Zerfall.
4. Typische Fälle:
   - $a_n = r^n n^k$
   - $a_n = (b_n)^n$
5. Entscheidung:
   $$L = \\limsup_{n\\to\\infty} |a_n|^{1/n}.$$
   - $L < 1$: konvergent  
   - $L > 1$: divergent  
   - $L = 1$: keine Aussage
`
},

/* -----------------------------------------------------------
   2) Quotientenkriterium
----------------------------------------------------------- */
{
  q: "Wann sollte man das Quotientenkriterium anwenden?",
  a: `
1. Wenn $\\frac{a_{n+1}}{a_n}$ einfach zu berechnen ist.
2. Besonders geeignet für Reihen mit Fakultäten, Produkten oder rekursiven Ausdrücken.
3. Typische Fälle:
   - $a_n = \\frac{n^k}{n!}$
   - $a_n = \\frac{(2n)!}{n!}$
4. Entscheidung:
   $$L = \\lim_{n\\to\\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|.$$
   - $L < 1$: konvergent  
   - $L > 1$: divergent  
   - $L = 1$: keine Aussage
`
},

/* -----------------------------------------------------------
   3) Vergleichskriterium
----------------------------------------------------------- */
{
  q: "Wann verwendet man das Vergleichskriterium?",
  a: `
1. Wenn man $a_n$ gut mit einer bekannten Reihe vergleichen kann.
2. Typische Vergleichsreihen:
   - $\\sum \\frac{1}{n^p}$  
   - $\\sum r^n$
3. Idee:
   - $0 \\le a_n \\le b_n$ und $\\sum b_n$ konvergiert ⇒ $\\sum a_n$ konvergiert.
4. Besonders geeignet für rationale Ausdrücke oder trigonometrische Abschätzungen.
`
},

/* -----------------------------------------------------------
   4) Majoranten- und Minorantenkriterium
----------------------------------------------------------- */
{
  q: "Wann nutzt man Majoranten- oder Minorantenkriterium?",
  a: `
1. Wenn $a_n$ nicht direkt mit einer Standardreihe vergleichbar ist.
2. Man sucht eine einfache obere Schranke (Majorante) oder untere Schranke (Minorante).
3. Besonders nützlich bei:
   - $\\sin$, $\\cos$, $\\ln$, $e^x$
   - komplizierten Brüchen
4. Beispiel: $|\\sin x| \\le |x|$ liefert eine Majorante.
`
},

/* -----------------------------------------------------------
   5) Cauchy-Kriterium
----------------------------------------------------------- */
{
  q: "Wann verwendet man das Cauchy-Kriterium?",
  a: `
1. Wenn man Konvergenz ohne explizite Grenzwerte zeigen will.
2. Besonders geeignet für abstrakte Beweise.
3. Kriterium:
   $$\\forall \\varepsilon>0\\ \\exists N:\\ |s_m - s_n| < \\varepsilon.$$
4. Praktisch selten direkt benutzt, aber theoretisch zentral.
`
},

/* -----------------------------------------------------------
   6) Wann Taylorentwicklung?
----------------------------------------------------------- */
{
  q: "Wann sollte man eine Taylorentwicklung verwenden?",
  a: `
1. Wenn Grenzwerte der Form $0/0$ oder $\\infty/\\infty$ auftreten.
2. Wenn man die genaue Ordnung des ersten nichtverschwindenden Terms braucht.
3. Besonders geeignet für:
   - $\\sin x$, $\\cos x$, $e^x$, $\\ln(1+x)$
   - Aufgaben wie: „Bestimme größtes $n$ mit endlichem Grenzwert.“
4. Vorteil: Exakte Kontrolle über die Asymptotik.
`
},

/* -----------------------------------------------------------
   7) Wann l'Hospital?
----------------------------------------------------------- */
{
  q: "Wann sollte man l'Hospital anwenden?",
  a: `
1. Nur bei $0/0$ oder $\\infty/\\infty$.
2. Wenn Ableitungen einfacher werden als der ursprüngliche Ausdruck.
3. Wenn Zähler und Nenner in einer Umgebung differenzierbar sind.
4. Nach jeder Ableitung prüfen, ob die Form noch anwendbar ist.
5. Nicht geeignet, wenn Ableitungen komplizierter werden.
`
},

/* -----------------------------------------------------------
   8) Wann asymptotische Vergleiche?
----------------------------------------------------------- */
{
  q: "Wann verwendet man asymptotische Vergleiche wie $f(x)\\sim g(x)$?",
  a: `
1. Wenn man Grenzwerte ohne l'Hospital lösen möchte.
2. Wenn Standardentwicklungen bekannt sind:
   - $\\sin x \\sim x$
   - $1-\\cos x \\sim x^2/2$
   - $e^x - 1 \\sim x$
3. Ideal für schnelle Abschätzungen und Reihenverhalten.
`
},

/* -----------------------------------------------------------
   9) Wann Monotonie + Beschränktheit?
----------------------------------------------------------- */
{
  q: "Wann nutzt man das Monotonie-Beschränktheits-Kriterium?",
  a: `
1. Nur für Folgen, nicht für Reihen.
2. Prüfe:
   - Ist $(a_n)$ monoton?
   - Ist $(a_n)$ beschränkt?
3. Wenn ja ⇒ Folge konvergiert.
4. Besonders nützlich bei rekursiven Folgen.
`
},

/* -----------------------------------------------------------
   10) Wann Potenzreihenmethoden?
----------------------------------------------------------- */
{
  q: "Wann verwendet man Methoden für Potenzreihen (Konvergenzradius)?",
  a: `
1. Wenn die Reihe die Form $\\sum a_n (z-z_0)^n$ hat.
2. Typische Werkzeuge:
   - Wurzelkriterium  
   - Quotientenkriterium  
3. Ziel:
   $$R = \\frac{1}{\\limsup |a_n|^{1/n}}.$$
4. Besonders wichtig in der komplexen Analysis.
`
}

];
