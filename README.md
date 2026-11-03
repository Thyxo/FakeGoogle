# Fake Google (peek)

En side der ligner Googles mobil-forside (mørkt tema). Tilskueren søger, siden sender ordet til relayet og sender dem videre til den ægte `google.com/search?q=…`.

## Brug
1. Åbn siden på tilskuerens telefon (evt. `/?r=mitrum` – URL'en ryddes med det samme).
2. Tryk på søgefeltet, så det ser ud som Googles "Spørg Google"-skærm, og giv telefonen tilbage.
3. De skriver og trykker **Søg** → ordet sendes, og de lander på ægte Google.
4. Du ser ordet på `peek.html` (eller i dine egne apps via relayet).

## Hvad sendes
Til `POST {relay}/r/{rum}`:
- `google: { q, at, via }` – den endelige søgning
- `googleLive: { q, at, done? }` – live mens de skriver (kan slås fra i `config.js`)

Valgfrit: ntfy-emne og Discord-webhook i `config.js`.

## Filer
- `index.html` – den falske Google-side
- `config.js` – relay, rum, ntfy, Discord, avatar, historik
- `peek.html` – din egen peek-skærm (live via Server-Sent Events)
