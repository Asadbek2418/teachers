let path = new URLSearchParams(location.search)
let id = path.get("teacherId")
let cards2 = document.getElementById("cards2")

console.log(id);

async function getData() {
    try {
        let res = await axios.get(`https://6925beea82b59600d725044c.mockapi.io/teachers/${id}`)
        console.log(res);


        cards2.innerHTML += `
          <div
                            class=" flex flex-col gap-6 rounded-xl border lg:col-span-1 bg-white  border-gray-200 ">
                            <div  class="p-[20px]">
                                <div class="flex flex-col items-center text-center">
                                <div class="relative flex size-10 shrink-0 overflow-hidden rounded-full h-32 w-32 mb-4 ring-4 ring-blue-100 ">
                                <img class="aspect-square size-full" alt="rasm" src="${res.data.avatar}"></div>
                                    <h2 class=" text-black mb-2">${res.data.name}</h2>
                                    <h1 class="items-center justify-center rounded-md border border-gray-200 px-2 py-0.5 text-xs font-medium  shrink-0  bg-gray-300  mb-4">Mathematics</h1>
                                    <div class="w-full space-y-4 mb-6">
                                        <div class="flex items-center justify-between text-sm">
                                        <h1 class=" text-black-400">Age</h1>
                                        <h1 class="text-black-400">${res.data.age} years</h1>
                                        </div>
                                        <div class="flex items-center justify-between text-sm">
                                        <h1 class="ttext-black-400">name</h1>
                                        <h1 class="text-black-400">${res.data.Experience} years</h1>
                                        </div>
                                        <div class="flex items-center justify-between text-sm">
                                        <h1 class="text-black-400">Gender</h1>
                                        <h1 class="text-black-400">male</h1>
                                        </div>
                                        <div class="flex items-center justify-between text-sm">
                                        <h1 class="text-black-400">Rating</h1>
                                            <div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
                                                    aria-hidden="true">
                                                    <path
                                                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                                    </path>
                                                </svg>
                                                <h1 class="text-black-400">${res.data.rating}</h1>
                                                </div>
                                        </div>
                                        <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate"
                                            data-max="100" data-slot="progress"
                                            class="bg-primary/20 relative w-full overflow-hidden rounded-full h-2 bg-[black]">
                                            <div data-state="indeterminate" data-max="100" data-slot="progress-indicator"
                                                class="bg-primary h-full w-full flex-1 transition-all"
                                                style="transform: translateX(-10%);"></div>
                                        </div>
                                    </div>
                                    <button
                                        class="flex items-center justify-center  rounded-md text-sm font-medium transition-all text-white bg-[black] w-full h-[35px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="lucide lucide-pencil h-4 w-4" aria-hidden="true">
                                            <path
                                                d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z">
                                            </path>
                                            <path d="m15 5 4 4"></path>
                                        </svg>
                                        Edit Profile </button>
                                </div>
                            </div>
         `

    } catch (err) {
        console.log(err);

    }
}
getData()