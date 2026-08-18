const CONFIG = {
  membershipAmount: 100,
  paymentNumber: "9955780805",
  adminEmail: "trusthafuzemillat@gmail.com",
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbw6lmMA-LOizAAuyhIO4-zgYKp7zJQV0QO_b4lgFoeUPmpxdS-o5bU6t5Kv-Im9CW4A9g/exec",
  monthsStart: "2026-01",
  monthsEnd: "2027-12"
};


// ================================
// LOCAL MEMBERS - FALLBACK DATA
// ================================

const localMembers = [
  {"id":"HMT-001","name":"TOFIK ZIYA","paid":200,"due":500,"email":"member@example.com","phone":"+91 90000 00000","photo":"https://drive.google.com/file/d/1u_OHsMIVtZwyY0eRLAsW0vfRQZ_BcqrN/view?usp=sharing"},
  {"id":"HMT-002","name":"Y HASIR","paid":200,"due":500,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-003","name":"QUMAR ASHRAFI","paid":100,"due":600,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-004","name":"M TASIR","paid":100,"due":600,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-005","name":"AAZAD ALAM","paid":100,"due":600,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-006","name":"NOSHAD M","paid":100,"due":600,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-007","name":"SHAHNAWAZ","paid":100,"due":600,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-008","name":"BABLU","paid":100,"due":600,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-009","name":"REZAUL HAQ","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-010","name":"ATHAR","paid":100,"due":600,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-011","name":"SHAHBAZ","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-012","name":"JILANI","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-013","name":"TOFIK RAZA","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-014","name":"SARFUDDIN","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-015","name":"JAAN HABIBI","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-016","name":"ALAMGEER","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-017","name":"MUZAMMIL","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-018","name":"UMAR RAZA","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-019","name":"A KUDDUS","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-020","name":"AHMAD RAZA","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-021","name":"ANIS SABRI","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-022","name":"REYASAT","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-023","name":"ZISHAN","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-024","name":"AASIF","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-025","name":"MINTU","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-026","name":"M DILKASH","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-027","name":"RAZA BABU","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-028","name":"DANISH","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-029","name":"JAFAR AKIL","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"},
  {"id":"HMT-030","name":"ASRAR","paid":0,"due":700,"email":"member@example.com","phone":"+91 90000 00000","photo":"assets/member-placeholder.svg"}
];


// ================================
// TRUST MEMBERS - FALLBACK DATA
// Google Sheet ka data milne ke baad
// ye automatically replace ho jayega
// ================================

let trustMembers = [
  {
    role: "Director",
    name: "Molana Tofique",
    id: "TRUST-001",
    photo: "assets/member-placeholder.svg",
    email: "director@example.com",
    phone: "+91 90000 00001"
  },
  {
    role: "Sadar",
    name: "Aazad",
    id: "TRUST-002",
    photo: "assets/member-placeholder.svg",
    email: "sadar@example.com",
    phone: "+91 90000 00002"
  },
  {
    role: "Secretary",
    name: "Hafiz Naushaad",
    id: "TRUST-003",
    photo: "assets/member-placeholder.svg",
    email: "secretary@example.com",
    phone: "+91 90000 00003"
  },
  {
    role: "Treasurer (Khajanchi)",
    name: "Rezaul Huq",
    id: "TRUST-004",
    photo: "assets/member-placeholder.svg",
    email: "treasurer@example.com",
    phone: "+91 90000 00004"
  },
  {
    role: "Social Media Handle",
    name: "Umar Raza",
    id: "TRUST-005",
    photo: "assets/member-placeholder.svg",
    email: "social@example.com",
    phone: "+91 90000 00005"
  }
];

let members = [...localMembers];
let books = [];
let pendingPayments = [];


// ================================
// HERO
// ================================

const heroSlides = [
  {
    img: "assets/help-family-blurred.png",
    title: "Food support for a needy family"
  },
  {
    img: "assets/help-supplies.png",
    title: "Essential ration supplies"
  },
  {
    img: "assets/food-package.png",
    title: "₹1,300 monthly food package"
  }
];


// ================================
// PAGE LOAD
// ================================

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderTrust();
  renderMembers();
  populateMonths();
  renderPaymentPage();
  updateCurrentMonth();

  if (CONFIG.appsScriptUrl) {
    loadRemoteData();
  }
});


