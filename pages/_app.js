import "../styles/globals.css";
import Navigation from "../components/Navigation";
import { NotificationsProvider } from "@mantine/notifications";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NotificationsProvider>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </NotificationsProvider>
    </div>
  );
}

export default MyApp;
