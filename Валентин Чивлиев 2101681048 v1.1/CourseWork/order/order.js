function validateForm() 
{
    var regex = new RegExp("^[a-zA-Z ]+$");
    var numbers = /^[0-9]+$/;
    var firstname = document.forms["f1"]["firstname"].value;
    var lastname = document.forms["f1"]["lastname"].value;
    var number = document.forms["f1"]["number"].value;
    if (!regex.test(firstname)) 
    {
        alert("Моля използвайте само букви за вашето име!");
        return false;
    }
    if (!regex.test(lastname)) 
    {
        alert("Моля използвайте само букви за вашето фамилно име!");
        return false;
    }
    if (!numbers.test(number)) 
    {
        alert("Моля използвайте само цифри за телефона ви!");
        return false;
    }
    else if(number > 10)
    {
        alert("До 10 цифри");
        return false;
    }
  }