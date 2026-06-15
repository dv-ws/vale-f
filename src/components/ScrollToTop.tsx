import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { brand } from '../data/content';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const current = pathname === '/' ? brand.tabName : `${brand.tabName} | ${pathname.replace('/', '')}`;
    document.title = current
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }, [pathname]);

  return null;
}
