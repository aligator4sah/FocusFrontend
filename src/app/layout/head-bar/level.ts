export class level {
  id: number;
  name: string;
  lev?: string;
}

export const levels: level[] = [
  { id: 1, name: 'system', lev: 'sys'},
  { id: 2, name: 'state', lev: 'sta' },
  { id: 3, name: 'comunity', lev: 'com' },
  { id: 4, name: 'bhco', lev: 'bhco'},
  { id: 5, name: 'community member', lev: 'cmem'}
];
