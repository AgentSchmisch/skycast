![**Version**: 21-05-2024](https://img.shields.io/badge/version-21--05--2024-blueviolet?style=flat&logo=circle)

<h1 align="center">🌤 Skycast</h1>

---

## 🧭 Contents
* [➡️ Getting started](#-Getting-started)
* [🧭 Contents](#-contents)
* [🎨 Colors](#-colors)
* [🔀 Routing](#-routing)
* [↙️ API usage](#-API-usage)


---

## ➡️ Getting started

To run the app locally it is required to have ``nodejs`` installed.


If these prerequisites are met, it is nessecary to install the dependencies by running

```bash
cd your-project-folder/skycast/
npm install
```

After that it is nessecary to create an API-Key for the pages mentioned in [↙️ API usage](#-API-usage). The keys need to be copied into a ``.env`` file according to the template ```.env-example`` or the schema below


```bash
NEXT_PUBLIC_OPENWEATHER_API_KEY="your-OpenWeather-API-Key"
NEXT_PUBLIC_PEXELS_API_KEY="your-Pexels-API-Key"
```

If you completed the steps above you can run

```bash
npm run dev
```

These commands will run the app in development mode on `localhost:3000`, if this port is already occupied by another process, `NextJS` will default to another port and inform you about the change on the command line


---

## 🎨 Colors & Fonts

### Colors

For the color palette we used `coolors.co`. The colors we settled on are

```javascript
const skycast = {
Jet : "#353535",
CaribbeanCurrent : "#3C6E71",
White : "#FFFFFFF",
Platinum : "#D9D9D9",
IndigoDye : "#284B63"
}
```

These colors are also added to the `tailwind.config.ts` file so they can be used easily with

```typescript
className="text-lg font-semibold text-skycast-Jet">
```

### Font



---

## 🔀 Routing

The routing was done using the Nextjs builtin file system routing, the app provides following routes


| route | description |
| :-------------------- | ---------------------------------- |
| / | Landing page |
| /cities | List of all the available cities |
| /cities/[city name] | One specific city |
| /fav | user favourite list |

---

## ↙️ API-Usage

For the weather data, `OpenWeatherMap` was used, the [API Documentation](https://openweathermap.org/api) provides free data on the current weather data, as well as data for the upcoming 5 days, with datapoints every 3h

For the hero images, that were used in the detail pages, `Pexels Image API` was used, the [API Documentation](https://www.pexels.com/api/documentation/) provides images on specific keywords