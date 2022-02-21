// import '../styles/globals.css';
// import '../styles/globals.scss';

import "../public/bootstrap.min.css";
import "../public/swiper.min.css";


import "../styles/stylesheets/style.css";
import "../styles/stylesheets/affiliate.styles.css";
import '../styles/stylesheets/blog.css';
import "../styles/stylesheets/blog.css";
import '../styles/stylesheets/business-formation.styles.css';
import '../styles/stylesheets/join-our-network.css';
import '../styles/stylesheets/faq.styles.css';
import "../styles/stylesheets/contact.styles.css";
import '../styles/stylesheets/limited-liability.styles.css';
import '../styles/stylesheets/style.css';
import "../styles/stylesheets/search.css";

import "../styles/stylesheets/home.styles.scss";
import "../styles/stylesheets/header.styles.scss";
import "../styles/stylesheets/footer.styles.scss";


import Wrapper from "../src/components/Wrapper";
import HeadWrapper from '../src/singleton/headWrapper';
import { BlogProvider } from '../src/context/BlogState';

function MyApp({ Component, pageProps }) {
  return (
    <BlogProvider>
      <HeadWrapper componentName={Component.name} />
      <Wrapper>
        <Component {...pageProps } />
      </Wrapper>
    </BlogProvider>)
}

export default MyApp
