let path = new URLSearchParams(location.search)
let id = path.get("teacherId")
let cards3 = document.getElementById("cards3")

console.log(id);

async function getData() {
    try {
        let res = await axios.get(`https://6925beea82b59600d725044c.mockapi.io/students/${id}`)
        console.log(res);


        cards2.innerHTML += `<div class="w-full flex justify-center px-4">
    <div class="w-full max-w-6xl py-6">

        <!-- GRID -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <!-- LEFT CARD -->
            <div class="bg-white rounded-xl shadow p-6 flex flex-col items-center max-w-md w-full mx-auto">

                <img src="${res.data.avatar}"
                    class="w-32 h-32 rounded-full border-4 border-white shadow" />

                <h2 class="mt-4 text-xl font-semibold">${res.data.neme}</h2>

                <span class="mt-2 text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                    group 16
                </span>

                <div class="w-full mt-6 space-y-4 text-gray-600">
                    <div class="flex justify-between">
                        <span>Age</span><span class="font-medium text-gray-900">${res.data.age}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Gender</span><span class="font-medium text-gray-900">Male</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Rating</span>
                        <span class="font-medium text-yellow-500 flex items-center gap-1">
                            ⭐ 79
                        </span>
                    </div>
                    <div class="flex justify-between">
                        <span>Coins</span>
                        <span class="font-medium text-yellow-600 flex items-center gap-1">
                            🪙 66
                        </span>
                    </div>
                </div>

                <button class="mt-6 flex items-center gap-2">
                    ✏️ Edit Profile
                </button>
            </div>

            <!-- RIGHT SIDE -->
            <div class="lg:col-span-2 bg-white rounded-xl shadow p-6 max-w-3xl w-full mx-auto">

                <!-- ROW 1: Phone + Email -->
                <h3 class="text-lg font-semibold mb-4">Contact Info</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                    <!-- Phone -->
                    <div class="bg-gray-50 p-4 rounded-xl flex items-center gap-4">
                        <div class="text-blue-500 text-2xl">📞</div>
                        <div>
                            <p class="text-gray-500 text-sm">Phone</p>
                            <p class="font-medium">${res.data.Phone}</p>
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="bg-gray-50 p-4 rounded-xl flex items-center gap-4">
                        <div class="text-green-500 text-2xl">✉️</div>
                        <div>
                            <p class="text-gray-500 text-sm">Email</p>
                            <p class="font-medium">${res.data.Email}</p>
                        </div>
                    </div>

                </div>

                <!-- ROW 2: Telegram + LinkedIn -->
                <h3 class="text-lg font-semibold mb-4">Links</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <!-- Telegram -->
                    <div class="bg-gray-50 p-4 rounded-xl flex items-center gap-4">
                        <div class="text-blue-500 text-2xl">📨</div>
                        <div>
                            <p class="text-gray-500 text-sm">Telegram</p>
                            <p class="font-medium">Telegram 16</p>
                        </div>
                    </div>

                    <!-- LinkedIn -->
                    <div class="bg-gray-50 p-4 rounded-xl flex items-center gap-4">
                        <div class="text-blue-500 text-2xl">🔗</div>
                        <div>
                            <p class="text-gray-500 text-sm">LinkedIn</p>
                            <a href="#" class="font-medium text-blue-600 hover:underline">
                                https://sunny-tail.org/
                            </a>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
</div>`

    } catch (err) {
        console.log(err);

    }
}
getData()