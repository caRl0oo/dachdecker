interface NavItem {
  name: string;
  path: string;
}

export const navItems: NavItem[] = [
  { name: 'Startseite', path: '/' },
  { name: 'Leistungen', path: '/leistungen' },
  { name: 'Über uns', path: '/ueber-uns' },
  { name: 'Kontakt', path: '/kontakt' },
]; 