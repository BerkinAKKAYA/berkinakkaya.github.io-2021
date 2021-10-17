import Head from "next/head";
import "../styles/globals.css";
import TransitionLayout from "./TransitionLayout.js";
import Router from "next/router";

function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					media="screen"
					href="https://fontlibrary.org//face/fantasque-sans-mono"
					type="text/css"
				/>
			</Head>

			<TransitionLayout>
				<Component {...pageProps} />
			</TransitionLayout>
		</>
	);
}

export default App;

const routeChange = () => {
	// Temporary fix to avoid flash of unstyled content
	// during route transitions. Keep an eye on this
	// issue and remove this code when resolved:
	// https://github.com/vercel/next.js/issues/17464

	const tempFix = () => {
		const allStyleElems = document.querySelectorAll('style[media="x"]');
		console.log(allStyleElems);
		allStyleElems.forEach((elem) => {
			elem.removeAttribute("media");
		});
	};
	tempFix();
};

Router.events.on("routeChangeComplete", routeChange);
Router.events.on("routeChangeStart", routeChange);
