window.cards_1_grenzwerte = [
    { 
        q: "Definiere den Grenzwert einer Folge $(a_n)$ gegen $a$.", 
        a: "Eine Folge $(a_n)$ konvergiert gegen $a \\in \\mathbb{R}$, wenn gilt:<br>$\\forall \\varepsilon > 0 \\, \\exists n_0 \\in \\mathbb{N} \\, \\forall n \\ge n_0: |a_n - a| < \\varepsilon$." 
    },

{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to\\infty} \\frac{x-\\sin x}{x+\\sin x}$",
    a: `1. Teile Zähler und Nenner durch x:
    $$\\frac{x - \\sin x}{x + \\sin x} = \\frac{1 - (\\sin x)/x}{1 + (\\sin x)/x}$$
    2. Nutze: $\\sin x$ ist immer zwischen -1 und 1.
    3. Daher gilt: $\\frac{\\sin x}{x} \\to 0$ für $x\\to\\infty$.
    4. Setze den Grenzwert ein: $\\frac{1 - 0}{1 + 0} = 1$.
    **Ergebnis: 1**`
},
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to\\infty} \\frac{\\ln x}{2x}$",
    a: `1. Logarithmus wächst sehr langsam, viel langsamer als x.
    2. Bekannt: $\\lim_{x\\to\\infty} \\frac{\\ln x}{x} = 0$.
    3. Faktor 1/2 ändert den Grenzwert nicht wesentlich:
    $$\\frac{\\ln x}{2x} = \\frac{1}{2} \\cdot \\frac{\\ln x}{x}$$
    4. Setze Grenzwert ein: $\\frac{1}{2} \\cdot 0 = 0$.
    **Ergebnis: 0**`
},
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\tan x - x}{x - \\sin x}$",
    a: `1. Taylorreihen bis Ordnung $x^3$:
    $$\\tan x = x + \\frac{x^3}{3} + o(x^3)$$
    $$\\sin x = x - \\frac{x^3}{6} + o(x^3)$$
    2. Subtrahiere: $\\tan x - x = \\frac{x^3}{3}$.
    3. Berechne: $x - \\sin x = \\frac{x^3}{6}$.
    4. Bilde Quotient: $\\frac{x^3/3}{x^3/6} = 2$.
    **Ergebnis: 2**`
},
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\sin(ax)}{\\sin(bx)}$",
    a: `1. Nutze Standardgrenzwert: $\\frac{\\sin(kx)}{kx} \\to 1$.
    2. Schreibe um:
    $$\\frac{\\sin(ax)}{\\sin(bx)} = \\frac{\\sin(ax)}{ax} \\cdot \\frac{bx}{\\sin(bx)} \\cdot \\frac{a}{b}$$
    3. Beide Brüche gehen gegen 1.
    4. Übrig bleibt: $a/b$.
    **Ergebnis: a/b**`
},
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{1-\\cos(kx)}{x^2}$",
    a: `1. Taylor für cos: $\\cos(kx) = 1 - \\frac{k^2 x^2}{2} + o(x^2)$.
    2. Subtrahiere: $1 - \\cos(kx) = \\frac{k^2 x^2}{2}$.
    3. Setze in den Quotienten ein: $\\frac{k^2 x^2 / 2}{x^2} = \\frac{k^2}{2}$.
    **Ergebnis: k²/2**`
},
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{e^{ax}-1}{x}$",
    a: `1. Taylor: $e^{ax} = 1 + ax + o(x)$.
    2. Subtrahiere 1: $e^{ax} - 1 = ax$.
    3. Teile durch x: $\\frac{ax}{x} = a$.
    **Ergebnis: a**`
},
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\ln(1+ax)}{x}$",
    a: `1. Taylor: $\\ln(1+ax) = ax - \\frac{a^2 x^2}{2} + o(x^2)$.
    2. Teile durch x: $\\frac{ax - a^2 x^2/2}{x} = a - \\frac{a^2 x}{2}$.
    3. Für $x\\to 0$ bleibt $a$ übrig.
    **Ergebnis: a**`
},
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\sqrt{1+x}-1}{x}$",
    a: `1. Rationalisiere:
    $$\\frac{\\sqrt{1+x}-1}{x} = \\frac{(\\sqrt{1+x}-1)(\\sqrt{1+x}+1)}{x(\\sqrt{1+x}+1)}$$
    2. Zähler wird: $(1+x) - 1 = x$.
    3. Kürze x: $\\frac{1}{\\sqrt{1+x}+1}$.
    4. Setze $x\\to 0$: $\\frac{1}{1+1} = 1/2$.
    **Ergebnis: 1/2**`
},
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{1-\\cos x}{x}$",
    a: `1. Taylor: $1 - \\cos x = \\frac{x^2}{2} + o(x^2)$.
    2. Setze ein: $\\frac{x^2/2}{x} = \\frac{x}{2}$.
    3. Für $x\\to 0$ ergibt das 0.
    **Ergebnis: 0**`
},
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\tan x}{x}$",
    a: `1. Taylor: $\\tan x = x + \\frac{x^3}{3}$.
    2. Teile durch x: $1 + \\frac{x^2}{3}$.
    3. Für $x\\to 0$ ergibt das 1.
    **Ergebnis: 1**`
},
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\sin x}{x}$",
    a: `1. Bekannter Standardgrenzwert.
    2. Taylor-Begründung: $\\frac{x - x^3/6}{x} = 1 - x^2/6$.
    3. Für $x\\to 0$ ergibt das 1.
    **Ergebnis: 1**`
},
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{1-e^{-x}}{x}$",
    a: `1. Taylor: $e^{-x} = 1 - x + x^2/2$.
    2. Subtrahiere: $1 - (1 - x) = x$.
    3. Teile durch x: $x/x = 1$.
    **Ergebnis: 1**`
},
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to\\infty} x(e^{1/x}-1)$",
    a: `1. Setze $t = 1/x$. Für $x\\to\\infty$ gilt $t\\to 0$.
    2. Ausdruck wird zu: $\\frac{e^t - 1}{t}$.
    3. Dies ist der Standardgrenzwert 1.
    **Ergebnis: 1**`
},
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\ln(1+x)-x}{x^2}$",
    a: `1. Taylor: $\\ln(1+x) = x - x^2/2 + o(x^2)$.
    2. Subtrahiere x: $-x^2/2$.
    3. Teile durch $x^2$: $-1/2$.
    **Ergebnis: -1/2**`
},
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{e^x - 1 - x}{x^2}$",
    a: `1. Taylor: $e^x = 1 + x + x^2/2 + o(x^2)$.
    2. Subtrahiere 1 und x: $x^2/2$.
    3. Teile durch $x^2$: $1/2$.
    **Ergebnis: 1/2**`
},

