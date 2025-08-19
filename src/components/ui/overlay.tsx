import React from "react";

interface Overlay {
	opacity: number;
	zIndex: number;
	maskGradient: string;
	blur: number;
}

interface OverlayProps {
	layers?: Overlay[];
}

const Overlay = ({ layers = defaultLayers }: OverlayProps) => {
	return (
		<div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-[100px] overflow-hidden">
			<div className="absolute inset-0 overflow-hidden">
				{layers.map((layer, index) => (
					<div
						className="absolute inset-0 will-change-auto"
						key={`layer-${index}`}
						style={{
							opacity: layer.opacity,
							zIndex: layer.zIndex,
							maskImage: `linear-gradient(${layer.maskGradient})`,
							backdropFilter: `blur(${layer.blur}px)`,
						}}
					/>
				))}
			</div>
		</div>
	);
};

const defaultLayers: Overlay[] = [
	{ opacity: 1, zIndex: 21, maskGradient: "rgba(0, 0, 0, 0) 0%,    rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%,   rgba(0, 0, 0, 0) 37.5%", blur: 0.0546875 },
	{ opacity: 1, zIndex: 22, maskGradient: "rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%,   rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%", blur: 0.109375 },
	{ opacity: 1, zIndex: 23, maskGradient: "rgba(0, 0, 0, 0) 25%,   rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%,   rgba(0, 0, 0, 0) 62.5%", blur: 0.21875 },
	{ opacity: 1, zIndex: 24, maskGradient: "rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%,   rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%", blur: 0.4375 },
	{ opacity: 1, zIndex: 25, maskGradient: "rgba(0, 0, 0, 0) 50%,   rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%,   rgba(0, 0, 0, 0) 87.5%", blur: 0.875 },
	{ opacity: 1, zIndex: 26, maskGradient: "rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%,   rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%", blur: 1.75 },
	{ opacity: 1, zIndex: 27, maskGradient: "rgba(0, 0, 0, 0) 75%,   rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%", blur: 3.5 },
	{ opacity: 1, zIndex: 28, maskGradient: "rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%", blur: 7 },
];

export default Overlay;