// ================================
// GOOGLE DRIVE PHOTO FIX
// ================================

function getPhotoUrl(url) {

  if (!url) {
    return "assets/member-placeholder.svg";
  }

  url = String(url).trim();

  // Already local image
  if (
    url.startsWith("assets/") ||
    url.startsWith("./assets/")
  ) {
    return url;
  }

  // Google Drive: /file/d/FILE_ID/view
  let match = url.match(/\/file\/d\/([^/?]+)/);

  if (match && match[1]) {
    return "https://drive.google.com/uc?export=view&id=" + match[1];
  }

  // Google Drive: open?id=FILE_ID
  match = url.match(/[?&]id=([^&]+)/);

  if (
    match &&
    match[1] &&
    url.includes("drive.google.com")
  ) {
    return "https://drive.google.com/uc?export=view&id=" + match[1];
  }

  // Direct image URL
  return url;
}


// ================================
// HERO FUNCTIONS
// ================================

function renderHero() {

  const s = document.getElementById("heroSlides");
  const d = document.getElementById("heroDots");

  if (!s || !d) return;

  s.innerHTML = heroSlides.map((x, i) => `
    <div
      class="hero-slide ${i === 0 ? "active" : ""}"
      style="background-image:url('${x.img}')"
      aria-label="${x.title}">
    </div>
  `).join("");

  d.innerHTML = heroSlides.map((_, i) => `
    <button
      class="${i === 0 ? "active" : ""}"
      onclick="goSlide(${i})">
    </button>
  `).join("");

  let n = 0;

  window.heroTimer = setInterval(() => {
    n = (n + 1) % heroSlides.length;
    goSlide(n);
  }, 1600);
}


function goSlide(i) {

  document
    .querySelectorAll(".hero-slide")
    .forEach((x, n) => {
      x.classList.toggle("active", n === i);
    });

  document
    .querySelectorAll(".hero-dots button")
    .forEach((x, n) => {
      x.classList.toggle("active", n === i);
    });
}


// ================================
// TRUST MEMBERS
// ================================

function renderTrust() {

  const grid = document.getElementById("trustGrid");

  if (!grid) return;

  grid.innerHTML = trustMembers.map(m => {

    const photo = getPhotoUrl(m.photo);

    return `
      <article class="trust-card">

        <img
          class="trust-photo"
          src="${photo}"
          alt="${m.name || m.role || "Trust Member"}"
          onerror="this.onerror=null;this.src='assets/member-placeholder.svg';"
        >

        <div>
          <span class="role">${m.role || ""}</span>

          <h3>${m.name || ""}</h3>

          <p>
            ${m.id || ""}
            ${m.email ? " • " + m.email : ""}
          </p>

          <p>${m.phone || ""}</p>
        </div>

      </article>
    `;

  }).join("");
}


// ================================
// GENERAL MEMBERS
// ================================

function renderMembers() {

  const q = (
    document.getElementById("memberSearch")?.value || ""
  ).toLowerCase();

  const f =
    document.getElementById("memberFilter")?.value || "all";

  const list = members.filter(m => {

    const name = String(m.name || "").toLowerCase();
    const id = String(m.id || "").toLowerCase();

    const okq =
      !q ||
      name.includes(q) ||
      id.includes(q);

    const okf =
      f === "all" ||
      (f === "paid" && Number(m.paid) > 0) ||
      (f === "due" && Number(m.due) > 0);

    return okq && okf;
  });

  const grid = document.getElementById("memberGrid");

  if (!grid) return;

  grid.innerHTML = list.map(m => {

    const photo = getPhotoUrl(m.photo);

    return `
      <article
        class="member-card"
        onclick="openMember('${m.id}')">

        <div class="member-top">

          <img
            class="avatar"
            src="${photo}"
            alt="${m.name || "Member"}"
            onerror="this.onerror=null;this.src='assets/member-placeholder.svg';"
          >

          <div>
            <h3>${m.name || ""}</h3>

            <div class="member-id">
              ${m.id || ""}
            </div>
          </div>

        </div>

        <div class="member-meta">

          <span>Public profile</span>

          <span class="status ${Number(m.due) > 0 ? "due" : "paid"}">
            ${
              Number(m.due) > 0
                ? "Dues ₹" + m.due
                : "Up to date"
            }
          </span>

        </div>

      </article>
    `;

  }).join("") || `
    <div class="quote-card">
      <p>No members found.</p>
    </div>
  `;
}


