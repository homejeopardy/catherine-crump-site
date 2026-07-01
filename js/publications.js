/* =========================================================
   Publications data + renderer
   To add a publication, add an object to the array below.
   category: "book" | "article" | "press"
   links: [{label: "Link"|"PDF", url: "..."}]  (url:null => shown as
          a disabled placeholder button you can fill in later)
   ========================================================= */

const PUBLICATIONS = [
  /* ---------------- Books & Book Chapters ---------------- */
  {
    category: "book",
    year: "2025",
    title: "Reforming Policing from the White House: The Challenges of Implementing Police Reform Through Executive Order",
    authors: "Catherine Crump",
    cite: "Research Handbook on Penal Policy (Alessandro Corda ed., 2025) (forthcoming book contribution)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "book",
    year: "2022",
    title: "Handout for Flash Talk — The Landscape Post-Carpenter",
    authors: "Catherine Crump",
    cite: "Conference materials (2022)",
    links: [{ label: "PDF", url: null }],
  },

  /* ---------------- Articles ---------------- */
  {
    category: "article",
    year: "2021",
    title: "Why 72 Intellectual Property Scholars Supported Google’s Copyrightability Analysis in the Oracle Case",
    authors: "Pamela Samuelson & Catherine Crump",
    cite: "36 Berkeley Tech. L.J. 413 (2021)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "article",
    year: "2019",
    title: "Tracking the Trackers: An Examination of Electronic Monitoring of Youth in Practice",
    authors: "Catherine Crump",
    cite: "53 UC Davis L. Rev. 795 (2019)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "article",
    year: "2017",
    title: "Privacy Protection in Online Multimedia",
    authors: "Yung-Hsiang Lu, Andrea Cavallaro, Catherine Crump, Gerald Friedland & Keith Winstein",
    cite: "Proc. of the 25th ACM Int’l Conf. on Multimedia (ACM MM’17) 457 (2017)",
    links: [{ label: "PDF", url: null }],
  },
  {
    category: "article",
    year: "2017",
    title: "Electronic Monitoring of Youth in the California Justice System",
    authors: "Catherine Crump, Christina Koningisor, Rena Coen & Chieh Tung; Samuelson Law, Technology & Public Policy Clinic (UC Berkeley School of Law) & East Bay Community Law Center",
    cite: "2017",
    links: [{ label: "PDF", url: null }],
  },
  {
    category: "article",
    year: "2016",
    title: "Surveillance Policy Making by Procurement",
    authors: "Catherine Crump",
    cite: "91 Wash. L. Rev. 1595 (2016)",
    links: [{ label: "PDF", url: null }],
  },
  {
    category: "article",
    year: "2016",
    title: "No Tape, No Testimony: How Courts Can Ensure the Responsible Use of Body Cameras",
    authors: "Catherine Crump; Samuelson Law, Technology & Public Policy Clinic & ACLU of Massachusetts",
    cite: "2016",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "article",
    year: "2011",
    title: "Protecting Privacy from Aerial Surveillance: Recommendations for Government Use of Drone Aircraft",
    authors: "Catherine Crump & Jay Stanley",
    cite: "ACLU (2011)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "article",
    year: "2003",
    title: "Data Retention: Privacy, Anonymity, and Accountability Online",
    authors: "Catherine Crump",
    cite: "56 Stan. L. Rev. 191 (2003)",
    links: [{ label: "Link", url: null }],
  },

  /* ---------------- Popular Press ---------------- */
  {
    category: "press",
    year: "2020",
    title: "Stop monitoring emails between inmates and their lawyers",
    authors: "Catherine Crump & Ken White",
    cite: "Washington Post (June 2020)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "press",
    year: "2020",
    title: "Op-Ed: Lawyers can’t visit clients in prison, so quit monitoring their emails",
    authors: "Catherine Crump & Ken White",
    cite: "Los Angeles Times (June 2020)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "press",
    year: "2018",
    title: "A win for digital privacy — but that’s just the tip of the government surveillance iceberg",
    authors: "Catherine Crump & Megan Graham",
    cite: "San Francisco Chronicle (July 2018)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "press",
    year: "2017",
    title: "Clerkships are invaluable for young lawyers. They can also be a setup for abuse",
    authors: "Catherine Crump",
    cite: "Washington Post (Dec. 2017)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "press",
    year: "2017",
    title: "Electronic monitoring isn’t kid-friendly",
    authors: "Catherine Crump, Kate Weisburd & Christina Koningisor",
    cite: "Sacramento Bee (July 2017)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "press",
    year: "2016",
    title: "Police Should Be Required To Dashcam Everything",
    authors: "Catherine Crump",
    cite: "Slate (2016)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "press",
    year: "2016",
    title: "It’s Important for SF to Get Body-Camera Rules for Police Right",
    authors: "Catherine Crump",
    cite: "San Francisco Chronicle (2016)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "press",
    year: "2016",
    title: "Citizens Need More Say over Police Surveillance Technology",
    authors: "Catherine Crump",
    cite: "San Francisco Chronicle (2016)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "press",
    year: "2014",
    title: "Invasion of the Data Snatchers: Big Data and the Internet of Things Means the Surveillance of Everything",
    authors: "Catherine Crump & Matthew Harwood",
    cite: "TomDispatch (2014)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "press",
    year: "2014",
    title: "A Cop May Be Following You Everywhere",
    authors: "Catherine Crump",
    cite: "CNN (2014)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "press",
    year: "2013",
    title: "You Are Being Tracked: How License Plate Readers Are Being Used to Record Americans’ Movements",
    authors: "Catherine Crump",
    cite: "ACLU (2013)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "press",
    year: "2013",
    title: "Why Americans Are Saying No to Domestic Drones",
    authors: "Catherine Crump & Jay Stanley",
    cite: "Slate (2013)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "press",
    year: "2013",
    title: "The Vast, Troubling Call Database Drug Agents Use to Identify Burner Phones",
    authors: "Catherine Crump",
    cite: "Slate (2013)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "press",
    year: "2013",
    title: "Cell Phone Companies Reveal How Often They Hand Your Data Over to Law Enforcement",
    authors: "Catherine Crump",
    cite: "Slate (2013)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "press",
    year: "2013",
    title: "The Best Week for Privacy In a Long Time",
    authors: "Catherine Crump",
    cite: "CNN (2013)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "press",
    year: "2012",
    title: "The GPS Act Supports Legitimate Investigations and Protects Privacy",
    authors: "Catherine Crump",
    cite: "U.S. News & World Report (2012)",
    links: [{ label: "Link", url: null }],
  },
  {
    category: "press",
    year: "2011",
    title: "How GPS Tracking Threatens Our Privacy",
    authors: "Catherine Crump",
    cite: "CNN (2011)",
    links: [{ label: "PDF", url: null }],
  },
  {
    category: "press",
    year: "2010",
    title: "Court Rulings Unreasonably Silence Student Speech",
    authors: "Catherine Crump",
    cite: "Knoxville News-Sentinel (2010)",
    links: [{ label: "PDF", url: null }],
  },
];

const GROUPS = [
  { key: "book", label: "Books & Book Chapters" },
  { key: "article", label: "Articles" },
  { key: "press", label: "Popular Press" },
];

function pubLinkHtml(link) {
  if (link.url) {
    const isPdf = /pdf/i.test(link.label);
    const rel = isPdf ? "" : ' rel="noopener"';
    return `<a class="pub-link" href="${link.url}" target="_blank"${rel}>${link.label} →</a>`;
  }
  return `<span class="pub-link" aria-disabled="true" title="URL not yet added">${link.label}</span>`;
}

function pubHtml(p) {
  const links = (p.links || []).map(pubLinkHtml).join("");
  return `
    <article class="pub" data-category="${p.category}">
      <div class="pub-year">${p.year}</div>
      <div class="pub-body">
        <h3 class="pub-title">${p.title}</h3>
        <p class="pub-authors">${p.authors}</p>
        <p class="pub-cite">${p.cite}</p>
        <div class="pub-links">${links}</div>
      </div>
    </article>`;
}

function renderPublications(filter = "all") {
  const root = document.getElementById("pub-root");
  if (!root) return;
  let html = "";
  GROUPS.forEach((g) => {
    if (filter !== "all" && filter !== g.key) return;
    const items = PUBLICATIONS.filter((p) => p.category === g.key);
    if (!items.length) return;
    html += `<section class="pub-group" id="group-${g.key}">
      <h2>${g.label} <span class="pub-count">(${items.length})</span></h2>
      ${items.map(pubHtml).join("")}
    </section>`;
  });
  root.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  renderPublications("all");

  const controls = document.getElementById("pub-controls");
  if (controls) {
    controls.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      controls.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderPublications(btn.dataset.filter);
    });
  }
});
