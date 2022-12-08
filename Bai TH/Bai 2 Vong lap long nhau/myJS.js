let sout;
sout = "<table border='1'; width='300px'; cellspacing='0'; cellpadding='3'>"
// for (i = 1; i <= 2; i++) {
//     sout = sout + "<tr>";
//     document.write(sout);
//     for (j = 1; j <= 2; j++) {
//         sout = sout + "<td>" + i * j + "</td>";
//     }
//     sout = sout + "</tr>";
// }
// sout = sout + "</table>";
//
// document.write(sout)
let i, j;

i = j = 1;

while (i <= 2) {
    sout = sout + "<tr>";
    while (j <= 2) {
        sout = sout + "<td>" + i * j + "</td>";
        j++;
    }
    sout = sout + "</tr>";
    j = 1;
    i++;
}
sout = sout + "</table>";
document.write(sout);

