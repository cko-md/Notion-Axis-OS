/* @ds-bundle: {"format":4,"namespace":"AXISDesignSystem_7a9b3b","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Modal","sourcePath":"components/core/Modal.jsx"},{"name":"Seg","sourcePath":"components/core/Seg.jsx"},{"name":"FreshnessBadge","sourcePath":"components/feedback/FreshnessBadge.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"SkeletonCard","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"StatusCallout","sourcePath":"components/feedback/StatusCallout.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"DetailPanelSection","sourcePath":"components/layout/DetailPanelSections.jsx"},{"name":"DetailPanelSections","sourcePath":"components/layout/DetailPanelSections.jsx"},{"name":"AxisAtmosphere","sourcePath":"components/surfaces/AxisAtmosphere.jsx"},{"name":"AxisChromePanel","sourcePath":"components/surfaces/AxisChromePanel.jsx"},{"name":"AxisGlassPanel","sourcePath":"components/surfaces/AxisGlassPanel.jsx"},{"name":"AxisReflectiveCard","sourcePath":"components/surfaces/AxisReflectiveCard.jsx"},{"name":"ModuleInteractiveHero","sourcePath":"components/surfaces/ModuleInteractiveHero.jsx"},{"name":"WidgetShell","sourcePath":"components/widgets/WidgetShell.jsx"},{"name":"WidgetStatusBadge","sourcePath":"components/widgets/WidgetStatusBadge.jsx"}],"sourceHashes":{"components/core/Button.jsx":"b03f1e8d1ba2","components/core/Card.jsx":"8bd394d5a6ac","components/core/Icon.jsx":"82d756d1a052","components/core/Modal.jsx":"57125a432a22","components/core/Seg.jsx":"703ad1c6936a","components/feedback/FreshnessBadge.jsx":"f97da1f28ba9","components/feedback/Skeleton.jsx":"fa835c43da04","components/feedback/StatusCallout.jsx":"98e8bcd3bede","components/feedback/Toast.jsx":"40cb42b97dc3","components/layout/DetailPanelSections.jsx":"3cd7cd4c4e4d","components/surfaces/AxisAtmosphere.jsx":"e60374ff2ed7","components/surfaces/AxisChromePanel.jsx":"aca761da7976","components/surfaces/AxisGlassPanel.jsx":"094861b52bd7","components/surfaces/AxisReflectiveCard.jsx":"33e4e269860d","components/surfaces/ModuleInteractiveHero.jsx":"536773b76ee0","components/widgets/WidgetShell.jsx":"a8595e1d3e04","components/widgets/WidgetStatusBadge.jsx":"7ca32ff4b1fe","ui_kits/axis-console/AgendaNotesScreens.jsx":"54fdfc269dbc","ui_kits/axis-console/ApprovalsScreen.jsx":"7cb134dd022c","ui_kits/axis-console/CommandScreen.jsx":"ab5ef830d30d","ui_kits/axis-console/ControlRoomScreen.jsx":"abb6d93cd58a","ui_kits/axis-console/DailyScreens.jsx":"5c3d628c93cc","ui_kits/axis-console/FundScreen.jsx":"b2c93181f695","ui_kits/axis-console/LabsScreens.jsx":"90b9176b576b","ui_kits/axis-console/LibrarySupperScreens.jsx":"80f30338f1a6","ui_kits/axis-console/LifeScreens.jsx":"b3ef5dfb759c","ui_kits/axis-console/MailScreen.jsx":"6ae1b496220a","ui_kits/axis-console/OperateScreens.jsx":"37361f098749","ui_kits/axis-console/PlanScreens.jsx":"7663f10d3ef0","ui_kits/axis-console/ResearchScreens.jsx":"8934a1ca89e7","ui_kits/axis-console/Shell.jsx":"9148db990f3c","ui_kits/axis-console/StudioScreen.jsx":"9b1f74762ff7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AXISDesignSystem_7a9b3b = window.AXISDesignSystem_7a9b3b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Glass slab with a hairline border and an inset top edge. `tick` adds the
 *  gold corner ticks — the precision-instrument detail used on reference and
 *  summary surfaces. */
