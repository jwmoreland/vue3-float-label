import { computed as e, createCommentVNode as t, createElementBlock as n, createElementVNode as r, createTextVNode as i, normalizeClass as a, onBeforeUnmount as o, onMounted as s, openBlock as c, ref as l, renderSlot as u, toDisplayString as d, unref as f, watch as p } from "vue";
//#region src/components/FloatLabel.vue
var m = {
	key: 0,
	class: "float-label__label float-label--no-click"
}, h = { class: "float-label__label__text" }, g = ["for"], _ = {
	key: 0,
	class: "float-label__label__bg"
}, v = { class: "float-label__label__text" }, y = "[type=date], [type=datetime-local], [type=datetime], [type=email], [type=month], [type=number], [type=password], [type=search], [type=tel], [type=text], [type=time], [type=url], [type=week], textarea, select", b = {
	__name: "FloatLabel",
	props: {
		label: {
			type: String,
			default: ""
		},
		float: {
			type: Boolean,
			default: null
		},
		onFocus: {
			type: Boolean,
			default: !1
		}
	},
	setup(b) {
		let x = b, S = l(null), C = l(""), w = l(""), T = l(null), E = l({}), D = l(""), O = l(""), k = l(!1), A = l(!1), j = l(!1), M = e(() => x.label), N = e(() => O.value === "select" ? !0 : w.value && C.value !== w.value), P = e(() => {
			let e = !1;
			return e = x.float ? !0 : k.value && k.value !== "0", e;
		}), F = () => {
			C.value = M.value ? x.label : w.value;
		}, I = () => E.value.getAttribute("id"), L = () => "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)), R = () => {
			switch (O.value) {
				case "input":
				case "textarea": return E.value.placeholder;
				case "select":
					let e = E.value.querySelector("option:disabled");
					return e ? e.innerHTML : "";
				default: return "";
			}
		}, z = () => {
			D.value || (D.value = L(), E.value.id = D.value);
		}, B = () => {
			O.value === "select" ? E.value.addEventListener("change", H) : E.value.addEventListener("input", H);
		}, V = () => {
			O.value === "select" ? E.value.removeEventListener("change", H) : E.value.removeEventListener("input", H);
		}, H = (e) => {
			k.value = e.target.value.length > 0;
		};
		return p(M, (e, t) => {
			F();
		}), s(() => {
			T.value = x.label, E.value = S.value.querySelector(y), A.value = !!E.value, j.value = x.float === null, A.value ? (D.value = I(), O.value = E.value ? E.value.tagName.toLowerCase() : "", k.value = !!E.value.value, w.value = R(), z(), j.value === !0 && setTimeout(() => {
				B();
			}, 200)) : w.value = "", F();
		}), o(() => {
			A.value && V();
		}), (e, o) => (c(), n("div", {
			class: a(["float-label", {
				"float-label--fade-anim": N.value,
				"float-label--on-focus": x.onFocus,
				"float-label--fixed": P.value
			}]),
			ref_key: "root",
			ref: S
		}, [u(e.$slots, "default"), f(O) === "" ? (c(), n("div", m, [r("span", h, d(f(C)), 1)])) : (c(), n("label", {
			key: 1,
			class: a(["float-label__label", { "float-label--no-click": f(O) === "select" }]),
			for: f(D)
		}, [
			f(O) === "textarea" ? (c(), n("span", _)) : t("", !0),
			o[0] ||= i(),
			r("span", v, d(f(C)), 1)
		], 10, g))], 2));
	}
};
//#endregion
export { b as FloatLabel };
