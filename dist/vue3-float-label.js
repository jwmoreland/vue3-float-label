import { ref as o, computed as x, watch as I, onMounted as M, onBeforeUnmount as j, openBlock as v, createElementBlock as _, normalizeClass as w, unref as s, renderSlot as W, createElementVNode as e, toDisplayString as k, createCommentVNode as q, createTextVNode as D, Fragment as H, createVNode as i, withCtx as d, withDirectives as P, isRef as R, vModelText as z, createApp as O } from "vue";
const Q = {
  key: 0,
  class: "float-label__label float-label--no-click"
}, G = { class: "float-label__label__text" }, J = ["for"], K = {
  key: 0,
  class: "float-label__label__bg"
}, X = /* @__PURE__ */ D(), Y = { class: "float-label__label__text" }, c = {
  __name: "FloatLabel",
  props: {
    label: { type: String, default: "" },
    float: { type: Boolean, default: null },
    onFocus: { type: Boolean, default: !1 }
  },
  setup(g) {
    const a = g;
    let h = o(null), r = o(""), n = o("");
    o(a.label);
    let t = o({}), p = o(""), u = o(""), m = o(!1), y = o(!1), T = o(!1);
    const S = "[type=date], [type=datetime-local], [type=datetime], [type=email], [type=month], [type=number], [type=password], [type=search], [type=tel], [type=text], [type=time], [type=url], [type=week], textarea, select", E = x(() => a.label), V = x(() => u.value === "select" ? !0 : n.value && r.value !== n.value), C = x(() => {
      let l = !1;
      return a.float ? l = !0 : l = m.value && m.value !== "0", l;
    }), F = () => {
      r.value = E.value ? a.label : n.value;
    }, L = () => t.value.getAttribute("id"), U = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (f) => (f ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> f / 4).toString(16)), $ = () => {
      switch (u.value) {
        case "input":
        case "textarea":
          return t.value.placeholder;
        case "select":
          let l = t.value.querySelector("option:disabled");
          return l ? l.innerHTML : "";
        default:
          return "";
      }
    }, B = () => {
      p.value || (p.value = U(), t.value.id = p.value);
    }, N = () => {
      u.value === "select" ? t.value.addEventListener("change", b) : t.value.addEventListener("input", b);
    }, A = () => {
      u.value === "select" ? t.value.removeEventListener("change", b) : t.value.removeEventListener("input", b);
    }, b = (l) => {
      m.value = l.target.value.length > 0;
    };
    return I(E, (l, f) => {
      F();
    }), M(() => {
      t.value = h.value.querySelector(S), y.value = !!t.value, T.value = a.float === null, y.value ? (p.value = L(), u.value = t.value ? t.value.tagName.toLowerCase() : "", m.value = !!t.value.value, n.value = $(), B(), T.value === !0 && setTimeout(() => {
        N();
      }, 200)) : n.value = "", F();
    }), j(() => {
      y.value && A();
    }), (l, f) => (v(), _("div", {
      class: w(["float-label", { "float-label--fade-anim": s(V), "float-label--on-focus": a.onFocus, "float-label--fixed": s(C) }]),
      ref_key: "root",
      ref: h
    }, [
      W(l.$slots, "default"),
      s(u) === "" ? (v(), _("div", Q, [
        e("span", G, k(s(r)), 1)
      ])) : (v(), _("label", {
        key: 1,
        class: w(["float-label__label", { "float-label--no-click": s(u) === "select" }]),
        for: s(p)
      }, [
        s(u) === "textarea" ? (v(), _("span", K)) : q("", !0),
        X,
        e("span", Y, k(s(r)), 1)
      ], 10, J))
    ], 2));
  }
}, Z = /* @__PURE__ */ e("input", {
  id: "justin-id",
  type: "text",
  placeholder: "This is placeholder text"
}, null, -1), ee = /* @__PURE__ */ e("input", { type: "text" }, null, -1), te = /* @__PURE__ */ e("textarea", {
  name: "textarea",
  id: "textarea",
  cols: "30",
  rows: "10",
  placeholder: "This is a text area"
}, null, -1), le = /* @__PURE__ */ e("select", {
  name: "justins-select",
  id: "justins-select"
}, [
  /* @__PURE__ */ e("option", {
    value: "",
    disabled: "disabled",
    selected: ""
  }, "Select a number"),
  /* @__PURE__ */ e("option", { value: "1" }, "one"),
  /* @__PURE__ */ e("option", { value: "2" }, "two"),
  /* @__PURE__ */ e("option", { value: "3" }, "three"),
  /* @__PURE__ */ e("option", { value: "4" }, "four"),
  /* @__PURE__ */ e("option", { value: "5" }, "five")
], -1), ae = /* @__PURE__ */ e("div", { style: { padding: "24px", border: "1px solid red" } }, null, -1), oe = {
  __name: "App",
  setup(g) {
    let a = o("This is existing v-model text");
    return (h, r) => (v(), _(H, null, [
      i(c, { label: "This is label text" }, {
        default: d(() => [
          Z
        ]),
        _: 1
      }),
      i(c, { label: "This has no placeholder but a :label prop" }, {
        default: d(() => [
          ee
        ]),
        _: 1
      }),
      i(c, null, {
        default: d(() => [
          te
        ]),
        _: 1
      }),
      i(c, { label: "Select a big number" }, {
        default: d(() => [
          le
        ]),
        _: 1
      }),
      i(c, null, {
        default: d(() => [
          P(e("input", {
            type: "text",
            "onUpdate:modelValue": r[0] || (r[0] = (n) => R(a) ? a.value = n : a = n),
            placeholder: "Pre-filled Text"
          }, null, 512), [
            [z, s(a)]
          ])
        ]),
        _: 1
      }),
      i(c, { label: "This is a <div> with a red border" }, {
        default: d(() => [
          ae
        ]),
        _: 1
      })
    ], 64));
  }
};
O(oe).mount("#app");