function Card({
  tick = false,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `card${tick ? " tick" : ""} ${className}`.trim()
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/** Operational icon primitive — Lucide glyph, 1.6 stroke, currentColor.
 *  Requires the Lucide UMD bundle on the page (see assets/README.md). */
const SIZE_PX = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 22
};
function Icon({
  name,
  size = "sm",
  strokeWidth = 1.6,
  label,
  style,
  className = ""
}) {
  const ref = React.useRef(null);
  const px = SIZE_PX[size] ?? SIZE_PX.sm;
  React.useEffect(() => {
    const host = ref.current;
    if (!host || !window.lucide) return;
    host.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    host.appendChild(i);
    window.lucide.createIcons({
      nameAttr: "data-lucide",
      attrs: {
        width: px,
        height: px,
        "stroke-width": strokeWidth
      },
      root: host
    });
  }, [name, px, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: `axis-icon ${className}`.trim(),
    role: label ? "img" : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: "inline-flex",
      flex: "none",
      width: px,
      height: px,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Command button. Primary = filled accent; secondary = hairline glass;
 *  ghost = quiet text; danger = secondary in --down. Loading keeps the label
 *  visible and swaps the leading glyph for a spinner (aria-busy). */
function Button({
  variant = "secondary",
  loading,
  disabled,
  children,
  className = "",
  ...rest
}) {
  const base = variant === "primary" ? "btn-primary" : variant === "ghost" ? "" : "btn-secondary";
  const ghost = variant === "ghost" ? {
    background: "none",
    border: "none",
    color: "var(--ink-dim)",
    padding: "6px 12px",
    cursor: "pointer",
    fontFamily: "var(--narrow)",
    fontSize: 10.5,
    letterSpacing: ".08em",
    textTransform: "uppercase"
  } : null;
  const danger = variant === "danger" ? {
    color: "var(--down)"
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `${base} ${className}`.trim(),
    disabled: disabled || loading,
    "aria-busy": loading || undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      ...ghost,
      ...danger
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-2",
    size: "xs",
    className: "axis-button-spinner"
  }) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Modal.jsx
try { (() => {
/** Dialog: unique title, Escape / backdrop close, focus trapped to enabled
 *  controls, focus restored to the trigger on close. */
function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  busy = false
}) {
  const dialogRef = React.useRef(null);
  const titleId = React.useId();
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape" && !busy) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, busy, onClose]);
  React.useEffect(() => {
    if (!open) return;
    const el = dialogRef.current;
    const trigger = document.activeElement;
    const focusables = () => [...el.querySelectorAll("button:not(:disabled),input:not(:disabled),textarea:not(:disabled),select:not(:disabled),[href],[tabindex]:not([tabindex='-1'])")];
    (focusables()[0] ?? el).focus({
      preventScroll: true
    });
    const trap = e => {
      if (e.key !== "Tab") return;
      const nodes = focusables();
      const first = nodes[0],
        last = nodes[nodes.length - 1];
      if (!first) {
        e.preventDefault();
        el.focus({
          preventScroll: true
        });
        return;
      }
      if (e.shiftKey && (document.activeElement === first || !el.contains(document.activeElement))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (document.activeElement === last || !el.contains(document.activeElement))) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", trap, true);
    return () => {
      document.removeEventListener("keydown", trap, true);
      if (trigger && trigger.isConnected) trigger.focus({
        preventScroll: true
      });
    };
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": titleId,
    "aria-busy": busy || undefined,
    onClick: e => {
      if (e.target === e.currentTarget && !busy) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: dialogRef,
    tabIndex: -1,
    className: "card modal-surface"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    id: titleId,
    className: "modal-title"
  }, title), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    disabled: busy,
    onClick: onClose,
    "aria-label": "Close dialog"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", null, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      marginTop: 16,
      borderTop: "1px solid var(--line)",
      paddingTop: 16
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Modal.jsx", error: String((e && e.message) || e) }); }

// components/core/Seg.jsx
try { (() => {
/** Segmented control — theme/density/scope switches. Selection is exposed
 *  beyond color via aria-pressed, and the group always carries a name. */
function Seg({
  options,
  value,
  onChange,
  ariaLabel
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "seg",
    role: "group",
    "aria-label": ariaLabel
  }, options.map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt.value,
    type: "button",
    className: opt.value === value ? "on" : "",
    "aria-pressed": opt.value === value,
    onClick: () => onChange(opt.value)
  }, opt.label)));
}
Object.assign(__ds_scope, { Seg });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Seg.jsx", error: String((e && e.message) || e) }); }

// components/feedback/FreshnessBadge.jsx
try { (() => {
const TIER = {
  fresh: {
    label: "Fresh",
    tone: "var(--up)",
    description: "Retrieved within the freshness window."
  },
  delayed: {
    label: "Delayed",
    tone: "var(--clay-2)",
    description: "Retrieved outside the real-time window."
  },
  stale: {
    label: "Stale",
    tone: "var(--down)",
    description: "Older than the stale threshold."
  },
  unknown: {
    label: "Unknown",
    tone: "var(--ink-faint)",
    description: "No retrieval timestamp available."
  }
};

/** Data-freshness pill. Any financially material or cached value must disclose
 *  which tier it is in — delayed data is never presented as real-time. */
function FreshnessBadge({
  tier = "unknown",
  relative,
  showRelative = true
}) {
  const view = TIER[tier] ?? TIER.unknown;
  const color = view.tone;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    },
    title: view.description
  }, /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-label": `Data freshness: ${view.label}. ${view.description}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontSize: 11,
      fontWeight: 600,
      lineHeight: 1,
      padding: "3px 7px",
      borderRadius: 999,
      color,
      background: `color-mix(in srgb, ${color} 14%, transparent)`,
      border: `1px solid color-mix(in srgb, ${color} 34%, transparent)`,
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: color,
      boxShadow: tier === "fresh" ? `0 0 6px ${color}` : "none"
    }
  }), view.label), showRelative && relative ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-faint)",
      whiteSpace: "nowrap"
    }
  }, relative) : null);
}
Object.assign(__ds_scope, { FreshnessBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/FreshnessBadge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
/** Decorative loading placeholder — the liquid sheen surface. Always paired
 *  with an aria-live status message elsewhere; never announced itself. */
function Skeleton({
  width = "100%",
  height = 16,
  borderRadius = 4,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `axis-loading-sheen ${className}`.trim(),
    "aria-hidden": "true",
    style: {
      width,
      height,
      borderRadius,
      ...style
    }
  });
}
function SkeletonCard({
  rows = 3
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      border: "1px solid var(--line)",
      borderRadius: "var(--rl)",
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    height: 14,
    width: "60%"
  }), Array.from({
    length: rows - 1
  }).map((_, i) => /*#__PURE__*/React.createElement(Skeleton, {
    key: i,
    height: 12,
    width: i % 2 === 0 ? "90%" : "75%"
  })));
}
Object.assign(__ds_scope, { Skeleton, SkeletonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusCallout.jsx
try { (() => {
const LABELS = {
  loading: "Loading",
  empty: "Empty",
  error: "Error",
  stale: "Stale",
  disconnected: "Disconnected",
  setup_required: "Setup required",
  success: "Success",
  info: "Info"
};
const ICONS = {
  loading: "loader-2",
  empty: "info",
  error: "alert-circle",
  stale: "clock",
  disconnected: "unplug",
  setup_required: "plug-zap",
  success: "circle-dot",
  info: "info"
};

/** The one way to state a system condition inline: mono kicker label, title,
 *  message, optional action. Never color alone. */
function StatusCallout({
  kind,
  title,
  children,
  actionSlot,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `status-callout status-callout-${kind} ${className}`.trim(),
    role: kind === "error" ? "alert" : "status",
    "aria-label": typeof title === "string" ? title : LABELS[kind],
    "data-kind": kind
  }, /*#__PURE__*/React.createElement("div", {
    className: "status-callout-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "status-callout-label",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICONS[kind],
    size: "xs"
  }), LABELS[kind]), title ? /*#__PURE__*/React.createElement("strong", null, title) : null, /*#__PURE__*/React.createElement("div", {
    className: "status-callout-message"
  }, children)), actionSlot ? /*#__PURE__*/React.createElement("div", {
    className: "status-callout-action"
  }, actionSlot) : null);
}
Object.assign(__ds_scope, { StatusCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusCallout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const COLORS = {
  success: "var(--up)",
  warn: "var(--gold)",
  error: "var(--clay-2)",
  info: "var(--marine-2)"
};
const BORDERS = {
  success: "color-mix(in srgb, var(--up) 30%, transparent)",
  warn: "color-mix(in srgb, var(--gold) 30%, transparent)",
  error: "color-mix(in srgb, var(--clay) 30%, transparent)",
  info: "color-mix(in srgb, var(--marine) 30%, transparent)"
};
const ICONS = {
  success: "check",
  warn: "alert-triangle",
  error: "x",
  info: "info"
};

/** One toast. Errors persist until dismissed; everything else clears after 3.4s. */
function Toast({
  type = "info",
  label,
  message,
  onDismiss
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "toast",
    role: type === "error" ? "alert" : "status",
    style: {
      background: `color-mix(in srgb, ${COLORS[type]} 7%, var(--surface-2))`,
      border: `1px solid ${BORDERS[type]}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: COLORS[type],
      flexShrink: 0,
      display: "inline-flex",
      paddingTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICONS[type],
    size: "xs"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "toast-label"
  }, label) : null, message), onDismiss ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: "none",
      border: "none",
      padding: 0,
      marginLeft: 4,
      color: "var(--ink-faint)",
      cursor: "pointer",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: "xs"
  })) : null);
}

/** Fixed bottom-right stack. */
function ToastStack({
  toasts = [],
  onDismiss
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "toast-stack"
  }, toasts.map(t => /*#__PURE__*/React.createElement(Toast, _extends({
    key: t.id
  }, t, {
    onDismiss: onDismiss ? () => onDismiss(t.id) : undefined
  }))));
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/layout/DetailPanelSections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labelled key/value section inside a detail drawer or panel. Each section is
 *  its own labelled region so a detail view is navigable, not a blob. */
function DetailPanelSection({
  id,
  title,
  value,
  description,
  actionSlot,
  children
}) {
  const titleId = `detail-panel-section-${String(id).toLowerCase().replace(/[^a-z0-9_-]+/g, "-")}`;
  return /*#__PURE__*/React.createElement("section", {
    className: "detail-panel-section",
    "aria-labelledby": titleId,
    style: {
      padding: "10px 0",
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    id: titleId,
    style: {
      margin: 0,
      fontFamily: "var(--mono)",
      fontSize: 9,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--ink-faint)",
      fontWeight: 400
    }
  }, title), value ? /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 13,
      color: "var(--ink)"
    }
  }, value) : null), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: 12,
      color: "var(--ink-dim)",
      lineHeight: 1.45
    }
  }, description) : null, children, actionSlot ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, actionSlot) : null);
}
function DetailPanelSections({
  sections = []
}) {
  if (sections.length === 0) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "detail-panel-sections"
  }, sections.map(s => /*#__PURE__*/React.createElement(DetailPanelSection, _extends({
    key: s.id
  }, s))));
}
Object.assign(__ds_scope, { DetailPanelSection, DetailPanelSections });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/DetailPanelSections.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/AxisAtmosphere.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The lit volume the console floats in: wash, two auroras, haze, fall, vignette.
 *  Ambient only — position it behind the AppShell and let it drift. */
function AxisAtmosphere({
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `depthfield axis-atmosphere ${className}`.trim(),
    "aria-hidden": "true"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "wash"
  }), /*#__PURE__*/React.createElement("div", {
    className: "aurora"
  }), /*#__PURE__*/React.createElement("div", {
    className: "aurora2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "haze"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fall"
  }), /*#__PURE__*/React.createElement("div", {
    className: "vig"
  }));
}
Object.assign(__ds_scope, { AxisAtmosphere });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/AxisAtmosphere.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/AxisChromePanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tier-2 command/summary glass: raised fill, saturated blur, panel shadow. */
function AxisChromePanel({
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `axis-chrome-panel ${className}`.trim()
  }, rest), children);
}
Object.assign(__ds_scope, { AxisChromePanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/AxisChromePanel.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/AxisGlassPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tier-1 operational glass: restrained, maximally legible, no iridescence. */
function AxisGlassPanel({
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `axis-glass-panel ${className}`.trim()
  }, rest), children);
}
Object.assign(__ds_scope, { AxisGlassPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/AxisGlassPanel.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/AxisReflectiveCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tier-3: card geometry plus the diagonal reflection. Heroes, onboarding,
 *  empty states — never dense operational content. */
function AxisReflectiveCard({
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `axis-reflective-card ${className}`.trim()
  }, rest), children);
}
Object.assign(__ds_scope, { AxisReflectiveCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/AxisReflectiveCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ModuleInteractiveHero.jsx
try { (() => {
const TONE = {
  accent: "var(--accent)",
  success: "var(--up)",
  warning: "var(--clay-2)",
  alert: "var(--clay)",
  danger: "var(--down)",
  muted: "var(--ink-faint)"
};

/** Module header: eyebrow, display title, subtitle, action row, stat strip.
 *  Every module route opens with one of these. */
function ModuleInteractiveHero({
  eyebrow,
  title,
  subtitle,
  stats = [],
  actions = [],
  compact,
  loading = false,
  children
}) {
  const showStats = loading || stats.length > 0;
  return /*#__PURE__*/React.createElement(__ds_scope.AxisReflectiveCard, {
    className: `module-hero-shell module-interactive-hero${compact ? " module-hero-shell--compact" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "module-hero-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "module-hero-copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "hero-title"
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, subtitle) : null), actions.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "module-hero-actions"
  }, actions.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.label,
    type: "button",
    className: `feed-manage module-hero-action btn-secondary${a.primary ? " module-hero-action--primary" : ""}`,
    onClick: a.onClick,
    disabled: a.disabled
  }, a.label))) : null), showStats ? /*#__PURE__*/React.createElement("div", {
    className: "module-hero-stats",
    role: "list"
  }, loading ? Array.from({
    length: Math.max(stats.length, 3)
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "module-hero-stat",
    role: "listitem",
    "aria-hidden": true,
    style: {
      opacity: .5
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "module-hero-stat-v",
    style: {
      color: "var(--ink-faint)"
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("span", {
    className: "module-hero-stat-k"
  }, "Loading"))) : stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    className: "module-hero-stat",
    role: "listitem"
  }, /*#__PURE__*/React.createElement("span", {
    className: "module-hero-stat-v",
    style: s.tone ? {
      color: TONE[s.tone]
    } : undefined
  }, s.value), /*#__PURE__*/React.createElement("span", {
    className: "module-hero-stat-k"
  }, s.label), s.hint ? /*#__PURE__*/React.createElement("span", {
    className: "module-hero-stat-hint"
  }, s.hint) : null))) : null, children);
}
Object.assign(__ds_scope, { ModuleInteractiveHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ModuleInteractiveHero.jsx", error: String((e && e.message) || e) }); }

// components/widgets/WidgetStatusBadge.jsx
try { (() => {
const LABELS = {
  fresh: "Fresh",
  live: "Live",
  loading: "Loading",
  refreshing: "Refreshing",
  stale: "Stale",
  error: "Error",
  empty: "Empty",
  disconnected: "Disconnected",
  setup_required: "Setup required",
  lab: "Lab",
  disabled: "Disabled"
};
const ICONS = {
  fresh: "circle-dot",
  live: "circle-dot",
  loading: "loader-2",
  refreshing: "loader-2",
  stale: "clock",
  error: "alert-circle",
  empty: "info",
  disconnected: "unplug",
  setup_required: "plug-zap",
  lab: "flask-conical",
  disabled: "ban"
};

/** Provider-health badge on a widget tile. Icon + word, never color alone. */
function WidgetStatusBadge({
  status,
  className = ""
}) {
  const spin = status === "loading" || status === "refreshing";
  return /*#__PURE__*/React.createElement("span", {
    className: `widget-status-badge widget-status-${status} ${className}`.trim(),
    "data-status": status,
    "aria-label": `Widget status: ${LABELS[status]}`
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICONS[status],
    size: "xs",
    className: spin ? "axis-button-spinner" : "",
    style: {
      width: 10,
      height: 10,
      marginRight: 4
    }
  }), LABELS[status]);
}
Object.assign(__ds_scope, { WidgetStatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/widgets/WidgetStatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/widgets/WidgetShell.jsx
try { (() => {
/** The Command-strip tile: icon plate, mono title, value, hint, provenance
 *  footer. Status drives the border/background; provenance is never hidden. */
function WidgetShell({
  title,
  icon,
  value,
  hint,
  status = "fresh",
  provider,
  updatedAt,
  onPrimaryAction,
  actionSlot,
  miniVisualizationSlot,
  children
}) {
  const interactive = Boolean(onPrimaryAction);
  // Deliberately a div with role="button": actionSlot contains its own button,
  // and a native <button> here would nest interactive elements.
  const onKeyDown = interactive ? e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onPrimaryAction();
    }
  } : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: `widget-shell${interactive ? " widget-shell-interactive" : ""}`,
    role: interactive ? "button" : "group",
    tabIndex: interactive ? 0 : undefined,
    onClick: onPrimaryAction,
    onKeyDown: onKeyDown,
    "data-status": status,
    "aria-label": `${title}: ${typeof value === "string" ? value : "open details"}`,
    "aria-busy": status === "loading" || status === "refreshing" ? "true" : undefined,
    "aria-invalid": status === "error" ? "true" : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget-shell-icon"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "widget-shell-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "widget-shell-topline"
  }, /*#__PURE__*/React.createElement("span", {
    className: "widget-shell-title"
  }, title), /*#__PURE__*/React.createElement(__ds_scope.WidgetStatusBadge, {
    status: status
  })), /*#__PURE__*/React.createElement("div", {
    className: "widget-shell-value"
  }, value), hint ? /*#__PURE__*/React.createElement("div", {
    className: "widget-shell-hint"
  }, hint) : null, children, provider || updatedAt ? /*#__PURE__*/React.createElement("div", {
    className: "widget-shell-meta"
  }, provider ? /*#__PURE__*/React.createElement("span", null, provider) : null, updatedAt ? /*#__PURE__*/React.createElement("span", null, "Updated ", updatedAt) : null) : null), miniVisualizationSlot ? /*#__PURE__*/React.createElement("div", {
    className: "widget-shell-mini"
  }, miniVisualizationSlot) : null, actionSlot ? /*#__PURE__*/React.createElement("div", {
    className: "widget-shell-actions",
    onClick: e => e.stopPropagation()
  }, actionSlot) : null);
}
Object.assign(__ds_scope, { WidgetShell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/widgets/WidgetShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/axis-console/AgendaNotesScreens.jsx
try { (() => {
(function () {
  const {
    ModuleInteractiveHero,
    Card,
    Button,
    Seg,
    StatusCallout,
    AxisGlassPanel,
    Icon
  } = window.AXISDesignSystem_7a9b3b;

  /* ───────────────────────── Agenda ───────────────────────── */

  const RANKED = [{
    id: "t1",
    title: "Draft the R01 budget pages",
    meta: ["due today", "objective · Research Year 2026", "~90m"],
    score: "94",
    source: "/objectives"
  }, {
    id: "t2",
    title: "Reply to Dr. Ilori with the revised appendix",
    meta: ["awaiting you", "mail · fastmail", "~20m"],
    score: "91",
    source: "/mail"
  }, {
    id: "t3",
    title: "Review both approval-contract PRs",
    meta: ["today", "pipeline · axis", "~45m"],
    score: "77",
    source: "/pipeline"
  }, {
    id: "t4",
    title: "Confirm the quarterly rebalance decision",
    meta: ["expires in 3h", "approvals", "~5m"],
    score: "72",
    source: "/approvals"
  }, {
    id: "t5",
    title: "Write the Thursday debrief",
    meta: ["tomorrow", "debrief", "~15m"],
    score: "48",
    source: "/debrief"
  }];
  const REACH_OUT = [{
    name: "Adaeze Ilori",
    why: "Owes the appendix reply",
    last: "11 days ago"
  }, {
    name: "Martin Ostrowski",
    why: "Quarterly catch-up due",
    last: "6 weeks ago"
  }, {
    name: "Priya Raman",
    why: "Intro promised at AANS",
    last: "3 weeks ago"
  }];
  const MORNING = [{
    t: "Hydrate and light",
    sub: "500 ml, curtains open",
    min: 5
  }, {
    t: "Zone-2 or mobility",
    sub: "45–60 min depending on the week",
    min: 50
  }, {
    t: "Shower and dress",
    sub: "",
    min: 10
  }, {
    t: "Read the Briefing",
    sub: "Three stories, no scrolling",
    min: 10
  }];
  function AgendaScreen({
    onToast,
    onRoute
  }) {
    const [done, setDone] = React.useState({});
    const doneCount = MORNING.filter((_, i) => done[i]).length;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Daily / Agenda",
      title: "Ranked tasks and outreach",
      compact: true,
      subtitle: "One ordered list for the day, assembled from calendar, tasks, and follow-ups \u2014 with the reason for each rank kept visible.",
      stats: [{
        label: "Ranked",
        value: "5",
        tone: "accent"
      }, {
        label: "Due today",
        value: "3",
        tone: "warning"
      }, {
        label: "Reach out",
        value: "3"
      }, {
        label: "Routine",
        value: `${doneCount}/4`,
        tone: doneCount === 4 ? "success" : "muted"
      }],
      actions: [{
        label: "+ Add task",
        primary: true,
        onClick: () => onToast("Quick-add opens inline in production.", "info", "Agenda")
      }, {
        label: "Re-rank",
        onClick: () => onToast("Re-ranked with the current calendar.", "success", "Agenda")
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("h2", {
      className: "sec"
    }, "Ranked today", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, RANKED.length)), /*#__PURE__*/React.createElement("div", {
      className: "rule"
    }), /*#__PURE__*/React.createElement("button", {
      className: "feed-manage",
      type: "button",
      onClick: () => onToast("Ranking weights live in Control Room.", "info", "Agenda")
    }, "Weights")), /*#__PURE__*/React.createElement("div", null, RANKED.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.id,
      className: "task-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 11,
        color: "var(--accent)",
        width: 26
      }
    }, t.score), /*#__PURE__*/React.createElement("div", {
      className: "task-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-title"
    }, t.title), /*#__PURE__*/React.createElement("div", {
      className: "task-meta"
    }, t.meta.map(m => /*#__PURE__*/React.createElement("span", {
      key: m
    }, m)))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onRoute(t.source)
    }, "Open source")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: "sm"
    }), /*#__PURE__*/React.createElement("input", {
      className: "input",
      style: {
        flex: 1,
        border: "none",
        background: "none",
        padding: 0
      },
      placeholder: "+ Add task\u2026"
    }), /*#__PURE__*/React.createElement("input", {
      className: "input",
      style: {
        width: 110
      },
      placeholder: "30m, ~1h..."
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 12
      }
    }, "Reach out", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, REACH_OUT.length, " due")), /*#__PURE__*/React.createElement("div", null, REACH_OUT.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.name,
      className: "task-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-title"
    }, p.name), /*#__PURE__*/React.createElement("div", {
      className: "task-meta"
    }, /*#__PURE__*/React.createElement("span", null, p.why), /*#__PURE__*/React.createElement("span", null, "last \xB7 ", p.last))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onRoute("/people")
    }, "People"))))), /*#__PURE__*/React.createElement(AxisGlassPanel, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 12
      }
    }, "Morning routine", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, "~75 min \xB7 ", doneCount, "/", MORNING.length)), /*#__PURE__*/React.createElement("div", null, MORNING.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: s.t,
      className: "task-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "switch",
      "data-on": done[i] ? "true" : "false",
      role: "button",
      tabIndex: 0,
      "aria-label": `Mark ${s.t}`,
      onClick: () => setDone(d => ({
        ...d,
        [i]: !d[i]
      })),
      onKeyDown: e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setDone(d => ({
            ...d,
            [i]: !d[i]
          }));
        }
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "task-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-title",
      style: {
        textDecoration: done[i] ? "line-through" : "none",
        color: done[i] ? "var(--ink-faint)" : "var(--ink)"
      }
    }, s.t), /*#__PURE__*/React.createElement("div", {
      className: "task-meta"
    }, /*#__PURE__*/React.createElement("span", null, s.sub || "Sub-note (optional)"), /*#__PURE__*/React.createElement("span", null, s.min, " min")))))), /*#__PURE__*/React.createElement("p", {
      className: "sub"
    }, "A nighttime routine mirrors this block at ~90 minutes.")))));
  }

  /* ───────────────────────── Notes ───────────────────────── */

  const FOLDERS = ["All Notes", "Research", "Manuscripts", "Grants", "Clinical", "Personal", "Archive"];
  const NOTES = [{
    id: "n1",
    folder: "Grants",
    title: "R01 narrative — Aim 2 rewrite",
    at: "09:12 today",
    tags: ["r01", "aim-2"],
    body: "Aim 2 now leads with the retrospective cohort and treats the prospective arm as confirmatory. The reviewer objection from cycle one was about power, so the revised paragraph states the recomputed detectable effect before the methods."
  }, {
    id: "n2",
    folder: "Manuscripts",
    title: "AANS abstract — submitted copy",
    at: "Tue 16:40",
    tags: ["aans", "submitted"],
    body: "Final submitted text, 248 words. Keep for the proceedings version."
  }, {
    id: "n3",
    folder: "Research",
    title: "Biomarker appendix — open questions",
    at: "Mon 08:03",
    tags: ["biomarker", "ilori"],
    body: "Three questions for Dr. Ilori: assay lot drift, the two excluded samples, and whether the appendix should carry the sensitivity analysis."
  }, {
    id: "n4",
    folder: "Clinical",
    title: "Cohort 2 chart review log",
    at: "Sun 19:22",
    tags: ["cohort-2"],
    body: "80% reviewed. Remaining charts are the four transfers from the regional centre."
  }, {
    id: "n5",
    folder: "Personal",
    title: "Supper Club — August menu",
    at: "Sat 11:05",
    tags: ["menu"],
    body: "Six covers. Cold starter, braise, one make-ahead dessert."
  }];
  function NotesScreen({
    onToast
  }) {
    const [folder, setFolder] = React.useState("All Notes");
    const [q, setQ] = React.useState("");
    const [sel, setSel] = React.useState("n1");
    const list = NOTES.filter(n => (folder === "All Notes" || n.folder === folder) && (n.title + n.body).toLowerCase().includes(q.toLowerCase()));
    const note = list.find(n => n.id === sel) || list[0];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Daily / Notes",
      title: "Write, file, retrieve",
      compact: true,
      subtitle: "Folders on the left, notes in the middle, the editor on the right. Tags are the only metadata you have to maintain.",
      stats: [{
        label: "Notes",
        value: String(NOTES.length),
        tone: "accent"
      }, {
        label: "Folders",
        value: String(FOLDERS.length)
      }, {
        label: "Last edit",
        value: "09:12"
      }, {
        label: "Archived",
        value: "12",
        tone: "muted"
      }],
      actions: [{
        label: "New note",
        primary: true,
        onClick: () => onToast("New note created in " + folder + ".", "success", "Notes")
      }, {
        label: "New folder",
        onClick: () => onToast("Folder name prompt opens inline in production.", "info", "Notes")
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "180px minmax(0,0.9fr) minmax(0,1.3fr)",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        padding: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 2
      }
    }, FOLDERS.map(f => /*#__PURE__*/React.createElement("button", {
      key: f,
      type: "button",
      className: `navitem${folder === f ? " active" : ""}`,
      onClick: () => setFolder(f)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: f === "Archive" ? "archive" : "folder",
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", null, f), /*#__PURE__*/React.createElement("span", {
      className: "maturity"
    }, f === "All Notes" ? NOTES.length : f === "Archive" ? 12 : NOTES.filter(n => n.folder === f).length))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: "sm"
    }), /*#__PURE__*/React.createElement("input", {
      className: "input",
      style: {
        border: "none",
        background: "none",
        padding: 0
      },
      placeholder: "Search notes\u2026",
      value: q,
      onChange: e => setQ(e.target.value)
    })), list.length === 0 ? /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "empty",
      title: "No notes match"
    }, "Clear the search or pick another folder.") : /*#__PURE__*/React.createElement("div", null, list.map(n => /*#__PURE__*/React.createElement("div", {
      key: n.id,
      className: "task-row",
      role: "button",
      tabIndex: 0,
      onClick: () => setSel(n.id),
      onKeyDown: e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setSel(n.id);
        }
      },
      style: {
        cursor: "pointer",
        background: note && note.id === n.id ? "var(--glass)" : "transparent"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-title"
    }, n.title), /*#__PURE__*/React.createElement("div", {
      className: "task-meta"
    }, /*#__PURE__*/React.createElement("span", null, n.folder), /*#__PURE__*/React.createElement("span", null, n.at))))))), note ? /*#__PURE__*/React.createElement(Card, {
      tick: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "seclabel"
    }, note.folder, " \xB7 edited ", note.at), /*#__PURE__*/React.createElement("div", {
      contentEditable: true,
      suppressContentEditableWarning: true,
      style: {
        fontFamily: "var(--serif)",
        fontSize: 22,
        lineHeight: 1.25,
        color: "var(--ink)",
        outline: "none",
        marginBottom: 10
      }
    }, note.title), /*#__PURE__*/React.createElement("div", {
      contentEditable: true,
      suppressContentEditableWarning: true,
      style: {
        fontSize: 13.5,
        lineHeight: 1.75,
        color: "var(--ink-2)",
        outline: "none",
        minHeight: 160
      }
    }, note.body), /*#__PURE__*/React.createElement("div", {
      className: "chips",
      style: {
        marginTop: 14
      }
    }, note.tags.map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      className: "chip on"
    }, "#", t)), /*#__PURE__*/React.createElement("span", {
      className: "chip"
    }, "+ add tag")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onToast("Saved.", "success", "Notes")
    }, "Save"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => onToast("Sent to Agenda as a task.", "success", "Notes")
    }, "Send to Agenda"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onToast("Archived.", "info", "Notes")
    }, "Archive"))) : null));
  }
  Object.assign(window, {
    AgendaScreen,
    NotesScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/axis-console/AgendaNotesScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/axis-console/ApprovalsScreen.jsx
try { (() => {
(function () {
  const {
    ModuleInteractiveHero,
    Card,
    Button,
    StatusCallout,
    DetailPanelSections,
    FreshnessBadge,
    Modal,
    Icon
  } = window.AXISDesignSystem_7a9b3b;
  const APPROVALS = [{
    id: "a1",
    actionClass: "Financial execution",
    tone: "var(--down)",
    status: "Pending",
    scope: "One-time",
    summary: "Place a $4,000 buy order for VTI in the taxable brokerage account.",
    rows: [{
      id: "tool",
      title: "Tool",
      value: "fund.place_order"
    }, {
      id: "target",
      title: "Target",
      value: "position · VTI · acct 4471"
    }, {
      id: "amount",
      title: "Amount",
      value: "$4,000.00"
    }, {
      id: "freshness",
      title: "Data as of",
      freshness: {
        tier: "delayed",
        relative: "22m ago"
      }
    }, {
      id: "before",
      title: "Before",
      value: "cash $12,410.02"
    }, {
      id: "after",
      title: "After",
      value: "cash $8,410.02"
    }, {
      id: "actor",
      title: "Requested by",
      value: "routine · quarterly-rebalance (v4)"
    }, {
      id: "expires",
      title: "Expires",
      value: "in 3h"
    }],
    reasons: ["Financial execution always requires an explicit decision.", "The quote is outside the real-time freshness window.", "Not reversible once the order is accepted."],
    stepUp: true
  }, {
    id: "a2",
    actionClass: "External send",
    tone: "var(--clay-2)",
    status: "Pending",
    scope: "One-time",
    summary: "Send the drafted reply to Dr. Ilori from the Fastmail account.",
    rows: [{
      id: "tool",
      title: "Tool",
      value: "mail.send"
    }, {
      id: "target",
      title: "Target",
      value: "thread · biomarker-appendix"
    }, {
      id: "actor",
      title: "Requested by",
      value: "agent · axiom"
    }, {
      id: "expires",
      title: "Expires",
      value: "in 26h"
    }],
    reasons: ["The message leaves the system and cannot be recalled.", "Recipient is outside the owner's domain."]
  }, {
    id: "a3",
    actionClass: "Destructive",
    tone: "var(--down)",
    status: "Approved",
    scope: "One-time",
    summary: "Archive the 2023 pipeline board and its 41 dormant cards.",
    rows: [{
      id: "tool",
      title: "Tool",
      value: "pipeline.archive_board"
    }, {
      id: "target",
      title: "Target",
      value: "board · pipeline-2023"
    }, {
      id: "actor",
      title: "Requested by",
      value: "owner"
    }],
    reasons: ["Reversible for 30 days, then permanent."]
  }];
  function ApprovalCard({
    item,
    onDecide
  }) {
    const [verified, setVerified] = React.useState(false);
    return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 10,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: ".03em",
        color: item.tone,
        textTransform: "uppercase"
      }
    }, item.actionClass), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "var(--ink-faint)"
      }
    }, item.status, item.scope === "persistent" ? " · standing" : "")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        color: "var(--ink)",
        margin: "6px 0 10px"
      }
    }, item.summary), /*#__PURE__*/React.createElement(DetailPanelSections, {
      sections: item.rows.map(r => r.freshness ? {
        ...r,
        value: /*#__PURE__*/React.createElement(FreshnessBadge, {
          tier: r.freshness.tier,
          relative: r.freshness.relative
        })
      } : r)
    }), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: "10px 0 0",
        paddingLeft: 16,
        fontSize: 12,
        color: "var(--ink-dim)",
        lineHeight: 1.6
      }
    }, item.reasons.map(r => /*#__PURE__*/React.createElement("li", {
      key: r
    }, r))), item.stepUp ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        fontSize: 12
      }
    }, verified ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--up)",
        fontWeight: 600,
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: "xs"
    }), "Identity verified with passkey") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: () => setVerified(true)
    }, "Verify with passkey"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ink-dim)"
      }
    }, "Required for financial execution."))) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 12,
        flexWrap: "wrap"
      }
    }, item.status === "Pending" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      onClick: () => onDecide(item, "deny")
    }, "Deny"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      disabled: item.stepUp && !verified,
      onClick: () => onDecide(item, "approve")
    }, "Approve")) : /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onDecide(item, "execute")
    }, "Clear to execute")));
  }
  function ApprovalsScreen({
    onToast
  }) {
    const [confirm, setConfirm] = React.useState(null);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("section", {
      className: "module-status module-status-beta"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "module-status-kicker"
    }, "Beta module"), /*#__PURE__*/React.createElement("strong", null, "Approvals is intentionally marked non-production."), /*#__PURE__*/React.createElement("p", null, "New approval queue from the Axis System Redesign; every gated action shows full scope and financial execution requires step-up.")), /*#__PURE__*/React.createElement("span", null, "Validate approve/deny/execute, step-up gating, expiry, and empty/error/signed-out states before promotion.")), /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Operate / Approvals",
      title: "Awaiting your decision",
      compact: true,
      subtitle: "Nothing here executes on its own. Each card states scope, provenance, reversibility, and expiry before it offers a control.",
      stats: [{
        label: "Pending",
        value: "2",
        tone: "warning"
      }, {
        label: "Cleared today",
        value: "7",
        tone: "success",
        hint: "updated 4m ago"
      }, {
        label: "Expired",
        value: "1",
        tone: "muted"
      }, {
        label: "Step-up required",
        value: "1",
        tone: "danger"
      }],
      actions: [{
        label: "Review all",
        primary: true
      }, {
        label: "History"
      }]
    }), /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "info",
      title: "Standing approvals expire"
    }, "A persistent approval covers one tool and one target class, and is revoked from Control Room at any time."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, APPROVALS.map(a => /*#__PURE__*/React.createElement(ApprovalCard, {
      key: a.id,
      item: a,
      onDecide: (item, action) => {
        if (action === "deny" || action === "execute") setConfirm({
          item,
          action
        });else onToast(`Approved · ${item.actionClass.toLowerCase()}`, "success", "Approvals");
      }
    }))), /*#__PURE__*/React.createElement(Modal, {
      open: Boolean(confirm),
      onClose: () => setConfirm(null),
      title: confirm?.action === "deny" ? "Confirm denial" : "Confirm execution",
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => setConfirm(null)
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        variant: confirm?.action === "deny" ? "danger" : "primary",
        onClick: () => {
          onToast(confirm.action === "deny" ? "Request denied and logged." : "Cleared to execute. The routine resumes.", confirm.action === "deny" ? "warn" : "success", "Approvals");
          setConfirm(null);
        }
      }, confirm?.action === "deny" ? "Deny request" : "Execute"))
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        lineHeight: 1.6,
        color: "var(--ink-2)"
      }
    }, confirm?.item.summary), /*#__PURE__*/React.createElement("p", {
      className: "sub"
    }, "This reference changes no user data. In production the decision is written to the audit log with your identity and the exact scope shown above.")));
  }
  Object.assign(window, {
    ApprovalsScreen,
    ApprovalCard
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/axis-console/ApprovalsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/axis-console/CommandScreen.jsx
try { (() => {
(function () {
  const {
    WidgetShell,
    ModuleInteractiveHero,
    Card,
    Icon,
    StatusCallout,
    Button,
    FreshnessBadge
  } = window.AXISDesignSystem_7a9b3b;
  const WIDGETS = [{
    id: "weather",
    title: "Weather",
    icon: "sun",
    value: "21° Clear",
    hint: "Humidity 46%",
    status: "fresh",
    provider: "open-meteo",
    updatedAt: "09:42"
  }, {
    id: "daylight",
    title: "Daylight",
    icon: "sunrise",
    value: "13h 41m",
    hint: "Sunset 20:14",
    status: "fresh",
    provider: "solar",
    updatedAt: "09:42"
  }, {
    id: "air",
    title: "Air",
    icon: "wind",
    value: "AQI 41",
    hint: "AQI 41 · UV 4 · Good",
    status: "live",
    provider: "airnow",
    updatedAt: "09:38"
  }, {
    id: "agenda",
    title: "Agenda",
    icon: "calendar",
    value: "4 blocks",
    hint: "Next: Cohort review 10:30",
    status: "fresh",
    provider: "google-calendar",
    updatedAt: "09:40"
  }, {
    id: "markets",
    title: "Markets",
    icon: "line-chart",
    value: "SPY 574.20",
    hint: "SPY ▴0.42%",
    status: "stale",
    provider: "polygon",
    updatedAt: "08:55"
  }, {
    id: "run",
    title: "Training",
    icon: "activity",
    value: "18.4 km",
    hint: "18.4 km this week · 3-day streak",
    status: "lab",
    provider: "strava",
    updatedAt: "07:12"
  }, {
    id: "sleep",
    title: "Sleep",
    icon: "moon",
    value: "7h 12m",
    hint: "Refreshing from provider",
    status: "refreshing",
    provider: "oura"
  }, {
    id: "hrv",
    title: "HRV",
    icon: "heart-pulse",
    value: "—",
    hint: "Refresh failed",
    status: "error",
    provider: "oura",
    updatedAt: "06:02"
  }];
  const AGENDA = [{
    time: "10:30",
    title: "Cohort review — enrolment variance",
    meta: "Schedule · 45m · 3 attendees",
    pill: ["med", "PLAN"]
  }, {
    time: "12:15",
    title: "Reply to Dr. Ilori on the biomarker appendix",
    meta: "Mail · flagged 2d ago",
    pill: ["hi", "OVERDUE"]
  }, {
    time: "14:00",
    title: "Confirm Q3 rebalance envelope with the advisor",
    meta: "Fund · requires approval",
    pill: ["hi", "APPROVAL"]
  }, {
    time: "16:30",
    title: "Draft the literature digest for the group",
    meta: "Literature · 7 saved papers",
    pill: ["lo", "RESEARCH"]
  }];
  function CommandScreen({
    onRoute
  }) {
    const [refreshing, setRefreshing] = React.useState(false);
    const widgets = WIDGETS.map(w => refreshing ? {
      ...w,
      status: "refreshing"
    } : w);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Daily / Command",
      title: "Good morning, Chidi",
      subtitle: "Eight providers reporting. One refresh failed and one value is outside its freshness window.",
      stats: [{
        label: "Providers live",
        value: "6",
        tone: "success",
        hint: "of 8 registered"
      }, {
        label: "Outside window",
        value: "1",
        tone: "warning",
        hint: "markets · 47m"
      }, {
        label: "Failed",
        value: "1",
        tone: "danger",
        hint: "hrv · 06:02"
      }, {
        label: "Awaiting approval",
        value: "2",
        tone: "accent"
      }],
      actions: [{
        label: refreshing ? "Refreshing…" : "Refresh all",
        primary: true,
        onClick: () => {
          setRefreshing(true);
          setTimeout(() => setRefreshing(false), 1200);
        }
      }, {
        label: "Customize"
      }]
    }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      className: "sec"
    }, "Command strip", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, WIDGETS.length)), /*#__PURE__*/React.createElement("div", {
      className: "rule"
    }), /*#__PURE__*/React.createElement("button", {
      className: "feed-manage",
      type: "button"
    }, "Refresh"), /*#__PURE__*/React.createElement("button", {
      className: "feed-manage",
      type: "button"
    }, "Customize")), /*#__PURE__*/React.createElement("div", {
      className: "tidbits"
    }, widgets.map(w => /*#__PURE__*/React.createElement(WidgetShell, {
      key: w.id,
      title: w.title,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: w.icon
      }),
      value: w.value,
      hint: w.hint,
      status: w.status,
      provider: w.provider,
      updatedAt: w.updatedAt,
      onPrimaryAction: () => {},
      actionSlot: /*#__PURE__*/React.createElement("button", {
        className: "widget-shell-action",
        type: "button",
        "aria-label": `${w.title} actions`
      }, "\xB7\xB7\xB7")
    })))), /*#__PURE__*/React.createElement("section", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.55fr) minmax(0,1fr)",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("h2", {
      className: "sec"
    }, "Ranked today", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, AGENDA.length)), /*#__PURE__*/React.createElement("div", {
      className: "rule"
    }), /*#__PURE__*/React.createElement("button", {
      className: "feed-manage",
      type: "button",
      onClick: () => onRoute("/agenda")
    }, "Open agenda")), AGENDA.map(t => /*#__PURE__*/React.createElement("div", {
      className: "task-row",
      key: t.title
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 11,
        color: "var(--gold)",
        minWidth: 38,
        paddingTop: 2
      }
    }, t.time), /*#__PURE__*/React.createElement("div", {
      className: "task-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-title"
    }, t.title), /*#__PURE__*/React.createElement("div", {
      className: "task-meta"
    }, /*#__PURE__*/React.createElement("span", null, t.meta), /*#__PURE__*/React.createElement("span", {
      className: `pill ${t.pill[0]}`
    }, t.pill[1]))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost"
    }, "Open")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-3)",
        alignContent: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tick: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "seclabel"
    }, "Fund \xB7 net worth"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--disp)",
        fontSize: 34,
        lineHeight: 1,
        color: "var(--ink)"
      }
    }, "$1,284,902"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 11,
        color: "var(--up)"
      }
    }, "\u25B4 1.42% MTD"), /*#__PURE__*/React.createElement(FreshnessBadge, {
      tier: "delayed",
      relative: "22m ago"
    })), /*#__PURE__*/React.createElement("p", {
      className: "sub",
      style: {
        marginTop: 8
      }
    }, "Cached snapshot. Execution requires a fresh quote and an approval.")), /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "error",
      title: "HRV refresh failed",
      actionSlot: /*#__PURE__*/React.createElement(Button, null, "Retry")
    }, "The provider returned 503 at 06:02. Showing no value rather than a stale one."), /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "setup_required",
      title: "Two providers unconnected",
      actionSlot: /*#__PURE__*/React.createElement(Button, {
        onClick: () => onRoute("/control-room")
      }, "Connect")
    }, "Sleep and HRV need an account before Command can report them."))));
  }
  Object.assign(window, {
    CommandScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/axis-console/CommandScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/axis-console/ControlRoomScreen.jsx
try { (() => {
(function () {
  const {
    ModuleInteractiveHero,
    Card,
    Button,
    Seg,
    StatusCallout,
    AxisGlassPanel,
    DetailPanelSections,
    FreshnessBadge,
    Modal,
    Icon
  } = window.AXISDesignSystem_7a9b3b;
  const TABS = [{
    label: "Overview",
    value: "overview"
  }, {
    label: "Connections",
    value: "connections"
  }, {
    label: "Data & Privacy",
    value: "data"
  }, {
    label: "Appearance",
    value: "appearance"
  }, {
    label: "Security",
    value: "security"
  }, {
    label: "Activity",
    value: "activity"
  }];
  const CONNECTIONS = [{
    name: "Google Calendar",
    state: "connected",
    detail: "2 calendars · last sync 6m ago",
    icon: "calendar"
  }, {
    name: "Outlook Calendar",
    state: "connected",
    detail: "1 calendar · last sync 6m ago",
    icon: "calendar-days"
  }, {
    name: "Fastmail",
    state: "connected",
    detail: "IMAP · last sync 4m ago",
    icon: "mail"
  }, {
    name: "Gmail",
    state: "connected",
    detail: "OAuth · last sync 4m ago",
    icon: "mail"
  }, {
    name: "Google Contacts",
    state: "connected",
    detail: "412 contacts",
    icon: "users"
  }, {
    name: "Plaid",
    state: "attention",
    detail: "Card credentials expired — reconnect to resume reconciliation",
    icon: "landmark"
  }, {
    name: "Public",
    state: "connected",
    detail: "Delayed quotes · 22m",
    icon: "line-chart"
  }, {
    name: "Strava",
    state: "off",
    detail: "Not connected",
    icon: "activity"
  }, {
    name: "Spotify",
    state: "off",
    detail: "Not connected",
    icon: "music-2"
  }];
  const ACTIVITY = [["09:04", "Task claimed", "axiom · Assemble the R01 budget tables"], ["08:58", "Routine ran", "grant-prep · created 1 task"], ["07:58", "Approval filed", "mail.send · biomarker-appendix"], ["07:31", "Signals routed", "GitHub PRs → Pipeline · 2 items"], ["06:40", "Execution paused", "quarterly-rebalance · quote outside freshness window"], ["Tue 21:10", "Task blocked", "ledger · provider credentials expired"]];
  const STATE_META = {
    connected: {
      label: "Connected",
      colour: "var(--up)"
    },
    attention: {
      label: "Needs attention",
      colour: "var(--clay-2)"
    },
    off: {
      label: "Off",
      colour: "var(--ink-faint)"
    }
  };
  function ToggleRow({
    title,
    desc,
    on,
    onToggle
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "toggle-row"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "tr-t"
    }, title), /*#__PURE__*/React.createElement("div", {
      className: "tr-d"
    }, desc)), /*#__PURE__*/React.createElement("div", {
      className: "switch",
      "data-on": on ? "true" : "false",
      role: "button",
      tabIndex: 0,
      "aria-label": title,
      "aria-pressed": on,
      onClick: onToggle,
      onKeyDown: e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }
    }));
  }
  function ControlRoomScreen({
    theme,
    setTheme,
    accent,
    setAccent,
    onToast,
    onRoute
  }) {
    const [tab, setTab] = React.useState("overview");
    const [flags, setFlags] = React.useState({
      telemetry: false,
      localFirst: true,
      agentDrafts: true,
      weekly: true
    });
    const [wipe, setWipe] = React.useState(false);
    const toggle = k => setFlags(f => ({
      ...f,
      [k]: !f[k]
    }));
    const needsAttention = CONNECTIONS.filter(c => c.state === "attention").length;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "System / Control Room",
      title: "Settings and integrations",
      compact: true,
      subtitle: "One place for every provider, every retention rule, and every action the system took on your behalf.",
      stats: [{
        label: "Connections",
        value: String(CONNECTIONS.filter(c => c.state === "connected").length),
        tone: "accent"
      }, {
        label: "Needs attention",
        value: String(needsAttention),
        tone: needsAttention ? "warning" : "success"
      }, {
        label: "Local items",
        value: "31",
        tone: "muted"
      }, {
        label: "Session",
        value: "Passkey",
        tone: "success",
        hint: "step-up available"
      }],
      actions: [{
        label: "Connections",
        primary: true,
        onClick: () => setTab("connections")
      }, {
        label: "Data & privacy",
        onClick: () => setTab("data")
      }]
    }), /*#__PURE__*/React.createElement(Seg, {
      ariaLabel: "Control Room section",
      value: tab,
      onChange: setTab,
      options: TABS
    }), tab === "overview" ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tick: true
    }, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 10
      }
    }, "System state"), /*#__PURE__*/React.createElement(DetailPanelSections, {
      sections: [{
        id: "acct",
        title: "Account",
        value: "C. Okoro · owner"
      }, {
        id: "store",
        title: "Storage",
        value: "Supabase · owner-scoped RLS"
      }, {
        id: "sync",
        title: "Last sync",
        value: /*#__PURE__*/React.createElement(FreshnessBadge, {
          tier: "fresh",
          relative: "4m ago"
        })
      }, {
        id: "model",
        title: "Model routing",
        value: "Auto · Gemini, Claude"
      }]
    })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 10
      }
    }, "Attention"), needsAttention ? /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "disconnected",
      title: "Plaid credentials expired",
      actionSlot: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        onClick: () => {
          setTab("connections");
          onToast("Reconnect flow opens with the provider.", "info", "Control Room");
        }
      }, "Reconnect")
    }, "Card reconciliation is paused. One agent task is blocked behind this connection.") : /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "success",
      title: "Everything is connected"
    }, "No provider needs attention."))) : null, tab === "connections" ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, CONNECTIONS.map(c => /*#__PURE__*/React.createElement(Card, {
      key: c.name
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.icon,
      size: "sm"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 10,
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: 13,
        color: "var(--ink)"
      }
    }, c.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--narrow)",
        fontSize: 9.5,
        letterSpacing: ".18em",
        textTransform: "uppercase",
        color: STATE_META[c.state].colour
      }
    }, STATE_META[c.state].label)), /*#__PURE__*/React.createElement("p", {
      className: "sub",
      style: {
        fontSize: 12,
        marginTop: 6
      }
    }, c.detail), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 10
      }
    }, c.state === "off" ? /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onToast(`${c.name} connect flow is out of scope in this reference.`, "info", "Control Room")
    }, "Connect") : c.state === "attention" ? /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onToast("Reconnect flow opens with the provider.", "info", "Control Room")
    }, "Reconnect") : /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onToast(`${c.name} disconnected. Cached data is kept for 30 days.`, "warn", "Control Room")
    }, "Disconnect"))))))) : null, tab === "data" ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 6
      }
    }, "Retention"), /*#__PURE__*/React.createElement(ToggleRow, {
      title: "Local-first storage",
      desc: "Keep drafts and local items on this device until you sign in.",
      on: flags.localFirst,
      onToggle: () => toggle("localFirst")
    }), /*#__PURE__*/React.createElement(ToggleRow, {
      title: "Product telemetry",
      desc: "Off by default. Nothing about your content is ever collected.",
      on: flags.telemetry,
      onToggle: () => toggle("telemetry")
    }), /*#__PURE__*/React.createElement(ToggleRow, {
      title: "Agent drafts",
      desc: "Let agents prepare drafts that still require your approval to send.",
      on: flags.agentDrafts,
      onToggle: () => toggle("agentDrafts")
    }), /*#__PURE__*/React.createElement(ToggleRow, {
      title: "Weekly summary email",
      desc: "One message on Sunday with the debrief and open approvals.",
      on: flags.weekly,
      onToggle: () => toggle("weekly")
    })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 10
      }
    }, "Export and erase"), /*#__PURE__*/React.createElement("p", {
      className: "sub",
      style: {
        marginTop: 0
      }
    }, "Export writes a single archive of notes, tasks, approvals, and memory. Erase removes owner-scoped rows and cannot be undone."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 14,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onToast("Export queued. You will get a download link.", "success", "Control Room")
    }, "Export everything"), /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      onClick: () => setWipe(true)
    }, "Erase account data")))) : null, tab === "appearance" ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 12
      }
    }, "Theme"), /*#__PURE__*/React.createElement(Seg, {
      ariaLabel: "Color theme",
      value: theme,
      onChange: setTheme,
      options: [{
        label: "Dark",
        value: "dark"
      }, {
        label: "Dim",
        value: "dim"
      }, {
        label: "Slate",
        value: "slate"
      }, {
        label: "Light",
        value: "light"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      className: "seclabel",
      style: {
        marginTop: 16
      }
    }, "Accent"), /*#__PURE__*/React.createElement("div", {
      className: "swatches"
    }, ["#c9a463", "#3f8f7f", "#b4653f", "#6f7fbf"].map(c => /*#__PURE__*/React.createElement("button", {
      key: c,
      type: "button",
      className: accent === c ? "on" : "",
      style: {
        background: c
      },
      "aria-label": `Accent ${c}`,
      onClick: () => setAccent(c)
    }))), /*#__PURE__*/React.createElement("p", {
      className: "sub"
    }, "Interface Studio holds the full surface and motion controls, plus the live component gallery."), /*#__PURE__*/React.createElement(Button, {
      style: {
        marginTop: 10
      },
      onClick: () => onRoute("/design-system")
    }, "Open Interface Studio"))) : null, tab === "security" ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tick: true
    }, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 10
      }
    }, "Identity"), /*#__PURE__*/React.createElement(DetailPanelSections, {
      sections: [{
        id: "pk",
        title: "Passkey",
        value: "Registered · this device"
      }, {
        id: "mfa",
        title: "Second factor",
        value: "TOTP · authenticator"
      }, {
        id: "bio",
        title: "Biometric gate",
        value: "On for financial execution"
      }, {
        id: "session",
        title: "Session",
        value: "Expires in 6d"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onToast("Step-up challenge satisfied.", "success", "Security")
    }, "Test step-up"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onToast("Signed out of 2 other sessions.", "success", "Security")
    }, "Sign out elsewhere"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 10
      }
    }, "Gated actions"), /*#__PURE__*/React.createElement("p", {
      className: "sub",
      style: {
        marginTop: 0
      }
    }, "These action classes always require an approval, and financial execution additionally requires a step-up."), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: "10px 0 0",
        paddingLeft: 16,
        fontSize: 12.5,
        lineHeight: 1.8,
        color: "var(--ink-dim)"
      }
    }, /*#__PURE__*/React.createElement("li", null, "Financial execution \u2014 orders, transfers, account changes"), /*#__PURE__*/React.createElement("li", null, "External send \u2014 mail, messages, anything that leaves the system"), /*#__PURE__*/React.createElement("li", null, "Destructive \u2014 archive, delete, bulk edit")))) : null, tab === "activity" ? /*#__PURE__*/React.createElement(AxisGlassPanel, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 10
      }
    }, "Audit log", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, "last 24h")), /*#__PURE__*/React.createElement("div", null, ACTIVITY.map(([at, what, detail]) => /*#__PURE__*/React.createElement("div", {
      key: at + what,
      className: "task-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 10.5,
        color: "var(--ink-faint)",
        width: 66
      }
    }, at), /*#__PURE__*/React.createElement("div", {
      className: "task-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-title",
      style: {
        fontSize: 12.5
      }
    }, what), /*#__PURE__*/React.createElement("div", {
      className: "task-meta"
    }, /*#__PURE__*/React.createElement("span", null, detail)))))), /*#__PURE__*/React.createElement("p", {
      className: "sub"
    }, "Every entry names the actor \u2014 owner, routine, or agent \u2014 and the exact scope it acted within.")) : null, /*#__PURE__*/React.createElement(Modal, {
      open: wipe,
      onClose: () => setWipe(false),
      title: "Erase account data",
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => setWipe(false)
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        variant: "danger",
        onClick: () => {
          onToast("This reference changes no data. In production the erase is queued and confirmed by email.", "warn", "Control Room");
          setWipe(false);
        }
      }, "Erase"))
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        lineHeight: 1.6,
        color: "var(--ink-2)"
      }
    }, "This removes notes, tasks, approvals, memory, and financial profile rows scoped to your account."), /*#__PURE__*/React.createElement("p", {
      className: "sub"
    }, "Provider connections are revoked first. Exports already downloaded are unaffected.")));
  }
  Object.assign(window, {
    ControlRoomScreen,
    ToggleRow
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/axis-console/ControlRoomScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/axis-console/DailyScreens.jsx
try { (() => {
(function () {
  const {
    ModuleInteractiveHero,
    Card,
    Button,
    Seg,
    StatusCallout,
    AxisGlassPanel,
    DetailPanelSections,
    FreshnessBadge,
    Icon
  } = window.AXISDesignSystem_7a9b3b;

  /* ───────────────────────── Dispatch ───────────────────────── */

  const CHIPS = ["All", "Critical", "Actionable", "Information", "Noise", "Routed", "Unread", "Snoozed", "Archived"];
  const SIGNALS = [{
    id: "s1",
    cls: "Critical",
    pill: "hi",
    title: "Grant progress report due in 6 days",
    source: "calendar · google",
    at: "08:12",
    body: "NIH R01 annual progress report is due 28 Aug. The narrative draft exists in Notes; budget pages are unstarted.",
    route: {
      label: "Open Schedule",
      href: "/schedule",
      detail: "Calendar source"
    }
  }, {
    id: "s2",
    cls: "Actionable",
    pill: "med",
    title: "Dr. Ilori replied about the biomarker appendix",
    source: "mail · fastmail",
    at: "07:54",
    body: "Asks for the revised appendix before the Thursday call. A draft reply is waiting in Approvals as an external send.",
    route: {
      label: "Open Mail",
      href: "/mail",
      detail: "Mail source"
    }
  }, {
    id: "s3",
    cls: "Actionable",
    pill: "med",
    title: "Two PRs on axis touched the approval contract",
    source: "github · pipeline",
    at: "07:31",
    body: "Both change agent_tasks lifecycle transitions. Routed to Pipeline by the GitHub PRs rule.",
    route: {
      label: "Open Pipeline",
      href: "/pipeline",
      detail: "Pipeline source"
    }
  }, {
    id: "s4",
    cls: "Information",
    pill: "lo",
    title: "VTI quote is 22 minutes delayed",
    source: "fund · polygon",
    at: "06:40",
    body: "The quarterly-rebalance routine paused and filed an approval rather than trading on a delayed quote.",
    route: {
      label: "Open Fund",
      href: "/fund",
      detail: "Fund source"
    }
  }, {
    id: "s5",
    cls: "Noise",
    pill: "lo",
    title: "Weekly newsletter digest · 14 items",
    source: "mail · gmail",
    at: "05:02",
    body: "Matched the Noise rule. Kept for seven days, then dropped without action.",
    route: {
      label: "Open Mail",
      href: "/mail",
      detail: "Mail source"
    }
  }];
  const ROUTES = [{
    label: "GitHub PRs → Pipeline",
    keyword: "pull request",
    source: "GitHub",
    priority: "High"
  }, {
    label: "Newsletters → Noise",
    keyword: "unsubscribe",
    source: "Mail",
    priority: "Low"
  }, {
    label: "Calendar invites → Schedule",
    keyword: "invite",
    source: "Calendar",
    priority: "Medium"
  }];
  function DispatchScreen({
    onToast
  }) {
    const [chip, setChip] = React.useState("All");
    const [sel, setSel] = React.useState(SIGNALS[0].id);
    const [routesOpen, setRoutesOpen] = React.useState(false);
    const shown = SIGNALS.filter(s => chip === "All" || s.cls === chip);
    const active = shown.find(s => s.id === sel) || shown[0];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Daily / Dispatch",
      title: "Triage incoming items",
      compact: true,
      subtitle: "Every signal states where it came from and what it will become. Nothing routes itself without a rule you can read.",
      stats: [{
        label: "Open",
        value: "5",
        tone: "accent"
      }, {
        label: "Untriaged",
        value: "2",
        tone: "warning"
      }, {
        label: "Critical",
        value: "1",
        tone: "danger"
      }, {
        label: "Routes",
        value: "3",
        hint: "3 active rules"
      }],
      actions: [{
        label: "Routes",
        onClick: () => setRoutesOpen(o => !o)
      }, {
        label: "Triage all",
        primary: true,
        onClick: () => onToast("Triage queue opened.", "info", "Dispatch")
      }]
    }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: "sm"
    }), /*#__PURE__*/React.createElement("input", {
      className: "input",
      style: {
        flex: 1,
        border: "none",
        background: "none",
        padding: 0
      },
      placeholder: "Capture a signal\u2026"
    }), /*#__PURE__*/React.createElement(Button, {
      onClick: () => onToast("Captured to Dispatch inbox.", "success", "Dispatch")
    }, "Capture"))), /*#__PURE__*/React.createElement("div", {
      className: "chips"
    }, CHIPS.map(c => /*#__PURE__*/React.createElement("button", {
      key: c,
      type: "button",
      className: `chip${chip === c ? " on" : ""}`,
      onClick: () => setChip(c)
    }, c))), routesOpen ? /*#__PURE__*/React.createElement(AxisGlassPanel, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 12
      }
    }, "Routing rules", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, ROUTES.length, " active")), /*#__PURE__*/React.createElement("div", null, ROUTES.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.label,
      className: "task-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-title"
    }, r.label), /*#__PURE__*/React.createElement("div", {
      className: "task-meta"
    }, /*#__PURE__*/React.createElement("span", null, "keyword \xB7 ", r.keyword), /*#__PURE__*/React.createElement("span", null, "source \xB7 ", r.source), /*#__PURE__*/React.createElement("span", null, "priority \xB7 ", r.priority))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onToast("Rule editor is out of scope in this reference.", "info", "Dispatch")
    }, "Edit"))))) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 6
      }
    }, "Inbox", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, shown.length, " shown")), /*#__PURE__*/React.createElement("div", null, shown.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.id,
      className: "task-row",
      role: "button",
      tabIndex: 0,
      onClick: () => setSel(s.id),
      onKeyDown: e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setSel(s.id);
        }
      },
      style: {
        cursor: "pointer",
        background: active && active.id === s.id ? "var(--glass)" : "transparent"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: `pill ${s.pill}`
    }, s.cls), /*#__PURE__*/React.createElement("div", {
      className: "task-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-title"
    }, s.title), /*#__PURE__*/React.createElement("div", {
      className: "task-meta"
    }, /*#__PURE__*/React.createElement("span", null, s.source), /*#__PURE__*/React.createElement("span", null, s.at)))))), shown.length === 0 ? /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "empty",
      title: "Nothing in this bucket"
    }, "Signals classified as ", chip.toLowerCase(), " appear here.") : null), active ? /*#__PURE__*/React.createElement(Card, {
      tick: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "seclabel"
    }, active.source), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--serif)",
        fontSize: 20,
        lineHeight: 1.3,
        color: "var(--ink)"
      }
    }, active.title), /*#__PURE__*/React.createElement("p", {
      className: "sub"
    }, active.body), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "12px 0"
      }
    }, /*#__PURE__*/React.createElement(DetailPanelSections, {
      sections: [{
        id: "cls",
        title: "Classification",
        value: active.cls
      }, {
        id: "src",
        title: "Source",
        value: active.source
      }, {
        id: "fresh",
        title: "Received",
        value: /*#__PURE__*/React.createElement(FreshnessBadge, {
          tier: "fresh",
          relative: active.at
        })
      }, {
        id: "route",
        title: "Destination",
        value: active.route.detail
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onToast(`${active.route.label} · not in this kit`, "info", "Dispatch")
    }, active.route.label), /*#__PURE__*/React.createElement(Button, {
      onClick: () => onToast("Snoozed until tomorrow 08:00.", "success", "Dispatch")
    }, "Snooze"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onToast("Archived.", "success", "Dispatch")
    }, "Archive"))) : null));
  }

  /* ───────────────────────── Schedule ───────────────────────── */

  const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const CAL_COLORS = {
    a: "var(--accent-2)",
    b: "var(--up)",
    c: "var(--clay)"
  };
  const EVENTS = [{
    id: "e1",
    day: 0,
    start: "07:00",
    end: "09:00",
    title: "Deep work — R01 narrative",
    cal: "a",
    where: "Study",
    src: "Google"
  }, {
    id: "e2",
    day: 0,
    start: "11:30",
    end: "12:15",
    title: "Cohort review",
    cal: "c",
    where: "Zoom",
    src: "Outlook"
  }, {
    id: "e3",
    day: 1,
    start: "06:30",
    end: "07:30",
    title: "Zone-2 run · 10 km",
    cal: "b",
    where: "Riverside",
    src: "Google"
  }, {
    id: "e4",
    day: 1,
    start: "14:00",
    end: "15:00",
    title: "Dr. Ilori — biomarker call",
    cal: "c",
    where: "Phone",
    src: "Google"
  }, {
    id: "e5",
    day: 2,
    start: "08:00",
    end: "10:30",
    title: "Deep work — budget pages",
    cal: "a",
    where: "Study",
    src: "Google"
  }, {
    id: "e6",
    day: 3,
    start: "09:00",
    end: "09:45",
    title: "Lab standup",
    cal: "c",
    where: "Room 4.12",
    src: "Outlook"
  }, {
    id: "e7",
    day: 3,
    start: "18:00",
    end: "19:00",
    title: "Spanish lesson",
    cal: "b",
    where: "Online",
    src: "Axis"
  }, {
    id: "e8",
    day: 4,
    start: "07:00",
    end: "09:00",
    title: "Deep work — abstract edits",
    cal: "a",
    where: "Study",
    src: "Google"
  }, {
    id: "e9",
    day: 5,
    start: "10:00",
    end: "12:00",
    title: "Supper Club prep",
    cal: "b",
    where: "Kitchen",
    src: "Axis"
  }];
  function ScheduleScreen({
    onToast
  }) {
    const [view, setView] = React.useState("week");
    const [sel, setSel] = React.useState(EVENTS[3]);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Daily / Schedule",
      title: "Week, month, day",
      compact: true,
      subtitle: "Two providers merged into one grid. Colour carries the calendar, never the priority.",
      stats: [{
        label: "Calendars",
        value: "4",
        hint: "Google and Outlook"
      }, {
        label: "Events",
        value: "9",
        tone: "accent"
      }, {
        label: "Next",
        value: "14:00",
        hint: "Dr. Ilori — biomarker call"
      }, {
        label: "Conflicts",
        value: "0",
        tone: "success"
      }],
      actions: [{
        label: "Refresh",
        onClick: () => onToast("Pulled 9 events from Google and Outlook.", "success", "Schedule")
      }, {
        label: "Connect calendar",
        primary: true,
        onClick: () => onToast("Provider picker is out of scope in this reference.", "info", "Schedule")
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Seg, {
      ariaLabel: "Schedule view",
      value: view,
      onChange: setView,
      options: [{
        label: "Week",
        value: "week"
      }, {
        label: "Month",
        value: "month"
      }, {
        label: "Day",
        value: "day"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      className: "rule"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        fontSize: 11,
        color: "var(--ink-dim)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 2,
        background: CAL_COLORS.a
      }
    }), "Teal \u2014 Deep work"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 2,
        background: CAL_COLORS.b
      }
    }), "Green \u2014 Wellness"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 2,
        background: CAL_COLORS.c
      }
    }), "Clay \u2014 Meetings"))), view === "week" ? /*#__PURE__*/React.createElement(AxisGlassPanel, {
      style: {
        padding: 0,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(7,1fr)"
      }
    }, DAYS.map((d, i) => /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        borderLeft: i ? "1px solid var(--line)" : "none",
        minHeight: 300
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "10px 12px",
        borderBottom: "1px solid var(--line)",
        fontFamily: "var(--narrow)",
        fontSize: 10,
        letterSpacing: ".22em",
        textTransform: "uppercase",
        color: i === 4 ? "var(--accent)" : "var(--ink-faint)"
      }
    }, d, " ", 18 + i), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 6,
        padding: 8
      }
    }, EVENTS.filter(e => e.day === i).map(e => /*#__PURE__*/React.createElement("div", {
      key: e.id,
      role: "button",
      tabIndex: 0,
      onClick: () => setSel(e),
      onKeyDown: ev => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          setSel(e);
        }
      },
      style: {
        cursor: "pointer",
        padding: "7px 8px",
        borderRadius: 4,
        background: "var(--glass)",
        borderLeft: `2px solid ${CAL_COLORS[e.cal]}`,
        outline: sel && sel.id === e.id ? "1px solid var(--accent)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--mono)",
        fontSize: 9.5,
        color: "var(--ink-faint)"
      }
    }, e.start), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--ink)",
        lineHeight: 1.3
      }
    }, e.title)))))))) : /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "info",
      title: `${view === "month" ? "Month" : "Day"} view is not built in this kit`
    }, "The reference ships the week grid. Month and day reuse the same event row and detail card."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, sel ? /*#__PURE__*/React.createElement(Card, {
      tick: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "seclabel"
    }, DAYS[sel.day], " \xB7 ", sel.src), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "6px 0 0",
        fontFamily: "var(--serif)",
        fontSize: 18,
        color: "var(--ink)",
        fontWeight: 400
      }
    }, sel.title), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "12px 0"
      }
    }, /*#__PURE__*/React.createElement(DetailPanelSections, {
      sections: [{
        id: "time",
        title: "Time",
        value: `${sel.start} – ${sel.end}`
      }, {
        id: "where",
        title: "Where",
        value: sel.where
      }, {
        id: "cal",
        title: "Calendar",
        value: sel.cal === "a" ? "Deep work" : sel.cal === "b" ? "Wellness" : "Meetings"
      }, {
        id: "src",
        title: "Provider",
        value: sel.src
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onToast("Opened in the provider calendar.", "info", "Schedule")
    }, "Open"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => onToast("Reschedule drafts a proposal — it never moves the event silently.", "info", "Schedule")
    }, "Reschedule"))) : null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 10
      }
    }, "Recurring, in plain words"), /*#__PURE__*/React.createElement("input", {
      className: "input",
      defaultValue: "",
      placeholder: "Spanish lesson, 25 min, every weekday morning"
    }), /*#__PURE__*/React.createElement("p", {
      className: "sub"
    }, "Axis parses the phrase into a rule and shows the first five occurrences before anything is written."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onToast("Preview: Mon–Fri 07:35 · 25 min · from 25 Aug", "info", "Schedule")
    }, "Preview rule"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onToast("Cleared.", "info", "Schedule")
    }, "Clear")))));
  }
  Object.assign(window, {
    DispatchScreen,
    ScheduleScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/axis-console/DailyScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/axis-console/FundScreen.jsx
try { (() => {
(function () {
  const {
    ModuleInteractiveHero,
    Card,
    Button,
    StatusCallout,
    AxisGlassPanel,
    DetailPanelSections,
    FreshnessBadge,
    Icon
  } = window.AXISDesignSystem_7a9b3b;
  const TABS = ["Overview", "Spending", "Cash Flow", "Net Worth", "Investing", "Watchlist", "Market", "Forecasting", "Advisor"];
  const SERIES = [1188, 1201, 1194, 1219, 1236, 1228, 1247, 1262, 1258, 1271, 1279, 1285];
  const HOLDINGS = [{
    sym: "VTI",
    name: "Total Market ETF",
    value: "$412,880",
    gain: 1.4
  }, {
    sym: "VXUS",
    name: "Total International",
    value: "$188,204",
    gain: -0.6
  }, {
    sym: "BND",
    name: "Total Bond",
    value: "$142,908",
    gain: 0.2
  }, {
    sym: "AVUV",
    name: "Small-Cap Value",
    value: "$96,411",
    gain: 2.1
  }];
  const WATCH = [{
    sym: "SCHD",
    last: "$28.94",
    chg: -0.4,
    note: "Dividend tilt candidate"
  }, {
    sym: "IEFA",
    last: "$74.12",
    chg: 0.8,
    note: "Cheaper international sleeve"
  }, {
    sym: "VNQ",
    last: "$91.36",
    chg: 1.2,
    note: "Watching for the concentration limit"
  }];
  function Spark({
    data,
    w = 320,
    h = 64
  }) {
    const min = Math.min(...data),
      max = Math.max(...data);
    const pts = data.map((v, i) => `${i / (data.length - 1) * w},${h - (v - min) / (max - min) * (h - 8) - 4}`).join(" ");
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: `0 0 ${w} ${h}`,
      width: "100%",
      height: h,
      "aria-hidden": true,
      style: {
        display: "block",
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement("polyline", {
      points: pts,
      fill: "none",
      stroke: "var(--accent)",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: `0,${h} ${pts} ${w},${h}`,
      fill: "var(--accent)",
      opacity: ".08",
      stroke: "none"
    }));
  }
  function FundScreen({
    onToast
  }) {
    const [tab, setTab] = React.useState("Overview");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Capital / Fund",
      title: "Portfolio and cash flow",
      compact: true,
      subtitle: "Balances are read-only until an approval clears. Every figure states its provider and how stale it is.",
      stats: [{
        label: "Net worth",
        value: "$1,284,902",
        tone: "accent",
        hint: "+1.4% this month"
      }, {
        label: "Invested",
        value: "$840,403"
      }, {
        label: "Cash",
        value: "$12,410"
      }, {
        label: "Liabilities",
        value: "$—",
        tone: "muted",
        hint: "no linked debt"
      }],
      actions: [{
        label: "Refresh balances",
        primary: true,
        onClick: () => onToast("Balances refreshed · Plaid, Public.", "success", "Fund")
      }, {
        label: "Connect account",
        onClick: () => onToast("Provider link is out of scope in this reference.", "info", "Fund")
      }]
    }), /*#__PURE__*/React.createElement("div", {
      className: "chips"
    }, TABS.map(t => /*#__PURE__*/React.createElement("button", {
      key: t,
      type: "button",
      className: `chip${tab === t ? " on" : ""}`,
      onClick: () => setTab(t)
    }, t))), /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "stale",
      title: "Quotes are 22 minutes delayed",
      actionSlot: /*#__PURE__*/React.createElement(Button, {
        onClick: () => onToast("Requested a real-time quote refresh.", "info", "Fund")
      }, "Refresh")
    }, "The quarterly-rebalance routine paused rather than trade on a delayed quote, and filed an approval instead."), tab === "Overview" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr) minmax(0,1fr)",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tick: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "seclabel"
    }, "Net worth"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--disp)",
        fontSize: 34,
        lineHeight: 1,
        color: "var(--ink)"
      }
    }, "$1,284,902"), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 10.5,
        color: "var(--up)",
        marginTop: 6
      }
    }, "Cash $12,410.02 \xB7 Liabilities $0.00"), /*#__PURE__*/React.createElement(Spark, {
      data: SERIES
    }), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 9.5,
        color: "var(--ink-faint)"
      }
    }, "12 months \xB7 Supabase history")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      className: "seclabel"
    }, "Invested"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--disp)",
        fontSize: 28,
        lineHeight: 1,
        color: "var(--ink)"
      }
    }, "$840,403"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(FreshnessBadge, {
      tier: "delayed",
      relative: "22m ago"
    })), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 10,
        color: "var(--ink-dim)",
        marginTop: 10
      }
    }, "4 holdings \xB7 Public")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      className: "seclabel"
    }, "Cash"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--disp)",
        fontSize: 28,
        lineHeight: 1,
        color: "var(--ink)"
      }
    }, "$12,410"), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 10,
        color: "var(--ink-dim)",
        marginTop: 10
      }
    }, "2 accounts \xB7 Plaid"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(DetailPanelSections, {
      sections: [{
        id: "chk",
        title: "Everyday ··4471",
        value: "$8,410.02"
      }, {
        id: "sav",
        title: "Reserve ··9902",
        value: "$4,000.00"
      }]
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tick: true
    }, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 10
      }
    }, "Top movers", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, "today")), /*#__PURE__*/React.createElement("div", null, HOLDINGS.map(h => /*#__PURE__*/React.createElement("div", {
      key: h.sym,
      className: "task-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 11.5,
        color: "var(--ink)",
        width: 52
      }
    }, h.sym), /*#__PURE__*/React.createElement("div", {
      className: "task-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-title",
      style: {
        fontSize: 12.5
      }
    }, h.name)), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 11.5,
        color: "var(--ink-2)"
      }
    }, h.value), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 11,
        color: h.gain >= 0 ? "var(--up)" : "var(--down)",
        width: 62,
        textAlign: "right"
      }
    }, h.gain >= 0 ? "▴" : "▾", " ", Math.abs(h.gain).toFixed(1), "%"))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 10
      }
    }, "Daily brief", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, "medium confidence")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13,
        lineHeight: 1.75,
        color: "var(--ink-dim)"
      }
    }, "Net worth is up 1.4% on the month, carried almost entirely by the small-cap value sleeve. Cash sits above the six-month liquidity buffer, so the rebalance can be funded without selling. One position is within four points of the 20% concentration limit set in your financial profile."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: () => onToast("Rebalance proposal drafted — it files as an approval.", "success", "Fund")
    }, "Draft rebalance"))))) : tab === "Investing" ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 10
      }
    }, "Holdings", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, "4 positions")), /*#__PURE__*/React.createElement("div", null, HOLDINGS.map(h => /*#__PURE__*/React.createElement("div", {
      key: h.sym,
      className: "task-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 11.5,
        color: "var(--ink)",
        width: 52
      }
    }, h.sym), /*#__PURE__*/React.createElement("div", {
      className: "task-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-title",
      style: {
        fontSize: 12.5
      }
    }, h.name), /*#__PURE__*/React.createElement("div", {
      className: "task-meta"
    }, /*#__PURE__*/React.createElement("span", null, "taxable \xB7 acct 4471"), /*#__PURE__*/React.createElement("span", null, "Public"))), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 11.5,
        color: "var(--ink-2)"
      }
    }, h.value), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onToast("Order tickets always route through Approvals.", "info", "Fund")
    }, "Order")))), /*#__PURE__*/React.createElement("p", {
      className: "sub"
    }, "An order ticket never executes here. It files an approval that states the tool, the target, the amount, and the balance before and after.")) : tab === "Watchlist" ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
        gap: "var(--space-3)"
      }
    }, WATCH.map(w => /*#__PURE__*/React.createElement(Card, {
      key: w.sym
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 13,
        color: "var(--ink)"
      }
    }, w.sym), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 11,
        color: w.chg >= 0 ? "var(--up)" : "var(--down)"
      }
    }, w.chg >= 0 ? "▴" : "▾", " ", Math.abs(w.chg).toFixed(1), "%")), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 18,
        color: "var(--ink)",
        marginTop: 8
      }
    }, w.last), /*#__PURE__*/React.createElement("p", {
      className: "sub",
      style: {
        fontSize: 12
      }
    }, w.note)))) : /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "info",
      title: `${tab} is not built in this kit`
    }, "The reference ships Overview, Investing, and Watchlist. The remaining Fund pages reuse the same metric card, holdings row, and freshness badge."), /*#__PURE__*/React.createElement(AxisGlassPanel, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 8
      }
    }, "Execution boundary"), /*#__PURE__*/React.createElement("p", {
      className: "sub",
      style: {
        marginTop: 0
      }
    }, "Fund reads. It never writes an order, moves cash, or changes an account without an approval that you cleared with a passkey.")));
  }
  Object.assign(window, {
    FundScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/axis-console/FundScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/axis-console/LabsScreens.jsx
try { (() => {
(function () {
  const {
    ModuleInteractiveHero,
    Card,
    Button,
    Seg,
    StatusCallout,
    AxisGlassPanel,
    WidgetShell,
    Icon
  } = window.AXISDesignSystem_7a9b3b;

  /* ───────────────────────── Vitality (lab) ───────────────────────── */

  const VIT_TABS = [{
    label: "Health",
    value: "health"
  }, {
    label: "Nutrition",
    value: "nutrition"
  }, {
    label: "Meditation",
    value: "meditation"
  }, {
    label: "Running",
    value: "run"
  }, {
    label: "Strength",
    value: "strength"
  }, {
    label: "Yoga & Pilates",
    value: "yoga"
  }];
  const METRICS = [{
    label: "Resting HR",
    value: "51 bpm",
    hint: "7-day avg 53",
    status: "fresh",
    provider: "oura",
    icon: "heart"
  }, {
    label: "HRV",
    value: "68 ms",
    hint: "trending up",
    status: "fresh",
    provider: "oura",
    icon: "activity"
  }, {
    label: "Sleep",
    value: "7h 12m",
    hint: "82% efficiency",
    status: "stale",
    provider: "oura",
    icon: "moon"
  }, {
    label: "Weekly load",
    value: "38 km",
    hint: "target 45",
    status: "live",
    provider: "strava",
    icon: "footprints"
  }];
  const MED_TYPES = [{
    label: "Focused Breath",
    desc: "Anchor attention to the breath cycle"
  }, {
    label: "Body Scan",
    desc: "Progressive awareness from feet to crown"
  }, {
    label: "Box Breathing",
    desc: "4-4-4-4 tactical breath regulation"
  }, {
    label: "Yoga Nidra",
    desc: "Conscious sleep / deep restoration"
  }];
  const WEEK_PLAN = [{
    d: "Mon",
    s: "Zone-2 · 10 km",
    done: true
  }, {
    d: "Tue",
    s: "Strength · lower",
    done: true
  }, {
    d: "Wed",
    s: "Rest / mobility",
    done: true
  }, {
    d: "Thu",
    s: "Intervals · 6×800",
    done: false
  }, {
    d: "Fri",
    s: "Zone-2 · 8 km",
    done: false
  }, {
    d: "Sat",
    s: "Long run · 18 km",
    done: false
  }, {
    d: "Sun",
    s: "Yoga · 30 min",
    done: false
  }];
  function VitalityScreen({
    onToast
  }) {
    const [tab, setTab] = React.useState("health");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(window.MaturityBanner, {
      kind: "lab",
      label: "Vitality",
      reason: "Training, nutrition, and health-device areas mix live Strava with local-only and coming-soon flows.",
      action: "Keep wearable metrics and manual logs labelled lab until Supabase-backed persistence is complete."
    }), /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Labs / Vitality",
      title: "Training and nutrition",
      compact: true,
      subtitle: "Device metrics stay labelled by provider and freshness. Manual logs are marked local until they persist.",
      stats: [{
        label: "Weekly km",
        value: "38",
        tone: "accent",
        hint: "target 45"
      }, {
        label: "Sessions",
        value: "3/7"
      }, {
        label: "Devices",
        value: "2",
        hint: "Oura, Strava"
      }, {
        label: "Streak",
        value: "6w",
        tone: "success"
      }],
      actions: [{
        label: "Log a session",
        primary: true,
        onClick: () => onToast("Logged locally. Sign-in persists it.", "success", "Vitality")
      }, {
        label: "Build a regimen",
        onClick: () => onToast("Regimen builder is out of scope in this reference.", "info", "Vitality")
      }]
    }), /*#__PURE__*/React.createElement(Seg, {
      ariaLabel: "Vitality area",
      value: tab,
      onChange: setTab,
      options: VIT_TABS
    }), tab === "health" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "tidbits"
    }, METRICS.map(m => /*#__PURE__*/React.createElement(WidgetShell, {
      key: m.label,
      title: m.label,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: m.icon
      }),
      value: m.value,
      hint: m.hint,
      status: m.status,
      provider: m.provider,
      updatedAt: "09:12"
    }))), /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "stale",
      title: "Sleep data is a day behind",
      actionSlot: /*#__PURE__*/React.createElement(Button, {
        onClick: () => onToast("Requested a device sync.", "info", "Vitality")
      }, "Sync device")
    }, "The ring last uploaded at 06:40 yesterday. Nothing is inferred from the gap.")) : tab === "run" ? /*#__PURE__*/React.createElement(AxisGlassPanel, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 12
      }
    }, "This week", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, "3 of 7 complete")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(7,1fr)",
        gap: 8
      }
    }, WEEK_PLAN.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.d,
      style: {
        padding: 10,
        borderRadius: 5,
        background: "var(--glass)",
        borderTop: `2px solid ${p.done ? "var(--up)" : "var(--line-strong)"}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--narrow)",
        fontSize: 9.5,
        letterSpacing: ".2em",
        textTransform: "uppercase",
        color: "var(--ink-faint)"
      }
    }, p.d), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: p.done ? "var(--ink-dim)" : "var(--ink)",
        marginTop: 6,
        lineHeight: 1.35
      }
    }, p.s))))) : tab === "meditation" ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
        gap: "var(--space-3)"
      }
    }, MED_TYPES.map(m => /*#__PURE__*/React.createElement(Card, {
      key: m.label
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontSize: 13,
        color: "var(--ink)"
      }
    }, m.label), /*#__PURE__*/React.createElement("p", {
      className: "sub",
      style: {
        fontSize: 12
      }
    }, m.desc), /*#__PURE__*/React.createElement(Button, {
      style: {
        marginTop: 10
      },
      onClick: () => onToast(`${m.label} · 10 minutes started.`, "success", "Vitality")
    }, "Start 10 min")))) : /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "info",
      title: `${VIT_TABS.find(t => t.value === tab).label} is not built in this kit`
    }, "The reference ships Health, Running, and Meditation. The other areas reuse the same widget tile and session row."));
  }

  /* ───────────────────────── Atelier (lab) ───────────────────────── */

  const LANGS = [{
    key: "fr",
    flag: "🇫🇷",
    label: "French",
    lv: "B2 → C1"
  }, {
    key: "es",
    flag: "🇪🇸",
    label: "Spanish",
    lv: "Medical"
  }, {
    key: "yo",
    flag: "🟢",
    label: "Yoruba",
    lv: "Foundation"
  }];
  const SOURCES = {
    fr: [{
      pinned: true,
      label: "InnerFrench — intermediate podcast",
      type: "AUDIO"
    }, {
      pinned: true,
      label: "RFI — free daily news (no paywall)",
      type: "READ"
    }, {
      pinned: false,
      label: "Kwiziq — adaptive C1 grammar",
      type: "DRILL"
    }, {
      pinned: false,
      label: "Italki — conversation tutors",
      type: "SPEAK"
    }],
    es: [{
      pinned: true,
      label: "MedlinePlus en español — clinical reading",
      type: "CLINICAL"
    }, {
      pinned: true,
      label: "Notes in Spanish — free podcast",
      type: "AUDIO"
    }, {
      pinned: false,
      label: "SpanishDict — conjugation",
      type: "DRILL"
    }, {
      pinned: false,
      label: "Italki — medical tutors",
      type: "SPEAK"
    }],
    yo: [{
      pinned: true,
      label: "YorubaName — pronunciation",
      type: "AUDIO"
    }, {
      pinned: true,
      label: "Yoruba101 — structured lessons",
      type: "COURSE"
    }, {
      pinned: false,
      label: "BBC Yoruba — news",
      type: "READ"
    }, {
      pinned: false,
      label: "Tandem — language partners",
      type: "SPEAK"
    }]
  };
  function AtelierScreen({
    onToast
  }) {
    const [lang, setLang] = React.useState("fr");
    const [pins, setPins] = React.useState({});
    const active = LANGS.find(l => l.key === lang);
    const isPinned = s => pins[s.label] === undefined ? s.pinned : pins[s.label];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(window.MaturityBanner, {
      kind: "lab",
      label: "Atelier",
      reason: "Creative discovery remains exploratory and provider-dependent.",
      action: "Validate source availability, pin persistence, and empty/error states before promotion."
    }), /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Labs / Atelier",
      title: "Language and craft",
      compact: true,
      subtitle: "A shelf of sources per language, pinned by hand. Nothing here tracks streaks or scores you.",
      stats: [{
        label: "Languages",
        value: "3",
        tone: "accent"
      }, {
        label: "Pinned",
        value: String(SOURCES[lang].filter(isPinned).length)
      }, {
        label: "Level",
        value: active.lv,
        tone: "muted"
      }, {
        label: "Sync",
        value: "Local",
        tone: "warning",
        hint: "sign in to persist"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      className: "chips"
    }, LANGS.map(l => /*#__PURE__*/React.createElement("button", {
      key: l.key,
      type: "button",
      className: `chip${lang === l.key ? " on" : ""}`,
      onClick: () => setLang(l.key)
    }, l.flag, " ", l.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "var(--space-3)"
      }
    }, SOURCES[lang].map(s => /*#__PURE__*/React.createElement(Card, {
      key: s.label
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 10,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "seclabel",
      style: {
        marginBottom: 6
      }
    }, s.type), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--ink)",
        lineHeight: 1.4
      }
    }, s.label)), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      "aria-label": isPinned(s) ? "Unpin" : "Pin",
      onClick: () => {
        setPins(p => ({
          ...p,
          [s.label]: !isPinned(s)
        }));
        onToast(isPinned(s) ? "Unpinned." : "Pinned to the shelf.", "success", "Atelier");
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: isPinned(s) ? "pin-off" : "pin",
      size: "xs"
    })))))), /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "setup_required",
      title: "Sources are provider-dependent"
    }, "A source that stops responding is marked unavailable rather than removed, so a broken shelf is visible instead of silent."));
  }

  /* ───────────────────────── Listening Vault (lab) ───────────────────────── */

  const MOODS = [{
    label: "Late Night",
    sub: "deep, introspective",
    g: "linear-gradient(135deg,#1a1a2e,#0a0a18)"
  }, {
    label: "Lagos Heat",
    sub: "afro, uptempo",
    g: "linear-gradient(135deg,#2e1808,#180e04)"
  }, {
    label: "Blue Note",
    sub: "jazz, soul",
    g: "linear-gradient(135deg,#0e1e2e,#060e18)"
  }, {
    label: "Energy",
    sub: "drill, grime",
    g: "linear-gradient(135deg,#1e1e1e,#0a0a0a)"
  }];
  const TASTE = [{
    label: "Afrobeats",
    pct: 82,
    color: "#c9a463"
  }, {
    label: "R&B / Soul",
    pct: 71,
    color: "#c2603f"
  }, {
    label: "Hip-Hop",
    pct: 64,
    color: "#3f6fb0"
  }, {
    label: "Jazz",
    pct: 48,
    color: "#7fa86a"
  }, {
    label: "Electronic",
    pct: 38,
    color: "#9aa7b8"
  }, {
    label: "Highlife",
    pct: 29,
    color: "#b8863f"
  }];
  function ListeningVaultScreen({
    onToast
  }) {
    const [connected, setConnected] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(window.MaturityBanner, {
      kind: "lab",
      label: "Listening Vault",
      reason: "Music-room workflows depend on Spotify availability and exploratory listening UI.",
      action: "Validate connect/disconnect, playback fallbacks, and saved state before promotion."
    }), /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Labs / Listening Vault",
      title: "The music room",
      compact: true,
      subtitle: "Rooms are moods, not algorithms. Playback needs a provider; the shelf and the taste profile do not.",
      stats: [{
        label: "Rooms",
        value: "4",
        tone: "accent"
      }, {
        label: "Crates",
        value: "12"
      }, {
        label: "Provider",
        value: connected ? "Spotify" : "Off",
        tone: connected ? "success" : "muted"
      }, {
        label: "Saved",
        value: "148",
        hint: "local shelf"
      }],
      actions: [{
        label: connected ? "Disconnect Spotify" : "Connect Spotify",
        primary: true,
        onClick: () => {
          setConnected(c => !c);
          onToast(connected ? "Spotify disconnected. The shelf stays." : "Spotify connected.", "success", "Listening Vault");
        }
      }]
    }), !connected ? /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "disconnected",
      title: "Playback is unavailable",
      actionSlot: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        onClick: () => {
          setConnected(true);
          onToast("Spotify connected.", "success", "Listening Vault");
        }
      }, "Connect")
    }, "Rooms, crates, and the taste profile all read from the local shelf. Only playback needs the provider.") : null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "var(--space-3)"
      }
    }, MOODS.map(m => /*#__PURE__*/React.createElement("div", {
      key: m.label,
      role: "button",
      tabIndex: 0,
      onClick: () => onToast(connected ? `${m.label} · playing` : "Connect a provider to play this room.", connected ? "success" : "warn", "Listening Vault"),
      onKeyDown: e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToast(connected ? `${m.label} · playing` : "Connect a provider to play this room.", connected ? "success" : "warn", "Listening Vault");
        }
      },
      style: {
        cursor: "pointer",
        borderRadius: 8,
        border: "1px solid var(--line)",
        padding: 18,
        minHeight: 132,
        background: m.g,
        display: "grid",
        alignContent: "end",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--serif)",
        fontSize: 19,
        color: "#f4f1ea"
      }
    }, m.label), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 10,
        color: "rgba(244,241,234,.62)"
      }
    }, m.sub)))), /*#__PURE__*/React.createElement(AxisGlassPanel, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 14
      }
    }, "Taste profile", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, "rolling 12 months")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 10
      }
    }, TASTE.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.label,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--ink-2)",
        minWidth: 110
      }
    }, t.label), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 3,
        background: "var(--line)",
        borderRadius: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${t.pct}%`,
        height: "100%",
        background: t.color,
        borderRadius: 2
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 10.5,
        color: "var(--ink-faint)",
        width: 34,
        textAlign: "right"
      }
    }, t.pct))))));
  }
  Object.assign(window, {
    VitalityScreen,
    AtelierScreen,
    ListeningVaultScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/axis-console/LabsScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/axis-console/LibrarySupperScreens.jsx
try { (() => {
(function () {
  const {
    ModuleInteractiveHero,
    Card,
    Button,
    StatusCallout,
    AxisGlassPanel,
    DetailPanelSections,
    Icon
  } = window.AXISDesignSystem_7a9b3b;

  /* ───────────────────────── Library (lab) ───────────────────────── */

  const COLLECTIONS = ["All Files", "Manuscripts", "IRB & Regulatory", "Figures & Images", "Lectures & Video"];
  const FILES = [{
    name: "r01-narrative-v7.docx",
    coll: "Manuscripts",
    type: "DOCX",
    size: "412 KB",
    age: "2h"
  }, {
    name: "cohort2-outcomes-draft.pdf",
    coll: "Manuscripts",
    type: "PDF",
    size: "1.8 MB",
    age: "1d"
  }, {
    name: "irb-amendment-3.pdf",
    coll: "IRB & Regulatory",
    type: "PDF",
    size: "740 KB",
    age: "3d"
  }, {
    name: "consent-form-2026.pdf",
    coll: "IRB & Regulatory",
    type: "PDF",
    size: "220 KB",
    age: "1w"
  }, {
    name: "figure-3-cumulative-incidence.png",
    coll: "Figures & Images",
    type: "PNG",
    size: "1.1 MB",
    age: "5h"
  }, {
    name: "lead-placement-schematic.png",
    coll: "Figures & Images",
    type: "PNG",
    size: "890 KB",
    age: "2w"
  }, {
    name: "aans-keynote-cut.mp4",
    coll: "Lectures & Video",
    type: "MP4",
    size: "412 MB",
    age: "3w"
  }];
  const TYPE_TONE = {
    PDF: "var(--down)",
    DOCX: "var(--accent-2)",
    PNG: "var(--up)",
    MP4: "var(--clay)"
  };
  function LibraryScreen({
    onToast
  }) {
    const [coll, setColl] = React.useState("All Files");
    const [hot, setHot] = React.useState(false);
    const list = FILES.filter(f => coll === "All Files" || f.coll === coll);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(window.MaturityBanner, {
      kind: "lab",
      label: "Library",
      reason: "Uploads are available, but the broader library workflow still needs production hardening.",
      action: "Validate upload/delete/download, storage errors, and RLS before promotion."
    }), /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Labs / Library",
      title: "Files and collections",
      compact: true,
      subtitle: "Owner-scoped storage. Every file keeps its size, age, and collection, and deletion is explicit.",
      stats: [{
        label: "Files",
        value: String(FILES.length),
        tone: "accent"
      }, {
        label: "Collections",
        value: String(COLLECTIONS.length - 1)
      }, {
        label: "Stored",
        value: "417 MB"
      }, {
        label: "Access",
        value: "Owner",
        tone: "success",
        hint: "RLS enforced"
      }],
      actions: [{
        label: "Upload",
        primary: true,
        onClick: () => onToast("File picker is out of scope in this reference.", "info", "Library")
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "200px minmax(0,1fr)",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        padding: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 2
      }
    }, COLLECTIONS.map(c => /*#__PURE__*/React.createElement("button", {
      key: c,
      type: "button",
      className: `navitem${coll === c ? " active" : ""}`,
      onClick: () => setColl(c)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "folder",
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", null, c), /*#__PURE__*/React.createElement("span", {
      className: "maturity"
    }, c === "All Files" ? FILES.length : FILES.filter(f => f.coll === c).length))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      role: "button",
      tabIndex: 0,
      onClick: () => onToast("File picker is out of scope in this reference.", "info", "Library"),
      onKeyDown: e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToast("File picker is out of scope in this reference.", "info", "Library");
        }
      },
      onDragOver: e => {
        e.preventDefault();
        setHot(true);
      },
      onDragLeave: () => setHot(false),
      onDrop: e => {
        e.preventDefault();
        setHot(false);
      },
      style: {
        cursor: "pointer",
        display: "grid",
        justifyItems: "center",
        gap: 6,
        padding: "30px 20px",
        borderRadius: 8,
        border: `1px dashed ${hot ? "var(--accent)" : "var(--line-strong)"}`,
        background: hot ? "var(--glass)" : "transparent"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "upload"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--ink)"
      }
    }, "Drag files here, or ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--accent)"
      }
    }, "browse")), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 9.5,
        color: "var(--ink-faint)"
      }
    }, "PDF \xB7 DOCX \xB7 PNG \xB7 JPG \xB7 MP4 \u2014 up to 5 GB")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 10
      }
    }, coll, /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, list.length, " file", list.length === 1 ? "" : "s")), list.length === 0 ? /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "empty",
      title: "No files yet"
    }, "Drag files into the dropzone above, or click browse.") : /*#__PURE__*/React.createElement("div", null, list.map(f => /*#__PURE__*/React.createElement("div", {
      key: f.name,
      className: "task-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 9.5,
        letterSpacing: ".08em",
        color: TYPE_TONE[f.type] || "var(--ink-faint)",
        width: 44
      }
    }, f.type), /*#__PURE__*/React.createElement("div", {
      className: "task-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-title",
      style: {
        fontSize: 12.5
      }
    }, f.name), /*#__PURE__*/React.createElement("div", {
      className: "task-meta"
    }, /*#__PURE__*/React.createElement("span", null, f.coll), /*#__PURE__*/React.createElement("span", null, f.size), /*#__PURE__*/React.createElement("span", null, f.age))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onToast("Signed download URL issued for 60 seconds.", "success", "Library")
    }, "Download"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onToast("Delete asks for confirmation and is logged.", "warn", "Library")
    }, "Delete"))))))));
  }

  /* ───────────────────────── Supper Club (lab) ───────────────────────── */

  const RECIPES = [{
    name: "Jollof with smoked paprika",
    time: "70 min",
    kcal: "540",
    note: "Party-size · make the stock base a day ahead",
    diet: ["Batch"]
  }, {
    name: "Efo riro, lighter",
    time: "45 min",
    kcal: "380",
    note: "Half the palm oil, more spinach",
    diet: ["Low-fat"]
  }, {
    name: "Braised short rib",
    time: "3 h 30 min",
    kcal: "720",
    note: "Oven does the work · reheats well",
    diet: ["Make-ahead"]
  }, {
    name: "Charred greens, anchovy",
    time: "20 min",
    kcal: "210",
    note: "Side that carries a rich main",
    diet: ["Quick"]
  }, {
    name: "Burnt basque cheesecake",
    time: "60 min",
    kcal: "480",
    note: "Bake the morning of",
    diet: ["Make-ahead"]
  }, {
    name: "Chin chin, small batch",
    time: "35 min",
    kcal: "300",
    note: "Keeps two weeks in a tin",
    diet: ["Batch"]
  }];
  function SupperClubScreen({
    onToast
  }) {
    const [saved, setSaved] = React.useState({
      "Braised short rib": true,
      "Charred greens, anchovy": true
    });
    const count = Object.values(saved).filter(Boolean).length;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(window.MaturityBanner, {
      kind: "lab",
      label: "Supper Club",
      reason: "Recipe curation syncs to Supabase when signed in; seed catalog remains curated.",
      action: "Validate recipe save, diet prefs persistence, and error states before promotion."
    }), /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Labs / Supper Club",
      title: "Menus and recipes",
      compact: true,
      subtitle: "A curated seed catalogue plus whatever you add. Saving syncs when you are signed in and stays local when you are not.",
      stats: [{
        label: "Recipes",
        value: String(RECIPES.length),
        tone: "accent"
      }, {
        label: "Saved",
        value: String(count)
      }, {
        label: "Next supper",
        value: "6 covers",
        hint: "in two weeks"
      }, {
        label: "Sync",
        value: "Cloud",
        tone: "success"
      }],
      actions: [{
        label: "Add recipe",
        primary: true,
        onClick: () => onToast("Recipe draft created.", "success", "Supper Club")
      }, {
        label: "Plan a menu",
        onClick: () => onToast("Menu planner is out of scope in this reference.", "info", "Supper Club")
      }]
    }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 2fr auto",
        gap: 10,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("input", {
      className: "input",
      placeholder: "Recipe name"
    }), /*#__PURE__*/React.createElement("input", {
      className: "input",
      placeholder: "Time (e.g. 30 min)"
    }), /*#__PURE__*/React.createElement("input", {
      className: "input",
      placeholder: "kcal"
    }), /*#__PURE__*/React.createElement("input", {
      className: "input",
      placeholder: "Note / source (optional)"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onToast("Recipe saved.", "success", "Supper Club")
    }, "Save"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, RECIPES.map(r => /*#__PURE__*/React.createElement(Card, {
      key: r.name,
      tick: Boolean(saved[r.name])
    }, /*#__PURE__*/React.createElement("div", {
      className: "seclabel",
      style: {
        marginBottom: 6
      }
    }, r.diet.join(" · ")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--serif)",
        fontSize: 17,
        lineHeight: 1.3,
        color: "var(--ink)"
      }
    }, r.name), /*#__PURE__*/React.createElement("div", {
      className: "task-meta",
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("span", null, r.time), /*#__PURE__*/React.createElement("span", null, r.kcal, " kcal")), /*#__PURE__*/React.createElement("p", {
      className: "sub",
      style: {
        fontSize: 12
      }
    }, r.note), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: saved[r.name] ? "ghost" : "secondary",
      onClick: () => {
        setSaved(s => ({
          ...s,
          [r.name]: !s[r.name]
        }));
        onToast(saved[r.name] ? "Removed from saved." : "Saved to your shelf.", "success", "Supper Club");
      }
    }, saved[r.name] ? "Saved" : "Save"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onToast("Added to the shopping list.", "success", "Supper Club")
    }, "Shop"))))), /*#__PURE__*/React.createElement(AxisGlassPanel, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 10
      }
    }, "Diet preferences"), /*#__PURE__*/React.createElement(DetailPanelSections, {
      sections: [{
        id: "avoid",
        title: "Avoid",
        value: "Shellfish"
      }, {
        id: "lean",
        title: "Lean toward",
        value: "Vegetable-forward mains, one make-ahead dessert"
      }, {
        id: "covers",
        title: "Usual covers",
        value: "6"
      }]
    }), /*#__PURE__*/React.createElement("p", {
      className: "sub"
    }, "Preferences shape suggestions only. They never filter a recipe out of the catalogue without saying so.")));
  }
  Object.assign(window, {
    LibraryScreen,
    SupperClubScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/axis-console/LibrarySupperScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/axis-console/LifeScreens.jsx
try { (() => {
(function () {
  const {
    ModuleInteractiveHero,
    Card,
    Button,
    Seg,
    StatusCallout,
    AxisGlassPanel,
    DetailPanelSections,
    FreshnessBadge,
    Icon
  } = window.AXISDesignSystem_7a9b3b;

  /* ───────────────────────── People ───────────────────────── */

  const PEOPLE_FILTERS = ["All", "Mentors", "Collaborators", "Friends", "Needs Follow-Up"];
  const PEOPLE = [{
    id: "c1",
    name: "Adaeze Ilori",
    role: "PI · Neurosurgery",
    group: "Collaborators",
    due: true,
    last: "11 days ago",
    note: "Owes the biomarker appendix reply; wants the sensitivity analysis included.",
    synced: true
  }, {
    id: "c2",
    name: "Martin Ostrowski",
    role: "Mentor · Outcomes research",
    group: "Mentors",
    due: true,
    last: "6 weeks ago",
    note: "Quarterly catch-up. Ask about the registry linkage query.",
    synced: true
  }, {
    id: "c3",
    name: "Priya Raman",
    role: "Editor · J Neurosurg",
    group: "Collaborators",
    due: true,
    last: "3 weeks ago",
    note: "Promised an intro to the methods reviewer at AANS.",
    synced: false
  }, {
    id: "c4",
    name: "Tunde Bakare",
    role: "Friend",
    group: "Friends",
    due: false,
    last: "5 days ago",
    note: "Supper Club in two weeks — six covers.",
    synced: true
  }, {
    id: "c5",
    name: "Hélène Duarte",
    role: "Statistician",
    group: "Collaborators",
    due: false,
    last: "2 days ago",
    note: "Reviewing the competing-risks re-analysis.",
    synced: true
  }];
  function PeopleScreen({
    onToast
  }) {
    const [filter, setFilter] = React.useState("All");
    const [sel, setSel] = React.useState("c1");
    const list = PEOPLE.filter(p => filter === "All" || (filter === "Needs Follow-Up" ? p.due : p.group === filter));
    const person = list.find(p => p.id === sel) || list[0];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Life / People",
      title: "CRM and follow-ups",
      compact: true,
      subtitle: "Who is waiting on you, and what is open between you. Contacts sync from Google; the open thread is yours to write.",
      stats: [{
        label: "Contacts",
        value: String(PEOPLE.length),
        tone: "accent",
        hint: "updated 6m ago"
      }, {
        label: "Follow-ups due",
        value: "3",
        tone: "warning"
      }, {
        label: "Google synced",
        value: "4",
        tone: "success"
      }, {
        label: "Groups",
        value: "3"
      }],
      actions: [{
        label: "Add person",
        primary: true,
        onClick: () => onToast("Contact draft created.", "success", "People")
      }, {
        label: "Connect contacts",
        onClick: () => onToast("Provider picker is out of scope in this reference.", "info", "People")
      }]
    }), /*#__PURE__*/React.createElement("div", {
      className: "chips"
    }, PEOPLE_FILTERS.map(f => /*#__PURE__*/React.createElement("button", {
      key: f,
      type: "button",
      className: `chip${filter === f ? " on" : ""}`,
      onClick: () => setFilter(f)
    }, f))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 6
      }
    }, "Contacts", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, list.length, " shown")), list.length === 0 ? /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "empty",
      title: "No one in this group"
    }, "Change the filter or add a person.") : /*#__PURE__*/React.createElement("div", null, list.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.id,
      className: "task-row",
      role: "button",
      tabIndex: 0,
      onClick: () => setSel(p.id),
      onKeyDown: e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setSel(p.id);
        }
      },
      style: {
        cursor: "pointer",
        background: person && person.id === p.id ? "var(--glass)" : "transparent"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-title"
    }, p.name, p.due ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--clay-2)",
        marginLeft: 8,
        fontSize: 10.5,
        fontFamily: "var(--narrow)",
        letterSpacing: ".16em",
        textTransform: "uppercase"
      }
    }, "due") : null), /*#__PURE__*/React.createElement("div", {
      className: "task-meta"
    }, /*#__PURE__*/React.createElement("span", null, p.role), /*#__PURE__*/React.createElement("span", null, "last \xB7 ", p.last))), /*#__PURE__*/React.createElement(Icon, {
      name: p.synced ? "cloud" : "cloud-off",
      size: "xs"
    }))))), person ? /*#__PURE__*/React.createElement(Card, {
      tick: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "seclabel"
    }, person.group), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--serif)",
        fontSize: 20,
        color: "var(--ink)"
      }
    }, person.name), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "12px 0"
      }
    }, /*#__PURE__*/React.createElement(DetailPanelSections, {
      sections: [{
        id: "role",
        title: "Role",
        value: person.role
      }, {
        id: "last",
        title: "Last contact",
        value: /*#__PURE__*/React.createElement(FreshnessBadge, {
          tier: person.due ? "stale" : "fresh",
          relative: person.last
        })
      }, {
        id: "open",
        title: "Open thread",
        value: person.note
      }, {
        id: "src",
        title: "Source",
        value: person.synced ? "Google contacts" : "Added in Axis"
      }]
    })), /*#__PURE__*/React.createElement("textarea", {
      className: "input",
      rows: 2,
      placeholder: "Note \u2014 what's open between you?",
      style: {
        resize: "vertical",
        fontFamily: "var(--sans)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 12,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onToast("Draft reply prepared in Mail.", "success", "People")
    }, "Draft a reply"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => onToast("Follow-up queued in Agenda.", "success", "People")
    }, "Queue follow-up"))) : null));
  }

  /* ───────────────────────── Briefing ───────────────────────── */

  const BRIEF_FILTERS = [{
    label: "All",
    on: true
  }, {
    label: "Health",
    on: true
  }, {
    label: "Tech",
    on: true
  }, {
    label: "Style",
    on: false
  }, {
    label: "Finance",
    on: true
  }, {
    label: "Philosophy",
    on: false
  }, {
    label: "Black & Nigerian",
    on: true
  }, {
    label: "Pop",
    on: false
  }, {
    label: "Music",
    on: false
  }];
  const STORIES = [{
    id: "b1",
    cat: "Health",
    src: "Nature Medicine",
    at: "1h ago",
    title: "Trial reports durable benefit from staged neuromodulation",
    blurb: "A 240-patient crossover trial found sustained improvement at eighteen months, with the effect concentrated in patients treated within a year of onset."
  }, {
    id: "b2",
    cat: "Finance",
    src: "FT",
    at: "2h ago",
    title: "Index providers move to same-day rebalancing windows",
    blurb: "The change compresses the reconciliation window for retail brokerages and shifts settlement risk onto custodians."
  }, {
    id: "b3",
    cat: "Black & Nigerian",
    src: "Premium Times",
    at: "3h ago",
    title: "Lagos teaching hospitals publish first shared outcomes registry",
    blurb: "Four centres agreed on a common data dictionary, the first step toward comparable surgical outcomes across the state."
  }, {
    id: "b4",
    cat: "Tech",
    src: "Ars Technica",
    at: "5h ago",
    title: "On-device inference reaches parity for short-context tasks",
    blurb: "Benchmarks put a laptop-class model within a few points of a hosted model for summarisation under two thousand tokens."
  }];
  function BriefingScreen({
    onToast
  }) {
    const [filters, setFilters] = React.useState(() => Object.fromEntries(BRIEF_FILTERS.map(f => [f.label, f.on])));
    const [saved, setSaved] = React.useState({});
    const on = label => filters[label];
    const list = STORIES.filter(s => on("All") || on(s.cat));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Life / Briefing",
      title: "Curated stories and feeds",
      compact: true,
      subtitle: "Three stories, no scroll. Sources are named on every card, and the categories you turn off never come back uninvited.",
      stats: [{
        label: "Live stories",
        value: String(list.length),
        tone: "accent"
      }, {
        label: "Saved",
        value: String(Object.values(saved).filter(Boolean).length)
      }, {
        label: "Sources",
        value: "9"
      }, {
        label: "Sync",
        value: "On",
        tone: "success"
      }],
      actions: [{
        label: "Add feed",
        primary: true,
        onClick: () => onToast("Feed search is out of scope in this reference.", "info", "Briefing")
      }, {
        label: "Refresh",
        onClick: () => onToast("Pulled 4 stories from 9 sources.", "success", "Briefing")
      }]
    }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "rss",
      size: "sm"
    }), /*#__PURE__*/React.createElement("input", {
      className: "input",
      style: {
        flex: 1,
        border: "none",
        background: "none",
        padding: 0
      },
      placeholder: "Describe a topic, source, or feed to follow \u2014 e.g. 'neurosurgery RCTs', 'Nigerian football', a site URL\u2026"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onToast("Feed suggestion queued for review.", "success", "Briefing")
    }, "Follow"))), /*#__PURE__*/React.createElement("div", {
      className: "chips"
    }, BRIEF_FILTERS.map(f => /*#__PURE__*/React.createElement("button", {
      key: f.label,
      type: "button",
      className: `chip${filters[f.label] ? " on" : ""}`,
      onClick: () => setFilters(s => ({
        ...s,
        [f.label]: !s[f.label]
      }))
    }, f.label))), list.length === 0 ? /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "empty",
      title: "Every category is off"
    }, "Turn a category back on to see stories.") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, list.map(s => /*#__PURE__*/React.createElement(Card, {
      key: s.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-meta",
      style: {
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", null, s.cat), /*#__PURE__*/React.createElement("span", null, s.src), /*#__PURE__*/React.createElement("span", null, s.at)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--serif)",
        fontSize: 18,
        lineHeight: 1.35,
        color: "var(--ink)"
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      className: "sub"
    }, s.blurb), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: saved[s.id] ? "ghost" : "secondary",
      onClick: () => {
        setSaved(v => ({
          ...v,
          [s.id]: !v[s.id]
        }));
        onToast(saved[s.id] ? "Removed from saved." : "Saved to read later.", "success", "Briefing");
      }
    }, saved[s.id] ? "Saved" : "Save"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onToast("Opened in the reader.", "info", "Briefing")
    }, "Read"))))), /*#__PURE__*/React.createElement(AxisGlassPanel, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 10
      }
    }, "Sources", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, "9 feeds")), /*#__PURE__*/React.createElement("p", {
      className: "sub",
      style: {
        marginTop: 0
      }
    }, "Each story keeps its publisher and fetch time. A feed that fails twice is marked disconnected rather than quietly dropped.")));
  }
  Object.assign(window, {
    PeopleScreen,
    BriefingScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/axis-console/LifeScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/axis-console/MailScreen.jsx
try { (() => {
(function () {
  const {
    ModuleInteractiveHero,
    Card,
    Icon,
    Button,
    StatusCallout,
    DetailPanelSections,
    FreshnessBadge,
    Modal
  } = window.AXISDesignSystem_7a9b3b;
  const MESSAGES = [{
    id: 1,
    from: "Dr. A. Ilori",
    subject: "Biomarker appendix — revised tables",
    preview: "The appendix now separates the exploratory cohort. Can you confirm the enrolment figure before Friday?",
    at: "08:12",
    account: "Fastmail",
    unread: true,
    flagged: true
  }, {
    id: 2,
    from: "Vanguard",
    subject: "Quarterly statement available",
    preview: "Your Q2 statement is ready to download from the secure document centre.",
    at: "07:40",
    account: "Gmail",
    unread: true
  }, {
    id: 3,
    from: "Nature Briefing",
    subject: "Daily briefing: structural biology",
    preview: "Cryo-EM at room temperature, and a new look at intrinsically disordered regions.",
    at: "06:55",
    account: "Gmail"
  }, {
    id: 4,
    from: "S. Adeyemi",
    subject: "Supper club — Saturday headcount",
    preview: "Nine confirmed. Bringing the jollof and one extra dessert.",
    at: "Yst",
    account: "Fastmail"
  }, {
    id: 5,
    from: "Supabase",
    subject: "Your project usage this week",
    preview: "Egress is at 41% of the plan allowance.",
    at: "Yst",
    account: "Gmail"
  }];
  function MailScreen() {
    const [selected, setSelected] = React.useState(MESSAGES[0]);
    const [composing, setComposing] = React.useState(false);
    const [query, setQuery] = React.useState("");
    const list = MESSAGES.filter(m => (m.from + m.subject).toLowerCase().includes(query.toLowerCase()));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Daily / Mail",
      title: "Two accounts, one queue",
      compact: true,
      subtitle: "Unified triage across Fastmail and Gmail. Sends are attributed to the account they leave from.",
      stats: [{
        label: "Unread",
        value: "2",
        tone: "accent"
      }, {
        label: "Flagged",
        value: "1",
        tone: "warning"
      }, {
        label: "Accounts",
        value: "2",
        tone: "success",
        hint: "synced 09:41"
      }],
      actions: [{
        label: "Compose",
        primary: true,
        onClick: () => setComposing(true)
      }, {
        label: "Manage accounts"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1.35fr)",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        padding: 0,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: 12,
        borderBottom: "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: "sm"
    }), /*#__PURE__*/React.createElement("input", {
      className: "input",
      style: {
        border: "none",
        background: "none",
        padding: 0
      },
      placeholder: "Filter this queue\u2026",
      value: query,
      onChange: e => setQuery(e.target.value)
    })), list.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 14
      }
    }, /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "empty",
      title: "Nothing matches"
    }, "Clear the filter to return to the full queue.")) : list.map(m => /*#__PURE__*/React.createElement("button", {
      key: m.id,
      type: "button",
      onClick: () => setSelected(m),
      style: {
        display: "block",
        width: "100%",
        textAlign: "left",
        background: selected?.id === m.id ? "var(--glass-2)" : "none",
        border: "none",
        borderBottom: "1px solid var(--line)",
        borderLeft: `2px solid ${selected?.id === m.id ? "var(--accent)" : "transparent"}`,
        padding: "11px 14px",
        cursor: "pointer",
        color: "inherit",
        font: "inherit"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: m.unread ? 600 : 400,
        color: "var(--ink)",
        flex: 1
      }
    }, m.from), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 9,
        color: "var(--ink-faint)"
      }
    }, m.at)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--ink-2)",
        marginTop: 2
      }
    }, m.subject), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-faint)",
        marginTop: 3,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, m.preview), /*#__PURE__*/React.createElement("div", {
      className: "task-meta",
      style: {
        marginTop: 5
      }
    }, /*#__PURE__*/React.createElement("span", null, m.account), m.unread ? /*#__PURE__*/React.createElement("span", {
      className: "pill lo"
    }, "UNREAD") : null, m.flagged ? /*#__PURE__*/React.createElement("span", {
      className: "pill med"
    }, "FLAGGED") : null)))), selected ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "seclabel",
      style: {
        marginBottom: 6
      }
    }, selected.account, " \xB7 inbox"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--serif)",
        fontSize: 21,
        lineHeight: 1.25,
        color: "var(--ink)"
      }
    }, selected.subject), /*#__PURE__*/React.createElement("div", {
      className: "task-meta",
      style: {
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement("span", null, selected.from), /*#__PURE__*/React.createElement("span", null, selected.at))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Button, null, "Reply"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "archive",
      label: "Archive"
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "danger"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash-2",
      label: "Delete"
    })))), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 14,
        lineHeight: 1.7,
        color: "var(--ink-2)",
        maxWidth: "62ch"
      }
    }, selected.preview), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 10,
        lineHeight: 1.7,
        color: "var(--ink-dim)",
        maxWidth: "62ch"
      }
    }, "Everything below the fold in a real thread stays on the same glass panel \u2014 no nested cards, no second border."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(DetailPanelSections, {
      sections: [{
        id: "account",
        title: "Account",
        value: selected.account
      }, {
        id: "provenance",
        title: "Provenance",
        value: /*#__PURE__*/React.createElement(FreshnessBadge, {
          tier: "fresh",
          relative: "1m ago"
        })
      }, {
        id: "actions",
        title: "Available actions",
        value: "Reply · Archive · Delete",
        description: "Delete is destructive and routes through a confirmation dialog."
      }]
    }))) : null), /*#__PURE__*/React.createElement(Modal, {
      open: composing,
      onClose: () => setComposing(false),
      title: "New message",
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => setComposing(false)
      }, "Discard"), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        onClick: () => setComposing(false)
      }, "Send from Fastmail"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("input", {
      className: "input",
      placeholder: "To"
    }), /*#__PURE__*/React.createElement("input", {
      className: "input",
      placeholder: "Subject"
    }), /*#__PURE__*/React.createElement("textarea", {
      className: "input",
      rows: "4",
      placeholder: "Message"
    }), /*#__PURE__*/React.createElement("p", {
      className: "sub",
      style: {
        marginTop: 0
      }
    }, "Sending discloses the account the message leaves from."))));
  }
  Object.assign(window, {
    MailScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/axis-console/MailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/axis-console/OperateScreens.jsx
try { (() => {
(function () {
  const {
    ModuleInteractiveHero,
    Card,
    Button,
    Seg,
    StatusCallout,
    AxisGlassPanel,
    DetailPanelSections,
    FreshnessBadge,
    Modal,
    Icon
  } = window.AXISDesignSystem_7a9b3b;

  /* ───────────────────────── Tasks (beta) ───────────────────────── */

  const TASK_FILTERS = [{
    label: "All",
    value: "all"
  }, {
    label: "Queued",
    value: "queued"
  }, {
    label: "Active",
    value: "active"
  }, {
    label: "Waiting",
    value: "waiting"
  }, {
    label: "Blocked",
    value: "blocked"
  }, {
    label: "Done",
    value: "done"
  }];
  const TASKS = [{
    id: "k1",
    state: "active",
    title: "Assemble the R01 budget tables",
    agent: "axiom",
    spend: "$0.42",
    started: "08:58",
    evidence: ["notes · R01 narrative — Aim 2 rewrite", "sheet · budget-2026-draft"],
    log: [["09:04", "Read three source notes"], ["09:01", "Claimed the task"], ["08:58", "Created by routine · grant-prep"]]
  }, {
    id: "k2",
    state: "waiting",
    title: "Send the biomarker appendix reply",
    agent: "axiom",
    spend: "$0.08",
    started: "07:56",
    evidence: ["approval · mail.send (pending)", "thread · biomarker-appendix"],
    log: [["07:58", "Filed an approval and paused"], ["07:56", "Drafted the reply"]]
  }, {
    id: "k3",
    state: "blocked",
    title: "Reconcile August card statement",
    agent: "ledger",
    spend: "$0.00",
    started: "Tue",
    evidence: ["connection · plaid (expired)"],
    log: [["Tue 21:10", "Blocked: provider credentials expired"]]
  }, {
    id: "k4",
    state: "done",
    title: "Summarise both approval-contract PRs",
    agent: "axiom",
    spend: "$0.31",
    started: "Mon",
    evidence: ["pipeline · axis#411", "pipeline · axis#414"],
    log: [["Mon 18:22", "Completed and wrote the summary to Notes"]]
  }];
  const STATE_TONE = {
    active: "var(--accent-2)",
    waiting: "var(--clay-2)",
    blocked: "var(--down)",
    done: "var(--up)",
    queued: "var(--ink-dim)"
  };
  function TasksScreen({
    onToast
  }) {
    const [filter, setFilter] = React.useState("all");
    const [sel, setSel] = React.useState("k1");
    const list = TASKS.filter(t => filter === "all" || t.state === filter);
    const task = list.find(t => t.id === sel) || list[0];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(window.MaturityBanner, {
      kind: "beta",
      label: "Tasks",
      reason: "New agent-Task workbench from the Axis System Redesign; backed by agent_tasks with server-enforced lifecycle transitions.",
      action: "Validate create, status transitions, activity log, and empty/error/signed-out states before promotion."
    }), /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Operate / Tasks",
      title: "Agent Tasks",
      compact: true,
      subtitle: "The durable queue of work the assistant runs for you \u2014 state, evidence, and activity persist across pauses.",
      stats: [{
        label: "Active",
        value: "1",
        tone: "accent"
      }, {
        label: "Waiting",
        value: "2",
        tone: "warning"
      }, {
        label: "Done",
        value: "1",
        tone: "success"
      }, {
        label: "Spend",
        value: "$0.81",
        hint: "last run 4m ago"
      }],
      actions: [{
        label: "New task",
        primary: true,
        onClick: () => onToast("Task created in the queued state.", "success", "Tasks")
      }, {
        label: "Routine runs",
        onClick: () => onToast("Routine runs panel is out of scope in this reference.", "info", "Tasks")
      }]
    }), /*#__PURE__*/React.createElement(Seg, {
      ariaLabel: "Task state filter",
      value: filter,
      onChange: setFilter,
      options: TASK_FILTERS
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 6
      }
    }, "Queue", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, list.length, " shown")), list.length === 0 ? /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "empty",
      title: "Nothing here"
    }, "No tasks are in the ", filter, " state.") : /*#__PURE__*/React.createElement("div", null, list.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.id,
      className: "task-row",
      role: "button",
      tabIndex: 0,
      onClick: () => setSel(t.id),
      onKeyDown: e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setSel(t.id);
        }
      },
      style: {
        cursor: "pointer",
        background: task && task.id === t.id ? "var(--glass)" : "transparent"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--narrow)",
        fontSize: 9.5,
        letterSpacing: ".18em",
        textTransform: "uppercase",
        color: STATE_TONE[t.state],
        width: 58
      }
    }, t.state), /*#__PURE__*/React.createElement("div", {
      className: "task-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-title"
    }, t.title), /*#__PURE__*/React.createElement("div", {
      className: "task-meta"
    }, /*#__PURE__*/React.createElement("span", null, "agent \xB7 ", t.agent), /*#__PURE__*/React.createElement("span", null, t.spend), /*#__PURE__*/React.createElement("span", null, t.started))))))), task ? /*#__PURE__*/React.createElement(Card, {
      tick: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "seclabel"
    }, "Task \xB7 ", task.id.toUpperCase(), " \xB7 ", task.state), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--serif)",
        fontSize: 19,
        lineHeight: 1.3,
        color: "var(--ink)",
        marginBottom: 12
      }
    }, task.title), /*#__PURE__*/React.createElement(DetailPanelSections, {
      sections: [{
        id: "agent",
        title: "Agent",
        value: task.agent
      }, {
        id: "spend",
        title: "Spend",
        value: task.spend
      }, {
        id: "started",
        title: "Started",
        value: task.started
      }, {
        id: "fresh",
        title: "Last activity",
        value: /*#__PURE__*/React.createElement(FreshnessBadge, {
          tier: task.state === "blocked" ? "stale" : "fresh",
          relative: task.log[0][0]
        })
      }]
    }), /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        margin: "14px 0 8px"
      }
    }, "Evidence"), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        paddingLeft: 16,
        fontSize: 12,
        color: "var(--ink-dim)",
        lineHeight: 1.7
      }
    }, task.evidence.map(e => /*#__PURE__*/React.createElement("li", {
      key: e
    }, e))), /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        margin: "14px 0 8px"
      }
    }, "Activity"), /*#__PURE__*/React.createElement("div", null, task.log.map(([at, what]) => /*#__PURE__*/React.createElement("div", {
      key: at + what,
      className: "task-row",
      style: {
        padding: "8px 0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 10.5,
        color: "var(--ink-faint)",
        width: 66
      }
    }, at), /*#__PURE__*/React.createElement("div", {
      className: "task-main"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--ink-2)"
      }
    }, what))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 14,
        flexWrap: "wrap"
      }
    }, task.state === "blocked" ? /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onToast("Reconnect the provider in Control Room.", "info", "Tasks")
    }, "Fix the block") : /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      disabled: task.state === "done",
      onClick: () => onToast("Paused. State and evidence are preserved.", "success", "Tasks")
    }, "Pause"), /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      disabled: task.state === "done",
      onClick: () => onToast("Cancelled and logged.", "warn", "Tasks")
    }, "Cancel"))) : null));
  }

  /* ───────────────────────── Memory (beta) ───────────────────────── */

  const MEMORIES = [{
    id: "m1",
    kind: "Context",
    scope: "Global",
    conf: "100%",
    content: "Primary research focus is neuro-oncology outcomes; drafts should assume a clinical audience unless told otherwise.",
    source: "Owner",
    updated: "12 Aug 2026"
  }, {
    id: "m2",
    kind: "Preference",
    scope: "Mail",
    conf: "90%",
    content: "Replies to collaborators stay under 120 words and never open with an apology.",
    source: "Owner",
    updated: "4 Aug 2026"
  }, {
    id: "m3",
    kind: "Constraint",
    scope: "Fund",
    conf: "100%",
    content: "No single position above 20% of the taxable brokerage account.",
    source: "Financial profile",
    updated: "1 Aug 2026"
  }, {
    id: "m4",
    kind: "Context",
    scope: "Schedule",
    conf: "75%",
    content: "Thursday afternoons are reserved for clinic and should not be offered for meetings.",
    source: "Inferred",
    updated: "28 Jul 2026",
    expires: "Expires 30 Sep 2026"
  }];
  function MemoryScreen({
    onToast
  }) {
    const [filter, setFilter] = React.useState("active");
    const [archiveTarget, setArchiveTarget] = React.useState(null);
    const items = filter === "active" ? MEMORIES : [];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(window.MaturityBanner, {
      kind: "beta",
      label: "Memory",
      reason: "Structured user-controlled memory and the Financial Operating Profile are new redesign surfaces. Memory is context only and cannot authorize execution.",
      action: "Validate profile confirmation, memory edit/archive/restore, expiry, and owner isolation before promotion."
    }), /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Operate / Memory",
      title: "Inspectable context",
      compact: true,
      subtitle: "Everything Axis retains about you is listed, sourced, and editable. Memory guides drafts; it never authorizes an action.",
      stats: [{
        label: "Active",
        value: "4",
        tone: "accent"
      }, {
        label: "Inferred",
        value: "1",
        tone: "warning",
        hint: "review before it expires"
      }, {
        label: "Archived",
        value: "0",
        tone: "muted"
      }, {
        label: "Profile",
        value: "Confirmed",
        tone: "success",
        hint: "1 Aug 2026"
      }]
    }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
      className: "seclabel"
    }, "Financial Operating Profile"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 14
      }
    }, "Your explicit planning constraints", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, "confirmed 1 Aug 2026, 09:20")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        display: "grid",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "seclabel",
      style: {
        margin: 0
      }
    }, "Base currency"), /*#__PURE__*/React.createElement("input", {
      className: "input",
      defaultValue: "USD",
      maxLength: 3
    })), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "grid",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "seclabel",
      style: {
        margin: 0
      }
    }, "Risk posture"), /*#__PURE__*/React.createElement("input", {
      className: "input",
      defaultValue: "Balanced"
    })), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "grid",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "seclabel",
      style: {
        margin: 0
      }
    }, "Investment horizon"), /*#__PURE__*/React.createElement("input", {
      className: "input",
      defaultValue: "Long term"
    })), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "grid",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "seclabel",
      style: {
        margin: 0
      }
    }, "Liquidity buffer (months)"), /*#__PURE__*/React.createElement("input", {
      className: "input",
      defaultValue: "6"
    })), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "grid",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "seclabel",
      style: {
        margin: 0
      }
    }, "Concentration limit (%)"), /*#__PURE__*/React.createElement("input", {
      className: "input",
      defaultValue: "20"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 14,
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        display: "grid",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "seclabel",
      style: {
        margin: 0
      }
    }, "Priorities, one per line"), /*#__PURE__*/React.createElement("textarea", {
      className: "input",
      rows: 3,
      defaultValue: "Fund the 2027 sabbatical\nKeep 12 months of runway",
      style: {
        resize: "vertical",
        fontFamily: "var(--sans)"
      }
    })), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "grid",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "seclabel",
      style: {
        margin: 0
      }
    }, "Constraints, one per line"), /*#__PURE__*/React.createElement("textarea", {
      className: "input",
      rows: 3,
      defaultValue: "No leverage\nNo single-name position above 20%",
      style: {
        resize: "vertical",
        fontFamily: "var(--sans)"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        marginTop: 14,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "sub",
      style: {
        margin: 0
      }
    }, "This profile guides drafts and simulations. It never authorizes communication, orders, or execution."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onToast("Financial operating profile confirmed.", "success", "Financial profile")
    }, "Confirm profile")))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "seclabel"
    }, "Memory Center"), /*#__PURE__*/React.createElement("h2", {
      className: "sec"
    }, "Retained context")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Seg, {
      ariaLabel: "Memory status filter",
      value: filter,
      onChange: setFilter,
      options: [{
        label: "Active",
        value: "active"
      }, {
        label: "Archived",
        value: "archived"
      }]
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onToast("Add-memory dialog opens inline in production.", "info", "Memory")
    }, "Add memory"))), items.length === 0 ? /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "empty",
      title: "No archived memories"
    }, "Archived memories remain inspectable here.") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
        gap: "var(--space-3)",
        marginTop: "var(--space-3)",
        alignItems: "start"
      }
    }, items.map(m => /*#__PURE__*/React.createElement(Card, {
      key: m.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-meta",
      style: {
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", null, m.kind), /*#__PURE__*/React.createElement("span", null, m.scope), /*#__PURE__*/React.createElement("span", {
      style: {
        color: m.conf === "100%" ? "var(--up)" : "var(--clay-2)"
      }
    }, m.conf)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13.5,
        lineHeight: 1.65,
        color: "var(--ink-2)"
      }
    }, m.content), /*#__PURE__*/React.createElement("div", {
      className: "sub",
      style: {
        fontSize: 11
      }
    }, "Source: ", m.source, " \xB7 Updated ", m.updated, m.expires ? ` · ${m.expires}` : ""), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onToast("Editing keeps the previous version in the audit log.", "info", "Memory")
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "pencil",
      size: "xs"
    }), "Edit"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setArchiveTarget(m)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "archive",
      size: "xs"
    }), "Archive")))))), /*#__PURE__*/React.createElement(Modal, {
      open: Boolean(archiveTarget),
      onClose: () => setArchiveTarget(null),
      title: "Archive memory",
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => setArchiveTarget(null)
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        variant: "danger",
        onClick: () => {
          onToast("Memory archived.", "success", "Memory");
          setArchiveTarget(null);
        }
      }, "Archive"))
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        lineHeight: 1.6,
        color: "var(--ink-2)"
      }
    }, "Archive this memory? It will stop appearing as active context and can be restored later.")));
  }
  Object.assign(window, {
    TasksScreen,
    MemoryScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/axis-console/OperateScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/axis-console/PlanScreens.jsx
try { (() => {
(function () {
  const {
    ModuleInteractiveHero,
    Card,
    Button,
    Seg,
    StatusCallout,
    AxisGlassPanel,
    Icon
  } = window.AXISDesignSystem_7a9b3b;

  /* ───────────────────────── Objectives ───────────────────────── */

  const OBJECTIVES = [{
    id: "o1",
    title: "Land the R01 renewal",
    desc: "Objective · Research Year 2026",
    next: "Draft the budget pages",
    krs: [{
      k: "Narrative sections complete",
      now: 5,
      target: 7
    }, {
      k: "Internal reviewers signed off",
      now: 1,
      target: 3
    }, {
      k: "Budget pages drafted",
      now: 0,
      target: 4
    }]
  }, {
    id: "o2",
    title: "Publish the cohort-2 outcomes paper",
    desc: "Objective · Manuscripts",
    next: "Finish the chart review",
    krs: [{
      k: "Charts reviewed",
      now: 80,
      target: 100
    }, {
      k: "Figures final",
      now: 3,
      target: 6
    }]
  }, {
    id: "o3",
    title: "Hold a sustainable training base",
    desc: "Objective · Vitality",
    next: "Four zone-2 runs this week",
    krs: [{
      k: "Weekly km",
      now: 38,
      target: 45
    }, {
      k: "Weeks without a missed block",
      now: 6,
      target: 12
    }]
  }];
  const HABITS = [{
    icon: "✍️",
    label: "Write 30 min",
    streak: 12,
    week: [1, 1, 1, 0, 1, 1, 0]
  }, {
    icon: "🏃",
    label: "Zone-2 run",
    streak: 4,
    week: [1, 0, 1, 0, 1, 1, 0]
  }, {
    icon: "📖",
    label: "Read a paper",
    streak: 9,
    week: [1, 1, 0, 1, 1, 0, 1]
  }];
  function Bar({
    now,
    target
  }) {
    const pct = Math.min(100, Math.round(now / target * 100));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 11.5,
        color: "var(--ink-dim)"
      }
    }, /*#__PURE__*/React.createElement("span", null, pct, "%"), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 10.5
      }
    }, now, " / ", target)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 3,
        background: "var(--line)",
        borderRadius: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: `${pct}%`,
        background: pct >= 100 ? "var(--up)" : "var(--accent)",
        borderRadius: 2
      }
    })));
  }
  function ObjectivesScreen({
    onToast
  }) {
    const [scope, setScope] = React.useState("quarter");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Plan / Objectives",
      title: "Goals and key results",
      compact: true,
      subtitle: "Three objectives, each with countable key results and one next action. Habits sit underneath as the daily evidence.",
      stats: [{
        label: "Objectives",
        value: "3",
        tone: "accent"
      }, {
        label: "KR progress",
        value: "54%"
      }, {
        label: "Habits",
        value: "3"
      }, {
        label: "Longest streak",
        value: "12d",
        tone: "success"
      }],
      actions: [{
        label: "+ New objective",
        primary: true,
        onClick: () => onToast("Objective draft created.", "success", "Objectives")
      }, {
        label: "Scan targets",
        onClick: () => onToast("Scanned: 2 key results are behind pace.", "warn", "Objectives")
      }]
    }), /*#__PURE__*/React.createElement(Seg, {
      ariaLabel: "Objective scope",
      value: scope,
      onChange: setScope,
      options: [{
        label: "Quarter",
        value: "quarter"
      }, {
        label: "Year",
        value: "year"
      }, {
        label: "Archived",
        value: "archived"
      }]
    }), scope === "archived" ? /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "empty",
      title: "Nothing archived yet"
    }, "Completed objectives move here with their final key-result values.") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, OBJECTIVES.map(o => /*#__PURE__*/React.createElement(Card, {
      key: o.id,
      tick: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "seclabel"
    }, o.desc), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--serif)",
        fontSize: 19,
        lineHeight: 1.3,
        color: "var(--ink)"
      }
    }, o.title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 12,
        margin: "14px 0"
      }
    }, o.krs.map(kr => /*#__PURE__*/React.createElement("div", {
      key: kr.k
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--ink-2)",
        marginBottom: 5
      }
    }, kr.k), /*#__PURE__*/React.createElement(Bar, {
      now: kr.now,
      target: kr.target
    })))), /*#__PURE__*/React.createElement("div", {
      className: "task-row",
      style: {
        padding: "10px 0 0"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: "xs"
    }), /*#__PURE__*/React.createElement("div", {
      className: "task-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-title",
      style: {
        fontSize: 12.5
      }
    }, o.next), /*#__PURE__*/React.createElement("div", {
      className: "task-meta"
    }, /*#__PURE__*/React.createElement("span", null, "next action"))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onToast("Sent to Agenda.", "success", "Objectives")
    }, "Queue"))))), /*#__PURE__*/React.createElement(AxisGlassPanel, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 12
      }
    }, "Habits", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, "this week")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 10
      }
    }, HABITS.map(h => /*#__PURE__*/React.createElement("div", {
      key: h.label,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        width: 22
      }
    }, h.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--ink)",
        minWidth: 130
      }
    }, h.label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 5
      }
    }, h.week.map((d, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 16,
        height: 16,
        borderRadius: 3,
        background: d ? "var(--accent)" : "var(--glass)",
        border: d ? "none" : "1px solid var(--line)"
      }
    }))), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 10.5,
        color: "var(--ink-faint)",
        marginLeft: "auto"
      }
    }, h.streak, "d streak"))))));
  }

  /* ───────────────────────── Debrief ───────────────────────── */

  const WEEKS = [{
    label: "This week",
    value: "w34"
  }, {
    label: "Last week",
    value: "w33"
  }, {
    label: "W32",
    value: "w32"
  }];
  const WINS = ["AANS abstract submitted", "Cohort 2 chart review (80%)", "4 zone-2 runs · 38 km"];
  const FRICTION = ["Budget pages slipped twice — no protected block on the calendar", "Two days lost to inbox triage before 10:00", "Chart review stalled on the four regional transfers"];
  function DebriefScreen({
    onToast
  }) {
    const [week, setWeek] = React.useState("w34");
    const [summary, setSummary] = React.useState("");
    const [busy, setBusy] = React.useState(false);
    const generate = () => {
      setBusy(true);
      setTimeout(() => {
        setSummary("The week moved the manuscript and the training base forward and left the grant behind. Both losses trace to the same cause: deep-work blocks were never placed on the calendar, so triage filled the mornings. One change for next week — protect 07:00–09:00 Monday to Thursday for the budget pages before anything else is scheduled.");
        setBusy(false);
        onToast("Summary drafted from this week's entries.", "success", "Debrief");
      }, 700);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Plan / Debrief",
      title: "Weekly reflection",
      compact: true,
      subtitle: "Wins, friction, and one focus. The summary is drafted from what you wrote, and it is never written for you.",
      stats: [{
        label: "Wins",
        value: "3",
        tone: "success"
      }, {
        label: "Friction",
        value: "3",
        tone: "warning"
      }, {
        label: "Streak",
        value: "11w",
        tone: "accent",
        hint: "unbroken debriefs"
      }, {
        label: "Focus set",
        value: summary ? "Yes" : "No",
        tone: summary ? "success" : "muted"
      }],
      actions: [{
        label: "Draft summary",
        primary: true,
        onClick: generate,
        disabled: busy
      }, {
        label: "Export",
        onClick: () => onToast("Exported to Notes · Debrief W34.", "success", "Debrief")
      }]
    }), /*#__PURE__*/React.createElement(Seg, {
      ariaLabel: "Debrief week",
      value: week,
      onChange: setWeek,
      options: WEEKS
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 10
      }
    }, "Wins", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, WINS.length)), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: "0 0 12px",
        paddingLeft: 16,
        fontSize: 13,
        lineHeight: 1.8,
        color: "var(--ink-2)"
      }
    }, WINS.map(w => /*#__PURE__*/React.createElement("li", {
      key: w
    }, w))), /*#__PURE__*/React.createElement("textarea", {
      className: "input",
      rows: 3,
      placeholder: "Completed work, useful meetings, progress signals\u2026",
      style: {
        resize: "vertical",
        fontFamily: "var(--sans)"
      }
    })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 10
      }
    }, "Friction", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, FRICTION.length)), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: "0 0 12px",
        paddingLeft: 16,
        fontSize: 13,
        lineHeight: 1.8,
        color: "var(--ink-2)"
      }
    }, FRICTION.map(f => /*#__PURE__*/React.createElement("li", {
      key: f
    }, f))), /*#__PURE__*/React.createElement("textarea", {
      className: "input",
      rows: 3,
      placeholder: "Missed work, blockers, context switches, energy drains\u2026",
      style: {
        resize: "vertical",
        fontFamily: "var(--sans)"
      }
    }))), /*#__PURE__*/React.createElement(Card, {
      tick: true
    }, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 10
      }
    }, "Next week"), /*#__PURE__*/React.createElement("input", {
      className: "input",
      placeholder: "One concrete next action or decision for tomorrow\u2026"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "seclabel"
    }, "Summary"), busy ? /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "loading",
      title: "Drafting"
    }, "Reading this week's wins, friction, and calendar.") : summary ? /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13.5,
        lineHeight: 1.8,
        color: "var(--ink-2)",
        maxWidth: "72ch"
      }
    }, summary) : /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "empty",
      title: "No summary yet",
      actionSlot: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        onClick: generate
      }, "Draft summary")
    }, "The draft is assembled from your entries and stays editable.")), summary ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onToast("Debrief saved and closed for W34.", "success", "Debrief")
    }, "Save debrief"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => onToast("Next action → Agenda.", "success", "Debrief")
    }, "Next action \u2192 task")) : null));
  }
  Object.assign(window, {
    ObjectivesScreen,
    DebriefScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/axis-console/PlanScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/axis-console/ResearchScreens.jsx
try { (() => {
(function () {
  const {
    ModuleInteractiveHero,
    Card,
    Button,
    Seg,
    StatusCallout,
    AxisGlassPanel,
    DetailPanelSections,
    Icon
  } = window.AXISDesignSystem_7a9b3b;

  /* ───────────────────────── Pipeline ───────────────────────── */

  const STAGES = ["Design", "IRB", "Enrolling", "Analysis", "Writing", "Submitted"];
  const STUDIES = [{
    id: "p1",
    title: "Directional DBS in cervical dystonia",
    meta: "Type: Prospective · n: 61",
    stage: "Enrolling",
    next: "Screen the two referrals from clinic",
    colour: "var(--accent)"
  }, {
    id: "p2",
    title: "Cohort 2 outcomes after resection",
    meta: "Type: Retrospective · n: 247",
    stage: "Analysis",
    next: "Finish the four regional-transfer charts",
    colour: "var(--clay)"
  }, {
    id: "p3",
    title: "Competing-risks re-analysis (Fine–Gray)",
    meta: "Type: Methods · n: 247",
    stage: "Writing",
    next: "Redraw Figure 3 with cumulative incidence",
    colour: "var(--up)"
  }, {
    id: "p4",
    title: "Registry linkage feasibility",
    meta: "Type: Feasibility · n: —",
    stage: "IRB",
    next: "Answer the data-sharing query",
    colour: "var(--ink-faint)"
  }];
  const CONFERENCES = [{
    name: "AANS Annual",
    where: "Chicago",
    dates: "Apr 18–22",
    badge: "Accepted",
    abstract: "Cohort 2 outcomes after resection",
    travel: "Flights booked · hotel pending",
    next: "Poster print by Apr 10",
    tone: "var(--up)"
  }, {
    name: "CNS Meeting",
    where: "Boston",
    dates: "Oct 12–16",
    badge: "Abstract Due",
    abstract: "Directional DBS interim safety",
    travel: "Not booked",
    next: "Submit abstract by Sep 5",
    tone: "var(--clay-2)"
  }, {
    name: "Nigerian Neuro Congress",
    where: "Lagos",
    dates: "Feb 6–8",
    badge: "Invited",
    abstract: "Keynote — outcomes research capacity",
    travel: "Held",
    next: "Confirm talk length",
    tone: "var(--accent-2)"
  }];
  function PipelineScreen({
    onToast
  }) {
    const [tab, setTab] = React.useState("studies");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Research / Pipeline",
      title: "Studies and conferences",
      compact: true,
      subtitle: "Every study sits in exactly one stage and carries one next action. Conferences track the abstract, the travel, and the deadline.",
      stats: [{
        label: "Studies",
        value: "4",
        tone: "accent"
      }, {
        label: "Enrolling",
        value: "1"
      }, {
        label: "Deadlines",
        value: "2",
        tone: "warning",
        hint: "next: Sep 5"
      }, {
        label: "Conferences",
        value: "3"
      }],
      actions: [{
        label: "+ New study",
        primary: true,
        onClick: () => onToast("Study draft created in Design.", "success", "Pipeline")
      }, {
        label: "+ Conference",
        onClick: () => onToast("Conference draft created.", "success", "Pipeline")
      }]
    }), /*#__PURE__*/React.createElement(Seg, {
      ariaLabel: "Pipeline view",
      value: tab,
      onChange: setTab,
      options: [{
        label: "Studies",
        value: "studies"
      }, {
        label: "Conferences",
        value: "conferences"
      }]
    }), tab === "studies" ? /*#__PURE__*/React.createElement(AxisGlassPanel, {
      style: {
        padding: 0,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${STAGES.length},minmax(0,1fr))`
      }
    }, STAGES.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: s,
      style: {
        borderLeft: i ? "1px solid var(--line)" : "none",
        minHeight: 260
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "10px 12px",
        borderBottom: "1px solid var(--line)",
        fontFamily: "var(--narrow)",
        fontSize: 10,
        letterSpacing: ".2em",
        textTransform: "uppercase",
        color: "var(--ink-faint)",
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", null, s), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 9
      }
    }, STUDIES.filter(x => x.stage === s).length)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8,
        padding: 8,
        alignContent: "start"
      }
    }, STUDIES.filter(x => x.stage === s).map(x => /*#__PURE__*/React.createElement("div", {
      key: x.id,
      style: {
        padding: 10,
        borderRadius: 5,
        background: "var(--glass)",
        borderTop: `2px solid ${x.colour}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        lineHeight: 1.35,
        color: "var(--ink)"
      }
    }, x.title), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 9.5,
        color: "var(--ink-faint)",
        marginTop: 6
      }
    }, x.meta), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--ink-dim)",
        marginTop: 8,
        lineHeight: 1.5
      }
    }, "\u2192 ", x.next)))))))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, CONFERENCES.map(c => /*#__PURE__*/React.createElement(Card, {
      key: c.name,
      tick: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--serif)",
        fontSize: 18,
        color: "var(--ink)"
      }
    }, c.name), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 10.5,
        color: "var(--ink-faint)",
        marginTop: 4
      }
    }, c.where, " \xB7 ", c.dates)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--narrow)",
        fontSize: 9.5,
        letterSpacing: ".18em",
        textTransform: "uppercase",
        color: c.tone
      }
    }, c.badge)), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "12px 0"
      }
    }, /*#__PURE__*/React.createElement(DetailPanelSections, {
      sections: [{
        id: "abs",
        title: "Abstract",
        value: c.abstract
      }, {
        id: "travel",
        title: "Travel",
        value: c.travel
      }, {
        id: "next",
        title: "Next step",
        value: c.next
      }]
    })), /*#__PURE__*/React.createElement(Button, {
      onClick: () => onToast("Deadline sent to Schedule.", "success", "Pipeline")
    }, "Add deadline to Schedule")))));
  }

  /* ───────────────────────── Literature ───────────────────────── */

  const TOPICS = ["directional DBS", "competing risks", "outcomes research", "methodology", "dystonia"];
  const PAPERS = [{
    id: "l1",
    title: "Directional versus omnidirectional stimulation in cervical dystonia: a randomised crossover trial",
    journal: "Brain · 2026",
    authors: "Okafor, Lindqvist, Meier",
    topic: "directional DBS",
    saved: true
  }, {
    id: "l2",
    title: "Fine–Gray models misapplied: competing risks in surgical cohort studies",
    journal: "Stat Med · 2026",
    authors: "Duarte, Han",
    topic: "competing risks",
    saved: true
  }, {
    id: "l3",
    title: "Reporting standards for retrospective neurosurgical outcomes",
    journal: "J Neurosurg · 2025",
    authors: "Whitfield et al.",
    topic: "outcomes research",
    saved: false
  }, {
    id: "l4",
    title: "Lead placement variability and its effect on programming time",
    journal: "Neuromodulation · 2026",
    authors: "Sarr, Ibrahim",
    topic: "directional DBS",
    saved: false
  }, {
    id: "l5",
    title: "A practical guide to sensitivity analysis for missing outcomes",
    journal: "BMJ · 2025",
    authors: "Nakamura, Ford",
    topic: "methodology",
    saved: false
  }];
  function LiteratureScreen({
    onToast
  }) {
    const [topic, setTopic] = React.useState("directional DBS");
    const [q, setQ] = React.useState("");
    const [savedOnly, setSavedOnly] = React.useState(false);
    const list = PAPERS.filter(p => (savedOnly ? p.saved : true) && (q ? (p.title + p.authors).toLowerCase().includes(q.toLowerCase()) : p.topic === topic || savedOnly));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "Research / Literature",
      title: "Research feed and saved papers",
      compact: true,
      subtitle: "Topics drive the feed. Anything saved carries its source and stays readable offline.",
      stats: [{
        label: "Saved",
        value: "2",
        tone: "accent"
      }, {
        label: "Topics",
        value: String(TOPICS.length)
      }, {
        label: "New today",
        value: "3"
      }, {
        label: "Sync",
        value: "Cloud",
        tone: "success",
        hint: "Supabase"
      }],
      actions: [{
        label: "Refresh feed",
        primary: true,
        onClick: () => onToast("Feed refreshed · 3 new papers.", "success", "Literature")
      }, {
        label: "Saved only",
        onClick: () => setSavedOnly(s => !s)
      }]
    }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: "sm"
    }), /*#__PURE__*/React.createElement("input", {
      className: "input",
      style: {
        flex: 1,
        border: "none",
        background: "none",
        padding: 0
      },
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: "Search a topic \u2014 e.g. 'directional DBS dystonia', 'Fine\u2013Gray competing risks'\u2026"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onToast(`Searched: ${q || "directional DBS"}`, "info", "Literature")
    }, "Search"))), /*#__PURE__*/React.createElement("div", {
      className: "chips"
    }, TOPICS.map(t => /*#__PURE__*/React.createElement("button", {
      key: t,
      type: "button",
      className: `chip${!savedOnly && topic === t ? " on" : ""}`,
      onClick: () => {
        setSavedOnly(false);
        setQ("");
        setTopic(t);
      }
    }, t)), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `chip${savedOnly ? " on" : ""}`,
      onClick: () => setSavedOnly(s => !s)
    }, "Saved")), list.length === 0 ? /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "empty",
      title: "Nothing in this topic yet",
      actionSlot: /*#__PURE__*/React.createElement(Button, {
        onClick: () => onToast("Feed refreshed.", "success", "Literature")
      }, "Refresh")
    }, "Add a topic or widen the search to fill the feed.") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-3)"
      }
    }, list.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        alignItems: "flex-start",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "76ch"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "seclabel",
      style: {
        marginBottom: 6
      }
    }, p.topic), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--serif)",
        fontSize: 17,
        lineHeight: 1.35,
        color: "var(--ink)"
      }
    }, p.title), /*#__PURE__*/React.createElement("div", {
      className: "task-meta",
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("span", null, p.authors), /*#__PURE__*/React.createElement("span", null, p.journal))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 8,
        minWidth: 130
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: p.saved ? "ghost" : "primary",
      onClick: () => onToast(p.saved ? "Removed from saved." : "Saved to library.", "success", "Literature")
    }, p.saved ? "Saved" : "Save"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => onToast("Summary drafted into Notes.", "success", "Literature")
    }, "Summarise")))))));
  }
  Object.assign(window, {
    PipelineScreen,
    LiteratureScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/axis-console/ResearchScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/axis-console/Shell.jsx
try { (() => {
(function () {
  const {
    AxisAtmosphere,
    Icon
  } = window.AXISDesignSystem_7a9b3b;
  const NAV = [{
    section: "Daily",
    items: [{
      href: "/command",
      label: "Command",
      icon: "layout-dashboard"
    }, {
      href: "/dispatch",
      label: "Dispatch",
      icon: "radio"
    }, {
      href: "/schedule",
      label: "Schedule",
      icon: "calendar"
    }, {
      href: "/agenda",
      label: "Agenda",
      icon: "list-todo"
    }, {
      href: "/mail",
      label: "Mail",
      icon: "mail"
    }, {
      href: "/notes",
      label: "Notes",
      icon: "clipboard-list"
    }]
  }, {
    section: "Operate",
    items: [{
      href: "/tasks",
      label: "Tasks",
      icon: "bot",
      status: "beta"
    }, {
      href: "/approvals",
      label: "Approvals",
      icon: "shield-check",
      status: "beta"
    }, {
      href: "/memory",
      label: "Memory",
      icon: "brain",
      status: "beta"
    }]
  }, {
    section: "Plan",
    items: [{
      href: "/objectives",
      label: "Objectives",
      icon: "target"
    }, {
      href: "/debrief",
      label: "Debrief",
      icon: "rotate-ccw"
    }]
  }, {
    section: "Research",
    items: [{
      href: "/pipeline",
      label: "Pipeline",
      icon: "git-branch"
    }, {
      href: "/literature",
      label: "Literature",
      icon: "book-open"
    }]
  }, {
    section: "Life",
    items: [{
      href: "/people",
      label: "People",
      icon: "users"
    }, {
      href: "/briefing",
      label: "Briefing",
      icon: "newspaper"
    }]
  }, {
    section: "Capital",
    items: [{
      href: "/fund",
      label: "Fund",
      icon: "line-chart"
    }]
  }, {
    section: "Labs",
    items: [{
      href: "/vector",
      label: "VECTOR",
      icon: "gamepad-2",
      status: "lab"
    }, {
      href: "/vitality",
      label: "Vitality",
      icon: "dumbbell",
      status: "lab"
    }, {
      href: "/atelier",
      label: "Atelier",
      icon: "paintbrush",
      status: "lab"
    }, {
      href: "/listening-vault",
      label: "Listening Vault",
      icon: "music-2",
      status: "lab"
    }, {
      href: "/library",
      label: "Library",
      icon: "folder-open",
      status: "lab"
    }, {
      href: "/supper-club",
      label: "Supper Club",
      icon: "chef-hat",
      status: "lab"
    }]
  }, {
    section: "System",
    items: [{
      href: "/control-room",
      label: "Control Room",
      icon: "settings"
    }, {
      href: "/design-system",
      label: "Design System",
      icon: "palette"
    }]
  }];
  const MATURITY_COLOR = {
    beta: "var(--accent-2)",
    lab: "var(--clay)"
  };
  function Sidebar({
    route,
    onRoute,
    collapsed
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      className: "sidebar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sb-top"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo.svg",
      width: "30",
      height: "30",
      alt: ""
    }), !collapsed ? /*#__PURE__*/React.createElement("div", {
      className: "wordmark"
    }, "AXIS", /*#__PURE__*/React.createElement("sup", {
      className: "tm"
    }, "[CKO]")) : null), /*#__PURE__*/React.createElement("nav", {
      className: "nav"
    }, NAV.map(g => /*#__PURE__*/React.createElement("div", {
      key: g.section
    }, collapsed ? /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--line)",
        margin: "12px 8px"
      }
    }) : /*#__PURE__*/React.createElement("div", {
      className: "navlabel"
    }, g.section), g.items.map(it => /*#__PURE__*/React.createElement("button", {
      key: it.href,
      type: "button",
      className: `navitem${route === it.href ? " active" : ""}`,
      title: it.label,
      onClick: () => onRoute(it.href)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: "sm"
    }), !collapsed ? /*#__PURE__*/React.createElement("span", null, it.label) : null, !collapsed && it.status ? /*#__PURE__*/React.createElement("span", {
      className: "maturity",
      style: {
        color: MATURITY_COLOR[it.status]
      }
    }, it.status.toUpperCase()) : null))))), !collapsed ? /*#__PURE__*/React.createElement("div", {
      className: "sidefoot"
    }, /*#__PURE__*/React.createElement("div", {
      className: "profile"
    }, /*#__PURE__*/React.createElement("div", {
      className: "avatar"
    }, "C"), /*#__PURE__*/React.createElement("div", {
      className: "pmeta"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pn"
    }, "C. Okoro"), /*#__PURE__*/React.createElement("div", {
      className: "pr"
    }, "OWNER \xB7 SUPABASE")))) : null);
  }
  function Topbar({
    section,
    page,
    onToggleRail,
    onCommand
  }) {
    return /*#__PURE__*/React.createElement("header", {
      className: "topbar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "crumb"
    }, /*#__PURE__*/React.createElement("b", null, section), " \xA0/\xA0 ", page), /*#__PURE__*/React.createElement("div", {
      className: "clock"
    }, "FRI 22 AUG \xB7 09:42"), /*#__PURE__*/React.createElement("div", {
      className: "sync",
      role: "status"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dotpulse"
    }), "Synced \xB7 Supabase"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "search",
      onClick: onCommand
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", {
      className: "srch-text"
    }, "Search Axis\u2026"), /*#__PURE__*/React.createElement("span", {
      className: "kbd"
    }, "\u2318/")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "iconbtn",
      onClick: onCommand,
      title: "Command palette (\u2318K)"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "command",
      label: "Command palette"
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "iconbtn",
      onClick: onToggleRail,
      title: "Collapse sidebar"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "panel-left",
      label: "Collapse sidebar"
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "iconbtn",
      title: "Interface Studio"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sliders-horizontal",
      label: "Interface Studio"
    })));
  }
  function MaturityBanner({
    kind,
    label,
    reason,
    action
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: `module-status module-status-${kind}`
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "module-status-kicker"
    }, kind === "lab" ? "Lab module" : "Beta module"), /*#__PURE__*/React.createElement("strong", null, label, " is intentionally marked non-production."), /*#__PURE__*/React.createElement("p", null, reason)), /*#__PURE__*/React.createElement("span", null, action));
  }
  function Shell({
    route,
    onRoute,
    section,
    page,
    children,
    onCommand
  }) {
    const [collapsed, setCollapsed] = React.useState(false);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AxisAtmosphere, null), /*#__PURE__*/React.createElement("div", {
      className: "grain",
      "aria-hidden": true
    }), /*#__PURE__*/React.createElement("div", {
      className: "blueprint-grid",
      "aria-hidden": true
    }), /*#__PURE__*/React.createElement("div", {
      className: `app-shell mode-${collapsed ? "icons" : "open"}`
    }, /*#__PURE__*/React.createElement(Sidebar, {
      route: route,
      onRoute: onRoute,
      collapsed: collapsed
    }), /*#__PURE__*/React.createElement("div", {
      className: "main-scroll"
    }, /*#__PURE__*/React.createElement(Topbar, {
      section: section,
      page: page,
      onToggleRail: () => setCollapsed(c => !c),
      onCommand: onCommand
    }), /*#__PURE__*/React.createElement("main", {
      className: "view-pad"
    }, children))));
  }
  Object.assign(window, {
    Shell,
    Sidebar,
    Topbar,
    MaturityBanner,
    NAV
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/axis-console/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/axis-console/StudioScreen.jsx
try { (() => {
(function () {
  const {
    ModuleInteractiveHero,
    Card,
    Seg,
    Button,
    AxisGlassPanel,
    WidgetShell,
    Icon,
    StatusCallout
  } = window.AXISDesignSystem_7a9b3b;
  const ACCENTS = ["#c9a463", "#3f6fb0", "#7fa86a", "#c2603f", "#6f9bc7"];
  function ToggleRow({
    title,
    desc,
    on,
    onToggle
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "toggle-row"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "tr-t"
    }, title), /*#__PURE__*/React.createElement("div", {
      className: "tr-d"
    }, desc)), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "switch",
      "data-on": String(on),
      "aria-pressed": on,
      "aria-label": title,
      onClick: onToggle
    }));
  }
  function StudioScreen({
    theme,
    setTheme,
    accent,
    setAccent,
    onToast
  }) {
    const [density, setDensity] = React.useState("standard");
    const [radius, setRadius] = React.useState("compact");
    const [flags, setFlags] = React.useState({
      ambient: true,
      companion: true,
      reduced: false,
      glass: true
    });
    const toggle = k => setFlags(f => ({
      ...f,
      [k]: !f[k]
    }));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(ModuleInteractiveHero, {
      eyebrow: "System / Control Room",
      title: "Interface Studio",
      compact: true,
      subtitle: "Theme, accent, surface depth, density, type and companion presence all vary \u2014 the semantic contracts do not.",
      stats: [{
        label: "Theme",
        value: theme.charAt(0).toUpperCase() + theme.slice(1),
        tone: "accent"
      }, {
        label: "Density",
        value: density === "standard" ? "Standard" : "Compact"
      }, {
        label: "Ambient motion",
        value: flags.ambient ? "On" : "Off",
        tone: flags.ambient ? "success" : "muted"
      }],
      actions: [{
        label: "Save preset",
        primary: true,
        onClick: () => onToast("Preset saved to your profile.", "success", "Interface Studio")
      }, {
        label: "Reset"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
        gap: "var(--space-3)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 12
      }
    }, "Appearance"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "seclabel"
    }, "Theme"), /*#__PURE__*/React.createElement(Seg, {
      ariaLabel: "Color theme",
      value: theme,
      onChange: setTheme,
      options: [{
        label: "Dark",
        value: "dark"
      }, {
        label: "Dim",
        value: "dim"
      }, {
        label: "Slate",
        value: "slate"
      }, {
        label: "Light",
        value: "light"
      }]
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "seclabel"
    }, "Accent"), /*#__PURE__*/React.createElement("div", {
      className: "swatches"
    }, ACCENTS.map(c => /*#__PURE__*/React.createElement("button", {
      key: c,
      type: "button",
      className: accent === c ? "on" : "",
      style: {
        background: c,
        color: c
      },
      "aria-label": `Accent ${c}`,
      "aria-pressed": accent === c,
      onClick: () => setAccent(c)
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "seclabel"
    }, "Density"), /*#__PURE__*/React.createElement(Seg, {
      ariaLabel: "Density",
      value: density,
      onChange: setDensity,
      options: [{
        label: "Standard",
        value: "standard"
      }, {
        label: "Compact",
        value: "compact"
      }]
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "seclabel"
    }, "Radius"), /*#__PURE__*/React.createElement(Seg, {
      ariaLabel: "Corner radius",
      value: radius,
      onChange: setRadius,
      options: [{
        label: "Compact",
        value: "compact"
      }, {
        label: "Soft",
        value: "soft"
      }]
    }))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 6
      }
    }, "Surface & motion"), /*#__PURE__*/React.createElement(ToggleRow, {
      title: "Ambient atmosphere",
      desc: "The drifting amber/cobalt depth field behind the shell.",
      on: flags.ambient,
      onToggle: () => toggle("ambient")
    }), /*#__PURE__*/React.createElement(ToggleRow, {
      title: "Glass panels",
      desc: "Backdrop blur on panels. Off falls back to a flat raised fill.",
      on: flags.glass,
      onToggle: () => toggle("glass")
    }), /*#__PURE__*/React.createElement(ToggleRow, {
      title: "Companion presence",
      desc: "Axiom, Codex and Nova appear in the corner of the shell.",
      on: flags.companion,
      onToggle: () => toggle("companion")
    }), /*#__PURE__*/React.createElement(ToggleRow, {
      title: "Reduced motion",
      desc: "Removes ambient animation and shimmer without hiding state.",
      on: flags.reduced,
      onToggle: () => toggle("reduced")
    }))), /*#__PURE__*/React.createElement(AxisGlassPanel, null, /*#__PURE__*/React.createElement("h2", {
      className: "sec",
      style: {
        marginBottom: 12
      }
    }, "Live preview", /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, "semantic roles hold")), /*#__PURE__*/React.createElement("div", {
      className: "tidbits"
    }, /*#__PURE__*/React.createElement(WidgetShell, {
      title: "Weather",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "sun"
      }),
      value: "21\xB0 Clear",
      hint: "Humidity 46%",
      status: "fresh",
      provider: "open-meteo",
      updatedAt: "09:42"
    }), /*#__PURE__*/React.createElement(WidgetShell, {
      title: "Markets",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "line-chart"
      }),
      value: "SPY 574.20",
      hint: "Outside freshness window",
      status: "stale",
      provider: "polygon",
      updatedAt: "08:55"
    }), /*#__PURE__*/React.createElement(WidgetShell, {
      title: "Routine",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "bot"
      }),
      value: "Rebalance drafted",
      hint: "Awaiting approval",
      status: "loading",
      provider: "axis"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 14,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Primary"), /*#__PURE__*/React.createElement(Button, null, "Secondary"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost"
    }, "Ghost"), /*#__PURE__*/React.createElement(Button, {
      variant: "danger"
    }, "Destructive"))), /*#__PURE__*/React.createElement(StatusCallout, {
      kind: "info",
      title: "Customization never changes meaning"
    }, "Accent, density and radius are presentation. Success stays success, stale stays stale, and every state keeps its text label."));
  }
  Object.assign(window, {
    StudioScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/axis-console/StudioScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Seg = __ds_scope.Seg;

__ds_ns.FreshnessBadge = __ds_scope.FreshnessBadge;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.SkeletonCard = __ds_scope.SkeletonCard;

__ds_ns.StatusCallout = __ds_scope.StatusCallout;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.DetailPanelSection = __ds_scope.DetailPanelSection;

__ds_ns.DetailPanelSections = __ds_scope.DetailPanelSections;

__ds_ns.AxisAtmosphere = __ds_scope.AxisAtmosphere;

__ds_ns.AxisChromePanel = __ds_scope.AxisChromePanel;

__ds_ns.AxisGlassPanel = __ds_scope.AxisGlassPanel;

__ds_ns.AxisReflectiveCard = __ds_scope.AxisReflectiveCard;

__ds_ns.ModuleInteractiveHero = __ds_scope.ModuleInteractiveHero;

__ds_ns.WidgetShell = __ds_scope.WidgetShell;

__ds_ns.WidgetStatusBadge = __ds_scope.WidgetStatusBadge;

})();
