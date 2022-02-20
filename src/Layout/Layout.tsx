import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

const Layout: React.FC = props => {
  return (
    <>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </>
  );
};

export default Layout;
