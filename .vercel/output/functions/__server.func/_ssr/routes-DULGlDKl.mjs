import { i as __toESM } from "../_runtime.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { i as require_jsx_runtime, r as useQueryClient, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Instagram } from "../_libs/lucide-react.mjs";
import { n as objectType, r as stringType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DULGlDKl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		label: "FEATURES",
		section: "features"
	},
	{
		label: "COMPARE",
		section: "comparison"
	},
	{
		label: "UPDATES",
		section: "updates"
	},
	{
		label: "CREDITS",
		section: "credits"
	},
	{
		label: "FEEDBACK",
		section: "feedback"
	},
	{
		label: "FAQ",
		section: "faq"
	}
];
function scrollTo(id) {
	const el = document.getElementById(id);
	if (el) el.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("");
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const navRef = (0, import_react.useRef)(null);
	const buttonRefs = (0, import_react.useRef)({});
	const [indicator, setIndicator] = (0, import_react.useState)({
		left: 0,
		width: 0,
		opacity: 0
	});
	const isClickScrolling = (0, import_react.useRef)(false);
	const targetSection = (0, import_react.useRef)(null);
	const clickTimeout = (0, import_react.useRef)(null);
	const updateIndicator = (0, import_react.useCallback)(() => {
		if (!active || !buttonRefs.current[active] || !navRef.current) {
			setIndicator((prev) => ({
				...prev,
				opacity: 0
			}));
			return;
		}
		const btn = buttonRefs.current[active];
		const nav = navRef.current;
		if (btn && nav) {
			const btnRect = btn.getBoundingClientRect();
			const navRect = nav.getBoundingClientRect();
			setIndicator({
				left: btnRect.left - navRect.left,
				width: btnRect.width,
				opacity: 1
			});
		}
	}, [active]);
	(0, import_react.useEffect)(() => {
		updateIndicator();
		window.addEventListener("resize", updateIndicator);
		return () => window.removeEventListener("resize", updateIndicator);
	}, [updateIndicator]);
	const handleNavClick = (section) => {
		setActive(section);
		targetSection.current = section;
		isClickScrolling.current = true;
		if (clickTimeout.current) clearTimeout(clickTimeout.current);
		scrollTo(section);
		clickTimeout.current = setTimeout(() => {
			isClickScrolling.current = false;
			targetSection.current = null;
		}, 1600);
	};
	(0, import_react.useEffect)(() => {
		const handleScrollEnd = () => {
			isClickScrolling.current = false;
			targetSection.current = null;
			if (clickTimeout.current) clearTimeout(clickTimeout.current);
		};
		window.addEventListener("scrollend", handleScrollEnd);
		return () => {
			window.removeEventListener("scrollend", handleScrollEnd);
			if (clickTimeout.current) clearTimeout(clickTimeout.current);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 24);
			if (isClickScrolling.current && targetSection.current) {
				const targetEl = document.getElementById(targetSection.current);
				if (targetEl) {
					const rect = targetEl.getBoundingClientRect();
					if (Math.abs(rect.top - 80) < 60) {
						isClickScrolling.current = false;
						targetSection.current = null;
					}
				}
				return;
			}
			const scrollY = window.scrollY;
			const viewportHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			if (scrollY < 250) {
				setActive("");
				return;
			}
			if (scrollY + viewportHeight >= documentHeight - 80) {
				setActive(links[links.length - 1].section);
				return;
			}
			const headerOffset = 140;
			for (let i = links.length - 1; i >= 0; i--) {
				const el = document.getElementById(links[i].section);
				if (el) {
					if (el.getBoundingClientRect().top <= headerOffset) {
						setActive(links[i].section);
						return;
					}
				}
			}
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
		style: {
			background: scrolled ? "rgba(10,10,10,0.88)" : "transparent",
			backdropFilter: scrolled ? "blur(14px)" : "none",
			WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
			borderBottom: scrolled ? "1px solid #1E1E1E" : "1px solid transparent"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 h-[60px] px-5 sm:px-6 md:px-[48px] max-w-[1400px] mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#",
				className: "flex min-w-0 items-center gap-[10px] group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/logo.png",
					alt: "anydown logo",
					width: 24,
					height: 24,
					className: "w-[24px] h-[24px] shrink-0 object-contain group-hover:scale-110 transition-transform"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-grotesk text-[13px] font-bold text-[#F5F5F0] tracking-[2.5px]",
					children: "ANYDOWN"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-[20px] sm:gap-[28px] md:gap-[36px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						ref: navRef,
						className: "relative hidden sm:flex items-center gap-[20px] md:gap-[36px] py-1",
						children: [links.map(({ label, section }) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								ref: (el) => {
									buttonRefs.current[section] = el;
								},
								onClick: () => handleNavClick(section),
								className: "relative font-ibm-mono text-[10px] tracking-[1.5px] transition-colors duration-200 bg-transparent border-none cursor-pointer py-1",
								style: { color: active === section ? "#FFD600" : "#666666" },
								children: label
							}, label);
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -bottom-[2px] h-[2px] bg-[#FFD600] pointer-events-none transition-all duration-300 ease-out shadow-[0_0_10px_rgba(255,214,0,0.8)]",
							style: {
								left: `${indicator.left}px`,
								width: `${indicator.width}px`,
								opacity: indicator.opacity
							}
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hidden xs:inline-flex font-grotesk text-[10px] md:text-[11px] font-bold text-[#0A0A0A] bg-[#FFD600] tracking-[1.5px] px-[14px] md:px-[18px] py-[9px] hover:bg-[#F5F5F0] transition-colors whitespace-nowrap",
						children: "SUPPORT US"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "sm:hidden flex flex-col gap-[5px] p-2 -mr-2",
						onClick: () => setMenuOpen((v) => !v),
						"aria-label": "Toggle menu",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block w-[20px] h-[1.5px] bg-[#F5F5F0] transition-transform duration-200 origin-center",
								style: { transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block w-[20px] h-[1.5px] bg-[#F5F5F0] transition-opacity duration-200",
								style: { opacity: menuOpen ? 0 : 1 }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block w-[20px] h-[1.5px] bg-[#F5F5F0] transition-transform duration-200 origin-center",
								style: { transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }
							})
						]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sm:hidden overflow-hidden transition-all duration-300",
			style: {
				maxHeight: menuOpen ? "400px" : "0px",
				background: "rgba(10,10,10,0.97)",
				backdropFilter: "blur(14px)",
				WebkitBackdropFilter: "blur(14px)",
				borderBottom: menuOpen ? "1px solid #1E1E1E" : "none"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col px-5 py-5 gap-0",
				children: [links.map(({ label, section }) => {
					const isActive = active === section;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							handleNavClick(section);
							setMenuOpen(false);
						},
						className: "flex items-center gap-2 w-full font-ibm-mono text-[12px] tracking-[2px] py-[14px] border-b border-[#141414] transition-colors bg-transparent border-x-0 border-t-0 cursor-pointer",
						style: { color: isActive ? "#FFD600" : "#666" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-[4px] h-[4px] rounded-full shrink-0 transition-colors",
							style: { background: isActive ? "#FFD600" : "#2D2D2D" }
						}), label]
					}, label);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#",
					className: "mt-5 font-grotesk text-[11px] font-bold text-[#0A0A0A] bg-[#FFD600] tracking-[1.5px] px-[18px] py-[11px] text-center hover:bg-[#F5F5F0] transition-colors",
					children: "SUPPORT US"
				})]
			})
		})]
	});
}
function GlitchText({ text, className = "", delay = 0, speed = 40 }) {
	const ref = (0, import_react.useRef)(null);
	const [charCount, setCharCount] = (0, import_react.useState)(0);
	const [started, setStarted] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const hasRun = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setStarted(true);
			setCharCount(text.length);
			setDone(true);
			return;
		}
		let interval;
		let startTimer;
		let doneTimer;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting && !hasRun.current) {
				hasRun.current = true;
				startTimer = setTimeout(() => {
					setStarted(true);
					let i = 0;
					interval = setInterval(() => {
						i++;
						setCharCount(i);
						if (i >= text.length) {
							clearInterval(interval);
							doneTimer = setTimeout(() => setDone(true), 800);
						}
					}, speed);
				}, delay);
			}
		}, { threshold: .15 });
		observer.observe(el);
		return () => {
			observer.disconnect();
			if (interval) clearInterval(interval);
			if (startTimer) clearTimeout(startTimer);
			if (doneTimer) clearTimeout(doneTimer);
		};
	}, [
		text,
		speed,
		delay
	]);
	const characters = Array.from(text);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		className: `relative inline ${className}`,
		"aria-label": text,
		children: characters.map((char, index) => {
			const isVisible = started && index < charCount;
			const isCurrent = started && !done && (index === charCount - 1 || charCount === 0 && index === 0);
			if (char === "\n") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}, index);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "relative inline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { visibility: isVisible ? "visible" : "hidden" },
					children: char
				}), isCurrent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
					position: "absolute",
					left: "100%",
					top: "10%",
					bottom: "10%",
					width: "0.06em",
					backgroundColor: "currentColor",
					marginLeft: "1px",
					animation: "tw-blink 0.7s step-end infinite"
				} })]
			}, index);
		})
	});
}
var CURSORS = [
	{
		name: "boom",
		color: "#FFD600",
		textColor: "#0A0A0A",
		animName: "cursor-alex",
		duration: "18s"
	},
	{
		name: "claude",
		color: "#FF6B35",
		textColor: "#FFFFFF",
		animName: "cursor-sara",
		duration: "22s"
	},
	{
		name: "dominicburtt",
		color: "#4ADE80",
		textColor: "#0A0A0A",
		animName: "cursor-jin",
		duration: "26s"
	},
	{
		name: "gemini",
		color: "#60A5FA",
		textColor: "#0A0A0A",
		animName: "cursor-mila",
		duration: "30s"
	}
];
function CollabCursors() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 overflow-hidden pointer-events-none motion-reduce:hidden",
		style: { zIndex: 40 },
		"aria-hidden": "true",
		children: CURSORS.map((cursor) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				position: "absolute",
				left: 0,
				top: 0,
				animation: `${cursor.animName} ${cursor.duration} cubic-bezier(0.4, 0, 0.2, 1) infinite`,
				willChange: "transform"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: "16",
				height: "18",
				viewBox: "0 0 20 22",
				fill: "none",
				style: { filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.7))" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M2 2L18 10L10 12L6 20L2 2Z",
					fill: cursor.color,
					stroke: "#0A0A0A",
					strokeWidth: "1.5",
					strokeLinejoin: "round"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					position: "absolute",
					left: "14px",
					top: "14px",
					backgroundColor: cursor.color,
					padding: "2px 8px",
					fontFamily: "var(--font-mono)",
					fontSize: "10px",
					fontWeight: 700,
					color: cursor.textColor,
					letterSpacing: "0.08em",
					whiteSpace: "nowrap",
					boxShadow: "0 2px 8px rgba(0,0,0,0.5)"
				},
				children: cursor.name
			})]
		}, cursor.name))
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex flex-col items-center w-full bg-[#0A0A0A] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] md:pb-0 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-30 flex flex-col items-center w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mb-5 md:mb-6 flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.png",
						alt: "Anydown App Logo",
						width: 80,
						height: 80,
						className: "w-[64px] h-[64px] md:w-[80px] md:h-[80px] object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						const el = document.getElementById("updates");
						if (el) el.scrollIntoView({
							behavior: "smooth",
							block: "start"
						});
					},
					className: "flex items-center justify-center gap-[8px] h-[32px] px-[12px] md:px-[16px] bg-[#1A1A1A] border-2 border-[#FFD600] hover:bg-[#FFD600] group transition-all cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[8px] h-[8px] bg-[#FFD600] group-hover:bg-[#0A0A0A] shrink-0 transition-colors" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-ibm-mono text-[9px] md:text-[11px] font-bold text-[#FFD600] group-hover:text-[#0A0A0A] tracking-[1px] md:tracking-[2px] whitespace-nowrap transition-colors",
						children: "[NEW] // VERSION 3.0.0 NOW LIVE"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 md:h-[32px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-grotesk text-[clamp(30px,10vw,96px)] font-bold text-[#F5F5F0] tracking-[-1px] leading-none text-center w-full max-w-[1100px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlitchText, {
								text: "DOWNLOAD",
								speed: 40,
								delay: 100
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block mt-1 md:mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlitchText, {
								text: "WITHOUT",
								speed: 40,
								delay: 450
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block mt-1 md:mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlitchText, {
								text: "LIMITS.",
								speed: 40,
								delay: 760
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-grotesk text-[clamp(30px,10vw,96px)] font-bold text-[#FFD600] tracking-[-1px] leading-none text-center w-full max-w-[1100px] mt-1 md:mt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlitchText, {
						text: "ANYDOWN.",
						speed: 40,
						delay: 1080
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 md:h-[24px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-ibm-mono text-[12px] sm:text-[13px] md:text-[15px] text-[#888888] tracking-[1px] leading-[1.6] text-center w-full max-w-[840px]",
					children: "THE OPEN-SOURCE, NEO-BRUTALIST ANDROID DOWNLOADER FOR YOUTUBE, SPOTIFY, INSTAGRAM, AND 1,000+ SITES. NO SERVERS, NO ADS, 100% ON-DEVICE."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-[700px] mt-4",
					children: [
						"v3.0.0 RELEASED",
						"ANDROID 7.0+",
						"OPEN SOURCE (MIT)",
						"0 ADS"
					].map((badge) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-ibm-mono text-[9px] md:text-[10px] text-[#AAAAAA] tracking-[1.5px] px-[8px] py-[3px] bg-[#141414] border border-[#2A2A2A]",
						children: badge
					}, badge))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 md:h-[40px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row items-center gap-4 md:gap-[16px] w-full sm:w-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://github.com/boom1908/anydown-native/releases/latest/download/anydown.apk",
						className: "flex items-center justify-center w-full sm:w-[240px] h-[56px] bg-[#FFD600] hover:bg-[#e6c200] active:bg-[#e6c200] transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-grotesk text-[12px] font-bold text-[#0A0A0A] tracking-[2px]",
							children: "DOWNLOAD APK (v3.0.0)"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://github.com/boom1908/anydown-native",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex items-center justify-center w-full sm:w-[200px] h-[56px] bg-[#0A0A0A] border-2 border-[#3D3D3D] hover:border-[#888888] transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-ibm-mono text-[12px] text-[#888888] tracking-[2px]",
							children: "GITHUB REPO"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 md:h-[24px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full max-w-[420px] h-[1px] bg-[#1D1D1D]" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollabCursors, {})]
	});
}
function PixelDivider() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-[4px] bg-[#FFD600]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-[4px] bg-[#0A0A0A]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-[4px] bg-[#FFD600]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-[4px] bg-[#0A0A0A]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-[4px] bg-[#FFD600]" })
		]
	});
}
function SectionHeader({ label, title, subtitle, titleWidth = "w-full max-w-[700px]", subtitleWidth = "w-full max-w-[600px]" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-[16px] w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-ibm-mono text-[10px] md:text-[12px] font-bold text-[#FFD600] tracking-[1.5px] md:tracking-[3px]",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: `font-grotesk text-[clamp(28px,8vw,56px)] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.05] whitespace-pre-line ${titleWidth}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlitchText, {
					text: title,
					speed: 40,
					delay: 150
				})
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `font-ibm-mono text-[12px] md:text-[13px] text-[#666666] tracking-[0.5px] md:tracking-[1px] leading-[1.65] text-pretty ${subtitleWidth}`,
				children: subtitle
			})
		]
	});
}
var platforms = [
	"YOUTUBE",
	"SPOTIFY",
	"INSTAGRAM",
	"TIKTOK",
	"X / TWITTER",
	"REDDIT",
	"TWITCH",
	"+1,000 SITES"
];
var formats = [
	{
		label: "4K & 1080P UHD",
		desc: "FFmpeg on-device merge",
		color: "#FFD600"
	},
	{
		label: "720P FAST",
		desc: "Quick storage-saver",
		color: "#888888"
	},
	{
		label: "NATIVE M4A",
		desc: "Lossless audio stream",
		color: "#FF6B35"
	},
	{
		label: "MP3 CONVERTER",
		desc: "Built-in batch tool",
		color: "#4ADE80"
	}
];
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "features",
		className: "flex flex-col w-full bg-[#0A0A0A] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] scroll-mt-[60px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			label: "[01] // FEATURES",
			title: "BUILT TO EXTRACT\nANYTHING.",
			subtitle: "YOUTUBE, SPOTIFY, INSTAGRAM, AND 1,000+ SITES. FROM 4K STREAMS TO FULL PLAYLISTS."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-6 p-6 sm:p-8 bg-[#111111] border border-[#2D2D2D] hover:border-[#FFD600] transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-ibm-mono text-[10px] md:text-[11px] font-bold text-[#FFD600] tracking-[2px]",
									children: "[01 // UNIVERSAL ENGINE]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[8px] h-[8px] bg-[#FFD600]" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-grotesk text-[22px] md:text-[26px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2]",
								children: "1,000+ SITES & SPOTIFY."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-ibm-mono text-[13px] md:text-[13px] text-[#888888] tracking-[1px] leading-[1.65]",
								children: "DIRECT ON-DEVICE EXTRACTION FOR YOUTUBE VIDEOS & SHORTS, INSTAGRAM REELS, SPOTIFY TRACKS, TIKTOK (NO WATERMARKS), X/TWITTER, AND 1,000+ PLATFORMS. ZERO REMOTE PROXIES, 100% PRIVATE."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2 pt-2 border-t border-t-[#1D1D1D]",
						children: platforms.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-ibm-mono text-[10px] tracking-[1.5px] px-[10px] py-[4px] bg-[#0A0A0A] border border-[#2D2D2D] text-[#CCCCCC]",
							children: p
						}, p))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-6 p-6 sm:p-8 bg-[#111111] border border-[#2D2D2D] hover:border-[#FF6B35] transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-ibm-mono text-[10px] md:text-[11px] font-bold text-[#FF6B35] tracking-[2px]",
									children: "[02 // RESOLUTION & AUDIO]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[8px] h-[8px] bg-[#FF6B35]" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-grotesk text-[22px] md:text-[26px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2]",
								children: "4K, 1080P, M4A & MP3."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-ibm-mono text-[13px] md:text-[13px] text-[#888888] tracking-[1px] leading-[1.65]",
								children: "NATIVE 64-BIT FFMPEG MERGES SEPARATE VIDEO AND AUDIO STREAMS LOCALLY INTO FLAWLESS 4K/1080P MP4S. GRAB FAST 720P CLIPS, EXTRACT PURE M4A AUDIO, OR CONVERT TO MP3 DIRECTLY IN-APP."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2 pt-2 border-t border-t-[#1D1D1D]",
						children: formats.map((fmt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col p-2.5 bg-[#0A0A0A] border border-[#2D2D2D]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-ibm-mono text-[11px] font-bold tracking-[1px]",
								style: { color: fmt.color },
								children: fmt.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-ibm-mono text-[9px] text-[#666666] tracking-[0.5px]",
								children: fmt.desc
							})]
						}, fmt.label))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-6 p-6 sm:p-8 bg-[#111111] border border-[#2D2D2D] hover:border-[#4ADE80] transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-ibm-mono text-[10px] md:text-[11px] font-bold text-[#4ADE80] tracking-[2px]",
									children: "[03 // BATCH PIPELINE]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[8px] h-[8px] bg-[#4ADE80]" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-grotesk text-[22px] md:text-[26px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2]",
								children: "PLAYLIST & ALBUM RIPPER."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-ibm-mono text-[13px] md:text-[13px] text-[#888888] tracking-[1px] leading-[1.65]",
								children: "PASTE A FULL YOUTUBE PLAYLIST OR SPOTIFY ALBUM LINK. ANYDOWN AUTOMATICALLY PARSES TRACK METADATA AND DOWNLOADS THE ENTIRE QUEUE SEQUENTIALLY TO YOUR STORAGE WITHOUT HANGING OR TIMING OUT."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-3 py-2 bg-[#0A0A0A] border border-[#2D2D2D] font-ibm-mono text-[10px] text-[#888888] tracking-[1px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#4ADE80] font-bold",
							children: "// STATUS: READY"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "QUEUE AUTO-SEQUENCING" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-6 p-6 sm:p-8 bg-[#111111] border border-[#2D2D2D] hover:border-[#60A5FA] transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-ibm-mono text-[10px] md:text-[11px] font-bold text-[#60A5FA] tracking-[2px]",
									children: "[04 // WAKE-LOCK ENGINE]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[8px] h-[8px] bg-[#60A5FA]" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-grotesk text-[22px] md:text-[26px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2]",
								children: "BACKGROUND & LOCK-SCREEN SAFE."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-ibm-mono text-[13px] md:text-[13px] text-[#888888] tracking-[1px] leading-[1.65]",
								children: "HARDWARE FOREGROUND WORKERS AND ANDROID WAKE-LOCKS PREVENT THE OS FROM KILLING HEAVY DOWNLOADS. LIVE TELEMETRY (MB/S), REMAINING BYTES, AND DUAL-STREAM MERGING PROGRESS DISPLAY LIVE IN YOUR NOTIFICATION SHADE."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-3 py-2 bg-[#0A0A0A] border border-[#2D2D2D] font-ibm-mono text-[10px] text-[#888888] tracking-[1px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#60A5FA] font-bold",
							children: "// NOTIFICATION SHADE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SCREEN-OFF SAFE" })]
					})]
				})
			]
		})]
	});
}
function StepCard({ number, title, description, bgColor = "#0A0A0A", borderColor = "#2D2D2D" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 p-7 sm:p-8 md:p-[40px] border w-full md:flex-1 md:h-[260px]",
		style: {
			backgroundColor: bgColor,
			borderColor
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-grotesk text-[48px] font-bold text-[#FFD600] tracking-[-2px] leading-none",
				children: number
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-grotesk text-[20px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2] whitespace-pre-line",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-ibm-mono text-[12px] md:text-[11px] text-[#555555] tracking-[1px] leading-[1.6]",
				children: description
			})
		]
	});
}
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col w-full bg-[#0D0D0D] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			label: "[02] // HOW IT WORKS",
			title: "THREE TAPS.\nDONE DEAL."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col md:flex-row w-full gap-4 md:gap-[2px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepCard, {
					number: "01",
					title: "PASTE LINK",
					description: "DROP ANY LINK OR LET CLIPBOARD AUTO-DETECT HANDLE IT INSTANTLY."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepCard, {
					number: "02",
					title: "SELECT FORMAT",
					description: "CHOOSE BEST QUALITY MP4, FAST 720P, OR PURE NATIVE M4A AUDIO.",
					bgColor: "#111111",
					borderColor: "#FFD600"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepCard, {
					number: "03",
					title: "NATIVE SAVE",
					description: "DOWNLOADS DIRECTLY TO YOUR MEDIASTORE. NO AD REDIRECTS, NO JUNK."
				})
			]
		})]
	});
}
var directives = [
	{
		number: "01",
		tag: "CLEAN",
		accentColor: "#FFD600",
		title: "ZERO ADS & CLEAN DESIGN",
		body: "NO POPUPS, NO MISLEADING BUTTONS, AND NO REDIRECTS. THE INTERFACE STAYS FAST, CLEAN, AND COMPLETELY DISTRACTION-FREE."
	},
	{
		number: "02",
		tag: "DIRECT",
		accentColor: "#FF6B35",
		title: "100% ON-DEVICE PROCESSING",
		body: "YOUR LINKS AND MEDIA NEVER PASS THROUGH THIRD-PARTY CLOUD SERVERS. DOWNLOADS AND AUDIO EXTRACTION RUN LOCALLY ON YOUR PHONE."
	},
	{
		number: "03",
		tag: "SPEED",
		accentColor: "#60A5FA",
		title: "FULL HARDWARE SPEED",
		body: "NO ARTIFICIAL SPEED LIMITS OR PREMIUM TIERS. ANYDOWN USES YOUR FULL INTERNET BANDWIDTH FOR FAST, UNRESTRICTED TRANSFERS."
	},
	{
		number: "04",
		tag: "FREE",
		accentColor: "#4ADE80",
		title: "ALWAYS FREE & OPEN SOURCE",
		body: "COMPLETELY FREE WITH NO SUBSCRIPTIONS, NO TRIAL PERIODS, AND NO UPSELLS. BUILT AS A TRANSPARENT, OPEN-SOURCE UTILITY."
	},
	{
		number: "05",
		tag: "UNLIMITED",
		accentColor: "#F5F5F0",
		title: "NO DOWNLOAD QUOTAS",
		body: "NO DAILY LIMITS, NO RESOLUTION LOCKS, AND NO FILE SIZE RESTRICTIONS. DOWNLOAD AS MUCH HIGH-QUALITY MEDIA AS YOUR STORAGE PERMITS."
	}
];
function Bento() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col w-full bg-[#0A0A0A] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] gap-10 md:gap-[48px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			label: "[03] // THE MANIFESTO",
			title: "NO CLUTTER.\nJUST EXTRACTION.",
			titleWidth: "w-full max-w-[800px]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col lg:flex-row w-full gap-6 md:gap-8 items-stretch",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between p-6 sm:p-8 md:p-9 bg-[#111111] border border-[#2D2D2D] hover:border-[#FFD600] transition-colors lg:w-[380px] lg:shrink-0 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-b-[#1D1D1D] pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-ibm-mono text-[10px] font-bold text-[#FFD600] tracking-[2px]",
							children: "[CORE PHILOSOPHY]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-ibm-mono text-[9px] text-[#555555] tracking-[1.5px]",
							children: "// PRINCIPLES"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-grotesk text-[24px] sm:text-[28px] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.1]",
							children: "BUILT FOR PRIVACY & SPEED."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-ibm-mono text-[13px] sm:text-[12px] text-[#888888] tracking-[1px] leading-[1.7]",
							children: "ANYDOWN WAS CREATED AS AN HONEST ALTERNATIVE TO AD-CLUTTERED DOWNLOAD SITES. ALL PROCESSING RUNS DIRECTLY ON YOUR PHONE—NO TRACKING, NO REMOTE SERVERS, AND NO HIDDEN FEES."
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-2.5 pt-6 mt-6 border-t border-t-[#1D1D1D]",
					children: [
						"ZERO ADS OR POPUPS",
						"ZERO REMOTE PROXIES",
						"ZERO PAID SUBSCRIPTIONS",
						"100% PRIVATE & ON-DEVICE"
					].map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-ibm-mono text-[11px] text-[#FFD600] font-bold",
							children: "✓"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-ibm-mono text-[10px] sm:text-[11px] text-[#AAAAAA] tracking-[1px]",
							children: rule
						})]
					}, rule))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-4 flex-1",
				children: directives.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group flex flex-col justify-between p-5 sm:p-6 bg-[#0E0E0E] border border-[#2D2D2D] hover:border-[#444444] transition-all relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-0 top-0 bottom-0 w-[3px] opacity-40 group-hover:opacity-100 transition-opacity",
						style: { backgroundColor: item.accentColor }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2.5 pl-2 sm:pl-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-ibm-mono text-[11px] font-bold tracking-[1.5px] text-[#555555] group-hover:text-[#AAAAAA] transition-colors",
										children: ["RULE // ", item.number]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-ibm-mono text-[9px] font-bold tracking-[2px] px-[8px] py-[2px] bg-[#161616] border",
										style: {
											color: item.accentColor,
											borderColor: `${item.accentColor}40`
										},
										children: [
											"[",
											item.tag,
											"]"
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-[6px] h-[6px] rounded-full shrink-0",
									style: { backgroundColor: item.accentColor }
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-grotesk text-[18px] sm:text-[20px] font-bold text-[#F5F5F0] tracking-[0.5px] group-hover:text-[#FFFFFF] transition-colors",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-ibm-mono text-[12px] sm:text-[12px] text-[#777777] tracking-[0.8px] leading-[1.65]",
								children: item.body
							})
						]
					})]
				}, item.number))
			})]
		})]
	});
}
var columns$1 = [
	"WEB SCRAPERS",
	"TELEGRAM BOTS",
	"PLAY STORE APPS"
];
var rows = [
	{
		feature: "NO ADS OR POPUPS",
		anydown: "[✓]",
		others: [
			"[✗]",
			"[✗]",
			"[✗]"
		]
	},
	{
		feature: "NATIVE ON-DEVICE PIPELINE",
		anydown: "[✓]",
		others: [
			"[✓]",
			"[✗]",
			"[✗]"
		]
	},
	{
		feature: "DIRECT NATIVE M4A AUDIO",
		anydown: "[✓]",
		others: [
			"[✗]",
			"[—]",
			"[—]"
		]
	},
	{
		feature: "CLIPBOARD AUTO-GRAB",
		anydown: "[✓]",
		others: [
			"[✗]",
			"[✗]",
			"[✓]"
		]
	},
	{
		feature: "NO FILE/SPEED LIMITS",
		anydown: "[✓]",
		others: [
			"[✓]",
			"[✗]",
			"[—]"
		]
	},
	{
		feature: "100% FREE & OPEN SOURCE",
		anydown: "[✓]",
		others: [
			"[✓]",
			"[✗]",
			"[✗]"
		]
	}
];
function cellClass(val) {
	if (val === "[✓]") return "text-[#888888] font-bold text-[13px]";
	return "text-[#3D3D3D] text-[12px]";
}
function Comparison() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "comparison",
		className: "flex flex-col w-full bg-[#050505] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] scroll-mt-[60px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				label: "[04] // VS. THE REST",
				title: "WHY ANYDOWN\nWINS.",
				subtitle: "SEE HOW WE STACK UP AGAINST WEB CONVERTERS. NO SPIN. JUST PERFORMANCE."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "-mx-5 sm:-mx-6 md:mx-0 overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-[840px] px-5 sm:px-6 md:px-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col w-full border border-[#2D2D2D]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[300px_repeat(4,minmax(0,1fr))] md:grid-cols-[minmax(280px,1.6fr)_repeat(4,minmax(0,1fr))] w-full h-[56px] bg-[#111111] border-b-2 border-b-[#FFD600]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center min-w-0 px-[20px] md:px-[32px] border-r border-r-[#2D2D2D]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-grotesk text-[11px] font-bold text-[#888888] tracking-[2px]",
										children: "FEATURE"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center min-w-0 px-[20px] md:px-[32px] bg-[#1A1A1A] border-r border-r-[#2D2D2D]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-grotesk text-[11px] font-bold text-[#FFD600] tracking-[2px]",
										children: "ANYDOWN"
									})
								}),
								columns$1.map((tool, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `flex items-center min-w-0 px-[20px] md:px-[32px] ${i < columns$1.length - 1 ? "border-r border-r-[#2D2D2D]" : ""}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-grotesk text-[11px] font-bold text-[#555555] tracking-[2px] leading-tight",
										children: tool
									})
								}, tool))
							]
						}), rows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `grid grid-cols-[300px_repeat(4,minmax(0,1fr))] md:grid-cols-[minmax(280px,1.6fr)_repeat(4,minmax(0,1fr))] w-full h-[56px] ${i < rows.length - 1 ? "border-b border-b-[#1D1D1D]" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center min-w-0 px-[20px] md:px-[32px] border-r border-r-[#2D2D2D]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-ibm-mono text-[12px] text-[#CCCCCC] tracking-[1px] truncate",
										children: row.feature
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center min-w-0 px-[20px] md:px-[32px] bg-[#0D0D0D] border-r border-r-[#2D2D2D]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-ibm-mono tracking-[1px] text-[#FFD600] font-bold text-[14px]",
										children: row.anydown
									})
								}),
								row.others.map((val, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `flex items-center min-w-0 px-[20px] md:px-[32px] ${j < row.others.length - 1 ? "border-r border-r-[#2D2D2D]" : ""}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `font-ibm-mono tracking-[1px] ${cellClass(val)}`,
										children: val
									})
								}, j))
							]
						}, row.feature))]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "md:hidden font-ibm-mono text-[10px] text-[#444444] tracking-[2px] -mt-8",
				children: "<< SWIPE TABLE >>"
			})
		]
	});
}
var updates = [
	{
		version: "v3.0.0",
		date: "OCT 2026",
		title: "THE UTILITY & SPOTIFY UPGRADE",
		changes: [
			"SPOTIFY TRACK RESOLUTION: PASTE ANY SPOTIFY TRACK LINK TO AUTOMATICALLY RESOLVE METADATA AND DOWNLOAD HIGH-FIDELITY AUDIO.",
			"ENHANCED BACKGROUND SERVICE: INTEGRATED SYSTEM WAKE-LOCKS SO DOWNLOADS CONTINUE UNINTERRUPTED WHEN YOUR SCREEN IS LOCKED.",
			"IN-APP MP3 CONVERTER: DEDICATED ON-DEVICE TOOL TO CONVERT DOWNLOADED VIDEOS TO MP3 IN BATCHES.",
			"CUSTOM STORAGE (SAF): FULL STORAGE ACCESS FRAMEWORK SUPPORT TO SAVE MEDIA TO ANY INTERNAL FOLDER OR SD CARD.",
			"IN-APP AUTO-UPDATER: AUTOMATICALLY CHECKS GITHUB RELEASES ON LAUNCH FOR 1-TAP APK UPDATES."
		]
	},
	{
		version: "v2.0",
		date: "AUG 2026",
		title: "THE BRUTALIST REBUILD",
		changes: [
			"COMPLETE JETPACK COMPOSE UI REWRITE WITH INDUSTRIAL BRUTALIST AESTHETIC.",
			"ADDED FLAWLESS INSTAGRAM REELS SUPPORT.",
			"RE-ENGINEERED FOOTER NAVIGATION WITH FLOATING DEVELOPER AND UPDATE CONTROLS.",
			"SQUASHED UI COLLISION BUGS FOR A ROCK-SOLID MOBILE EXPERIENCE."
		]
	},
	{
		version: "v1.5",
		date: "JUN 2026",
		title: "FRICTIONLESS PIPELINE",
		changes: [
			"INTRODUCED SMART CLIPBOARD AUTO-DETECT FOR INSTANT LINK CAPTURE.",
			"ADDED DYNAMIC COLOR ACCENTS BASED ON FORMAT SELECTION (VIDEO VS. AUDIO).",
			"IMPLEMENTED NATIVE M4A AUDIO EXTRACTION WITHOUT HEAVY RE-ENCODING."
		]
	},
	{
		version: "v1.2",
		date: "APR 2026",
		title: "THE FORGE UPGRADE",
		changes: [
			"INTEGRATED LOCAL FFMPEG BINARIES FOR ON-DEVICE AUDIO/VIDEO MERGING.",
			"UPGRADED YT-DLP CORE ENGINE TO BYPASS PLATFORM THROTTLING.",
			"ENHANCED ERROR HANDLING AND METADATA PARSING FOR YOUTUBE SHORTS."
		]
	},
	{
		version: "v1.0",
		date: "FEB 2026",
		title: "INITIAL RELEASE",
		changes: [
			"FIRST PUBLIC APK DEPLOYMENT.",
			"RAW YOUTUBE AND YOUTUBE SHORTS EXTRACTION.",
			"BUILT ON NATIVE PYTHON RUNTIME VIA CHAQUOPY.",
			"ZERO ADS. ZERO TRACKING. ZERO LIMITS."
		]
	}
];
function Updates() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "updates",
		className: "flex flex-col w-full bg-[#080808] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] scroll-mt-[60px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			label: "[06] // UPDATES",
			title: "WHAT'S\nNEW.",
			subtitle: "RELEASE HISTORY AND MAJOR CHANGES FOR ANYDOWN."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col w-full gap-0",
			children: [updates.map((update, i) => {
				const isLatest = i === 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `flex flex-col md:flex-row gap-6 md:gap-[48px] py-8 md:py-[40px] border-t ${isLatest ? "border-t-[#FFD600]" : "border-t-[#1D1D1D]"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex md:flex-col items-center md:items-start gap-3 md:gap-2 md:w-[120px] shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-grotesk text-[14px] md:text-[16px] font-bold tracking-[2px]",
							style: { color: isLatest ? "#FFD600" : "#555555" },
							children: update.version
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-ibm-mono text-[11px] text-[#444444] tracking-[1px]",
							children: update.date
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 md:gap-5 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-grotesk text-[20px] md:text-[24px] font-bold tracking-[1px] leading-[1.2]",
							style: { color: isLatest ? "#F5F5F0" : "#888888" },
							children: update.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-col gap-2",
							children: update.changes.map((change) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-ibm-mono text-[12px] tracking-[1px] mt-[2px]",
									style: { color: isLatest ? "#FFD600" : "#3D3D3D" },
									children: "//"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-ibm-mono text-[13px] md:text-[13px] tracking-[1px] leading-[1.65]",
									style: { color: isLatest ? "#AAAAAA" : "#555555" },
									children: change
								})]
							}, change))
						})]
					})]
				}, update.version);
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-t-[#1D1D1D]" })]
		})]
	});
}
var squad = [
	{
		name: "BOOM",
		role: "CORE ARCHITECT",
		description: "PROJECT LEAD & DEVELOPER. WIRED THE PYTHON YT-DLP PIPELINE INTO ANDROID KOTLIN AND LEADS APPLICATION DEVELOPMENT.",
		url: "#hero",
		roleColor: "#FFD600"
	},
	{
		name: "DOMINICBURTT",
		role: "LEAD DESIGNER",
		description: "VISUAL & UI DESIGN. DESIGNED THE NEO-BRUTALIST SYSTEM, APP LAYOUTS, AND THIS WEBSITE'S INTERFACE.",
		url: "https://www.instagram.com/dominicburtt",
		instagram: "https://www.instagram.com/dominicburtt?igsh=ZjA1dG40cnM0NXRv",
		roleColor: "#4ADE80"
	},
	{
		name: "CLAUDE",
		role: "FRONTEND ASSIST",
		description: "COMPONENT ENGINEERING, MOBILE LAYOUT REFINEMENTS, AND REACT/TAILWIND STYLING.",
		url: "https://claude.ai",
		roleColor: "#FF6B35"
	},
	{
		name: "GEMINI",
		role: "SYSTEM ASSIST",
		description: "TECHNICAL DOCUMENTATION, BUILD SCRIPTING, AND ARCHITECTURE REVIEW.",
		url: "https://gemini.google.com",
		roleColor: "#60A5FA"
	}
];
var credits = [
	{
		name: "YT-DLP",
		description: "THE BARE-METAL DOWNLOAD ENGINE THAT POWERS EVERY LINK ANYDOWN HANDLES.",
		url: "https://github.com/yt-dlp/yt-dlp",
		tag: "CORE",
		tagColor: "#FFD600"
	},
	{
		name: "FFMPEG",
		description: "THE MEDIA ENGINE RESPONSIBLE FOR MERGING, REMUXING, AND EXTRACTING PURE M4A AUDIO LOCALLY ON YOUR DEVICE.",
		url: "https://ffmpeg.org",
		tag: "FORGE",
		tagColor: "#FF6B35"
	},
	{
		name: "CHAQUOPY",
		description: "THE PYTHON BRIDGE. ENABLES THE YT-DLP PIPELINE TO RUN ON ANDROID HARDWARE.",
		url: "https://chaquo.com/chaquopy",
		tag: "RUNTIME",
		tagColor: "#60A5FA"
	},
	{
		name: "JETPACK COMPOSE",
		description: "ANDROID'S MODERN TOOLKIT FOR BUILDING NATIVE DECLARATIVE USER INTERFACES.",
		url: "https://developer.android.com/compose",
		tag: "UI",
		tagColor: "#F5F5F0"
	},
	{
		name: "COIL",
		description: "LIGHTWEIGHT, ASYNCHRONOUS IMAGE LOADING FOR VIDEO THUMBNAILS.",
		url: "https://coil-kt.github.io/coil/",
		tag: "MEDIA",
		tagColor: "#888888"
	}
];
function Credits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "credits",
		className: "flex flex-col w-full bg-[#0A0A0A] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] scroll-mt-[60px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				label: "[07] // CREDITS",
				title: "THE\nSQUAD.",
				subtitle: "THE TEAM AND TOOLS BEHIND THE SYSTEM."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 w-full gap-4 sm:gap-[2px] border-0 sm:border border-[#2D2D2D] bg-transparent sm:bg-[#2D2D2D]",
				children: squad.map((member, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `flex flex-col gap-5 p-7 sm:p-8 md:p-[32px] bg-[#111111] hover:bg-[#1A1A1A] border border-[#2D2D2D] sm:border-0 transition-colors group ${i === squad.length - 1 && squad.length % 2 === 1 ? "sm:col-span-2" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-4 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-grotesk text-[18px] font-bold text-[#F5F5F0] tracking-[1px] group-hover:text-[#FFD600] transition-colors",
									children: member.name
								}), member.instagram && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: member.instagram,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": `${member.name} on Instagram`,
									className: "flex items-center justify-center w-[30px] h-[30px] border border-[#2D2D2D] text-[#888888] hover:text-[#0A0A0A] hover:bg-[#FF6B35] hover:border-[#FF6B35] transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
										size: 15,
										strokeWidth: 2
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-ibm-mono text-[10px] tracking-[2px] px-[10px] py-[4px] border",
								style: {
									color: member.roleColor,
									borderColor: member.roleColor
								},
								children: member.role
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-ibm-mono text-[13px] sm:text-[12px] text-[#666666] tracking-[1px] leading-[1.65]",
							children: member.description
						}),
						member.url.startsWith("http") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: member.url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "font-ibm-mono text-[11px] text-[#444444] tracking-[1px] hover:text-[#FFD600] transition-colors",
							children: "VISIT PROFILE >"
						})
					]
				}, member.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				label: "[07.B] // STACK",
				title: "BUILT ON\nGIANTS.",
				subtitle: "ANYDOWN IS POSSIBLE BECAUSE OF THESE OPEN PROJECTS AND TOOLS."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 sm:gap-[2px] border-0 sm:border border-[#2D2D2D] bg-transparent sm:bg-[#2D2D2D]",
				children: credits.map((credit, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: credit.url,
					target: "_blank",
					rel: "noopener noreferrer",
					className: `flex flex-col gap-5 p-7 sm:p-8 md:p-[32px] bg-[#111111] hover:bg-[#1A1A1A] border border-[#2D2D2D] sm:border-0 transition-colors group ${i === credits.length - 1 ? "sm:col-span-2 lg:col-span-1" : i === credits.length - 2 ? "lg:col-span-2" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-grotesk text-[18px] font-bold text-[#F5F5F0] tracking-[1px] group-hover:text-[#FFD600] transition-colors",
								children: credit.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-ibm-mono text-[10px] tracking-[2px] px-[10px] py-[4px] border",
								style: {
									color: credit.tagColor,
									borderColor: credit.tagColor
								},
								children: credit.tag
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-ibm-mono text-[13px] sm:text-[12px] text-[#666666] tracking-[1px] leading-[1.65]",
							children: credit.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-ibm-mono text-[11px] text-[#444444] tracking-[1px] group-hover:text-[#888888] transition-colors",
							children: "VISIT SOURCE >"
						})
					]
				}, credit.name))
			})
		]
	});
}
var APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzbY6MPBcrMJjaSd0_jMJFhcb-FM9RkoZCQTbTVhYaJmkLkP58zykqKnKtAvgILoL4q/exec";
var categories = [
	"Bug",
	"Feature",
	"Suggestion",
	"Other"
];
var formSchema = objectType({
	name: stringType().trim().max(60, "Name is too long"),
	category: enumType([
		"Bug",
		"Feature",
		"Suggestion",
		"Other"
	]),
	message: stringType().trim().min(5, "Message is too short").max(1e3, "Message is too long")
});
var initialFeedback = [
	{
		timestamp: "2026-08-04T09:07:18.417Z",
		name: "Rayan djima",
		category: "Other",
		message: "Du bist gut genung"
	},
	{
		timestamp: "2026-08-10T15:20:14.767Z",
		name: "Anonymous",
		category: "Suggestion",
		message: "Is it safe?"
	},
	{
		timestamp: "2026-08-10T15:20:45.974Z",
		name: "Anonymous",
		category: "Bug",
		message: "Blank screen showing"
	},
	{
		timestamp: "2026-08-10T15:21:20.398Z",
		name: "Mahendu suresh",
		category: "Other",
		message: "Need more planning"
	},
	{
		timestamp: "2026-08-21T08:41:01.864Z",
		name: "Anonymous",
		category: "Suggestion",
		message: "working"
	}
];
function formatDate(iso) {
	try {
		return new Date(iso).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric"
		});
	} catch {
		return iso;
	}
}
function getInitial(name) {
	return (name || "A").charAt(0).toUpperCase();
}
function Feedback() {
	const queryClient = useQueryClient();
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const { register, handleSubmit, reset, formState: { errors } } = useForm({
		resolver: u(formSchema),
		defaultValues: {
			name: "",
			category: "Suggestion",
			message: ""
		}
	});
	const { data: items = initialFeedback, isLoading } = useQuery({
		queryKey: ["feedback"],
		queryFn: async () => {
			try {
				const res = await fetch(APPS_SCRIPT_URL);
				if (!res.ok) throw new Error("Failed to fetch feedback");
				const json = await res.json();
				return json.items && json.items.length > 0 ? json.items : initialFeedback;
			} catch (err) {
				console.warn("Using fallback feedback:", err);
				return initialFeedback;
			}
		},
		staleTime: 6e4
	});
	const onSubmit = async (data) => {
		setIsSubmitting(true);
		try {
			await fetch(APPS_SCRIPT_URL, {
				method: "POST",
				headers: { "Content-Type": "text/plain;charset=utf-8" },
				body: JSON.stringify(data)
			});
			toast.success("Feedback submitted. Thank you for shaping Anydown.");
			reset();
			queryClient.invalidateQueries({ queryKey: ["feedback"] });
		} catch (error) {
			toast.error("Failed to submit feedback. Please try again.");
			console.error(error);
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "feedback",
		className: "flex flex-col w-full bg-[#050505] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] scroll-mt-[60px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			label: "[08] // FEEDBACK",
			title: "SHAPE\nANYDOWN.",
			subtitle: "SUBMIT BUGS, FEATURE REQUESTS, OR SUGGESTIONS. HELP SHAPE THE NEXT RELEASE."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col lg:flex-row w-full gap-8 md:gap-[48px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit(onSubmit),
				className: "flex flex-col gap-6 w-full lg:w-[420px] lg:shrink-0 p-6 md:p-[32px] bg-[#111111] border border-[#2D2D2D]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-ibm-mono text-[11px] font-bold text-[#888888] tracking-[2px]",
								children: "NAME (OPTIONAL)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								...register("name"),
								type: "text",
								placeholder: "ANONYMOUS",
								className: "w-full h-[48px] px-4 bg-[#0A0A0A] border border-[#2D2D2D] font-ibm-mono text-[13px] text-[#F5F5F0] tracking-[1px] placeholder:text-[#444444] focus:border-[#FFD600] focus:outline-none transition-colors"
							}),
							errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-ibm-mono text-[11px] text-[#FF6B35]",
								children: errors.name.message
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-ibm-mono text-[11px] font-bold text-[#888888] tracking-[2px]",
								children: "CATEGORY"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								...register("category"),
								className: "w-full h-[48px] px-4 bg-[#0A0A0A] border border-[#2D2D2D] font-ibm-mono text-[13px] text-[#F5F5F0] tracking-[1px] focus:border-[#FFD600] focus:outline-none transition-colors appearance-none",
								style: { backgroundImage: "none" },
								children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: cat,
									children: cat.toUpperCase()
								}, cat))
							}),
							errors.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-ibm-mono text-[11px] text-[#FF6B35]",
								children: errors.category.message
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "font-ibm-mono text-[11px] font-bold text-[#888888] tracking-[2px]",
								children: "MESSAGE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								...register("message"),
								rows: 5,
								placeholder: "TELL US WHAT YOU THINK...",
								className: "w-full p-4 bg-[#0A0A0A] border border-[#2D2D2D] font-ibm-mono text-[13px] text-[#F5F5F0] tracking-[1px] placeholder:text-[#444444] focus:border-[#FFD600] focus:outline-none transition-colors resize-none"
							}),
							errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-ibm-mono text-[11px] text-[#FF6B35]",
								children: errors.message.message
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: isSubmitting,
						className: "flex items-center justify-center w-full h-[56px] bg-[#FFD600] hover:bg-[#e6c200] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-grotesk text-[12px] font-bold text-[#0A0A0A] tracking-[2px]",
							children: isSubmitting ? "TRANSMITTING..." : "SUBMIT FEEDBACK"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col w-full gap-[2px] border border-[#2D2D2D] bg-[#2D2D2D]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between h-[56px] px-5 md:px-[24px] bg-[#111111] border-b border-b-[#2D2D2D]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-grotesk text-[12px] font-bold text-[#888888] tracking-[2px]",
						children: [
							"RECENT SUBMISSIONS (",
							items.length,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-ibm-mono text-[10px] text-[#555555]",
						children: "COMMUNITY FEED"
					})]
				}), isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center h-[200px] bg-[#0A0A0A]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-ibm-mono text-[12px] text-[#555555] tracking-[1px]",
						children: "LOADING SUBMISSIONS..."
					})
				}) : items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center h-[200px] bg-[#0A0A0A]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-ibm-mono text-[12px] text-[#555555] tracking-[1px]",
						children: "NO SUBMISSIONS YET. BE THE FIRST."
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col max-h-[560px] overflow-y-auto bg-[#0A0A0A]",
					children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 p-5 md:p-[24px] border-b border-b-[#1D1D1D] last:border-b-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-center w-[40px] h-[40px] shrink-0 bg-[#FFD600]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-grotesk text-[14px] font-bold text-[#0A0A0A]",
								children: getInitial(item.name)
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 flex-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2 md:gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-grotesk text-[14px] font-bold text-[#F5F5F0] tracking-[1px]",
										children: item.name || "Anonymous"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-ibm-mono text-[10px] tracking-[1.5px] px-[8px] py-[2px] border",
										style: {
											color: item.category === "Bug" ? "#FF6B35" : item.category === "Feature" ? "#FFD600" : item.category === "Suggestion" ? "#60A5FA" : "#888888",
											borderColor: item.category === "Bug" ? "#FF6B35" : item.category === "Feature" ? "#FFD600" : item.category === "Suggestion" ? "#60A5FA" : "#888888"
										},
										children: item.category.toUpperCase()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-ibm-mono text-[11px] text-[#444444] tracking-[1px]",
										children: formatDate(item.timestamp)
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-ibm-mono text-[13px] md:text-[13px] text-[#888888] tracking-[1px] leading-[1.65] break-words",
								children: item.message
							})]
						})]
					}, `${item.timestamp}-${i}`))
				})]
			})]
		})]
	});
}
var faqs = [
	{
		question: "IS ANYDOWN REALLY FREE TO USE?",
		answer: "YES. ANYDOWN IS 100% FREE AND OPEN SOURCE. NO CREDIT CARD REQUIRED. NO ADS, NO TRACKING, NO PREMIUM TIERS. DOWNLOAD UNLIMITED VIDEOS, AUDIO, AND MORE."
	},
	{
		question: "DO I NEED TO INSTALL ANYTHING?",
		answer: "JUST DOWNLOAD THE APK OR BUILD FROM SOURCE. ONCE INSTALLED, EVERYTHING RUNS LOCALLY ON YOUR PHONE. NO SERVERS, NO ACCOUNT, NO PERMISSIONS BEYOND STORAGE."
	},
	{
		question: "WHAT SITES ARE SUPPORTED?",
		answer: "YOUTUBE, INSTAGRAM, TIKTOK, TWITTER, TWITCH, AND MOST OTHER VIDEO PLATFORMS. IF YT-DLP SUPPORTS IT, ANYDOWN DOES TOO."
	},
	{
		question: "WHAT PLATFORMS ARE SUPPORTED?",
		answer: "ANDROID 7+ IS FULLY SUPPORTED WITH NATIVE PYTHON EXECUTION VIA CHAQUOPY. IOS SUPPORT IS COMING SOON."
	},
	{
		question: "DOES IT WORK OFFLINE?",
		answer: "YES. AFTER INSTALLATION, ANYDOWN RUNS ENTIRELY OFFLINE. NO INTERNET CONNECTION NEEDED EXCEPT TO DOWNLOAD VIDEOS. ALL PROCESSING HAPPENS ON YOUR DEVICE."
	}
];
function FAQ() {
	const [openIndex, setOpenIndex] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "faq",
		className: "flex flex-col w-full bg-[#060606] py-16 px-5 sm:px-6 md:py-[100px] md:px-[120px] scroll-mt-[60px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full max-w-[480px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					label: "[05] // FAQ",
					title: "GOT\nQUESTIONS?",
					subtitle: "EVERYTHING YOU NEED TO KNOW BEFORE FETCHING YOUR FIRST VIDEO.",
					titleWidth: "w-full",
					subtitleWidth: "w-full"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 md:h-[64px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col w-full",
				children: [faqs.map((faq, i) => {
					const isOpen = openIndex === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col w-full border-t border-t-[#1D1D1D]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex items-center justify-between w-full py-5 md:h-[72px] text-left gap-4",
							onClick: () => setOpenIndex(isOpen ? -1 : i),
							"aria-expanded": isOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-grotesk text-[14px] md:text-[16px] font-bold text-[#F5F5F0] tracking-[1px]",
								children: faq.question
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-center w-[32px] h-[32px] shrink-0 transition-colors",
								style: {
									backgroundColor: isOpen ? "#FFD600" : "#1A1A1A",
									border: isOpen ? "none" : "1px solid #3D3D3D"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-ibm-mono text-[14px] font-bold",
									style: { color: isOpen ? "#0A0A0A" : "#888888" },
									children: isOpen ? "—" : "+"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid transition-all duration-300 ease-out",
							style: {
								gridTemplateRows: isOpen ? "1fr" : "0fr",
								opacity: isOpen ? 1 : 0
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-ibm-mono text-[13px] md:text-[13px] text-[#888888] tracking-[1px] leading-[1.65] pb-8",
									children: faq.answer
								})
							})
						})]
					}, faq.question);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-t-[#1D1D1D]" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-[16px] pt-10 md:pt-[48px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-ibm-mono text-[13px] text-[#555555] tracking-[1px]",
					children: "STILL HAVE QUESTIONS?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#",
					className: "font-ibm-mono text-[13px] font-bold text-[#FFD600] tracking-[1px] hover:underline",
					children: "TALK TO A DEVELOPER >"
				})]
			})
		]
	});
}
var columns = [
	{
		heading: "APP",
		links: [
			{
				label: "LATEST APK",
				href: "#"
			},
			{
				label: "SOURCE CODE",
				href: "#"
			},
			{
				label: "CHANGELOG",
				href: "#updates"
			},
			{
				label: "MANIFESTO",
				href: "#credits"
			}
		]
	},
	{
		heading: "DEVELOPER",
		links: [
			{
				label: "PORTFOLIO",
				href: "#"
			},
			{
				label: "GITHUB",
				href: "#"
			},
			{
				label: "REPORT A BUG",
				href: "#feedback"
			}
		]
	},
	{
		heading: "TECH & LEGAL",
		links: [
			{
				label: "YT-DLP CORE",
				href: "https://github.com/yt-dlp/yt-dlp"
			},
			{
				label: "PRIVACY POLICY",
				href: "#"
			},
			{
				label: "LICENSE",
				href: "#"
			}
		]
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "flex flex-col w-full bg-[#050505]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col md:flex-row gap-12 md:gap-[80px] px-5 sm:px-6 md:px-[120px] py-12 md:py-[64px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 md:w-[280px] md:shrink-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-[12px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.png",
							alt: "anydown logo",
							width: 36,
							height: 36,
							className: "w-[36px] h-[36px] shrink-0 object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-grotesk text-[16px] font-bold text-[#FFD600] tracking-[3px]",
							children: "ANYDOWN"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-ibm-mono text-[11px] text-[#888888] tracking-[1px] leading-[1.6] max-w-[260px]",
						children: "THE BARE-METAL MEDIA EXTRACTOR. BUILT FOR UTILITY, PRIVACY, AND ZERO COMPROMISES."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-[12px]",
						children: [
							"GH",
							"X",
							"DEV"
						].map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "flex items-center justify-center w-[36px] h-[36px] bg-[#111111] border border-[#2D2D2D] hover:border-[#888888] transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-grotesk text-[10px] font-bold text-[#AAAAAA]",
								children: label
							})
						}, label))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-1 gap-8 md:gap-[80px]",
				children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 md:gap-[20px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-grotesk text-[11px] font-bold text-[#F5F5F0] tracking-[2px]",
						children: col.heading
					}), col.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "font-ibm-mono text-[12px] text-[#888888] tracking-[1px] hover:text-[#CCCCCC] transition-colors",
						children: link.label
					}, link.label))]
				}, col.heading))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center w-full px-5 sm:px-6 md:px-[120px] py-4 md:h-[56px] border-t border-t-[#1D1D1D]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-ibm-mono text-[11px] text-[#666666] tracking-[1px]",
				children: "© 2026 ANYDOWN SYSTEMS. ALL RIGHTS RESERVED."
			})
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex flex-col w-full bg-[#0A0A0A] pt-[60px] overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PixelDivider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bento, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comparison, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Updates, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Credits, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feedback, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
