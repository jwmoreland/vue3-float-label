import { ref as t, computed as m, watch as I, onMounted as N, onBeforeUnmount as M, createElementBlock as v, openBlock as d, normalizeClass as g, renderSlot as W, unref as u, createElementVNode as x, toDisplayString as E, createCommentVNode as q, createTextVNode as A } from "vue";
const H = {
  key: 0,
  class: "float-label__label float-label--no-click"
}, R = { class: "float-label__label__text" }, z = ["for"], D = {
  key: 0,
  class: "float-label__label__bg"
}, O = { class: "float-label__label__text" }, P = "[type=date], [type=datetime-local], [type=datetime], [type=email], [type=month], [type=number], [type=password], [type=search], [type=tel], [type=text], [type=time], [type=url], [type=week], textarea, select", $ = {
  __name: "FloatLabel",
  props: {
    label: { type: String, default: "" },
    float: { type: Boolean, default: null },
    onFocus: { type: Boolean, default: !1 }
  },
  setup(F) {
    const s = F;
    let b = t(null), c = t(""), r = t(""), k = t(null), e = t({}), n = t(""), a = t(""), i = t(!1), p = t(!1), _ = t(!1);
    const y = m(() => s.label), L = m(() => a.value === "select" ? !0 : r.value && c.value !== r.value), w = m(() => {
      let l = !1;
      return s.float ? l = !0 : l = i.value && i.value !== "0", l;
    }), h = () => {
      c.value = y.value ? s.label : r.value;
    }, C = () => e.value.getAttribute("id"), T = () => ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, (o) => (o ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> o / 4).toString(16)), V = () => {
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
    }, S = () => {
      n.value || (n.value = T(), e.value.id = n.value);
    }, B = () => {
      a.value === "select" ? e.value.addEventListener("change", f) : e.value.addEventListener("input", f);
    }, U = () => {
      a.value === "select" ? e.value.removeEventListener("change", f) : e.value.removeEventListener("input", f);
    }, f = (l) => {
      i.value = l.target.value.length > 0;
    };
    return I(y, (l, o) => {
      h();
    }), N(() => {
      k.value = s.label, e.value = b.value.querySelector(P), p.value = !!e.value, _.value = s.float === null, p.value ? (n.value = C(), a.value = e.value ? e.value.tagName.toLowerCase() : "", i.value = !!e.value.value, r.value = V(), S(), _.value === !0 && setTimeout(() => {
        B();
      }, 200)) : r.value = "", h();
    }), M(() => {
      p.value && U();
    }), (l, o) => (d(), v("div", {
      class: g(["float-label", { "float-label--fade-anim": L.value, "float-label--on-focus": s.onFocus, "float-label--fixed": w.value }]),
      ref_key: "root",
      ref: b
    }, [
      W(l.$slots, "default"),
      u(a) === "" ? (d(), v("div", H, [
        x("span", R, E(u(c)), 1)
      ])) : (d(), v("label", {
        key: 1,
        class: g(["float-label__label", { "float-label--no-click": u(a) === "select" }]),
        for: u(n)
      }, [
        u(a) === "textarea" ? (d(), v("span", D)) : q("", !0),
        o[0] || (o[0] = A()),
        x("span", O, E(u(c)), 1)
      ], 10, z))
    ], 2));
  }
};
export {
  $ as FloatLabel
};