// ================================
// MEMBER DETAILS
// ================================

function openMember(id) {

  const m = members.find(x => String(x.id) === String(id));

  if (!m) return;

  const photo = getPhotoUrl(m.photo);

  document.getElementById("memberDetail").innerHTML = `

    <div class="member-detail-head">

      <img
        class="detail-avatar"
        src="${photo}"
        alt="${m.name || "Member"}"
        onerror="this.onerror=null;this.src='assets/member-placeholder.svg';"
      >

      <div>
        <span class="kicker">GENERAL MEMBER</span>

        <h2>${m.name || ""}</h2>

        <small>${m.id || ""}</small>
      </div>

    </div>

    <table class="detail-table">

      <tr>
        <td>Member ID</td>
        <td>${m.id || ""}</td>
      </tr>

      <tr>
        <td>Name</td>
        <td>${m.name || ""}</td>
      </tr>

      <tr>
        <td>Phone</td>
        <td>${m.phone || ""}</td>
      </tr>

      <tr>
        <td>Email</td>
        <td>${m.email || ""}</td>
      </tr>

      <tr>
        <td>Payment status</td>
        <td>
          ${
            Number(m.due) > 0
              ? "Dues pending"
              : "No dues in current record"
          }
        </td>
      </tr>

    </table>
  `;

  openModal("memberModal");
}


function openAllMembers() {
  document
    .getElementById("members")
    ?.scrollIntoView({
      behavior: "smooth"
    });
}


// ================================
// MONTHS
// ================================

function monthList() {

  const out = [];

  let [y, m] =
    CONFIG.monthsStart
      .split("-")
      .map(Number);

  const [ey, em] =
    CONFIG.monthsEnd
      .split("-")
      .map(Number);

  while (
    y < ey ||
    (y === ey && m <= em)
  ) {

    const v =
      `${y}-${String(m).padStart(2, "0")}`;

    out.push({
      value: v,
      label: new Date(
        y,
        m - 1,
        1
      ).toLocaleString(
        "en-IN",
        {
          month: "long",
          year: "numeric"
        }
      )
    });

    m++;

    if (m > 12) {
      m = 1;
      y++;
    }
  }

  return out;
}


function populateMonths() {
  renderPaymentPage();
}


function renderPaymentPage() {

  const months = monthList();

  const sel =
    document.getElementById("paymentMonth");

  if (sel) {
    sel.innerHTML =
      months.map(x => `
        <option value="${x.value}">
          ${x.label}
        </option>
      `).join("");
  }

  const list =
    document.getElementById("duesList");

  if (list) {
    list.innerHTML =
      months.map(x => `
        <label class="due-row">

          <input
            type="checkbox"
            value="${x.value}"
            onchange="updateDuesTotal()"
          >

          <span>${x.label}</span>

          <b>₹100</b>

        </label>
      `).join("");
  }

  updateDuesTotal();
}


function updateDuesTotal() {

  const n =
    document.querySelectorAll(
      '#duesList input[type="checkbox"]:checked'
    ).length;

  const e =
    document.getElementById("duesTotal");

  if (e) {
    e.textContent =
      "₹" + (n * CONFIG.membershipAmount);
  }
}


function useSelectedDuesForPayment() {

  const selected =
    [...document.querySelectorAll(
      '#duesList input[type="checkbox"]:checked'
    )]
      .map(x => x.value);

  if (!selected.length) {
    showToast(
      "Please select at least one pending month."
    );
    return;
  }

  const sel =
    document.getElementById("paymentMonth");

  if (sel) {
    sel.value = selected[0];
  }

  openPayment();

  showToast(
    selected.length === 1
      ? "Selected month is ready for payment."
      : "First selected month is ready. Submit each month separately."
  );
}


function updateCurrentMonth() {

  const el =
    document.getElementById("currentMonthLabel");

  if (el) {
    el.textContent =
      new Date()
        .toLocaleString(
          "en-IN",
          {
            month: "long",
            year: "numeric"
          }
        )
        .toUpperCase();
  }
}


// ================================
// PAYMENT PAGE
// ================================

function openPayment() {

  renderPaymentPage();

  const p =
    document.getElementById("paymentPage");

  if (!p) return;

  p.classList.add("open");
  p.setAttribute("aria-hidden", "false");

  document.body.classList.add("payment-open");
}


