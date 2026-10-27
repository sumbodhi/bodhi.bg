# bodhi.bg

Сайтът [bodhi.bg](https://bodhi.bg) - будизмът според традицията Тхеравада, на български плюс материали за изучаване на пали (включително речник).

## Какво съдържа проектът

- `content/` - статии, уроци, текстове от Типитака, материали за езика пали
- `data/rechnik.json` - речникът: всички публикувани думи с граматика, значения, примери и словосъчетания. Страниците на речника се изграждат от този файл.
- `themes/bodhi/` - тема за сайта
- `static/audio/` - записи на произношението на част от думите

Речникът се поддържа в отделна база данни, от където се конвертира в `data/rechnik.json`. Ако забележите грешка, ще се радваме да ни пишете - имейл за контакт има на [bodhi.bg/za-bodhi-bg](https://bodhi.bg/za-bodhi-bg/). Може също така да създадете ново Github Issue.

## Билдване на сайта

Сайта се изгражда от данните в това repo с помощта на [Hugo](https://gohugo.io) версия 0.126 или по-нов:

```
hugo --cleanDestinationDir
```

- След build сайта е в `public/`.
- Може да го пуснете локално също чрез `hugo server -D`

## Лиценз

Всичко тук е обществено достояние по [CC0 1.0](LICENSE) - може да се копира, променя и разпространява свободно, без да е нужно разрешение. Изключение правят материалите на други автори, които остават под техните условия:

- снимката на Аджан Пуннадхаммо (`themes/bodhi/static/img/bhikkhu/`)
- цитираните преводи на други автори, посочени в самите текстове

---

*In English:* This repo contains the source of bodhi.bg website, a Theravāda Buddhist site in Bulgarian with a Pāli–Bulgarian dictionary (`data/rechnik.json`). Dedicated to the public domain under CC0 1.0, except for the third-party material listed above.
