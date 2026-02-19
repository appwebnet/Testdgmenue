
const overlay = document.getElementById("overlay");
let activeSheet = null;

document.querySelectorAll("button[data-sheet]").forEach(btn => {
    btn.addEventListener("click", () => {
        const sheetId = btn.dataset.sheet;
        openSheet(document.getElementById(sheetId));
    });
});

function openSheet(sheet) {
    if (activeSheet) closeSheet();
    activeSheet = sheet;
    sheet.classList.add("active");
    overlay.classList.add("active");
}

function closeSheet() {
    if (!activeSheet) return;
    activeSheet.classList.remove("active");
    overlay.classList.remove("active");
    activeSheet = null;
}

overlay.onclick = closeSheet;

document.querySelectorAll(".sheet").forEach(sheet => {
    const handle = sheet.querySelector(".handle");

    let startY = 0;
    let currentY = 0;
    let dragging = false;

    handle.addEventListener("touchstart", e => {
        startY = e.touches[0].clientY;
        dragging = true;
        sheet.style.transition = "none";
    });

    handle.addEventListener("touchmove", e => {
        if (!dragging) return;
        currentY = e.touches[0].clientY - startY;
        if (currentY > 0) {
            sheet.style.transform = `translateY(${currentY}px)`;
        }
    });

    handle.addEventListener("touchend", () => {
        dragging = false;
        sheet.style.transition = "0.3s";

        if (currentY > 120) {
            closeSheet();
            sheet.style.transform = "translateY(100%)";
        } else {
            sheet.style.transform = "translateY(0)";
        }

        currentY = 0;
    });
});





function openModaledwarning() {
    document.getElementById('modalOverlay').style.display = 'flex';
    document.getElementById('main-content').classList.add('blurred');
}

function closeModaledwarning() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('main-content').classList.remove('blurred');
}




const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function(e) {

    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const size = 100;
    ripple.style.width = size + "px";
    ripple.style.height = size + "px";

    ripple.style.left = (e.clientX - size / 2) + "px";
    ripple.style.top = (e.clientY - size / 2) + "px";

    document.body.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

  });
});
