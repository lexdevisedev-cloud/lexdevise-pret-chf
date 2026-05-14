"use client";

interface ReportProps {
  nom: string;
  email: string;
  telephone: string;
  banque: string;
  dateDebut: string;
  montantCredit: string;
  duree: string;
  borneBasse: number;
  borneHaute: number;
}

function fmtPDF(v: number): string {
  return String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " EUR";
}

function formatMonth(ym: string): string {
  if (!ym) return "";
  const [year, month] = ym.split("-");
  const months = [
    "janvier","février","mars","avril","mai","juin",
    "juillet","août","septembre","octobre","novembre","décembre",
  ];
  const idx = parseInt(month, 10) - 1;
  return `${months[idx] ?? month} ${year}`;
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
}

export default function SimulationReportDownload({
  nom, email, telephone, banque, dateDebut, montantCredit, duree, borneBasse, borneHaute,
}: ReportProps) {
  async function generate() {
    const { jsPDF } = await import("jspdf");

    const doc = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
    const W = 210;
    const M = 18;
    const CW = W - M * 2;

    const today = new Date().toLocaleDateString("fr-FR", {
      day: "numeric", month: "long", year: "numeric",
    });
    const todayISO = new Date().toISOString().slice(0, 10);

    // ── PAGE 1 ─────────────────────────────────────────────────────────────

    // Header bar
    doc.setFillColor(18, 61, 46);
    doc.rect(0, 0, W, 22, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(255, 255, 255);
    doc.text("Prets CHF Info", M, 14);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(200, 220, 210);
    doc.text("Genere le " + today, W - M, 14, { align: "right" });

    let y = 34;

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(18, 61, 46);
    doc.text("Rapport d'estimation indicative", M, y);
    y += 7;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(95, 111, 104);
    doc.text("Pret immobilier en francs suisses / indexe CHF", M, y);
    y += 6;
    doc.setDrawColor(220, 231, 225);
    doc.setLineWidth(0.4);
    doc.line(M, y, W - M, y);
    y += 9;

    // Info section label
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(26, 92, 66);
    doc.text("INFORMATIONS DU DOSSIER", M, y);
    y += 5;

    const rows: [string, string][] = [
      ["Nom et prenom", nom],
      ["Email", email],
      ["Telephone", telephone],
      ["Banque preteuse", banque],
      ["Date de debut du pret", formatMonth(dateDebut)],
      ["Montant du credit", String(Math.round(Number(montantCredit))).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " EUR"],
      ["Duree du credit", duree + " ans"],
      ["Date de generation", today],
    ];

    const ROW_H = 7;
    rows.forEach(([label, value], i) => {
      const ry = y + i * ROW_H;
      if (i % 2 === 0) {
        doc.setFillColor(247, 250, 248);
        doc.rect(M, ry - 4.5, CW, ROW_H, "F");
      }
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(95, 111, 104);
      doc.text(label, M + 2, ry);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(16, 32, 26);
      doc.text(value, M + 60, ry);
    });

    y += rows.length * ROW_H + 10;

    // Estimation block
    doc.setFillColor(18, 61, 46);
    doc.roundedRect(M, y, CW, 32, 3, 3, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(150, 200, 175);
    doc.text("ESTIMATION INDICATIVE", M + CW / 2, y + 8, { align: "center" });
    doc.setFont("helvetica", "bold");
    doc.setFontSize(19);
    doc.setTextColor(255, 255, 255);
    doc.text(fmtPDF(borneBasse) + " a " + fmtPDF(borneHaute), M + CW / 2, y + 20, { align: "center" });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(170, 210, 190);
    doc.text("Fourchette indicative basee sur les informations saisies.", M + CW / 2, y + 28, { align: "center" });
    y += 38;

    // Warning box
    doc.setFillColor(255, 251, 235);
    doc.setDrawColor(210, 170, 60);
    doc.setLineWidth(0.5);
    doc.roundedRect(M, y, CW, 26, 2, 2, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(140, 100, 20);
    doc.text("Point de prudence", M + 4, y + 7);
    const warnText =
      "Cette estimation ne constitue pas un prejudice certain. Elle ne remplace pas l'analyse du contrat, des documents bancaires, des notices d'information, des simulations eventuellement remises et de la situation personnelle de l'emprunteur.";
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(100, 70, 10);
    const warnLines = doc.splitTextToSize(warnText, CW - 8);
    doc.text(warnLines, M + 4, y + 14);
    y += 32;

    // "Ce que signifie" block
    doc.setFillColor(220, 231, 225);
    doc.roundedRect(M, y, CW, 26, 2, 2, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(18, 61, 46);
    doc.text("Ce que cette estimation signifie", M + 4, y + 7);
    const signText =
      "Le montant affiche correspond a un ordre de grandeur indicatif. Il permet d'identifier si le dossier merite une premiere verification, mais ne permet pas de conclure seul a l'existence d'un recours, d'une indemnisation ou d'une restitution.";
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(16, 32, 26);
    const signLines = doc.splitTextToSize(signText, CW - 8);
    doc.text(signLines, M + 4, y + 15);

    // Footer page 1
    doc.setDrawColor(220, 231, 225);
    doc.setLineWidth(0.3);
    doc.line(M, 282, W - M, 282);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(95, 111, 104);
    doc.text(
      "Document confidentiel - Estimation indicative - Ne constitue pas un avis juridique personnalise",
      W / 2, 288, { align: "center" }
    );
    doc.text("1 / 2", W - M, 288, { align: "right" });

    // ── PAGE 2 ─────────────────────────────────────────────────────────────
    doc.addPage();

    // Header bar
    doc.setFillColor(18, 61, 46);
    doc.rect(0, 0, W, 22, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(255, 255, 255);
    doc.text("Prets CHF Info", M, 14);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(200, 220, 210);
    doc.text(nom.slice(0, 40) + " - " + today, W - M, 14, { align: "right" });

    y = 34;

    // Page 2 title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.setTextColor(18, 61, 46);
    doc.text("Points a verifier dans votre dossier", M, y);
    y += 5;
    doc.setDrawColor(220, 231, 225);
    doc.setLineWidth(0.4);
    doc.line(M, y, W - M, y);
    y += 9;

    // 3 blocks
    const blocks = [
      {
        title: "1. La structure du pret",
        text: "Verifier si le pret est libelle en francs suisses, remboursable en CHF ou indexe sur le franc suisse.",
      },
      {
        title: "2. L'information recue avant signature",
        text: "Rechercher les notices, simulations, exemples chiffres ou documents expliquant le risque de change.",
      },
      {
        title: "3. La situation du bien finance",
        text: "Identifier si le bien est situe en France, s'il a ete revendu, ou si un remboursement anticipe a ete envisage.",
      },
    ];

    blocks.forEach((block) => {
      const bH = 22;
      doc.setFillColor(247, 250, 248);
      doc.setDrawColor(220, 231, 225);
      doc.setLineWidth(0.3);
      doc.roundedRect(M, y, CW, bH, 2, 2, "FD");
      doc.setFillColor(26, 92, 66);
      doc.rect(M, y, 3, bH, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(18, 61, 46);
      doc.text(block.title, M + 7, y + 8);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(16, 32, 26);
      const bLines = doc.splitTextToSize(block.text, CW - 10);
      doc.text(bLines, M + 7, y + 15);
      y += bH + 5;
    });

    y += 3;

    // Documents section
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(18, 61, 46);
    doc.text("Documents a reunir", M, y);
    y += 7;

    const docList = [
      "Offre de pret originale",
      "Conditions particulieres et generales",
      "Notice d'information",
      "Simulations chiffrees remises",
      "Tableaux d'amortissement",
      "Avenants ou renegociations",
      "Courriers et emails avec la banque",
      "Documents de revente ou remboursement anticipe",
      "Justificatifs de revenus a la souscription",
    ];

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(16, 32, 26);
    const half = Math.ceil(docList.length / 2);
    const col1 = docList.slice(0, half);
    const col2 = docList.slice(half);
    const startY = y;
    col1.forEach((item, i) => { doc.text("- " + item, M, startY + i * 5.5); });
    col2.forEach((item, i) => { doc.text("- " + item, M + CW / 2 + 2, startY + i * 5.5); });
    y = startY + Math.max(col1.length, col2.length) * 5.5 + 8;

    // CTA block
    doc.setFillColor(220, 231, 225);
    doc.roundedRect(M, y, CW, 30, 2, 2, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(18, 61, 46);
    doc.text("Prochaine etape", M + 4, y + 8);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(16, 32, 26);
    const ctaLines = doc.splitTextToSize(
      "Comparer les informations du contrat avec les criteres d'eligibilite et la jurisprudence recente.",
      CW - 8
    );
    doc.text(ctaLines, M + 4, y + 15);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(26, 92, 66);
    doc.text("Tester les criteres d'eligibilite : pretschfinfo.fr/eligibilite", M + 4, y + 22.5);
    doc.text("Comprendre la jurisprudence : pretschfinfo.fr/jurisprudence", M + 4, y + 27.5);
    y += 36;

    // RGPD mention
    doc.setFont("helvetica", "italic");
    doc.setFontSize(7);
    doc.setTextColor(95, 111, 104);
    const rgpdLines = doc.splitTextToSize(
      "Ce document est genere a partir des informations saisies par l'utilisateur. Il est destine a un usage personnel et confidentiel.",
      CW
    );
    doc.text(rgpdLines, M, y);

    // Footer page 2
    doc.setDrawColor(220, 231, 225);
    doc.setLineWidth(0.3);
    doc.line(M, 282, W - M, 282);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(95, 111, 104);
    doc.text(
      "Document confidentiel - Estimation indicative - Ne constitue pas un avis juridique personnalise",
      W / 2, 288, { align: "center" }
    );
    doc.text("2 / 2", W - M, 288, { align: "right" });

    // Save
    const slug = slugify(nom);
    const filename = slug
      ? `rapport-estimation-pret-chf-${slug}-${todayISO}.pdf`
      : "rapport-estimation-pret-chf.pdf";
    doc.save(filename);
  }

  return (
    <div className="sim-pdf-wrap">
      <button
        type="button"
        className="sim-btn-pdf"
        onClick={generate}
        aria-label="Télécharger mon rapport simplifié au format PDF"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ flexShrink: 0 }}
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Télécharger mon rapport simplifié
      </button>
      <p className="sim-pdf-mention">
        Rapport indicatif généré à partir des informations saisies. Ne constitue pas un avis
        juridique, bancaire ou comptable.
      </p>
      <p className="sim-pdf-rgpd">
        Le rapport est généré localement à partir des informations saisies.
      </p>
    </div>
  );
}
