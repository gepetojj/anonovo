import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="pt-br">
				<Head>
					<meta name="title" content="Feliz ano novo!" />
					<meta
						name="description"
						content="Comemore o ano novo com este cronômetro leve e elegante."
					/>

					<meta property="og:type" content="website" />
					<meta
						property="og:url"
						content="https://anonovo.vercel.app/"
					/>
					<meta property="og:title" content="Feliz ano novo!" />
					<meta
						property="og:description"
						content="Comemore o ano novo com este cronômetro leve e elegante."
					/>

					<meta
						property="twitter:card"
						content="summary_large_image"
					/>
					<meta
						property="twitter:url"
						content="https://anonovo.vercel.app/"
					/>
					<meta property="twitter:title" content="Feliz ano novo!" />
					<meta
						property="twitter:description"
						content="Comemore o ano novo com este cronômetro leve e elegante."
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
