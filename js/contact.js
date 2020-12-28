function Validate() {
    let fname = document.forms["form_id"]["first_name"].value;
    let sname = document.forms["form_id"]["second_name"].value;
    let email = document.forms["form_id"]["email"].value;
    let regular = new RegExp("[А-Я]{1}|A-Z]{1}[а-я]{4,23}|[a-z]{4,23}");
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
   
    if (regular.test(fname) == false) {
        alert("firstname does not meet standards");
        return false;
    }
    if (regular.test(sname) == false) {
        alert("secondname does not meet standards");
        return false;
    }
    if (re.test(String(email).toLowerCase()) == false) {
        alert("wrong email");
        return false;
    }

    return true;
}
