window.cards_1_grenzwerte = [
    { 
        q: "Definiere den Grenzwert einer Folge $(a_n)$ gegen $a$.", 
        a: "Eine Folge $(a_n)$ konvergiert gegen $a \\in \\mathbb{R}$, wenn gilt:<br>$\\forall \\varepsilon > 0 \\, \\exists n_0 \\in \\mathbb{N} \\, \\forall n \\ge n_0: |a_n - a| < \\varepsilon$." 
    },
    { 
        q: "Was besagt das Sandwich-Theorem (Einschnürungssatz)?", 
        a: "Gilt $a_n \\le b_n \\le c_n$ für fast alle $n$ und haben $(a_n)$ und $(c_n)$ denselben Grenzwert $L$, dann konvergiert auch $(b_n)$ gegen $L$." 
    },
    { 
        q: "Berechne den Grenzwert: $\\lim_{n \\to \\infty} \\frac{3n^2 - 1}{2n^2 + 5n}$", 
        a: "Durch Ausklammern von $n^2$ im Zähler und Nenner:<br>$\\lim_{n \\to \\infty} \\frac{3 - 1/n^2}{2 + 5/n} = \\frac{3-0}{2+0} = \\frac{3}{2}$." 
    },
    { 
        q: "Wann heißt eine Reihe $\\sum_{n=0}^{\\infty} a_n$ absolut konvergent?", 
        a: "Eine Reihe heißt absolut konvergent, wenn die Reihe der Beträge $\\sum_{n=0}^{\\infty} |a_n|$ konvergiert." 
    },
    { 
        q: "Bestimme den Grenzwert der geometrischen Reihe $\\sum_{n=0}^{\\infty} q^n$ für $|q| < 1$.", 
        a: "Der Grenzwert der unendlichen geometrischen Reihe ist:<br>$\\sum_{n=0}^{\\infty} q^n = \\frac{1}{1 - q}$." 
    },
    { 
        q: "Was ist das Kriterium von Bolzano-Weierstraß?", 
        a: "Jede beschränkte Folge im $\\mathbb{R}^n$ besitzt mindestens einen Häufungspunkt (bzw. eine konvergente Teilfolge)." 
    },
    { 
        q: "Nenne das Wurzelkriterium für eine Reihe $\\sum a_n$.", 
        a: "Gilt $\\limsup_{n \\to \\infty} \\sqrt[n]{|a_n|} = L$, dann ist die Reihe:<br>1. absolut konvergent, falls $L < 1$.<br>2. divergent, falls $L > 1$." 
    }

].map(card => {
    // Dieser Teil korrigiert die Backslashes automatisch für KaTeX
    const fix = str => str.replace(/\\/g, '\\\\');
    return { q: fix(card.q), a: fix(card.a) };
});
