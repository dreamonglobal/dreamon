import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from '../hooks';

function generateBreadcrumbs(breadcrumbs) {
  return breadcrumbs
    ? breadcrumbs.map((breadcrumb, i) =>
        <li key={i}>
          <Link to={breadcrumb.link}>{breadcrumb.name}</Link>
        </li>
      )
    :
    null;
}

const Breadcrumbs = ({
  title,
  breadcrumbs
}) => {
  const { menu: translations } = useTranslation();
  return (
  <ul className="breadcrumb">
    <li><Link to={translations.homeLink}>{translations.home}</Link></li>
    {generateBreadcrumbs(breadcrumbs)}
    <li className="active">{title}</li>
  </ul>
  )
}
export default Breadcrumbs