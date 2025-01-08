import { ref as t, computed as m, watch as U, onMounted as I, onBeforeUnmount as N, openBlock as f, createElementBlock as v, normalizeClass as g, renderSlot as M, unref as u, createElementVNode as x, toDisplayString as E, createCommentVNode as W, createTextVNode as q } from "vue";
const A = {
  key: 0,
  class: "float-label__label float-label--no-click"
}, H = { class: "float-label__label__text" }, z = ["for"], D = {
  key: 0,
  class: "float-label__label__bg"
}, O = { class: "float-label__label__text" }, P = "[type=date], [type=datetime-local], [type=datetime], [type=email], [type=month], [type=number], [type=password], [type=search], [type=tel], [type=text], [type=time], [type=url], [type=week], textarea, select", R = {
  __name: "FloatLabel",
  props: {
    label: { type: String, default: "" },
    float: { type: Boolean, default: null },
    onFocus: { type: Boolean, default: !1 }
  },
  setup(F) {
    const s = F;
    let b = t(null), c = t(""), r = t("");
    t(s.label);
    let e = t({}), n = t(""), a = t(""), i = t(!1), p = t(!1), _ = t(!1);
    const y = m(() => s.label), k = m(() => a.value === "select" ? !0 : r.value && c.value !== r.value), L = m(() => {
      let l = !1;
      return s.float ? l = !0 : l = i.value && i.value !== "0", l;
    }), h = () => {
      c.value = y.value ? s.label : r.value;
    }, w = () => e.value.getAttribute("id"), C = () => ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, (o) => (o ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> o / 4).toString(16)), T = () => {
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
      n.value || (n.value = C(), e.value.id = n.value);
    }, S = () => {
      a.value === "select" ? e.value.addEventListener("change", d) : e.value.addEventListener("input", d);
    }, B = () => {
      a.value === "select" ? e.value.removeEventListener("change", d) : e.value.removeEventListener("input", d);
    }, d = (l) => {
      i.value = l.target.value.length > 0;
    };
    return U(y, (l, o) => {
      h();
    }), I(() => {
      e.value = b.value.querySelector(P), p.value = !!e.value, _.value = s.float === null, p.value ? (n.value = w(), a.value = e.value ? e.value.tagName.toLowerCase() : "", i.value = !!e.value.value, r.value = T(), V(), _.value === !0 && setTimeout(() => {
        S();
      }, 200)) : r.value = "", h();
    }), N(() => {
      p.value && B();
    }), (l, o) => (f(), v("div", {
      class: g(["float-label", { "float-label--fade-anim": k.value, "float-label--on-focus": s.onFocus, "float-label--fixed": L.value }]),
      ref_key: "root",
      ref: b
    }, [
      M(l.$slots, "default"),
      u(a) === "" ? (f(), v("div", A, [
        x("span", H, E(u(c)), 1)
      ])) : (f(), v("label", {
        key: 1,
        class: g(["float-label__label", { "float-label--no-click": u(a) === "select" }]),
        for: u(n)
      }, [
        u(a) === "textarea" ? (f(), v("span", D)) : W("", !0),
        o[0] || (o[0] = q()),
        x("span", O, E(u(c)), 1)
      ], 10, z))
    ], 2));
  }
};
export {
  R as default
};
