<template>
    <section>
        <div class="main">

        <div class="title">
            <h3>O aplikaciji</h3>
        </div>
        <div class="desc">
            <p>Ideja same aplikacije bazira se na jednostavnoj upotrebi kao i na lakom pristupu korisnicima pri odabiru hrane.</p>
            <p>Aplikacija je 'responsive' i prilagodjava se svim uredjajima.</p>
            <p>Za potrebe projekta, koriscena je baza podataka sa veb sajta <strong><a href="https://apiforge.net/">ApiForge.net</a></strong>, koja se pokazala izuzetno pouzdanom i efikasnom u ovom trenutku.</p>
            <p>Korisnici u ovoj aplikaciji mogu da ostvare sledece funkcije:</p> 
        </div>
        <div class="list">
            <li>
                Kreiranje/prijavljivanje na nov nalog
            </li>
            <li>
                Pristup restoranima sa razlicitim jelima
            </li>
            <li>
                Odabir hrane, kao i odabir kolicine odredjene hrane
            </li>
            <li>
                Dodavanje/uklanjanje hrane iz korpe
            </li>
            <li>
                Zavrsetak kupovine
            </li>
        </div>
        <div class="desc2">
            <p>Projekat izradio <strong>Marko Pantovic</strong></p>
        </div>
    </div>

    </section>
</template>

<style scoped>
    section{
        display: flex;
        justify-content: center;
        min-height: 70vh;
        flex-direction: column;
        align-items: center;
        color:#fff;
        line-height: 40px;
        gap: 20px;
    }
    .main{
        margin-top: 30px;
        padding: 30px;
    }
    .title h3, strong{
        color:#66fcf1;
    }
     a{
        text-decoration: none;
        color:#66fcf1;

    }
    .list{
        text-align: left;
    }
    .desc2{
        margin-top: 20px;
    }
</style>