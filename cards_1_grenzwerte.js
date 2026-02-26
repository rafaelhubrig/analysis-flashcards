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
        3. Daher gilt: $$\\frac{\\sin x}{x} \\to 0 \\quad (x\\to\\infty)$$
        4. Setze den Grenzwert ein: $$\\frac{1 - 0}{1 + 0} = 1$$
        **Ergebnis: 1**`
    },
    {
        q: "Berechne Schritt für Schritt: $\\lim_{x\\to\\infty} \\frac{\\ln x}{2x}$",
        a: `1. Logarithmus wächst sehr langsam.
        2. Bekannt: $$\\lim_{x\\to\\infty} \\frac{\\ln x}{x} = 0$$
        3. Faktor 1/2: $$\\frac{\\ln x}{2x} = \\frac{1}{2} \\cdot \\frac{\\ln x}{x}$$
        **Ergebnis: 0**`
    },
    {
        q: "Berechne Schritt für Schritt: $\\lim_{x\\to 0} \\frac{\\tan x - x}{x - \\sin x}$",
        a: `1. Taylorreihen:
        $$\\tan x = x + \\frac{x^3}{3} + o(x^3)$$
        $$\\sin x = x - \\frac{x^3}{6} + o(x^3)$$
        2. Subtrahiere: $\\tan x - x = \\frac{x^3}{3}$
        3. Differenz: $x - \\sin x = \\frac{x^3}{6}$
        4. Quotient: $$\\frac{x^3/3}{x^3/6} = 2$$
        **Ergebnis: 2**`
    }
];
