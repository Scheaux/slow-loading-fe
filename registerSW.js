if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/slow-loading-fe/sw.js', { scope: '/slow-loading-fe/' })})}