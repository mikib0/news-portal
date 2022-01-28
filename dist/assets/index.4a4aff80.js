var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { R as React, C as Card, _ as __\u00E7js$synthetic__, a as ReactPlaceholder, b as Carousel, c as __\u00E7js$synthetic__$1, d as ReactWeather, e as __\u00E7js$synthetic__$2, f as CardGroup, N as Nav, g as NavLink, u as useLocation, h as useNavigate, i as useSearchParams, j as Navbar, k as Container, F as Form, l as FormControl, B as Button, O as Outlet, S as StyledFirebaseAuth, m as firebase, n as BrowserRouter, o as Routes, p as Route, q as ReactDOM } from "./vendor.c83720de.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var bootstrap = "";
var reactPlaceholder = "";
function formatDate(datePublished) {
  let d = new Date(datePublished);
  let diff = Date.now() - d;
  let secMs = 1e3;
  let minMs = 60 * secMs;
  let hourMs = 60 * minMs;
  let dayMs = 24 * hourMs;
  let weekMs = 7 * dayMs;
  if (diff < secMs)
    return "Right Now";
  else if (diff < minMs)
    return `${Math.floor(diff / secMs)} sec(s) ago`;
  else if (diff < hourMs)
    return `${Math.floor(diff / minMs)} min(s) ago`;
  else if (diff < dayMs)
    return `${Math.floor(diff / hourMs)} hour(s) ago`;
  else if (diff < weekMs)
    return `${Math.floor(diff / dayMs)} day(s) ago`;
  else {
    d = [
      "0" + d.getDate(),
      "0" + (d.getMonth() + 1),
      "" + d.getFullYear(),
      "0" + d.getHours(),
      "0" + d.getMinutes()
    ].map((component) => component.slice(-2));
    return d.slice(0, 3).join("-") + " " + d.slice(3).join(":");
  }
}
var _jsxFileName$e = "/home/mikibo/Desktop/Coding/WebDev/Projects/React/news-portal/src/components/CarouselCard.jsx";
class CarouselCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageReady: false,
      responseReady: false
    };
  }
  handleImageLoaded() {
    this.setState({
      imageReady: true
    });
  }
  componentDidMount() {
    console.log("hurayyyy");
  }
  render() {
    var _a;
    let article = this.props.article;
    const {
      imageReady
    } = this.state;
    const imageStyle = !imageReady ? {
      display: "none"
    } : {};
    const image = /* @__PURE__ */ React.createElement(Card.Img, {
      alt: "Card image cap",
      style: __spreadValues({
        width: "100%",
        height: "100%"
      }, imageStyle),
      src: article.urlToImage,
      onLoad: this.handleImageLoaded.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName$e,
        lineNumber: 30,
        columnNumber: 7
      }
    });
    if (article.title != void 0 && !this.state.responseReady) {
      this.setState({
        responseReady: true
      });
    }
    return /* @__PURE__ */ React.createElement(Card, {
      style: {
        width: "1330px",
        height: "611.5px"
      },
      className: "position-relative text-white border-0 rounded",
      inverse: true,
      __self: this,
      __source: {
        fileName: _jsxFileName$e,
        lineNumber: 46,
        columnNumber: 7
      }
    }, (() => /* @__PURE__ */ React.createElement(__\u00E7js$synthetic__.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName$e,
        lineNumber: 55,
        columnNumber: 11
      }
    }, /* @__PURE__ */ React.createElement(ReactPlaceholder, {
      type: "rect",
      ready: imageReady,
      style: {
        width: "100%",
        height: "100%"
      },
      showLoadingAnimation: true,
      __self: this,
      __source: {
        fileName: _jsxFileName$e,
        lineNumber: 56,
        columnNumber: 13
      }
    }, image), !imageReady && image))(), /* @__PURE__ */ React.createElement(Card.ImgOverlay, {
      className: "d-flex flex-column justify-content-end",
      __self: this,
      __source: {
        fileName: _jsxFileName$e,
        lineNumber: 70,
        columnNumber: 9
      }
    }, /* @__PURE__ */ React.createElement(Card.Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName$e,
        lineNumber: 71,
        columnNumber: 11
      }
    }, /* @__PURE__ */ React.createElement(ReactPlaceholder, {
      ready: this.state.responseReady,
      type: "textRow",
      style: {
        width: "60%"
      },
      showLoadingAnimation: true,
      __self: this,
      __source: {
        fileName: _jsxFileName$e,
        lineNumber: 72,
        columnNumber: 13
      }
    }, /* @__PURE__ */ React.createElement("span", {
      className: "bg-dark",
      __self: this,
      __source: {
        fileName: _jsxFileName$e,
        lineNumber: 78,
        columnNumber: 15
      }
    }, article.title))), /* @__PURE__ */ React.createElement(Card.Text, {
      __self: this,
      __source: {
        fileName: _jsxFileName$e,
        lineNumber: 81,
        columnNumber: 11
      }
    }, /* @__PURE__ */ React.createElement("small", {
      className: "text-dark d-flex",
      __self: this,
      __source: {
        fileName: _jsxFileName$e,
        lineNumber: 82,
        columnNumber: 13
      }
    }, /* @__PURE__ */ React.createElement(ReactPlaceholder, {
      ready: this.state.responseReady,
      type: "textRow",
      style: {
        width: "20%",
        marginRight: "3px"
      },
      showLoadingAnimation: true,
      __self: this,
      __source: {
        fileName: _jsxFileName$e,
        lineNumber: 83,
        columnNumber: 15
      }
    }, /* @__PURE__ */ React.createElement("span", {
      className: "bg-light",
      __self: this,
      __source: {
        fileName: _jsxFileName$e,
        lineNumber: 89,
        columnNumber: 17
      }
    }, formatDate(article.publishedAt), " |", " ")), /* @__PURE__ */ React.createElement(ReactPlaceholder, {
      ready: this.state.responseReady,
      type: "textRow",
      style: {
        width: "20%"
      },
      showLoadingAnimation: true,
      __self: this,
      __source: {
        fileName: _jsxFileName$e,
        lineNumber: 93,
        columnNumber: 15
      }
    }, /* @__PURE__ */ React.createElement("span", {
      className: "bg-light",
      __self: this,
      __source: {
        fileName: _jsxFileName$e,
        lineNumber: 99,
        columnNumber: 17
      }
    }, (_a = article.source) == null ? void 0 : _a.name))))));
  }
}
var _jsxFileName$d = "/home/mikibo/Desktop/Coding/WebDev/Projects/React/news-portal/src/components/ControlledCarousel.jsx";
class ControlledCarousel extends React.Component {
  constructor(props) {
    super(props);
    __publicField(this, "handleSelect", (selectedIndex, e) => {
      this.setState({
        index: selectedIndex
      });
    });
    this.state = {
      imageReady: false,
      responseReady: false,
      articles: new Array(4).fill({}),
      index: 0
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  render() {
    let articles = new Array(4).fill({});
    if (this.props.hotTopics.articles) {
      articles = this.props.hotTopics.articles;
    }
    console.log(articles);
    return /* @__PURE__ */ React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName$d,
        lineNumber: 47,
        columnNumber: 7
      }
    }, /* @__PURE__ */ React.createElement("h1", {
      className: "fs-1 mt-4 mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName$d,
        lineNumber: 48,
        columnNumber: 9
      }
    }, "Hot Topics"), /* @__PURE__ */ React.createElement(Carousel, {
      activeIndex: this.state.index,
      indicators: false,
      onSelect: this.handleSelect,
      interval: "1500",
      __self: this,
      __source: {
        fileName: _jsxFileName$d,
        lineNumber: 49,
        columnNumber: 9
      }
    }, articles.map((article, idx) => /* @__PURE__ */ React.createElement(Carousel.Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName$d,
        lineNumber: 56,
        columnNumber: 13
      }
    }, /* @__PURE__ */ React.createElement(CarouselCard, {
      key: idx,
      article,
      __self: this,
      __source: {
        fileName: _jsxFileName$d,
        lineNumber: 57,
        columnNumber: 15
      }
    })))));
  }
}
var _jsxFileName$c = "/home/mikibo/Desktop/Coding/WebDev/Projects/React/news-portal/src/components/WeatherWidget.jsx";
function WeatherWidget({
  lat,
  lon,
  city
}) {
  const {
    data,
    isLoading,
    errorMessage
  } = __\u00E7js$synthetic__$1.useOpenWeather({
    key: "06ce70b80d6c024ca4bc7863002bbd0a",
    lat,
    lon,
    lang: "en",
    unit: "metric"
  });
  const customStyles = {
    gradientStart: "#f8f9fa",
    gradientMid: "#f8f9fa",
    gradientEnd: "#f8f9fa",
    forecastBackgroundColor: "#f8f9fa"
  };
  return /* @__PURE__ */ React.createElement(ReactWeather, {
    isLoading,
    errorMessage,
    data,
    lang: "en",
    locationLabel: city,
    unitsLabels: {
      temperature: "C",
      windSpeed: "Km/h"
    },
    theme: customStyles,
    showForecast: true,
    __self: this,
    __source: {
      fileName: _jsxFileName$c,
      lineNumber: 19,
      columnNumber: 5
    }
  });
}
var _jsxFileName$b = "/home/mikibo/Desktop/Coding/WebDev/Projects/React/news-portal/src/components/NewsCard.jsx";
class NewsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      imageReady: false
    };
  }
  handleImageLoaded() {
    this.setState({
      imageReady: true
    });
  }
  render() {
    var _a;
    const article = this.props.article;
    const imageStyle = !this.state.imageReady ? {
      display: "none"
    } : {};
    const image = /* @__PURE__ */ React.createElement(Card.Img, {
      src: article.urlToImage,
      style: __spreadValues({
        width: "100%",
        height: "100%"
      }, imageStyle),
      onLoad: (e) => {
        this.handleImageLoaded();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 21,
        columnNumber: 7
      }
    });
    if (article.title != void 0 && !this.state.ready) {
      this.setState({
        ready: true
      });
    }
    return /* @__PURE__ */ React.createElement(Card, {
      className: "border-0 m-2",
      bg: "light",
      __self: this,
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 35,
        columnNumber: 7
      }
    }, (() => /* @__PURE__ */ React.createElement(__\u00E7js$synthetic__.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 37,
        columnNumber: 11
      }
    }, /* @__PURE__ */ React.createElement(ReactPlaceholder, {
      type: "rect",
      ready: this.state.imageReady,
      style: {
        borderRadius: "8px",
        minWidth: "312.5px",
        minHeight: "220.6px"
      },
      showLoadingAnimation: true,
      __self: this,
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 38,
        columnNumber: 13
      }
    }, image), !this.state.imageReady && image))(), /* @__PURE__ */ React.createElement(Card.Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 53,
        columnNumber: 9
      }
    }, /* @__PURE__ */ React.createElement(Card.Title, {
      className: "fs-6",
      __self: this,
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 54,
        columnNumber: 11
      }
    }, /* @__PURE__ */ React.createElement(ReactPlaceholder, {
      ready: this.state.ready,
      type: "text",
      rows: 2,
      color: "#d3d1d1",
      showLoadingAnimation: true,
      __self: this,
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 55,
        columnNumber: 13
      }
    }, /* @__PURE__ */ React.createElement("a", {
      href: article.url,
      className: "stretched-link",
      __self: this,
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 62,
        columnNumber: 15
      }
    }, article.title))), /* @__PURE__ */ React.createElement(Card.Text, {
      __self: this,
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 67,
        columnNumber: 11
      }
    }, /* @__PURE__ */ React.createElement(ReactPlaceholder, {
      ready: this.state.ready,
      customPlaceholder: /* @__PURE__ */ React.createElement(__\u00E7js$synthetic__$2.TextBlock, {
        color: "#E0E0E0",
        rows: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName$b,
          lineNumber: 70,
          columnNumber: 34
        }
      }),
      showLoadingAnimation: true,
      __self: this,
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 68,
        columnNumber: 13
      }
    }, article.description))), /* @__PURE__ */ React.createElement(Card.Footer, {
      className: "bg-transparent border-0",
      __self: this,
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 77,
        columnNumber: 9
      }
    }, /* @__PURE__ */ React.createElement("small", {
      className: "text-muted",
      style: {
        display: "flex"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 78,
        columnNumber: 11
      }
    }, /* @__PURE__ */ React.createElement(ReactPlaceholder, {
      ready: this.state.ready,
      type: "textRow",
      style: {
        width: "40%",
        marginRight: "3px"
      },
      showLoadingAnimation: true,
      __self: this,
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 79,
        columnNumber: 13
      }
    }, formatDate(`${article.publishedAt}`), " |", " "), /* @__PURE__ */ React.createElement(ReactPlaceholder, {
      ready: this.state.ready,
      type: "textRow",
      style: {
        width: "40%"
      },
      showLoadingAnimation: true,
      __self: this,
      __source: {
        fileName: _jsxFileName$b,
        lineNumber: 87,
        columnNumber: 13
      }
    }, (_a = article.source) == null ? void 0 : _a.name))));
  }
}
var _jsxFileName$a = "/home/mikibo/Desktop/Coding/WebDev/Projects/React/news-portal/src/components/TopHeadLine.jsx";
function TopHeadLinesTemplate(props) {
  const {
    category,
    articles = new Array(4).fill({})
  } = props;
  return /* @__PURE__ */ React.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 11,
      columnNumber: 7
    }
  }, category), /* @__PURE__ */ React.createElement(CardGroup, {
    className: "p-2",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName$a,
      lineNumber: 12,
      columnNumber: 7
    }
  }, Array.from({
    length: 4
  }).map((_, idx) => {
    return /* @__PURE__ */ React.createElement(NewsCard, {
      article: articles[idx],
      __self: this,
      __source: {
        fileName: _jsxFileName$a,
        lineNumber: 21,
        columnNumber: 18
      }
    });
  })));
}
var _jsxFileName$9 = "/home/mikibo/Desktop/Coding/WebDev/Projects/React/news-portal/src/components/TopHeadLines.jsx";
function Categories(props) {
  props.topHeadlines.pop();
  return /* @__PURE__ */ React.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName$9,
      lineNumber: 7,
      columnNumber: 5
    }
  }, props.topHeadlines.map((el, i) => {
    return /* @__PURE__ */ React.createElement(TopHeadLinesTemplate, {
      category: props.categories[i],
      articles: el.articles,
      __self: this,
      __source: {
        fileName: _jsxFileName$9,
        lineNumber: 10,
        columnNumber: 11
      }
    });
  }));
}
var _jsxFileName$8 = "/home/mikibo/Desktop/Coding/WebDev/Projects/React/news-portal/src/components/Link.jsx";
function Link({
  name
}) {
  return /* @__PURE__ */ React.createElement(Nav.Link, {
    as: NavLink,
    to: name.toLowerCase(),
    className: ({
      isActive
    }) => isActive ? "active" : "",
    __self: this,
    __source: {
      fileName: _jsxFileName$8,
      lineNumber: 7,
      columnNumber: 7
    }
  }, name);
}
var _jsxFileName$7 = "/home/mikibo/Desktop/Coding/WebDev/Projects/React/news-portal/src/components/SearchLink.jsx";
function SearchLink(_a) {
  var _b = _a, {
    to
  } = _b, props = __objRest(_b, [
    "to"
  ]);
  let location = useLocation();
  return /* @__PURE__ */ React.createElement(NavLink, __spreadProps(__spreadValues({
    to: to + location.search
  }, props), {
    __self: this,
    __source: {
      fileName: _jsxFileName$7,
      lineNumber: 7,
      columnNumber: 9
    }
  }));
}
var _jsxFileName$6 = "/home/mikibo/Desktop/Coding/WebDev/Projects/React/news-portal/src/components/navbar.jsx";
function NavigationBar({
  categories,
  setQueryValue,
  queryValue
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  let navigate = useNavigate();
  useLocation();
  useSearchParams();
  return /* @__PURE__ */ React.createElement(Navbar, {
    expand: "lg",
    color: "faded",
    bg: "light",
    __self: this,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 21,
      columnNumber: 5
    }
  }, /* @__PURE__ */ React.createElement(Container, {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 22,
      columnNumber: 7
    }
  }, /* @__PURE__ */ React.createElement(Navbar.Brand, {
    as: NavLink,
    to: "/",
    className: "me-auto d-flex align-items-center fs-2",
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 23,
      columnNumber: 9
    }
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "blacked p-2 bg-dark rounded text-light",
    __self: this,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "News"), "Portal"), /* @__PURE__ */ React.createElement(Navbar.Toggle, {
    className: "me-2",
    onClick: () => {
      setIsOpen(!isOpen);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 32,
      columnNumber: 9
    }
  }), /* @__PURE__ */ React.createElement(Navbar.Collapse, {
    __self: this,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 38,
      columnNumber: 9
    }
  }, /* @__PURE__ */ React.createElement(Nav, {
    className: "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 39,
      columnNumber: 11
    }
  }, categories.map((link) => /* @__PURE__ */ React.createElement(Link, {
    name: link,
    __self: this,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 41,
      columnNumber: 15
    }
  }))), /* @__PURE__ */ React.createElement(Form, {
    className: "d-flex text-left",
    onSubmit: (event) => {
      event.preventDefault();
      navigate("search");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 44,
      columnNumber: 11
    }
  }, /* @__PURE__ */ React.createElement(FormControl, {
    type: "text",
    placeholder: "Search",
    value: queryValue,
    className: "me-2",
    onChange: (event) => {
      setQueryValue(event.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 51,
      columnNumber: 13
    }
  }), /* @__PURE__ */ React.createElement(Button, {
    as: SearchLink,
    to: "search",
    variant: "outline-success",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName$6,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Search")))));
}
var _jsxFileName$5 = "/home/mikibo/Desktop/Coding/WebDev/Projects/React/news-portal/src/components/Footer.jsx";
function Footer({
  user,
  signOut
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "d-flex align-items-center justify-content-between px-4 py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName$5,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "d-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName$5,
      lineNumber: 6,
      columnNumber: 7
    }
  }, /* @__PURE__ */ React.createElement("img", {
    src: user.photoURL,
    className: "rounded-circle me-2 w-25",
    __self: this,
    __source: {
      fileName: _jsxFileName$5,
      lineNumber: 7,
      columnNumber: 9
    }
  }), /* @__PURE__ */ React.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName$5,
      lineNumber: 8,
      columnNumber: 9
    }
  }, user.displayName)), /* @__PURE__ */ React.createElement("a", {
    href: "",
    onClick: signOut,
    __self: this,
    __source: {
      fileName: _jsxFileName$5,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "SignOut"));
}
var _jsxFileName$4 = "/home/mikibo/Desktop/Coding/WebDev/Projects/React/news-portal/src/MainLayout.jsx";
function MainLayout({
  categories,
  setQueryValue,
  queryValue,
  user,
  signOut
}) {
  return /* @__PURE__ */ React.createElement(Container, {
    className: "p-0",
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName$4,
      lineNumber: 16,
      columnNumber: 5
    }
  }, /* @__PURE__ */ React.createElement(NavigationBar, {
    setQueryValue,
    queryValue,
    categories,
    __self: this,
    __source: {
      fileName: _jsxFileName$4,
      lineNumber: 17,
      columnNumber: 7
    }
  }), /* @__PURE__ */ React.createElement(Container, {
    className: "p-16",
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName$4,
      lineNumber: 22,
      columnNumber: 7
    }
  }, /* @__PURE__ */ React.createElement(Outlet, {
    __self: this,
    __source: {
      fileName: _jsxFileName$4,
      lineNumber: 23,
      columnNumber: 9
    }
  })), /* @__PURE__ */ React.createElement(Footer, {
    user,
    signOut,
    __self: this,
    __source: {
      fileName: _jsxFileName$4,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
}
var _jsxFileName$3 = "/home/mikibo/Desktop/Coding/WebDev/Projects/React/news-portal/src/components/Category.jsx";
class Category extends React.Component {
  componentDidMount() {
    this.props.loadNews();
  }
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CardGroup, {
      xs: 3,
      md: 4,
      className: "p-2",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName$3,
        lineNumber: 13,
        columnNumber: 9
      }
    }, this.props.articles.map((article, idx) => /* @__PURE__ */ React.createElement(NewsCard, {
      key: idx,
      article,
      __self: this,
      __source: {
        fileName: _jsxFileName$3,
        lineNumber: 23,
        columnNumber: 13
      }
    }))), /* @__PURE__ */ React.createElement("div", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName$3,
        lineNumber: 26,
        columnNumber: 9
      }
    }, /* @__PURE__ */ React.createElement(Button, {
      variant: "outline-success",
      size: "lg",
      onClick: () => {
        this.props.handleLoadMore();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName$3,
        lineNumber: 27,
        columnNumber: 11
      }
    }, "Load More")));
  }
}
var _jsxFileName$2 = "/home/mikibo/Desktop/Coding/WebDev/Projects/React/news-portal/src/components/Search.jsx";
const Search = (props) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
  __self: globalThis,
  __source: {
    fileName: _jsxFileName$2,
    lineNumber: 6,
    columnNumber: 5
  }
}, 'Search results for "', props.queryValue, '" '), /* @__PURE__ */ React.createElement(Category, {
  loadNews: () => props.search(false),
  handleLoadMore: () => props.search(true),
  articles: props.searchResult.articles,
  __self: globalThis,
  __source: {
    fileName: _jsxFileName$2,
    lineNumber: 7,
    columnNumber: 5
  }
}));
var _jsxFileName$1 = "/home/mikibo/Desktop/Coding/WebDev/Projects/React/news-portal/src/components/SignInScreen.jsx";
function SignInScreen({
  uiConfig,
  firebaseAuth
}) {
  return /* @__PURE__ */ React.createElement(Container, {
    className: "text-center p-5",
    __self: this,
    __source: {
      fileName: _jsxFileName$1,
      lineNumber: 33,
      columnNumber: 5
    }
  }, /* @__PURE__ */ React.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName$1,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Welcome to NewsPortal"), /* @__PURE__ */ React.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName$1,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "Please sign-in:"), /* @__PURE__ */ React.createElement(StyledFirebaseAuth, {
    uiConfig,
    firebaseAuth,
    __self: this,
    __source: {
      fileName: _jsxFileName$1,
      lineNumber: 36,
      columnNumber: 7
    }
  }));
}
class NewsAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }
  async search({ pageSize, page, query }) {
    let results = await this.getNews({ endpoint: "everything", pageSize, page, query });
    return results;
  }
  async topHeadlines({ categories, category, country_code, pageSize, page }) {
    const config = {
      endpoint: "top-headlines",
      category,
      country_code,
      pageSize,
      page
    };
    if (category) {
      let catNews = await this.getNews(config);
      return catNews;
    }
    let promisesArr = categories.map((category2) => {
      return this.getNews(__spreadProps(__spreadValues({}, config), { category: category2 })).then((news) => news);
    });
    let resolvedPromises = await Promise.allSettled(promisesArr);
    return resolvedPromises.map((el) => el.value);
  }
  async getNews({ endpoint, category, country_code, pageSize, page = 1, query }) {
    let url = `https://newsapi.org/v2/${endpoint}?${country_code ? "country=" + country_code + "&" : ""}${category ? `category=${category}&` : ""}pageSize=${pageSize}&page=${page}&${query ? `q=${query}` : ""}&apiKey=${this.apiKey}`;
    let response = await fetch(url);
    return await response.json();
  }
}
var _jsxFileName = "/home/mikibo/Desktop/Coding/WebDev/Projects/React/news-portal/src/main.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
    __publicField(this, "signOut", () => {
      firebase.auth().signOut();
    });
    this.newsapi = new NewsAPI("0b990834fb0b430ebf218f7ec1014b44");
    this.firebaseConfig = {
      apiKey: "AIzaSyCiFkPOlJRrte5CV75AFgHWfgLNt9QBjgc",
      authDomain: "news-portal-123.firebaseapp.com",
      projectId: "news-portal-123",
      storageBucket: "news-portal-123.appspot.com",
      messagingSenderId: "215947503843",
      appId: "1:215947503843:web:6f6778b6a921f0f2717dd6"
    };
    this.app = firebase.initializeApp(this.firebaseConfig);
    this.uiConfig = {
      signInFlow: "popup",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.FacebookAuthProvider.PROVIDER_ID, firebase.auth.EmailAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccessWithAuthResult: async (authRes) => {
          console.log(authRes);
          this.signInSuccess(authRes.user.multiFactor.user);
        }
      }
    };
    this.state = {
      user: null,
      categories: ["Business", "Entertainment", "Health", "Science", "Sports", "Technology", "General"],
      city: null,
      country_code: null,
      latitude: null,
      longitude: null,
      topHeadlines: new Array(7).fill({}),
      language: "en",
      page: 1,
      articlesArr: new Array(7).fill(new Array(16).fill({})),
      searchResult: {
        articles: new Array(16).fill({})
      },
      queryValue: ""
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(({
      user
    }) => {
      if (user) {
        this.setState({
          user: user.multiFactor.user
        });
      }
    });
    this.getLocation().then((data) => {
      let {
        latitude,
        longitude,
        country_code,
        city
      } = data.ip;
      this.setState({
        latitude,
        longitude,
        country_code,
        city
      });
      this.newsapi.topHeadlines(__spreadValues({
        pageSize: "4"
      }, this.state)).then((newsArr) => {
        this.setState({
          topHeadlines: newsArr
        });
      });
    });
  }
  loadNews(category, idx) {
    this.getLocation().then((data) => {
      this.state.country_code = data.ip.country_code;
      this.newsapi.topHeadlines(__spreadValues({
        pageSize: "16",
        page: this.state.page,
        category
      }, this.state)).then((news) => {
        const articlesArr = this.state.articlesArr.slice();
        const prevArticles = articlesArr[idx].slice();
        prevArticles.splice(-16, 16, ...news.articles);
        articlesArr[idx] = prevArticles;
        this.setState({
          articlesArr
        });
      });
    });
  }
  handleLoadMore(category, idx) {
    const articlesArr = this.state.articlesArr.slice();
    articlesArr[idx] = articlesArr[idx].concat(new Array(16).fill({}));
    this.setState({
      articlesArr,
      page: this.state.page + 1
    });
    this.loadNews(category, idx);
  }
  handleSearch(more) {
    console.log("search result:", this.state.searchResult);
    const searchResult = Object.assign({}, this.state.searchResult);
    searchResult.articles = this.state.searchResult.articles.slice();
    if (more) {
      searchResult.articles = searchResult.articles.concat(new Array(16).fill({}));
      this.setState((state) => ({
        searchResult
      }));
      this.getLocation().then((res) => {
        this.newsapi.search({
          pageSize: "16",
          page: this.state.page,
          query: this.state.queryValue
        }).then((news) => {
          searchResult.articles.splice(-16, 16, ...news.articles);
          this.setState((state) => ({
            searchResult,
            page: this.state.page + 1
          }));
        });
      });
      return;
    }
    this.getLocation().then((res) => {
      this.newsapi.search({
        pageSize: "16",
        page: this.state.page,
        query: this.state.queryValue
      }).then((news) => {
        searchResult.articles.splice(-16, 16, ...news.articles);
        this.setState((state) => ({
          searchResult,
          page: this.state.page + 1
        }));
      });
    });
  }
  signInSuccess(user) {
    this.setState({
      user
    });
  }
  setQueryValue(queryValue) {
    this.setState({
      queryValue
    });
  }
  async getLocation() {
    let response = await fetch("https://ip.nf/me.json");
    return await response.json();
  }
  render() {
    if (!this.state.user) {
      return /* @__PURE__ */ React.createElement(SignInScreen, {
        uiConfig: this.uiConfig,
        firebaseAuth: firebase.auth(),
        handleSignInStateChange: this.handleSignInStateChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 9
        }
      });
    }
    return /* @__PURE__ */ React.createElement(BrowserRouter, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 7
      }
    }, /* @__PURE__ */ React.createElement(Routes, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }
    }, /* @__PURE__ */ React.createElement(Route, {
      path: "/",
      element: /* @__PURE__ */ React.createElement(MainLayout, {
        setQueryValue: this.setQueryValue.bind(this),
        queryValue: this.state.queryValue,
        categories: this.state.categories.slice(),
        user: this.state.user,
        signOut: this.signOut,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 15
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 11
      }
    }, /* @__PURE__ */ React.createElement(Route, {
      index: true,
      element: /* @__PURE__ */ React.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 17
        }
      }, /* @__PURE__ */ React.createElement(ControlledCarousel, {
        hotTopics: this.state.topHeadlines.slice().pop(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 19
        }
      }), /* @__PURE__ */ React.createElement(Categories, {
        topHeadlines: this.state.topHeadlines.slice(),
        categories: this.state.categories,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 19
        }
      }), /* @__PURE__ */ React.createElement(WeatherWidget, {
        lat: this.state.latitude,
        lon: this.state.longitude,
        city: this.state.city,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 19
        }
      })),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 13
      }
    }), this.state.categories.slice().map((cat, idx) => /* @__PURE__ */ React.createElement(Route, {
      path: cat,
      element: /* @__PURE__ */ React.createElement(Category, {
        key: idx,
        loadNews: () => {
          this.loadNews(cat, idx);
        },
        handleLoadMore: () => {
          this.handleLoadMore(cat, idx);
        },
        articles: (() => {
          return this.state.articlesArr[idx];
        })(),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 19
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 15
      }
    })), /* @__PURE__ */ React.createElement(Route, {
      path: "search",
      element: /* @__PURE__ */ React.createElement(Search, {
        search: (more) => {
          this.handleSearch(more);
        },
        searchResult: this.state.searchResult,
        queryValue: this.state.queryValue,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 17
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 13
      }
    }))));
  }
}
ReactDOM.render(/* @__PURE__ */ React.createElement(App, {
  __self: globalThis,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 275,
    columnNumber: 17
  }
}), document.getElementById("root"));
//# sourceMappingURL=index.4a4aff80.js.map