/* -----------------------------------------------------------
   A1) lim (e^{2x} − 1 − 2x) / x²
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{e^{2x} - 1 - 2x}{x^2}$",
    a: `
1. Taylor: $e^{2x} = 1 + 2x + \\frac{(2x)^2}{2} + o(x^2) = 1 + 2x + 2x^2 + o(x^2)$.
2. Subtrahiere 1 und 2x: $2x^2 + o(x^2)$.
3. Teile durch $x^2$: $2 + o(1)$.
4. Grenzwert: **2**.
`
},

/* -----------------------------------------------------------
   A2) lim (sin x − x + x³/6) / x⁵
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\sin x - x + x^3/6}{x^5}$",
    a: `
1. Taylor: $\\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} + o(x^5)$.
2. Setze ein: $x - \\frac{x^3}{6} + \\frac{x^5}{120} - x + \\frac{x^3}{6} = \\frac{x^5}{120} + o(x^5)$.
3. Teile durch $x^5$: $\\frac{1}{120} + o(1)$.
4. Grenzwert: **1/120**.
`
},

/* -----------------------------------------------------------
   A3) lim (1 − cos x − x²/2) / x⁴
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{1 - \\cos x - x^2/2}{x^4}$",
    a: `
1. Taylor: $\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$.
2. Subtrahiere: $1 - (1 - \\frac{x^2}{2} + \\frac{x^4}{24}) - \\frac{x^2}{2} = \\frac{x^4}{24} + o(x^4)$.
3. Teile durch $x^4$: $\\frac{1}{24} + o(1)$.
4. Grenzwert: **1/24**.
`
},

/* -----------------------------------------------------------
   A4) lim (ln(1+x) − x + x²/2) / x³
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\ln(1+x) - x + x^2/2}{x^3}$",
    a: `
1. Taylor: $\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} + o(x^3)$.
2. Setze ein: $x - \\frac{x^2}{2} + \\frac{x^3}{3} - x + \\frac{x^2}{2} = \\frac{x^3}{3} + o(x^3)$.
3. Teile durch $x^3$: $\\frac{1}{3} + o(1)$.
4. Grenzwert: **1/3**.
`
},

/* -----------------------------------------------------------
   A5) lim (tan x − sin x) / x³
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\tan x - \\sin x}{x^3}$",
    a: `
1. Taylor: $\\tan x = x + \\frac{x^3}{3} + o(x^3)$, $\\sin x = x - \\frac{x^3}{6} + o(x^3)$.
2. Subtrahiere: $x + \\frac{x^3}{3} - (x - \\frac{x^3}{6}) = \\frac{x^3}{3} + \\frac{x^3}{6} = \\frac{x^3}{2}$.
3. Teile durch $x^3$: $\\frac{1}{2}$.
4. Grenzwert: **1/2**.
`
},

/* -----------------------------------------------------------
   A6) lim (e^x − cos x) / x
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{e^x - \\cos x}{x}$",
    a: `
1. Taylor: $e^x = 1 + x + \\frac{x^2}{2} + o(x^2)$, $\\cos x = 1 - \\frac{x^2}{2} + o(x^2)$.
2. Subtrahiere: $1 + x + \\frac{x^2}{2} - (1 - \\frac{x^2}{2}) = x + x^2 + o(x^2)$.
3. Teile durch $x$: $1 + x + o(x)$.
4. Grenzwert: **1**.
`
},

/* -----------------------------------------------------------
   A7) lim (sqrt{1+2x} − sqrt{1+x}) / x
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\sqrt{1+2x} - \\sqrt{1+x}}{x}$",
    a: `
1. Rationalisiere:
$$\\frac{\\sqrt{1+2x} - \\sqrt{1+x}}{x} = \\frac{(1+2x) - (1+x)}{x(\\sqrt{1+2x} + \\sqrt{1+x})}$$
2. Zähler: $x$.
3. Kürze $x$:
$$\\frac{1}{\\sqrt{1+2x} + \\sqrt{1+x}}$$
4. Setze $x \\to 0$:
$$\\frac{1}{1+1} = 1/2$$
**Ergebnis: 1/2**
`
},

/* -----------------------------------------------------------
   A8) lim (arctan x − x) / x³
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\arctan x - x}{x^3}$",
    a: `
1. Taylor: $\\arctan x = x - \\frac{x^3}{3} + o(x^3)$.
2. Subtrahiere: $x - \\frac{x^3}{3} - x = -\\frac{x^3}{3}$.
3. Teile durch $x^3$: $-1/3$.
4. Grenzwert: **−1/3**.
`
},

/* -----------------------------------------------------------
   B1) lim (e^{3x} − 1 − 3x − (9/2)x²) / x³
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{e^{3x} - 1 - 3x - \\frac{9}{2}x^2}{x^3}$",
    a: `
1. Taylor: $e^{3x} = 1 + 3x + \\frac{9}{2}x^2 + \\frac{9}{2}x^3 + o(x^3)$.
2. Subtrahiere $1, 3x, \\frac{9}{2}x^2$ → übrig bleibt $\\frac{9}{2}x^3 + o(x^3)$.
3. Teile durch $x^3$ → $\\frac{9}{2} + o(1)$.
4. Grenzwert: **9/2**.
`
},

/* -----------------------------------------------------------
   B2) lim (ln(1+2x) − 2x + 2x²) / x³
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\ln(1+2x) - 2x + 2x^2}{x^3}$",
    a: `
1. Taylor: $\\ln(1+2x) = 2x - 2x^2 + \\frac{8}{3}x^3 + o(x^3)$.
2. Setze ein: $2x - 2x^2 + \\frac{8}{3}x^3 - 2x + 2x^2 = \\frac{8}{3}x^3 + o(x^3)$.
3. Teile durch $x^3$ → $8/3 + o(1)$.
4. Grenzwert: **8/3**.
`
},

/* -----------------------------------------------------------
   B3) lim (sqrt{1+x} − 1 − x/2 + x²/8) / x³
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\sqrt{1+x} - 1 - x/2 + x^2/8}{x^3}$",
    a: `
1. Taylor: $\\sqrt{1+x} = 1 + \\frac{x}{2} - \\frac{x^2}{8} + \\frac{x^3}{16} + o(x^3)$.
2. Subtrahiere $1, x/2, -x^2/8$ → übrig bleibt $x^3/16 + o(x^3)$.
3. Teile durch $x^3$ → $1/16 + o(1)$.
4. Grenzwert: **1/16**.
`
},

/* -----------------------------------------------------------
   B4) lim (sin(2x) − 2x + (2x)³/6) / x⁵
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\sin(2x) - 2x + \\frac{(2x)^3}{6}}{x^5}$",
    a: `
1. Taylor: $\\sin(2x) = 2x - \\frac{(2x)^3}{6} + \\frac{(2x)^5}{120} + o(x^5)$.
2. Setze ein: $2x - \\frac{8x^3}{6} + \\frac{32x^5}{120} - 2x + \\frac{8x^3}{6} = \\frac{32}{120}x^5 + o(x^5)$.
3. Vereinfache: $32/120 = 4/15$.
4. Teile durch $x^5$ → $4/15$.
5. Grenzwert: **4/15**.
`
},

/* -----------------------------------------------------------
   B5) lim (tan(3x) − 3x − 9x³/3) / x⁵
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\tan(3x) - 3x - 9x^3/3}{x^5}$",
    a: `
1. Taylor: $\\tan(3x) = 3x + 9x^3 + \\frac{243}{5}x^5 + o(x^5)$.
2. Subtrahiere $3x$ und $9x^3$ → übrig bleibt $\\frac{243}{5}x^5 + o(x^5)$.
3. Teile durch $x^5$ → $243/5$.
4. Grenzwert: **243/5**.
`
},

/* -----------------------------------------------------------
   B6) lim (arcsin x − x − x³/6) / x⁵
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\arcsin x - x - x^3/6}{x^5}$",
    a: `
1. Taylor: $\\arcsin x = x + \\frac{x^3}{6} + \\frac{3x^5}{40} + o(x^5)$.
2. Subtrahiere $x$ und $x^3/6$ → übrig bleibt $\\frac{3x^5}{40} + o(x^5)$.
3. Teile durch $x^5$ → $3/40$.
4. Grenzwert: **3/40**.
`
},

/* -----------------------------------------------------------
   B7) lim (e^{x} − cos x − x sin x) / x²
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{e^x - \\cos x - x\\sin x}{x^2}$",
    a: `
1. Taylor-Entwicklungen:
   $e^x = 1 + x + \\frac{x^2}{2} + o(x^2)$,
   $\\cos x = 1 - \\frac{x^2}{2} + o(x^2)$,
   $\\sin x = x - \\frac{x^3}{6} + o(x^3)$.

2. Setze ein:
   $e^x - \\cos x - x \\sin x$
   $= (1 + x + \\frac{x^2}{2}) - (1 - \\frac{x^2}{2}) - x(x - \\frac{x^3}{6})$
   $= x + x^2 + o(x^2) - (x^2 - \\frac{x^4}{6}) = x + o(x)$.

3. Teile durch $x^2$ → $\\frac{x + o(x)}{x^2} = \\frac{1}{x} + o(\\frac{1}{x})$.

4. Da der Term $1/x$ für $x \\to 0$ gegen unendlich geht, existiert der Grenzwert nicht.

**Ergebnis: Divergent ($\\infty$)**
`
},

/* -----------------------------------------------------------
   B8) lim (ln(1+x) − x + x²/2 − x³/3) / x⁴
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\ln(1+x) - x + \\frac{x^2}{2} - \\frac{x^3}{3}}{x^4}$",
    a: `
1. Taylor: $\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + o(x^4)$.
2. Setze ein: $x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} - x + \\frac{x^2}{2} - \\frac{x^3}{3} = -\\frac{x^4}{4} + o(x^4)$.
3. Teile durch $x^4$ → $-1/4 + o(1)$.
4. Grenzwert: **-1/4**.
`
}
];