function closePaymentPage() {

  const p =
    document.getElementById("paymentPage");

  if (!p) return;

  p.classList.remove("open");
  p.setAttribute("aria-hidden", "true");

  document.body.classList.remove("payment-open");
}


// ================================
// MODALS / MENU / TOAST
// ================================

function openModal(id) {

  const el =
    document.getElementById(id);

  if (!el) return;

  el.classList.add("open");
  el.setAttribute("aria-hidden", "false");
}


function closeModal(id) {

  const el =
    document.getElementById(id);

  if (!el) return;

  el.classList.remove("open");
  el.setAttribute("aria-hidden", "true");
}


function toggleMenu() {

  document
    .querySelector(".nav nav")
    ?.classList.toggle("mobile-open");
}


function showToast(t) {

  const e =
    document.getElementById("toast");

  if (!e) return;

  e.textContent = t;
  e.classList.add("show");

  clearTimeout(window.toastT);

  window.toastT =
    setTimeout(() => {
      e.classList.remove("show");
    }, 3000);
}


// ================================
// PAYMENT SUBMISSION
// ================================

async function submitPayment(ev) {

  ev.preventDefault();

  const form = ev.target;
  const data = new FormData(form);

  const months = [
    document.getElementById("paymentMonth").value
  ];

  if (!months.length) {
    showToast(
      "Please select at least one month."
    );
    return;
  }

  const file =
    form.screenshot.files[0];

  if (!file) {
    showToast(
      "Please upload payment screenshot."
    );
    return;
  }

  const payload = {
    action: "submitPayment",
    name: data.get("name"),
    memberId: data.get("memberId"),
    email: data.get("email"),
    phone: data.get("phone"),
    months: months,
    total:
      months.length *
      CONFIG.membershipAmount,
    fileName: file.name,
    mimeType: file.type
  };

  if (CONFIG.appsScriptUrl) {

    payload.fileData =
      await fileToBase64(file);

    try {

      const r =
        await fetch(
          CONFIG.appsScriptUrl,
          {
            method: "POST",
            body: JSON.stringify(payload)
          }
        );

      const j = await r.json();

      if (!j.ok) {
        throw Error(
          j.message || "Failed"
        );
      }

    } catch (e) {

      showToast(
        "Submission failed. Check Apps Script URL/setup."
      );

      return;
    }
  }

  form.reset();

  const paymentMonth =
    document.getElementById("paymentMonth");

  if (paymentMonth) {
    paymentMonth.value =
      monthList()[
        Math.min(
          7,
          monthList().length - 1
        )
      ].value;
  }

  closePaymentPage();

  const adminContent =
    document.getElementById("adminContent");

  if (adminContent) {

    adminContent.innerHTML = `
      <div class="modal-head">

        <span class="kicker">
          SUBMITTED
        </span>

        <h2>JazakAllah Khair 🤍</h2>

        <p>
          Your membership payment request has been
          submitted for admin verification.
          Status: <b>Pending</b>.
        </p>

      </div>

      <button
        class="btn primary"
        onclick="closeModal('adminModal')"
      >
        Done
      </button>
    `;
  }

  openModal("adminModal");
}


function fileToBase64(file) {

  return new Promise((res, rej) => {

    const r = new FileReader();

    r.onload = () =>
      res(
        r.result.split(",")[1]
      );

    r.onerror = rej;

    r.readAsDataURL(file);
  });
}


// ================================
// ADMIN
// ================================

function openAdmin() {

  document.getElementById("adminContent").innerHTML = `

    <div class="modal-head">

      <span class="kicker">
        PRIVATE ADMIN
      </span>

      <h2>Admin Login</h2>

      <p>
        Use the trust email and the admin PIN
        configured in Code.gs.
      </p>

    </div>

    <form onsubmit="adminLogin(event)">

      <label>
        Admin email

        <input
          type="email"
          id="adminEmail"
          required
          value="${CONFIG.adminEmail}"
        >
      </label>

      <label>
        Admin PIN

        <input
          type="password"
          id="adminPin"
          required
          placeholder="Enter admin PIN"
        >
      </label>

      <button class="btn primary full">
        Login
      </button>

    </form>
  `;

  openModal("adminModal");
}


