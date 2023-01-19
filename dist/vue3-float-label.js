import { ref as t, computed as _, watch as I, onMounted as N, onBeforeUnmount as M, openBlock as f, createElementBlock as v, normalizeClass as x, unref as o, renderSlot as W, createElementVNode as E, toDisplayString as F, createCommentVNode as q, createTextVNode as A } from "vue";
const H = {
  key: 0,
  class: "float-label__label float-label--no-click"
}, z = { class: "float-label__label__text" }, D = ["for"], O = {
  key: 0,
  class: "float-label__label__bg"
}, P = /* @__PURE__ */ A(), Q = { class: "float-label__label__text" }, R = {
  __name: "FloatLabel",
  props: {
    label: { type: String, default: "" },
    float: { type: Boolean, default: null },
    onFocus: { type: Boolean, default: !1 }
  },
  setup(p) {
    const s = p;
    let b = t(null), c = t(""), n = t("");
    t(s.label);
    let e = t({}), u = t(""), a = t(""), i = t(!1), m = t(!1), y = t(!1);
    const k = "[type=date], [type=datetime-local], [type=datetime], [type=email], [type=month], [type=number], [type=password], [type=search], [type=tel], [type=text], [type=time], [type=url], [type=week], textarea, select", h = _(() => s.label), L = _(() => a.value === "select" ? !0 : n.value && c.value !== n.value), w = _(() => {
      let l = !1;
      return s.float ? l = !0 : l = i.value && i.value !== "0", l;
    }), g = () => {
      c.value = h.value ? s.label : n.value;
    }, C = () => e.value.getAttribute("id"), S = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (r) => (r ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> r / 4).toString(16)), T = () => {
      switch (a.value) {
        case "input":
        case "textarea":
          return e.value.placeholder;
        case "select":
          let l = e.value.querySelector("option:disabled");
          return l ? l.innerHTML : "";
        default:
          return "";
      }
    }, V = () => {
      u.value || (u.value = S(), e.value.id = u.value);
    }, B = () => {
      a.value === "select" ? e.value.addEventListener("change", d) : e.value.addEventListener("input", d);
    }, U = () => {
      a.value === "select" ? e.value.removeEventListener("change", d) : e.value.removeEventListener("input", d);
    }, d = (l) => {
      i.value = l.target.value.length > 0;
    };
    return I(h, (l, r) => {
      g();
    }), N(() => {
      e.value = b.value.querySelector(k), m.value = !!e.value, y.value = s.float === null, m.value ? (u.value = C(), a.value = e.value ? e.value.tagName.toLowerCase() : "", i.value = !!e.value.value, n.value = T(), V(), y.value === !0 && setTimeout(() => {
        B();
      }, 200)) : n.value = "", g();
    }), M(() => {
      m.value && U();
    }), (l, r) => (f(), v("div", {
      class: x(["float-label", { "float-label--fade-anim": o(L), "float-label--on-focus": s.onFocus, "float-label--fixed": o(w) }]),
      ref_key: "root",
      ref: b
    }, [
      W(l.$slots, "default"),
      o(a) === "" ? (f(), v("div", H, [
        E("span", z, F(o(c)), 1)
      ])) : (f(), v("label", {
        key: 1,
        class: x(["float-label__label", { "float-label--no-click": o(a) === "select" }]),
        for: o(u)
      }, [
        o(a) === "textarea" ? (f(), v("span", O)) : q("", !0),
        P,
        E("span", Q, F(o(c)), 1)
      ], 10, D))
    ], 2));
  }
}, j = {
  install: (p, s) => {
    p.component("FloatLabel", R);
  }
};
export {
  j as default
};
