import React, { FC, memo, useCallback, useEffect, useState } from "react";

export interface IBalloonProps {
	id: string;
	color: "red" | "green" | "blue";
	animationNumber?: number;
}

export interface IBalloonsProps {
	density: "infinite" | number;
}

const BalloonsComponent: FC<IBalloonsProps> = ({ density }) => {
	const MAX_BALLOONS = 1000;
	const [balloons, setBalloons] = useState<IBalloonProps[]>([]);

	const Balloon: FC<IBalloonProps> = ({ id, color, animationNumber }) => {
		useEffect(() => {
			const delay = randomNumber(800, 900);
			const x = randomNumber(-98, -1);
			const y = randomNumber(-10, -1);

			const animationSequence: Keyframe[] = [
				{
					offset: 0,
					transform: "rotateZ(45deg) translate(0, 0)",
				},
			];

			const animNumber = animationNumber
				? animationNumber
				: randomNumber(0, 2);
			if (animNumber === 0) {
				animationSequence.push(
					{
						offset: x / -200,
						transform: `rotateZ(45deg) translate(${x}vw, 10vh)`,
					},
					{
						offset: (x + y) / -200,
						transform: `rotateZ(45deg) translate(${x}vw, ${y}vh)`,
					},
					{
						offset: (-100 + y) / -200,
						transform: `rotateZ(45deg) translate(-100vw, ${y}vh)`,
					}
				);
			} else if (animNumber === 1) {
				animationSequence.push(
					{
						offset: y / -200,
						transform: `rotateZ(45deg) translate(${y}vw, 5vh)`,
					},
					{
						offset: (x + y) / -200,
						transform: `rotateZ(45deg) translate(100vw, ${y}vh)`,
					},
					{
						offset: (-100 + x) / -200,
						transform: `rotateZ(45deg) translate(${x}vw, 70vh)`,
					}
				);
			} else {
				animationSequence.push(
					{
						offset: y / -200,
						transform: `rotateZ(45deg) translate(${y}vw, 12vh)`,
					},
					{
						offset: (x + y) / -200,
						transform: `rotateZ(45deg) translate(${x}vw, ${y}vh)`,
					},
					{
						offset: (-100 + x) / -200,
						transform: `rotateZ(45deg) translate(${x}vw, -80vh)`,
					}
				);
			}

			animationSequence.push({
				offset: 1,
				transform: "rotateZ(45deg) translate(-100vw, -100vh)",
			});

			document.getElementById(id).animate(animationSequence, {
				duration: 20000,
				delay,
				iterations: 1000,
			});
		}, [id, animationNumber]);

		return (
			<div
				id={id}
				className={`balloon ${
					color === "red"
						? "bg-alt-red"
						: color === "green"
						? "bg-alt-green"
						: "bg-alt-blue"
				} opacity-90`}
			>
				<div className="balloon-string bg-black-main dark:bg-alt-white"></div>
			</div>
		);
	};

	const randomNumber = (min: number, max: number) => {
		return Math.round(Math.random() * (max - min) + min);
	};

	const generateBalloons = useCallback(() => {
		setBalloons([]);
		const COLORS: IBalloonProps["color"][] = ["red", "green", "blue"];

		if (density !== "infinite") {
			let animation = 0;
			for (
				let limit = 0;
				limit < (density > MAX_BALLOONS ? MAX_BALLOONS : density);
				limit++
			) {
				animation = animation + 1;
				if (animation > 2) animation = 0;
				setBalloons((balloons) => [
					...balloons,
					{
						id: limit.toString(),
						color: COLORS[randomNumber(0, COLORS.length - 1)],
						animationNumber: animation,
					},
				]);
			}
		} else {
			for (let limit = 0; limit < MAX_BALLOONS; limit++) {
				setBalloons((balloons) => [
					...balloons,
					{
						id: limit.toString(),
						color: COLORS[randomNumber(0, COLORS.length - 1)],
					},
				]);
			}
		}
	}, [density]);

	useEffect(() => {
		generateBalloons();
	}, [generateBalloons]);

	return (
		<>
			{balloons.map((props) => (
				<Balloon key={props.id} {...props} />
			))}
		</>
	);
};

export const Balloons = memo(BalloonsComponent);
