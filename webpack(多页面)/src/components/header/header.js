require('header-style');
const url = 'http://10.23.48.45:5500';
$('#header').html(`
    <ul>
        <li><a href="/index.html" >首页</a></li>
        <li><a href="${url}/static/pages/home.html" >家</a></li>
        <li><a href="${url}/static/pages/about.html" >关于我们</a></li>
    </ul>`)