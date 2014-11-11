# Mosmama.ru Project v2

## Структура dev:

-**images** - папка с картинками <br>
-**scripts** - скрипты js <br>
-**sass** - стили SCSS <br>
	--**base**  - папка для служебных стилей (подключение шрифтов, сброс, основные настройки)<br>
	--**components** - подключаемые компоненты<br>
	--**helpers** - миксины, спрайты и др.<br>
	--**block** - основная папка со стилями, разбитыми на блоки<br>
	--**partials** - папка для стилей шапки, футера и сайдбара<br>
-**templates** - шаблоны страниц JADE<br>
	--**blocks**  - шаблоны страниц JADE, разбитых на блоки<br>
	--**modules** - Модули + UI Jade<br>
	--**pages** - Блоки страниц<br>
	--**partials** - Шаблоны header.jade, head.jade, scripts.jade, footer.jade<br>

## Структура production:
-**images** - папка с картинками<br>
-**scripts** - папка со скриптами<br>
	--**libs** -- подключенные библиотеки<br>
	--**script.js** -- основной файл скриптов<br>
-**css** - папка со стилями<br>
	--**style.css** -- основной файл стилей<br>

## Таски:

**gulp** - Генерация dev и production проектов<br>
