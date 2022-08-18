import { ref as l, computed as i, watch as S, onMounted as T, onBeforeUnmount as B, openBlock as C, createElementBlock as k, normalizeClass as I, unref as s, renderSlot as M, createElementVNode as U, toDisplayString as q } from "vue";
const A = ["for"], H = {
  __name: "FloatLabel",
  props: {
    label: { type: String, default: "" },
    float: { type: Boolean },
    onFocus: { type: Boolean, default: !1 }
  },
  setup(u) {
    const a = u;
    let d = l(null), c = l(""), o = l("");
    l(a.label);
    let t = l({}), r = l(""), p = l(""), f = l(!1), m = l(!1);
    const h = "[type=date], [type=datetime-local], [type=datetime], [type=email], [type=month], [type=number], [type=password], [type=search], [type=tel], [type=text], [type=time], [type=url], [type=week], textarea, select", v = i(() => a.label), g = i(() => o.value && c.value !== o.value), F = i(() => {
      let e = !1;
      return a.float ? e = a.float : e = f.value, e;
    }), y = () => {
      c.value = v.value ? a.label : o.value;
    }, E = () => t.value.getAttribute("id"), x = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (n) => (n ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> n / 4).toString(16)), _ = () => {
      switch (p.value) {
        case "input":
        case "textarea":
          return t.value.placeholder;
        case "select":
          let e = t.value.querySelector("option[disabled][selected]");
          return e ? e.innerHTML : "";
        default:
          return "";
      }
    }, w = () => {
      r.value || (r.value = x(), t.value.id = r.value);
    }, L = () => {
      t.value.addEventListener("input", b);
    }, b = (e) => {
      f.value = e.target.value.length > 0;
    }, V = () => {
      t.value.removeEventListener("input", b);
    };
    return S(v, (e, n) => {
      y();
    }), T(() => {
      t.value = d.value.querySelector(h), m.value = !!t.value, m.value ? (r.value = E(), p.value = t.value ? t.value.tagName.toLowerCase() : "", o.value = _(), w(), setTimeout(() => {
        L();
      }, 200)) : o.value = "", y();
    }), B(() => {
      V();
    }), (e, n) => (C(), k("div", {
      class: I(["float-label", { "float-label--fade-anim": s(g), "float-label--on-focus": a.onFocus, "float-label--fixed": s(F) }]),
      ref_key: "root",
      ref: d
    }, [
      M(e.$slots, "default"),
      U("label", {
        class: "float-label__label",
        for: s(r)
      }, q(s(c)), 9, A)
    ], 2));
  }
}, z = {
  install: (u, a) => {
    u.component("FloatLabel", H);
  }
};
export {
  z as default
};
