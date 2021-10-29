import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
import { useTranslation } from '../hooks';

const generateBreadcrumbs = (breadcrumbs: Breadcrumb[]) => {
  return breadcrumbs
    ? breadcrumbs.map((breadcrumb, i) =>
        <li key={i}>
          <Link to={breadcrumb.link}>{breadcrumb.name}</Link>
        </li>
      )
    :
    null;
}

export interface Breadcrumb {
  link: string;
  name: string;
}

const Breadcrumbs = ({
  title,
  breadcrumbs
}: { title: string, breadcrumbs?: Breadcrumb[] }): ReactElement => {
  const { menu: translations } = useTranslation();
  return (
  <ul className="breadcrumb">
    <li><Link to={translations.homeLink}>{translations.home}</Link></li>
    {breadcrumbs ? generateBreadcrumbs(breadcrumbs) : null}
    <li className="active">{title}</li>
  </ul>
  )
}
export default Breadcrumbs