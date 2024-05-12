![**Version**: 06-05-2023](https://img.shields.io/badge/version-06--05--2024-blueviolet?style=flat&logo=circle)

<h1 align="center">🌤 Skycast</h1>

---

## 🧭 Contents

* [🧭 Contents](#-contents)
* [🎨 Colors](#-colors)
* [🔀 Routing](#-routing)

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

```html
<h3 className="text-lg font-semibold text-skycast-Jet">Easy to use</h3>
```


---

## 🔀 Routing

The routing was done using the Nextjs builtin file system routing, the app provides following routes


| route               | description                      |
| :-------------------- | ---------------------------------- |
| /                   | Landing page                     |
| /cities             | List of all the available cities |
| /cities/[city name] | One specific city                |
| /fav                | user favourite list              |

---