let teacherCards = document.querySelector(".teacher-cards")
let outerModal = document.getElementById("outer-modal")
let addTeacherBtn = document.getElementById("add-teacher-btn");
let form = document.getElementById("form")
let sellected = null ;

addTeacherBtn.addEventListener("click" , function(){
    outerModal.classList.remove("hidden");
    for(let el of form){
        el.value = "";
    }
})
outerModal.addEventListener("click" , function(){
    outerModal.classList.add("hidden");
    sellected = null;
})
form.addEventListener("click" , function(e){
e.stopPropagation();
})
async function getData(content) {
    try{
        let res = await axios.get("https://6925beea82b59600d725044c.mockapi.io/teachers")
        console.log(res.data);
        content.innerHTML = "";
        res.data.map((el) => {
            content.innerHTML += `
                 <div
            class="group max-w-[300px] w-full mt-[90px] hover:-translate-y-1 transition shadow-xl py-[60px] rounded-[20px]  px-[20px]"> <div class="justify-items-center">
           <a class="flex" href = "./single-teachers.html?teacherId=${el.id}"> <img class="rounded-[50%] border border-blue-800 w-[100px]" src=${el.avatar} alt=""></a>
            <h1 class="mt-[10px]">${el.fullName}</h1>
            <div class="flex items-center gap-[30px]">
                <p class="mt-[10px]">${el.age}</p>
                <p class="mt-[10px]">${el.experience}</p>
            </div>
            <p class="mt-[10px]">${el.rating}</p>
        </div>

        <div class="py-[40px]">
            <div class=" py-[5px] flex items-center gap-[10px]">
                <img width="20px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8cBg8KyVEGp0UK2fc8uhaWJLLNht36bwe5A&s"
                    alt="">
                <p>${el.phone}</p>
            </div>
            <div class=" py-[5px] flex items-center gap-[10px]">
                <img width="20px"
                    src="data:image/jpeg;base64,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"
                    alt="">
                <p>${el.email}</p>
            </div>
            <div class=" py-[5px] flex items-center gap-[10px]">
                <img width="20px"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBBAcDAv/EADoQAAEDAwAFCQYFBAMAAAAAAAEAAgMEBREGEiExURMiQUJhcYGRoRQyUrHB0QcjYnLhFTOSolOywv/EABoBAQADAQEBAAAAAAAAAAAAAAADBAUCBgH/xAAwEQACAgEDAgQEBgIDAAAAAAAAAQIDEQQhMQUSE0FRYSIygdFxkaGxwfAz8RQj4f/aAAwDAQACEQMRAD8A7igCAIAgMZQEXcr/AG635ZLNrS7uTj5zv48VPXprbOEVbtZTTtJ7+hWqzTOqeSKOnjib0OedY+W4eqvQ6fFfM8mXZ1Wb+SOCHnvd0qM8rXTbehh1B/rhWY6amPESlPV3z5m/2/Y03zzSHMk0j/3PJUqjFcIhc5PlnwHOb7pI7jhfcHKbXBsRXCthwYqyob3SH7rh1QlzFEsb7Y8SZI0mlN2pzz5mzt+GVg+YwVBPRUy8sFivqOohy8/j/wCYJ636ZUsuG10L6c/E3L2/LKqWaCa3g8mjV1WuW1ix+pZKepgqYhJTyskYdzmnIVGUXF4aNOE4zXdF5R6g5Xw6MoAgCAIAgCAIDUuNwp7dAZqqUMYN3Fx4AdJXddcrH2xIrroUx7pso150pq68ujpiaan3Yaec4dp+y1qdHCveW7/QwtT1Gy3aGy/UgFcM3BlD6EAQBAEAQGEBsUVbU0E3K0kzondOrud3jcVxZXGxYkiSq2dUu6DwXWxaVQ1xbBW6sFQdgPUf9j2LKv0cq/ijujc0vUY2/DZs/wBCyg5AKpGmZQBAEAQBARl7vFPaqTlZedI7ZHGDtcfoO1TU0yulhFbU6mFEcvnyOb3G4VNyqTPVP1j0NHutHABbdVUKo9sTzV187pd0/wDRrKQiCAIAgCAIAgCAIAgCAtWjGkxgcyjuL9aLOI5jvZ2Hs7Vn6rSJ/HX+RraLXuOK7ePJl5BDtyyjdMoAgCA1LnXxW2kkqZzhjBsA3uPQB2qSuuVklGJFddGmDnI5dc6+a5Vb6mpOXO91udjW9AHYt6qqNce1HlrrpXTc5f6NXKkIhlAMoBlAMoBlAMoBlAMoBlAMoBlAEBctDL8Tq22rfk4xA93T+n7LL1unx/2R+ptdO1fFM/p9i6LNNkIDBQHOdMbua+4ezxOzT05LRg7HO6T9PNbWio7Idz5Z53qOp8WzsXC/cr6uGcEAQBAEAQBAEAQBAEAQBAEBljnMcHMcWuacgjeCjSezCbW6OoaN3QXW2xzOxyzOZKP1cfHesDUU+FNryPU6PUePUpPnzJZQFoidJ7j/AE2zzSsP5ruZH3np8Bk+CsaWrxbUvIqa2/waXJc+Ry1bx5ZLAyh9GUAygGUAygGUAygGUAX0GzQ2+suBxRU0k23GWjYO8nYo52wr+Z4JKqbLf8cc/wB+hZbfoRO/DrhUiMdLIhk+Z2D1VGzqEVtBGlV0qT3slj8DcvWjdrorHUywwuE0TNZshkcST8vRRUaq2dyTezJ9ToaK9PKUVul6sopWsYQygGUBPaGXH2K8tiecRVP5buAPVPns8VU1tXfVlcovdOu8K7D4lt9jpIKxD0pQfxArDJX09GDzYWF7h2u/geq1unwxFz9TB6rZmcYehVVoGUEAQBAEAQBfQfcEMtTIIqeJ8sh6rGklcykorMtj7GMpvEVksNu0NuFTh1U5lKw9B57vIfdU7NfXH5dzRq6ZdPefwlmt+iVro9Vz4jUSDrTHI/x3KhZrLZ7ZwjSp6dRXu1l+/wBuCY144i2JuATuY0blWw3uXdlse6+HRXNOp+RsMjAcGaRrPDOT8lc0Mc3Z9DP6nPt07Xqc5yto84EAQAOc0gsJDgcgjeCmE9mEdftlUK6309U3H5sYds442rzlkeybj6HrqZ+JXGfqjmGkc/tF9rpc5HKlo7m4b9Fu6aPbTFHmdXLuvm/f9tiNypyuMoBlfAEBnbnAGTw4oCYt2jN1r8ObByMZ68+W+m9VrNXVXtnP4FynQX2+WF77Fnt2hVFAQ6tkkqXDq+4302+qo2a+yXybGnT0uqO83n9EWSmpKekiEVNDHFGNzWNwFSlJyeZbmjCEa1iKwj0e5jGlziAB0lco74I+aufK/k6VpydmcbVIoJbsjcm9kbVJTCBuXHWkd7zlzKWTqKwbK5OijfiLU/nUVKDuDpHfIfVanTobSkYnV57wh9f4+5TcrTMcZQDKAZQHRNBqtv8AQmxPdthlc0bePO/9LF10H42fVI9B0yxf8ft9Gzn1TJytTLIeu9zvMrYgsRSMGbzJv3Z5ro5CA+4o3zSsiiYXyPIDWt3kr42kss+xi5PCWWW216Dyy4fc5+SB28nDtOO07vLKzrOoJf40atPSpPe149kWu3WS320D2SmY1/8AyEZd5lZ9l9lnzM1qtNVV8kfuSACiJzKA06qujhy1nPk4DcF1GGTlywRpdPWSgZLjw6Apdooj3kyVpKVlOzZtcd7lFKTZIopGyuToIDl2mVV7TpDUge7FiIeA2+pK3dFDtpXvueY6hPv1EvbYhFaKYQBAEBMWa5mip5Iw7GtIXegH0Va+nvlku6W/w4te5DuGq4tO8EjyVnyKbWNjGUPgygPSnnkp545oX6skbg5p4EL5KKknF+Z1CThJSjyi10Gnc7MNuFK2QDrwHVPkdnqFnWdOjzBmrV1aS/yRz+H9/kslv0ntNcWtZVtikduZNzD67D4KlPSXQ5RoVa6izZSw/fYlZaiKJmu54wd2DnPcoMNlvKIuqrpJubHzGepUqglyRuTfBrwQPnk1WDvPBdN4OUsk1TU7Kdmqwbek8VA3kmSwe6+H0ID4me2ONz3nDWgknsCJZeEfG8LJxmondUzy1D/eleXnxOV6aMe1KK8jx0p+JJz9Tzyvp8GUAygBOxAe0ED5WlzdwOFzKSXJJCDkso+rpEYLpWREY1J3j1K5ql3Vxfsj7fHttlH3NVSEQQBAEA379yHxlo0Qq9aOakefd57Bno3EfLzWfrYYambHTbcqVZZY2tfK1jnhgJxkqg3g1FuTtPCyFgYwbOPFQNtk6WD1Xw+hAEBC6YVXsmj1XIDhzm8m3vcQPqVY0sO+6KKmus7NPJr8Pz2OVLfPLBD6EAQBAXLQ22e12yWVzM5nIH+LVm627tsSXobHTqe6pyfr/CIrTelNNpDM/qztbIPLB9QfNT6GfdSl6FTqNfZqG/Xf+CBVspBAEAQBAbtnq/Y7lDMTzc6r+47P5UV0O+ton01nh2xkXit2RAfqWOj0Uj0t92lpdVkuZIu07W9y5lWnufYWNbFgpauCrjL4JWvAOHYPungeCgcXHknjOMuGe6+HQQFL/Emr1aaipGn+490jh2NGB8/RaXToZlKZj9WsxGMF57/l/soa1TECAIAgC+g6tofSmk0dpGO997TI7Z8Rz8iF5/Vz77pNHqNDX4enivr+ZE/iJQctb4a5gy6ndqu/Y7H1x5qx0+ztm4PzKvVau6tWLy/k58tgwQgCAIAgMIC7UNX7ZaqaQnLxzHd42fY+Kx74dljR6HTW+JTF+ZE3e7ckTT0rvzOs8dXsHarFGmz8U+CpqtX25hXz6kTb7hVW6pFRSSmOTpO8OHAjpCuWVQsj2yRm1XTql3QeGdE0c0qprqGwTgQVmP7ZOx/7T9N6x9RpJVbrdHoNJr43/DLaX94LHvCpl85fp1Ve0aQSRA5bTsbH441j8/Rbmhh2059TzfUrO/UNem38lfVwoBAEAQG1aqJ1xuVNRgH81+HY6Gja4+QKjusVdbkySmrxbIw9f6zsjGhrQ1oAA2AcF5vLPX8cHxWU8dVSy08zdaORpa4dhXUZOMlJeRzOCnFxlwzjdxopbdXTUk/vxOxn4h0HxC9HXZGyKlE8lbVKqbhLyNddkYQBAEAQHtDV1EEb44ZXMY/eB0riVcZNNokhbOCai+TxXZGEAB2gjf0HOMIC0W/Ti4UtJyE8LKpzdjZXuLTjtwNvoqNnT65yyng0quqWwh2tZ9yt1E8lTPJPO7WkkcXOPElXIxUYqK4RnznKcnKXLPNdHIQBAEBfPw7tRZFJc5m/3MshBHV6T4nZ4LJ6hdl+GvqbfSqMJ2vz2RdlmmwYO1AVTTmxGvphW0rc1MDec1o2yM4d46PFXtFqPDl2S4f7mZ1HS+LHxI/Mv2Obg53LaPPmUAQBAEAQBAEAQBAEAQBAMoCS0ftMt5uDadms2JvOmeOq37noUGouVMO7z8ixpdO77O1ceZ1yngjp4Y4YWhsbGhrWjcAF59tt5Z6qMVFJLhHqvh9CAxgcEBz3TTRl1M99yt0WYXbZ4mj3D8Qx0ceC1tFqsrw58+Rha/Q9r8WtbeaKaCtIyRlAMoBlAMoBlAMoBlAMoBlAMoBlAbVtoKm51jKWjZrSO3noaOJ4BcWWRrj3SJKqp3TUIHWbDZ6ezUIp4Rlx2ySEbXu4/wALAvuldLuZ6jT6eFEO2JJKEnCAIAgMEZGCgKJpRoYS59ZZ2jJ2yUw2Z/Z9vLgtTTa7HwW/mYur6bu50/VfYoz2ujeWPaWuacFpGCD2rUW6yjGaaeGfKAIAgCAIAgCAIAgJSx2OsvU2rSt1YgefO4c1v3PYob9RClfFz6FjT6ay94jx6/39jqFistJZqQQ0oy47ZJXe889v2WFddO6WZHpNPp4UQ7YkmoicIAgCAIAgCAhr3o5QXka1RHqTgYE0ex3jx8VPTqbKfl49CrqNHVfvJb+pQ7tobdbeXOgYKuEbdaIc4Dtbv8srVq11U9nszEu6ddVuviXt9iuuBa8scC143tOwjwVxNNZRRx5GF9AQBAEAQG5b7ZX3J2KClkm/UBho73HYo53V1rMnglqpst+SOf76lzsugTGFst3lEp38hGSG+J3n0Wbd1BvatY9zW0/Skt7nn2XBdKeCOnibFDG2ONow1rRgALNbbeWa0YqKwlhHqvh0EAQBAEAQBAEAQGCEBqVttorgzVraWKYbue0EjxUkLJweYvBHZTXZtNZK/X6D2bk3PhbPCeDJSR/tlWoa+7O+5Qn0zT4+FNfX7lNvFmgoXuEUszsfGR9AtGq+U+UZt+ljXw2RVLC2aXUcXAdinnLtWSrXBTeGXGzaIW+rDXTTVRzvAe0D/qs67W2R2SRq09Oqkstv9PsWai0TslE4OjoWyPHWmJefXYPBUp6y6fMvyL1eg09fEfz3JljGtAa0ANA2AdCrvnJc4PtAEAQBAEAQH//Z"
                    alt="">
                <p>${el.telegram}</p>
            </div>
            <div class=" py-[5px] flex items-center gap-[10px]">
                <img width="20px"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEUBdLP///8CdLMAdLMAba95rtKGtdUAcbG/2Onn8vghgbpVm8cAb7DS5PApfLcAaK3u9vqoyuGx0OSUv9sqhbycwNv4+/0AebaLu9lppcyjxd4/ir5Ij8DG3es6hrza6fMAYqr4IZKIAAAGFUlEQVR4nO2cCXezKhCGEVA04po0xkTb/v9feUGNcRmQLC79ruPpaT1O4OUJjANakFVbXF6dlS0p40YMqiVdCkxXN1Jc4oeo9BQxTFBluD3gc6Q6N3ZUFU0wi07pXVRCOFJ+cmxT140dgao4SWpRCWEaMsuRqv5iUhWyvAObkP8kAGNHsCp28IQoJ+pcfeP4SCHiiBwLed+sL580h7qBE9eNHeGq2LeHXPahJn6KFGEu+qKoJ3cof9wcxbmx40RViH4hh/ZbOmz5mMS7jlMlUAfZtNFJ6qOV35y37SRDDzT0MHbUV0VtIWpzpOwHKe2QADyU140dFVV1Sd09kf585oi+kzIp+s+QevP4UDHTpBjj0sC74yKk7ta2nLCIn/w8928k4rhjff9x1JlwBKrqnXdJDcMwozcniM8yg/9JfMbGHktE9L58Rm3Pai1OMkpWJ8Wz0uqZ59O1SbHMtQZ29iOyKinGg6Em8RX6fM0sgVB7rMmyyowNHIcffO+ClhTihQeJshxO1iMVHUFNVhmy1Uix7AcWdc7paqR4EcOirC8haiVSPFdosly+Vpwi3FGJKslacUojKhBDcx1SiINRal1SmPsqUelyfapvYvR9q0afU6UKQwBKm3Ics5UGk8K8hDXVd7+VsgTqnEFRbqbpKjP3KcQOQJIgkxeuBTAvKQJ39YTpAMxMShzQLbk81Hn6SlmCHIEjVcGBm9y55rr3VZkCvfRzqvTApwDMTkqwuiWtrLObY27WzjlJyWhFiov743k/5TUPhfRJAAuQkrAoJ1mWMcrN2zkvKSmciM7FGCHECMAypF5p59ykwOatupagPF8von+WFNoUqXqgcPHDsBwtHyClQKC8PiLFKeVZdjgdQhFXuAgwzYdeI0XqZcWh9clAHuxekMg0eOg7aenJdbdz7AXu1S5CJnU9QaoxKZxg3wYsz9jdQ+RcJ8jFb55GY86KS70O2MnH4uDoZxR3q6oL65lqHR2D+XBcP9itvSmYcqVRVRDjRQrn+efSbmW1pFDvXLk6PFoyk9Y8ba4bB4tKItllaPilmnrIm3vRqHqSlF6UhpQQhXFUKBZIGosvvFPQIqREoWpMdzfCFiWF1fPrjqWS1XKkuGJ6NrAjwUZPHDq/1KJaR4WoX99Ik3W2KXnEKbMsQSnq7qESFYIzRqiwE38yn3qZ1PXLUJNwZURDqv/FvtenYrMvr3L1OYGqxqrnfUpRDx9Y1DOW0nHFqtH3Vkh4xuJHG+eNU09Zzo3j1HKiXLxBUvItqc2RsnK6OKlzLEzrcYyUpOYQFbuOfzpk2cm/uOrQFfwu+fW5IuvlchIjJguhDT+nk9IpXuzri3NK8X1CJSK0+n544IuRyu/pblMYv6lY+XQpUs7v4I1fFKl8bboQqSBkaCAKM8XTguNSpOTT04EoQm14CCaULELq5/HW76O1TPGkPGVkglTneCN1SSgGChy/e1GZC/l+PMmTufcDelswYVe1KF2S1/31cjpseQUfvhBXecPzrjIbVT3DxMEKDgxaXaPwJCcIK1IzTxyqp28AKV6oRelIfaZPpRh8oZnfwHyhITV3nJITp3FIQPwExoSG1HSceo/UsSvqQUr+k8B6pBwOktKJmp9UT5QJqQWWgv4RUvo+1VuyVt772pVltSjoKYCelOHi/mREJ2pRUETX9ynDxf2d1L9NSiPqOVLmWQJ+OUuQpIAsYYLUzPnUTmoDpF7PPP9vpPY+ZRrRlaT2iD6Qu5l73555mpLafJ/aR9+fG33bJLXf+3ZSe+a5Fqm/GdHjd9YSVKvDxJQUwRcXsCTskOIF5OLmDIGkwgTyvj5DCmMCGCYdAPJv0BBEqvowXKRxn0KdjtEx1G0Q7NJ5tbRLCiPYm0yQ6qeL+9YE/WP7pBpPpD/ft7vYSWmr2v9F5Yl/vNjkVk/X7W2KdUXl1rYPw6xE3m1rG63dvA1uSXexkBWfeE9+eygbOHHd2BGsip9iuc1hmtUzENhz/EnFubGjrirCs7TeEFKompD/FABjR6CqSlOzdeZtK1tn3tqtM8U85ViQtbcYlZuMHjubjEpZQbL6dqzBfRr2HzfToUTJQc1RAAAAAElFTkSuQmCC"
                    alt="">
                <p>${el.linkedin}</p>
            </div>
        </div>
        <div class=" opacity-0 group-hover:opacity-100 transition flex gap-[15px] items-center justify-between">
            <button onClick= "editTeacher(${el.id})"
                class="max-w-[120px] w-full py-[2px] border border-blue-200 shadow-xl rounded-[10px]  hover:bg-blue-300 ">edit</button>
            <button onClick = "daleteTeacher(${el.id})"
                class="max-w-[120px] w-full py-[2px] border border-red-200 shadow-xl rounded-[10px]  hover:bg-red-300">Dalete</button>
        </div></div>
            `;
        } );
    }catch(err){
        console.log(err);
        
    }
}
getData(teacherCards);

 async function editTeacher(id){
    outerModal.classList.remove("hidden");
    sellected = id ;
    try{
        let res = await axios.get(`https://6925beea82b59600d725044c.mockapi.io/teachers/${id}`)
        console.log(res.data);

        form[0].value = res.data.name
        form[1].value = res.data.experience
        form[2].value = res.data.phone
        form[3].value = res.data.telegram
        form[4].value = res.data.age
        form[5].value = res.data.rating
        form[6].value = res.data.email
        form[7].value = res.data.linkedin
        
    }catch(err){
        console.log(err);
        
    }
}

