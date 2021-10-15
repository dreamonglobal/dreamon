import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import Logo from './logo';
import Menu from './menu';

const Header = () => {
  const [visible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        setIsVisible(window.scrollY > 300 ? true : false)
      })
    }
  }, [])

  return (
      <>
        <Helmet>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Pathway+Gothic+One|Roboto:400,400i,600,600i,700,700i" />
        </Helmet>
        <header className={visible ? 'header-area fixed-menu' : 'header-area'}>
            <div className="container">
                <div className="row">
                    <Logo />
                    <Menu />
                </div>
            </div>
        </header>
      </>
    )
}

export default Header;
