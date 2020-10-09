function table_builder( sigane=100, 
    simaghle=100, 
    foni="red", 
    sazghvari=1){
table = `<table   style="width: `+sigane+`px; 
 height: `+simaghle+`px; 
 background:`+foni+`"';
 border="`+sazghvari+`" 
 cellpadding="0"
 cellspacing="0" 
>`;
table += `<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>`;
table += '</table>';
document.write(table);
}


table_builder(700, 200, "blue", 10);

document.write("<hr>")