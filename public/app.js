if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    console.warn("UserAgent string likely a non-mobile device");
}

// const media = navigator.mediaDevices;
// const devices = await media.enumerateDevices();
// console.log({ devices, navigator });
// document.body.append((document.createElement("p").innerText = JSON.stringify(devices)));

document.getElementById("submit").addEventListener("click", async function (e) {
    e.preventDefault();
    const videoInput = e.target.previousElementSibling;
    if (!videoInput) return;

    const formData = new FormData();
    formData.append("uploaded_video", videoInput.files[0]);

    await fetch("/video", { method: "POST", body: formData });
});
