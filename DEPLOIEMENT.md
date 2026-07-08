# Landing Page Pixby — Instructions de déploiement

## Option A — GHL Funnels (recommandé, 5 minutes)

1. Dans GHL → **Sites** → **Funnels** → **+ New Funnel**
2. Nom : "Pixby — Google Ads Landing"
3. Ajouter une étape → **Landing Page** → type : **Custom Code**
4. Coller tout le contenu du fichier `index.html` dans la zone "Custom Code"
5. Publier → Définir le domaine : `ads.pixby.ca` ou `pixby.ca/pub`
6. Tester sur mobile avant de connecter aux annonces

## Option B — Hébergement externe ultra-rapide (meilleure vitesse = meilleur Quality Score)

1. Aller sur **netlify.com** → New Project → "Deploy manually"
2. Glisser le dossier `landing-pixby/` dans la zone de dépôt
3. Netlify donne une URL en 30 secondes
4. Connecter le domaine personnalisé `ads.pixby.ca` dans les settings DNS

---

## Connecter le formulaire à GHL (étape critique)

Le formulaire redirige vers ton calendrier pour l'instant.
Pour créer automatiquement un contact dans GHL + pipeline :

### Méthode simple — Webhook GHL

1. Dans GHL → **Automations** → **+ New Workflow**
2. Trigger : **Inbound Webhook**
3. GHL te donne une URL unique : `https://services.leadconnectorhq.com/hooks/...`
4. Dans `index.html`, remplacer le commentaire `// IMPORTANT` par :
   ```js
   fetch('TON_URL_WEBHOOK_GHL', {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
       firstName: prenom,
       phone: tel,
       customData: { industrie: ind, budget: bud, situation: sit }
     })
   });
   ```
5. Dans le workflow, ajouter :
   - Action : **Create/Update Contact**
   - Action : **Add to Pipeline** → Marketing Pipeline → "New Lead"
   - Action : **Send SMS to Alex** → "Nouveau lead : {{contact.firstName}} {{contact.phone}} — {{industrie}}"

---

## Mots-clés cibles pour Google Ads (campagne à créer)

| Groupe | Mots-clés (exact) | Budget suggéré |
|---|---|---|
| Haute intention | [agence google ads montréal], [gestion google ads PME] | 40% |
| Niches | [google ads toiture montréal], [google ads plombier québec], [google ads electricien] | 40% |
| Douleur | [pub google qui fonctionne PME], [google ads résultats] | 20% |

Stratégie d'enchères : Maximize Conversions (après 30 conversions, passer à Target CPA à 150$)

---

## URL de destination dans les annonces Google Ads

Utiliser l'URL de cette landing page (PAS pixby.ca/accueil).
Le message match annonce ↔ landing page est critique pour le Quality Score.

Exemple annonce → landing page :
- Titre annonce : "Agence Google Ads Montréal" → H1 page : "Tes clients te cherchent sur Google..."  ✓
- Titre annonce : "PME Locales Québec" → Sous-titre page : "Campagnes pour PME locales au Québec" ✓

---

## Checklist avant lancement ads

- [ ] Page live sur URL dédiée (pas l'accueil pixby.ca)
- [ ] Test mobile (bouton CTA visible sans scroller)
- [ ] Formulaire connecté à GHL
- [ ] Google Ads conversion tracking installé sur la confirmation
- [ ] PageSpeed score mobile > 70
- [ ] Numéro click-to-call fonctionnel
