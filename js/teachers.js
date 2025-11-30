let Teachersda = document.getElementById("Teachersda");
let fors = document.getElementById("forms");
let outerModal = document.getElementById("outer-modal");
let addTeacgerBtn = document.getElementById("addteacgerbtn");
let selected = null
let pagin = document.getElementById("pagin")
let page = 1
let inputsoch = document.getElementById("inputsoch")
let soetName = document.getElementById("soetName")
let soetNameValue = "default"
let searchValue = ""

inputsoch.addEventListener("input", function (e) {

    searchValue = e.target.value
    getdadt(Teachersda, page, soetNameValue, searchValue);
})
soetName.addEventListener("click", function (e) {
    console.log(e.target.value);
    soetNameValue = e.target.value
    getdadt(Teachersda, page, soetNameValue, searchValue);
})
addTeacgerBtn.addEventListener("click", function () {
    outerModal.classList.remove("hidden")
    for (let el of fors) {
        el.value = "";

    }
})
outerModal.addEventListener("click", function () {
    outerModal.classList.add("hidden")
    selected = null
})
fors.addEventListener("click", function (i) {
    i.stopPropagation()
})
async function getdadt(content, page, soetNameValue, searchValue) {


    try {
        let res = await axios.get(`https://6923dd633ad095fb8471ce98.mockapi.io/Teachers?page=${page}&limit=6&${soetNameValue === "default" ? "" : `sortBy=name&order=${soetNameValue}`}&search=${searchValue} `);
        content.innerHTML = "";
        res.data.map((el) => {
            content.innerHTML += `
        <div data-slot="card"
            class="text-card-foreground flex flex-col gap-6 rounded-xl border p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 group">
                                                <a href="./Teacher.html?teacherId=${el.id}"> <div class="flex flex-col items-center text-center mb-4"><span
                                                        data-slot="avatar"
                                                        class="relative flex size-10 shrink-0 overflow-hidden rounded-full h-20 w-20 mb-3 ring-4 ring-blue-100 dark:ring-blue-900"><img
                                                            data-slot="avatar-image" class="aspect-square size-full"
                                                            alt="Louis Bailey"
                                                            src=${el.avatar}></span>
                                                    <h3 class="text-gray-900 dark:text-white mb-1">${el.name}</h3>
                                                    <span data-slot="badge"
                                                        class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 gap-1 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90 mb-2">${el.specialty}</span>
                                                    <div
                                                        class="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-3">
                                                        <span class="flex items-center gap-1"><svg
                                                                xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                class="lucide lucide-briefcase h-4 w-4"
                                                                aria-hidden="true">
                                                                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16">
                                                                </path>
                                                                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                                                            </svg>${el.Experience}</span><span class="flex items-center gap-1"><svg
                                                                xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                class="lucide lucide-users h-4 w-4" aria-hidden="true">
                                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2">
                                                                </path>
                                                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                                                <circle cx="9" cy="7" r="4"></circle>
                                                            </svg>${el.age}</span></div>
                                                    <div class="flex items-center gap-1 mb-4"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
                                                            aria-hidden="true">
                                                            <path
                                                                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                                            </path>
                                                        </svg><span class="text-gray-900 dark:text-white">${el.Rating}</span>
                                                    </div>
                                                </div>
                                                <div class="space-y-2 mb-4">
                                                    <div
                                                        class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-phone h-4 w-4 flex-shrink-0 text-blue-500"
                                                            aria-hidden="true">
                                                            <path
                                                                d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                                                            </path>
                                                        </svg><span class="truncate">${el.Phone}</span></div>
                                                    <div
                                                        class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-mail h-4 w-4 flex-shrink-0 text-green-500"
                                                            aria-hidden="true">
                                                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                                        </svg><span class="truncate">${el.Email}</span></div>
                                                    <div
                                                        class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-send h-4 w-4 flex-shrink-0 text-blue-400"
                                                            aria-hidden="true">
                                                            <path
                                                                d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
                                                            </path>
                                                            <path d="m21.854 2.147-10.94 10.939"></path>
                                                        </svg><span class="truncate">${el.Telegram}</span></div>
                                                    <div
                                                        class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-linkedin h-4 w-4 flex-shrink-0 text-blue-600"
                                                            aria-hidden="true">
                                                            <path
                                                                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                                            </path>
                                                            <rect width="4" height="12" x="2" y="9"></rect>
                                                            <circle cx="4" cy="4" r="2"></circle>
                                                        </svg><span class="truncate">${el.LinkedIn}</span>
                                                    </div>
                                                </div>
                                                </a>
                                                <div 
                                                    class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                    <button data-slot="button" onClick = "editTeacher(${el.id})"
                                                        class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md px-3 has-[>svg]:px-2.5 flex-1 gap-2"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round" class="lucide lucide-pencil h-4 w-4"
                                                            aria-hidden="true">
                                                            <path
                                                                d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z">
                                                            </path>
                                                            <path d="m15 5 4 4"></path>
                                                        </svg>Edit</button><button onClick="delTechBtn(${el.id})" data-slot="button"
                                                        class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background dark:bg-input/30 dark:border-input h-8 rounded-md px-3 has-[>svg]:px-2.5 flex-1 gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide lucide-trash2 lucide-trash-2 h-4 w-4"
                                                            aria-hidden="true">
                                                            <path d="M10 11v6"></path>
                                                            <path d="M14 11v6"></path>
                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                                            <path d="M3 6h18"></path>
                                                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                        </svg>Delete</button>
                                                        </div>
                                            </div> 
        ` ;
        })
        let resss = await axios.get("https://6923dd633ad095fb8471ce98.mockapi.io/Teachers");
        let pejis = Math.ceil(resss.data.length / 6)
        pagin.innerHTML = ``
        pagin.innerHTML += `<button type="button" onClick=changePage(${page - 1})  class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm w-9 h-9 focus:outline-none rounded-l-lg">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
                            </button> `;
        for (let i = 1; i <= pejis; i++) {
            pagin.innerHTML += `<button  onClick=changePage(${i}) type="button" class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm w-9 h-9 focus:outline-none">${i}</button> `
        };
        pagin.innerHTML += `   <button type="button" onClick=changePage(${page + 1})  class="inline-flex items-center justify-center text-body bg-neutral-primary-soft border border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm w-9 h-9 focus:outline-none rounded-r-lg">
                                                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" 
                                                    viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
                                                    stroke-width="2" d="m9 5 7 7-7 7"/></svg>
                                                        </button> `;

        pejis
    } catch (err) {
        console.log(err);

    }


}
getdadt(Teachersda, page, soetNameValue, searchValue)
async function changePage(i) {
    let resss = await axios.get("https://6923dd633ad095fb8471ce98.mockapi.io/Teachers");
    let pejis = Math.ceil(resss.data.length / 6);


    if (i > 0 && i <= pejis) {
        getdadt(Teachersda, i);
    } else {
        console.log("bfglbf");

    }

}


