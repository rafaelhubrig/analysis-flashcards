window.cards_6_rb2extra = [

  /* -----------------------------  AUFGABE 2  ----------------------------- */

  {
    q: "Bestimme für $x_n = 1 + 2(-1)^{n+1} + 3(-1)^{\\frac{n(n+1)}{2}}$ das Infimum.",
    a: `Die Folge nimmt nur endlich viele Werte an:
- Für gerade und ungerade $n$ sowie Parität von $\\frac{n(n+1)}{2}$ entstehen Werte: $1+2+3=6$, $1+2-3=0$, $1-2+3=2$, $1-2-3=-4$.
Infimum: $-4$.`
  },

  {
    q: "Bestimme für dieselbe Folge das Supremum.",
    a: `Die möglichen Werte sind $6, 2, 0, -4$.
Supremum: $6$.`
  },

  {
    q: "Bestimme für dieselbe Folge $\\liminf x_n$.",
    a: `Da die Folge periodisch zwischen vier Werten springt:
$\\liminf x_n = -4$.`
  },

  {
    q: "Bestimme für dieselbe Folge $\\limsup x_n$.",
    a: `Analog:
$\\limsup x_n = 6$.`
  },

  {
    q: "Bestimme für $x_n = (-1)^{n+1}$ Infimum, Supremum, $\\liminf$, $\\limsup$.",
    a: `Die Folge nimmt Werte $1$ und $-1$ an.
- Infimum: $-1$
- Supremum: $1$
- $\\liminf = -1$
- $\\limsup = 1$`
  },

  /* -----------------------------  AUFGABE 3  ----------------------------- */

  {
    q: "Berechne die Reihe $\\sum_{k=0}^\\infty \\frac{2^k + 3^k}{6^k}$.",
    a: `Zerlege:
\

\[
\\sum \\frac{2^k}{6^k} + \\sum \\frac{3^k}{6^k}
= \\sum \\left(\\frac{1}{3}\\right)^k + \\sum \\left(\\frac{1}{2}\\right)^k.
\\]


Beide sind geometrisch:
- Erste Summe: $\\frac{1}{1-1/3} = \\frac{3}{2}$
- Zweite Summe: $\\frac{1}{1-1/2} = 2$
Gesamt: $\\frac{3}{2} + 2 = \\frac{7}{2}$.`
  },

  {
    q: "Berechne die Reihe $\\sum_{k=0}^\\infty \\frac{3^k + 5^k}{15^k}$.",
    a: `Zerlege:
\

\[
\\sum \\left(\\frac{1}{5}\\right)^k + \\sum \\left(\\frac{1}{3}\\right)^k.
\\]


Summen:
- $\\frac{1}{1-1/5} = \\frac{5}{4}$
- $\\frac{1}{1-1/3} = \\frac{3}{2}$
Gesamt: $\\frac{5}{4} + \\frac{3}{2} = \\frac{11}{4}$.`
  },

  {
    q: "Berechne die Reihe $\\sum_{k=0}^\\infty \\frac{2^k + 5^k}{10^k}$.",
    a: `Zerlege:
\

\[
\\sum \\left(\\frac{1}{5}\\right)^k + \\sum \\left(\\frac{1}{2}\\right)^k.
\\]


Summen:
- $\\frac{1}{1-1/5} = \\frac{5}{4}$
- $\\frac{1}{1-1/2} = 2$
Gesamt: $\\frac{5}{4} + 2 = \\frac{13}{4}$.`
  },

  /* -----------------------------  AUFGABE 4  ----------------------------- */

  {
    q: "Berechne $\\lim_{x\\to 3} \\frac{x^2 - 5x + 6}{x^2 - 8x + 15}$.",
    a: `Faktorisieren:
- Zähler: $(x-2)(x-3)$
- Nenner: $(x-3)(x-5)$
Kürzen:
\

\[
\\lim_{x\\to 3} \\frac{x-2}{x-5} = \\frac{1}{-2} = -\\frac{1}{2}.
\\]

`
  },

  {
    q: "Berechne $\\lim_{x\\to 5} \\frac{x^2 - 6x + 5}{x^2 - 7x + 10}$.",
    a: `Faktorisieren:
- Zähler: $(x-1)(x-5)$
- Nenner: $(x-5)(x-2)$
Kürzen:
\

\[
\\lim_{x\\to 5} \\frac{x-1}{x-2} = \\frac{4}{3}.
\\]

`
  },

  {
    q: "Berechne $\\lim_{x\\to 5} \\frac{x^2 - 8x + 15}{x^2 - 7x + 10}$.",
    a: `Faktorisieren:
- Zähler: $(x-3)(x-5)$
- Nenner: $(x-5)(x-2)$
Kürzen:
\

\[
\\lim_{x\\to 5} \\frac{x-3}{x-2} = \\frac{2}{3}.
\\]

`
  },

  /* -----------------------------  AUFGABE 6  ----------------------------- */

  {
    q: "Ist $f(x_1,\\dots,x_n)=\\sup\\{x_1,\\dots,x_n\\}$ stetig?",
    a: `Ja.
Begründung:
- $\\sup$ ist Lipschitz-stetig:
\

\[
|\\sup x - \\sup y| \\le \\max_i |x_i - y_i|.
\\]

`
  },

  {
    q: "Ist $g(z)=\\overline{z}$ stetig?",
    a: `Ja.
Komplexe Konjugation ist linear und erfüllt:
\

\[
|\\overline{z}-\\overline{w}| = |z-w|.
\\]

`
  },

  {
    q: "Ist $h(x)=\\lim_{n\\to\\infty} \\frac{x^{2n}-1}{x^{2n}+1}$ stetig?",
    a: `Die Grenzfunktion ist:
- Für $|x|<1$: $h(x)=-1$
- Für $|x|>1$: $h(x)=1$
- Für $x=\\pm 1$: $h(x)=0$
Nicht stetig an $x=\\pm 1$.`
  },

  /* -----------------------------  AUFGABE 7  ----------------------------- */

  {
    q: "Finde eine Funktion $f:\\mathbb{R}\\to\\mathbb{R}$, die genau an einem Punkt stetig ist.",
    a: `Beispiel:
\

\[
f(x)=
\\begin{cases}
0, & x=0,\\\\
1, & x\\neq 0.
\\end{cases}
\\]


Stetig nur in $0$.`
  },

  {
    q: "Finde eine Funktion $f:\\mathbb{C}\\to\\mathbb{C}$, die genau an einem Punkt stetig ist.",
    a: `Analog:
\

\[
f(z)=
\\begin{cases}
0, & z=0,\\\\
1, & z\\neq 0.
\\end{cases}
\\]


Stetig nur in $0$.`
  },

  /* -----------------------------  AUFGABE 8  ----------------------------- */

  {
    q: "Wie viele Unstetigkeitsstellen muss eine Bijektion $f:[0,1)\\to(0,1)$ mindestens haben?",
    a: `Mindestens eine.
Begründung:
- Eine stetige Bijektion zwischen kompaktem und nicht-kompaktem Intervall ist unmöglich.
- Also muss $f$ unstetig sein.
- Eine Unstetigkeitsstelle reicht (z.B. Verschiebung mit Sprung).`
  },

  /* -----------------------------  AUFGABE 9  ----------------------------- */

  {
    q: "Warum ist $f(x)=\\frac{x}{1+|x|}$ bijektiv und stetig?",
    a: `Eigenschaften:
- Streng monoton wachsend.
- Bild: $(-1,1)$.
- Umkehrfunktion:
\

\[
f^{-1}(y)=\\frac{y}{1-|y|}.
\\]


Beide stetig.`
  },
{ q: "Wie erkennt man $\\liminf$ und $\\limsup$ bei periodischen Folgen?", a: `Bei periodischen Folgen mit endlicher Wertemenge gilt: \ \[ \\liminf x_n = \\min\\{\\text{Periodenwerte}\\},\\quad \\limsup x_n = \\max\\{\\text{Periodenwerte}\\}. \\] ` }, { q: "Warum existiert der Grenzwert einer alternierenden Folge oft nicht?", a: `Eine alternierende Folge wie $(-1)^n$ besitzt zwei Häufungspunkte: \ \[ \\liminf = -1,\\quad \\limsup = 1. \\] Da diese verschieden sind, existiert kein Grenzwert.` }, { q: "Wie bestimmt man Infimum und Supremum einer Folge mit endlich vielen Funktionswerten?", a: `Wenn eine Folge nur endlich viele Werte annimmt: - Infimum = kleinstes Element der Wertemenge - Supremum = größtes Element der Wertemenge Dies gilt unabhängig von der Reihenfolge.` }, /* ---------------------- ZUSATZKARTEN ZU AUFGABE 3 ---------------------- */ { q: "Wie erkennt man, dass eine Reihe der Form $\\sum \\frac{a^k}{b^k}$ geometrisch ist?", a: `Man schreibt: \ \[ \\frac{a^k}{b^k} = \\left(\\frac{a}{b}\\right)^k. \\] Damit ist die Reihe geometrisch mit Quotient $q = \\frac{a}{b}$.` }, { q: "Wann konvergiert eine geometrische Reihe $\\sum q^k$?", a: `Die geometrische Reihe konvergiert genau dann, wenn: \ \[ |q| < 1. \\] Dann gilt: \ \[ \\sum_{k=0}^\\infty q^k = \\frac{1}{1-q}. \\] ` }, { q: "Warum kann man Reihen wie $\\sum \\frac{2^k + 3^k}{6^k}$ zerlegen?", a: `Weil Summation linear ist: \ \[ \\sum (a_k + b_k) = \\sum a_k + \\sum b_k. \\] Damit lassen sich gemischte Terme in zwei geometrische Reihen aufspalten.` }, /* ---------------------- ZUSATZKARTEN ZU AUFGABE 4 ---------------------- */ { q: "Wie geht man bei Grenzwerten rationaler Funktionen vor, wenn Zähler und Nenner an der Stelle 0 werden?", a: `Vorgehen: 1. Faktorisieren von Zähler und Nenner. 2. Gemeinsame Faktoren kürzen. 3. Grenzwert der vereinfachten Funktion berechnen. Dies löst $0/0$-Unbestimmtheiten.` }, { q: "Warum darf man bei Grenzwerten Faktoren kürzen?", a: `Man darf kürzen, solange der gekürzte Faktor an der betrachteten Stelle nicht 0 ist. Beispiel: \ \[ \\frac{(x-3)(x-2)}{(x-3)(x-5)} \\to \\frac{x-2}{x-5} \\quad (x\\neq 3). \\] ` }, { q: "Was passiert, wenn nach dem Kürzen der Nenner an der Stelle 0 wird?", a: `Dann existiert der Grenzwert nicht oder ist unendlich. Beispiel: \ \[ \\lim_{x\\to 2} \\frac{x-1}{x-2} = \\pm\\infty. \\] ` }, /* ---------------------- ZUSATZKARTEN ZU AUFGABE 6 ---------------------- */ { q: "Warum ist die Supremumsfunktion Lipschitz-stetig?", a: `Für $x,y \\in \\mathbb{R}^n$ gilt: \ \[ |\\sup x - \\sup y| \\le \\max_i |x_i - y_i|. \\] Damit ist sie 1-Lipschitz bezüglich der Maximumsnorm.` }, { q: "Ist die Funktion $f(x)=\\sup\\{x_1,\\dots,x_n\\}$ differenzierbar?", a: `Im Allgemeinen nein. Sie ist nur dort differenzierbar, wo das Maximum eindeutig von einer Komponente angenommen wird.` }, { q: "Warum ist die komplexe Konjugation nicht holomorph?", a: `Die Cauchy-Riemann-Gleichungen sind nicht erfüllt. Für $f(z)=\\overline{z}$ gilt: \ \[ f_x = 1,\\quad f_y = -1. \\] Damit ist $f_x \\neq f_y$, also nicht komplex differenzierbar.` }, /* ---------------------- ZUSATZKARTEN ZU AUFGABE 7 ---------------------- */ { q: "Wie konstruiert man allgemein Funktionen, die nur an einem Punkt stetig sind?", a: `Typisches Muster: \ \[ f(x)= \\begin{cases} 0, & x = x_0,\\\\ g(x), & x \\neq x_0, \\end{cases} \\] wobei $g$ überall unstetig ist (z.B. Dirichlet-Funktion).` }, { q: "Warum ist die Dirichlet-Funktion überall unstetig?", a: `Dirichlet-Funktion: \ \[ f(x)= \\begin{cases} 1, & x \\in \\mathbb{Q},\\\\ 0, & x \\notin \\mathbb{Q}. \\end{cases} \\] Jede Umgebung enthält rationale und irrationale Zahlen → kein Grenzwert.` }, /* ---------------------- ZUSATZKARTEN ZU AUFGABE 8 ---------------------- */ { q: "Warum kann es keine stetige Bijektion $[0,1)\\to(0,1)$ geben?", a: `Weil stetige Bijektionen zwischen Intervallen Homöomorphismen sind. $[0,1)$ ist nicht kompakt, $(0,1)$ ist nicht abgeschlossen. Die Räume sind nicht homöomorph.` }, { q: "Wie sieht eine explizite Bijektion $[0,1)\\to(0,1)$ aus?", a: `Beispiel: \ \[ f(x)= \\begin{cases} x, & x\\in[0,1), x\\neq 0,\\\\ \\frac{1}{2}, & x=0. \\end{cases} \\] Ein Sprung macht die Funktion bijektiv.` }, /* ---------------------- ZUSATZKARTEN ZU AUFGABE 9 ---------------------- */ { q: "Warum ist $f(x)=\\frac{x}{1+|x|}$ streng monoton?", a: `Für $x>0$: \ \[ f'(x)=\\frac{1}{(1+x)^2}>0. \\] Für $x<0$: \ \[ f'(x)=\\frac{1}{(1-|x|)^2}>0. \\] Damit streng wachsend auf ganz $\\mathbb{R}$.` }, { q: "Warum bildet $f(x)=\\frac{x}{1+|x|}$ ganz $\\mathbb{R}$ auf $(-1,1)$ ab?", a: `Grenzwerte: \ \[ \\lim_{x\\to\\infty} f(x)=1,\\quad \\lim_{x\\to -\\infty} f(x)=-1. \\] Da $f$ streng monoton ist, ist das Bild genau $(-1,1)$.` },

  { q: "Wie erkennt man Häufungspunkte einer Folge?", a: `Ein Wert $a$ ist Häufungspunkt, wenn gilt: \ \[ \\forall \\varepsilon>0:\\ \\text{unendlich viele } n:\\ |x_n - a| < \\varepsilon. \\] Häufungspunkte bestimmen $\\liminf$ und $\\limsup$.` }, { q: "Warum kann eine Folge mehrere Häufungspunkte haben?", a: `Wenn die Folge nicht konvergiert, aber immer wieder in die Nähe verschiedener Werte springt. Beispiel: \ \[ x_n = (-1)^n. \\] Häufungspunkte: $-1$ und $1$.` }, { q: "Wie verhält sich $\\liminf$ zu $\\inf$ bei beschränkten Folgen?", a: `Es gilt immer: \ \[ \\inf x_n \\le \\liminf x_n. \\] Gleichheit nur, wenn die Folge den unteren Rand unendlich oft erreicht.` }, { q: "Wie verhält sich $\\limsup$ zu $\\sup$ bei beschränkten Folgen?", a: `Es gilt: \ \[ \\limsup x_n \\le \\sup x_n. \\] Gleichheit nur, wenn die Folge den oberen Rand unendlich oft erreicht.` }, /* ---------------------- WEITERE KARTEN ZU AUFGABE 3 ---------------------- */ { q: "Warum ist die Zerlegung einer Reihe in zwei Reihen immer erlaubt?", a: `Weil Summation linear ist: \ \[ \\sum (a_k + b_k) = \\sum a_k + \\sum b_k. \\] Dies gilt unabhängig von Konvergenzart, solange beide Reihen existieren.` }, { q: "Wie erkennt man schnell, ob eine Reihe geometrisch ist?", a: `Man prüft, ob der Quotient \ \[ \\frac{a_{k+1}}{a_k} \\] konstant ist. Ist er konstant $q$, so ist die Reihe geometrisch.` }, { q: "Warum konvergiert $\\sum q^k$ nicht für $|q|\\ge 1$?", a: `Weil die Glieder dann nicht gegen 0 gehen. Für Konvergenz einer Reihe muss $a_k \\to 0$ gelten.` }, /* ---------------------- WEITERE KARTEN ZU AUFGABE 4 ---------------------- */ { q: "Was bedeutet eine Unbestimmtheit vom Typ $0/0$?", a: `Sie zeigt an, dass Zähler und Nenner an der Stelle beide 0 sind. Man muss faktorisieren oder umformen, um den Grenzwert zu bestimmen.` }, { q: "Warum ist Faktorisieren bei quadratischen Ausdrücken besonders effektiv?", a: `Quadratische Polynome lassen sich oft in Linearfaktoren zerlegen: \ \[ ax^2 + bx + c = a(x-x_1)(x-x_2). \\] Gemeinsame Faktoren heben die Unbestimmtheit auf.` }, { q: "Was passiert, wenn nach dem Kürzen ein Pol im Nenner bleibt?", a: `Dann divergiert der Grenzwert: \ \[ \\lim_{x\\to a} \\frac{1}{x-a} = \\pm\\infty. \\] ` }, /* ---------------------- WEITERE KARTEN ZU AUFGABE 6 ---------------------- */ { q: "Warum ist die Supremumsfunktion nicht überall differenzierbar?", a: `Wenn mehrere Komponenten gleichzeitig das Maximum annehmen, ist die Richtung des Anstiegs nicht eindeutig. Differenzierbarkeit erfordert eindeutige lineare Approximation.` }, { q: "Warum ist die komplexe Konjugation eine Isometrie?", a: `Für alle $z,w$ gilt: \ \[ |\\overline{z} - \\overline{w}| = |z-w|. \\] Damit erhält sie Abstände.` }, { q: "Warum ist die Grenzfunktion von $h(x)=\\lim_{n\\to\\infty} \\frac{x^{2n}-1}{x^{2n}+1}$ unstetig?", a: `Weil sie drei verschiedene Funktionswerte besitzt: - $-1$ für $|x|<1$ - $1$ für $|x|>1$ - $0$ für $x=\\pm 1$ Sprünge an $x=\\pm 1$.` }, /* ---------------------- WEITERE KARTEN ZU AUFGABE 7 ---------------------- */ { q: "Wie konstruiert man eine Funktion, die überall unstetig ist?", a: `Beispiel: Dirichlet-Funktion \ \[ f(x)= \\begin{cases} 1, & x\\in\\mathbb{Q},\\\\ 0, & x\\notin\\mathbb{Q}. \\end{cases} \\] Jede Umgebung enthält rationale und irrationale Zahlen.` }, { q: "Wie konstruiert man eine Funktion, die genau an einer Stelle unstetig ist?", a: `Beispiel: \ \[ f(x)= \\begin{cases} x, & x\\neq 0,\\\\ 1, & x=0. \\end{cases} \\] Stetig auf $\\mathbb{R}\\setminus\\{0\\}$, Sprung in 0.` }, /* ---------------------- WEITERE KARTEN ZU AUFGABE 8 ---------------------- */ { q: "Warum ist jede Bijektion zwischen Intervallen streng monoton?", a: `Eine bijektive Abbildung zwischen Intervallen muss entweder streng wachsend oder streng fallend sein. Sonst wäre sie nicht injektiv.` }, { q: "Warum erzwingt Monotonie Stetigkeit einer Bijektion auf Intervallen?", a: `Streng monotone Funktionen auf Intervallen haben keine Sprünge. Sie sind automatisch stetig.` }, /* ---------------------- WEITERE KARTEN ZU AUFGABE 9 ---------------------- */ { q: "Wie zeigt man, dass $f(x)=\\frac{x}{1+|x|}$ surjektiv auf $(-1,1)$ ist?", a: `Für jedes $y\\in(-1,1)$ löst man: \ \[ y = \\frac{x}{1+|x|}. \\] Dies ergibt: \ \[ x = \\frac{y}{1-|y|}. \\] Damit existiert zu jedem $y$ ein $x$.` }, { q: "Warum ist die Umkehrfunktion von $f(x)=\\frac{x}{1+|x|}$ stetig?", a: `Die Umkehrfunktion lautet: \ \[ f^{-1}(y)=\\frac{y}{1-|y|}. \\] Dies ist auf $(-1,1)$ stetig, da der Nenner nie 0 wird.` }
  

];
