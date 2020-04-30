var inputData = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById('list');

/*addEventListener - получение типа события и вызов функции*/

inputData.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){
        var newLi = document.createElement ('li');
        var newSpan = document.createElement('span');
        newSpan.innerHTML = 'Delete ' + new Date();
          
        var newTodo = this.value;
        this.value = ''; /* очистка поля ввода*/

        ulSpisok.appendChild(newLi).append(newSpan, newTodo);
        

        /* если писать document.write то отображается в нужном формате, но переходит на другую страницу*/
        Data = new Date();
        Year = Data.getFullYear();
        Month = Data.getMonth();
        Day = Data.getDate();
        Hour = Data.getHours();
        Minutes = Data.getMinutes();
        Seconds = Data.getSeconds();
            switch (Month)
            {
            case 0: fMonth="января"; break;
            case 1: fMonth="февраля"; break;
            case 2: fMonth="марта"; break;
            case 3: fMonth="апреля"; break;
            case 4: fMonth="мая"; break;
            case 5: fMonth="июня"; break;
            case 6: fMonth="июля"; break;
            case 7: fMonth="августа"; break;
            case 8: fMonth="сентября"; break;
            case 9: fMonth="октября"; break;
            case 10: fMonth="ноября"; break;
            case 11: fMonth="декабря"; break;
            }
       
        document.createElement("Добавлено "+Day+" "+fMonth+" "+Year+" года"+" в "+Hour+":"+Minutes+":"+Seconds);
        
    }


    /* не понимаю как сделать пробел. поэтому сделала эту задачу на ввод только букв*/
    var newTodo = this.value;
    this.value = "0,1,2,3,4,5,6,7,8,9"; 
    if ((newTodo == "0,1,2,3,4,5,6,7,8,9")||(newTodo == false)){
        alert('Введите валидные данные');
        return false;
    } else{
        return true;
};

    var modal = document.getElementById('my_modal');
    var openM = document.getElementById('button_mod_window');
    var closeM = document.getElementsByClassName('close_mod_window')[0];

    openM.onclick = function () {
        modal.style.display = "block";
    }

    closeM .onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
    }
});
 


