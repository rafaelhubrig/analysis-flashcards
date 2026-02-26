window.cards_1_grenzwerte = [
    { 
        q: "Definiere den Grenzwert einer Folge $(a_n)$ gegen $a$.", 
        a: "Eine Folge $(a_n)$ konvergiert gegen $a \\in \\mathbb{R}$, wenn gilt:<br>$\\forall \\varepsilon > 0 \\, \\exists n_0 \\in \\mathbb{N} \\, \\forall n \\ge n_0: |a_n - a| < \\varepsilon$." 
    }
];

window.cards_1_grenzwerte = [
{ 
        q: "Definiere den Grenzwert einer Folge $(a_n)$ gegen $a$.", 
        a: "Eine Folge $(a_n)$ konvergiert gegen $a \\in \\mathbb{R}$, wenn gilt:<br>$\\forall \\varepsilon > 0 \\, \\exists n_0 \\in \\mathbb{N} \\, \\forall n \\ge n_0: |a_n - a| < \\varepsilon$." 
},
/* -----------------------------------------------------------
   1) lim_{x→∞} (x − sin x) / (x + sin x)
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: \\\\(\\lim_{x\\to\\infty} \\frac{x-\\sin x}{x+\\sin x}\\\\)",
    a: `
1. Teile Zähler und Nenner durch x:
   \\\

\[
   \\frac{x - \\sin x}{x + \\sin x}
   = \\frac{1 - (\\sin x)/x}{1 + (\\sin x)/x}.
   \\\\]



2. Nutze: \\\\(\\sin x\\\\) ist immer zwischen -1 und 1.

3. Daher gilt:
   \\\

\[
   \\frac{\\sin x}{x} \\to 0 \\quad (x\\to\\infty).
   \\\\]



4. Setze den Grenzwert ein:
   \\\

\[
   \\frac{1 - 0}{1 + 0} = 1.
   \\\\]



**Ergebnis: 1**
`
},

/* -----------------------------------------------------------
   2) lim_{x→∞} ln(x) / (2x)
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: \\\\(\\lim_{x\\to\\infty} \\frac{\\ln x}{2x}\\\\)",
    a: `
1. Logarithmus wächst sehr langsam, viel langsamer als x.

2. Bekannt:
   \\\

\[
   \\lim_{x\\to\\infty} \\frac{\\ln x}{x} = 0.
   \\\\]



3. Faktor 1/2 ändert den Grenzwert nicht wesentlich:
   \\\

\[
   \\frac{\\ln x}{2x} = \\frac{1}{2} \\cdot \\frac{\\ln x}{x}.
   \\\\]



4. Setze Grenzwert ein:
   \\\

\[
   \\frac{1}{2} \\cdot 0 = 0.
   \\\\]



**Ergebnis: 0**
`
},

/* -----------------------------------------------------------
   3) lim_{x→0} (tan x − x) / (x − sin x)
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: \\\\(\\lim_{x\\to 0} \\frac{\\tan x - x}{x - \\sin x}\\\\)",
    a: `
1. Verwende Taylorreihen bis Ordnung x³:
   \\\

\[
   \\tan x = x + \\frac{x^3}{3} + o(x^3),
   \\\\]


   \\\

\[
   \\sin x = x - \\frac{x^3}{6} + o(x^3).
   \\\\]



2. Subtrahiere:
   \\\

\[
   \\tan x - x = \\frac{x^3}{3} + o(x^3).
   \\\\]



3. Berechne:
   \\\

\[
   x - \\sin x = x - \\left(x - \\frac{x^3}{6} + o(x^3)\\right)
   = \\frac{x^3}{6} + o(x^3).
   \\\\]



4. Bilde Quotient:
   \\\

\[
   \\frac{\\frac{x^3}{3}}{\\frac{x^3}{6}} = 2.
   \\\\]



**Ergebnis: 2**
`
},

/* -----------------------------------------------------------
   4) lim sin(ax)/sin(bx)
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: \\\\(\\lim_{x\\to 0} \\frac{\\sin(ax)}{\\sin(bx)}\\\\)",
    a: `
1. Nutze Standardgrenzwert:
   \\\

\[
   \\frac{\\sin(kx)}{kx} \\to 1.
   \\\\]



2. Schreibe um:
   \\\

\[
   \\frac{\\sin(ax)}{\\sin(bx)}
   = \\frac{\\sin(ax)}{ax} \\cdot \\frac{bx}{\\sin(bx)} \\cdot \\frac{a}{b}.
   \\\\]



3. Beide Brüche gehen gegen 1.

4. Übrig bleibt:
   \\\

\[
   \\frac{a}{b}.
   \\\\]



**Ergebnis: a/b**
`
},

/* -----------------------------------------------------------
   5) lim (1 − cos(kx)) / x²
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: \\\\(\\lim_{x\\to 0} \\frac{1-\\cos(kx)}{x^2}\\\\)",
    a: `
1. Taylor für cos:
   \\\

\[
   \\cos(kx) = 1 - \\frac{k^2 x^2}{2} + o(x^2).
   \\\\]



2. Subtrahiere:
   \\\

\[
   1 - \\cos(kx) = \\frac{k^2 x^2}{2} + o(x^2).
   \\\\]



3. Setze in den Quotienten ein:
   \\\

\[
   \\frac{\\frac{k^2 x^2}{2}}{x^2} = \\frac{k^2}{2}.
   \\\\]



**Ergebnis: k²/2**
`
},

/* -----------------------------------------------------------
   6) lim (e^{ax} − 1) / x
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: \\\\(\\lim_{x\\to 0} \\frac{e^{ax}-1}{x}\\\\)",
    a: `
1. Taylor:
   \\\

\[
   e^{ax} = 1 + ax + o(x).
   \\\\]



2. Subtrahiere 1:
   \\\

\[
   e^{ax} - 1 = ax + o(x).
   \\\\]



3. Teile durch x:
   \\\

\[
   \\frac{ax + o(x)}{x} = a + o(1).
   \\\\]



4. Grenzwert:
   **a**
`
},

/* -----------------------------------------------------------
   7) lim ln(1+ax)/x
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: \\\\(\\lim_{x\\to 0} \\frac{\\ln(1+ax)}{x}\\\\)",
    a: `
1. Taylor:
   \\\

\[
   \\ln(1+ax) = ax - \\frac{a^2 x^2}{2} + o(x^2).
   \\\\]



2. Teile durch x:
   \\\

\[
   \\frac{ax - a^2 x^2/2 + o(x^2)}{x}
   = a - \\frac{a^2 x}{2} + o(1).
   \\\\]



3. Grenzwert:
   **a**
`
},

/* -----------------------------------------------------------
   8) lim (sqrt(1+x) − 1) / x
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: \\\\(\\lim_{x\\to 0} \\frac{\\sqrt{1+x}-1}{x}\\\\)",
    a: `
1. Rationalisiere:
   \\\

\[
   \\frac{\\sqrt{1+x}-1}{x}
   = \\frac{(\\sqrt{1+x}-1)(\\sqrt{1+x}+1)}{x(\\sqrt{1+x}+1)}.
   \\\\]



2. Zähler wird:
   \\\

\[
   (1+x) - 1 = x.
   \\\\]



3. Kürze x:
   \\\

\[
   \\frac{1}{\\sqrt{1+x}+1}.
   \\\\]



4. Setze x→0:
   \\\

\[
   \\frac{1}{2}.
   \\\\]



**Ergebnis: 1/2**
`
},

/* -----------------------------------------------------------
   9) lim (1 − cos x) / x
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: \\\\(\\lim_{x\\to 0} \\frac{1-\\cos x}{x}\\\\)",
    a: `
1. Taylor:
   \\\

\[
   1 - \\cos x = \\frac{x^2}{2} + o(x^2).
   \\\\]



2. Setze ein:
   \\\

\[
   \\frac{x^2/2}{x} = \\frac{x}{2}.
   \\\\]



3. Grenzwert:
   **0**
`
},

/* -----------------------------------------------------------
   10) lim tan x / x
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: \\\\(\\lim_{x\\to 0} \\frac{\\tan x}{x}\\\\)",
    a: `
1. Taylor:
   \\\

\[
   \\tan x = x + \\frac{x^3}{3} + o(x^3).
   \\\\]



2. Teile durch x:
   \\\

\[
   1 + \\frac{x^2}{3} + o(x^2).
   \\\\]



3. Grenzwert:
   **1**
`
},

/* -----------------------------------------------------------
   11) lim sin x / x
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: \\\\(\\lim_{x\\to 0} \\frac{\\sin x}{x}\\\\)",
    a: `
1. Taylor:
   \\\

\[
   \\sin x = x - x^3/6 + o(x^3).
   \\\\]



2. Teile durch x:
   \\\

\[
   1 - x^2/6 + o(x^2).
   \\\\]



3. Grenzwert:
   **1**
`
},

/* -----------------------------------------------------------
   12) lim (1 − e^{-x}) / x
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: \\\\(\\lim_{x\\to 0} \\frac{1-e^{-x}}{x}\\\\)",
    a: `
1. Taylor:
   \\\

\[
   e^{-x} = 1 - x + x^2/2 + o(x^2).
   \\\\]



2. Subtrahiere:
   \\\

\[
   1 - e^{-x} = x - x^2/2 + o(x^2).
   \\\\]



3. Teile durch x:
   \\\

\[
   1 - x/2 + o(1).
   \\\\]



4. Grenzwert:
   **1**
`
},

/* -----------------------------------------------------------
   13) lim x (e^{1/x} − 1)
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: \\\\(\\lim_{x\\to\\infty} x(e^{1/x}-1)\\\\)",
    a: `
1. Setze t = 1/x → 0.

2. Dann:
   \\\

\[
   x(e^{1/x}-1) = \\frac{e^t - 1}{t}.
   \\\\]



3. Standardgrenzwert:
   \\\

\[
   \\lim_{t\\to 0} \\frac{e^t - 1}{t} = 1.
   \\\\]



**Ergebnis: 1**
`
},

/* -----------------------------------------------------------
   14) lim (ln(1+x) − x) / x²
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: \\\\(\\lim_{x\\to 0} \\frac{\\ln(1+x)-x}{x^2}\\\\)",
    a: `
1. Taylor:
   \\\

\[
   \\ln(1+x) = x - x^2/2 + o(x^2).
   \\\\]



2. Subtrahiere x:
   \\\

\[
   \\ln(1+x) - x = -x^2/2 + o(x^2).
   \\\\]



3. Teile durch x²:
   \\\

\[
   -\\frac{1}{2} + o(1).
   \\\\]



4. Grenzwert:
   **−1/2**
`
},

/* -----------------------------------------------------------
   15) lim (e^x − 1 − x) / x²
----------------------------------------------------------- */
{
    q: "Berechne Schritt für Schritt: \\\\(\\lim_{x\\to 0} \\frac{e^x - 1 - x}{x^2}\\\\)",
    a: `
1. Taylor:
   \\\

\[
   e^x = 1 + x + x^2/2 + o(x^2).
   \\\\]



2. Subtrahiere 1 und x:
   \\\

\[
   e^x - 1 - x = x^2/2 + o(x^2).
   \\\\]



3. Teile durch x²:
   \\\

\[
   \\frac{1}{2} + o(1).
   \\\\]



4. Grenzwert:
   **1/2**
`
}

];
