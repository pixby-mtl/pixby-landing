/* Pixby Audit — English presentation layer (?lang=en).
   PURE PRESENTATION: translates visible strings after the page's own scripts
   render them. It never touches the Audit's data, calculations, events,
   payloads (GHL), Calendly or branching logic — those keep running on the
   original French strings. Loaded only when ?lang=en or when the visitor
   clicks the EN switch. */
(function(){
  'use strict';
  if (window.__auditI18n) return;
  var D = {
 "exact": {
  "Audit gratuit · Données réelles Google": "Free Audit · Real Google data",
  "Tes Google Ads peuvent-ils te rapporter des": "Can your Google Ads bring you",
  "clients rentables": "profitable customers",
  "Réponds à quelques questions. On regarde tes vraies données de marché au Québec — gratuit.": "Answer a few questions. We look at your real market data in Quebec — free.",
  "← Retour": "← Back",
  "Fais-tu déjà de la publicité Google Ads ?": "Are you already running Google Ads?",
  "Je fais déjà Google Ads": "I already run Google Ads",
  "Je veux savoir si ça vaut la peine": "I want to know if it's worth it",
  "Prédiagnostic gratuit · Aucun accès au compte à cette étape": "Free pre-diagnostic · No account access at this step",
  "Sais-tu combien te coûte un client signé grâce à Google Ads ?": "Do you know what a signed customer from Google Ads costs you?",
  "Fais le point sur ce que tu mesures. Puis vérifie avec Alexander les chiffres et les priorités de ton compte.": "Take stock of what you measure. Then review the numbers and priorities of your account with Alexander.",
  "Continuer →": "Continue →",
  "Avant d'investir, vérifie la demande et le coût maximum d'un client rentable.": "Before you invest, check the demand and the maximum cost of a profitable customer.",
  "Quelques questions sur ton métier et ta zone, puis on regarde ce que Google montre vraiment — sans promesse de rentabilité tant que les chiffres ne sont pas validés.": "A few questions about your trade and area, then we look at what Google really shows — with no promise of profitability until the numbers are validated.",
  "Ton métier": "Your trade",
  "Ta région": "Your region",
  "Sert à préparer ton dossier — les volumes affichés restent des données Québec tant qu'on n'a pas assez de données locales.": "Used to prepare your file — the volumes shown remain Quebec-wide data until we have enough local data.",
  "Ton budget Google Ads actuel": "Your current Google Ads budget",
  "Budget pub que tu considérerais / mois": "Ad budget you would consider / month",
  "$": "",
  "/ mois": "/ month",
  "L'économie de ton contrat": "The economics of your contract",
  "Avec juste ces deux chiffres, on calcule déjà ta marge disponible par client et ton coût d'acquisition maximum (break-even) — aucun taux de conversion à deviner. Tout reste modifiable après, sans recommencer.": "With just these two numbers, we already calculate your available margin per customer and your maximum acquisition cost (break-even) — no conversion rate to guess. Everything stays editable afterwards, without starting over.",
  "Valeur moyenne du premier contrat, avant taxes ($)": "Average value of the first contract, before tax ($)",
  "Entre une valeur de contrat supérieure à 0 $, ou laisse vide.": "Enter a contract value above $0, or leave it empty.",
  "Je ne sais pas encore": "I don't know yet",
  "Marge contributive après coûts de réalisation (%, facultatif)": "Contribution margin after delivery costs (%, optional)",
  "Entre une marge entre 0 et 100 %, ou laisse vide.": "Enter a margin between 0 and 100%, or leave it empty.",
  "Je ne sais pas ma marge": "I don't know my margin",
  "Voir mon diagnostic →": "See my diagnostic →",
  "Compilation des données Keyword Planner (Québec)…": "Compiling Keyword Planner data (Quebec)…",
  "Préparation de ton résumé…": "Preparing your summary…",
  "Modifier mes réponses": "Edit my answers",
  "Prépare ton rendez-vous avec Alexander.": "Prepare your appointment with Alexander.",
  "Ces informations servent à préparer et confirmer ton rendez-vous.": "This information is used to prepare and confirm your appointment.",
  "Ton prénom *": "Your first name *",
  "Ton prénom est requis.": "Your first name is required.",
  "Nom de ton entreprise *": "Your company name *",
  "Le nom de ton entreprise est requis.": "Your company name is required.",
  "Courriel *": "Email *",
  "Un courriel valide est requis.": "A valid email is required.",
  "Téléphone (optionnel à cette étape)": "Phone (optional at this step)",
  "Site web (optionnel)": "Website (optional)",
  "Envoyer →": "Send →",
  "🔒 Confidentiel ·": "🔒 Confidential ·",
  "Politique de confidentialité": "Privacy policy",
  "Avant de réserver": "Before you book",
  "Rendez-vous : appel téléphonique de 30 minutes.": "Appointment: a 30-minute phone call.",
  "Choisir mon heure — 30 min →": "Pick my time — 30 min →",
  "Gratuit · Sans engagement": "Free · No commitment",
  "Le calendrier ne s'est pas chargé.": "The calendar didn't load.",
  "Ouvre-le dans un nouvel onglet": "Open it in a new tab",
  "Ton secteur mérite une analyse faite à la main.": "Your sector needs a manual analysis.",
  "Ce qu'on a": "What we have",
  "On n'a pas de données Keyword Planner validées pour ce métier dans notre base instantanée. Alexander fait l'analyse à la main avec les mêmes données réelles Google. Aucun délai automatique n'est garanti — on te recontacte avec un plan concret.": "We don't have validated Keyword Planner data for this trade in our instant database. Alexander does the analysis by hand with the same real Google data. No automatic turnaround time is guaranteed — we will get back to you with a concrete plan.",
  "Ton métier, ta zone et ton budget envisagé (déjà notés)": "Your trade, your area and your planned budget (already noted)",
  "Ce qu'on doit vérifier pour ton secteur précis": "What we need to check for your specific sector",
  "La prochaine action concrète": "The next concrete action",
  "Pas prêt à réserver ? Laisse tes infos.": "Not ready to book? Leave your details.",
  "On te recontacte avec l'analyse — mêmes règles : ces informations servent à préparer le suivi, aucune inscription marketing implicite.": "We will get back to you with the analysis — same rules: this information is used to prepare the follow-up, with no implied marketing signup.",
  "Téléphone (optionnel)": "Phone (optional)",
  "Précision sur ton métier (optionnel)": "More detail on your trade (optional)",
  "Reçu !": "Received!",
  "Alexander te recontacte pour la suite.": "Alexander will contact you with the next steps.",
  "Comment fonctionne cet audit Google Ads gratuit": "How this free Google Ads audit works",
  "Ce que l'audit analyse": "What the audit looks at",
  "Selon que tu fais déjà de la publicité Google Ads ou non, l'outil pose quelques questions sur ton métier, ta zone et ton budget, puis regarde les données réelles de demande (recherches mensuelles et enchères) pour ton secteur dans Google Keyword Planner. Si tu fais déjà des Google Ads, l'audit montre la demande et le coût réels de ton marché, puis identifie 3 points à vérifier dans ton compte (intention des recherches achetées, qualité de la mesure des appels/formulaires, budget potentiellement mal ciblé). Si tu n'en fais pas encore, il calcule combien de clients signés par mois suffiraient à couvrir ton budget envisagé, à partir de la valeur et de la marge de ton contrat moyen.": "Depending on whether or not you already run Google Ads, the tool asks a few questions about your trade, area and budget, then looks at real demand data (monthly searches and bids) for your sector in Google Keyword Planner. If you already run Google Ads, the audit shows the real demand and cost of your market, then identifies 3 points to check in your account (intent of the searches you buy, quality of call/form measurement, potentially mis-targeted budget). If you don't yet, it calculates how many signed customers per month would be enough to cover your planned budget, based on the value and margin of your average contract.",
  "Sources de données": "Data sources",
  "Les volumes de recherche et plages d'enchères viennent directement de l'API Google Ads (Keyword Planner), pour la ville la plus précise disponible dans ta région — sinon un repère à l'échelle du Québec, toujours indiqué comme tel. Le seul chiffre calculé par Pixby est le nombre de clients signés par mois nécessaires pour couvrir ton budget Ads et les frais de gestion, à partir de la valeur de contrat et de la marge que tu déclares toi-même.": "Search volumes and bid ranges come directly from the Google Ads API (Keyword Planner), for the most precise city available in your region — otherwise a Quebec-wide benchmark, always labelled as such. The only number calculated by Pixby is the number of signed customers per month needed to cover your Ads budget and management fees, based on the contract value and margin you declare yourself.",
  "Limites": "Limits",
  "Cet audit ne devine jamais de taux de conversion (clic → lead → client) : ce chiffre varie trop d'une entreprise à l'autre pour être fiable sans données réelles. Il ne remplace pas non plus un audit de ton compte Google Ads existant — sans y accéder, impossible de savoir si tes campagnes, tes mots-clés ou ton tracking de conversions sont bien configurés. C'est un prédiagnostic basé sur la demande du marché, pas une garantie de résultat.": "This audit never guesses a conversion rate (click → lead → customer): that number varies too much from one business to another to be reliable without real data. It also does not replace an audit of your existing Google Ads account — without access to it, there is no way to know whether your campaigns, keywords or conversion tracking are set up properly. It is a pre-diagnostic based on market demand, not a guarantee of results.",
  "Diagnostic externe vs audit de compte en lecture seule": "External diagnostic vs read-only account audit",
  "Le diagnostic ci-dessus se fait sans jamais accéder à ton compte Google Ads. Si tu es déjà annonceur, tu pourras ensuite donner un accès en": "The diagnostic above is done without ever accessing your Google Ads account. If you already advertise, you can then grant",
  "lecture seule": "read-only",
  "(aucune modification possible) pour qu'Alexander regarde tes vraies campagnes avant le rendez-vous — c'est toujours facultatif, réserver un appel ne demande jamais cet accès.": "access (no changes possible) so that Alexander can look at your real campaigns before the appointment — it is always optional, and booking a call never requires this access.",
  "Confidentialité": "Privacy",
  "Les réponses données dans l'audit et, si tu les laisses, tes coordonnées, servent uniquement à préparer ton rendez-vous avec Alexander — voir la": "The answers given in the audit and, if you leave them, your contact details, are used only to prepare your appointment with Alexander — see the",
  "politique de confidentialité": "privacy policy",
  ". Rien n'est vendu à des tiers ni utilisé pour du démarchage automatisé.": ". Nothing is sold to third parties or used for automated outreach.",
  "© 2026 Pixby · Montréal ·": "© 2026 Pixby · Montreal ·",
  "Repère Québec (province)": "Quebec benchmark (province-wide)",
  "Enchères de haut de page — plage indicative": "Top-of-page bids — indicative range",
  "Pas d'enchère active": "No active bid",
  "Pas un CPC observé ni un prix garanti du clic.": "Not an observed CPC or a guaranteed click price.",
  "Clients requis par mois, hors onboarding": "Customers needed per month, excluding onboarding",
  "À vérifier dans ton compte": "To check in your account",
  "Intention des recherches réellement achetées": "Intent of the searches you actually pay for",
  "Qualité de la mesure des appels et formulaires": "Quality of call and form measurement",
  "Budget potentiellement perdu par ciblage, enchères ou mots-clés": "Budget potentially lost through targeting, bidding or keywords",
  "Valeur de contrat": "Contract value",
  "Ta valeur déclarée.": "Your declared value.",
  "Ton marché — Google Keyword Planner": "Your market — Google Keyword Planner",
  "Recherches réelles Google pour ces termes précis — pas une expansion automatique, pour éviter tout bruit (marques, hors-sujet).": "Real Google searches for these exact terms — not an automatic expansion, to avoid any noise (brands, off-topic).",
  "Mot-clé": "Keyword",
  "Recherches / mois": "Searches / month",
  "Ce que Google prévoit pour ce budget": "What Google forecasts for this budget",
  "Modèle Google, pas une garantie — le nombre de leads ou de clients qui en sortiraient reste inconnu tant qu'un test réel n'a pas été fait.": "Google model, not a guarantee — the number of leads or customers that would result remains unknown until a real test has been run.",
  "Comment ces chiffres sont calculés": "How these numbers are calculated",
  "Ce qu'on doit regarder dans ton compte": "What we need to look at in your account",
  "Les prochaines actions concrètes": "The next concrete actions",
  "Ce que tes chiffres montrent (ci-dessus)": "What your numbers show (above)",
  "Le budget test et les critères d'arrêt avant de dépenser": "The test budget and the stopping criteria before spending",
  "Ton prédiagnostic": "Your pre-diagnostic",
  "Ton marché, avant d'investir": "Your market, before you invest",
  "Basé sur tes réponses — aucune donnée de compte consultée.": "Based on your answers — no account data consulted.",
  "Basé sur tes réponses.": "Based on your answers.",
  "Prendre rendez-vous avec Pixby": "Book an appointment with Pixby",
  "30 minutes, gratuit — on regarde ce qui se passe vraiment dans ton compte.": "30 minutes, free — we look at what is really happening in your account.",
  "30 minutes, gratuit — on regarde ensemble si Google Ads a du sens pour toi.": "30 minutes, free — we look together at whether Google Ads makes sense for you.",
  "Mêmes données réelles Google que le reste du site — analysées à la main pour ton métier.": "Same real Google data as the rest of the site — analysed by hand for your trade.",
  "Métier": "Trade",
  "Zone": "Area",
  "Budget": "Budget",
  "Inconnu": "Unknown",
  "Envoi en cours…": "Sending…",
  "Réessayer →": "Try again →",
  "La demande n'a pas pu être envoyée. Réessaie, ou": "The request could not be sent. Try again, or",
  "réserve directement ton rendez-vous": "book your appointment directly",
  "Les données Google Keyword Planner ne montrent pas assez de volume pour ce métier dans cette zone — à regarder de plus près ensemble avant toute conclusion.": "Google Keyword Planner data does not show enough volume for this trade in this area — worth a closer look together before drawing any conclusion.",
  "Google détecte une demande limitée pour ce marché avec ce niveau de budget — le potentiel mérite d'être validé avant d'investir davantage.": "Google detects limited demand for this market at this budget level — the potential should be validated before investing further.",
  "Onboarding initial Pixby de 1 000 $ non inclus.": "Pixby's initial onboarding fee of 1 000 $ is not included."
 },
 "metier": {
  "Toiture": "Roofing",
  "Plomberie": "Plumbing",
  "HVAC / Thermopompe": "HVAC / Heat pump",
  "Réparation d'électroménagers": "Appliance repair",
  "Électricien": "Electrician",
  "Rénovation": "Renovation",
  "Paysagement": "Landscaping",
  "Dégâts d'eau": "Water damage",
  "Dentiste / Clinique": "Dentist / Clinic",
  "Autre PME locale": "Other local business"
 },
 "region": {
  "Grand Montréal": "Greater Montreal",
  "Rive-Sud (Longueuil, Brossard)": "South Shore (Longueuil, Brossard)",
  "Laval / Rive-Nord": "Laval / North Shore",
  "Québec / Lévis": "Quebec City / Lévis",
  "Gatineau": "Gatineau",
  "Sherbrooke": "Sherbrooke",
  "Autre région": "Other region",
  "Tout le Québec": "All of Quebec"
 },
 "budget": {
  "Moins de 1 000 $": "Under 1 000 $",
  "1 000 – 2 000 $": "1 000 $ – 2 000 $",
  "2 000 – 5 000 $": "2 000 $ – 5 000 $",
  "5 000 – 10 000 $": "5 000 $ – 10 000 $",
  "10 000 $ et +": "10 000 $+",
  "Je ne sais pas": "I don't know"
 },
 "placeholders": {
  "Ex. 3000": "e.g. 3000",
  "Ex. 40": "e.g. 40",
  "Alexandre": "Alex",
  "Ex. Toiture ABC": "e.g. ABC Roofing",
  "toi@tonentreprise.ca": "you@yourcompany.ca",
  "tonentreprise.ca": "yourcompany.ca",
  "Ex. Nettoyage ABC": "e.g. ABC Cleaning",
  "Ex. assèchement, décontamination…": "e.g. drying, decontamination…"
 },
 "months": {
  "janvier": "January",
  "février": "February",
  "mars": "March",
  "avril": "April",
  "mai": "May",
  "juin": "June",
  "juillet": "July",
  "août": "August",
  "septembre": "September",
  "octobre": "October",
  "novembre": "November",
  "décembre": "December"
 },
 "src": {
  "Déclaré par toi": "Declared by you",
  "Calcul Pixby": "Pixby calculation",
  "Google Keyword Planner": "Google Keyword Planner",
  "Compte Google Ads réel": "Real Google Ads account",
  "Estimation interne Pixby — non vérifiée": "Pixby internal estimate — unverified",
  "Prévision Google Ads (modèle)": "Google Ads forecast (model)"
 }
};
  var EXACT = D.exact, METIER = D.metier, REGION = D.region, BUDGET = D.budget, PH = D.placeholders, MONTHS = D.months, SRC = D.src;
  var lower = function(o){ var r={}; Object.keys(o).forEach(function(k){ r[k.toLowerCase()] = o[k]; }); return r; };
  var METIER_L = lower(METIER);
  var tracked = [], orig = new WeakMap(), phOrig = new WeakMap(), linkOrig = new WeakMap();
  var active = false, suspended = false, observer = null, origTitle = document.title, origLang = document.documentElement.lang;
  var SKIP_TAGS = { SCRIPT:1, STYLE:1, TEXTAREA:1, OPTION:1, NOSCRIPT:1 };

  function norm(s){ return s.replace(/’/g, "'").replace(/ /g, ' '); }
  function has(o,k){ return Object.prototype.hasOwnProperty.call(o,k); }
  function numfmt(s){
    s = s.replace(/(\d),(\d{1,2})(?!\d)/g, '$1.$2');
    var prev; do { prev = s; s = s.replace(/(\d) (\d{3})(?!\d)/g, '$1,$2'); } while (s !== prev);
    s = s.replace(/(\d[\d,]*(?:\.\d+)?) \$/g, '$$$1');
    s = s.replace(/(\d) %/g, '$1%');
    return s;
  }
  function tM(s){ var k = norm(s).toLowerCase(); return has(METIER_L,k) ? METIER_L[k] : (k === 'ton service' ? 'your service' : s); }
  function tR(s){ var k = norm(s); if (has(REGION,k)) return REGION[k]; if (k === 'ta zone') return 'your area'; if (k === 'Québec province') return 'Quebec (province-wide)'; if (k === 'Québec') return 'Quebec'; return s; }
  function tB(s){ var k = norm(s); if (has(BUDGET,k)) return BUDGET[k]; if (k === 'ton budget actuel') return 'your current budget'; return s; }
  function tMonth(s){ return s.replace(/[a-zéûè]+(?= \d{4})/i, function(m){ return has(MONTHS,m.toLowerCase()) ? MONTHS[m.toLowerCase()] : m; }); }

  var DISC = [
    [/Estimations basées sur les données Google Ads Keyword Planner \((.+?)\), pour les mots-clés vérifiés listés ci-dessus uniquement — aucune expansion automatique qui pourrait inclure des marques ou du hors-sujet\. /, function(m){ return 'Estimates based on Google Ads Keyword Planner data (' + tMonth(m[1]) + '), for the verified keywords listed above only — no automatic expansion that could include brands or off-topic terms. '; }],
    [/Le volume est une moyenne historique de recherches, pas un compteur en direct ni un nombre de personnes\. /, function(){ return 'Volume is a historical average of searches, not a live counter or a number of people. '; }],
    [/Les enchères affichées sont la plage de haut de page Google \(Top of page bid\), pas un CPC observé ni un prix garanti du clic\. /, function(){ return "The bids shown are Google's top-of-page range (Top of page bid), not an observed CPC or a guaranteed click price. "; }],
    [/Aucun nombre de leads ou de clients n'est projeté ici tant qu'un audit réel du compte n'a pas été fait\. /, function(){ return 'No number of leads or customers is projected here until a real audit of the account has been done. '; }],
    [/La prévision Google Ads, quand elle est affichée, est un modèle de Google \(clics\/coût\/CPC pour un budget donné\) — pas une garantie de résultat, et elle ne projette aucun lead ni client\. /, function(){ return 'The Google Ads forecast, when shown, is a Google model (clicks/cost/CPC for a given budget) — not a guarantee of results, and it projects no leads or customers. '; }],
    [/La zone affichée est la ville la plus précise disponible dans Keyword Planner pour ta région choisie; à défaut de données suffisantes, le repère provincial \(Québec\) est utilisé et clairement indiqué\./, function(){ return 'The area shown is the most precise city available in Keyword Planner for your chosen region; if there is not enough data, the province-wide benchmark (Quebec) is used and clearly labelled.'; }]
  ];
  var PATTERNS = [
    [/^Étape (\d+) sur (\d+)$/, function(m){ return 'Step ' + m[1] + ' of ' + m[2]; }],
    [/^Demande estimée — (.+)$/, function(m){ return 'Estimated demand — ' + tR(m[1]); }],
    [/^(\d[\d ]*) recherches\/mois$/, function(m){ return m[1] + ' searches/month'; }],
    [/^(\d[\d ]*) \/ mois$/, function(m){ return m[1] + ' / month'; }],
    [/^Mots-clés commerciaux \((.+)\)$/, function(m){ return 'Commercial keywords (' + tR(m[1]) + ')'; }],
    [/^(\d+) mots-clés vérifiés$/, function(m){ return m[1] + ' verified keywords'; }],
    [/^1 mot-clé vérifié$/, function(){ return '1 verified keyword'; }],
    [/^(.+) \$\/mois envisagé$/, function(m){ return m[1] + ' $/month considered'; }],
    [/^Il existe une demande Google active pour (.+) dans (.+)\. Avec (.+), ton enjeu n'est pas de savoir s'il existe des recherches : c'est de vérifier si ton compte capte les bonnes intentions au bon coût\.$/, function(m){
        var b = tB(m[3]); var w = (b === "I don't know") ? 'your current budget' : b;
        return 'There is active Google demand for ' + tM(m[1]) + ' in ' + tR(m[2]) + '. With ' + w + ', your question is not whether searches exist: it is whether your account captures the right intents at the right cost.'; }],
    [/^Les données Google ne montrent pas un volume clair pour (.+) dans (.+) avec les termes vérifiés — à regarder de plus près avec les vrais mots-clés de ton compte\.$/, function(m){
        return 'Google data does not show a clear volume for ' + tM(m[1]) + ' in ' + tR(m[2]) + ' with the verified terms — worth a closer look with the real keywords in your account.'; }],
    [/^À tes chiffres, (\d+) clients signés par mois suffiraient à couvrir environ (.+) d'investissement récurrent Google Ads \+ Pixby\.$/, function(m){
        return 'On your numbers, ' + m[1] + ' signed customers per month would be enough to cover about ' + m[2] + ' of recurring Google Ads + Pixby investment.'; }],
    [/^À tes chiffres, 1 client signé par mois suffirait à couvrir environ (.+) d'investissement récurrent Google Ads \+ Pixby\.$/, function(m){
        return 'On your numbers, 1 signed customer per month would be enough to cover about ' + m[1] + ' of recurring Google Ads + Pixby investment.'; }],
    [/^Il y a de la demande réelle dans ton marché \((.+) recherches\/mois sur les termes vérifiés\)\. Ta valeur de contrat et ta marge restent à établir pour connaître ton seuil de rentabilité\.$/, function(m){
        return 'There is real demand in your market (' + m[1] + ' searches/month on the verified terms). Your contract value and margin remain to be established to know your break-even.'; }],
    [/^Palier (.+) \$\/mois \(le plus proche de ton budget de (.+) \$\/mois\), (.+) : ~(.+) clics, ~(.+) dépensé, CPC moyen (.+)\.$/, function(m){
        return 'Tier ' + m[1] + ' $/month (closest to your budget of ' + m[2] + ' $/month), ' + tR(m[3]) + ': ~' + m[4] + ' clicks, ~' + m[5] + ' spent, average CPC ' + m[6] + '.'; }],
    [/^Donnée disponible pour (.+) \(ville la plus précise disponible dans Keyword Planner\)\.$/, function(m){ return 'Data available for ' + tR(m[1]) + ' (most precise city available in Keyword Planner).'; }],
    [/^Donnée disponible : Québec \(province\)\. Repère utilisé faute de données suffisantes pour (.+) — ta zone reste enregistrée pour l'étude\.$/, function(m){ return 'Data available: Quebec (province-wide). Benchmark used for lack of sufficient data for ' + tR(m[1]) + ' — your area stays recorded for the study.'; }],
    [/^Estimations basées sur les données Google Ads Keyword Planner \((.+)\)\.$/, function(m){ return 'Estimates based on Google Ads Keyword Planner data (' + tMonth(m[1]) + ').'; }],
    [/^La demande n'a pas pu être envoyée\. Réessaie, ou $/, function(){ return 'The request could not be sent. Try again, or '; }]
  ];

  function lookup(core){
    var k = norm(core);
    if (has(EXACT,k)) return EXACT[k];
    if (has(METIER,k)) return METIER[k];
    if (has(REGION,k)) return REGION[k];
    if (has(BUDGET,k)) return BUDGET[k];
    if (has(SRC,k)) return SRC[k];
    for (var i=0;i<PATTERNS.length;i++){ var m = PATTERNS[i][0].exec(k); if (m) return PATTERNS[i][1](m); }
    if (k.indexOf('Estimations basées') === 0 && k.indexOf('Le volume est une moyenne') > -1) {
      var out = k;
      DISC.forEach(function(d){ out = out.replace(d[0], function(){ return d[1](d[0].exec(out)); }); });
      return out;
    }
    return null;
  }
  function translate(text){
    var m = /^(\s*)([\s\S]*?)(\s*)$/.exec(text);
    if (!m || !m[2]) return text;
    var en = lookup(m[2]);
    if (en === null) { if (/\d/.test(m[2]) && /[\$,%]| \d{3}/.test(m[2])) en = m[2]; else return text; }
    return m[1] + numfmt(en) + m[3];
  }
  function skipNode(n){
    var p = n.parentNode;
    if (!p || p.nodeType !== 1 || SKIP_TAGS[p.tagName]) return true;
    if (p.classList && p.classList.contains('kw')) return true;   // keyword rows are real French search terms (data)
    return false;
  }
  function trNode(n){
    if (suspended || skipNode(n)) return;
    var cur = n.nodeValue, o = orig.get(n);
    if (o && cur === o.en) return;
    var en = translate(cur);
    if (en !== cur) { orig.set(n, { fr: cur, en: en }); tracked.push(n); n.nodeValue = en; }
  }
  function trAttrs(root){
    var els = root.nodeType === 1 ? [root].concat([].slice.call(root.querySelectorAll('[placeholder]'))) : [];
    els.forEach(function(el){
      if (!el.hasAttribute || !el.hasAttribute('placeholder')) return;
      var v = el.getAttribute('placeholder');
      if (phOrig.has(el)) return;
      if (has(PH, v)) { phOrig.set(el, v); el.setAttribute('placeholder', PH[v]); }
    });
  }
  function walk(root){
    if (root.nodeType === 3) { trNode(root); return; }
    if (root.nodeType !== 1 || SKIP_TAGS[root.tagName]) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n, list = [];
    while ((n = w.nextNode())) list.push(n);
    list.forEach(trNode);
    trAttrs(root);
  }
  var LINKS = [
    ['.nav-logo', 'href', '/en/'],
    ['footer a[href$="../"]', 'href', '/en/'],
    ['a[href$="politique-confidentialite.html"]', 'href', '/en/privacy-policy/']
  ];
  function setLinks(on){
    LINKS.forEach(function(l){
      document.querySelectorAll(l[0]).forEach(function(a){
        if (on) { if (!linkOrig.has(a)) linkOrig.set(a, a.getAttribute(l[1])); a.setAttribute(l[1], l[2]); }
        else if (linkOrig.has(a)) { a.setAttribute(l[1], linkOrig.get(a)); linkOrig.delete(a); }
      });
    });
  }
  function onMutations(muts){
    if (!active || suspended) return;
    muts.forEach(function(m){
      if (m.type === 'characterData') trNode(m.target);
      else m.addedNodes.forEach(function(n){ walk(n); });
    });
  }
  /* The trade card text is read by the Audit's own click handler
     (sel.metierLabel = this.textContent) and is sent to the CRM. Give that
     handler the original French text, exactly as in the French page, then
     translate again. */
  function onCaptureClick(e){
    if (!active) return;
    var card = e.target.closest && e.target.closest('.m-card');
    if (!card) return;
    suspended = true;
    var w = document.createTreeWalker(card, NodeFilter.SHOW_TEXT, null), n;
    while ((n = w.nextNode())) { var o = orig.get(n); if (o && n.nodeValue === o.en) n.nodeValue = o.fr; }
    setTimeout(function(){ suspended = false; walk(card); }, 0);
  }
  function enable(){
    if (active) return;
    active = true;
    document.documentElement.classList.add('audit-en');
    document.documentElement.lang = 'en-CA';
    document.title = 'Free Google Ads Audit — Pixby | Your real market in Quebec';
    walk(document.body);
    setLinks(true);
    observer = new MutationObserver(onMutations);
    observer.observe(document.body, { childList:true, subtree:true, characterData:true });
    document.addEventListener('click', onCaptureClick, true);
    mark(true);
  }
  function disable(){
    if (!active) return;
    active = false;
    if (observer) { observer.disconnect(); observer = null; }
    document.removeEventListener('click', onCaptureClick, true);
    tracked.forEach(function(n){ var o = orig.get(n); if (o && n.nodeValue === o.en) n.nodeValue = o.fr; orig.delete(n); });
    tracked = [];
    document.querySelectorAll('[placeholder]').forEach(function(el){ if (phOrig.has(el)) { el.setAttribute('placeholder', phOrig.get(el)); phOrig.delete(el); } });
    setLinks(false);
    document.documentElement.classList.remove('audit-en');
    document.documentElement.lang = origLang || 'fr';
    document.title = origTitle;
    mark(false);
  }
  function mark(en){
    document.querySelectorAll('#langSwitch [data-lang]').forEach(function(a){
      var on = (a.getAttribute('data-lang') === 'en') === en;
      if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  }
  var st = document.createElement('style');
  st.textContent = 'html.audit-en #budgetVal::before{content:"$"}';
  document.head.appendChild(st);
  window.__auditI18n = { enable: enable, disable: disable, isEnabled: function(){ return active; } };
})();
