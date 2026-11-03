// Indstillinger for Fake Google.
// Rum kan også vælges i URL'en: /?r=mitrum  (URL'en ryddes med det samme, så tilskueren ikke ser det)
window.FG_CONFIG = {
  // Relayet på Railway. Søgningen skrives til feltet "google" i rummet.
  relay: 'https://relay-production-03f5.up.railway.app',
  room: 'magi',

  // Send også mens de skriver (feltet "googleLive"). Giver et live-peek før de trykker Søg.
  live: true,

  // Valgfrit: ntfy-notifikation (app: ntfy). Skriv et hemmeligt emne-navn, fx 'tollan-x7k2'.
  ntfy: '',
  ntfyTitle: 'Ny besked',

  // Valgfrit: Discord webhook-URL. OBS: står synligt i sidens kildekode, hvis repoet er offentligt.
  discord: '',

  // Profil øverst til højre: null = "Log ind"-knap (bedst på en fremmed telefon), eller et bogstav fx 'D'.
  avatar: null,
  avatarColor: '#4c2ea2',

  // Søgehistorik der vises, når feltet trykkes. Tom = ingen historik (mest troværdigt på en fremmed telefon).
  history: [],

  // Hvor de sendes hen. q tilføjes automatisk.
  google: 'https://www.google.com/search?client=safari&hl=da-dk&q=',
};
