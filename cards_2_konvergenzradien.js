window.cards_2_konvergenzradien = [
{
    q: "Wie lautet die Formel für den Konvergenzradius $R$ nach Cauchy-Hadamard?",
    a: `Der Konvergenzradius $R$ einer Potenzreihe $\\sum_{n=0}^{\\infty} a_n (x-x_0)^n$ ist gegeben durch:
    $$R = \\frac{1}{\\limsup_{n\\to\\infty} \\sqrt[n]{|a_n|}}$$
    Dabei gilt:
    - Ist der Limes $\\infty$, so ist $R=0$.
    - Ist der Limes $0$, so ist $R=\\infty$.`
},
{
    q: "Wie lautet die Formel nach dem Quotientenkriterium (Euler)?",
    a: `Falls der Grenzwert existiert, gilt:
    $$R = \\lim_{n\\to\\infty} \\left| \\frac{a_n}{a_{n+1}} \\right|$$
    *Hinweis:* Achte darauf, dass hier $a_n$ oben steht (reziprok zum normalen Quotientenkriterium für Reihen).`
},
{
    q: "Bestimme den Konvergenzradius: $\\sum_{n=1}^{\\infty} \\frac{x^n}{n}$",
    a: `1. Koeffizient $a_n = \\frac{1}{n}$.
    2. Quotientenkriterium:
    $$R = \\lim_{n\\to\\infty} \\left| \\frac{1/n}{1/(n+1)} \\right| = \\lim_{n\\to\\infty} \\frac{n+1}{n} = 1$$
    **Ergebnis: R = 1**`
},
{
    q: "Bestimme den Konvergenzradius: $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$",
    a: `1. Koeffizient $a_n = \\frac{1}{n!}$.
    2. Quotientenkriterium:
    $$R = \\lim_{n\\to\\infty} \\left| \\frac{1/n!}{1/(n+1)!} \\right| = \\lim_{n\\to\\infty} \\frac{(n+1)!}{n!} = \\lim_{n\\to\\infty} (n+1) = \\infty$$
    **Ergebnis: R = ∞ (Konvergiert für alle x)**`
},
{
    q: "Bestimme den Konvergenzradius: $\\sum_{n=0}^{\\infty} 2^n x^n$",
    a: `1. Koeffizient $a_n = 2^n$.
    2. Wurzelkriterium:
    $$\\sqrt[n]{|a_n|} = \\sqrt[n]{2^n} = 2$$
    3. Kehrwert bilden:
    $$R = 1/2$$
    **Ergebnis: R = 1/2**`
},
{
    q: "Bestimme den Konvergenzradius: $\\sum_{n=1}^{\\infty} \\frac{n^n}{n!} x^n$",
    a: `1. Koeffizient $a_n = \\frac{n^n}{n!}$.
    2. Quotientenkriterium:
    $$\\frac{a_n}{a_{n+1}} = \\frac{n^n}{n!} \\cdot \\frac{(n+1)!}{(n+1)^{n+1}} = \\frac{n^n \\cdot (n+1)}{(n+1)^{n+1}} = \\frac{n^n}{(n+1)^n} = \\left(\\frac{n}{n+1}\\right)^n$$
    3. Grenzwert:
    $$R = \\lim_{n\\to\\infty} \\left(1 + \\frac{1}{n}\\right)^{-n} = e^{-1} = 1/e$$
    **Ergebnis: R = 1/e**`
},
{
    q: "Was lässt sich über die Konvergenz am Rand des Konvergenzintervalls ($|x-x_0|=R$) sagen?",
    a: `Am Rand macht die allgemeine Theorie **keine Aussage**.
    - Die Reihe kann dort konvergieren (z.B. alternierende harmonische Reihe).
    - Die Reihe kann dort divergieren (z.B. geometrische Reihe).
    *Der Rand muss immer separat untersucht werden!*`
},
  window.cards_3_konvergenzradien_extra3 = [

/* -----------------------------------------------------------
   C1) Reihe: sum ( n z^n )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum_{n=1}^\\infty n z^n$.",
    a: `
1. Allgemeines Glied: $a_n = n$.
2. Verwende die Formel: $R = 1 / \\limsup |a_n|^{1/n}$.
3. Berechne: $n^{1/n} \\to 1$.
4. Also $\\limsup = 1$.
5. Damit: $R = 1/1 = 1$.
**Ergebnis: 1**
`
},

/* -----------------------------------------------------------
   C2) Reihe: sum ( n! z^n )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum_{n=0}^\\infty n! z^n$.",
    a: `
1. $a_n = n!$.
2. $n!$ wächst schneller als exponentiell.
3. $n!^{1/n} \\approx n/e \\to \\infty$.
4. $\\limsup |a_n|^{1/n} = \\infty$.
5. $R = 1/\\infty = 0$.
**Ergebnis: 0 (Konvergenz nur bei z = 0)**
`
},

/* -----------------------------------------------------------
   C3) Reihe: sum ( z^n / n! )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum_{n=0}^\\infty \\frac{z^n}{n!}$.",
    a: `
1. $a_n = 1/n!$.
2. $(1/n!)^{1/n} = 1 / (n!)^{1/n}$.
3. $(n!)^{1/n} \\approx n/e \\to \\infty$.
4. Also $(1/n!)^{1/n} \\to 0$.
5. $\\limsup = 0 \\to R = 1/0 = \\infty$.
**Ergebnis: ∞ (Konvergenz in der ganzen Ebene)**
`
},

/* -----------------------------------------------------------
   C4) Reihe: sum ( z^{2n} )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum_{n=0}^\\infty z^{2n}$.",
    a: `
1. Schreibe als geometrische Reihe: $(z^2)^n$.
2. Konvergenz für $|z^2| < 1$.
3. Das bedeutet $|z| < 1$.
**Ergebnis: 1**
`
},

/* -----------------------------------------------------------
   C5) Reihe: sum ( (2n)! / n! z^n )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum_{n=0}^\\infty \\frac{(2n)!}{n!} z^n$.",
    a: `
1. $a_n = (2n)! / n!$.
2. Verwende Stirling: $(2n)! \\approx (2n/e)^{2n}$, $n! \\approx (n/e)^n$.
3. Quotient: $a_n \\approx (2n)^{2n} / n^n = 4^n n^n$.
4. $a_n^{1/n} \\approx 4 n$.
5. $\\limsup = \\infty$.
6. $R = 1/\\infty = 0$.
**Ergebnis: 0**
`
},

/* -----------------------------------------------------------
   C6) Reihe: sum ( z^n / sqrt(n) )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum_{n=1}^\\infty \\frac{z^n}{\\sqrt{n}}$.",
    a: `
1. $a_n = 1/\\sqrt{n}$.
2. $a_n^{1/n} = (1/\\sqrt{n})^{1/n} = n^{-1/(2n)}$.
3. Exponent $-1/(2n) \\to 0$.
4. Also $n^{-1/(2n)} \\to 1$.
5. $\\limsup = 1 \\to R = 1$.
**Ergebnis: 1**
`
},

/* -----------------------------------------------------------
   C7) Reihe: sum ( (−1)^n n^3 z^n )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum_{n=0}^\\infty (-1)^n n^3 z^n$.",
    a: `
1. $a_n = (-1)^n n^3$.
2. $|a_n|^{1/n} = (n^3)^{1/n} = n^{3/n}$.
3. $n^{3/n} \\to 1$.
4. $\\limsup = 1 \\to R = 1$.
**Ergebnis: 1**
`
},

/* -----------------------------------------------------------
   C8) Reihe: sum ( (n^n / n!) z^n )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum_{n=1}^\\infty \\frac{n^n}{n!} z^n$.",
    a: `
1. $a_n = n^n / n!$.
2. Verwende Stirling: $n! \\approx (n/e)^n$.
3. Quotient: $a_n \\approx n^n / (n/e)^n = e^n$.
4. $a_n^{1/n} \\approx e$.
5. $\\limsup = e$.
6. $R = 1/e$.
**Ergebnis: 1/e**
`
},


/* -----------------------------------------------------------
   3.1) Reihe: sum ( (3^n/4 − 4^n/3) z^n )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum_{n=0}^\\infty \\left(\\frac{3^n}{4} - \\frac{4^n}{3}\\right) z^n$.",
    a: `
1. Schreibe die Reihe als Differenz zweier Potenzreihen:
   $$\\sum_{n=0}^\\infty \\left(\\frac{3^n}{4} - \\frac{4^n}{3}\\right) z^n = \\frac{1}{4} \\sum_{n=0}^\\infty (3z)^n - \\frac{1}{3} \\sum_{n=0}^\\infty (4z)^n$$

2. Beide sind geometrische Reihen:
   - Erste: Quotient $3z$, Konvergenz für $|3z| < 1 \\Rightarrow |z| < 1/3$.
   - Zweite: Quotient $4z$, Konvergenz für $|4z| < 1 \\Rightarrow |z| < 1/4$.

3. Die ursprüngliche Reihe konvergiert genau dort, wo **beide** Teilreihen konvergieren.

4. Also ist der kleinere Radius maßgeblich ($|z| < 1/4$).

**Ergebnis: R = 1/4**
`
},

/* -----------------------------------------------------------
   3.2) Reihe mit Parametern a ≤ b:
        sum ( (a^n + b^n) z^n )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum_{n=0}^\\infty (a^n + b^n) z^n$ mit $0 < a \\le b$.",
    a: `
1. Schreibe die Reihe als Summe zweier Potenzreihen:
   $$\\sum_{n=0}^\\infty (a^n + b^n) z^n = \\sum_{n=0}^\\infty (a z)^n + \\sum_{n=0}^\\infty (b z)^n$$

2. Beide sind geometrische Reihen:
   - Erste: Quotient $a z$, Konvergenz für $|z| < 1/a$.
   - Zweite: Quotient $b z$, Konvergenz für $|z| < 1/b$.

3. Die Reihe konvergiert genau dort, wo **beide** Teilreihen konvergieren.

4. Da $a \\le b$, gilt $1/b \\le 1/a$. Der Radius ist also $1/b$.

**Ergebnis: R = 1/b**
`
},

/* -----------------------------------------------------------
   3.3) Reihe: sum ( z^{n^2} )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum_{n=0}^\\infty z^{n^2}$.",
    a: `
1. Betrachte die Folge der Koeffizienten $c_m$ in $\\sum_{m=0}^\\infty c_m z^m$:
   - $c_{n^2} = 1$ für alle Quadratzahlen $m=n^2$.
   - $c_m = 0$ für alle anderen $m$.

2. Formel von Cauchy-Hadamard:
   $$R = \\frac{1}{\\limsup_{m\\to\\infty} |c_m|^{1/m}}$$

3. Für $m = n^2$: $|c_m|^{1/m} = 1^{1/n^2} = 1$.
4. Für andere $m$: $|0|^{1/m} = 0$.

5. Der $\\limsup$ dieser Folge ist also $1$.

**Ergebnis: R = 1**
`
},

/* -----------------------------------------------------------
   3.4) Reihe: sum ( ((n!)^2 / (2n)!) z^n )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum_{n=0}^\\infty \\frac{(n!)^2}{(2n)!} z^n$.",
    a: `
1. Allgemeines Glied: $a_n = \\frac{(n!)^2}{(2n)!}$.

2. Nutze das Quotientenkriterium für den Konvergenzradius:
   $$R = \\lim_{n\\to\\infty} \\left| \\frac{a_n}{a_{n+1}} \\right|$$

3. Berechne den Quotienten:
   $$\\frac{a_n}{a_{n+1}} = \\frac{(n!)^2}{(2n)!} \\cdot \\frac{(2n+2)!}{((n+1)!)^2}$$
   $$= \\frac{(n!)^2}{(n! \\cdot (n+1))^2} \\cdot \\frac{(2n)! \\cdot (2n+1) \\cdot (2n+2)}{(2n)!}$$
   $$= \\frac{1}{(n+1)^2} \\cdot (2n+1) \\cdot (2n+2)$$

4. Grenzwert berechnen:
   $$\\lim_{n\\to\\infty} \\frac{4n^2 + 6n + 2}{n^2 + 2n + 1} = 4$$

**Ergebnis: R = 4**
`
},


/* -----------------------------------------------------------
   D1) Reihe: sum ( (n^5 / 2^n) z^n )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum n^5 2^{-n} z^n$.",
    a: `
1. $a_n = n^5 / 2^n$.
2. Berechne $a_n^{1/n} = (n^5)^{1/n} / 2$.
3. $n^{5/n} \\to 1$.
4. Also $a_n^{1/n} \\to 1/2$.
5. $\\limsup = 1/2$.
6. $R = 1 / (1/2) = 2$.
**Ergebnis: 2**
`
},

/* -----------------------------------------------------------
   D2) Reihe: sum ( (3^n / n!) z^n )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum \\frac{3^n}{n!} z^n$.",
    a: `
1. $a_n = 3^n / n!$.
2. $a_n^{1/n} = 3 / (n!)^{1/n}$.
3. $(n!)^{1/n} \\approx n/e \\to \\infty$.
4. Also $a_n^{1/n} \\to 0$.
5. $\\limsup = 0$.
6. $R = 1/0 = \\infty$.
**Ergebnis: ∞ (ganze komplexe Ebene)**
`
},

/* -----------------------------------------------------------
   D3) Reihe: sum ( (2n)! / (n!)^2 z^n )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum \\frac{(2n)!}{(n!)^2} z^n$.",
    a: `
1. $a_n = \\frac{(2n)!}{(n!)^2} = \\binom{2n}{n}$.
2. Asymptotisch: $\\binom{2n}{n} \\approx \\frac{4^n}{\\sqrt{\\pi n}}$.
3. $a_n^{1/n} \\approx (4^n)^{1/n} = 4$.
4. $\\limsup = 4$.
5. $R = 1/4$.
**Ergebnis: 1/4**
`
},

/* -----------------------------------------------------------
   D4) Reihe: sum ( (−1)^n / ln(n+2) z^n )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum (-1)^n / \\ln(n+2) \\, z^n$.",
    a: `
1. $a_n = (-1)^n / \\ln(n+2)$.
2. $|a_n| = 1 / \\ln(n+2)$.
3. $|a_n|^{1/n} = (1 / \\ln(n+2))^{1/n}$.
4. $\\ln(n+2)^{1/n} \\to 1$.
5. Also $|a_n|^{1/n} \\to 1$.
6. $\\limsup = 1 \\to R = 1$.
**Ergebnis: 1**
`
},

/* -----------------------------------------------------------
   D5) Reihe: sum ( (n! / n^n) z^n )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum \\frac{n!}{n^n} z^n$.",
    a: `
1. $a_n = n! / n^n$.
2. Verwende Stirling: $n! \\approx (n/e)^n$.
3. $a_n \\approx (n/e)^n / n^n = e^{-n} = (1/e)^n$.
4. $a_n^{1/n} \\to 1/e$.
5. $\\limsup = 1/e$.
6. $R = 1 / (1/e) = e$.
**Ergebnis: e**
`
},

/* -----------------------------------------------------------
   D6) Reihe: sum ( (ln(n+1))^2 z^n )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum (\\ln(n+1))^2 z^n$.",
    a: `
1. $a_n = (\\ln(n+1))^2$.
2. $a_n^{1/n} = (\\ln(n+1))^{2/n}$.
3. $\\ln(n+1)^{1/n} \\to 1$.
4. Also $(\\ln(n+1))^{2/n} \\to 1^2 = 1$.
5. $\\limsup = 1 \\to R = 1$.
**Ergebnis: 1**
`
},

/* -----------------------------------------------------------
   D7) Reihe: sum ( (n^n / (2n)! ) z^n )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum \\frac{n^n}{(2n)!} z^n$.",
    a: `
1. $a_n = n^n / (2n)!$.
2. Stirling: $(2n)! \\approx (2n/e)^{2n}$.
3. $a_n \\approx n^n / ((2n)^{2n} e^{-2n}) = n^n / (4^n n^{2n} e^{-2n}) = \\frac{1}{(4n)^n e^{-2n}}$.
4. $a_n^{1/n} \\approx \\frac{1}{4n e^{-2}} \\to 0$.
5. $\\limsup = 0 \\to R = \\infty$.
**Ergebnis: ∞**
`
},

/* -----------------------------------------------------------
   D8) Reihe: sum ( z^{n!} )
----------------------------------------------------------- */
{
    q: "Bestimme Schritt für Schritt den Konvergenzradius von $\\sum z^{n!}$.",
    a: `
1. Koeffizientenfolge: $c_m = 1$, falls $m = n!$, sonst $0$.
2. Für $m = n!$: $|c_m|^{1/m} = 1^{1/n!} = 1$.
3. Für andere $m$: $0^{1/m} = 0$.
4. $\\limsup$ der Folge $= 1$.
5. $R = 1/1 = 1$.
**Ergebnis: 1**
`
}

];