async function addTeacher(params) {
    try {
        if (selected) {
            await axios.put(`https://6923dd633ad095fb8471ce98.mockapi.io/Teachers/${selected}`, params,
            );

        } else {
            await axios.post("https://6923dd633ad095fb8471ce98.mockapi.io/Teachers", params,
            );

        }
        outerModal.classList.add("hidden")
        selected = null
        getdadt(Teachersda, page);
    } catch (err) {
        console.log(err);

    };

};

fors.addEventListener("submit", function (e) {
    e.preventDefault();
    let TeachersObj = {}
    TeachersObj.name = fors[0].value;
    TeachersObj.age = fors[1].value;
    TeachersObj.Experience = fors[2].value;
    TeachersObj.Phone = fors[3].value;
    TeachersObj.Email = fors[4].value;
    TeachersObj.Telegram = fors[5].value;
    TeachersObj.LinkedIn = fors[6].value;
    TeachersObj.specialty = fors[7].value;
    TeachersObj.Rating = fors[8].value;
    TeachersObj.avatar = fors[9].value;
    TeachersObj.Gender = fors[10].value;

    addTeacher(TeachersObj)

});

async function delTechBtn(id) {
    console.log(id);

    try {
        await axios.delete(` https://6923dd633ad095fb8471ce98.mockapi.io/Teachers/${id}`);
        getdadt(Teachersda, page, soetNameValue, searchValue);
    } catch (err) {
        console.log(err);

    }

}
async function editTeacher(id) {
    outerModal.classList.remove("hidden");
    selected = id
    try {
        let editTe = await axios.get(` https://6923dd633ad095fb8471ce98.mockapi.io/Teachers/${id}`);
        console.log(editTe.data);
        fors[0].value = editTe.data.name
        fors[1].value = editTe.data.age
        fors[2].value = editTe.data.Experience
        fors[3].value = editTe.data.Phone
        fors[4].value = editTe.data.Email
        fors[5].value = editTe.data.Telegram
        fors[6].value = editTe.data.LinkedIn
        fors[7].value = editTe.data.specialty
        fors[8].value = editTe.data.Rating
        fors[9].value = editTe.data.avatar
        fors[10].value = editTe.data.Gender
    } catch (err) {
        console.log(err);

    }

}