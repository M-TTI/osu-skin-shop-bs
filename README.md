# Insallation

```bash
git clone https://github.com/M-TTI/osu-skin-shop-bs.git
```
```bash
npm install & npm run dev # ou la meme pour yarn
```
# Structure
```
[project root]
├── app
│   ├── app.config.ts
│   ├── app.vue
│   ├── assets
│   │   └── css
│   │       └── main.css
│   ├── components
│   │   ├── buttons
│   │   │   └── BaseButton.vue
│   │   ├── cards
│   │   │   └── SkinCard.vue
│   │   └── TemplateMenu.vue
│   ├── data
│   │   ├── skinData.ts
│   │   └── userData.ts
│   ├── layouts
│   │   └── default.vue
│   ├── pages
│   │   ├── account
│   │   │   └── index.vue
│   │   ├── cart
│   │   │   ├── index.vue
│   │   │   └── payment-success.vue
│   │   ├── index.vue
│   │   ├── login
│   │   │   └── index.vue
│   │   ├── register
│   │   │   └── index.vue
│   │   └── skins
│   │       ├── [id].vue
│   │       └── index.vue
│   ├── plugins
│   │   ├── skinAPI.ts
│   │   ├── userAPI.ts
│   │   └── vee-validate.js
│   └── stores
│       ├── cart.js
│       └── user.js
├── i18n
│   └── locales
│       ├── en.json
│       └── fr.json
├── nuxt.config.ts
├── public
├── README.md
├── server
│   └── api
│       ├── skin
│       │   ├── [id].get.ts
│       │   └── skins.get.ts
│       └── user
│           ├── [id].get.ts
│           ├── login.post.ts
│           └── users.ts
└── tsconfig.json
```

Les mock data sont dans ./data : skinData.ts et userData.ts

**Les fonctionnalités register et payment de skin ne fonctionnent pas car pas de persistence de données à cause des mocks**
