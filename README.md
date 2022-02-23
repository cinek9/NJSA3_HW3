
Dodać komunikację pomiędzy dwoma stronkami w następujący sposób:

1. Na Liście produktów tworzymy naszą listę produktów i zapisujemy w localstorage.
2. Na Liście zakupów wczytujemy tą listę i zapisujemy do local storage zakupy do osobnego pola.
3. Zrobić update dla local storage, gdy usuwamy produkt.

Home Works for Ninja Java Script Academy edition 3. 
Select suitable branch to watch My Homework

Git flow for home works:

Mamy główny branch: develop lub master. Tam trzymamy swoją aplikację.
Jak robimy jakieś zmiany do aplikacji, to wychodzimy z dev branch'a feature branch'em, czyli w Twoim przypadku:

1. main -> feature/home_work_cos_tam.
2. W branchu feature/home_work_cos_tam robimy zmiany.
3. Commit'ujemy wszystko:
git add 'nazwa pliku' i tak z każdym plikiem.
git commit -a -m 'nazwa commita'
4. git push
5. Robimy pull request feature/home_work_cos_tam -> main
6. Wysyłasz do mnie.
7.a Jeżeli wszystko ok, to w PR mergujesz te zmiany.
8.b Jeżeli nie to robisz poprawki i push'ujesz, poprawki mają się pojawić na PR.
9. wracamy do kroku 5.

