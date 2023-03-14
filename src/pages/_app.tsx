import type { AppProps } from "next/app";
import awsExports from "../aws-exports";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure({ ...awsExports });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