async function addteacher(teacherOBJ) {
    try{
        if(sellected){
            await axios.put(`https://6925beea82b59600d725044c.mockapi.io/teachers/${sellected}`, teacherOBJ, outerModal.classList.add("hidden"));
        }else{
            await axios.post("https://6925beea82b59600d725044c.mockapi.io/teachers", teacherOBJ, outerModal.classList.add("hidden"));
        }
       sellected = null ;
        getData(teacherCards);
    }catch(err){
        console.log(err);
        
    }
}
form.addEventListener("submit" , function(e){
    e.preventDefault();
    let teacherOBJ = {};
    teacherOBJ.fullName = form[0].value;
    teacherOBJ.experience = form[1].value;
    teacherOBJ.phone = form[2].value;
    teacherOBJ.telegram= form[3].value;
    teacherOBJ.age = form[4].value;
    teacherOBJ.rating = form[5].value;
    teacherOBJ.email = form[6].value;
    teacherOBJ.linkedin = form[7].value;
   console.log(teacherOBJ);
   
    addteacher(teacherOBJ);
    sellected = null;
outerModal.classList.add("hidden")
})
async function daleteTeacher(id){
    try{
        await axios.delete(`https://6925beea82b59600d725044c.mockapi.io/teachers/${id}`);
        getData(teacherCards); 
    }catch(err){
        console.log(err);
        
    }
}