async function adminLogin(ev) {

  ev.preventDefault();

  const email =
    document
      .getElementById("adminEmail")
      .value
      .trim();

  const pin =
    document
      .getElementById("adminPin")
      .value;

  if (CONFIG.appsScriptUrl) {

    try {

      const r =
        await fetch(
          CONFIG.appsScriptUrl,
          {
            method: "POST",
            body: JSON.stringify({
              action: "adminLogin",
              email,
              pin
            })
          }
        );

      const j =
        await r.json();

      if (!j.ok) {
        throw Error("Invalid");
      }

      pendingPayments =
        j.payments || [];

      renderAdmin();

      return;

    } catch (e) {

      showToast(
        "Admin login failed. Check Code.gs settings."
      );

      return;
    }
  }

  if (
    email === CONFIG.adminEmail &&
    pin === "HAFIZ-E-MILLAT"
  ) {

    pendingPayments = [];

    renderAdmin();

  } else {

    showToast(
      "Demo login failed."
    );
  }
}


function renderAdmin() {

  document.getElementById("adminContent").innerHTML = `

    <div class="modal-head">

      <span class="kicker">
        ADMIN DASHBOARD
      </span>

      <h2>Verification Center</h2>

      <p>
        Payment screenshots are private and should
        only be reviewed here.
      </p>

    </div>

    <div>

      ${
        pendingPayments.length

          ? pendingPayments.map(p => `

              <div class="admin-row">

                <div>
                  <b>${p.name}</b>

                  <small>
                    ${p.memberId} • ${p.months}
                  </small>
                </div>

                <div class="actions">

                  <button
                    class="small-btn approve"
                    onclick="verifyPayment('${p.id}','approved')"
                  >
                    Approve
                  </button>

                  <button
                    class="small-btn reject"
                    onclick="verifyPayment('${p.id}','rejected')"
                  >
                    Reject
                  </button>

                </div>

              </div>

            `).join("")

          : `
              <div class="quote-card">
                <p>No pending payments.</p>
              </div>
            `
      }

    </div>
  `;
}


async function verifyPayment(id, status) {

  if (!CONFIG.appsScriptUrl) {

    showToast(
      "Connect Apps Script to verify real payments."
    );

    return;
  }

  try {

    const r =
      await fetch(
        CONFIG.appsScriptUrl,
        {
          method: "POST",
          body: JSON.stringify({
            action: "verifyPayment",
            id,
            status
          })
        }
      );

    const j =
      await r.json();

    if (!j.ok) {
      throw Error();
    }

    pendingPayments =
      pendingPayments.filter(
        x => x.id !== id
      );

    renderAdmin();

    showToast("Updated.");

  } catch (e) {

    showToast(
      "Could not update payment."
    );
  }
}


// ================================
// LOAD GOOGLE SHEET DATA
// ================================

async function loadRemoteData() {

  try {

    const r =
      await fetch(
        CONFIG.appsScriptUrl +
        "?action=bootstrap"
      );

    const j =
      await r.json();

    if (!j.ok) return;


    // GENERAL MEMBERS
    if (
      Array.isArray(j.members) &&
      j.members.length
    ) {
      members = j.members;
    }


    // TRUST MEMBERS
    if (
      Array.isArray(j.trust) &&
      j.trust.length
    ) {
      trustMembers = j.trust;
    }


    // BOOKS
    if (Array.isArray(j.books)) {
      books = j.books;
    }


    // WEBSITE REFRESH
    renderMembers();
    renderTrust();
    renderBooks();

  } catch (e) {

    console.warn(
      "Remote data unavailable",
      e
    );
  }
}


// ================================
// BOOKS
// ================================

function renderBooks() {

  if (!books.length) return;

  const grid =
    document.getElementById("booksGrid");

  if (!grid) return;

  grid.innerHTML =
    books.map(b => `

      <article class="book-card">

        <div class="book-cover">
          PDF
        </div>

        <div>

          <span>
            ${b.category || "BOOK"}
          </span>

          <h3>
            ${b.title || ""}
          </h3>

          <p>
            ${
              b.description ||
              "Islamic book / PDF resource"
            }
          </p>

          <a
            class="text-btn"
            href="${b.url || "#"}"
            target="_blank"
            rel="noopener"
          >
            Read book →
          </a>

        </div>

      </article>

    `).join("");
}
