console.log(100);
console.log('Reddit');

console.error('Alert');
console.warn('warning');
console.table({ name: 'Reddit', site: 'https://reddit.com' });
console.group('simple');
console.error('Alert');
console.warn('warning');
console.table({ name: 'Reddit', site: 'https://reddit.com' });
console.groupEnd('simple');

const styles = 'padding:10px; background-color: white; color: green';
console.log('%cHello World', styles);
