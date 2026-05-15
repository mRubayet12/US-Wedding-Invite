import { useEffect } from "react";
import { motion } from "framer-motion";

const up = (delay) => ({
	initial: { opacity: 0, y: 10 },
	animate: { opacity: 1, y: 0 },
	transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});
const fade = (delay) => ({
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	transition: { delay, duration: 0.6 },
});

function Rule({ delay }) {
	return (
		<motion.div
			{...fade(delay)}
			style={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				gap: 12,
				margin: "14px 0",
			}}
		>
			<div
				style={{
					flex: 1,
					height: "0.5px",
					background: "#8B5E3C",
					opacity: 0.4,
				}}
			/>
			<div
				style={{
					width: 5,
					height: 5,
					background: "#8B5E3C",
					transform: "rotate(45deg)",
					opacity: 0.6,
					flexShrink: 0,
				}}
			/>
			<div
				style={{
					flex: 1,
					height: "0.5px",
					background: "#8B5E3C",
					opacity: 0.4,
				}}
			/>
		</motion.div>
	);
}

export default function WeddingInvitationRustic() {
	useEffect(() => {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href =
			"https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Cinzel:wght@400;500&display=swap";
		document.head.appendChild(link);
		return () => document.head.removeChild(link);
	}, []);

	const cinzel = { fontFamily: "'Cinzel', serif" };
	const vibes = { fontFamily: "'Great Vibes', cursive" };
	const brown = "#4A2910";
	const mid = "#6B4226";
	const light = "#8B5E3C";

	return (
		<div
			style={{
				// FIX: use min-height + width 100% so it fills the whole page on PC without black bars
				minHeight: "100svh",
				width: "100%",
				background: "#F2E8D5",
				backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				fontFamily: "'Cormorant Garamond', serif",
				padding: "40px 20px",
				boxSizing: "border-box",
			}}
		>
			<div
				style={{
					width: "min(86vw, 320px)",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "center",
				}}
			>
				{/* Eyebrow */}
				<motion.div
					{...up(0.2)}
					style={{
						...cinzel,
						fontSize: 10,
						letterSpacing: 3,
						color: mid,
						textTransform: "uppercase",
						marginBottom: 16,
					}}
				>
					Together with their parents
				</motion.div>

				{/* Groom */}
				<motion.div
					{...up(0.3)}
					style={{
						...vibes,
						fontSize: "clamp(28px,7.5vw,38px)",
						color: brown,
						lineHeight: 1.1,
						marginBottom: 2,
						whiteSpace: "nowrap",
					}}
				>
					Md Reazul Islam
				</motion.div>

				<motion.div
					{...fade(0.38)}
					style={{
						...cinzel,
						fontSize: 10,
						letterSpacing: 4,
						color: light,
						textTransform: "uppercase",
						margin: "8px 0",
					}}
				>
					and
				</motion.div>

				{/* Bride */}
				<motion.div
					{...up(0.45)}
					style={{
						...vibes,
						fontSize: "clamp(28px,7.5vw,38px)",
						color: brown,
						lineHeight: 1.1,
						marginBottom: 20,
					}}
				>
					Fahima Hossain
				</motion.div>

				{/* Invite line */}
				<motion.div
					{...up(0.6)}
					style={{
						...cinzel,
						fontSize: 9.5,
						letterSpacing: 1.5,
						color: mid,
						lineHeight: 1.9,
						textTransform: "uppercase",
						width: "100%",
					}}
				>
					invite you to celebrate their wedding reception
				</motion.div>

				<Rule delay={0.75} />

				{/* Date — 3-column layout */}
				<motion.div
					{...up(0.78)}
					style={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: 16,
						padding: "6px 0",
					}}
				>
					{/* Left: Monday */}
					<div style={{ flex: 1, textAlign: "right" }}>
						<div
							style={{
								width: "100%",
								height: "0.5px",
								background: "#8B5E3C",
								opacity: 0.4,
								marginBottom: 8,
							}}
						/>
						<div
							style={{
								...cinzel,
								fontSize: 9,
								letterSpacing: 2,
								color: mid,
								textTransform: "uppercase",
							}}
						>
							Monday
						</div>
					</div>

					{/* Center: June / 29 / 2026 */}
					<div style={{ textAlign: "center", flexShrink: 0 }}>
						<div
							style={{
								...cinzel,
								fontSize: 9,
								letterSpacing: 3,
								color: light,
								textTransform: "uppercase",
								marginBottom: 2,
							}}
						>
							June
						</div>
						<div
							style={{
								fontFamily: "'Cormorant Garamond', serif",
								fontSize: "clamp(52px, 14vw, 68px)",
								fontWeight: 400,
								color: brown,
								lineHeight: 0.95,
								letterSpacing: -2,
							}}
						>
							29
						</div>
						<div
							style={{
								...cinzel,
								fontSize: 9,
								letterSpacing: 3,
								color: light,
								textTransform: "uppercase",
								marginTop: 4,
							}}
						>
							2026
						</div>
					</div>

					{/* Right: 7:00 PM */}
					<div style={{ flex: 1, textAlign: "left" }}>
						<div
							style={{
								width: "100%",
								height: "0.5px",
								background: "#8B5E3C",
								opacity: 0.4,
								marginBottom: 8,
							}}
						/>
						<div
							style={{
								...cinzel,
								fontSize: 9,
								letterSpacing: 2,
								color: mid,
								textTransform: "uppercase",
							}}
						>
							7:00 PM
						</div>
					</div>
				</motion.div>

				<Rule delay={0.95} />

				{/* Venue */}
				<motion.div {...up(0.95)} style={{ width: "100%" }}>
					{/* FIX: "Venue" label added above venue name */}
					<div
						style={{
							...cinzel,
							fontSize: 8,
							letterSpacing: 3.5,
							color: light,
							textTransform: "uppercase",
							marginBottom: 6,
							opacity: 0.8,
						}}
					>
						Venue
					</div>
					<div
						style={{
							...cinzel,
							fontSize: 11,
							letterSpacing: 2,
							color: brown,
							textTransform: "uppercase",
							marginBottom: 6,
							fontWeight: 500,
						}}
					>
						Gulshan Shooting Club
					</div>
					<div
						style={{
							...cinzel,
							fontSize: 9.5,
							letterSpacing: 1.5,
							color: mid,
							lineHeight: 2,
							textTransform: "uppercase",
						}}
					>
						Gulshan Avenue, Beside Police Plaza
						<br />
						Bangladesh, Dhaka-1212
					</div>
				</motion.div>

				<Rule delay={1.05} />

				{/* RSVP */}
				<motion.div
					{...up(1.1)}
					style={{ textAlign: "center", paddingBottom: 8 }}
				></motion.div>
			</div>
		</div>
	);
}
