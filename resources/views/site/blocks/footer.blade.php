<footer class="footer">
    <p class="footer__company">
        <span>© {{ date('Y') }} ООО «Компания»</span><br>
    </p>

    <div class="footer__developers">
        <div class="footer__developers-logo">
            <img src="{{ asset('img/layout/2i-logo.svg') }}" alt="Логотип диджитал-агентства «2И»">
        </div>
        <p class="footer__developers-text">
            <x-link color="contacts" href="http://studio2i.ru" target="_blank">Создание сайта</x-link>
            <span>&nbsp;—</span><br>
            <span>диджитал-агентство «2И»</span>
        </p>
    </div>
</footer>
