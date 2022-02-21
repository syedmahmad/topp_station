import '../styles/globals.css';
import '../styles/globals.scss';

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
