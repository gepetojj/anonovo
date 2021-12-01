import Head from "next/head";
import React, { FC, memo } from "react";

import { ICountdown } from "../pages/index";

const CountdownComponent: FC<Omit<ICountdown, "finished">> = ({
	months,
	days,
	hours,
	minutes,
	seconds,
}) => {
	const formattedHours = hours >= 10 ? hours : `0${hours}`;
	const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;
	const formattedSeconds =
		seconds >= 10
			? seconds.toString().split(".")[0]
			: `0${seconds.toString().split(".")[0]}`;

	return (
		<div className="flex flex-col w-full h-full justify-center items-center">
			{months > 0 && (
				<div className="flex flex-col justify-center items-center">
					<Head>
						<title>
							{months} {months === 1 ? "mês" : "meses"} - Contagem
							para o fim do ano.
						</title>
					</Head>
					<h1 className="text-7xl font-bold text-center animate-bounce">
						{months} {months === 1 ? "mês" : "meses"}
					</h1>
					<h3 className="text-xl font-medium text-center pt-6">
						Ainda {months === 1 ? "resta" : "restam"} mais de{" "}
						{months} {months === 1 ? "mês" : "meses"} para o final
						do ano.
					</h3>
				</div>
			)}
			{days > 0 && months < 1 && (
				<div className="flex flex-col justify-center items-center">
					<Head>
						<title>
							{days} {days === 1 ? "dia" : "dias"} - Contagem para
							o fim do ano.
						</title>
					</Head>
					<h1 className="text-7xl font-bold text-center animate-bounce">
						{days} {days === 1 ? "dia" : "dias"}
					</h1>
					<h3 className="text-xl font-medium text-center pt-6">
						Ainda {days === 1 ? "resta" : "restam"} mais de {days}{" "}
						{days === 1 ? "dia" : "dias"} para o final do ano.
					</h3>
				</div>
			)}
			{hours > 0 && days < 1 && months < 1 && (
				<div className="flex flex-col justify-center items-center">
					<Head>
						<title>
							{hours} {hours === 1 ? "hora" : "horas"} - Contagem
							para o fim do ano.
						</title>
					</Head>
					<h1 className="text-7xl font-bold text-center">
						{hours} {hours === 1 ? "hora" : "horas"}
					</h1>
					<h3 className="text-3xl font-medium text-center pt-6 animate-pulse-1/2">
						{formattedHours}:{formattedMinutes}:{formattedSeconds}
					</h3>
				</div>
			)}
			{minutes > 0 && hours < 1 && days < 1 && months < 1 && (
				<div className="flex flex-col justify-center items-center">
					<Head>
						<title>
							{formattedMinutes}:{formattedSeconds} - Contagem
							para o fim do ano.
						</title>
					</Head>
					<h1 className="text-7xl font-bold text-center">
						{minutes} {minutes === 1 ? "minuto" : "minutos"}
					</h1>
					<h3 className="text-3xl font-medium text-center pt-6 animate-pulse-1/2">
						{formattedMinutes}:{formattedSeconds}
					</h3>
				</div>
			)}
			{seconds > 0 && minutes < 1 && hours < 1 && days < 1 && months < 1 && (
				<div className="flex flex-col justify-center items-center">
					<Head>
						<title>{seconds.toFixed(0)} - Minuto final!</title>
					</Head>
					{seconds > 10 ? (
						<h1 className="text-8xl font-bold text-center animate-pulse-1/2">
							{seconds.toFixed(0)}
						</h1>
					) : (
						<h1 className="text-[10rem] font-bold text-center animate-ping-1/2">
							{seconds.toFixed(0)}
						</h1>
					)}
				</div>
			)}
		</div>
	);
};

export const Countdown = memo(CountdownComponent);
