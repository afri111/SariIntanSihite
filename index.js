

fetch('./dat.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Jaringan gagal atau file tidak ditemukan');
        }
        return response.json();
    })
    .then(val => {
        const un = val.dyga.u;
        const ps = val.dyga.p;
        const prop = val.dyga.o;

        console.log(un);
        console.log(ps);


        document.getElementById("nigform").addEventListener("submit", function (e) {
            e.preventDefault();

            const usn = document.getElementById("usn").value;
            const pass = document.getElementById("pass").value;

            if (usn == un && pass === ps) {
                sessionStorage.setItem("tklgn", "s4r-1int-4n51-h1t-3");
                window.location.href = "hbd.html";
            } else {
                alert("Username atau password salah!");
            }
        });

    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });



