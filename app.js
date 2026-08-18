const CONFIG = {
  membershipAmount: 100,
  paymentNumber: "9955780805",
  adminEmail: "trusthafuzemillat@gmail.com",
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbw6lmMA-LOizAAuyhIO4-zgYKp7zJQV0QO_b4lgFoeUPmpxdS-o5bU6t5Kv-Im9CW4A9g/exec",
  monthsStart: "2026-01",
  monthsEnd: "2027-12"
};


/* =========================================================
   LOCAL FALLBACK MEMBERS
========================================================= */

const localMembers = [
  {id:"HMT-001",name:"TOFIK ZIYA",paid:200,due:500,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-002",name:"Y HASIR",paid:200,due:500,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-003",name:"QUMAR ASHRAFI",paid:100,due:600,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-004",name:"M TASIR",paid:100,due:600,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-005",name:"AAZAD ALAM",paid:100,due:600,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-006",name:"NOSHAD M",paid:100,due:600,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-007",name:"SHAHNAWAZ",paid:100,due:600,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-008",name:"BABLU",paid:100,due:600,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-009",name:"REZAUL HAQ",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-010",name:"ATHAR",paid:100,due:600,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-011",name:"SHAHBAZ",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-012",name:"JILANI",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-013",name:"TOFIK RAZA",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-014",name:"SARFUDDIN",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-015",name:"JAAN HABIBI",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-016",name:"ALAMGEER",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-017",name:"MUZAMMIL",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-018",name:"UMAR RAZA",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-019",name:"A KUDDUS",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-020",name:"AHMAD RAZA",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-021",name:"ANIS SABRI",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-022",name:"REYASAT",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-023",name:"ZISHAN",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-024",name:"AASIF",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-025",name:"MINTU",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-026",name:"M DILKASH",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-027",name:"RAZA BABU",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-028",name:"DANISH",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-029",name:"JAFAR AKIL",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"},
  {id:"HMT-030",name:"ASRAR",paid:0,due:700,email:"member@example.com",phone:"+91 90000 00000",photo:"assets/member-placeholder.svg"}
];


/* =========================================================
   FALLBACK TRUST MEMBERS
========================================================= */

let trustMembers = [
  {
    role:"Director",
    name:"Molana Tofique",
    id:"TRUST-001",
    email:"director@example.com",
    phone:"+91 90000 00001",
    photo:"assets/member-placeholder.svg"
  },
  {
    role:"Sadar",
    name:"Aazad",
    id:"TRUST-002",
    email:"sadar@example.com",
    phone:"+91 90000 00002",
    photo:"assets/member-placeholder.svg"
  },
  {
    role:"Secretary",
    name:"Hafiz Naushaad",
    id:"TRUST-003",
    email:"secretary@example.com",
    phone:"+91 90000 00003",
    photo:"assets/member-placeholder.svg"
  },
  {
    role:"Treasurer (Khajanchi)",
    name:"Rezaul Huq",
    id:"TRUST-004",
    email:"treasurer@example.com",
    phone:"+91 90000 00004",
    photo:"assets/member-placeholder.svg"
  },
  {
    role:"Social Media Handle",
    name:"Umar Raza",
    id:"TRUST-005",
    email:"social@example.com",
    phone:"+91 90000 00005",
    photo:"assets/member-placeholder.svg"
  }
];

let members = [...localMembers];
let books = [];
let pendingPayments = [];


/* =========================================================
   HERO
========================================================= */

const heroSlides = [
  {
    img:"assets/help-family-blurred.png",
    title:"Food support for a needy family"
  },
  {
    img:"assets/help-supplies.png",
    title:"Essential ration supplies"
  },
  {
    img:"assets/food-package.png",
    title:"₹1,300 monthly food package"
  }
];


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener("DOMContentLoaded",function(){

  renderHero();
  renderTrust();
  renderMembers();
  populateMonths();
  renderPaymentPage();
  updateCurrentMonth();

  if(CONFIG.appsScriptUrl){
    loadRemoteData();
  }

});


/* =========================================================
   GOOGLE DRIVE PHOTO HANDLER
========================================================= */

function getPhotoUrl(url){

  if(!url){
    return "assets/member-placeholder.svg";
  }

  url=String(url).trim();

  if(
    url.startsWith("assets/") ||
    url.startsWith("./assets/")
  ){
    return url;
  }

  /*
   Google Drive:
   https://drive.google.com/file/d/FILE_ID/view
  */

  let match=url.match(/\/file\/d\/([^/?]+)/);

  if(match && match[1]){

    return "https://drive.google.com/thumbnail?id="+
      encodeURIComponent(match[1])+
      "&sz=w1000";
  }

  /*
   Google Drive:
   https://drive.google.com/open?id=FILE_ID
  */

  match=url.match(/[?&]id=([^&]+)/);

  if(
    match &&
    match[1] &&
    url.includes("drive.google.com")
  ){

    return "https://drive.google.com/thumbnail?id="+
      encodeURIComponent(match[1])+
      "&sz=w1000";
  }

  return url;
}


/* =========================================================
   HERO
========================================================= */

function renderHero(){

  const s=document.getElementById("heroSlides");
  const d=document.getElementById("heroDots");

  if(!s || !d)return;

  s.innerHTML=heroSlides.map(function(x,i){

    return `
      <div
        class="hero-slide ${i===0?"active":""}"
        style="background-image:url('${x.img}')"
        aria-label="${x.title}">
      </div>
    `;

  }).join("");

  d.innerHTML=heroSlides.map(function(_,i){

    return `
      <button
        class="${i===0?"active":""}"
        onclick="goSlide(${i})">
      </button>
    `;

  }).join("");

  let n=0;

  clearInterval(window.heroTimer);

  window.heroTimer=setInterval(function(){

    n=(n+1)%heroSlides.length;
    goSlide(n);

  },1600);

}


function goSlide(i){

  document
    .querySelectorAll(".hero-slide")
    .forEach(function(x,n){
      x.classList.toggle("active",n===i);
    });

  document
    .querySelectorAll(".hero-dots button")
    .forEach(function(x,n){
      x.classList.toggle("active",n===i);
    });
}


/* =========================================================
   TRUST MEMBERS
========================================================= */

function renderTrust(){

  const grid=document.getElementById("trustGrid");

  if(!grid)return;

  if(!Array.isArray(trustMembers) || !trustMembers.length){

    grid.innerHTML=`
      <div class="quote-card">
        <p>No trust members found.</p>
      </div>
    `;

    return;
  }

  grid.innerHTML=trustMembers.map(function(m){

    const photo=getPhotoUrl(m.photo);

    return `
      <article class="trust-card">

        <img
          class="trust-photo"
          src="${photo}"
          alt="${escapeHtml(m.name || m.role || "Trust Member")}"
          loading="lazy"
          onerror="this.onerror=null;this.src='assets/member-placeholder.svg';"
        >

        <div>

          <span class="role">
            ${escapeHtml(m.role || "")}
          </span>

          <h3>
            ${escapeHtml(m.name || "")}
          </h3>

          <p>
            ${escapeHtml(m.id || "")}
            ${m.email ? " • "+escapeHtml(m.email) : ""}
          </p>

          <p>
            ${escapeHtml(m.phone || "")}
          </p>

        </div>

      </article>
    `;

  }).join("");

}


/* =========================================================
   GENERAL MEMBERS
========================================================= */

function renderMembers(){

  const q=(
    document.getElementById("memberSearch")?.value || ""
  ).toLowerCase();

  const f=
    document.getElementById("memberFilter")?.value || "all";

  const list=members.filter(function(m){

    const name=String(m.name || "").toLowerCase();
    const id=String(m.id || "").toLowerCase();

    const okq=
      !q ||
      name.includes(q) ||
      id.includes(q);

    const okf=
      f==="all" ||
      (f==="paid" && Number(m.paid)>0) ||
      (f==="due" && Number(m.due)>0);

    return okq && okf;

  });

  const grid=document.getElementById("memberGrid");

  if(!grid)return;

  grid.innerHTML=list.map(function(m){

    const photo=getPhotoUrl(m.photo);

    return `
      <article
        class="member-card"
        onclick="openMember('${escapeAttr(m.id)}')">

        <div class="member-top">

          <img
            class="avatar"
            src="${photo}"
            alt="${escapeHtml(m.name || "Member")}"
            loading="lazy"
            onerror="this.onerror=null;this.src='assets/member-placeholder.svg';"
          >

          <div>

            <h3>
              ${escapeHtml(m.name || "")}
            </h3>

            <div class="member-id">
              ${escapeHtml(m.id || "")}
            </div>

          </div>

        </div>

        <div class="member-meta">

          <span>Public profile</span>

          <span class="status ${Number(m.due)>0?"due":"paid"}">

            ${
              Number(m.due)>0
                ? "Dues ₹"+Number(m.due)
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


/* =========================================================
   MEMBER DETAILS
========================================================= */

function openMember(id){

  const m=members.find(function(x){
    return String(x.id)===String(id);
  });

  if(!m)return;

  const photo=getPhotoUrl(m.photo);

  const box=document.getElementById("memberDetail");

  if(!box)return;

  box.innerHTML=`

    <div class="member-detail-head">

      <img
        class="detail-avatar"
        src="${photo}"
        alt="${escapeHtml(m.name || "Member")}"
        onerror="this.onerror=null;this.src='assets/member-placeholder.svg';"
      >

      <div>

        <span class="kicker">
          GENERAL MEMBER
        </span>

        <h2>
          ${escapeHtml(m.name || "")}
        </h2>

        <small>
          ${escapeHtml(m.id || "")}
        </small>

      </div>

    </div>

    <table class="detail-table">

      <tr>
        <td>Member ID</td>
        <td>${escapeHtml(m.id || "")}</td>
      </tr>

      <tr>
        <td>Name</td>
        <td>${escapeHtml(m.name || "")}</td>
      </tr>

      <tr>
        <td>Phone</td>
        <td>${escapeHtml(m.phone || "")}</td>
      </tr>

      <tr>
        <td>Email</td>
        <td>${escapeHtml(m.email || "")}</td>
      </tr>

      <tr>
        <td>Payment status</td>
        <td>
          ${
            Number(m.due)>0
              ? "Dues pending"
              : "No dues in current record"
          }
        </td>
      </tr>

    </table>
  `;

  openModal("memberModal");

}


function openAllMembers(){

  document
    .getElementById("members")
    ?.scrollIntoView({
      behavior:"smooth"
    });

}


/* =========================================================
   MONTHS
========================================================= */

function monthList(){

  const out=[];

  let [y,m]=CONFIG.monthsStart
    .split("-")
    .map(Number);

  const [ey,em]=CONFIG.monthsEnd
    .split("-")
    .map(Number);

  while(
    y<ey ||
    (y===ey && m<=em)
  ){

    const value=
      `${y}-${String(m).padStart(2,"0")}`;

    out.push({

      value:value,

      label:new Date(y,m-1,1)
        .toLocaleString("en-IN",{
          month:"long",
          year:"numeric"
        })

    });

    m++;

    if(m>12){
      m=1;
      y++;
    }

  }

  return out;
}


function populateMonths(){

  renderPaymentPage();

}


function renderPaymentPage(){

  const months=monthList();

  const sel=
    document.getElementById("paymentMonth");

  if(sel){

    sel.innerHTML=months.map(function(x){

      return `
        <option value="${x.value}">
          ${x.label}
        </option>
      `;

    }).join("");

  }

  const list=
    document.getElementById("duesList");

  if(list){

    list.innerHTML=months.map(function(x){

      return `
        <label class="due-row">

          <input
            type="checkbox"
            value="${x.value}"
            onchange="updateDuesTotal()"
          >

          <span>
            ${x.label}
          </span>

          <b>
            ₹${CONFIG.membershipAmount}
          </b>

        </label>
      `;

    }).join("");

  }

  updateDuesTotal();

}


function updateDuesTotal(){

  const n=document.querySelectorAll(
    '#duesList input[type="checkbox"]:checked'
  ).length;

  const e=document.getElementById("duesTotal");

  if(e){
    e.textContent=
      "₹"+(n*CONFIG.membershipAmount);
  }

}


function useSelectedDuesForPayment(){

  const selected=[
    ...document.querySelectorAll(
      '#duesList input[type="checkbox"]:checked'
    )
  ].map(function(x){
    return x.value;
  });

  if(!selected.length){

    showToast(
      "Please select at least one pending month."
    );

    return;
  }

  const sel=document.getElementById("paymentMonth");

  if(sel){
    sel.value=selected[0];
  }

  openPayment();

  showToast(
    selected.length===1
      ? "Selected month is ready for payment."
      : "First selected month is ready. Submit each month separately."
  );

}


function updateCurrentMonth(){

  const el=
    document.getElementById("currentMonthLabel");

  if(el){

    el.textContent=
      new Date()
        .toLocaleString("en-IN",{
          month:"long",
          year:"numeric"
        })
        .toUpperCase();

  }

}


/* =========================================================
   PAYMENT PAGE
========================================================= */

function openPayment(){

  renderPaymentPage();

  const p=document.getElementById("paymentPage");

  if(!p)return;

  p.classList.add("open");
  p.setAttribute("aria-hidden","false");

  document.body.classList.add("payment-open");

}


function closePaymentPage(){

  const p=document.getElementById("paymentPage");

  if(!p)return;

  p.classList.remove("open");
  p.setAttribute("aria-hidden","true");

  document.body.classList.remove("payment-open");

}


/* =========================================================
   MODALS
========================================================= */

function openModal(id){

  const el=document.getElementById(id);

  if(!el)return;

  el.classList.add("open");
  el.setAttribute("aria-hidden","false");

}


function closeModal(id){

  const el=document.getElementById(id);

  if(!el)return;

  el.classList.remove("open");
  el.setAttribute("aria-hidden","true");

}


function toggleMenu(){

  document
    .querySelector(".nav nav")
    ?.classList.toggle("mobile-open");

}


function showToast(t){

  const e=document.getElementById("toast");

  if(!e)return;

  e.textContent=t;
  e.classList.add("show");

  clearTimeout(window.toastT);

  window.toastT=setTimeout(function(){

    e.classList.remove("show");

  },3000);

}


/* =========================================================
   PAYMENT SUBMISSION
========================================================= */

async function submitPayment(ev){

  ev.preventDefault();

  const form=ev.target;
  const data=new FormData(form);

  const monthEl=document.getElementById("paymentMonth");

  const months=[
    monthEl?.value
  ].filter(Boolean);

  if(!months.length){

    showToast(
      "Please select at least one month."
    );

    return;
  }

  const file=
    form.screenshot?.files?.[0];

  if(!file){

    showToast(
      "Please upload payment screenshot."
    );

    return;
  }

  const payload={

    action:"submitPayment",

    name:data.get("name"),

    memberId:data.get("memberId"),

    email:data.get("email"),

    phone:data.get("phone"),

    months:months,

    total:
      months.length*
      CONFIG.membershipAmount,

    fileName:file.name,

    mimeType:file.type

  };

  if(CONFIG.appsScriptUrl){

    try{

      payload.fileData=
        await fileToBase64(file);

      const r=await fetch(
        CONFIG.appsScriptUrl,
        {
          method:"POST",
          body:JSON.stringify(payload)
        }
      );

      const j=await r.json();

      if(!j.ok){

        throw new Error(
          j.message || "Payment submission failed"
        );

      }

    }catch(e){

      console.error(e);

      showToast(
        "Submission failed. Check Apps Script setup."
      );

      return;
    }

  }

  form.reset();

  closePaymentPage();

  const adminContent=
    document.getElementById("adminContent");

  if(adminContent){

    adminContent.innerHTML=`

      <div class="modal-head">

        <span class="kicker">
          SUBMITTED
        </span>

        <h2>
          JazakAllah Khair 🤍
        </h2>

        <p>
          Your membership payment request has been
          submitted for admin verification.
          Status: <b>Pending</b>.
        </p>

      </div>

      <button
        class="btn primary"
        onclick="closeModal('adminModal')">
        Done
      </button>

    `;

  }

  openModal("adminModal");

}


function fileToBase64(file){

  return new Promise(function(resolve,reject){

    const reader=new FileReader();

    reader.onload=function(){

      resolve(
        reader.result.split(",")[1]
      );

    };

    reader.onerror=reject;

    reader.readAsDataURL(file);

  });

}


/* =========================================================
   ADMIN
========================================================= */

function openAdmin(){

  const box=document.getElementById("adminContent");

  if(!box)return;

  box.innerHTML=`

    <div class="modal-head">

      <span class="kicker">
        PRIVATE ADMIN
      </span>

      <h2>
        Admin Login
      </h2>

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
          value="${escapeAttr(CONFIG.adminEmail)}"
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


async function adminLogin(ev){

  ev.preventDefault();

  const email=
    document.getElementById("adminEmail")
      ?.value
      .trim();

  const pin=
    document.getElementById("adminPin")
      ?.value;

  if(CONFIG.appsScriptUrl){

    try{

      const r=await fetch(
        CONFIG.appsScriptUrl,
        {
          method:"POST",
          body:JSON.stringify({
            action:"adminLogin",
            email:email,
            pin:pin
          })
        }
      );

      const j=await r.json();

      if(!j.ok){
        throw new Error(
          j.message || "Invalid credentials"
        );
      }

      pendingPayments=
        j.payments || [];

      renderAdmin();

      return;

    }catch(e){

      console.error(e);

      showToast(
        "Admin login failed."
      );

      return;
    }

  }

  showToast(
    "Apps Script is not connected."
  );

}


function renderAdmin(){

  const box=
    document.getElementById("adminContent");

  if(!box)return;

  box.innerHTML=`

    <div class="modal-head">

      <span class="kicker">
        ADMIN DASHBOARD
      </span>

      <h2>
        Verification Center
      </h2>

      <p>
        Payment screenshots are private and should
        only be reviewed here.
      </p>

    </div>

    <div>

      ${
        pendingPayments.length

        ? pendingPayments.map(function(p){

            return `

              <div class="admin-row">

                <div>

                  <b>
                    ${escapeHtml(p.name || "")}
                  </b>

                  <small>
                    ${escapeHtml(p.memberId || "")}
                    •
                    ${escapeHtml(p.months || "")}
                  </small>

                </div>

                <div class="actions">

                  <button
                    class="small-btn approve"
                    onclick="verifyPayment('${escapeAttr(p.id)}','approved')">
                    Approve
                  </button>

                  <button
                    class="small-btn reject"
                    onclick="verifyPayment('${escapeAttr(p.id)}','rejected')">
                    Reject
                  </button>

                </div>

              </div>

            `;

          }).join("")

        : `
          <div class="quote-card">
            <p>No pending payments.</p>
          </div>
        `
      }

    </div>
  `;

}


async function verifyPayment(id,status){

  if(!CONFIG.appsScriptUrl){

    showToast(
      "Apps Script is not connected."
    );

    return;
  }

  try{

    const r=await fetch(
      CONFIG.appsScriptUrl,
      {
        method:"POST",
        body:JSON.stringify({
          action:"verifyPayment",
          id:id,
          status:status
        })
      }
    );

    const j=await r.json();

    if(!j.ok){
      throw new Error(
        j.message || "Update failed"
      );
    }

    pendingPayments=
      pendingPayments.filter(function(x){
        return x.id!==id;
      });

    renderAdmin();

    showToast("Updated.");

  }catch(e){

    console.error(e);

    showToast(
      "Could not update payment."
    );

  }

}


/* =========================================================
   LOAD GOOGLE SHEET DATA
========================================================= */

async function loadRemoteData(){

  try{

    const r=await fetch(
      CONFIG.appsScriptUrl+
      "?action=bootstrap",
      {
        cache:"no-store"
      }
    );

    const j=await r.json();

    if(!j.ok){

      console.warn(
        "Backend error:",
        j.message
      );

      return;
    }

    /*
      GENERAL MEMBERS
    */

    if(
      Array.isArray(j.members) &&
      j.members.length
    ){

      members=j.members.map(function(m){

        return {

          id:String(m.id || ""),

          name:String(m.name || ""),

          email:String(m.email || ""),

          phone:String(m.phone || ""),

          photo:getPhotoUrl(m.photo),

          paid:Number(m.paid || 0),

          due:Number(m.due || 0)

        };

      });

    }


    /*
      TRUST MEMBERS

      Code.gs must return j.trust.
    */

    if(
      Array.isArray(j.trust) &&
      j.trust.length
    ){

      trustMembers=j.trust.map(function(m){

        return {

          id:String(m.id || ""),

          role:String(m.role || ""),

          name:String(m.name || ""),

          email:String(m.email || ""),

          phone:String(m.phone || ""),

          photo:getPhotoUrl(m.photo)

        };

      });

    }


    /*
      BOOKS
    */

    if(Array.isArray(j.books)){

      books=j.books;

    }


    renderMembers();
    renderTrust();
    renderBooks();

  }catch(e){

    console.warn(
      "Remote data unavailable:",
      e
    );

  }

}


/* =========================================================
   BOOKS
========================================================= */

function renderBooks(){

  const grid=
    document.getElementById("booksGrid");

  if(!grid)return;

  if(!books.length){

    grid.innerHTML="";

    return;
  }

  grid.innerHTML=books.map(function(b){

    return `

      <article class="book-card">

        <div class="book-cover">
          PDF
        </div>

        <div>

          <span>
            ${escapeHtml(b.category || "BOOK")}
          </span>

          <h3>
            ${escapeHtml(b.title || "")}
          </h3>

          <p>
            ${
              escapeHtml(
                b.description ||
                "Islamic book / PDF resource"
              )
            }
          </p>

          <a
            class="text-btn"
            href="${escapeAttr(b.url || "#")}"
            target="_blank"
            rel="noopener">
            Read book →
          </a>

        </div>

      </article>

    `;

  }).join("");

}


/* =========================================================
   SAFE HTML HELPERS
========================================================= */

function escapeHtml(value){

  return String(value ?? "")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");

}


function escapeAttr(value){

  return escapeHtml(value);

}
