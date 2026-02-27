window.cards_7_rb1 = [

  { q: "Was bedeutet es, dass die rationalen Zahlen in $\\mathbb{R}$ dicht liegen?",
    a: "`Zu jedem $x<y$ in $\\mathbb{R}$ existiert ein $q\\in\\mathbb{Q}$ mit $x<q<y$.`" },

  { q: "Was bedeutet es, dass die irrationalen Zahlen in $\\mathbb{R}$ dicht liegen?",
    a: "`Zu jedem $x<y$ in $\\mathbb{R}$ existiert ein $r\\in\\mathbb{R}\\\\\\mathbb{Q}$ mit $x<r<y$.`" },

  { q: "Warum besitzt jede endliche Menge in $\\mathbb{R}$ ein Supremum?",
    a: "`Weil jede endliche Menge ein Maximum besitzt und $\\sup A = \\max A$ gilt.`" },

  { q: "Warum besitzt jede nichtleere Menge natürlicher Zahlen ein Infimum?",
    a: "`Weil jede solche Menge ein kleinstes Element hat: $\\inf A = \\min A$.`" },

  { q: "Warum besitzt nicht jede Teilmenge von $\\mathbb{N}$ ein Supremum in $\\mathbb{R}$?",
    a: "`Unbeschränkte Mengen wie $\\{1,2,3,\\dots\\}$ haben kein endliches Supremum.`" },

  { q: "Was ist ein dedekindscher Schnitt?",
    a: "`Eine Teilung von $\\mathbb{Q}$ in zwei nichtleere Mengen $A,B$ mit $A<B$ und ohne größtes Element in $A`. Dadurch wird eine reelle Zahl definiert.`" },

  { q: "Warum kann $\\inf(C) < \\inf(A)\\cdot\\inf(B)$ gelten?",
    a: "`Weil das Produkt zweier unterer Schranken keine untere Schranke der Produktmenge sein muss. Beispiel: $A=B=[-1,1]$.`" },

  { q: "Was ist eine offene Menge in einem metrischen Raum?",
    a: "`Eine Menge $U$ ist offen, wenn zu jedem $x\\in U$ ein $\\varepsilon>0$ existiert mit $B(x,\\varepsilon)\\subseteq U$.`" },

  { q: "Was ist eine abgeschlossene Menge in einem metrischen Raum?",
    a: "`Eine Menge ist abgeschlossen, wenn sie alle ihre Grenzpunkte enthält, äquivalent: wenn ihr Komplement offen ist.`" },

  { q: "Warum sind im diskreten metrischen Raum alle Mengen offen?",
    a: "`Weil jede Einpunktmenge offen ist und jede Menge eine Vereinigung von Einpunktmengen ist.`" },

  { q: "Warum sind im diskreten metrischen Raum alle Mengen abgeschlossen?",
    a: "`Weil das Komplement jeder Menge ebenfalls offen ist.`" },

  { q: "Warum sind in $\\mathbb{R}$ nicht alle offenen Mengen Intervalle?",
    a: "`Offene Mengen können beliebige Vereinigungen offener Intervalle sein, z.B. $(0,1)\\cup(2,3)$.`" },

  { q: "Warum gilt im Allgemeinen $\\overline{\\mathrm{int}(A)} \\neq \\overline{A}$?",
    a: "`Weil $A$ ein leeres Inneres haben kann, aber einen nichtleeren Abschluss, z.B. $A=\\mathbb{Q}$.`" },

  { q: "Warum ist die Menge $\\{x: d(x,p)>r\\}$ offen?",
    a: "`Sie ist das Komplement der abgeschlossenen Kugel $\\overline{B}(p,r)$.`" },

  { q: "Wie erkennt man, ob $x$ im Abschluss von $A$ liegt?",
    a: "`Genau dann, wenn für alle $\\varepsilon>0$ gilt: $B(x,\\varepsilon)\\cap A\\neq\\emptyset$, äquivalent: $\\inf_{a\\in A} d(x,a)=0$.`" },

  { q: "Warum ist $\\inf A$ der kleinstmögliche Grenzwert einer Folge aus $A$?",
    a: "`Man kann eine Folge wählen, die die unteren Schranken immer besser approximiert.`" },

  { q: "Warum ist $|z_k|\\to 0$ äquivalent zu $z_k\\to 0$?",
    a: "`Weil $|z_k|$ die Norm im euklidischen Raum $\\mathbb{C}\\cong\\mathbb{R}^2$ ist.`" },

  { q: "Warum konvergiert die Folge der konjugierten Zahlen, wenn $(z_k)$ konvergiert?",
    a: "`Die Konjugation ist eine stetige Abbildung: $\\overline{z_k}\\to\\overline{z}$.`" },

  { q: "Warum ist $\\limsup x_n$ nicht das größte Folgenglied?",
    a: "`$\\limsup$ ist der Grenzwert der Supremumsfolge der Endstücke, nicht das Maximum der Folge.`" },

  { q: "Warum besitzt jede monotone Folge einen Grenzwert oder divergiert bestimmt?",
    a: "`Monotonie + Beschränktheitssatz: monotone beschränkte Folgen konvergieren, unbeschränkte divergieren.`" },

  { q: "Warum ist nicht jede konvergente Folge monoton?",
    a: "`Konvergenz erlaubt Oszillation, solange die Werte sich annähern, z.B. $(-1)^n/n$.`" },

  { q: "Wann kann der Rand einer Menge endlich sein?",
    a: "`Wenn die Menge offen oder abgeschlossen und trivial ist, z.B. $A=\\emptyset$ oder $A=\\mathbb{R}^2$.`" },

  { q: "Warum sind offene Bälle nicht immer zusammenhängend?",
    a: "`In diskreten Räumen sind offene Bälle Einpunktmengen und damit nicht zusammenhängend.`" },

  { q: "Warum ist die Vereinigung zweier zusammenhängender Mengen mit Schnitt zusammenhängend?",
    a: "`Weil jeder Punkt durch Wege innerhalb der beiden Mengen verbunden bleibt.`" },

  { q: "Warum ist ein Raum genau dann zusammenhängend, wenn nur $X$ und $\\emptyset$ offen und abgeschlossen sind?",
    a: "`Weil jede echte Zerlegung in zwei offene Mengen eine Trennung wäre.`" },

  { q: "Warum ist der Durchschnitt zweier zusammenhängender Mengen nicht immer zusammenhängend?",
    a: "`Der Schnitt kann aus mehreren Komponenten bestehen, z.B. zwei überlappende Kreise.`" },

  { q: "Wie berechnet man den Betrag einer komplexen Zahl $z=a+bi$?",
    a: "`$|z| = \\\\sqrt{a^2 + b^2}$.`" },

  { q: "Wie schreibt man eine komplexe Zahl $z$ in trigonometrischer Form?",
    a: "`$z = r(\\cos\\varphi + i\\sin\\varphi)$ mit $r=|z|$ und $\\varphi=\\arg(z)$.`" },

  { q: "Warum ist eine Lösung eines Polynoms nicht automatisch Lösung von $z(a_n z^{n-1}+\\dots+a_1)$?",
    a: "`Weil letzterer Ausdruck äquivalent zu $z\\cdot p'(z)$ ist und nicht zu $p(z)$.`" },

  { q: "Warum wächst $2^n$ schneller als jedes Polynom?",
    a: "`Exponentielles Wachstum dominiert jedes Potenzwachstum: $\\lim_{n\\to\\infty} \\frac{n^k}{2^n}=0$.`" },

  { q: "Warum wächst $n!$ schneller als jedes Polynom?",
    a: "`Stirling-Formel: $n!\\sim n^n e^{-n}\\sqrt{2\\pi n}$, also schneller als $n^k$.`" },

  { q: "Warum ist $(2/5)^n$ eine Nullfolge?",
    a: "`Weil $|2/5|<1$ und damit eine geometrische Folge gegen 0 konvergiert.`" },

  { q: "Warum ist $2^n/n^{20}$ keine Nullfolge?",
    a: "`Exponentielles Wachstum überholt jedes Polynom: Quotient geht gegen $\\infty$.`" },

  { q: "Warum ist $50n/n!$ eine Nullfolge?",
    a: "`Fakultät wächst schneller als linear: $n!/n\\to\\infty$.`" },


  { q: "Gibt es zwischen zwei verschiedenen reellen Zahlen immer eine rationale Zahl?", 
    a: "`Ja. Zwischen beliebigen $x<y$ existiert stets ein $q\\in\\mathbb{Q}$.`" },

  { q: "Gibt es zwischen zwei verschiedenen reellen Zahlen immer eine irrationale Zahl?", 
    a: "`Ja. Zwischen beliebigen $x<y$ existiert stets ein $r\\in\\mathbb{R}\\\\\\mathbb{Q}$.`" },

  { q: "Ist die Zahl $x = 0.123456789101112\\dots$ rational?", 
    a: "`Nein. Die Champernowne-Zahl ist irrational.`" },

  { q: "Besitzt jede nichtleere endliche Teilmenge von $\\mathbb{R}$ ein Supremum?", 
    a: "`Ja. Für endliche Mengen ist $\\sup A = \\max A$.`" },

  { q: "Besitzt jede nichtleere Teilmenge von $\\mathbb{N}$ ein Infimum in $\\mathbb{R}$?", 
    a: "`Ja. Jede nichtleere Menge natürlicher Zahlen hat ein kleinstes Element.`" },

  { q: "Besitzt jede nichtleere Teilmenge von $\\mathbb{N}$ ein Supremum in $\\mathbb{R}$?", 
    a: "`Nein. Unbeschränkte Mengen wie $\\mathbb{N}$ selbst haben kein endliches Supremum.`" },

  { q: "Ist das Dedekind-Axiom äquivalent dazu, dass jede nichtleere nach unten beschränkte Teilmenge von $\\mathbb{R}$ ein Infimum besitzt?", 
    a: "`Ja. Beide Aussagen charakterisieren die Vollständigkeit der reellen Zahlen.`" },

  { q: "Kann für beschränkte Mengen $A,B\\subset\\mathbb{R}$ gelten: $\\inf C < \\inf A\\cdot\\inf B$ für $C=\\{ab:a\\in A,b\\in B\\}$?", 
    a: "`Ja. Beispiel: $A=B=[-1,1]$. Dann ist $\\inf C=-1 < 1\\cdot1$.`" },

  { q: "Ist jede Teilmenge eines metrischen Raumes entweder offen oder abgeschlossen?", 
    a: "`Nein. Viele Mengen sind weder offen noch abgeschlossen.`" },

  { q: "Ist in einem diskreten metrischen Raum jede Teilmenge offen?", 
    a: "`Ja. Jede Einpunktmenge ist offen, also auch jede Vereinigung davon.`" },

  { q: "Ist in einem diskreten metrischen Raum jede Teilmenge abgeschlossen?", 
    a: "`Ja. Komplement jeder offenen Menge ist offen, also ist jede Menge abgeschlossen.`" },

  { q: "Sind in $(\\mathbb{R},d)$ mit Standardmetrik die offenen Mengen genau die offenen Intervalle?", 
    a: "`Nein. Offene Mengen sind beliebige Vereinigungen offener Intervalle, nicht nur Intervalle selbst.`" },

  { q: "Gilt für jede Menge $A\\subset\\mathbb{R}$: $\\overline{\\mathrm{int}(A)} = \\overline{A}$?", 
    a: "`Nein. Beispiel: $A=\\mathbb{Q}$ hat leeres Inneres, aber nichtleeren Abschluss.`" },

  { q: "Ist die Menge $\\{x: d(x,p)>r\\}$ in einem metrischen Raum offen?", 
    a: "`Ja. Sie ist das Komplement der abgeschlossenen Kugel $\\overline{B}(p,r)$.`" },

  { q: "Gilt: $x$ liegt im Abschluss von $A$ genau dann, wenn $\\inf_{a\\in A} d(x,a)=0$?", 
    a: "`Ja. Das ist eine Standardcharakterisierung des Abschlusses in metrischen Räumen.`" },

  { q: "Ist $\\inf A$ stets der kleinstmögliche Grenzwert einer Folge aus $A$?", 
    a: "`Ja. Es existiert immer eine Folge $(a_n)$ in $A$ mit $a_n\\to\\inf A$.`" },

  { q: "Konvergiert eine komplexe Folge $(z_k)$ genau dann gegen 0, wenn $|z_k|\\to 0$?", 
    a: "`Ja. Betragskonvergenz ist äquivalent zur Konvergenz gegen 0.`" },

  { q: "Konvergiert aus $(z_k)$ auch die Folge der konjugierten Zahlen $(\\overline{z_k})$?", 
    a: "`Ja. Die Konjugation ist stetig: $z_k\\to z \\Rightarrow \\overline{z_k}\\to\\overline{z}$.`" },

  { q: "Ist für eine beschränkte Folge $(x_n)$ das $\\limsup x_n$ das größte Folgenglied?", 
    a: "`Nein. $\\limsup$ ist der Grenzwert der Supremumsfolge, nicht das Maximum.`" },

  { q: "Besitzt jede monotone Folge einen Grenzwert oder divergiert bestimmt?", 
    a: "`Ja. Monotone Folgen sind immer konvergent oder divergieren gegen $\\pm\\infty$.`" },

  { q: "Ist jede konvergente Folge monoton?", 
    a: "`Nein. Beispiel: $(-1)^n/n$ konvergiert, ist aber nicht monoton.`" },

  { q: "Kann der Rand einer Menge $A\\subset\\mathbb{R}^2$ endlich sein?", 
    a: "`Ja. Beispiel: $A$ ist eine offene oder abgeschlossene Kugel: Rand ist ein Kreis (nicht endlich), aber z.B. $A=\\emptyset$ oder $A=\\mathbb{R}^2$ hat Rand $\\emptyset$ (endlich).`" },

  { q: "Sind alle offenen Bälle in metrischen Räumen zusammenhängend?", 
    a: "`Nein. In diskreten Räumen sind offene Bälle Einpunktmengen und damit nicht zusammenhängend.`" },

  { q: "Ist die Vereinigung zweier zusammenhängender Mengen mit nichtleerem Schnitt zusammenhängend?", 
    a: "`Ja. Das ist ein Standardresultat der Topologie.`" },

  { q: "Ist ein metrischer Raum genau dann zusammenhängend, wenn nur $X$ und $\\emptyset$ offen und abgeschlossen sind?", 
    a: "`Ja. Das ist die Charakterisierung von Zusammenhang über zusammenhängende Komponenten.`" },

  { q: "Ist der Durchschnitt zweier zusammenhängender Mengen in $\\mathbb{R}^n$ stets zusammenhängend?", 
    a: "`Nein. Beispiel: zwei überlappende Kreise, deren Schnitt zwei getrennte Bereiche bildet.`" },

  { q: "Berechne Realteil, Imaginärteil und Betrag von $z_1 = \\frac{10+5i}{2-i}$.", 
    a: "`1. Multipliziere mit dem konjugierten Nenner: \\\\n(10+5i)(2+i)/(2^2+1^2) \\\\n2. Ergebnis: $z_1 = 5 + 5i$ \\\\n3. Betrag: $|z_1| = \\sqrt{5^2 + 5^2} = 5\\sqrt{2}$`" },

  { q: "Berechne Realteil, Imaginärteil und Betrag von $z_2 = \\frac{29+2i}{1-2i}$.", 
    a: "`1. Multipliziere mit dem konjugierten Nenner: (29+2i)(1+2i)/5 \\\\n2. Ergebnis: $z_2 = 13 + 12i$ \\\\n3. Betrag: $|z_2| = \\sqrt{13^2 + 12^2} = 5\\sqrt{13}$`" },

  { q: "Berechne Realteil, Imaginärteil und Betrag von $z_3 = \\frac{34+12i}{2+3i}$.", 
    a: "`1. Multipliziere mit dem konjugierten Nenner: (34+12i)(2-3i)/13 \\\\n2. Ergebnis: $z_3 = 2 + 12i$ \\\\n3. Betrag: $|z_3| = \\sqrt{2^2 + 12^2} = 2\\sqrt{37}$`" },

  { q: "Welche trigonometrische Form gehört zu $z = 2+2i$?", 
    a: "`$z = 2\\sqrt{2}(\\cos \\frac{\\pi}{4} + i\\sin \\frac{\\pi}{4})$`" },

  { q: "Wenn $z_0$ eine Lösung eines Polynoms $a_n z^n + \\dots + a_0 = 0$ ist, ist es dann auch eine Lösung von $z(a_n z^{n-1} + \\dots + a_1)$?", 
    a: "`Nein. Die zweite Gleichung ist nicht äquivalent zur ersten.`" },

  { q: "Welche Funktion ist für große $n$ größer: $2^n$ oder $n^{10000}$?", 
    a: "`$2^n$ wächst schneller als jedes Polynom.`" },

  { q: "Welche Funktion ist für große $n$ größer: $n^{10000}$ oder $n!$?", 
    a: "`$n!$ wächst schneller als jedes Polynom.`" },

  { q: "Ist die Folge $\\frac{2^n}{5^n}$ eine Nullfolge?", 
    a: "`Ja. $\\left(\\frac{2}{5}\\right)^n \\to 0$.`" },

  { q: "Ist die Folge $\\frac{2^n}{n^{20}}$ eine Nullfolge?", 
    a: "`Nein. Exponentialfunktion wächst schneller als jedes Polynom.`" },

  { q: "Ist die Folge $\\frac{50n}{n!}$ eine Nullfolge?", 
    a: "`Ja. Fakultät wächst schneller als linear.`" }



];
