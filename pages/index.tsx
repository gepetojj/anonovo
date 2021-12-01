import { DateTime } from "luxon";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import { Balloons } from "../components/Balloons";
import { Countdown } from "../components/Countdown";

export interface ICountdown {
	months: number;
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	finished: boolean;
}

export default function Home() {
	const COUNTDOWN_END = `${
		DateTime.now().daysInYear > 2
			? DateTime.now().year + 1
			: DateTime.now().year
	}-01-01`;
	const [countdown, setCountdown] = useState<ICountdown>({
		months: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		finished: false,
	});

	useEffect(() => {
		const timeCheck = setInterval(() => {
			const { months, days, hours, minutes, seconds } = DateTime.fromISO(
				COUNTDOWN_END
			)
				.diff(DateTime.now(), [
					"months",
					"days",
					"hours",
					"minutes",
					"seconds",
				])
				.toObject();
			setCountdown({
				months,
				days,
				hours,
				minutes,
				seconds,
				finished:
					DateTime.now().toMillis() >
					DateTime.fromISO(COUNTDOWN_END).toMillis(),
			});
		}, 100);
		if (countdown.finished) clearInterval(timeCheck);

		return () => clearInterval(timeCheck);
	}, [countdown.finished, COUNTDOWN_END]);

	return (
		<>
			<Head>
				<title>
					{countdown.finished &&
						`Feliz ${DateTime.fromISO(COUNTDOWN_END).year}!`}
				</title>
			</Head>
			<div className="flex flex-col w-screen h-screen p-6 bg-yellow-main dark:bg-black-main text-black-main dark:text-yellow-main">
				{countdown.finished ? (
					<>
						<Balloons density={15} />
						<div className="flex flex-col justify-center items-center w-full h-full">
							<h1 className="text-5xl font-semibold text-center z-[3]">
								Feliz ano novo!
							</h1>
						</div>
					</>
				) : (
					<Countdown {...countdown} />
				)}
			</div>
		</>
	);
}
