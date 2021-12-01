import Head from "next/head";
import React from "react";
import "tailwindcss/tailwind.css";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Feliz ano novo!</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
